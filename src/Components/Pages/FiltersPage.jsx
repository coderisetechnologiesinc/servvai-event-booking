import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageActionButton from "../Controls/PageActionButton";
import Dropdown from "../Containers/Dropdown";
import SettingsSection from "./Settings/SettingsSection";

import {
  PlusIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  LanguageIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

import { useServvStore } from "../../store/useServvStore";

const FiltersPage = () => {
  const filtersList = useServvStore((s) => s.filtersList);
  const settings = useServvStore((s) => s.settings);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [createDropdown, setCreateDropdown] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const filterDescriptions = {
    Locations: "Filter events based on where they take place",
    Languages: "Filter events by the language they're hosted in",
    Categories: "Narrow down events by topic or type",
    Members:
      "Filter events by the host, instructor, or team member running the event",
  };

  const filterIcons = {
    Locations: MapPinIcon,
    Languages: LanguageIcon,
    Categories: TagIcon,
    Members: UserGroupIcon,
  };

  const [defaultFiltersList, setDefaultFiltersList] = useState([
    "Locations",
    "Languages",
    "Categories",
  ]);
  const [filterCategories, setFilterCategories] = useState(defaultFiltersList);
  const [maxFiltersNumber, setMaxFiltersNumber] = useState(2);

  useEffect(() => {
    const maxFilters = settings?.current_plan?.filters_limit || 25;
    setMaxFiltersNumber(maxFilters);

    const totalFilters = Object.values(filtersList).reduce(
      (total, arr) => total + (arr?.length || 0),
      0,
    );
    setIsLimitReached(totalFilters >= maxFilters);
    if (settings?.current_plan?.id !== 1) {
      let newFiltersList = defaultFiltersList;
      newFiltersList.push("Members");
      setDefaultFiltersList(newFiltersList);
    }
  }, [settings, filtersList]);

  const getFilterCount = (filter) => {
    const filterKey = filter.toLowerCase();
    return filtersList[filterKey]?.length || 0;
  };

  const renderFilterSections = () =>
    filterCategories.map((filter) => {
      const Icon = filterIcons[filter] || TagIcon;
      const filterCount = getFilterCount(filter);
      return (
        <SettingsSection
          key={filter}
          icon={Icon}
          title={filter}
          description={filterDescriptions[filter]}
          statusText={`${filterCount} ${
            filterCount === 1 ? "filter" : "filters"
          }`}
          status={filterCount > 0 ? "available" : "unavailable"}
          sectionId={filter}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          showActions={true}
          direct={true}
          onView={() => navigate(`/filters/list/${filter}`)} // View button handler
          onSave={() => navigate(`/filters/list/${filter}`)}
        >
          <div className="flex gap-2 mt-4">
            <PageActionButton
              text="View"
              type="secondary"
              slim
              onAction={() => navigate(`/filters/list/${filter}`)}
              className="flex-1"
            />
            <PageActionButton
              text={isLimitReached ? "Limit reached" : "Create"}
              type="primary"
              icon={<PlusIcon className="button-icon primary" />}
              slim
              disabled={isLimitReached}
              onAction={() => {
                if (isLimitReached) return;
                navigate(`/filters/new/${filter}`);
              }}
              className="flex-1"
            />
          </div>
        </SettingsSection>
      );
    });

  const menuItems = [
    { label: "Location", value: "Locations" },
    { label: "Language", value: "Languages" },
    { label: "Category", value: "Categories" },
    ...(settings?.current_plan?.id !== 1
      ? [{ label: "Member", value: "Members" }]
      : []),
  ];

  const renderDropdownMenu = () =>
    menuItems.map((item) => (
      <a
        key={item.value}
        href="#"
        className={`dropdown-item ${
          isLimitReached ? "dropdown-item-disabled" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          if (isLimitReached) return;
          setCreateDropdown(false);
          navigate(`/filters/new/${item.value}`);
        }}
      >
        {item.label}
      </a>
    ));

  return (
    <PageWrapper loading={loading} withBackground={true}>
      <Fragment>
        <div className="dashboard-card">
          <div className="servv-dashboard-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="dashboard-heading">
              <h1 className="dashboard-title">Filters</h1>
              <p className="dashboard-description mt-2">
                Easily view, create, and modify filters to streamline your event
                management process.
              </p>
              {isLimitReached && (
                <p className="text-sm text-warning-600 mt-2">
                  Filter limit reached ({maxFiltersNumber} filters). Upgrade
                  your plan to add more.
                </p>
              )}
            </div>
            <Dropdown
              activator={
                <PageActionButton
                  text="Create filter"
                  type="primary"
                  icon={<PlusIcon className="button-icon primary" />}
                  onAction={() => setCreateDropdown(!createDropdown)}
                  disabled={isLimitReached}
                />
              }
              status={createDropdown}
              onClose={() => setCreateDropdown(false)}
            >
              <ul className="filters-dropdown">{renderDropdownMenu()}</ul>
            </Dropdown>
          </div>

          <div className="header-line mt-4" />

          <PageContent className="py-0 my-0">
            <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6 items-stretch">
              {filterCategories.length === 0 ? (
                <div className="text-center p-8 text-gray-500">
                  <MagnifyingGlassIcon className="mx-auto w-12 h-12 mb-4" />
                  <p className="text-lg font-semibold">No filters found</p>
                  <p className="text-sm">
                    Filters allow your attendees to better search for relevant
                    events.
                  </p>
                </div>
              ) : (
                renderFilterSections()
              )}
            </div>
          </PageContent>
        </div>
      </Fragment>
    </PageWrapper>
  );
};

export default FiltersPage;
