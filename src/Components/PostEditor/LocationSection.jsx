import React, { useEffect } from "react";
import ButtonGroup from "../Controls/ButtonGroup";
import InputFieldControl from "../Controls/InputFieldControl";
const LocationSection = ({
  eventDetails,
  onChange,
  meetingType,
  customFields,
  handleCustomFieldChange,
  settings = {},
  disabled = false,
  zoomAcctount,
}) => {
  const { custom_field_1_name, custom_field_1_value } = customFields;
  const { location } = eventDetails;
  const eventTypes = ["Standard", "Zoom meeting"];
  const handleLocationChange = (newVal) => {
    if (newVal === eventTypes[0] && location !== "offline") {
      onChange("location", "offline");
    } else if (newVal === eventTypes[1] && location !== "zoom") {
      onChange("location", "zoom");
    }
  };
  useEffect(() => {
    if (disabled) {
      handleLocationChange("Standard");
    }
  }, [disabled, location]);

  return (
    <div className="section-container">
      <div className="section-heading">
        {zoomAcctount ? "Type" : "Add location"}
      </div>
      {settings && zoomAcctount && (
        <ButtonGroup
          title=""
          buttons={eventTypes}
          active={location === "offline" ? eventTypes[0] : eventTypes[1]}
          onChange={handleLocationChange}
          disabled={disabled}
        />
      )}
      {meetingType === "offline" && (
        <div className="input-container-row items-center">
          <div className="input-container-col w-full">
            <div className="section-description">
              Location (In-person) or meeting link (e.g., Google Meet, Microsoft
              Teams)
            </div>
            {/* <InputFieldControl
              value={custom_field_1_name}
              onChange={(val) =>
                handleCustomFieldChange("custom_field_1_name", val)
              }
              fullWidth={true}
              type="text"
              align="left"
            /> */}

            {/* <div className="section-description">Custom field value</div> */}
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
      {/* <div className="flex flex-row gap-10 justify-between"> */}
      {/* Location Type */}
      {/* <div className="input-container-col grow">
        <div className="button-group-container">
          <button className="button-group-button-active">In-person</button>
          <button className="button-group-button">Online</button>
          <button className="button-group-button">Hybrid</button>
        </div>
      </div> */}
      {/* </div> */}
      {/* <div className="input-container-row items-center">
        <div className="input-container-col grow">
          <div className="text-md">Location</div>

          <div className="input-control-with-icon-container">
            <input
              type="text"
              placeholder="Start typing an adress"
              className="input-control-with-icon"
            />
            <MapPinIcon className="input-control-icon" />
          </div>
        </div>
      </div>
      <div className="rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92265.70148399581!2d-79.8419434744499!3d43.72502846063614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667cc38677!2sBrampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sua!4v1732201987269!5m2!1sen!2sua"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
};
export default LocationSection;
