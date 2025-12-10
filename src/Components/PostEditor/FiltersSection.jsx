import { Fragment, useEffect, useState } from "react";
// import ButtonGroup from "../Controls/ButtonGroup";
import SelectDropdown from "./SelectDropdown";
// import CustomDropdown from "../Controls/CustomDropdown";
// import SelectControl from "../Controls/SelectControl";

const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {},
}) => {
  const filtersTabs = ["Your filters", "Create new"];

  const [activeDropdownId, setActiveDropdownId] = useState(null);

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
      <div className="section-container">
        <div className="section-heading">{t("Filters")}</div>

        {/* Location */}
        {/* {filtersList.locations && filtersList.locations.length > 0 && (
          <SelectDropdown
            id="location"
            title="Location"
            options={filtersList.locations}
            selected={types.location_id || null}
            onSelect={handleSelectLocation}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        )} */}

        {/* Category */}
        {filtersList.categories && filtersList.categories.length > 0 && (
          <SelectDropdown
            id="category"
            title="Category"
            options={filtersList.categories}
            selected={types.category_id || null}
            onSelect={handleSelectCategory}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        )}

        {/* Language */}
        {filtersList.languages && filtersList.languages.length > 0 && (
          <SelectDropdown
            id="language"
            title="Language"
            options={filtersList.languages}
            selected={types.language_id || null}
            onSelect={handleSelectLanguage}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        )}

        {/* Members (multi-select) */}
        {filtersList.members && filtersList.members.length > 0 && (
          <SelectDropdown
            id="members"
            title="Members"
            options={filtersList.members}
            selected={types.members || []}
            onSelect={handleSelectMember}
            multi={true}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        )}
      </div>
    </Fragment>
  );
};

export default FiltersSection;
