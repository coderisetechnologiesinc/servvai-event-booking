import React, { Fragment, useState } from "react";
// Components
import DateTimeSection from "./DateTimeSection";
import LocationSection from "./LocationSection";
import TabsComponent from "../Containers/TabsComponent";
// import ProductDetails from "./ProductDetails";
import EventVisibility from "./EventVisibility";
import RegistrantsSection from "./RegistrantsSection";
import NotificationsSection from "./NotificationsSection";
import FiltersSection from "./FiltersSection";
import TicketsSection from "./TicketsSection";
import { useEffect } from "react";
import apiFetch from "@wordpress/api-fetch";
import CustomFieldsSection from "./CustomFieldsSection";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../Menu/Spinner";
import axios from "axios";
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
  // console.log(attributes);
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
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/calendar/account",
      { headers: { "X-WP-Nonce": servvData.nonce } }
    );
    if (
      getCalendarAccountResponse &&
      getCalendarAccountResponse.status === 200
    ) {
      setGoogleCalendar(getCalendarAccountResponse.data);
    }
    setCalendarAccountFetched(true);
  };
  const setToastMessage = (val) => {
    toast(val, {
      autoClose: 5000,
    });
  };
  // const servvData = { servv_plugin_mode: "production" };
  // const servvData = { servv_plugin_mode: "development" };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/zoom/account",
      { headers: { "X-WP-Nonce": servvData.nonce } }
    );
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
    // setCalendarAccountFetched(true);
  };
  // useEffect(() => {
  //   if (requiredFieldsNotification) {
  //     setToastMessage("Please fill in the required fields");
  //     hideReqieredFieldsNotification();
  //   }
  // }, [requiredFieldsNotification]);
  const getStripeAccount = async () => {
    const getStripeAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/stripe/account",
      { headers: { "X-WP-Nonce": servvData.nonce } }
    );
    if (getStripeAccountResponse && getStripeAccountResponse.status === 200) {
      setStripeAccount(getStripeAccountResponse.data);
    }
  };

  const getGmailAccount = async () => {
    const getGmailAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/gmail/account",
      { headers: { "X-WP-Nonce": servvData.nonce } }
    );
    if (getGmailAccountResponse && getGmailAccountResponse.status === 200) {
      setConnectedMailAccount(getGmailAccountResponse.data);
    }
    setMailAccountFetched(true);
  };
  const getAccountsInfo = async () => {
    if (servvData && servvData.servv_plugin_mode === "development") {
      if (settings && settings.current_plan.id === 2) {
        await getCalendarAccount();
        await getGmailAccount();
        await getZoomAccount();
        await getStripeAccount();
      } else {
        await getCalendarAccount();
      }
    } else {
      if (settings && settings.current_plan.id === 2) {
        getCalendarAccount();
        getGmailAccount();
        getZoomAccount();
        getStripeAccount();
      } else {
        getCalendarAccount();
      }
    }
  };
  const handleNextRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber + 1);
  };
  const handlePrevRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber - 1);
  };
  const getSettings = async () => {
    let getSettingsResponse;
    if (!adminSection) {
      try {
        getSettingsResponse = await axios.get(
          "/wp-json/servv-plugin/v1/shop/info",
          { headers: { "X-WP-Nonce": servvData.nonce } }
        );
      } catch (e) {
        console.log(e);
        setLoading(false);
        if (e.status === 401) setActivationError(true);
      }
    } else {
      // console.log(settingsData);
      getSettingsResponse = { status: 200, data: settingsData };
    }
    if (getSettingsResponse && getSettingsResponse.status === 200) {
      setSettings({
        ...getSettingsResponse.data,
        // current_plan: { ...getSettingsResponse.data.current_plan, id: 1 },
        settings: {
          ...getSettingsResponse.data.settings,
          admin_dashboard: getSettingsResponse.data?.settings?.admin_dashboard
            ? JSON.parse(getSettingsResponse.data.settings.admin_dashboard)
            : {},
        },
      });
    }
  };
  // console.log(attributes);

  const getFilterType = async (type) => {
    try {
      let reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
      let getFiltersListResponse = await axios.get(reqURL, {
        headers: { "X-WP-Nonce": servvData.nonce },
      });
      if (getFiltersListResponse && getFiltersListResponse.status === 200) {
        setFiltersList((prevFilters) => ({
          ...prevFilters,
          [type]: getFiltersListResponse.data,
        }));
      }
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };
  const getEventTickets = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let postId = postID ? postID : urlParams.get("post");
      let reqURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
      if (occurrenceId) {
        reqURL += `?occurrence_id=${occurrenceId}`;
      }
      let getTicketsResponse = await axios.get(reqURL, {
        headers: { "X-WP-Nonce": servvData.nonce },
      });

      if (getTicketsResponse && getTicketsResponse.status === 200) {
        setAttributes({ tickets: getTicketsResponse.data });
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
  useEffect(() => {
    if (!adminSection) {
      setTabsList([
        { label: "Details", value: 0 },
        { label: "Settings", value: 1 },
      ]);
    }
  }, []);
  useEffect(() => {}, []);

  const getFilters = async () => {
    setLoading(true);
    if (!filters) {
      await getFilterType("locations");
      await getFilterType("languages");
      await getFilterType("categories");
      if (settings && settings.current_plan.id === 2) {
        await getFilterType("members");
      }
    } else {
      setFiltersList(filters);
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

  const getEventData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let postId = postID ? postID : urlParams.get("post");
    let postStatus = "admin";
    if (!adminSection) {
      const { getEditedPostAttribute } = wp.data.select("core/editor");

      postStatus = getEditedPostAttribute("status");
      setStatus(postStatus);
    }
    setPostId(postId);
    if (postId) {
      let url = `/servv-plugin/v1/event/${postId}`;
      if (occurrenceId) {
        url += `?occurrence_id=${occurrenceId}`;
      }

      let res = null;

      if (postStatus === "publish" || postStatus === "admin") {
        try {
          res = await apiFetch({
            path: url,
          });
        } catch (e) {
          res = e;
          console.log(e);
          if (adminSection && e.message === "Post doesn't exist") {
            returnWithError(e.message);
          }

          return;
        }
      }

      if (res && res.code !== 404) {
        let startTime = null;
        if (res.meeting.provider === "offline") {
          if (
            res.meeting.providers_type === 1 ||
            (res.meeting.providers_type === 2 && occurrenceId)
          ) {
            startTime = moment(res.meeting.start_time)
              .tz(res.meeting.timezone)
              .format("YYYY-MM-DDTHH:mm:ss:SSS")
              .replace(/:\d\d\d$/, "");
          } else if (res.meeting.providers_type === 2 && !occurrenceId) {
            startTime = moment(res.meeting.occurrences[0].start_time)
              .tz(res.meeting.timezone)
              .format("YYYY-MM-DDTHH:mm:ss:SSS")
              .replace(/:\d\d\d$/, "");
          }
        }
        if (res && res.meeting.provider === "zoom") {
          if (
            res.meeting.providers_type === 2 ||
            (res.meeting.providers_type === 8 && occurrenceId)
          ) {
            startTime = moment(res.meeting.start_time)
              .tz(res.meeting.timezone)
              .format("YYYY-MM-DDTHH:mm:ss:SSS")
              .replace(/:\d\d\d$/, "");
          } else if (res.meeting.providers_type === 8 && !occurrenceId) {
            startTime = moment(res.meeting.occurrences[0].start_time)
              .tz(res.meeting.timezone)
              .format("YYYY-MM-DDTHH:mm:ss:SSS")
              .replace(/:\d\d\d$/, "");
          }
        }

        if (res.meeting.recurrence && !occurrenceId) {
          setTabsList([
            { label: "Details", value: 0 },
            { label: "Settings", value: 1 },
          ]);
        }

        let eventRecurrence = null;
        if (res.meeting.recurrence && res.meeting.recurrence.type) {
          eventRecurrence = res.meeting.recurrence;
        }
        let newAttributes = {
          meeting: {
            eventType: res.meeting.providers_type,
            title: res.meeting.topic,
            location: res.meeting.provider,
            startTime: startTime,
            duration: res.meeting.duration,
            timezone: res.meeting.timezone,
            recurrence: eventRecurrence,
          },
          product: {
            price: res.product.price,
            quantity: res.product.current_quantity,
            current_quantity: res.product.current_quantity,
          },
          notifications: {
            google_calendar: res.notifications.google_calendar,
            disable_emails: res.notifications.disable_emails,
          },
          types: { ...res.types },
          custom_fields: { ...res.custom_fields },
        };
        if (res.tickets && res.tickets) {
          newAttributes.tickets = res.tickets;
        }

        if (!res.product.current_quantity) {
          delete newAttributes.product.current_quantity;
        }

        setAttributes(newAttributes);
      }
    }
    return postId;
  };

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
  const [registrantsPagination, setRegistrantsPagination] = useState({});

  const getEventRegistrants = async (page = 1, id = null) => {
    setLoading(true);
    let post = postID;
    let res = null;
    if (id) {
      post = id;
    }
    let url = `/servv-plugin/v1/event/${post}/registrants?page_size=10&page=${page}`;
    if (occurrenceId) {
      url += `&occurrence_id=${occurrenceId}`;
    }
    try {
      res = await apiFetch({
        path: url,
      });
    } catch (e) {
      console.log(e);
    }

    if (res) {
      let registrantsForEdit = registrants.filter((reg) => reg.status);
      let existingRegistrants = res.registrants.map((registrant) => {
        if (registrant)
          return {
            id: registrant.id,
            firstName: registrant.first_name,
            lastName: registrant.last_name,
            email: registrant.email,
          };
      });
      let registrantsForShow = existingRegistrants.concat(registrantsForEdit);
      setRegistrants(registrantsForShow || []);
      setRegistrantsPagination({
        pageNumber: res.page_number,
        pageCount: res.page_count,
      });
    }
    setLoading(false);
  };

  const handleDeleteMultipleRegistrants = async (selectedRegistrants) => {
    const results = [];

    for (const id of selectedRegistrants) {
      try {
        const value = await removeSingleRegistrant(id);
        results.push({ status: "fulfilled", value });
      } catch (reason) {
        results.push({ status: "rejected", reason });
      }
    }
    getEventRegistrants();

    return results;
  };

  const removeSingleRegistrant = async (registrantID) => {
    let res = await apiFetch({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE",
    });
    return res;
  };

  const removeRegistrant = async (registrantID) => {
    setLoading(true);
    let res = await apiFetch({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE",
    });
    setLoading(false);
    if (res) {
      let currentRegistrants = [...registrants];

      currentRegistrants = currentRegistrants.filter(
        (reg) => reg.id !== registrantID
      );

      // setAttributes({ registrants: currentRegistrants });
      // setRegistrants(currentRegistrants);
      getEventRegistrants();
    }
  };
  const [loading, setLoading] = useState(false);
  const getEventFullInfo = async () => {
    setLoading(true);
    if (servvData && servvData.servv_plugin_mode === "development") {
      const id = await getEventData();
      if (id && adminSection) {
        await getEventRegistrants(1, id);
        if (adminSection && settings && settings.current_plan.id === 2) {
          await getEventTickets();
        }
      }
      await getFilters();
      await getAccountsInfo();
    } else {
      const id = await getEventData();
      if (id && adminSection) {
        getEventRegistrants(1, id);
        if (adminSection && settings && settings.current_plan.id === 2) {
          getEventTickets();
        }
      }
      getFilters();
      getAccountsInfo();
    }

    setLoading(false);
  };
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
  const tickets = [...attributes.tickets];
  // console.log(productDetails);
  const handleRegistrantsChange = (registrant) => {
    let currentRegistrants = registrants;
    // console.log(registrant, registrant?.status);
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
        // customFields.custom_field_1_name = "";
        // customFields.custom_field_1_value = "";
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
        // customFields.custom_field_1_name = "Meeting URL";
        // customFields.custom_field_1_value = "";
      }
    }
    // console.log(meeting.location);
    setAttributes({
      meeting: { ...meeting },
      custom_fields: { ...customFields },
    });
  };

  const handleTypesChange = (field, value) => {
    let types = attributes.types;
    if (field === "members" && value.length > 0) {
      types["members"] = value;
    } else {
      if (types[field] === value) {
        delete types[field];
      } else {
        types[field] = value;
      }
    }
    setAttributes({ types: { ...types } });
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
  const [tabsList, setTabsList] = useState([
    { label: "Details", value: 0 },
    { label: "Settings", value: 1 },
    { label: "Registrants", value: 2 },
  ]);
  const [selectedTab, setSelectedTab] = useState(0);
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

  const handleResendNotifications = async (registrants) => {
    for (const id of registrants) {
      try {
        await handleResendNotificationToSingleRegistrant(id);
        toast("Email notifications are successfully resend", {
          autoClose: 5000,
        });
      } catch (error) {
        console.error(
          `Failed to resend notification to registrant ${id}:`,
          error
        );
        toast(
          `Failed to resend notification to registrant ${
            registrants.filter((reg) => reg.id === id)[0].email
          }:`,
          {
            autoClose: 5000,
          }
        );
      }
    }
  };
  const handleResendNotificationToSingleRegistrant = async (registrantID) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    return await apiFetch({
      path: url,
      method: "POST",
    });
  };

  const handleResendNotificationsToAll = async () => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = await axios({
      url: url,
      method: "POST",
      headers: { "X-WP-Nonce": servvData.nonce },
    }).catch((e) => {
      toast("Servv was unable to resend notifications. Please try again.");
    });
    if (res && res.status === 200) {
      toast("Email notifications have been resent.");
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
  // console.log(
  //   "1 -->",
  //   eventDetails && eventDetails.location ? eventDetails.location : ""
  // );
  // console.log(
  //   "2 -->",
  //   settings && settings.settings.admin_dashboard.default_event_type
  //     ? settings.settings.admin_dashboard.default_event_type
  //     : "offline"
  // );
  // console.log(postId);

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
    // console.log(isFiltersEmpty);
    if (isFiltersEmpty) {
      setEmptyFilters(true);
    }
  }, [filtersList]);
  const isBillingPlanRestriction =
    occurrenceId || settings?.current_plan.id !== 2;
  // const isBillingPlanRestriction = false;
  // console.log(status === "publish");
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
            {
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
            }
            {/* {tickets.length === 0 && (
              <ProductDetails
                productDetails={productDetails}
                id={postId}
                handleDetailsChange={handleProductChange}
                stripeAccount={stripeAccount}
              />
            )} */}

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
              disabled={settings?.current_plan.id !== 2}
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
            disabled={settings?.current_plan.id !== 2}
          />
        )}
        {selectedTab === 0 && !activationError && (
          <div className="section-container border-b-2 border-gray-200">
            <div className="section-description">
              * Indicates a required field
            </div>
          </div>
        )}
      </div>

      {activationError && (
        <div className="section-container border-b-2 border-gray-200">
          <div className="section-description">
            Activation failed. Please contact the Servv support team.
          </div>
        </div>
      )}
    </div>
  );
};
export default EventDetails;
