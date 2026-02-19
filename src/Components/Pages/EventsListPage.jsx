import React, { Fragment, useEffect, useState, useRef } from "react";
import { useEventsLogic } from "./Events/useEventsLogicMerged";
import PageActionButton from "../Controls/PageActionButton";
import InlineStack from "../Containers/InlineStack";
import NewButtonGroup from "../Controls/NewButtonGroup";
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CloseIcon } from "../../assets/icons";
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
import SpinnerLoader from "./SpinnerLoader";

// =====================================================================
// CARD HEADER
// =====================================================================

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
    if (e.key === "Enter") handleSearchSubmit(localSearch);
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
    (value) => Array.isArray(value) && value.length === 0,
  );

  const changeFilterDropdown = () => setFilterDropdown((p) => !p);

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
        d.second(),
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
        d.second(),
      );
    }
    return out;
  };

  return (
    <div className="card-header">
      <div className="card-heading">
        {view !== "events" && <span>{t("Event Occurrences")}</span>}
        {eventsCount > 0 && (
          <Badge
            text={`${eventsCount} ${"item"}${eventsCount > 1 ? "s" : ""}`}
            color="secondary"
            size="small"
            align="center"
          />
        )}
        {view === "occurrences" && (
          <button
            className="pagination-control ml-auto"
            onClick={backToEventsList}
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
          <InlineStack align="left" gap={4} cardsLayout={false}>
            <InputFieldControl
              value={localSearch}
              placeholder={"Search events by name"}
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
                    justify="justify-center"
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

// =====================================================================
// HEADINGS STORAGE HELPERS (module-level, no re-creation on render)
// =====================================================================

const HEADINGS_STORAGE_KEY = "servv_events_headings";

const defaultHeadings = [
  { label: t("Title"), value: "title", visible: true },
  { label: t("Date"), value: "date", visible: true },
  { label: t("Time"), value: "time", visible: true },
  { label: t("Location"), value: "location", visible: false },
  { label: t("Type"), value: "type", visible: false },
  { label: t("Recurrence"), value: "recurrence", visible: true },
  { label: t("Status"), value: "status", visible: false },
];

// Reads saved visibility map from localStorage and merges with defaults.
// Any column added in the future will fall back to its default visibility.
const loadHeadings = () => {
  try {
    const saved = localStorage.getItem(HEADINGS_STORAGE_KEY);
    if (!saved) return defaultHeadings;
    const savedMap = JSON.parse(saved); // { [value]: boolean }
    return defaultHeadings.map((h) =>
      h.value in savedMap ? { ...h, visible: savedMap[h.value] } : h,
    );
  } catch {
    return defaultHeadings;
  }
};

// Persists only the visibility map (not labels) so it stays small and
// doesn't break if labels are later translated differently.
const saveHeadings = (updated) => {
  try {
    const savedMap = Object.fromEntries(
      updated.map((h) => [h.value, h.visible]),
    );
    localStorage.setItem(HEADINGS_STORAGE_KEY, JSON.stringify(savedMap));
  } catch {}
};

// =====================================================================
// MAIN PAGE
// =====================================================================

const EventsListPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  redirect = () => {},
}) => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const fetchZoomAccount = useServvStore((s) => s.fetchZoomAccount);

  const {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    handleIsPastChange,
    handleTypeChange,
    handleSetDates,
    applyDatePreset,
    handleSearchChange,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError,
    resetSubpageSelection,
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage,
    handleGetNextPage,
    handleGetPrevMergedPage,
    handleGetNextMergedPage,
    handleGetPrevOccurrencessPage,
    handleGetNextOccurrencessPage,
    handleEventDelete,
  } = useEventsLogic(settings, filtersList, zoomAccount);

  // ── derive active list / pagination / loading ──
  const isMerged = eventType === "all";
  const activeList =
    (isMerged
      ? mergedList
      : view === "events"
      ? meetingsList
      : eventOccurrencess) ?? [];
  const activePagination =
    (view === "occurrences"
      ? occurrencesPagination
      : isMerged
      ? mergedPagination
      : pagination) ?? {};
  const activeLoading = isMerged ? mergedLoading : loading;
  const [showBulkAction, setShowBulkAction] = useState(false);
  const handleGetPrev =
    view === "occurrences"
      ? handleGetPrevOccurrencessPage
      : isMerged
      ? handleGetPrevMergedPage
      : handleGetPrevPage;

  const handleGetNext =
    view === "occurrences"
      ? handleGetNextOccurrencessPage
      : isMerged
      ? handleGetNextMergedPage
      : handleGetNextPage;

  const triggerSearch = () => {
    if (isMerged) getMergedEventsList();
    else getEventsList();
  };

  // ── local ui state ──

  // Lazy initializer reads from localStorage once on mount
  const [headings, setHeadings] = useState(loadHeadings);

  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [active, setActiveDropdown] = useState(null);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [confirmationModalData, setConfirmationModalData] = useState({});

  const dropdownRefs = useRef(null);
  const navigate = useNavigate();

  // ── effects ──
  useEffect(() => {
    if (!settings) return;
    const planId = settings.current_plan?.id;
    if (planId === 2 && zoomConnected === null) fetchZoomAccount();
  }, [settings]);

  useEffect(() => {
    if (active === null) return;
    const handleClickOutside = (event) => {
      try {
        if (event.target.closest(".filter-table-dropdown-container button"))
          return;
        if (
          active &&
          dropdownRefs.current &&
          !dropdownRefs.current.contains(event.target)
        ) {
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

  // ── column customization ──
  const customizeHeading = (value) => {
    const newHeadings = headings.map((h) =>
      h.value === value ? { ...h, visible: !h.visible } : h,
    );
    setHeadings(newHeadings);
    saveHeadings(newHeadings); // persist immediately on every toggle
  };

  const renderBulkActions = () => (
    <div className="filter-table-dropdown left-5 top-9 ml-6 mt-6">
      <div className="dropdown-actions">
        <BlockStack gap={4}>
          <button
            className="dropdown-action"
            onClick={() => performBulkAction("delete")}
          >
            <TrashIcon className="dropdown-icon-critical" />
            Delete ({selectedEvents.length})
          </button>
        </BlockStack>
      </div>
    </div>
  );

  const renderHeadingsCustomization = () =>
    headings.map((heading) => (
      <CheckboxControl
        key={heading.value}
        label={heading.label}
        name={heading.label}
        checked={heading.visible}
        onChange={() => customizeHeading(heading.value)}
      />
    ));

  // ── row selection ──
  const handleSelectEvent = (selected) => {
    let newSelection = [...selectedEvents];
    const isSelected = newSelection.filter(
      (event) =>
        event.id === selected.id &&
        ((event.occurrence_id &&
          selected.occurrence_id &&
          event.occurrence_id === selected.occurrence_id) ||
          !event.occurrence_id),
    );

    if (isSelected.length > 0) {
      newSelection = newSelection.filter(
        (event) =>
          !(
            event.id === selected.id &&
            ((event.occurrence_id &&
              selected.occurrence_id &&
              event.occurrence_id === selected.occurrence_id) ||
              !event.occurrence_id)
          ),
      );
    } else {
      newSelection.push(selected);
    }
    setSelectedEvents(newSelection);
  };

  const handleMultipleEventsDelete = async () => {
    try {
      await Promise.all(
        selectedEvents.map(({ post_id, occurrence_id }) =>
          handleEventDelete(post_id, occurrence_id),
        ),
      );
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // ── confirmation modal ──
  const openConfirmDelete = (text, onAccept, item) => {
    setShowBulkAction(false);
    setConfirmationModalData({
      open: true,
      text,
      item,
      onAccept: () => {
        onAccept();
        setConfirmationModalData({
          open: false,
          onAccept: () => {},
          item: null,
          text: "",
        });
      },
      onCancel: () =>
        setConfirmationModalData({
          open: false,
          onAccept: () => {},
          item: null,
          text: "",
        }),
    });
  };

  // ── table renderers ──
  const renderHeadings = () => (
    <Fragment>
      <th>
        <CheckboxControl onClick={() => setSelectedAll((p) => !p)} />
      </th>
      {headings.map((heading) =>
        heading.visible ? <th key={heading.value}>{heading.label}</th> : null,
      )}
      <th></th>
    </Fragment>
  );

  const renderRows = (events) =>
    events.map((row) => {
      const key = row.id + (row.occurrence_id || "");
      const isDropdownOpen =
        (!row.occurrence_id && active === row.id) ||
        (row.occurrence_id && row.occurrence_id === active);

      return (
        <tr className="table-row" key={key}>
          <td>
            <CheckboxControl
              checked={
                selectedAll ||
                selectedEvents.some(
                  (event) =>
                    event.id === row.id &&
                    event.occurrence_id === row.occurrence_id,
                )
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
                    text={view === "events" ? row[heading.value] : "Occurrence"}
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

            if (heading.label === "Date" && !row[heading.value])
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

            if (heading.label === "Date" && row[heading.value])
              return (
                <td key={heading.value}>
                  <Badge text={row[heading.value]} />
                </td>
              );

            if (heading.label === "Time" && row[heading.value])
              return (
                <td key={heading.value}>
                  <Badge
                    text={`${moment(row[heading.value], "hh:mm a").format(
                      timeFormat,
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

            if (heading.label === "Time" && !row[heading.value])
              return (
                <td key={heading.value}>
                  <Badge
                    text="View times"
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

            if (heading.label === "Title")
              return (
                <td key={heading.value}>
                  <a
                    className="filter-table-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenEvent({
                        id: row.post_id,
                        occurrence_id: row.occurrence_id,
                        type: row.type,
                      });
                    }}
                  >
                    {row[heading.value]}
                  </a>
                </td>
              );

            return <td key={heading.value}>{row[heading.value]}</td>;
          })}

          <td className="filter-table-dropdown-container">
            <button
              onClick={() => {
                const dropdownId = row.occurrence_id || row.id;
                setActiveDropdown((prev) =>
                  prev === dropdownId ? null : dropdownId,
                );
              }}
            >
              <Bars4Icon className="dropdown-icon" />
            </button>

            {isDropdownOpen && (
              <div
                className="filter-table-dropdown absolute right-0 top-8 z-50 bg-white border border-gray-200 rounded-xl shadow-lg p-4 mt-2 min-w-[220px]"
                ref={dropdownRefs}
              >
                <span className="dropdown-header">
                  {row.title}
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
                            type: row.type,
                          });
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
                          handleOpenEvent({ id: row.post_id, type: row.type });
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
                          openConfirmDelete(
                            "Delete selected event",
                            () => handleEventDelete(row.post_id),
                            row.title,
                          );
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
                          openConfirmDelete(
                            "Delete selected occurrence of this event",
                            () =>
                              handleEventDelete(row.post_id, row.occurrence_id),
                            row.title,
                          );
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

  const performBulkAction = async (actionType) => {
    if (!selectedEvents.length) return;

    if (actionType === "delete") {
      const itemLabel = selectedEvents.length === 1 ? "event" : "events";
      const hasOccurrences = selectedEvents.some((e) => e.occurrence_id);
      const deleteLabel = hasOccurrences ? "events/occurrences" : itemLabel;

      openConfirmDelete(
        `Delete ${selectedEvents.length} selected ${deleteLabel}`,
        async () => {
          try {
            await Promise.all(
              selectedEvents.map(({ post_id, occurrence_id }) =>
                handleEventDelete(post_id, occurrence_id ?? null),
              ),
            );
            toast.success(
              `${selectedEvents.length} ${deleteLabel} deleted successfully.`,
            );
            setSelectedEvents([]);
            setSelectedAll(false);
            setShowBulkAction(false);
            triggerSearch();
          } catch (error) {
            console.error("Bulk delete error:", error);
            toast.error("Some items could not be deleted. Please try again.");
          }
        },
        `${selectedEvents.length} selected ${deleteLabel}`,
      );
    }
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
        d.second(),
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
        d.second(),
      );
    }
    return datesValue;
  };

  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");
    else
      toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };

  const typeButtons =
    zoomConnected && settings?.current_plan?.id !== 1
      ? [t("Events"), "Zoom", t("All")]
      : null;

  const activeTypeLabel =
    eventType === "offline"
      ? t("Events")
      : eventType === "zoom"
      ? "Zoom"
      : t("All");

  const handleTypeLabel = (label) => {
    if (label === "Zoom") handleTypeChange("zoom");
    else if (label === t("All")) handleTypeChange("all");
    else handleTypeChange("offline");
  };

  // ── render ──
  return (
    <Fragment>
      {!selectedEvent && showGuide && (!zoomAccount || !zoomAccount.id) && (
        <Guideline showGuide={setShowGuide} redirect={redirect} />
      )}

      {!selectedEvent && (!showGuide || (zoomAccount && zoomAccount.id)) && (
        <PageWrapper loading={false} withBackground={true}>
          <div className="dashboard-card relative">
            <div className="servv-dashboard-header">
              <div className="dashboard-heading flex flex-row justify-between">
                <h1 className="dashboard-title">Events</h1>
                <div className="flex flex-row gap-3 justify-self-end">
                  <button
                    className="flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition"
                    onClick={() => setShowCustomizeModal(true)}
                  >
                    <AdjustmentsVerticalIcon className="w-5 h-5" />
                  </button>

                  <PageActionButton
                    type="primary"
                    size="md"
                    icon={<PlusIcon className="w-5 h-5" />}
                    text={t("Create event")}
                    onAction={handleCreateNewEvent}
                  />
                </div>
              </div>

              <div className="header-line"></div>

              {/* Mobile header */}
              <div className="md:hidden px-4 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {t("Events")}
                  </h1>
                  <div className="flex gap-2">
                    <button
                      aria-label={t("Customize")}
                      className="p-2 rounded-full bg-white shadow"
                      onClick={() => setShowCustomizeModal(true)}
                    >
                      <AdjustmentsVerticalIcon className="w-5 h-5" />
                    </button>
                    <button
                      aria-label={t("Create Event")}
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

              {/* Actions bar */}
              <div className="events-actions w-full">
                <div className="events-actions-bar w-full">
                  <div className="flex flex-row justify-between items-center w-full gap-4 flex-wrap">
                    <div className="flex flex-row gap-3 justify-between sm:justify-start flex-wrap w-full">
                      <NewButtonGroup
                        buttons={[t("Upcoming"), "Past"]}
                        active={isPast ? "Past" : t("Upcoming")}
                        onChange={(label) =>
                          handleIsPastChange(label === "Past")
                        }
                      />

                      {typeButtons && (
                        <NewButtonGroup
                          buttons={typeButtons}
                          active={activeTypeLabel}
                          onChange={handleTypeLabel}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Card className="w-full max-w-none px-0 mt-4">
                {/* Mobile toolbar */}
                <div className="md:hidden flex items-center px-4 pt-4 pb-2">
                  <button
                    aria-label={t("Search")}
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
                  <div className="flex-1" />
                  <div className="flex gap-2 pr-1">
                    <button
                      aria-label={t("Date")}
                      className="p-2 rounded-full bg-white shadow"
                      onClick={() => setShowDateModal(true)}
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
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
                      className="p-2 rounded-full bg-white shadow"
                      onClick={() => setShowFiltersModal(true)}
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
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
                      placeholder="Search events by name"
                      value={searchString}
                      autoFocus
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && triggerSearch()}
                    />
                    <button
                      className="w-full bg-purple-600 text-white rounded py-2"
                      onClick={triggerSearch}
                    >
                      {t("Search")}
                    </button>
                  </div>
                )}

                <EventsCardHeader
                  eventsCount={activeList.length}
                  view={view}
                  backToEventsList={() => setView("events")}
                  search={searchString}
                  onChange={handleSearchChange}
                  filtersList={filtersList}
                  onFiltering={triggerSearch}
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

                {/* Desktop table */}
                <div className="hidden md:block w-full">
                  <SpinnerLoader
                    isLoading={activeLoading}
                    customStyling="h-[50vh]"
                  >
                    <FilterTable
                      tableClassName="events-table"
                      headings={renderHeadings()}
                      rows={renderRows(
                        view === "occurrences"
                          ? eventOccurrencess ?? []
                          : activeList,
                      )}
                    />
                  </SpinnerLoader>
                  {selectedEvents.length > 1 && (
                    <div className="filter-table-dropdown-container py-xl px-2 text-gray-600 font-regular justify-start border-b first:font-medium first:text-gray-900 md:text-sm flex flex-row">
                      <button
                        onClick={() => setShowBulkAction(!showBulkAction)}
                        className={`mr-auto flex flex-row items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
                                ${
                                  showBulkAction
                                    ? "bg-purple-600 text-white border-purple-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                      >
                        <Bars4Icon className="w-4 h-4" />
                        Bulk actions
                      </button>
                      {showBulkAction && renderBulkActions()}
                    </div>
                  )}
                </div>

                {/* Mobile cards */}
                <div className="mobile-cards-container">
                  {renderMobileCards(
                    view === "occurrences"
                      ? eventOccurrencess ?? []
                      : activeList,
                  )}
                </div>

                {/* Pagination */}
                {activePagination.pageCount > 1 && (
                  <ListPagination
                    hasPrev={activePagination.pageNumber > 1}
                    hasNext={
                      activePagination.pageNumber < activePagination.pageCount
                    }
                    onPrev={handleGetPrev}
                    onNext={handleGetNext}
                  />
                )}
              </Card>
            </div>

            {/* Customize columns modal */}
            {showCustomizeModal && (
              <div className="absolute inset-0 bg-black/40 rounded-[15px] z-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 w-11/12 max-w-[65%] max-h-[90%] overflow-y-auto customize-modal">
                  <div className="flex justify-between items-center mb-2 relative">
                    <span className="dashboard-title">Customize Columns</span>
                    <div
                      className="servv-create-form-close"
                      onClick={() => setShowCustomizeModal(false)}
                    >
                      <CloseIcon className="servv-create-form-close-icon top-0" />
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1 customize-list">
                    {renderHeadingsCustomization()}
                  </ul>
                  <button
                    className="mt-3 w-full new-event-button"
                    onClick={() => setShowCustomizeModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            <ConfirmationModal data={confirmationModalData} />
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

      {/* Mobile: filters modal */}
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
                  {filtersList[filter].map((item) => (
                    <CheckboxControl
                      key={item.id}
                      label={item.name}
                      checked={
                        selectedFilters[filter]?.includes(item.id) || false
                      }
                      onChange={() => handleFilterSelect(filter, item.id)}
                      font="text-sm"
                      color="text-gray-700"
                    />
                  ))}
                </div>
              ) : null,
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
                  triggerSearch();
                  setShowFiltersModal(false);
                }}
              >
                {t("Apply")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: date modal */}
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
                triggerSearch();
                setShowDateModal(false);
              }}
            >
              {t("Apply")}
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EventsListPage;
