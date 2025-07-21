import React, { Fragment, useState } from "react";
// Components
import DateTimeSection from "./DateTimeSection";
import LocationSection from "./LocationSection";
import TabsComponent from "../Containers/TabsComponent";
import ProductDetails from "./ProductDetails";
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
const EventDetails = ({
  title,
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
}) => {
  let eventDetails = { ...attributes.meeting };
  const [postId, setPostId] = useState(null);
  let [settings, setSettings] = useState(null);
  const [registrants, setRegistrants] = useState([]);
  const [googleCalendar, setGoogleCalendar] = useState(null);
  const [calendarAccountFetched, setCalendarAccountFetched] = useState(false);
  const [mailAccountFetched, setMailAccountFetched] = useState(null);
  const [connectedMailAccount, setConnectedMailAccount] = useState(null);
  const [zoomAccount, setZoomAccount] = useState(null);
  const [stripeAccount, setStripeAccount] = useState(null);
  const [filtersList, setFiltersList] = useState({});
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/calendar/account",
    });
    if (getCalendarAccountResponse) {
      setGoogleCalendar(getCalendarAccountResponse);
    }
    setCalendarAccountFetched(true);
  };
  const setToastMessage = (val) => {
    toast(val, {
      autoClose: 5000,
    });
  };
  const servvData = { servv_plugin_mode: "production" };
  // const servvData = { servv_plugin_mode: "development" };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/zoom/account",
    });
    if (getZoomAccountResponse) {
      setZoomAccount(getZoomAccountResponse);
    }
    // setCalendarAccountFetched(true);
  };

  const getStripeAccount = async () => {
    const getStripeAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/stripe/account",
    });
    if (getStripeAccountResponse) {
      setStripeAccount(getStripeAccountResponse);
    }
  };

  const getGmailAccount = async () => {
    const getGmailAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/gmail/account",
    });
    if (getGmailAccountResponse) {
      setConnectedMailAccount(getGmailAccountResponse);
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
        getSettingsResponse = await apiFetch({
          path: "/servv-plugin/v1/shop/info",
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(settingsData);
      getSettingsResponse = settingsData;
    }
    if (getSettingsResponse) {
      setSettings({
        ...getSettingsResponse,
        settings: {
          ...getSettingsResponse.settings,
          admin_dashboard: getSettingsResponse?.settings?.admin_dashboard
            ? JSON.parse(getSettingsResponse.settings.admin_dashboard)
            : {},
        },
      });
    }
  };

  const getFilterType = async (type) => {
    try {
      let reqURL = `/servv-plugin/v1/filters/${type}`;
      let getFiltersListResponse = await apiFetch({ path: reqURL });
      if (getFiltersListResponse) {
        setFiltersList((prevFilters) => ({
          ...prevFilters,
          [type]: getFiltersListResponse,
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
      let reqURL = `/servv-plugin/v1/event/${postId}/tickets`;
      if (occurrenceId) {
        reqURL += `?occurrence_id=${occurrenceId}`;
      }
      let getTicketsResponse = await apiFetch({ path: reqURL });

      if (getTicketsResponse) {
        setAttributes({ tickets: getTicketsResponse });
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
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
        default_price,
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
      // if (default_price && settings.current_plan === 2) {
      //   handleProductChange("price", default_price);
      // }
    }
  }, [settings]);
  const getEventData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let postId = postID ? postID : urlParams.get("post");

    setPostId(postId);
    if (postId) {
      let url = `/servv-plugin/v1/event/${postId}`;
      if (occurrenceId) {
        url += `?occurrence_id=${occurrenceId}`;
      }

      let res = null;
      let postStatus = "admin";
      if (!adminSection) {
        const { getEditedPostAttribute } = wp.data.select("core/editor");
        postStatus = getEditedPostAttribute("status");
      }

      if (postStatus === "publish" || postStatus === "admin") {
        // console.log("Error fetching post");
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
          if (!adminSection) removeBlock();
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
            quantity: res.product.current_quantity || 0,
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
    // const urlParams = new URLSearchParams(window.location.search);
    // let postId = urlParams.get("post");
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
    // setLoading(true);
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
      const id = getEventData();
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

  const handleRegistrantsChange = (registrant) => {
    let currentRegistrants = registrants;
    // console.log(registrant, registrant?.status);
    if (registrant) {
      if (registrant.status === "create") {
        currentRegistrants.push(registrant);
      } else {
        console.log("delete");
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
        customFields.custom_field_1_name = "";
        customFields.custom_field_1_value = "";
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
        customFields.custom_field_1_name = "Meeting URL";
        customFields.custom_field_1_value = "";
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

    if (field === "members") {
      let members = types.members || [];
      if (members.indexOf(value) >= 0) {
        members = members.filter((id) => id !== value);
      } else {
        members.push(value);
      }
      types["members"] = members;
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
  const tabsList = [
    { label: "Event details", value: 0 },
    { label: "Event settings", value: 1 },
    { label: "Registrants", value: 2 },
  ];
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
    let url = `/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = await apiFetch({
      path: url,
      method: "POST",
    });
  };

  const handleTicketsChange = (tickets) => {
    setAttributes({ tickets: tickets });
    const quantity = tickets.reduce(
      (totalQuantity, ticket) => totalQuantity + ticket.quantity,
      0
    );
    console.log(quantity);
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
  const isFiltersEmpty = Object.values(filtersList).reduce(
    (allEmptySoFar, value) => {
      return allEmptySoFar && Array.isArray(value) && value.length === 0;
    },
    true
  );
  const isBillingPlanRestriction =
    occurrenceId || settings?.current_plan.id !== 2;
  // const isBillingPlanRestriction = false;

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
        {selectedTab === 0 && (
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
                  adminSection
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
            />

            {!isFiltersEmpty && (
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
        {selectedTab === 1 && (
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
      </div>
    </div>
  );
};
export default EventDetails;
