import { Fragment, useState, useEffect } from "react";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import PageActionButton from "../Controls/PageActionButton";
import PageContentPlaceholder from "../Containers/PageContentPlaceholder";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Card from "../Containers/Card";
import FilterTable from "../Containers/FilterTable";
import axios from "axios";
import FiltersList from "./FiltersList";
import Dropdown from "../Containers/Dropdown";
import CreateLocationFilterForm from "./CreateLocationFilterForm";
import CreateCategoryFilterForm from "./CreateCategoryFilterForm";
import CreateMemberFilterForm from "./CreateMemberFilterForm";
import CreateLanguageFilterForm from "./CreateLanguageFilterForm";
import BreadCrumbs from "../Menu/BreadCrumbs";
import PageWrapper from "./PageWrapper";
import { toast } from "react-toastify";
const FiltersPage = ({
  settings,
  filtersList = {},
  getFilters = () => {},
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
}) => {
  // const [filtersList, setFiltersList] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useEffect(() => {
    if (resetSelectedSubpage) {
      handleCloseCreateForm();
      setSelectedList(null);
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
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
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const renderBreadCrumbs = () => {
    return (
      <BreadCrumbs
        breadcrumbs={breadcrumbs}
        onBreadCrumbClick={handleBreadCrumbsClick}
      />
    );
  };

  const handleBreadCrumbsChange = (label, action) => {
    setBreadcrumbs([...breadcrumbs, { label, action }]);
  };
  const handleBreadCrumbsClick = (label) => {
    // console.log(breadcrumbs.map((item) => item.label).indexOf(label));
    setBreadcrumbs(
      breadcrumbs.slice(
        0,
        breadcrumbs.map((item) => item.label).indexOf(label) + 1
      )
    );
  };

  const [filtersCategories, setFiltersCategories] = useState([]);
  const headings = [
    { label: "Filter categories", value: "categories" },
    { label: "Description", value: "description" },
    { label: "Action", value: "action" },
  ];
  const getFilterDescription = (filter) => {
    switch (filter) {
      case "Locations":
        return "Locations description";
        break;
      case "Languages":
        return "Languages description";
        break;
      case "Categories":
        return "Categories description";
        break;
      case "Members":
        return "Members description";
        break;
      default:
        return "Description";
        break;
    }
  };
  const renderHeadings = () => {
    return (
      <Fragment>
        {headings.map((heading) => {
          return <th>{heading.label}</th>;
        })}
      </Fragment>
    );
  };
  const handleSelectType = (e, type) => {
    e.preventDefault();
    setSelectedList(type);
    handleBreadCrumbsChange(type, () => setSelectedList(type));
  };
  const [filterForUpdate, setFilterForUpdate] = useState(null);
  const renderFiltersCategories = () => {
    return filtersCategories.map((filter) => {
      if (filter)
        return (
          <tr className="table-row">
            <td>
              <a
                className="filter-table-link"
                onClick={(e) => handleSelectType(e, filter)}
              >
                {filter}
              </a>
            </td>
            <td>
              <span>{getFilterDescription(filter)}</span>
            </td>
            <td>
              <PageActionButton
                text="Create"
                icon={<PlusIcon className="button-icon" />}
                type="secondary"
                onAction={() => handleOpenCreateFilter(filter)}
                slim={true}
              />
            </td>
          </tr>
        );
    });
  };

  // const getFilters = async () => {
  //   setLoading(true);
  //   if (servvData.servv_plugin_mode === "development") {
  //     await getFilterType("locations");
  //     await getFilterType("languages");
  //     await getFilterType("categories");
  //     if (settings && settings.current_plan.id == 2) {
  //       await getFilterType("members");
  //     }
  //   } else {
  //     getFilterType("locations");
  //     getFilterType("languages");
  //     getFilterType("categories");
  //     if (settings && settings.current_plan.id == 2) {
  //       getFilterType("members");
  //     }
  //   }
  //   setLoading(false);
  // };
  useEffect(() => {
    setFiltersCategories(
      Object.keys(filtersList).map((filter) => {
        if (filtersList[filter] && filtersList[filter].length > 0)
          return filter.charAt(0).toUpperCase() + filter.slice(1);
      })
    );
  }, [filtersList]);
  const [createFilterOpen, setCreateFilterOpen] = useState(null);
  const handleCloseCreateForm = () => {
    setFilterForUpdate(null);
    getFilters();
    setCreateFilterOpen(null);
    setFilterForUpdate(null);
    setLoading(false);
  };

  const handleEditLocation = (e, location) => {
    e.preventDefault();
    setFilterForUpdate(location);
    setCreateFilterOpen("Locations");
  };
  const handleEditLanguage = (e, language) => {
    e.preventDefault();
    setFilterForUpdate(language);
    setCreateFilterOpen("Languages");
  };
  const handleEditCategory = (e, category) => {
    e.preventDefault();
    setFilterForUpdate(category);
    setCreateFilterOpen("Categories");
  };
  const handleEditMember = (e, member) => {
    e.preventDefault();
    setFilterForUpdate(member);
    setCreateFilterOpen("Members");
  };
  const handleOpenCreateFilter = (type) => {
    setCreateFilterDropdown(false);
    setCreateFilterOpen(type);
  };
  const [filtersAvailableCategories, setFiltersAvailableCategories] = useState([
    { label: "Location", value: "Locations" },
    { label: "Language", value: "Languages" },
    { label: "Category", value: "Categories" },
    { label: "Member", value: "Members" },
  ]);
  useEffect(() => {
    if (settings && settings.current_plan && settings.current_plan.id !== 2) {
      setFiltersAvailableCategories([
        { label: "Location", value: "Locations" },
        { label: "Language", value: "Languages" },
        { label: "Category", value: "Categories" },
      ]);
    }
  }, [settings]);
  const renderCreateFilterMenu = () => {
    return filtersAvailableCategories.map((filter) => {
      return (
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCreateFilterDropdown(false);
            handleOpenCreateFilter(filter.value);
          }}
        >
          {filter.label}
        </a>
      );
    });
  };
  const [createFirstFilterDropdown, setCreateFirstFilterDropdown] =
    useState(false);
  const handleSelectChange = (id) => {
    let newSelectedFilters = [...selectedFilter];
    if (!newSelectedFilters.includes(id)) {
      newSelectedFilters.push(id);
    } else {
      newSelectedFilters.pop(id);
    }

    setSelectedFilter(newSelectedFilters);
  };
  const handleSelectAll = () => {
    switch (selectedList) {
      case "Locations":
        if (selectedFilter.length < filtersList.locations.length) {
          setSelectedFilter(
            filtersList.locations.map((location) => location.id)
          );
        } else if (selectedFilter.length === filtersList.locations.length) {
          setSelectedFilter([]);
        }
        break;
      case "Members":
        if (selectedFilter.length < filtersList.members.length) {
          setSelectedFilter(
            filtersList.members.map((member) => member.id),
            () => {}
          );
        } else if (selectedFilter.length === filtersList.members.length) {
          setSelectedFilter([]);
        }
        break;
      case "Languages":
        if (selectedFilter.length < filtersList.languages.length) {
          setSelectedFilter(
            filtersList.languages.map((language) => language.id),
            () => {}
          );
        } else if (selectedFilter.length === filtersList.languages.length) {
          setSelectedFilter([]);
        }
        break;
      case "Categories":
        if (selectedFilter.length < filtersList.categories.length) {
          setSelectedFilter(
            filtersList.categories.map((category) => category.id),
            () => {}
          );
        } else if (selectedFilter.length === filtersList.categories.length) {
          setSelectedFilter([]);
        }
        break;
    }
  };
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  useEffect(() => {
    getData();
  }, [settings]);
  // const getSettings = async () => {
  //   setLoading(true);
  //   const getSettingsResponse = await axios(
  //     "/wp-json/servv-plugin/v1/shop/info",
  //     {
  //       headers: { "X-WP-Nonce": servvData.nonce },
  //     }
  //   ).catch((error) => toast("Servv unable to fetch settings."));
  //   if (getSettingsResponse && getSettingsResponse.status === 200) {
  //     setTimeFormat(
  //       getSettingsResponse.data.settings.admin_dashboard.time_format_24_hours
  //         ? "HH:mm"
  //         : "hh:mm a"
  //     );
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   console.log(filtersList);
  // }, [filtersList]);
  const [selectedList, setSelectedList] = useState(null);
  const getData = async () => {
    // if (servvData.servv_plugin_mode === "development") {
    //   if (settings) await getFilters();
    // } else {
    //   getFilters();
    // }
    if (settings) {
      setTimeFormat(
        settings.settings.admin_dashboard.time_format_24_hours
          ? "HH:mm"
          : "hh:mm a"
      );
    }
  };
  useEffect(() => {
    // getData();
    handleBreadCrumbsChange("Filters", () => setSelectedList(null));
  }, []);
  const singleFilterDelete = async (type, id) => {
    let url = `/wp-json/servv-plugin/v1/filters/${type.toLowerCase()}/${id}`;
    setLoading(true);
    const response = await axios({
      method: "DELETE",
      url: url,
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    setLoading(false);
    return response;
  };
  const handleFiltersDelete = async (type, ids) => {
    setLoading(true);
    const promises = ids.map((id) => singleFilterDelete(type, id));
    const result = await Promise.allSettled(promises);
    if (result) {
      getFilters();
    }
    setLoading(false);
  };
  const [createFilterDropdown, setCreateFilterDropdown] = useState(false);

  return (
    <PageWrapper loading={loading}>
      {!createFilterOpen && (
        <Fragment>
          <PageHeader>
            <BlockStack>
              <h1 className="text-display-sm font-semibold mt-6">
                {!selectedList ? "Filters" : selectedList}
              </h1>
              {breadcrumbs.length > 1 && renderBreadCrumbs()}
              <p className="page-header-description">
                Easily view, create, and modify filters to streamline your event
                management process
              </p>
            </BlockStack>
            <InlineStack gap={2} align="right">
              <Dropdown
                activator={
                  <PageActionButton
                    text="New filter"
                    icon={<PlusIcon className="primary button-icon" />}
                    type="primary"
                    onAction={() => {
                      !selectedList
                        ? setCreateFirstFilterDropdown(
                            !createFirstFilterDropdown
                          )
                        : handleOpenCreateFilter(selectedList);
                    }}
                  />
                }
                status={createFirstFilterDropdown}
                onClose={() => setCreateFirstFilterDropdown(false)} // <-- ADD THIS LINE
              >
                <ul className="filters-dropdown">{renderCreateFilterMenu()}</ul>
              </Dropdown>
            </InlineStack>
          </PageHeader>
          <PageContent>
            {/* <PageContentPlaceholder
          icon={<MagnifyingGlassIcon className="button-icon" />}
          title="No filters found"
          description="Filters allow your attendees to better search for and find events that apply to them."
        >
          <PageActionButton text="See examples" type="secondary" />
          <PageActionButton
            text="Create"
            icon={<PlusIcon className="button-icon" />}
            type="primary"
            onAction={() => {}}
          />
        </PageContentPlaceholder> */}
          </PageContent>
        </Fragment>
      )}
      {createFilterOpen === "Locations" && (
        <CreateLocationFilterForm
          onCancel={handleCloseCreateForm}
          location={filterForUpdate}
          timeFormat={timeFormat}
        />
      )}
      {createFilterOpen === "Languages" && (
        <CreateLanguageFilterForm
          onCancel={handleCloseCreateForm}
          language={filterForUpdate}
        />
      )}
      {createFilterOpen === "Categories" && (
        <CreateCategoryFilterForm
          onCancel={handleCloseCreateForm}
          category={filterForUpdate}
        />
      )}
      {createFilterOpen === "Members" && (
        <CreateMemberFilterForm
          onCancel={handleCloseCreateForm}
          member={filterForUpdate}
        />
      )}
      {!createFilterOpen && filtersCategories.length === 0 && (
        <PageContentPlaceholder
          icon={<MagnifyingGlassIcon className="placeholder-icon" />}
          title="No filters found"
          description="Filters allow your attendees to better search for and find events that apply to them."
        >
          {/* <PageActionButton text="See examples" type="secondary" /> */}
          <Dropdown
            activator={
              <PageActionButton
                text="Create"
                icon={<PlusIcon className="primary button-icon" />}
                type="primary"
                onAction={() => {
                  setCreateFilterDropdown(!createFilterDropdown);
                }}
              />
            }
            status={createFilterDropdown}
          >
            <ul className="filters-dropdown">{renderCreateFilterMenu()}</ul>
          </Dropdown>
        </PageContentPlaceholder>
      )}
      {!createFilterOpen && filtersCategories.length > 0 && !selectedList && (
        <Card>
          <FilterTable
            headings={renderHeadings()}
            rows={renderFiltersCategories()}
          />
        </Card>
      )}
      {!createFilterOpen &&
        selectedList === "Locations" &&
        filtersList.locations &&
        filtersList.locations.length > 0 &&
        !filterForUpdate && (
          <FiltersList
            title="Locations"
            filters={filtersList.locations}
            selected={selectedFilter}
            onSelect={handleSelectChange}
            onSelectAll={handleSelectAll}
            onEdit={handleEditLocation}
            onDelete={handleFiltersDelete}
            setLoading={setLoading}
          />
        )}
      {!createFilterOpen &&
        selectedList === "Languages" &&
        filtersList.languages &&
        filtersList.languages.length > 0 &&
        !filterForUpdate && (
          <FiltersList
            title="Languages"
            filters={filtersList.languages}
            selected={selectedFilter}
            onSelect={handleSelectChange}
            onEdit={handleEditLanguage}
            onDelete={handleFiltersDelete}
            setLoading={setLoading}
          />
        )}
      {!createFilterOpen &&
        selectedList === "Categories" &&
        filtersList.categories &&
        filtersList.categories.length > 0 &&
        !filterForUpdate && (
          <FiltersList
            title="Categories"
            filters={filtersList.categories}
            selected={selectedFilter}
            onSelect={handleSelectChange}
            onEdit={handleEditCategory}
            onDelete={handleFiltersDelete}
            setLoading={setLoading}
          />
        )}
      {!createFilterOpen &&
        selectedList === "Members" &&
        filtersList.members &&
        filtersList.members.length > 0 &&
        !filterForUpdate && (
          <FiltersList
            title="Members"
            filters={filtersList.members}
            selected={selectedFilter}
            onSelect={handleSelectChange}
            onEdit={handleEditMember}
            onDelete={handleFiltersDelete}
            setLoading={setLoading}
          />
        )}
    </PageWrapper>
  );
};
export default FiltersPage;
