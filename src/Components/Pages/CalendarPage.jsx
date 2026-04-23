import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import {
  EyeIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import PageWrapper from "./PageWrapper";
import SpinnerLoader from "./SpinnerLoader";
import NewButtonGroup from "../Controls/NewButtonGroup";
import NewInputControl from "../Controls/NewInputControl";
import Dropdown from "../Containers/Dropdown";
import BlockStack from "../Containers/BlockStack";
import CollapsibleSection from "../Containers/CollapsibleSection";
import CheckboxControl from "../Controls/CheckboxControl";
import PageActionButton from "../Controls/PageActionButton";
import { useServvStore } from "../../store/useServvStore";
import { useEventsLogic } from "./Events/useEventsLogicMerged";

const PERIOD_LABELS = ["Month", "Week", "Day"];

const EVENT_COLORS = [
  { bg: "rgba(240,237,255,1)", text: "rgba(100,70,200,1)" },
  { bg: "rgba(232,244,255,1)", text: "rgba(50,120,220,1)" },
  { bg: "rgba(255,243,224,1)", text: "rgba(200,130,30,1)" },
  { bg: "rgba(232,245,233,1)", text: "rgba(50,160,80,1)" },
];

const getEventColor = (event) => {
  const isOneTime = event.recurrence === "One-time";
  if (event.type === "Event")
    return isOneTime ? EVENT_COLORS[0] : EVENT_COLORS[1];
  return isOneTime ? EVENT_COLORS[2] : EVENT_COLORS[3];
};

const EventsCalendarPage = () => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    mergedList,
    mergedLoading,
    handleSetDates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
  } = useEventsLogic(settings, filtersList, zoomAccount);

  const [currentDate, setCurrentDate] = useState(moment());
  const [activePeriod, setActivePeriod] = useState(() =>
    window.innerWidth < 768 ? 2 : 0,
  );

  const [activePopover, setActivePopover] = useState(null);
  const [popoverEvent, setPopoverEvent] = useState(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
  const popoverRef = useRef(null);

  const [queryValue, setQueryValue] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const getPeriodRange = (date, period) => {
    switch (period) {
      case 1:
        return {
          start: date.clone().startOf("week"),
          end: date.clone().endOf("week"),
        };
      case 2:
        return {
          start: date.clone().startOf("day"),
          end: date.clone().endOf("day"),
        };
      default:
        return {
          start: date.clone().startOf("month").startOf("week"),
          end: date.clone().endOf("month").endOf("week"),
        };
    }
  };

  useLayoutEffect(() => {
    const initialPeriod = window.innerWidth < 768 ? 2 : 0;
    const { start, end } = getPeriodRange(moment(), initialPeriod);
    handleSetDates({ startDate: start, endDate: end });
  }, []);

  useEffect(() => {
    const { start, end } = getPeriodRange(currentDate, activePeriod);
    handleSetDates({ startDate: start, endDate: end });
  }, [currentDate, activePeriod]);

  useEffect(() => {
    if (!activePopover) return;
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
        setPopoverEvent(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopover]);

  useEffect(() => {}, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setActivePeriod(2);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navigatePeriod = (dir) => {
    const d = currentDate.clone();
    const unit =
      activePeriod === 0 ? "month" : activePeriod === 1 ? "week" : "day";
    dir > 0 ? d.add(1, unit) : d.subtract(1, unit);
    setCurrentDate(d);
  };

  const getTitle = () => {
    if (activePeriod === 2) return currentDate.format("DD MMM YYYY");
    if (activePeriod === 1) {
      return `${currentDate
        .clone()
        .startOf("week")
        .format("DD MMM")} – ${currentDate
        .clone()
        .endOf("week")
        .format("DD MMM YYYY")}`;
    }
    return currentDate.format("MMMM YYYY");
  };

  const filteredEvents = mergedList.filter((event) =>
    queryValue
      ? event.title?.toLowerCase().includes(queryValue.toLowerCase())
      : true,
  );

  const groupEventsByDate = (evts) =>
    evts.reduce((acc, event) => {
      const key = moment(event._sortKey).format("YYYY-MM-DD");
      if (!acc[key]) acc[key] = [];
      acc[key].push(event);
      return acc;
    }, {});

  const getVisibleDays = () => {
    if (activePeriod === 1) {
      const start = currentDate.clone().startOf("week");
      return Array.from({ length: 7 }).map((_, i) => {
        const date = start.clone().add(i, "day");
        return {
          date,
          isCurrentMonth: true,
          isToday: date.isSame(moment(), "day"),
        };
      });
    }
    if (activePeriod === 2) {
      return [
        {
          date: currentDate.clone(),
          isCurrentMonth: true,
          isToday: currentDate.isSame(moment(), "day"),
        },
      ];
    }
    const year = currentDate.year();
    const month = currentDate.month();
    const start = moment([year, month]).startOf("month").startOf("week");
    const end = moment([year, month]).endOf("month").endOf("week");
    const days = [];
    let d = start.clone();
    while (d.isSameOrBefore(end, "day")) {
      days.push({
        date: d.clone(),
        isCurrentMonth: d.month() === month,
        isToday: d.isSame(moment(), "day"),
      });
      d.add(1, "day");
    }
    return days;
  };

  const getMeetingURL = (postId) => {
    fetch(`/wp-json/wp/v2/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => open(post.link, "_blank"))
      .catch((e) => console.error(e));
  };

  const handleOpenEvent = (meeting) => {
    const pathType = meeting.type === "Zoom" ? "zoom" : "offline";
    let url = `/events/${pathType}/${meeting.id}`;
    if (meeting.occurrence_id) url += `?occurrence_id=${meeting.occurrence_id}`;
    if (meeting.registrants_view && !meeting.occurrence_id)
      url += `?registrants=true`;
    else if (meeting.registrants_view && meeting.occurrence_id)
      url += `&registrants=true`;
    navigate(url, { state: { from: location.pathname } });
  };

  const handleEventClick = (e, event) => {
    const id = event.occurrence_id ?? event.id;
    if (activePopover === id) {
      setActivePopover(null);
      setPopoverEvent(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPos({
      x: Math.min(rect.left, window.innerWidth - 320),
      y: rect.bottom + 4,
    });
    setActivePopover(id);
    setPopoverEvent(event);
  };

  const renderDayEvents = (dayEvents) => {
    if (mergedLoading) {
      return (
        <div className="animate-pulse space-y-1">
          <div className="h-4 bg-gray-100 rounded" />
        </div>
      );
    }
    if (activePeriod === 2 && dayEvents.length === 0) {
      return (
        <p className="text-xs text-gray-400 text-center py-6">
          No events for this date
        </p>
      );
    }
    return dayEvents.map((event) => {
      const id = event.occurrence_id ?? event.id;
      const color = getEventColor(event);
      return (
        <div
          key={id}
          className="cal-event-badge text-[10px] md:text-xs"
          style={{ background: color.bg, color: color.text }}
          onClick={(e) => handleEventClick(e, event)}
          title={event.title}
        >
          {event.title}
        </div>
      );
    });
  };

  const renderCalendar = () => {
    const days = getVisibleDays();
    const eventsByDate = groupEventsByDate(filteredEvents);
    const weekdays = moment.weekdaysShort();
    const isDay = activePeriod === 2;
    const isMonth = activePeriod === 0;
    const columns = isDay ? 1 : 7;
    const cellHeight = isMonth ? "80px" : "400px";
    const scrollHeight = isMonth ? "75px" : "395px";

    return (
      <div
        className="cal-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {!isDay &&
          weekdays.map((day) => (
            <div key={day} className="cal-weekday-cell">
              <span className="cal-weekday-label text-[10px] md:text-xs">
                {day}
              </span>
            </div>
          ))}

        {days.map(({ date, isCurrentMonth, isToday }) => {
          const dayKey = date.format("YYYY-MM-DD");
          const dayEvents = eventsByDate[dayKey] || [];
          return (
            <div
              key={dayKey}
              className="cal-day-cell"
              style={{
                minHeight: cellHeight,
                opacity: isMonth && !isCurrentMonth ? 0.4 : 1,
              }}
            >
              <div
                className={`cal-day-number${
                  isToday ? " cal-day-number--today" : ""
                }`}
              >
                <span
                  className="cal-day-num-text text-[10px] md:text-xs"
                  style={{ fontWeight: isToday ? 600 : 400 }}
                >
                  {date.date()}
                </span>
              </div>
              <div
                className="cal-day-scroll"
                style={{ maxHeight: scrollHeight }}
              >
                {renderDayEvents(dayEvents)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderEventPopover = () => {
    if (!activePopover || !popoverEvent) return null;
    const event = popoverEvent;
    const isOneTime = event.recurrence === "One-time";

    return (
      <div
        ref={popoverRef}
        className="cal-popover bg-white border border-gray-200 rounded-xl shadow-lg p-4"
        style={{ top: popoverPos.y, left: popoverPos.x }}
      >
        <div className="flex justify-between items-start mb-3">
          <span
            className="font-semibold text-sm cursor-pointer hover:text-purple-600 leading-snug pr-2"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
              })
            }
          >
            {event.title}
          </span>
          <button
            onClick={() => {
              setActivePopover(null);
              setPopoverEvent(null);
            }}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-base leading-none"
          >
            ✕
          </button>
        </div>

        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5S14.5 11.59 14.5 8 11.59 1.5 8 1.5zm.5 7H5.5V7h2V4.5h1V8.5z"
              fill="currentColor"
            />
          </svg>
          {event.time}
        </div>

        <div className="mb-3">
          <span
            className={`inline-flex items-center text-xs px-2 py-1 rounded-full font-medium ${
              isOneTime
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {event.recurrence}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="event-action-btn view"
            title="View event"
            onClick={() => getMeetingURL(event.post_id)}
          >
            <EyeIcon className="event-action-icon" />
          </button>
          <button
            className="event-action-btn edit"
            title="View registrants"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
                registrants_view: true,
              })
            }
          >
            <UserCircleIcon className="event-action-icon" />
          </button>
          <button
            className="event-action-btn edit"
            title="Edit event"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
              })
            }
          >
            <PencilSquareIcon className="event-action-icon" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card cal-card rounded-md">
        <div className="servv-dashboard-header main-dashboard cal-header">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">Events Calendar</h1>
          </div>
        </div>
        <div className="header-line cal-divider" />

        <div className="cal-controls">
          {/* Search — row 2 on mobile, row 1 on desktop */}
          <div className="cal-search-wrap w-full md:w-auto order-2 md:order-1">
            <NewInputControl
              placeholder="Search events..."
              value={queryValue}
              onChange={setQueryValue}
            />
          </div>

          {/* Period nav — row 1 on mobile, centered on desktop */}
          <div className="cal-nav order-1 md:order-2">
            <button
              type="button"
              className="cal-nav-btn"
              onClick={() => navigatePeriod(-1)}
            >
              ‹
            </button>
            <span className="cal-nav-title">{getTitle()}</span>
            <button
              type="button"
              className="cal-nav-btn"
              onClick={() => navigatePeriod(1)}
            >
              ›
            </button>
          </div>

          {/* View mode + Filters — row 3 on mobile, right side on desktop */}
          <div className="cal-right-group justify-between md:justify-start order-3">
            <div className="hidden md:block">
              <NewButtonGroup
                buttons={PERIOD_LABELS}
                active={PERIOD_LABELS[activePeriod]}
                onChange={(label) =>
                  setActivePeriod(PERIOD_LABELS.indexOf(label))
                }
              />
            </div>

            <Dropdown
              className="servv-dahboard-dropdown"
              activator={
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setFiltersOpen((p) => !p)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="filter-icon"
                  >
                    <path
                      d="M3.33594 5.83502H13.3359M0.835938 0.835022H15.8359M5.83594 10.835H10.8359"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Filters</span>
                </button>
              }
              status={filtersOpen}
              onClose={() => setFiltersOpen(false)}
            >
              <BlockStack gap={4}>
                {Object.keys(filtersList).map((filter) => (
                  <CollapsibleSection
                    key={filter}
                    sectionHeading={
                      filter.charAt(0).toUpperCase() + filter.slice(1)
                    }
                  >
                    <BlockStack gap={2}>
                      {filtersList[filter].map((item) => (
                        <CheckboxControl
                          key={item.id}
                          label={item.name}
                          checked={
                            selectedFilters[filter]?.includes(item.id) || false
                          }
                          onChange={() => handleFilterSelect(filter, item.id)}
                          font="text-sm"
                          color="text-gray-600"
                        />
                      ))}
                    </BlockStack>
                  </CollapsibleSection>
                ))}

                <PageActionButton
                  text="Apply"
                  type="primary"
                  justify="justify-center"
                  onAction={() => setFiltersOpen(false)}
                />

                {isFiltersApplied() && (
                  <PageActionButton
                    text="Clear filters"
                    type="secondary"
                    justify="justify-center"
                    onAction={() => {
                      resetFilters();
                      setFiltersOpen(false);
                    }}
                  />
                )}
              </BlockStack>
            </Dropdown>

            {/* {isFiltersApplied() && (
              <button
                type="button"
                onClick={resetFilters}
                className="cal-clear-btn"
              >
                Clear all
              </button>
            )} */}
          </div>
        </div>

        <SpinnerLoader isLoading={mergedLoading}>
          {renderCalendar()}
        </SpinnerLoader>
      </div>

      {renderEventPopover()}
    </PageWrapper>
  );
};

export default EventsCalendarPage;
