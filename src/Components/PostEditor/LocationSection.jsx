import React, { Fragment, useState, useEffect } from "react";
import ButtonGroup from "../Controls/ButtonGroup";
import InputFieldControl from "../Controls/InputFieldControl";
import SelectDropdown from "./SelectDropdown";

const LocationSection = ({
  eventDetails,
  onChange,
  meetingType,
  customFields,
  handleCustomFieldChange,
  settings = {},
  disabled = false,
  zoomAccount,
  types = {},
  filtersList = [],
  onFilterChange = () => {},
}) => {
  const { custom_field_1_name, custom_field_1_value } = customFields;
  const [onlineType, setOnlineType] = useState(false);
  const { location } = eventDetails;

  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const eventTypes = ["In-person", "Online or Hybrid"];

  const handleLocationChange = (newVal) => {
    if (newVal === eventTypes[0]) {
      onChange("location", "offline");
      handleCustomFieldChange("custom_field_1_name", "Access details");
      handleCustomFieldChange("custom_field_1_value", "");
    } else if (newVal === eventTypes[1]) {
      onChange("location", "zoom");
      handleCustomFieldChange("custom_field_1_name", "Link");
      handleCustomFieldChange("custom_field_1_value", "");
    }
  };

  const handleSelectLocation = (location) => {
    onFilterChange("location_id", location);
  };

  const handleSelectOnlineType = (type) => {
    setOnlineType(type);
    onChange("location", type ? "zoom" : "offline");

    handleCustomFieldChange("custom_field_1_name", "Link");
    handleCustomFieldChange("custom_field_1_value", "");
  };

  useEffect(() => {
    if (
      (location === "zoom" || location === "online") &&
      !custom_field_1_name
    ) {
      handleCustomFieldChange("custom_field_1_name", "Link");
    }
  }, [disabled, location, customFields]);

  useEffect(() => {
    if (
      location === "online" &&
      (disabled || !zoomAccount || !zoomAccount.id)
    ) {
      handleLocationChange(eventTypes[0]);
    }
  }, [disabled, location, zoomAccount]);

  return (
    <div className="section-container">
      <div className="section-heading">Venue & access</div>

      {filtersList.locations && filtersList.locations.length > 0 && (
        <SelectDropdown
          id="location-filter"
          title="Location"
          options={filtersList.locations}
          selected={types.location_id || null}
          onSelect={handleSelectLocation}
          activeId={activeDropdownId}
          setActiveId={setActiveDropdownId}
        />
      )}

      {onlineType && zoomAccount && zoomAccount.email && (
        <div className="input-container-col w-full">
          <SelectDropdown
            id="zoom-account"
            title="Select Zoom account"
            options={[{ name: zoomAccount.email, id: zoomAccount.id }]}
            selected={zoomAccount.id || null}
            onSelect={() => {}}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        </div>
      )}
    </div>
  );
};

export default LocationSection;
