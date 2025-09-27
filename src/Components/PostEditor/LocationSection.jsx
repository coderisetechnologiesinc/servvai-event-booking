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
  const eventTypes = ["In-person", "Online"];
  const handleLocationChange = (newVal) => {
    if (newVal === eventTypes[0]) {
      onChange("location", "offline");
      handleCustomFieldChange("custom_field_1_name", "Address");
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
    if (!type) {
      onChange("location", "offline");
    } else {
      onChange("location", "zoom");
    }
    handleCustomFieldChange("custom_field_1_name", "Link");
    handleCustomFieldChange("custom_field_1_value", "");
  };
  useEffect(() => {
    // if (disabled) {
    //   handleLocationChange("offline");
    // }

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
      console.log("change location");
      handleLocationChange(eventTypes[0]);
    }
  }, [disabled, location, zoomAccount]);

  return (
    <div className="section-container">
      <div className="section-heading">Venue & access</div>
      {settings && zoomAccount && (
        <ButtonGroup
          title=""
          buttons={eventTypes}
          active={
            location === "offline" && custom_field_1_name !== "Link"
              ? eventTypes[0]
              : eventTypes[1]
          }
          onChange={handleLocationChange}
          // disabled={disabled}
        />
      )}
      {settings &&
        settings.current_plan &&
        settings.current_plan.id === 2 &&
        (!zoomAccount || !zoomAccount.id) && (
          <div className="section-description">
            Please note: To use the Integrations feature, you need to connect
            your Zoom account.
          </div>
        )}
      {meetingType === "offline" && custom_field_1_name !== "Link" && (
        <div className="input-container-row items-center">
          <div className="input-container-col w-full">
            <div className="section-description">
              {t(
                "Location (In-person) or meeting link (e.g., Google Meet, Microsoft\r\n              Teams)"
              )}
            </div>

            {/* Custom field */}
            <InputFieldControl
              value={custom_field_1_value}
              onChange={(val) =>
                handleCustomFieldChange("custom_field_1_value", val)
              }
              fullWidth={true}
              type="text"
              align="left"
            />
          </div>
        </div>
      )}

      {(meetingType !== "offline" || custom_field_1_name === "Link") && (
        <Fragment>
          {/* Tabs */}
          <div className="section-description">Choose a join method:</div>
          <div className="tabs-group-container">
            <ul className="flex flex-row">
              <li className="me-2">
                <button
                  onClick={() => handleSelectOnlineType(false)}
                  className={`tab-element ${!onlineType ? "tab-active" : ""}`}
                >
                  Join link URL
                </button>
              </li>
              <li className="me-2">
                <button
                  onClick={() => handleSelectOnlineType(true)}
                  className={`tab-element ${onlineType ? "tab-active" : ""}`}
                  disabled={!zoomAccount || (zoomAccount && !zoomAccount.email)}
                >
                  Integration
                </button>
              </li>
            </ul>
          </div>
          {!onlineType && custom_field_1_name === "Link" && (
            <div className="input-container-col w-full">
              <div className="section-description">Join link URL</div>
              <InputFieldControl
                value={custom_field_1_value}
                onChange={(val) =>
                  handleCustomFieldChange("custom_field_1_value", val)
                }
                fullWidth={true}
                type="text"
                align="left"
              />
            </div>
          )}
          {onlineType && zoomAccount && zoomAccount.email && (
            <div className="input-container-col w-full">
              {/* <div className="section-description">Select an integration</div> */}
              <SelectDropdown
                title="Select an integration"
                options={[{ ...zoomAccount }].map((acc) => {
                  return { name: acc.email, id: acc.id };
                })}
                selected={zoomAccount.id || null}
                onSelect={() => {}}
              />
            </div>
          )}
        </Fragment>
      )}

      {filtersList.locations && filtersList.locations.length > 0 && (
        <SelectDropdown
          title="Location"
          options={filtersList.locations}
          selected={types.location_id || null}
          onSelect={handleSelectLocation}
        />
      )}
    </div>
  );
};
export default LocationSection;
