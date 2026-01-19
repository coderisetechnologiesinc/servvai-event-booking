import React from "react";
import {
  CalendarIcon,
  MapMarkIcon,
  Filter,
  BrushIcon,
  TicketIcon,
  Support,
  Contacts,
  CloseIcon,
} from "../../assets/icons";

import { useEffect, useState, useRef } from "react";
import { useServvStore } from "../../store/useServvStore";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { toast } from "react-toastify";
import {
  createTicket,
  updateTicket,
  multipleTicketsCreate,
  multipleTicketsUpdate,
} from "../../utilities/tickets";
import { useServvData } from "./Events/useServvData";
const DateStep = React.lazy(() => import("../PostEditor/DateStep"));
const VenueStep = React.lazy(() => import("../PostEditor/VenueStep"));
const FiltersStep = React.lazy(() => import("../PostEditor/FiltersStep"));
const BrandingStep = React.lazy(() => import("../PostEditor/BrandingStep"));
const TicketsStep = React.lazy(() => import("../PostEditor/TicketsStep"));
const RegistrantsStep = React.lazy(() =>
  import("../PostEditor/RegistrantsStep")
);
import { useNavigate } from "react-router-dom";

const StepperIcon = ({ Icon, iconClass, active, showLine }) => {
  return (
    <div className="stepper-icon">
      <span className={`icon-box ${active ? "is-active" : ""}`}>
        <Icon className={`icon-box__svg ${iconClass}`} aria-hidden="true" />
      </span>

      {showLine && <div className="icon-line" />}
    </div>
  );
};

const StepperText = ({ title, subtitle, active }) => {
  return (
    <div className={`stepper-text ${active ? "is-active" : ""}`}>
      <div className="stepper-title">{title}</div>
      <div className="stepper-subtitle">{subtitle}</div>
    </div>
  );
};

