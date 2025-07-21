import React, { Fragment, useEffect, useState } from "react";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
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
import { toast } from "react-toastify";
import InlineStack from "../Containers/InlineStack";
import ButtonGroupConnected from "../Controls/ButtonGroupConnected";
import ConnectedButton from "../Controls/ConnectedButton";
import BlockStack from "../Containers/BlockStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import FilterTable from "../Containers/FilterTable";
import apiFetch from "@wordpress/api-fetch";
import moment from "moment-timezone";
import SingleEventPage from "./SingleEventPage";
import ListPagination from "../Controls/ListPagination";
import CheckboxControl from "../Controls/CheckboxControl";
import Dropdown from "../Containers/Dropdown";
import InputFieldControl from "../Controls/InputFieldControl";
import CollapsibleSection from "../Containers/CollapsibleSection";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import PageWrapper from "./PageWrapper";
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
}) => {
  const isFiltersEmpty = Object.values(filtersList).reduce(
    (allEmptySoFar, value) => {
      return allEmptySoFar && Array.isArray(value) && value.length === 0;
    },
    true
  );

  const [filterDropdown, setFilterDropdown] = useState(false);
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
          <Fragment>
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

  return (
    <div className="card-header">
      <div className="card-heading">
        <span>{view === "events" ? "Your Events" : "Event Occurrences"}</span>
        <Badge
          text={`${eventsCount} item${eventsCount > 1 ? "s" : ""}`}
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
            <span className="pagination-control-text">Back to events view</span>
          </button>
        )}
      </div>
      <div className="card-description">
        {dates.startDate && dates.endDate && (
          <span>
            You are viewing events between{" "}
            {moment(dates.startDate).format("MMM DD, YYYY")} -{" "}
            {moment(dates.endDate).format("MMM DD, YYYY")}
          </span>
        )}
        {isFiltersApplyed && (
          <a
            className="card-header-description-link"
            onClick={() => resetFilters()}
          >
            Clear filters
          </a>
        )}
      </div>
      {!isPast && (
        <InlineStack align={"left"} gap={4} cardsLayout={false}>
          <InputFieldControl
            value={search}
            placeholder="Enter search string"
            onChange={onChange}
            handleKeyPress={handleEnterButton}
            fullWidth={true}
            align="left"
          />
          <Datepicker
            displayFormat={"MMM DD, YYYY"}
            value={dates}
            placeholder="Select dates"
            inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white"
            onChange={(newValue) => setDates(newValue)}
          />
          {!isFiltersEmpty && (
            <Dropdown
              activator={
                <PageActionButton
                  text="Filters"
                  icon={<AdjustmentsVerticalIcon className="button-icon" />}
                  type="secondary"
                  onAction={() => changeFilterDropdown()}
                />
              }
              status={filterDropdown}
            >
              {/* <CollapsibleSection sectionHeading={"Event type"}>

          </CollapsibleSection> */}
              <BlockStack gap={4}>
                {renderFilteringWithFilters()}
                <PageActionButton
                  text={<span className="text-center">Apply</span>}
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
  setIsLoading = () => {},
}) => {
  const [customizeDropdown, setCustomizeDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [headings, setHeadings] = useState([
    { label: "Title", value: "title", visible: true },
    { label: "Date", value: "date", visible: true },
    { label: "Time", value: "time", visible: true },
    { label: "Location", value: "location", visible: true },
    { label: "Type", value: "type", visible: true },
    { label: "Recurrence", value: "recurrence", visible: true },
    // { label: "Tickets Sold", value: "tickets", visible: true },
    { label: "Status", value: "status", visible: true },
  ]);
  const [firstFetchDone, setFirstFetchDone] = useState(false);
  const [isPast, setIsPast] = useState(false);
  // const [filtersList, setFiltersList] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [eventType, setEventType] = useState("offline");
  const [zoomAccount, setZoomAccount] = useState(null);
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
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  useEffect(() => {
    if (resetSelectedSubpage) {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
  useEffect(() => {}, [selectedFilters]);

  const customizeHeading = (heading) => {
    let newHeadings = [...headings];
    let selectedHeading = headings
      .map((heading) => heading.value)
      .indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
  };
  useEffect(() => {
    toast("Loading settings");
    if (settings) getEventsList({ is_Past: isPast });
  }, [isPast]);

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
          label={heading.label}
          name={heading.label}
          checked={heading.visible}
          onChange={() => customizeHeading(heading.value)}
        />
      );
    });
  };
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
  const selectAll = () => {
    setSelectedAll(!selectedAll);
  };
  const [view, setView] = useState("events");
  const [eventOccurrencess, setEventOccurrencess] = useState([]);
  const [occurrencesPagination, setOccurrencesPagination] = useState({});
  const getEventOccurrencess = async (event, page = 1, eventType) => {
    setLoading(true);
    let res = await apiFetch({
      path: `/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`,
    });
    if (res) {
      const rowsForTable = res.meetings
        ? res.meetings.map((meeting) => {
            const datetime = moment.tz(meeting.start_time, meeting.timezone);
            return {
              id: meeting.id,
              occurrence_id: meeting.occurrence_id,
              title: meeting.topic.length > 0 ? meeting.topic : "(No title)",
              post_id: meeting.shop_post_object_id,
              timezone: meeting.timezone,
              date: datetime.format("MMM DD, YYYY"),
              time: datetime.format("hh:mm a"),
              location: meeting.location ? meeting.location : "Unknown",
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
        pageNumber: res.page_number,
        pageCount: res.page_count,
      });
    }
    setLoading(false);
  };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/zoom/account",
    });
    if (getZoomAccountResponse) {
      setZoomAccount(getZoomAccountResponse);
    }
    setIsLoading(false);
  };
  // const getSettings = async () => {
  //   try {
  //     const getSettingsResponse = await axios.get(
  //       "/wp-json/servv-plugin/v1/shop/info",
  //       {
  //         headers: { "X-WP-Nonce": servvData.nonce },
  //       }
  //     );
  //     if (getSettingsResponse && getSettingsResponse.data) {
  //       setSettings(getSettingsResponse.data);
  //       updateTimeFormat(getSettingsResponse.data);
  //     }
  //   } catch (e) {
  //     if (e.code === 401) {
  //       setLoading(false);
  //       toast(
  //         "We're facing an issue loading the settings. Please reactivate the plugin."
  //       );
  //     }
  //   }
  // };

  // const getFilterType = async (type) => {
  //   try {
  //     let reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
  //     let getFiltersListResponse = await axios.get(reqURL, {
  //       headers: { "X-WP-Nonce": servvData.nonce },
  //     });

  //     if (getFiltersListResponse.status === 200) {
  //       setFiltersList((prevFilters) => ({
  //         ...prevFilters,
  //         [type]: getFiltersListResponse.data, // Preserve existing filters
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching filters:", error);
  //   }
  // };
  // const getFilters = async () => {
  //   if (servvData.servv_plugin_mode === "development") {
  //     await getFilterType("locations");
  //     await getFilterType("languages");
  //     await getFilterType("categories");
  //     if (settings.current_plan.id === 2) {
  //       await getFilterType("members");
  //     }
  //   } else {
  //     getFilterType("locations");
  //     getFilterType("languages");
  //     getFilterType("categories");
  //     if (settings.current_plan.id === 2) {
  //       getFilterType("members");
  //     }
  //   }
  // };
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
  const [searchString, setSearchString] = useState("");
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
    if (firstFetchDone) getEventsList();
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
      console.log(dates.startDate, filterApplied, searchString.length > 0);
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
      let reqUrl = `/servv-plugin/v1/events/${selectedEventType}?page_size=10&page=${page}&without_occurrences=true`;
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
      let res = await apiFetch({
        path: reqUrl,
      });
      if (res) {
        const rowsForTable = res.meetings
          ? res.meetings.map((meeting) => {
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
                location: meeting.location ? meeting.location : "Unknown",
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
          pageNumber: res.page_number,
          pageCount: res.page_count,
        });
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      toast("Servv unable to fetch zoom events.");
      setLoading(false);
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
    setLoading(true);
    if (servvData.servv_plugin_mode === "development") {
      if (settings && Object.keys(filtersList).length > 0) {
        await getEventsList();
        if (settings.current_plan.id === 2) {
          await getZoomAccount();
        }
      }
    } else {
      getEventsList();
      if (settings.current_plan.id === 2) {
        getZoomAccount();
      }
    }
    setFirstFetchDone(true);
    setIsPast(false);
    setLoading(false);
    // setIsLoading(false);
  };

  useEffect(() => {
    if (settings) {
      getData();
    }
  }, [settings, filtersList]);
  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  useEffect(() => {
    updateTimeFormat(settings);
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
  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) {
      url += `?occurrence_id=${occurrenceID}`;
    }
    const res = await apiFetch({ path: url, method: "DELETE" });
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
                      icon={<CalendarIcon className="dropdown-icon" />}
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
                      icon={<ClockIcon className="dropdown-icon" />}
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
                      href={`/wp-admin/post.php?post=${row.post_id}&action=edit`}
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
              <div className="filter-table-dropdown">
                <span className="dropdown-header">
                  {row.title}{" "}
                  <span className="dropdown-description">
                    {row.date}
                    {row.occurrence_id && <span> *</span>}
                  </span>
                </span>
                <div className="dropdown-actions">
                  <BlockStack gap={4}>
                    {row.occurrence_id && (
                      <span className="dropdown-description pb-2">
                        * This is recurring event
                      </span>
                    )}
                    {row.occurrence_id && row.time && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          setSelectedOccurrence(row.occurrence_id),
                            setSelectedEvent(row.post_id);
                        }}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
                        Edit occurrence
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
                          Edit occurrences
                        </button>
                      )}
                    {view === "events" && (
                      <button
                        className="dropdown-action"
                        onClick={() => setSelectedEvent(row.post_id)}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
                        Edit event
                      </button>
                    )}
                    {view === "events" && (
                      <button
                        className="dropdown-action"
                        onClick={() => handleEventDelete(row.post_id)}
                      >
                        <TrashIcon className="dropdown-icon-critical" />
                        Delete event
                      </button>
                    )}
                    {row.occurrence_id && (
                      <button
                        className="dropdown-action"
                        onClick={() =>
                          handleEventDelete(row.post_id, row.occurrence_id)
                        }
                      >
                        <TrashIcon className="dropdown-icon-critical" />
                        Delete occurrence
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

  return (
    <Fragment>
      {!selectedEvent && (
        <PageWrapper loading={loading || isLoading}>
          <BlockStack gap={4}>
            <PageHeader>
              <BlockStack>
                <h1 className="text-display-sm font-semibold mt-6">
                  Event Booking
                </h1>
                <p className="page-header-description">
                  Create, manage, and showcase your events easily to boost
                  attendance
                </p>
              </BlockStack>
              <InlineStack gap={2} align="right">
                <Dropdown
                  activator={
                    <PageActionButton
                      text="Customize"
                      icon={<AdjustmentsVerticalIcon className="button-icon" />}
                      type="secondary"
                      onAction={() => {
                        setCustomizeDropdown(!customizeDropdown);
                      }}
                    />
                  }
                  status={customizeDropdown}
                >
                  <ul>{renderHeadingsCustomization()}</ul>
                </Dropdown>
                {/* <PageActionButton
                  text="Export"
                  icon={<ArrowUpTrayIcon className="button-icon" />}
                  type="secondary"
                  onAction={handleMultipleEventsDelete}
                />
                <PageActionButton
                  text="Import"
                  icon={<ArrowDownTrayIcon className="button-icon" />}
                  type="secondary"
                /> */}
                <PageActionButton
                  text="New event"
                  onAction={() =>
                    open("post-new.php?servv_plugin=true", "_top")
                  }
                  icon={<PlusIcon className="button-icon" />}
                  type="primary"
                />
              </InlineStack>
            </PageHeader>
            <InlineStack gap={4} align="left">
              <ButtonGroupConnected>
                {/* <ConnectedButton text="View all" /> */}
                <ConnectedButton
                  text="Upcoming"
                  selected={!isPast}
                  onAction={handleIsPastChange}
                />
                <ConnectedButton
                  text="Past"
                  selected={isPast}
                  onAction={handleIsPastChange}
                />
                {/* <ConnectedButton text="Archived" /> */}
              </ButtonGroupConnected>
              {zoomAccount && zoomAccount.name && (
                <ButtonGroupConnected>
                  <ConnectedButton
                    text="Events"
                    selected={eventType === "offline"}
                    onAction={() => handleTypeChange("offline")}
                  />
                  <ConnectedButton
                    text="Zoom meetings"
                    selected={eventType === "zoom"}
                    onAction={() => handleTypeChange("zoom")}
                  />
                </ButtonGroupConnected>
              )}
            </InlineStack>
            <Card>
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
                setDates={setDates}
                isFiltersApplyed={isFiltersApplyed()}
                resetFilters={resetFilters}
                isPast={isPast}
              />
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
          </BlockStack>
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
    </Fragment>
  );
};
export default EventsPage;
