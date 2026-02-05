import PageWrapper from "./PageWrapper";
import { useMemo, useState, Fragment, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import { useEventsLogic } from "./Events/useEventsLogic";
import EventCard from "./Events/EventCard";
import { PlusIcon } from "@heroicons/react/16/solid";
import NewButtonGroup from "../Controls/NewButtonGroup";
import DatePickerButton from "../Controls/DatePickerInputButton";
import Dropdown from "../Containers/Dropdown";
import PageActionButton from "../Controls/PageActionButton";
import CheckboxControl from "../Controls/CheckboxControl";
import BlockStack from "../Containers/BlockStack";
import CollapsibleSection from "../Containers/CollapsibleSection";
import Spinner from "../Menu/Spinner";
import DashboardPagination from "../DashboardPagination";
import { toast } from "react-toastify";
const Dashboard = () => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);

  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const {
    meetingsList,
    getEventsList,
    // handleOpenEvent,
    handleIsPastChange,
    handleSearchChange,
    handleSetDates,
    applyDatePreset,
    isPast,
    dates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    loading,
    firstFetchDone,
    pagination,
    handleGetPrevPage,
    handleGetNextPage,
  } = useEventsLogic(settings, filtersList, zoomAccount);
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const widgetStyleSettings = useMemo(() => {
    if (!settings?.settings?.widget_style_settings) return {};

    try {
      return JSON.parse(settings.settings.widget_style_settings) || {};
    } catch {
      return {};
    }
  }, [settings?.settings?.widget_style_settings]);

  const { pw_title, pw_address, pw_avatar, pw_email } = widgetStyleSettings;
  const handleOpenEvent = (meeting) => {
    let url = `/events/${"offline"}/${meeting.id}`;
    if (meeting.occcurrence_id) {
      url += `?occurrence_id=${meeting.occcurrence_id}`;
    }
    navigate(url);
  };

  // useEffect(() => {
  //   if (firstFetchDone && meetingsList.length === 0 && !zoomConnected) {
  //     navigate("/events/new");
  //   }
  // }, [firstFetchDone, zoomConnected]);

  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");
    else
      toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };
  const renderEventsCards = () => {
    if (meetingsList.length > 0)
      return meetingsList.map((meeting) => (
        <EventCard meeting={meeting} handleOpenEvent={handleOpenEvent} />
      ));
  };

  const TIME_RANGES = {
    upcoming: "upcoming",
    today: "today",
    week: "week",
  };
  const [timeRange, setTimeRange] = useState(TIME_RANGES.upcoming);

  const eventTypes = [
    { label: "Upcoming", value: TIME_RANGES.upcoming },
    { label: "Today", value: TIME_RANGES.today },
    { label: "This week", value: TIME_RANGES.week },
  ];

  const getDates = () => {
    let out = { startDate: null, endDate: null };
    const fallback = new Date();

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

    return {
      startDate: out.startDate ? out.startDate : fallback,
      endDate: out.endDate ? dates.endDate : fallback,
    };
  };
  useEffect(() => {
    const now = moment();

    if (timeRange === TIME_RANGES.today) {
      applyDatePreset({
        startDate: now.clone().startOf("day"),
        endDate: now.clone().endOf("day"),
      });
    }

    if (timeRange === TIME_RANGES.week) {
      applyDatePreset({
        startDate: now.clone().startOf("week"),
        endDate: now.clone().endOf("week"),
      });
    }

    if (timeRange === TIME_RANGES.upcoming) {
      applyDatePreset({
        startDate: now,
        endDate: null,
      });
    }
  }, [timeRange]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createStatus = params.get("created");

    if (createStatus === "success") {
      toast.success("Event successfully created");

      params.delete("created");
      navigate(
        {
          pathname: location.pathname,
          search: params.toString(),
        },
        { replace: true },
      );
    }
  }, [location.search]);

  const renderEventsActions = () => {
    return (
      <div className="events-actions">
        <div className="events-actions-bar">
          <h1 className="events-actions-title">
            All events <span className="event-count"></span>
          </h1>
          <div className="events-actions-panel">
            <div className="view-mode">
              <NewButtonGroup
                buttons={eventTypes.map((e) => e.label)}
                active={eventTypes.find((e) => e.value === timeRange)?.label}
                onChange={(label) => {
                  const selected = eventTypes.find((e) => e.label === label);
                  setTimeRange(selected.value);
                }}
              />
            </div>
            <div className="events-filters">
              <DatePickerButton
                value={getDates()}
                onChange={handleSetDates}
                label="Select date"
                asSingle={true}
                useRange={false}
                displayFormat="MMM DD, YYYY"
                minDate={new Date()}
                disabled={false}
              />
              {/* Filters */}

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
                      className={"filter-icon"}
                    >
                      <path
                        d="M3.33594 5.83502H13.3359M0.835938 0.835022H15.8359M5.83594 10.835H10.8359"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{t("Filters")}</span>
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
                              selectedFilters[filter]?.includes(item.id) ||
                              false
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
                    text={t("Apply")}
                    type="primary"
                    justify="justify-center"
                    onAction={() => {
                      setFiltersOpen(false);
                    }}
                  />

                  {isFiltersApplied() && (
                    <PageActionButton
                      text={t("Clear filters")}
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

              {/* End Filters */}
              <button
                className="new-event-button"
                onClick={() => handleCreateNewEvent()}
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                {t("Create event")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header main-dashboard">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">{`Welcome${
              pw_title ? ", " + pw_title : ""
            }`}</h1>
            <p className="dashboard-description">
              Create, sell, and manage paid events, bookings, and customers from
              one revenue platform
            </p>
          </div>
          {pw_title && (
            <div className="dashbaord-profile">
              <img
                className="profile-image"
                src={pw_avatar}
                alt="Profile image"
              />

              <div className="profile-description">
                <div className="profile-name">{pw_title}</div>
                <div className="profile-email">{pw_email}</div>
                {!settings?.is_wp_is_wp_marketplace && (
                  <div className="profile-link">
                    <a className="view-widget" href={servvData.homepage}>
                      View homepage
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="header-line"></div>

        {renderEventsActions()}

        {!loading && (
          <Fragment>
            {firstFetchDone && meetingsList.length === 0 ? (
              <div className="dashboard-empty-state">
                <h1 className="dashboard-empty-state-title">
                  You don't have any events yet
                </h1>
              </div>
            ) : (
              <Fragment>
                <div className="dashboard-events">{renderEventsCards()}</div>
                {meetingsList.length > 0 && pagination.pageCount > 1 && (
                  <DashboardPagination
                    currentPage={pagination.pageNumber}
                    totalPages={pagination.pageCount}
                    totalRecords={pagination.total || meetingsList.length}
                    pageSize={10}
                    onPageChange={(page) => getEventsList({ page })}
                  />
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center">
        {((loading && !firstFetchDone) || loading) && (
          <Spinner loading={true} />
        )}
      </div>
    </PageWrapper>
  );
};
export default Dashboard;
