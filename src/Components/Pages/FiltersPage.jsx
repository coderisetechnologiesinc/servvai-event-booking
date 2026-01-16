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

  const filterDescriptions = {
    Locations: "Locations description",
    Languages: "Languages description",
    Categories: "Categories description",
    Members: "Members description",
  };

  const [filterCategories, setFilterCategories] = useState([]);

  useEffect(() => {
    setFilterCategories(
      Object.keys(filtersList)
        .filter((key) => filtersList[key]?.length > 0)
        .map((key) => key.charAt(0).toUpperCase() + key.slice(1))
    );
  }, [filtersList]);

  const headings = [
    { label: "Filter categories" },
    { label: "Description" },
    { label: "Action" },
  ];

  const renderHeadings = () =>
    headings.map((h) => <th key={h.label}>{h.label}</th>);

  const renderRows = () =>
    filterCategories.map((filter) => (
      <tr key={filter} className="table-row">
        <td>
          <a
            className="filter-table-link"
            onClick={() => navigate(`/filters/list/${filter}`)}
          >
            {filter}
          </a>
        </td>
        <td>{filterDescriptions[filter] ?? "Description"}</td>
        <td>
          <PageActionButton
            text="Create filter"
            type="secondary"
            icon={<PlusIcon className="button-icon" />}
            slim
            onAction={() => navigate(`/filters/new/${filter}`)}
          />
        </td>
      </tr>
    ));

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
        onClick={(e) => {
          e.preventDefault();
          setCreateDropdown(false);
          navigate(`/filters/new/${item.value}`);
        }}
      >
        {item.label}
      </a>
    ));

  return (
    <PageWrapper loading={loading}>
      <Fragment>
        <PageHeader>
          <BlockStack>
            <h1 className="text-display-sm mt-6">Filters</h1>
            <p className="page-header-description">
              Easily view, create, and modify filters to streamline your event
              management process.
            </p>
          </BlockStack>

          <InlineStack align="right">
            <Dropdown
              activator={
                <PageActionButton
                  text="New filter"
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
          </InlineStack>
        </PageHeader>

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
              <FilterTable headings={renderHeadings()} rows={renderRows()} />
            </Card>
          )}
        </PageContent>
      </Fragment>
    </PageWrapper>
  );
};

export default FiltersPage;
