import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import { timezonesList } from "../../../utilities/timezones";
import timezonesWithOffset from "../../../utilities/timezones";
import { useNavigate } from "react-router-dom";
import { useServvStore } from "../../../store/useServvStore";
export const useEventsLogic = (settings, filtersList, zoomAccount) => {
  const navigate = useNavigate();
  const syncAccountsAfterEvents = useServvStore(
    (s) => s.syncAccountsAfterEvents
  );
  const syncFiltersFromServer = useServvStore((s) => s.syncFiltersFromServer);

  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [firstFetchDone, setFirstFetchDone] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isPast, setIsPast] = useState(false);
  const [eventType, setEventType] = useState("offline");

  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [searchString, setSearchString] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const [meetingsList, setMeetingsList] = useState([]);
  const [eventOccurrencess, setEventOccurrencess] = useState([]);

  const [pagination, setPagination] = useState({});
  const [occurrencesPagination, setOccurrencesPagination] = useState({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] =
    useState(null);

  const [view, setView] = useState("events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);

  const [attributes, setAttributes] = useState({
    meeting: {},
    product: {},
    notifications: {},
    tickets: [],
  });

  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [timezone, setTimezone] = useState("US/Pacific");
  const [showError, setShowError] = useState(null);

  const handleSearchSubmit = (value) => {
    setSearchString(value);
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: value,
      datesObj: dates,
      filtersObj: selectedFilters,
    });
  };

  const handleOpenEvent = (selected) => {
    const { id, occurrence_id } = selected;

    if (occurrence_id) {
      navigate(`/events/${eventType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${eventType}/${id}`);
    }
  };

  const handleSetDates = (dates) => {
    let startDate = null;

    if (dates.startDate)
      startDate = moment.tz(
        {
          year: dates.startDate.getFullYear(),
          month: dates.startDate.getMonth(),
          day: dates.startDate.getDate(),
          hour: 0,
          minute: 0,
          second: 0,
        },
        timezone.id
      );

    let endDate = null;

    if (dates.endDate)
      endDate = moment.tz(
        {
          year: dates.endDate.getFullYear(),
          month: dates.endDate.getMonth(),
          day: dates.endDate.getDate(),
          hour: 23,
          minute: 59,
          second: 0,
        },
        timezone.id
      );

    setDates({
      startDate: startDate ? startDate : null,
      endDate: endDate ? endDate : null,
    });
  };

  const timezones = useMemo(
    () =>
      Object.keys(timezonesList).map((zone) => ({
        id: zone,
        name: timezonesList[zone],
      })),
    []
  );

  // =====================================================================
  // HELPERS
  // =====================================================================

  const getFilteringParameterName = (type) => {
    switch (type) {
      case "locations":
        return "location_id";
      case "languages":
        return "language_id";
      case "categories":
        return "category_id";
      case "members":
        return "member_id";
      default:
        return null;
    }
  };

  const resetFilters = () => {
    setSearchString("");
    setDates({ startDate: null, endDate: null });
    setSelectedFilters({});
  };

  const processFilters = () => {
    let out = "";
    Object.entries(selectedFilters).forEach(([group, ids]) => {
      const param = getFilteringParameterName(group);
      if (!param) return;
      ids.forEach((id) => (out += `&${param}=${id}`));
    });
    return out;
  };

  const processDates = () => {
    if (!dates.startDate || !dates.endDate) return "";
    return (
      `&start_datetime=${moment(dates.startDate).format("YY-MM-DD HH:mm:ss")}` +
      `&end_datetime=${moment(dates.endDate).format("YY-MM-DD HH:mm:ss")}`
    );
  };
  const handleEventChange = (newAttr) => {
    setAttributes((prev) => ({ ...prev, ...newAttr }));
  };

  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate) return true;
    return Object.values(selectedFilters).some((arr) => arr.length > 0);
  };

  // =====================================================================
  // MAIN FETCH (STABLE!)
  // =====================================================================
  const handleFilterSelect = (filter, id) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[filter]) {
        updated[filter] = [id];
      } else if (updated[filter].includes(id)) {
        updated[filter] = updated[filter].filter((i) => i !== id);
      } else {
        updated[filter].push(id);
      }
      return updated;
    });
  };
  const syncedAfterEventsRef = useRef(false);

  const getEventsList = useCallback(
    async ({
      page = 1,
      type = eventType,
      is_Past = isPast,
      search = searchString,
      datesObj = dates,
      filtersObj = selectedFilters,
    } = {}) => {
      if (!settings) return;
      setLoading(true);

      try {
        let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=10&page=${page}&without_occurrences=true`;

        if (!is_Past && search) url += `&search=${search}`;

        if (!is_Past && datesObj.startDate && datesObj.endDate) {
          url +=
            `&start_datetime=${moment(datesObj.startDate).format(
              "YY-MM-DD HH:mm:ss"
            )}` +
            `&end_datetime=${moment(datesObj.endDate).format(
              "YY-MM-DD HH:mm:ss"
            )}`;
        }

        if (!is_Past && filtersObj) {
          Object.entries(filtersObj).forEach(([group, ids]) => {
            const param = getFilteringParameterName(group);
            if (!param) return;
            ids.forEach((id) => (url += `&${param}=${id}`));
          });
        }

        if (is_Past) url += `&is_past=1`;

        const res = await axios.get(url, {
          headers: { "X-WP-Nonce": servvData.nonce },
        });

        const rows = (res.data.meetings || []).map((m) => {
          const dt = m.start_time ? moment.tz(m.start_time, m.timezone) : null;

          return {
            id: m.id,
            occurrence_id: m.occurrence_id,
            title: m.topic || "(No title)",
            post_id: m.shop_post_object_id,
            date: dt ? dt.format("MMM DD, YYYY") : null,
            time: dt ? dt.format("hh:mm a") : null,
            timezone: m.timezone,
            location: m.location || "",
            type: type === "offline" ? "Event" : "Zoom",
            recurrence:
              (m.type === 2 && type === "offline") ||
              (m.type === 8 && type === "zoom")
                ? "Recurring"
                : "One-time",
            status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
          };
        });

        setMeetingsList(rows);

        setPagination({
          pageNumber: res.data.page_number,
          pageCount: res.data.page_count,
        });
      } catch (e) {
        console.error(e);
        toast("Error fetching events");
      } finally {
        setLoading(false);
      }
      if (!syncedAfterEventsRef.current) {
        syncedAfterEventsRef.current = true;

        await syncAccountsAfterEvents?.();
        await syncFiltersFromServer?.();
      }
    },
    [settings, eventType, isPast, dates, selectedFilters]
  );

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = useCallback(
    async (event, page = 1) => {
      if (!settings) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`,
          { headers: { "X-WP-Nonce": servvData.nonce } }
        );

        const rows = res.data.meetings?.map((m) => {
          const dt = moment.tz(m.start_time, m.timezone);
          return {
            id: m.id,
            occurrence_id: m.occurrence_id,
            title: m.topic || "(No title)",
            post_id: m.shop_post_object_id,
            timezone: m.timezone,
            date: dt.format("MMM DD, YYYY"),
            time: dt.format("hh:mm a"),
            location: m.location || "",
            type: eventType === "offline" ? "Event" : "Zoom",
            recurrence:
              m.type === 2 && eventType === "offline"
                ? "One-time"
                : "Recurring",
            status: isPast ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
            tickets: "0/0",
          };
        });

        setEventOccurrencess(rows || []);
        setSelectedEventForOccurrences(event);
        setView("occurrences");
        setOccurrencesPagination({
          pageNumber: res.data.page_number,
          pageCount: res.data.page_count,
        });
      } catch {
        toast("Error fetching occurrences.");
      } finally {
        setLoading(false);
      }
    },
    [settings]
  );

  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map((event) => {
      return { id: event.post_id, occurrenceId: event.occurrence_id };
    });

    try {
      await Promise.all(
        eventsIDs.map(({ id, occurrenceId }) =>
          handleEventDelete(id, occurrenceId)
        )
      );

      await getEventsList();

      console.log(
        "All selected events have been deleted, and the events list has been updated."
      );
    } catch (error) {
      console.error(
        "Error deleting events or updating the events list:",
        error
      );
    }
  };

  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) {
      url += `?occurrence_id=${occurrenceID}`;
    }
    const res = await axios({
      url: url,
      method: "DELETE",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    getEventsList();
  };

  //   const initialLoadRef = useRef(false);
  const hasFetchedRef = useRef(false);
  const allowFilterFetchRef = useRef(false);
  useEffect(() => {
    if (!settings) return;

    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters,
    }).then(() => {
      // enable filter effect AFTER initial load is finished
      allowFilterFetchRef.current = true;
    });
  }, [settings]);

  // 2) REFETCH ON FILTER CHANGES
  useEffect(() => {
    if (!allowFilterFetchRef.current) {
      // block early filter triggered fetch
      return;
    }

    if (!settings) return;

    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters,
    });
  }, [dates.startDate, dates.endDate, selectedFilters, isPast, eventType]);

  // 3) TOAST ERROR
  useEffect(() => {
    if (showError) toast(showError);
  }, [showError]);

  // 4) TIMEFORMAT & TIMEZONE
  useEffect(() => {
    if (!settings) return;

    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");
    else setTimeFormat("hh:mm a");

    let tzGuess = moment.tz.guess();

    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }

    const found = timezones.find((z) => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]);

  // =====================================================================
  // API EXPOSE
  // =====================================================================

  return {
    loading,
    showGuide,
    isPast,
    eventType,
    dates,
    meetingsList,
    eventOccurrencess,
    pagination,
    occurrencesPagination,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,

    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    handleOpenEvent,
    handleIsPastChange: () => setIsPast((p) => !p),
    handleTypeChange: (t) => setEventType(t),
    handleSetDates,
    handleSearchChange: setSearchString,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,

    isFiltersApplied,

    getEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () =>
      pagination.pageNumber > 1 &&
      getEventsList({ page: pagination.pageNumber - 1 }),
    handleGetNextPage: () =>
      pagination.pageNumber < pagination.pageCount &&
      getEventsList({ page: pagination.pageNumber + 1 }),

    handleGetPrevOccurrencessPage: () =>
      occurrencesPagination.pageNumber > 1 &&
      getEventOccurrencess(
        selectedEventForOccurrences,
        occurrencesPagination.pageNumber - 1
      ),

    handleGetNextOccurrencessPage: () =>
      occurrencesPagination.pageNumber < occurrencesPagination.pageCount &&
      getEventOccurrencess(
        selectedEventForOccurrences,
        occurrencesPagination.pageNumber + 1
      ),
    handleEventDelete,
    handleEventChange,
    handleReturnWithError: (err) => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },

    setShowGuide,
  };
};