const CreateEventForm = () => {
  const settings = useServvStore((s) => s.settings);
  const adminDashboardRaw = useServvStore(
    (s) => s.settings?.settings?.admin_dashboard
  );
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const stripeConnected = useServvStore((s) => s.stripeConnected);
  const calendarConnected = useServvStore((s) => s.calendarConnected);
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const { fetchEventTickets } = useServvData();
  const navigate = useNavigate();
  const [currentSettings, setCurrentSettings] = useState({});
  const contentRef = useRef(null);

  const [attributes, setAttributes] = useState({
    location: "offline",
    meeting: {},
    tickets: [],
    product: {
      price: 0,
      quantity: 5,
    },
    filters: {},
    branding: {},
    notifications: {
      google_calendar: false,
      disable_emails: false,
    },
    custom_fields: {
      custom_field_1_name: "",
      custom_field_1_value: "",
      custom_field_2_name: "",
      custom_field_2_value: "",
    },
  });
  const [stepComponents, setStepComponents] = useState({
    date: DateStep,
    venue: VenueStep,
    tickets: TicketsStep,
    filters: FiltersStep,
    branding: BrandingStep,
    registrants: RegistrantsStep,
  });

  const [steps, setSteps] = useState([
    {
      key: "date",
      title: "Date and Time",
      subtitle: "Select the event’s date, time, and frequency",
      Icon: CalendarIcon,
      iconClass: "", // symmetric
    },
    {
      key: "venue",
      title: "Venue and Access",
      subtitle: "Enter the event’s address details",
      Icon: MapMarkIcon,
      iconClass: "icon--tall",
    },
    {
      key: "tickets",
      title: "Tickets",
      subtitle: "Specify the number of tickets.",
      Icon: TicketIcon,
      iconClass: "icon--wide",
    },
    {
      key: "filters",
      title: "Filters and Notes",
      subtitle: "Set filters and add notes",
      Icon: Filter,
      iconClass: "", // symmetric
    },
    {
      key: "branding",
      title: "Branding",
      subtitle: "Add additional information and an image",
      Icon: BrushIcon,
      iconClass: "icon--angled",
    },
  ]);
  const [currentStep, setCurrentStep] = useState(steps[0].key);
  const StepComponent = stepComponents[currentStep];

  const { id: routeId } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const occurrenceIdFromQuery =
    searchParams.get("occurrence_id") ||
    searchParams.get("occurrenceId") ||
    searchParams.get("occ") ||
    null;

  const isNew = !routeId;

  // Images
  const WP_API_BASE = "/wp-json/wp/v2/posts";
  const PLACEHOLDER_IMAGE = window.servvData?.pluginUrl
    ? `${window.servvData.pluginUrl}public/assets/images/placeholder.png`
    : "";

  const featuredImageCache = new Map();

  async function fetchFeaturedImage(postId, signal) {
    if (!postId) return PLACEHOLDER_IMAGE;

    if (featuredImageCache.has(postId)) {
      return featuredImageCache.get(postId);
    }

    try {
      const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, { signal });
      if (!res.ok) throw new Error("Failed to fetch post");

      const post = await res.json();

      const url =
        post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        PLACEHOLDER_IMAGE;

      featuredImageCache.set(postId, url);
      return url;
    } catch {
      if (!signal?.aborted) {
        featuredImageCache.set(postId, PLACEHOLDER_IMAGE);
      }
      return PLACEHOLDER_IMAGE;
    }
  }

  // End images
  // useEffect(() => {
  //   if (!isNew) {
  //     let newSteps = [...steps];
  //     if (attributes.meeting && !attributes.meeting.occurrences) {

  //       newSteps.push({
  //         key: "registrants",
  //         title: "Registrants",
  //         subtitle: "Manage registrants",
  //         Icon: Contacts,
  //         iconClass: "icon--left",
  //       });
  //       setSteps(newSteps);
  //     }
  //   }
  // }, [isNew]);

  const [loadingEvent, setLoadingEvent] = useState(false);
  const [eventLoaded, setEventLoaded] = useState(false);
  const stripMime = (value) => {
    if (!value) return "";

    if (value.startsWith("data:image")) {
      return value.split(",")[1];
    }

    return null;
  };
  const hasValue = (value) => {
    if (value === null || value === undefined) return false;

    if (Array.isArray(value)) return value.length > 0;

    if (typeof value === "object") return Object.keys(value).length > 0;

    return true;
  };

  const fetchEventInfo = async (postId, occurrenceId) => {
    setLoadingEvent(true);
    const controller = new AbortController();
    const getEventTypeFromPath = (pathname) => {
      if (pathname.includes("/events/zoom/")) return "zoom";
      if (pathname.includes("/events/offline/")) return "offline";
      return null;
    };
    const eventType = getEventTypeFromPath(location.pathname);

    try {
      const res = await axios.get(`/wp-json/servv-plugin/v1/event/${postId}`, {
        params: occurrenceId ? { occurrence_id: occurrenceId } : {},
        headers: { "X-WP-Nonce": servvData.nonce },
      });

      const data = res.data;
      const imageUrl = await fetchFeaturedImage(postId, controller.signal);
      let startTime = null;
      if (data.meeting.start_time) {
        startTime = moment.tz(data.meeting.start_time, data.meeting.timezone);
      } else if (data.meeting.occurrences) {
        const firstOccurrence = data.meeting.occurrences[0];
        startTime = moment.tz(
          firstOccurrence.start_time,
          data.meeting.timezone
        );
      }
      let payload = {
        image_content: imageUrl || null,
        meeting: {
          ...data.meeting,
          startTime: startTime,
        },
        tickets:
          data.tickets.map((ticket) => {
            return {
              ...ticket,
              title: ticket.name,
              type:
                ticket.price === 0 && !ticket.is_donation
                  ? "free"
                  : ticket.is_donation
                  ? "donation"
                  : "paid",
            };
          }) || [],
        product: data.product || {},
        filters: data.types || {},
        branding: data.branding || {},
        notifications: data.notifications || {},
        custom_fields: data.custom_fields || {},
      };
      delete payload.meeting.recurrence;

      if (hasValue(data.meeting?.recurrence)) {
        payload.meeting.recurrence = data.meeting.recurrence;
      }
      if (eventType === "offline") {
        payload.location = "offline";
      } else {
        payload.location = "zoom";
      }
      mergeAttributes(payload);
      let newSteps = [...steps];

      if (
        data.meeting.occurrences === undefined ||
        data.meeting.occurrences === null ||
        data.meeting.occurrences.length === 0 ||
        occurrenceIdFromQuery
      ) {
        newSteps.push({
          key: "registrants",
          title: "Registrants",
          subtitle: "Manage registrants",
          Icon: Contacts,
          iconClass: "icon--left",
        });
        setSteps(newSteps);
      }
      if (data.meeting.occurrences && data.meeting.occurrences.length > 0) {
        const occurrenceTickets = fetchEventTickets({ postId, occurrenceId });
        if (occurrenceTickets.length > 0) {
          mergeAttributes({
            tickets: { ...attributes.tickets, ...occurrenceTickets },
          });
        }
      }

      setEventLoaded(true);
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        toast.error("Event not found or has been deleted.");
      } else if (error?.response?.status === 403) {
        toast.error("You do not have permission to open this event.");
      } else {
        toast.error("Unable to open the event. Please try again.");
      }
    }

    setLoadingEvent(false);
  };

  useEffect(() => {
    if (!adminDashboardRaw) return;

    let parsed;
    try {
      parsed =
        typeof adminDashboardRaw === "string"
          ? JSON.parse(adminDashboardRaw)
          : adminDashboardRaw;
    } catch (e) {
      console.error("Failed to parse admin dashboard", e);
      return;
    }

    setCurrentSettings((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        settings: {
          ...prev.settings?.settings,
          admin_dashboard: {
            ...prev.settings?.settings?.admin_dashboard,
            ...parsed,
          },
        },
      },
    }));

    const defaultStart = parsed?.default_start_time;
    if (!defaultStart && !isNew) return;

    const timeMoment = moment(
      defaultStart,
      ["h:mm a", "hh:mm a", "H:mm"],
      true
    );
    if (!timeMoment.isValid()) {
      console.warn("Invalid default_start_time:", defaultStart);
      return;
    }

    const hours = timeMoment.hours();
    const minutes = timeMoment.minutes();

    setAttributes((prev) => {
      const rawStart = prev?.meeting?.startTime;

      const baseStart = moment.isMoment(rawStart)
        ? rawStart.clone()
        : moment(rawStart);

      if (!baseStart.isValid()) {
        console.warn("Invalid meeting.startTime:", rawStart);
        return prev;
      }

      return {
        ...prev,
        meeting: {
          ...prev.meeting,
          startTime: baseStart
            .hours(hours)
            .minutes(minutes)
            .seconds(0)
            .milliseconds(0),
          duration: parsed?.default_duration
            ? parsed.default_duration * 60
            : prev.meeting?.duration,
        },
      };
    });
  }, [adminDashboardRaw]);

  useEffect(() => {
    if (isNew) {
      setEventLoaded(true);
      return;
    }

    if (routeId && !eventLoaded) {
      fetchEventInfo(routeId, occurrenceIdFromQuery);
    }
    if (occurrenceIdFromQuery) {
      const occurrenceTickets = fetchEventTickets();
      if (occurrenceTickets.length > 0) {
        mergeAttributes({
          tickets: { ...attributes.tickets, ...occurrenceTickets },
        });
      }
    }
  }, [routeId, occurrenceIdFromQuery]);

  const mergeAttributes = (patch) => {
    setAttributes((prev) => {
      const next = { ...prev };

      Object.keys(patch).forEach((key) => {
        if (
          typeof patch[key] === "object" &&
          patch[key] !== null &&
          !Array.isArray(patch[key])
        ) {
          next[key] = {
            ...(prev[key] || {}),
            ...patch[key],
          };
        } else {
          next[key] = patch[key];
        }
      });

      return next;
    });
  };
  useEffect(() => {
    // console.log(attributes.tickets);
  }, [attributes]);

  const updateTickets = async () => {
    const tickets =
      attributes.tickets?.map((ticket) => ({
        ...ticket,
        name: ticket.title,
      })) || [];

    if (!tickets.length) return;

    const toCreate = [];
    const toUpdate = [];
    const toRemove = [];

    tickets.forEach((ticket) => {
      // existing ticket removed
      if (ticket.event_id && ticket.action === "remove") {
        toRemove.push(ticket);
        return;
      }

      // existing ticket updated
      if (ticket.event_id && ticket.action === "update") {
        toUpdate.push(ticket);
        return;
      }

      // new ticket
      if (!ticket.event_id) {
        toCreate.push(ticket);
      }
    });

    // CREATE
    if (toCreate.length === 1) {
      await createTicket({
        postId: routeId,
        token: servvData.nonce,
        ticket: toCreate[0],
        occurrenceId: occurrenceIdFromQuery,
      });
    } else if (toCreate.length > 1) {
      await multipleTicketsCreate({
        postId: routeId,
        token: servvData.nonce,
        tickets: toCreate,
        occurrenceId: occurrenceIdFromQuery,
      });
    }

    // UPDATE
    if (toUpdate.length === 1) {
      await updateTicket({
        postId: routeId,
        token: servvData.nonce,
        ticket: toUpdate[0],
        occurrenceId: occurrenceIdFromQuery,
      });
    } else if (toUpdate.length > 1) {
      await multipleTicketsUpdate({
        postId: routeId,
        token: servvData.nonce,
        tickets: toUpdate,
        occurrenceId: occurrenceIdFromQuery,
      });
    }

    // REMOVE (soft delete on backend)
    if (toRemove.length) {
      await Promise.all(
        toRemove.map((ticket) =>
          updateTicket({
            postId: routeId,
            token: servvData.nonce,
            ticket: { ...ticket, quantity: 0 },
            occurrenceId: occurrenceIdFromQuery,
          })
        )
      );
    }
    setAttributes((prev) => ({
      ...prev,
      tickets: prev.tickets
        .filter((t) => t.action !== "remove")
        .map(({ action, ...t }) => t),
    }));
  };

  const handleFormSubmit = async () => {
    let requestURL = `/wp-json/servv-plugin/v1/`;

    if (isNew) {
      requestURL += `events/${attributes.location}`;
    } else {
      requestURL += "event";
    }
    if (routeId) {
      requestURL += `/${routeId}`;
    }
    if (occurrenceIdFromQuery) {
      requestURL += `?occurrence_id=${occurrenceIdFromQuery}`;
    }
    const isRecurring =
      Array.isArray(attributes.meeting?.recurrence) &&
      attributes.meeting.recurrence.length > 0;

    const isOffline = attributes.location === "offline";

    let data = {
      meeting: {
        topic: attributes.meeting.topic,
        startTime: moment(attributes.meeting.startTime)
          .format("YYYY-MM-DDTHH:mm:ss:SSS")
          .replace(/:\d\d\d$/, ""),
        duration: attributes.meeting.duration,
        agenda: attributes.meeting.agenda,
        timezone: attributes.meeting.timezone,
        // eventType: attributes.meeting.eventType,
        recurrence: attributes.meeting.recurrence,
      },

      // product: {
      //   price: attributes.product.price,
      //   quantity: attributes.product.quantity,
      // },
      notifications: {
        google_calendar: attributes.notifications.google_calendar,
        disable_emails: attributes.notifications.disable_emails,
      },
      types: {
        location_id: attributes.filters.location_id,
        category_id: attributes.filters.category_id,
        language_id: attributes.filters.language_id,
        members: attributes.filters.members,
      },
      custom_fields: {
        ...attributes.custom_fields,
      },
      image_content: stripMime(attributes.image_content),
    };
    if (!isNew) {
      data.product = { ...attributes.product };
      data.meeting = {
        topic: attributes.meeting.topic,
        agenda: attributes.meeting.agenda,
        start_time: attributes.meeting.startTime,
        timezone: attributes.meeting.timezone,
        duration: attributes.meeting.duration,
        type: isRecurring ? (isOffline ? 2 : 8) : isOffline ? 1 : 2,
      };
      if (attributes.registrants && attributes.registrants.length > 0) {
        data.registrants = attributes.registrants
          .filter((reg) => reg.status && reg.status === "create")
          .map((reg) => {
            return {
              first_name: reg.firstName,
              last_name: reg.lastName,
              email: reg.email,
            };
          });
      }
    } else {
      data.meeting = {
        ...attributes.meeting,
        eventType: isRecurring ? (isOffline ? 2 : 8) : isOffline ? 1 : 2,
      };
      data.tickets = attributes.tickets.map((ticket) => {
        const payload = {
          name: ticket.title,
          quantity: ticket.quantity,
          is_donation: ticket.is_donation,
        };

        if (ticket.price != null) {
          payload.price = ticket.price;
        }

        return payload;
      });
    }
    try {
      setLoadingEvent(true);
      if (!isNew) {
        await updateTickets();
      }
      const res = await axios({
        method: isNew ? "POST" : "PATCH",
        url: requestURL,
        data,
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
      }).finally(() => {
        toast.success(`Event ${isNew ? "created" : "updated"} successfully.`);
        if (isNew) navigate("/dashboard?created=success");
      });
      setLoadingEvent(false);
    } catch (e) {
      toast.error(
        isNew
          ? "Event creation failed. Please check the details and try again."
          : "Event update failed. Please check the details and try again."
      );
      setLoadingEvent(false);
    }
  };
  useEffect(() => {
    console.log("change step");
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // or omit
      });
    }
  }, [currentStep]);

  return (
    <PageWrapper loading={loadingEvent}>
      <div className="create-event">
        {/* SIDEBAR */}
        <aside className="create-event__sidebar">
          <div className="logo-wrapper">
            <div
              className="logo-bg"
              style={{ backgroundImage: `url(${logo})` }}
            />
            <div className="sidebar__logo servv-logo-png" />
          </div>

          <div className="sidebar__stepper">
            <div>
              {steps.map((step, index) => {
                const isActive = step.key === currentStep;

                return (
                  <div
                    className="stepper__row"
                    key={step.key}
                    onClick={() => setCurrentStep(step.key)}
                  >
                    <StepperIcon
                      Icon={step.Icon}
                      iconClass={step.iconClass}
                      active={isActive}
                      showLine={index < steps.length - 1}
                    />

                    <StepperText
                      title={step.title}
                      subtitle={step.subtitle}
                      active={isActive}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sidebar__bottom-link">
            <Support className="bottom-link__icon" aria-hidden="true" />
            <span
              className="bottom-link__text"
              onClick={() => navigate("/support")}
            >
              Support
            </span>
          </div>
        </aside>

        {/* CONTENT */}

        <main className="create-event__content" ref={contentRef}>
          <div
            className="servv-create-form-close"
            onClick={() => navigate("/dashboard")}
          >
            <CloseIcon className="servv-create-form-close-icon" />
          </div>
          <React.Suspense
            fallback={<div className="step-loading">Loading…</div>}
          >
            {StepComponent && (
              <StepComponent
                attributes={attributes}
                setAttributes={mergeAttributes}
                settings={settings}
                currentStep={currentStep}
                changeStep={setCurrentStep}
                handleFormSubmit={handleFormSubmit}
                isNew={isNew}
                loading={loadingEvent}
                setLoading={setLoadingEvent}
                zoomConnected={zoomConnected}
                stripeConnected={stripeConnected}
                calendarConnected={calendarConnected}
                gmailConnected={gmailConnected}
                isOccurrence={occurrenceIdFromQuery}
              />
            )}
          </React.Suspense>
        </main>
      </div>
    </PageWrapper>
  );
};

export default CreateEventForm;
