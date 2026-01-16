import React, { Fragment, useState, useEffect } from "react";

import DateTimeSection from "./DateTimeSection";
import LocationSection from "./LocationSection";
import TabsComponent from "../Containers/TabsComponent";
import EventVisibility from "./EventVisibility";
import RegistrantsSection from "./RegistrantsSection";
import NotificationsSection from "./NotificationsSection";
import FiltersSection from "./FiltersSection";
import TicketsSection from "./TicketsSection";
import apiFetch from "@wordpress/api-fetch";
import CustomFieldsSection from "./CustomFieldsSection";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../Menu/Spinner";
import axios from "axios";
import { useServvStore } from "../../store/useServvStore";
import { useServvData } from "../Pages/Events/useServvData";

const EventDetails = ({
  title,
  agenda,
  attributes,
  setAttributes,
  postID = null,
  occurrenceId = null,
  adminSection = false,
  handleSetLoading = () => {},
  removeBlock = () => {},
  returnWithError = () => {},
  filters = null,
  settingsData = null,
  requiredFieldsNotification = false,
  hideReqieredFieldsNotification = () => {},
}) => {
  const {
    fetchSettings,
    fetchCalendarAccount,
    fetchZoomAccount,
    fetchStripeAccount,
    fetchGmailAccount,
    fetchAllFilters,
    fetchEventTickets,
    fetchEventData,
    fetchEventRegistrants,
    deleteRegistrant,
    resendRegistrantNotification,
    resendAllNotifications,
  } = useServvData();

  let eventDetails = { ...attributes.meeting };
  const [postId, setPostId] = useState(null);
  let [settings, setSettings] = useState(null);
  const [status, setStatus] = useState(null);
  const [registrants, setRegistrants] = useState([]);
  const [googleCalendar, setGoogleCalendar] = useState(null);
  const [calendarAccountFetched, setCalendarAccountFetched] = useState(false);
  const [mailAccountFetched, setMailAccountFetched] = useState(null);
  const [connectedMailAccount, setConnectedMailAccount] = useState(null);
  const [zoomAccount, setZoomAccount] = useState(null);
  const [stripeAccount, setStripeAccount] = useState(null);
  const [filtersList, setFiltersList] = useState({});
  const [activationError, setActivationError] = useState(false);
  const [loading, setLoading] = useState(false);

  const setToastMessage = (val) => {
    toast(val, {
      autoClose: 5000,
    });
  };

  const getAccountsInfo = async () => {
    setLoading(true);

    const isPro =
      settings?.current_plan?.id === 2 || settings?.current_plan?.id === 3;

    const { stripeAccount, zoomAccount, googleCalendar, mailAccount } =
      useServvStore.getState();

    if (stripeAccount) setStripeAccount(stripeAccount);
    if (zoomAccount) setZoomAccount(zoomAccount);
    if (googleCalendar) setGoogleCalendar(googleCalendar);
    if (mailAccount) setConnectedMailAccount(mailAccount);

    setCalendarAccountFetched(!!googleCalendar);
    setMailAccountFetched(!!mailAccount);

    try {
      if (!isPro) {
        fetchCalendarAccount().then((res) => {
          setGoogleCalendar(res);
          useServvStore.setState({ googleCalendar: res });
          setCalendarAccountFetched(true);
        });
      } else {
        fetchStripeAccount().then((res) => {
          setStripeAccount(res);
          useServvStore.setState({ stripeAccount: res });
        });

        fetchZoomAccount().then((res) => {
          setZoomAccount(res);
          useServvStore.setState({ zoomAccount: res });
        });

        fetchCalendarAccount().then((res) => {
          setGoogleCalendar(res);
          useServvStore.setState({ googleCalendar: res });
          setCalendarAccountFetched(true);
        });

        fetchGmailAccount().then((res) => {
          setConnectedMailAccount(res);
          useServvStore.setState({ mailAccount: res });
          setMailAccountFetched(true);
        });
      }
    } catch (e) {
      console.error("Accounts info error", e);
    }

    setLoading(false);
  };

  const handleNextRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber + 1);
  };
  const handlePrevRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber - 1);
  };

  const getSettings = async () => {
    try {
      const data = await fetchSettings({ adminSection, settingsData });
      if (data) {
        setSettings(data);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (e.status === 401) setActivationError(true);
    }
  };

  const getFilters = async () => {
    setLoading(true);
    try {
      const allFilters = await fetchAllFilters({
        filtersProp: filters,
        settings,
      });
      setFiltersList(allFilters);
    } catch (e) {
      console.error("Error fetching filters:", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      !postId &&
      settings &&
      settings.settings &&
      settings.settings.admin_dashboard
    ) {
      const {
        default_start_time,
        default_duration,
        default_event_type,
        default_quantity,
      } = settings.settings.admin_dashboard;
      let newStartTime = null;
      if (default_start_time) {
        newStartTime = moment(default_start_time, "hh:mm a");
        handleEventChange(
          "startTime",
          newStartTime.format("YYYY-MM-DDTHH:mm:ss")
        );
      }
      if (default_duration) {
        handleEventChange("duration", default_duration * 60);
      }
      if (default_event_type) {
        handleEventChange("location", default_event_type);
      }
      if (settings.current_plan.id === 1) {
        if (default_quantity) {
          handleProductChange("quantity", Number.parseInt(default_quantity));
        } else {
          handleProductChange("quantity", 1);
        }
      }
    }
  }, [settings]);

  const [tabsList, setTabsList] = useState([
    { label: "Details", value: 0 },
    { label: "Settings", value: 1 },
    { label: "Registrants", value: 2 },
  ]);
  const [selectedTab, setSelectedTab] = useState(0);

  const getEventData = async () => {
    const {
      postId: resolvedPostId,
      status: postStatus,
      attributes: newAttributes,
      hasRecurrenceTab,
      notFoundError,
    } = await fetchEventData({
      postIDProp: postID,
      occurrenceId,
      adminSection,
    });

    if (
      notFoundError &&
      adminSection &&
      notFoundError.message === "Post doesn't exist"
    ) {
      returnWithError(notFoundError.message);
      return null;
    }

    if (resolvedPostId) {
      setPostId(resolvedPostId);
    }

    if (!adminSection) {
      setStatus(postStatus);
    }

    if (hasRecurrenceTab) {
      setTabsList([
        { label: "Details", value: 0 },
        { label: "Settings", value: 1 },
      ]);
    } else if (!adminSection) {
      setTabsList([
        { label: "Details", value: 0 },
        { label: "Settings", value: 1 },
      ]);
    }

    if (newAttributes) {
      setAttributes(newAttributes);
    }

    return resolvedPostId;
  };

  const [registrantsPagination, setRegistrantsPagination] = useState({});

  const getEventRegistrants = async (page = 1, id = null) => {
    setLoading(true);
    const post = id || postID;

    try {
      const { registrants: fetchedRegs, pagination } =
        await fetchEventRegistrants({
          postID: post,
          page,
          occurrenceId,
        });

      let registrantsForEdit = registrants.filter((reg) => reg.status);
      let registrantsForShow = fetchedRegs.concat(registrantsForEdit);

      setRegistrants(registrantsForShow || []);
      setRegistrantsPagination(pagination);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  const handleDeleteMultipleRegistrants = async (selectedRegistrants) => {
    const results = [];

    for (const id of selectedRegistrants) {
      try {
        const value = await deleteRegistrant({ postID, registrantID: id });
        results.push({ status: "fulfilled", value });
      } catch (reason) {
        results.push({ status: "rejected", reason });
      }
    }
    getEventRegistrants();

    return results;
  };

  const removeRegistrant = async (registrantID) => {
    setLoading(true);
    let res = await deleteRegistrant({ postID, registrantID });
    setLoading(false);
    if (res) {
      getEventRegistrants();
    }
  };

  const getEventFullInfo = async () => {
    setLoading(true);
    const id = await getEventData();
    await getFilters();
    await getAccountsInfo();

    if (id && adminSection) {
      await getEventRegistrants(1, id);
      if (adminSection && settings && settings.current_plan.id === 2) {
        const tickets = await fetchEventTickets({ postId: id, occurrenceId });
        setAttributes({ tickets });
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!adminSection) {
      setTabsList([
        { label: "Details", value: 0 },
        { label: "Settings", value: 1 },
      ]);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setAttributes({ registrants: [] });
    getSettings();
  }, []);

  useEffect(() => {
    if (settings) getEventFullInfo();
  }, [settings]);

  const productDetails = { ...attributes.product };
  const notifications = { ...attributes.notifications };
  const customFields = { ...attributes.custom_fields };
  const types = { ...attributes.types };
  const tickets = [...(attributes?.tickets ?? [])];

  const [selectedRegistrants, setSelectedRegistrants] = useState([]);
  const handleSelectRegistrants = (id) => {
    let currentRegistrants = [...selectedRegistrants];

    if (currentRegistrants.indexOf(id) >= 0) {
      currentRegistrants = currentRegistrants.filter((reg) => reg !== id);
    } else {
      currentRegistrants.push(id);
    }
    setSelectedRegistrants(currentRegistrants);
  };

  const handleRegistrantsChange = (registrant) => {
    let currentRegistrants = registrants;
    if (registrant) {
      if (registrant.status === "create") {
        currentRegistrants.push(registrant);
      } else {
        currentRegistrants = currentRegistrants.filter(
          (reg) => reg.tempId !== registrant.tempId
        );
      }
      setRegistrants(currentRegistrants);
      setAttributes({
        registrants: currentRegistrants.map((reg) => {
          if (reg.id)
            return {
              id: reg.id,
              first_name: reg.firstName,
              last_name: reg.lastName,
              email: reg.email,
            };
          else
            return {
              first_name: reg.firstName,
              last_name: reg.lastName,
              email: reg.email,
              status: reg.status,
            };
        }),
      });
    }
  };

  const handleEventChange = (field, value) => {
    const meeting = attributes.meeting;
    const customFields = attributes.custom_fields || {};
    meeting[field] = value;

    if (field === "recurrence" && value !== null) {
      if (meeting.location === "offline") {
        meeting.eventType = 2;
      } else if (meeting.location === "zoom") {
        meeting.eventType = 8;
      }
    } else if (field === "recurrence" && value === null) {
      if (meeting.location === "offline") {
        meeting.eventType = 1;
      } else if (meeting.location === "zoom") {
        meeting.eventType = 2;
      }
    }
    if (field === "location") {
      if (value === "zoom") {
        if (meeting.recurrence) {
          meeting.eventType = 8;
        } else meeting.eventType = 2;
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
      }
    }
    setAttributes({
      meeting: { ...meeting },
      custom_fields: { ...customFields },
    });
  };

  const handleTypesChange = (field, value) => {
    const types = { ...attributes.types };
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      types[field] = undefined;
    } else {
      types[field] = value;
    }
    setAttributes({ types });
  };

  const handleNotificationsChange = (field, value) => {
    const notifications = attributes.notifications;
    notifications[field] = value;
    setAttributes({ notifications: { ...notifications } });
  };

  useEffect(() => {
    handleEventChange("title", title);
  }, [title]);
  useEffect(() => {
    handleEventChange("agenda", agenda);
  }, [agenda]);

  const handleSelectChange = (val) => {
    setSelectedTab(val);
  };

  const handleProductChange = (field, value) => {
    const product = attributes.product;
    product[field] = value;
    setAttributes({ product: { ...product } });
  };

  const handleCustomFieldsChange = (field, value) => {
    const customFields = attributes.custom_fields;
    customFields[field] = value;
    setAttributes({ custom_fields: { ...customFields } });
  };

  const handleResendNotifications = async (registrantsList) => {
    for (const id of registrantsList) {
      try {
        await resendRegistrantNotification({
          postID,
          registrantID: id,
          occurrenceId,
        });
        toast("Email notifications are successfully resent", {
          autoClose: 5000,
        });
      } catch (error) {
        console.error(
          `Failed to resend notification to registrant ${id}:`,
          error
        );
        toast(
          `Failed to resend notification to registrant ${
            registrants.filter((reg) => reg.id === id)[0]?.email
          }:`,
          {
            autoClose: 5000,
          }
        );
      }
    }
  };

  const handleResendNotificationsToAll = async () => {
    try {
      const res = await resendAllNotifications({ postID, occurrenceId });
      if (res && res.status === 200) {
        toast("Email notifications have been resent.");
      }
    } catch (e) {
      toast("Servv was unable to resend notifications. Please try again.");
    }
  };

  const handleTicketsChange = (tickets) => {
    setAttributes({ tickets: tickets });
    const quantity = tickets.reduce(
      (totalQuantity, ticket) => totalQuantity + ticket.quantity,
      0
    );

    if (quantity > 0) {
      handleProductChange("quantity", quantity);
    }
  };

  const [emptyFilters, setEmptyFilters] = useState(false);
  useEffect(() => {
    const isFiltersEmpty =
      !filtersList ||
      (filtersList &&
        filtersList.categories &&
        filtersList.categories.length === 0 &&
        filtersList &&
        filtersList.members &&
        filtersList.members.length === 0 &&
        filtersList &&
        filtersList.languages &&
        filtersList.languages.length === 0);
    if (isFiltersEmpty) {
      setEmptyFilters(true);
    }
  }, [filtersList]);

  const isBillingPlanRestriction =
    occurrenceId || settings?.current_plan.id !== 2;

  return (
    <div className="relative">
      <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {loading && <Spinner loading={true} />}
      </div>
      <div className={`${loading ? "loading" : ""}`}>
        <ToastContainer position="bottom-right" />
        <TabsComponent
          tabsList={tabsList}
          selected={selectedTab}
          handleSelectChange={handleSelectChange}
        />
        {selectedTab === 0 && !activationError && (
          <Fragment>
            <DateTimeSection
              eventDetails={eventDetails}
              occurrenceId={occurrenceId}
              onChange={handleEventChange}
              settings={settings}
              adminSection={adminSection}
              setToast={setToastMessage}
            />
            <LocationSection
              eventDetails={eventDetails}
              onChange={handleEventChange}
              settings={settings}
              disabled={
                !zoomAccount ||
                (zoomAccount && zoomAccount.length === 0) ||
                adminSection ||
                status === "publish"
              }
              meetingType={
                eventDetails && eventDetails.location
                  ? eventDetails.location
                  : settings &&
                    settings.settings.admin_dashboard.default_event_type
                  ? settings.settings.admin_dashboard.default_event_type
                  : "offline"
              }
              customFields={customFields}
              handleCustomFieldChange={handleCustomFieldsChange}
              zoomAccount={zoomAccount}
              types={types}
              onFilterChange={handleTypesChange}
              filtersList={filtersList}
            />

            <TicketsSection
              adminSection={adminSection}
              tickets={tickets}
              eventDetails={eventDetails}
              onTicketsChange={handleTicketsChange}
              productDetails={productDetails}
              id={postId}
              handleDetailsChange={handleProductChange}
              settings={settings}
              postId={postId}
              disabled={
                settings?.current_plan.id !== 2 &&
                settings?.current_plan.id !== 3
              }
              handleSetLoading={handleSetLoading}
              stripeAccount={stripeAccount}
              occurrenceId={occurrenceId}
              status={status}
            />

            {emptyFilters !== undefined && emptyFilters === false && (
              <FiltersSection
                types={types}
                onChange={handleTypesChange}
                filtersList={filtersList}
              />
            )}

            <CustomFieldsSection
              customFields={customFields}
              onChange={handleCustomFieldsChange}
              meetingType={
                eventDetails && eventDetails.location
                  ? eventDetails.location
                  : settings &&
                    settings.settings.admin_dashboard.default_event_type
                  ? settings.settings.admin_dashboard.default_event_type
                  : "offline"
              }
            />
          </Fragment>
        )}
        {selectedTab === 1 && !activationError && (
          <Fragment>
            <EventVisibility
              productDetails={productDetails}
              onChange={handleProductChange}
            />
            <NotificationsSection
              notifications={notifications}
              onChange={handleNotificationsChange}
              googleCalendar={googleCalendar}
              connectedMailAccount={connectedMailAccount}
              calendarAccountFetched={calendarAccountFetched}
              mailAccountFetched={mailAccountFetched}
            />
          </Fragment>
        )}
        {selectedTab === 2 && adminSection && postId && (
          <RegistrantsSection
            registrants={registrants}
            onChange={handleRegistrantsChange}
            onDelete={removeRegistrant}
            selectedRegistrants={selectedRegistrants}
            handleSelectRegistrants={handleSelectRegistrants}
            handleDeleteMultipleRegistrants={handleDeleteMultipleRegistrants}
            registrantsPagination={registrantsPagination}
            onNext={handleNextRegistrantsPage}
            onPrev={handlePrevRegistrantsPage}
            handleResendNotifications={handleResendNotifications}
            handleResendNotificationsToAll={handleResendNotificationsToAll}
            disabled={
              settings?.current_plan.id !== 2 && settings?.current_plan.id !== 3
            }
          />
        )}
        {selectedTab === 0 && !activationError && (
          <div className="section-container border-b-2 border-gray-200">
            <div className="section-description text-brand-600">
              * Indicates a required field
            </div>
          </div>
        )}
      </div>

      {activationError && (
        <div className="section-container border-b-2 border-gray-200">
          <div className="section-description text-brand-600">
            Activation failed. Please contact the Servv support team.
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
