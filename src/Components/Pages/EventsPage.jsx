import React, { Fragment, useEffect, useState, useRef } from "react";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import Layout from "../Layout/Layout";

import InlineStack from "../Containers/InlineStack";
import ButtonGroupConnected from "../Controls/ButtonGroupConnected";
import ConnectedButton from "../Controls/ConnectedButton";
import BlockStack from "../Containers/BlockStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import FilterTable from "../Containers/FilterTable";
import PageWrapper from "./PageWrapper";
import moment from "moment-timezone";
import SingleEventPage from "./SingleEventPage";
import ListPagination from "../Controls/ListPagination";
import CheckboxControl from "../Controls/CheckboxControl";
import Dropdown from "../Containers/Dropdown";
import InputFieldControl from "../Controls/InputFieldControl";
import CollapsibleSection from "../Containers/CollapsibleSection";
import Datepicker from "react-tailwindcss-datepicker";
import ConfirmationModal from "../Controls/ConfirmationModal";
import axios from "axios";
import { toast } from "react-toastify";
import timezones from "../../utilities/timezones";
import {
  AdjustmentsVerticalIcon,
  PlusIcon,
  Bars4Icon,
  PencilSquareIcon,
  TrashIcon,
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";

const EventsCardHeader = ({
  eventsCount,
  view,
  backToEventsList,
  search,
  onChange,
  onFiltering,
  filtersList,
  selectedFilters,
  handleFilterSelect,
  dates,
  setDates,
  isFiltersApplyed,
  resetFilters,
  isPast,
  timezone,
}) => {
  const [filterDropdown, setFilterDropdown] = useState(false);
  const filterDropdownRef = useRef(null);
  useEffect(() => {
    if (!filterDropdown) return;
    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterDropdown]);

  const isFiltersEmpty = Object.values(filtersList).reduce(
    (allEmptySoFar, value) => {
      return allEmptySoFar && Array.isArray(value) && value.length === 0;
    },
    true
  );

  const handleEnterButton = (event) => {
    if (event.key === "Enter") {
      onFiltering();
    }
  };

  const changeFilterDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };

  const renderFilteringWithFilters = () => {
    if (Object.keys(filtersList).length > 0) {
      return Object.keys(filtersList).map((filter) => {
        return (
          <Fragment key={filter}>
            {filtersList[filter].length > 0 && (
              <CollapsibleSection
                sectionHeading={
                  filter.charAt(0).toUpperCase() + filter.substring(1)
                }
              >
                <BlockStack gap={2}>
                  {filtersList[filter].map((filterToSelect) => {
                    return (
                      <CheckboxControl
                        key={filterToSelect.id}
                        label={filterToSelect.name}
                        checked={
                          selectedFilters[filter] &&
                          selectedFilters[filter].includes(filterToSelect.id)
                        }
                        onChange={() => {
                          handleFilterSelect(filter, filterToSelect.id);
                        }}
                        font="text-sm"
                        color="text-gray-500"
                      />
                    );
                  })}
                </BlockStack>
              </CollapsibleSection>
            )}
          </Fragment>
        );
      });
    } else return null;
  };

  const getDates = (tz = timezone.zone) => {
    let datesValue = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate; // Moment object
      datesValue.startDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    if (dates.endDate) {
      const d = dates.endDate;
      datesValue.endDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    return datesValue;
  };

  return (
    <div className="card-header">
      <div className="card-heading">
        <span>
          {view === "events" ? t("Your Events") : t("Event Occurrences")}
        </span>
        <Badge
          text={`${eventsCount} ${t("item")}${eventsCount > 1 ? "s" : ""}`}
          color="secondary"
          size="small"
          align="center"
        />
        {view === "occurrences" && (
          <button
            className="pagination-control ml-auto"
            onClick={() => backToEventsList()}
          >
            <ArrowLeftIcon className="pagination-control-icon" />
            <span className="pagination-control-text">
              {t("Back to events view")}
            </span>
          </button>
        )}
      </div>
      <div className="card-description">
        {dates.startDate && dates.endDate && (
          <span>
            {t("You are viewing events between")}{" "}
            {moment(dates.startDate).format("MMM DD, YYYY")} -{" "}
            {moment(dates.endDate).format("MMM DD, YYYY")}
          </span>
        )}
        {isFiltersApplyed && (
          <a
            className="card-header-description-link"
            onClick={() => resetFilters()}
          >
            {t("Clear filters")}
          </a>
        )}
      </div>
      {!isPast && (
        <div className="hidden md:flex">
          <InlineStack align={"left"} gap={4} cardsLayout={false}>
            <InputFieldControl
              value={search}
              placeholder={t("Enter search string")}
              onChange={onChange}
              handleKeyPress={handleEnterButton}
              fullWidth={true}
              align="left"
            />
            <Datepicker
              displayFormat={"MMM DD, YYYY"}
              value={getDates()}
              placeholder={t("Select dates")}
              inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white"
              onChange={(newValue) => setDates(newValue)}
            />
            {!isFiltersEmpty && (
              <Dropdown
                activator={
                  <PageActionButton
                    text={t("Filters")}
                    icon={<AdjustmentsVerticalIcon className="button-icon" />}
                    type="secondary"
                    onAction={() => changeFilterDropdown()}
                  />
                }
                status={filterDropdown}
                onClose={() => setFilterDropdown(false)} // <-- ADD THIS LINE
              >
                {/* <CollapsibleSection sectionHeading={"Event type"}>

          </CollapsibleSection> */}
                <BlockStack gap={4}>
                  {renderFilteringWithFilters()}
                  <PageActionButton
                    text={<span className="text-center">{t("Apply")}</span>}
                    type="primary"
                    icon={null}
                    onAction={() => {
                      onFiltering();
                      setFilterDropdown(false);
                    }}
                    justify={"justify-center"}
                  />
                </BlockStack>
              </Dropdown>
            )}
          </InlineStack>
        </div>
      )}
    </div>
  );
};

const EventsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  settings,
  filtersList = {},
  isLoading,
  globalError,
  setIsLoading = () => {},
}) => {
  useEffect(() => {
    if (globalError) {
      toast(globalError);
    }
  }, [globalError]);
  const [customizeDropdown, setCustomizeDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [headings, setHeadings] = useState([
    { label: t("Title"), value: "title", visible: true },
    { label: t("Date"), value: "date", visible: true },
    { label: t("Time"), value: "time", visible: true },
    { label: t("Location"), value: "location", visible: true },
    { label: t("Type"), value: "type", visible: true },
    { label: t("Recurrence"), value: "recurrence", visible: true },
    { label: t("Status"), value: "status", visible: true },
  ]);
  const [firstFetchDone, setFirstFetchDone] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [eventType, setEventType] = useState("offline");
  const [zoomAccount, setZoomAccount] = useState(null);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  const [meetingsList, setMeetingsList] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [active, setActiveDropdown] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);
  const [attributes, setAttributes] = useState({
    meeting: {},
    product: {},
    notifications: {},
    tickets: [],
  });
  const [pagination, setPagination] = useState({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] =
    useState(null);
  const [view, setView] = useState("events");
  const [eventOccurrencess, setEventOccurrencess] = useState([]);
  const [occurrencesPagination, setOccurrencesPagination] = useState({});
  const [searchString, setSearchString] = useState("");
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  // --- Click outside logic for modals ---
  useEffect(() => {
    function handleClickOutside(event) {
      // Customize Modal
      if (showCustomizeModal) {
        const modal = document.querySelector(".customize-modal");
        if (modal && !modal.contains(event.target)) {
          setShowCustomizeModal(false);
        }
      }
      // Filters Modal
      if (showFiltersModal) {
        const modal = document.querySelector(".filters-modal");
        if (modal && !modal.contains(event.target)) {
          setShowFiltersModal(false);
        }
      }
      // Date Modal
      if (showDateModal) {
        const modal = document.querySelector(".date-modal");
        if (modal && !modal.contains(event.target)) {
          setShowDateModal(false);
        }
      }
      // Search Modal
      if (showSearchModal) {
        const modal = document.querySelector(".search-modal");
        if (modal && !modal.contains(event.target)) {
          setShowSearchModal(false);
        }
      }
    }
    if (
      showCustomizeModal ||
      showFiltersModal ||
      showDateModal ||
      showSearchModal
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCustomizeModal, showFiltersModal, showDateModal, showSearchModal]);

  // --- Hamburger dropdown click outside ---
  const dropdownRefs = useRef({});
  useEffect(() => {
    if (active === null) return;
    const handleClickOutside = (event) => {
      // console.log(dropdownRefs.current.contains(event.target));
      try {
        const ref = dropdownRefs.current;
        if (active && ref && !ref.contains(event.target)) {
          setActiveDropdown(null);
        }
      } catch (e) {
        console.log("Dropdown is not active");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  useEffect(() => {
    if (resetSelectedSubpage) {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
  useEffect(() => {}, [selectedFilters]);

  useEffect(() => {
    // toast("Loading settings");
    if (settings) {
      getEventsList({ is_Past: isPast });
    }
  }, [isPast]);

  const handleFilterSelect = (filter, id) => {
    const newSelectedFilters = { ...selectedFilters };
    if (!newSelectedFilters[filter]) {
      newSelectedFilters[filter] = [id];
    } else if (
      newSelectedFilters[filter] &&
      newSelectedFilters[filter].includes(id)
    ) {
      newSelectedFilters[filter] = newSelectedFilters[filter].filter(
        (filterId) => filterId !== id
      );
    } else if (
      newSelectedFilters[filter] &&
      !newSelectedFilters[filter].includes(id)
    ) {
      newSelectedFilters[filter].push(id);
    }
    setSelectedFilters(newSelectedFilters);
  };

  const getDates = (tz = timezone.zone) => {
    let datesValue = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate; // Moment object
      datesValue.startDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    if (dates.endDate) {
      const d = dates.endDate;
      datesValue.endDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    return datesValue;
  };

  const customizeHeading = (heading) => {
    let newHeadings = [...headings];
    let selectedHeading = headings
      .map((heading) => heading.value)
      .indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
  };

  const handleIsPastChange = () => {
    setIsPast((prev) => !prev);
  };

  const handleTypeChange = (type) => {
    setEventType(type);
    if (type !== eventType) getEventsList({ page: 1, type: type });
  };

  const renderHeadingsCustomization = () => {
    return headings.map((heading) => {
      return (
        <CheckboxControl
          key={heading.value}
          label={heading.label}
          name={heading.label}
          checked={heading.visible}
          onChange={() => customizeHeading(heading.value)}
        />
      );
    });
  };

  const selectAll = () => {
    setSelectedAll(!selectedAll);
  };

  const getEventOccurrencess = async (event, page = 1, eventType) => {
    setLoading(true);

    let res = await axios.get(
      `/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`,
      {
        headers: { "X-WP-Nonce": servvData.nonce },
      }
    );
    if (res && res.status === 200) {
      const rowsForTable = res.data.meetings
        ? res.data.meetings.map((meeting) => {
            const datetime = moment.tz(meeting.start_time, meeting.timezone);
            return {
              id: meeting.id,
              occurrence_id: meeting.occurrence_id,
              title: meeting.topic.length > 0 ? meeting.topic : "(No title)",
              post_id: meeting.shop_post_object_id,
              timezone: meeting.timezone,
              date: datetime.format("MMM DD, YYYY"),
              time: datetime.format("hh:mm a"),
              location: meeting.location ? meeting.location : "",
              type: eventType === "offline" ? "Event" : "Zoom event",
              recurrence:
                (meeting.type === 2 && eventType && eventType === "offline") ||
                (meeting.type === 8 && eventType && eventType === "zoom")
                  ? "One-time"
                  : "Recurring",
              tickets: "0/0",
              status: isPast
                ? "Past"
                : meeting.is_hidden
                ? "Unlisted"
                : "On sale",
            };
          })
        : [];
      setEventOccurrencess(rowsForTable);
      setSelectedEventForOccurrences(event);
      setView("occurrences");
      setActiveDropdown(false);
      setOccurrencesPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count,
      });
    }
    setLoading(false);
  };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/zoom/account",
      { headers: { "X-WP-Nonce": servvData.nonce } }
    );
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
    setIsLoading(false);
  };

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
    }
  };

  const processFilters = () => {
    let filteringQuery = "";
    if (selectedFilters)
      Object.keys(selectedFilters).forEach((filterType) => {
        if (selectedFilters[filterType].length > 0) {
          selectedFilters[filterType].forEach((filter) => {
            filteringQuery += `&${getFilteringParameterName(
              filterType
            )}=${filter}`;
          });
        }
      });
    return filteringQuery;
  };
  const processDates = () => {
    if (dates.startDate && dates.endDate) {
      return `&start_datetime=${moment(dates.startDate).format(
        "YY-MM-DD HH:mm:ss"
      )}&end_datetime=${moment(dates.endDate).format("YY-MM-DD HH:mm:ss")}`;
    }
    return null;
  };
  useEffect(() => {
    if (settings) getEventsList();
  }, [dates]);
  const isFiltersApplyed = () => {
    let filterApplied = false;
    if (selectedFilters) {
      Object.keys(selectedFilters).forEach((filter) => {
        if (selectedFilters[filter].length > 0) {
          filterApplied = true;
        }
      });
    }
    if (dates.startDate || filterApplied || searchString.length > 0) {
      return true;
    }
    return false;
  };
  const resetFilters = () => {
    setSearchString("");
    setDates({ startDate: null, endDate: null });
    setSelectedFilters({});
  };
  const getEventsList = async ({
    page = 1,
    is_Past = null,
    type = "offline",
  } = {}) => {
    setLoading(true);
    try {
      const selectedEventType = type ? type : eventType;
      let reqUrl = `/wp-json/servv-plugin/v1/events/${selectedEventType}?page_size=10&page=${page}&without_occurrences=true`;
      if (searchString.length > 0 && !isPast) {
        reqUrl += `&search=${searchString}`;
      }
      const dates = processDates();
      if (dates && !isPast) {
        reqUrl += dates;
      }
      const filters = processFilters();
      if (filters.length > 0 && !isPast) {
        reqUrl += filters;
      }

      if (isPast) reqUrl += `&is_past=1`;
      let res = await axios.get(reqUrl, {
        headers: { "X-WP-Nonce": servvData.nonce },
      });
      if (res && res.status === 200) {
        const rowsForTable = res.data.meetings
          ? res.data.meetings.map((meeting) => {
              const datetime = meeting.start_time
                ? moment.tz(meeting.start_time, meeting.timezone)
                : null;
              return {
                id: meeting.id,
                occurrence_id: meeting.occurrence_id,
                title: meeting.topic.length > 0 ? meeting.topic : "(No title)",
                post_id: meeting.shop_post_object_id,
                date: datetime ? datetime.format("MMM DD, YYYY") : null,
                time: datetime ? datetime.format("hh:mm a") : null,
                timezone: meeting.timezone,
                location: meeting.location ? meeting.location : "",
                type: type === "offline" ? "Event" : "Zoom Event",
                recurrence:
                  (meeting.type === 2 && type === "offline") ||
                  (meeting.type === 8 && type === "zoom")
                    ? "Recurring"
                    : "One-time",
                tickets: "0/0",
                status: isPast
                  ? "Past"
                  : meeting.is_hidden
                  ? "Unlisted"
                  : "On sale",
              };
            })
          : [];
        setMeetingsList(rowsForTable);
        setActiveDropdown(false);
        setPagination({
          pageNumber: res.data.page_number,
          pageCount: res.data.page_count,
        });
        setLoading(false);
        if (settings.current_plan.id === 1) {
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      if (e.status === 401) {
        toast("Activation failed. Please contact the Servv support team.");
      } else {
        toast("Servv unable to fetch events.");
      }
      setLoading(false);
    }
    if (settings.current_plan.id === 1) {
      setIsLoading(false);
    }
  };
  const handleGetPrevPage = () => {
    getEventsList({ page: pagination.pageNumber - 1 });
  };
  const handleGetNextPage = () => {
    getEventsList({ page: pagination.pageNumber + 1 });
  };
  const handleGetPrevOccurrencessPage = () => {
    getEventOccurrencess(
      selectedEventForOccurrences,
      occurrencesPagination.pageNumber - 1
    );
  };
  const handleGetNextOccurrencessPage = () => {
    getEventOccurrencess(
      selectedEventForOccurrences,
      occurrencesPagination.pageNumber + 1
    );
  };
  const getData = async () => {
    if (firstFetchDone) return;
    setLoading(true);

    if (servvData.servv_plugin_mode === "development") {
      if (settings && Object.keys(filtersList).length > 0) {
        if (!firstFetchDone) {
          await getEventsList();
          if (settings.current_plan.id === 2) {
            await getZoomAccount();
          }
          setFirstFetchDone(true);
        }
      }
    } else {
      if (!firstFetchDone) {
        await getEventsList();

        if (settings.current_plan.id === 2) {
          getZoomAccount();
        }
        setFirstFetchDone(true);
      }
    }

    setIsPast(false);

    // setIsLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    if (!settings) return;
    if (firstFetchDone) return;

    const fetchOnce = async () => {
      setLoading(true);
      try {
        await getData();
        setFirstFetchDone(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOnce();
  }, [filtersList]);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  useEffect(() => {
    updateTimeFormat(settings);
    updateTimezone(settings);
  }, [settings]);

  const setActive = (id) => {
    if (active === id) setActiveDropdown(null);
    else setActiveDropdown(id);
  };
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map((event) => {
      return { id: event.post_id, occurrenceId: event.occurrence_id };
    });
    // console.log(selectedEvents)

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
  const [confirmationModalData, setConfirmationModalData] = useState({});

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
  const handleSelectEvent = (selected) => {
    let newSelection = [...selectedEvents];
    const isSelected = newSelection.filter((event) => {
      if (
        event.id === selected.id &&
        ((event.occurrence_id &&
          selected.occurrence_id &&
          event.occurrence_id === selected.occurrence_id) ||
          !event.occurrence_id)
      )
        return true;
      else return false;
    });

    if (isSelected.length > 0) {
      newSelection = newSelection.filter((event) => {
        if (
          !(
            event.id === selected.id &&
            ((event.occurrence_id &&
              selected.occurrence_id &&
              event.occurrence_id === selected.occurrence_id) ||
              !event.occurrence_id)
          )
        ) {
          return { ...event };
        }
      });
    } else {
      newSelection.push(selected);
    }

    setSelectedEvents(newSelection);
  };
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [timezone, setTimezone] = useState("US/Pacific");
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    toast(showError);
  }, [showError]);
  const handleReturnWithError = (error) => {
    if (error) {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setShowError(error);
    }
  };
  const updateTimeFormat = (settings) => {
    if (!settings) return;
    else if (
      settings &&
      settings.settings &&
      settings.settings.time_format_24_hours
    ) {
      setTimeFormat("HH:mm");
    }
  };
  const updateTimezone = (settings) => {
    let defaultTimezone = null;

    if (!settings) return;

    if (settings.settings?.admin_dashboard) {
      const adminSettings = JSON.parse(settings.settings.admin_dashboard);
      defaultTimezone = adminSettings.default_timezone || moment.tz.guess();
    } else {
      defaultTimezone = moment.tz.guess();
    }

    let findTimezone = timezones.filter((t) => t.zone === defaultTimezone);

    if (findTimezone.length > 0) {
      setTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment.tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;

      let availableTimezone = timezones.filter(
        (t) => t.gmt === formattedOffset
      );

      if (availableTimezone.length > 0) {
        setTimezone(availableTimezone[0]);
      }
    }
  };

  const renderHeadings = () => {
    return (
      <Fragment>
        <th>
          <CheckboxControl onClick={() => selectAll()} />
        </th>
        {headings.map((heading) => {
          if (heading.visible) return <th>{heading.label}</th>;
        })}
        <th></th>
      </Fragment>
    );
  };

  const handleEventChange = (newAttr) => {
    setAttributes((prevAttributes) => {
      const merged = { ...prevAttributes, ...newAttr };
      // console.log(merged, newAttr);
      return merged;
    });
  };
  const handleSearchChange = (val) => {
    setSearchString(val);
  };
  const renderRows = (events) => {
    return events.map((row) => {
      return (
        <tr className="table-row">
          <td>
            <CheckboxControl
              checked={
                selectedEvents.filter((event) => {
                  if (
                    event.id === row.id &&
                    event.occurrence_id === row.occurrence_id
                  )
                    return true;
                  else return false;
                }).length > 0 || selectedAll
              }
              size={2}
              onChange={() =>
                handleSelectEvent({
                  id: row.id,
                  occurrence_id: row.occurrence_id,
                })
              }
            />
          </td>
          {headings.map((heading) => {
            if (heading.visible) {
              if (heading.label === "Type")
                return (
                  <td>
                    <Badge
                      text={row[heading.value]}
                      type="badge"
                      color="gray"
                      size="small"
                      align="center"
                    />
                  </td>
                );
              if (heading.label === "Recurrence")
                return (
                  <td>
                    <Badge
                      text={row[heading.value]}
                      type="badge"
                      color={
                        row[heading.value] === "Recurring" ? "brand" : "gray"
                      }
                      size="small"
                      align="center"
                    />
                  </td>
                );
              if (heading.label === "Status")
                return (
                  <td>
                    <Badge
                      text={row[heading.value]}
                      type="pill-colour"
                      color={
                        row[heading.value] === "Past"
                          ? "blue"
                          : row[heading.value] === "Unlisted"
                          ? "warning"
                          : "success"
                      }
                      size="small"
                      align="center"
                    />
                  </td>
                );
              if (heading.label === "Date" && !row[heading.value]) {
                return (
                  <td>
                    <Badge
                      // icon={<CalendarIcon className="dropdown-icon" />}
                      text="Schedule"
                      onAction={() => {
                        setView("occurrences");
                        getEventOccurrencess(row.post_id);
                      }}
                      size="small"
                      align="center"
                    />
                  </td>
                );
              }
              if (heading.label === "Date" && row[heading.value]) {
                return (
                  <td>
                    <Badge text={row[heading.value]} />
                  </td>
                );
              }
              if (heading.label === "Time" && row[heading.value]) {
                return (
                  <td>
                    <Badge
                      text={`${moment(row[heading.value], "hh:mm a").format(
                        timeFormat
                      )}${
                        !settings?.settings?.hide_time_zone
                          ? " " + moment.tz(row.timezone).format("z").toString()
                          : ""
                      }`}
                      size="small"
                      align="center"
                      justify="center"
                    />
                    {/* {moment(row[heading.value], "hh:mm a").format(timeFormat)}

                    {!settings?.settings?.hide_time_zone &&
                      " " + moment.tz(row.timezone).format("z")} */}
                  </td>
                );
              }
              if (heading.label === "Time" && !row[heading.value]) {
                return (
                  <td>
                    <Badge
                      // icon={<ClockIcon className="dropdown-icon" />}
                      text={"View times"}
                      onAction={() => {
                        setView("occurrences");
                        getEventOccurrencess(row.post_id);
                      }}
                      align="center"
                      justify="center"
                      size="small"
                    />
                  </td>
                );
              }
              if (heading.label === "Title") {
                return (
                  <td>
                    <a
                      className="filter-table-link"
                      href={`${servvData.postUrl}?post=${row.post_id}&action=edit`}
                    >
                      {row[heading.value]}
                    </a>
                  </td>
                );
              } else return <td>{row[heading.value]}</td>;
            }
          })}
          <td className="filter-table-dropdown-container">
            <button
              onClick={() =>
                setActive(!row.occurrence_id ? row.id : row.occurrence_id)
              }
            >
              <Bars4Icon className="dropdown-icon" />
            </button>
            {((!row.occurrence_id && active === row.id) ||
              (row.occurrence_id && row.occurrence_id === active)) && (
              <div
                className="filter-table-dropdown absolute right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-lg p-4 mt-2 min-w-[220px]"
                ref={dropdownRefs}
              >
                <span className="dropdown-header">
                  {/* {`${row.title} ${row.occurrence_id ? "*" : ""}`} */}
                  {`${row.title}`}
                  <span className="dropdown-description flex flex-row">
                    {row.date}
                  </span>
                </span>
                <div className="dropdown-actions">
                  <BlockStack gap={4}>
                    {/* {row.occurrence_id && (
                      <span className="dropdown-description pb-2">
                        {t("* This is recurring event")}
                      </span>
                    )} */}
                    {row.occurrence_id && row.time && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          setSelectedOccurrence(row.occurrence_id),
                            setSelectedEvent(row.post_id);
                          setActive(false);
                        }}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
                        {/* {t("View occurrence")} */}
                        Occurrence details
                      </button>
                    )}
                    {row.recurrence === "Recurring" &&
                      view !== "occurrences" && (
                        <button
                          className="dropdown-action"
                          onClick={() => {
                            setView("occurrences");
                            getEventOccurrencess(row.post_id);
                          }}
                        >
                          <PencilSquareIcon className="dropdown-icon" />
                          {/* {t("View occurrence")} */}
                          View occurrences
                        </button>
                      )}
                    {view === "events" && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          setSelectedEvent(row.post_id);
                          setActive(false);
                        }}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
                        {/* {t("View event")} */}
                        Event details
                      </button>
                    )}
                    {view === "events" && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          setConfirmationModalData({
                            open: true,
                            text: "Delete selected event",
                            onAccept: () => {
                              handleEventDelete(row.post_id);
                              setConfirmationModalData({
                                open: false,
                                onAccept: () => {},
                                item: null,
                                text: "",
                              });
                            },
                            item: row.title,
                            onCancel: () =>
                              setConfirmationModalData({
                                open: false,
                                onAccept: () => {},
                                item: null,
                                text: "",
                              }),
                          });
                          setActive(false);
                        }}
                      >
                        <TrashIcon className="dropdown-icon-critical" />
                        {t("Delete event")}
                      </button>
                    )}
                    {row.occurrence_id && view === "occurrences" && (
                      <button
                        className="dropdown-action"
                        // onClick={() =>
                        //   handleEventDelete(row.post_id, row.occurrence_id)
                        // }
                        onClick={() => {
                          setConfirmationModalData({
                            open: true,
                            text: "Delete selected occurrence of this event",
                            onAccept: () => {
                              handleEventDelete(row.post_id, row.occurrence_id);
                              setConfirmationModalData({
                                open: false,
                                onAccept: () => {},
                                item: null,
                                text: "",
                              });
                            },
                            item: row.title,
                            onCancel: () =>
                              setConfirmationModalData({
                                open: false,
                                onAccept: () => {},
                                item: null,
                                text: "",
                              }),
                          });
                          setActive(false);
                        }}
                      >
                        <TrashIcon className="dropdown-icon-critical" />
                        {t("Delete occurrence")}
                      </button>
                    )}
                  </BlockStack>
                </div>
              </div>
            )}
          </td>
        </tr>
      );
    });
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
        timezone.zone
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
        timezone.zone
      );

    setDates({
      startDate: startDate ? startDate : null,
      endDate: endDate ? endDate : null,
    });
  };
  // Mobile event card renderer (for <768px)
  const renderMobileCards = (events) =>
    events.map((row) => (
      <div
        key={row.id + (row.occurrence_id || "")}
        className="mobile-event-row flex items-center justify-between px-4 py-3 mb-3 bg-white rounded-xl shadow-sm"
      >
        <div>
          <div className="mobile-event-title font-semibold text-base text-gray-900">
            {row.title}
          </div>
          <div className="mobile-event-date text-sm text-purple-700">
            {row.date}
          </div>
        </div>
        <button
          className="mobile-event-actions ml-2 p-2 rounded-full hover:bg-gray-100"
          aria-label="Show event details"
          title="Show details"
          onClick={() => setActiveDropdown(row.occurrence_id || row.id)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="2" fill="#7c3aed" />
            <circle cx="12" cy="12" r="2" fill="#7c3aed" />
            <circle cx="19" cy="12" r="2" fill="#7c3aed" />
          </svg>
        </button>
      </div>
    ));

  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active)
      open("post-new.php?servv_plugin=true", "_top");
    else
      toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };

  return (
    <Fragment>
      {!selectedEvent && (
        <PageWrapper loading={loading}>
          <div className="w-full max-w-full px-0">
            {/* --- DESKTOP HEADER --- */}
            <div className="hidden md:flex items-center justify-between mt-6 mb-2">
              <h1 className="text-display-sm font-semibold">{t("Events")}</h1>
              <div className="flex gap-3">
                <button
                  className="flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition"
                  onClick={() => setShowCustomizeModal(true)}
                >
                  <AdjustmentsVerticalIcon className="w-5 h-5" />
                  {/* {t("Customise")} */}
                </button>
                <button
                  className="flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white font-medium text-base hover:bg-purple-700 transition"
                  onClick={() => handleCreateNewEvent()}
                >
                  <PlusIcon className="w-5 h-5 mr-2" />
                  {t("Create event")}
                </button>
              </div>
            </div>
            {/* --- MOBILE HEADER (Events title + Create/Customise icons) --- */}
            <div className="md:hidden px-4 pt-4 pb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">
                  {t("Events")}
                </h1>
                <div className="flex gap-2">
                  <button
                    aria-label={t("Customize")}
                    title={t("Customize")}
                    className="p-2 rounded-full bg-white shadow"
                    onClick={() => setShowCustomizeModal(true)}
                  >
                    <AdjustmentsVerticalIcon className="w-5 h-5" />
                  </button>
                  <button
                    aria-label={t("Create Event")}
                    title={t("Create Event")}
                    className="p-2 rounded-full bg-purple-600 text-white shadow"
                    onClick={() =>
                      open("post-new.php?servv_plugin=true", "_top")
                    }
                  >
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <InlineStack gap={4} align="left">
              <ButtonGroupConnected>
                <ConnectedButton
                  text={t("Upcoming")}
                  selected={!isPast}
                  onAction={handleIsPastChange}
                />
                <ConnectedButton
                  text={t("Past")}
                  selected={isPast}
                  onAction={handleIsPastChange}
                />
              </ButtonGroupConnected>
              {settings &&
                settings.current_plan &&
                settings.current_plan.id === 2 && (
                  <ButtonGroupConnected>
                    <ConnectedButton
                      text={t("Events")}
                      selected={eventType === "offline"}
                      onAction={() => handleTypeChange("offline")}
                    />
                    <ConnectedButton
                      text={"Zoom"}
                      // text={t("Zoom Events")}
                      selected={eventType === "zoom"}
                      onAction={() => handleTypeChange("zoom")}
                    />
                  </ButtonGroupConnected>
                )}
            </InlineStack>
            <Card className="w-full max-w-none px-0 mt-4">
              {/* --- MOBILE: Search, Date, Filter icons under "Your Events" --- */}
              <div className="md:hidden flex items-center px-4 pt-4 pb-2">
                {/* Search icon left */}
                <button
                  aria-label={t("Search")}
                  title={t("Search")}
                  className={`p-2 rounded-full bg-white shadow ${
                    showMobileSearch ? "ring-2 ring-purple-400" : ""
                  }`}
                  onClick={() => setShowMobileSearch((prev) => !prev)}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="#7c3aed"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 16l4 4"
                      stroke="#7c3aed"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {/* Spacer */}
                <div className="flex-1"></div>
                {/* Date and Filter icons right, spaced from edge */}
                <div className="flex gap-2 pr-1">
                  <button
                    aria-label={t("Date")}
                    title={t("Pick date")}
                    className="p-2 rounded-full bg-white shadow"
                    onClick={() => setShowDateModal(true)}
                  >
                    <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                      <rect
                        x="3"
                        y="5"
                        width="16"
                        height="14"
                        rx="2"
                        stroke="#7c3aed"
                        strokeWidth="2"
                      />
                      <path
                        d="M7 3v4M15 3v4"
                        stroke="#7c3aed"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label={t("Filters")}
                    title={t("Filters")}
                    className="p-2 rounded-full bg-white shadow"
                    onClick={() => setShowFiltersModal(true)}
                  >
                    <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                      <path
                        d="M3 5h16M6 10h10M9 15h4"
                        stroke="#7c3aed"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* --- MOBILE: Inline search bar --- */}
              {showMobileSearch && (
                <div className="md:hidden px-4 pb-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    placeholder={t("Enter search")}
                    value={searchString}
                    autoFocus
                    onChange={(e) => setSearchString(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && getEventsList()}
                  />
                  <button
                    className="w-full bg-purple-600 text-white rounded py-2"
                    onClick={() => getEventsList()}
                  >
                    {t("Search")}
                  </button>
                </div>
              )}
              <EventsCardHeader
                eventsCount={
                  view === "events"
                    ? meetingsList.length
                    : eventOccurrencess.length
                }
                view={view}
                backToEventsList={() => setView("events")}
                search={searchString}
                onChange={handleSearchChange}
                filtersList={filtersList}
                onFiltering={getEventsList}
                selectedFilters={selectedFilters}
                handleFilterSelect={handleFilterSelect}
                dates={dates}
                setDates={handleSetDates}
                isFiltersApplyed={isFiltersApplyed()}
                resetFilters={resetFilters}
                isPast={isPast}
                timezone={timezone}
              />
              {/* Desktop Table */}
              <div className="hidden md:block w-full">
                {view === "events" && (
                  <FilterTable
                    headings={renderHeadings()}
                    rows={renderRows(meetingsList)}
                  />
                )}
                {view === "occurrences" && (
                  <FilterTable
                    headings={renderHeadings()}
                    rows={renderRows(eventOccurrencess)}
                  />
                )}
              </div>
              {/* Mobile Cards */}
              <div className="block md:hidden">
                {renderMobileCards(
                  view === "events" ? meetingsList : eventOccurrencess
                )}
              </div>
              {view === "events" && pagination.pageCount > 1 && (
                <ListPagination
                  hasPrev={pagination.pageNumber > 1}
                  hasNext={pagination.pageNumber < pagination.pageCount}
                  onPrev={() => handleGetPrevPage()}
                  onNext={() => handleGetNextPage()}
                />
              )}
              {view === "occurrences" && (
                <ListPagination
                  hasPrev={occurrencesPagination.pageNumber > 1}
                  hasNext={
                    occurrencesPagination.pageNumber <
                    occurrencesPagination.pageCount
                  }
                  onPrev={() => handleGetPrevOccurrencessPage()}
                  onNext={() => handleGetNextOccurrencessPage()}
                />
              )}
            </Card>
          </div>
        </PageWrapper>
      )}
      {selectedEvent && (
        <SingleEventPage
          attributes={attributes}
          setAttributes={handleEventChange}
          postID={selectedEvent}
          occurrenceId={selectedOccurrence}
          adminSection={true}
          returnWithError={handleReturnWithError}
          setSelectedEvent={setSelectedEvent}
          filters={filtersList}
          settings={settings}
        />
      )}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-sm search-modal">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">
                {t("Search Events")}
              </span>
              <button
                onClick={() => setShowSearchModal(false)}
                aria-label="Close"
              >
                {t("×")}
              </button>
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder={t("Enter search")}
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && getEventsList()}
            />
            <button
              className="mt-3 w-full bg-purple-600 text-white rounded py-2"
              onClick={() => {
                getEventsList();
                setShowSearchModal(false);
              }}
            >
              {t("Search")}
            </button>
          </div>
        </div>
      )}
      {showCustomizeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-sm max-h-[90vh] overflow-y-auto customize-modal">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">
                {t("Customize Columns")}
              </span>
              <button
                onClick={() => setShowCustomizeModal(false)}
                aria-label="Close"
              >
                {t("×")}
              </button>
            </div>
            <ul>{renderHeadingsCustomization()}</ul>
            <button
              className="mt-3 w-full bg-purple-600 text-white rounded py-2"
              onClick={() => setShowCustomizeModal(false)}
            >
              {t("Done")}
            </button>
          </div>
        </div>
      )}
      {showFiltersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-sm max-h-[90vh] overflow-y-auto filters-modal">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{t("Filters")}</span>
              <button
                onClick={() => setShowFiltersModal(false)}
                aria-label="Close"
              >
                {t("×")}
              </button>
            </div>
            {Object.keys(filtersList).map((filter) =>
              filtersList[filter].length > 0 ? (
                <div key={filter} className="mb-3">
                  <div className="font-semibold mb-1">
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </div>
                  {filtersList[filter].map((filterToSelect) => (
                    <CheckboxControl
                      key={filterToSelect.id}
                      label={filterToSelect.name}
                      checked={
                        selectedFilters[filter] &&
                        selectedFilters[filter].includes(filterToSelect.id)
                      }
                      onChange={() =>
                        handleFilterSelect(filter, filterToSelect.id)
                      }
                      font="text-sm"
                      color="text-gray-700"
                    />
                  ))}
                </div>
              ) : null
            )}
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700"
                onClick={resetFilters}
              >
                {t("Reset")}
              </button>
              <button
                className="flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg"
                onClick={() => {
                  getEventsList();
                  setShowFiltersModal(false);
                }}
              >
                {t("Apply")}
              </button>
            </div>
          </div>
        </div>
      )}
      {showDateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-sm date-modal">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{t("Select Dates")}</span>
              <button
                onClick={() => setShowDateModal(false)}
                aria-label="Close"
              >
                {t("×")}
              </button>
            </div>
            <Datepicker
              displayFormat={"MMM DD, YYYY"}
              value={getDates()}
              inputClassName="w-full border border-gray-300 rounded px-3 py-2"
              onChange={handleSetDates}
            />
            <button
              className="mt-3 w-full bg-purple-600 text-white rounded py-2"
              onClick={() => {
                getEventsList();
                setShowDateModal(false);
              }}
            >
              {t("Apply")}
            </button>
          </div>
        </div>
      )}
      <ConfirmationModal data={confirmationModalData} />
    </Fragment>
  );
};
export default EventsPage;
