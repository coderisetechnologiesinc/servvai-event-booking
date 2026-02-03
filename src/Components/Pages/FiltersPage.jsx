import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import PageActionButton from "../Controls/PageActionButton";

import Card from "../Containers/Card";
import FilterTable from "../Containers/FilterTable";
import PageContentPlaceholder from "../Containers/PageContentPlaceholder";
import Dropdown from "../Containers/Dropdown";

import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import PageWrapper from "./PageWrapper";

import { useServvStore } from "../../store/useServvStore";

const FiltersPage = () => {
  const filtersList = useServvStore((s) => s.filtersList);
  const getFilters = useServvStore((s) => s.syncFiltersFromServer);
  const settings = useServvStore((s) => s.settings);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [createDropdown, setCreateDropdown] = useState(false);
  const [secondCreateDropdown, setCreateSecondDropdown] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const filterDescriptions = {
    Locations: "Filter events based on where they take place",
    Languages: "Filter events by the language they’re hosted in",
    Categories: "Narrow down events by topic or type",
    Members:
      "Filter events by the host, instructor, or team member running the event",
  };

  const [filterCategories, setFilterCategories] = useState([]);
  const [defaultFiltersList, setDefaultFiltersList] = useState([
    "Locations",
    "Languages",
    "Categories",
  ]);
  const [maxFiltersNumber, setMaxFiltersNumber] = useState(2);
  useEffect(() => {
    let maxFilters = settings?.current_plan?.filters_limit;
    if (maxFilters) {
      setMaxFiltersNumber(maxFilters);
    } else if (settings?.current_plan?.id !== 1) {
      setMaxFiltersNumber(25);
    }
    const totalFilters = Object.values(filtersList).reduce(
      (total, filterArray) => (total += filterArray?.length || 0),
      0,
    );

    if (totalFilters >= maxFilters) {
      setIsLimitReached(true);
    }
  }, [settings, filtersList]);

  useEffect(() => {
    // setFilterCategories(
    //   Object.keys(filtersList)
    //     .filter((key) => filtersList[key]?.length > 0)
    //     .map((key) => key.charAt(0).toUpperCase() + key.slice(1)),
    // );
    setFilterCategories(defaultFiltersList);
  }, [filtersList]);

  const headings = [
    { label: "Filter categories" },
    { label: "Description" },
    { label: "Action" },
  ];

  const renderHeadings = () =>
    headings.map((h) => <th key={h.label}>{h.label}</th>);

  const renderRows = () =>
    filterCategories.map((filter) => {
      return (
        <tr key={filter} className="table-row">
          {/* Category link */}
          <td>
            <a
              className="filter-table-link"
              onClick={() => navigate(`/filters/list/${filter}`)}
            >
              {filter}
            </a>
          </td>

          {/* Description */}
          <td>{filterDescriptions[filter] ?? "Description"}</td>

          {/* Action button */}
          <td>
            <PageActionButton
              text={isLimitReached ? "Limit reached" : "Create"}
              type="secondary"
              icon={<PlusIcon className="button-icon" />}
              slim
              disabled={isLimitReached}
              onAction={() => {
                if (isLimitReached) return;
                navigate(`/filters/new/${filter}`);
              }}
            />
          </td>
        </tr>
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
    menuItems.map((item) => {
      return (
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
          {/* {isLimitReached && (
            <span className="ml-2 text-xs text-gray-400">(Limit)</span>
          )} */}
        </a>
      );
    });

  return (
    <PageWrapper loading={loading} withBackground={true}>
      <Fragment>
        <div className="dashboard-card">
          <div className="servv-dashboard-header">
            {/* LEFT */}
            <div className="dashboard-heading">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="dashboard-title">Filters</h1>
                <div className="dashboard-actions flex flex-row items-center gap-2 flex-nowrap">
                  <Dropdown
                    activator={
                      <PageActionButton
                        text="Create filter"
                        type="primary"
                        icon={<PlusIcon className="button-icon primary" />}
                        onAction={() => setCreateDropdown(!createDropdown)}
                      />
                    }
                    status={createDropdown}
                    onClose={() => setCreateDropdown(false)}
                  >
                    <ul className="filters-dropdown">{renderDropdownMenu()}</ul>
                  </Dropdown>
                </div>
              </div>
              <p className="dashboard-description mt-6">
                Easily view, create, and modify filters to streamline your event
                management process.
              </p>
            </div>

            {/* RIGHT – actions stay on the same row */}
          </div>

          <div className="header-line" />

          <PageContent>
            {filterCategories.length === 0 ? (
              <PageContentPlaceholder
                icon={<MagnifyingGlassIcon className="placeholder-icon" />}
                title="No filters found"
                description="Filters allow your attendees to better search for relevant events."
              >
                {/* <Dropdown
                activator={
                  <PageActionButton
                    text="Create"
                    type="primary"
                    icon={<PlusIcon className="button-icon primary" />}
                    onAction={() =>
                      setCreateSecondDropdown(!secondCreateDropdown)
                    }
                  />
                }
                status={secondCreateDropdown}
              >
                <ul className="filters-dropdown">{renderDropdownMenu()}</ul>
              </Dropdown> */}
              </PageContentPlaceholder>
            ) : (
              <Card>
                <FilterTable
                  headings={renderHeadings()}
                  tableClassName="filters-page-table"
                  rows={renderRows()}
                />
              </Card>
            )}
          </PageContent>
        </div>
      </Fragment>
    </PageWrapper>
  );
};

export default FiltersPage;
