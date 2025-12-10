import React, { Fragment, useEffect, useState, useRef } from "react";
import { useEventsLogic } from "./Events/useEventsLogic";
import PageActionButton from "../Controls/PageActionButton";
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
import { toast } from "react-toastify";
import {
  AdjustmentsVerticalIcon,
  PlusIcon,
  Bars4Icon,
  PencilSquareIcon,
  TrashIcon,
  ArrowLeftIcon,
} from "@heroicons/react/16/solid";
import Guideline from "./Guideline";
import { useServvStore } from "../../store/useServvStore";

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
  isFiltersApplied,
  resetFilters,
  isPast,
  handleSearchSubmit,
  timezone,
}) => {
  const [filterDropdown, setFilterDropdown] = useState(false);
  const filterDropdownRef = useRef(null);

  const [localSearch, setLocalSearch] = useState(search);

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(localSearch);
    }
  };

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

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

  const isFiltersEmpty = Object.values(filtersList).every(
    (value) => Array.isArray(value) && value.length === 0
  );

  const changeFilterDropdown = () => setFilterDropdown(!filterDropdown);

  const getDates = () => {
    let out = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate;
      out.startDate = new Date(
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
      out.endDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    return out;
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

        {isFiltersApplied && (
          <a className="card-header-description-link" onClick={resetFilters}>
            {t("Clear filters")}
          </a>
        )}
      </div>

      {!isPast && (
        <div className="hidden md:flex">
          <InlineStack align={"left"} gap={4} cardsLayout={false}>
            <InputFieldControl
              value={localSearch}
              placeholder={t("Enter search string")}
              onChange={setLocalSearch}
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
                    onAction={changeFilterDropdown}
                  />
                }
                status={filterDropdown}
                onClose={() => setFilterDropdown(false)}
              >
                <BlockStack gap={4}>
                  {Object.keys(filtersList).map((filter) => (
                    <CollapsibleSection
                      key={filter}
                      sectionHeading={
                        filter.charAt(0).toUpperCase() + filter.substring(1)
                      }
                    >
                      <BlockStack gap={2}>
                        {filtersList[filter].map((item) => (
                          <CheckboxControl
                            key={item.id}
                            label={item.name}
                            checked={
                              selectedFilters[filter]?.includes(item.id) ||
                              false
                            }
                            onChange={() => handleFilterSelect(filter, item.id)}
                            font="text-sm"
                            color="text-gray-500"
                          />
                        ))}
                      </BlockStack>
                    </CollapsibleSection>
                  ))}

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
  redirect = () => {},
}) => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);

  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const gmailAccount = useServvStore((s) => s.gmailAccount);
  const stripeAccount = useServvStore((s) => s.stripeAccount);
  const calendarAccount = useServvStore((s) => s.calendarAccount);

  const fetchZoomAccount = useServvStore((s) => s.fetchZoomAccount);
  const fetchStripeAccount = useServvStore((s) => s.fetchStripeAccount);
  const fetchGmailAccount = useServvStore((s) => s.fetchGmailAccount);

  const {
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
    handleIsPastChange,
    handleTypeChange,
    handleSetDates,
    handleSearchChange,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    getEventsList,
    getEventOccurrencess,
    handleGetPrevPage,
    handleGetNextPage,
    handleGetPrevOccurrencessPage,
    handleGetNextOccurrencessPage,
    handleEventChange,
    handleEventDelete,
    handleOpenEvent,
    handleSearchSubmit,
    handleReturnWithError,
    resetSubpageSelection,
    setShowGuide,
  } = useEventsLogic(settings, filtersList, zoomAccount);

  useEffect(() => {
    if (!settings) return;

    const planId = settings.current_plan?.id;

    if (planId === 2 && zoomAccount === null) {
      fetchZoomAccount();
    }
  }, [settings]);

  const [headings, setHeadings] = useState([
    { label: t("Title"), value: "title", visible: true },
    { label: t("Date"), value: "date", visible: true },
    { label: t("Time"), value: "time", visible: true },
    { label: t("Location"), value: "location", visible: true },
    { label: t("Type"), value: "type", visible: true },
    { label: t("Recurrence"), value: "recurrence", visible: true },
    { label: t("Status"), value: "status", visible: true },
  ]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [active, setActiveDropdown] = useState(null);

  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [confirmationModalData, setConfirmationModalData] = useState({});

  const dropdownRefs = useRef(null);

  useEffect(() => {
    if (active === null) return;
    const handleClickOutside = (event) => {
      try {
        const ref = dropdownRefs.current;
        if (active && ref && !ref.contains(event.target)) {
          setActiveDropdown(null);
        }
      } catch (e) {}
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  useEffect(() => {
    if (resetSelectedSubpage) {
      resetSubpageSelection();
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage, resetSubpageSelection, handleResetSubpage]);

  const customizeHeading = (heading) => {
    let newHeadings = [...headings];
    let selectedHeading = headings.map((h) => h.value).indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
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
        return false;
      });
    } else {
      newSelection.push(selected);
    }

    setSelectedEvents(newSelection);
  };

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
    } catch (error) {}
  };

  const renderHeadings = () => {
    return (
      <Fragment>
        <th>
          <CheckboxControl onClick={() => selectAll()} />
        </th>
        {headings.map((heading) => {
          if (heading.visible)
            return <th key={heading.value}>{heading.label}</th>;
          return null;
        })}
        <th></th>
      </Fragment>
    );
  };

  const renderRows = (events) => {
    return events.map((row) => {
      const key = row.id + (row.occurrence_id || "");
      return (
        <tr className="table-row" key={key}>
          <td>
            <CheckboxControl
              checked={
                selectedAll ||
                selectedEvents.filter((event) => {
                  if (
                    event.id === row.id &&
                    event.occurrence_id === row.occurrence_id
                  )
                    return true;
                  else return false;
                }).length > 0
              }
              size={2}
              onChange={() =>
                handleSelectEvent({
                  id: row.id,
                  occurrence_id: row.occurrence_id,
                  post_id: row.post_id,
                })
              }
            />
          </td>
          {headings.map((heading) => {
            if (!heading.visible) return null;

            if (heading.label === "Type")
              return (
                <td key={heading.value}>
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
                <td key={heading.value}>
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
                <td key={heading.value}>
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
                <td key={heading.value}>
                  <Badge
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
                <td key={heading.value}>
                  <Badge text={row[heading.value]} />
                </td>
              );
            }

            if (heading.label === "Time" && row[heading.value]) {
              return (
                <td key={heading.value}>
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
                </td>
              );
            }

            if (heading.label === "Time" && !row[heading.value]) {
              return (
                <td key={heading.value}>
                  <Badge
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
                <td key={heading.value}>
                  <a
                    className="filter-table-link"
                    href={`${servvData.postUrl}?post=${row.post_id}&action=edit`}
                  >
                    {row[heading.value]}
                  </a>
                </td>
              );
            }

            return <td key={heading.value}>{row[heading.value]}</td>;
          })}
          <td className="filter-table-dropdown-container">
            <button
              onClick={() =>
                setActiveDropdown(
                  !row.occurrence_id ? row.id : row.occurrence_id
                )
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
                  {`${row.title}`}
                  <span className="dropdown-description flex flex-row">
                    {row.date}
                  </span>
                </span>
                <div className="dropdown-actions">
                  <BlockStack gap={4}>
                    {row.occurrence_id && row.time && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          handleOpenEvent({
                            id: row.post_id,
                            occurrence_id: row.occurrence_id,
                          });
                          // setSelectedOccurrence(row.occurrence_id);
                          // setSelectedEvent(row.post_id);
                          setActiveDropdown(null);
                        }}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
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
                            setActiveDropdown(null);
                          }}
                        >
                          <PencilSquareIcon className="dropdown-icon" />
                          View occurrences
                        </button>
                      )}
                    {view === "events" && (
                      <button
                        className="dropdown-action"
                        onClick={() => {
                          handleOpenEvent({ id: row.post_id });
                          setActiveDropdown(null);
                        }}
                      >
                        <PencilSquareIcon className="dropdown-icon" />
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
                          setActiveDropdown(null);
                        }}
                      >
                        <TrashIcon className="dropdown-icon-critical" />
                        {t("Delete event")}
                      </button>
                    )}
                    {row.occurrence_id && view === "occurrences" && (
                      <button
                        className="dropdown-action"
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
                          setActiveDropdown(null);
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

  const getDatesForModal = () => {
    let datesValue = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate;
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
      {!selectedEvent &&
        showGuide &&
        (!zoomAccount || (zoomAccount && !zoomAccount.id)) && (
          <Guideline showGuide={setShowGuide} redirect={redirect} />
        )}
      {!selectedEvent && (!showGuide || (zoomAccount && zoomAccount.id)) && (
        <PageWrapper loading={false}>
          <div className="w-full max-w-full px-0">
            <div className="hidden md:flex items-center justify-between mt-6 mb-2">
              <h1 className="text-display-sm">Events</h1>
              <div className="flex gap-3">
                <button
                  className="flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition"
                  onClick={() => setShowCustomizeModal(true)}
                >
                  <AdjustmentsVerticalIcon className="w-5 h-5" />
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
                      selected={eventType === "zoom"}
                      onAction={() => handleTypeChange("zoom")}
                    />
                  </ButtonGroupConnected>
                )}
            </InlineStack>

            <Card className="w-full max-w-none px-0 mt-4">
              <div className="md:hidden flex items-center px-4 pt-4 pb-2">
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
                <div className="flex-1"></div>
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

              {showMobileSearch && (
                <div className="md:hidden px-4 pb-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    placeholder={t("Enter search")}
                    value={searchString}
                    autoFocus
                    onChange={(e) => handleSearchChange(e.target.value)}
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
                handleSearchSubmit={handleSearchSubmit}
                selectedFilters={selectedFilters}
                handleFilterSelect={handleFilterSelect}
                dates={dates}
                setDates={handleSetDates}
                isFiltersApplied={isFiltersApplied()}
                resetFilters={resetFilters}
                isPast={isPast}
                timezone={timezone}
              />

              <div className="hidden md:block w-full">
                {view === "events" && (
                  <FilterTable
                    headings={renderHeadings()}
                    rows={renderRows(meetingsList)}
                    loading={loading}
                  />
                )}
                {view === "occurrences" && (
                  <FilterTable
                    headings={renderHeadings()}
                    rows={renderRows(eventOccurrencess)}
                    loading={loading}
                  />
                )}
              </div>

              <div className="mobile-cards-container">
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
          setAttributes={setAttributes}
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
              onChange={(e) => handleSearchChange(e.target.value)}
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
              <span className="font-semibold mb-1">{t("Filters")}</span>
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
              value={getDatesForModal()}
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
