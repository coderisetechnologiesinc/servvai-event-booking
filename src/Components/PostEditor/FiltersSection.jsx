import { Fragment, useEffect, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import ButtonGroup from "../Controls/ButtonGroup";
import SelectDropdown from "./SelectDropdown";
const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {},
}) => {
  const filtersTabs = ["Your filters", "Create new"];
  //   const [filtersList, setFiltersList] = useState({});
  //   const getFilterType = async (type) => {
  //     try {
  //       let reqURL = `/servv-plugin/v1/filters/${type}`;
  //       let getFiltersListResponse = await apiFetch({ path: reqURL });
  //       if (getFiltersListResponse) {
  //         setFiltersList((prevFilters) => ({
  //           ...prevFilters,
  //           [type]: getFiltersListResponse,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching filters:", error);
  //     }
  //   };
  //   const getFilters = async () => {
  //     await getFilterType("locations");
  //     // await getFilterType("languages");
  //     // await getFilterType("categories");
  //     // await getFilterType("members");
  //   };
  //   useEffect(() => {
  //     getFilters();
  //   }, []);

  const handleSelectLocation = (location) => {
    onChange("location_id", location);
  };
  const handleSelectCategory = (category) => {
    onChange("category_id", category);
  };
  const handleSelectLanguage = (language) => {
    onChange("language_id", language);
  };
  const handleSelectMember = (member) => {
    console.log(member);
    onChange("members", member);
  };
  return (
    <Fragment>
      <div className="section-container border-b">
        <div className="section-heading">Filters</div>
        {/* <ButtonGroup
          title="Choose an existing set of Filters or a create new filter category."
          buttons={filtersTabs}
          active={"Your filters"}
          onChange={() => {}}
        /> */}
        {filtersList.locations && filtersList.locations.length > 0 && (
          <SelectDropdown
            title="Location"
            options={filtersList.locations}
            selected={types.location_id || null}
            onSelect={handleSelectLocation}
          />
        )}
        {filtersList.categorie && filtersList.categories.length > 0 && (
          <SelectDropdown
            title="Category"
            options={filtersList.categories}
            selected={types.category_id || null}
            onSelect={handleSelectCategory}
          />
        )}
        {filtersList.languages && filtersList.languages.length > 0 && (
          <SelectDropdown
            title="Language"
            options={filtersList.languages}
            selected={types.language_id || null}
            onSelect={handleSelectLanguage}
          />
        )}
        {filtersList.members && filtersList.members.length > 0 && (
          <SelectDropdown
            title="Members"
            options={filtersList.members}
            selected={types.members || []}
            onSelect={handleSelectMember}
          />
        )}
      </div>
    </Fragment>
  );
};
export default FiltersSection;
