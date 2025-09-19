import { Fragment, useEffect, useState } from "react";
import ButtonGroup from "../Controls/ButtonGroup";
import SelectDropdown from "./SelectDropdown";
import CustomDropdown from "../Controls/CustomDropdown";
import SelectControl from "../Controls/SelectControl";
const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {},
}) => {
  const filtersTabs = ["Your filters", "Create new"];

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
    onChange("members", member);
  };
  return (
    <Fragment>
      {
        <div className="section-container">
          <div className="section-heading">{t("Filters")}</div>
          {/* <ButtonGroup
          title="Choose an existing set of Filters or a create new filter category."
          buttons={filtersTabs}
          active={"Your filters"}
          onChange={() => {}}
        /> */}
          {/* {filtersList.locations && filtersList.locations.length > 0 && (
          <SelectDropdown
            title="Location"
            options={filtersList.locations}
            selected={types.location_id || null}
            onSelect={handleSelectLocation}
          />
        )} */}
          {filtersList.categories && filtersList.categories.length > 0 && (
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
              multi={true}
            />
          )}
        </div>
      }
    </Fragment>
  );
};
export default FiltersSection;
