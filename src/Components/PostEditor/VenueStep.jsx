import { useEffect, useState } from "react";
import { MapMarkIcon } from "../../assets/icons";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import RadioGroup from "../Controls/RecurrenceRadioGroup";
import NewInputControl from "../Controls/NewInputControl";
import SelectDropdown from "./SelectDropdown";
import { useServvStore } from "../../store/useServvStore";
const VenueStep = ({
  attributes,
  setAttributes,
  changeStep,
  zoomConnected,
  isNew,
  settings,
  handleFormSubmit,
}) => {
  const filtersList = useServvStore((s) => s.filtersList);
  const locationId = attributes?.filters?.location_id || "";
  const customFields = attributes.custom_fields || {};
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const syncZoomAccount = useServvStore((s) => s.syncZoomAccount);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  useEffect(() => {
    if (zoomConnected) {
      syncZoomAccount();
    }
  }, [zoomConnected]);
  const { custom_field_1_name = "", custom_field_1_value = "" } = customFields;
  const locationOptions =
    filtersList?.locations?.map((loc) => ({
      value: String(loc.id),
      label: loc.name,
    })) || [];

  const handleLocationChange = (val) => {
    setAttributes({
      filters: {
        ...(attributes.filters || {}),
        location_id: Number.parseInt(val),
      },
    });
  };

  const updateCustomField = (key, value) => {
    setAttributes({
      custom_fields: {
        [key]: value,
      },
    });
  };

  const handleVenueChange = (newVal) => {
    let newEventType = 1;
    if (newVal === "offline") {
      if (attributes.meeting.recurrence) {
        newEventType = 2;
      } else {
        newEventType = 1;
      }
    } else if (newVal === "zoom") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    } else if (newVal === "hybrid" || newVal === "online") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    }
    let payload = {
      location: newVal,
      defaultLocationChanged: true,
      meeting: { ...attributes.meeting, eventType: newEventType },
    };
    if (newVal === "hybrid") {
      updateCustomField("custom_field_1_name", "Link");
      updateCustomField("custom_field_1_value", "");
    } else if (newVal === "custom") {
      updateCustomField("custom_field_1_name", "Meeting link");
      updateCustomField("custom_field_1_value", "");
    } else {
      updateCustomField("custom_field_1_name", "");
      updateCustomField("custom_field_1_value", "");
    }
    setAttributes(payload);
  };

  useEffect(() => {
    if (!settings?.settings?.admin_dashboard) {
      return;
    }

    const adminDashboard = settings.settings.admin_dashboard;

    try {
      if (typeof adminDashboard !== "string") {
        console.warn("adminDashboard is not a string:", typeof adminDashboard);
        return;
      }

      const parsed = JSON.parse(adminDashboard);

      if (!parsed || typeof parsed !== "object") {
        console.warn("Parsed adminDashboard is not a valid object");
        return;
      }

      const { default_event_type } = parsed;

      if (!default_event_type || typeof default_event_type !== "string") {
        return;
      }

      const shouldSetZoom =
        (default_event_type === "zoom" || default_event_type === "online") &&
        zoomConnected === true &&
        !attributes.defaultLocationChanged;

      if (shouldSetZoom) {
        handleVenueChange("zoom");
      }
    } catch (error) {
      console.error("Error parsing adminDashboard settings:", {
        error: error instanceof Error ? error.message : "Unknown error",
        rawData: adminDashboard,
      });
    }
  }, [
    settings,
    zoomConnected,
    attributes?.location,
    attributes.defaultLocationChanged,
  ]);
  useEffect(() => {
    if (filtersList?.locations?.length === 1) {
      handleLocationChange(filtersList.locations[0].id);
    }
  }, [filtersList, settings]);

  return (
    <div className="step__wrapper">
      <div className="step__header">
        <MapMarkIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Location</h4>
          <p className="step__description">Choose the event location</p>
        </div>
      </div>
      {
        <div className="step__content">
          <div className="step__content_block">
            {/* <span className="step__content_title">Event type</span> */}

            <RadioGroup
              name="venue-mode"
              value={
                custom_field_1_name === "Link"
                  ? "hybrid"
                  : custom_field_1_name === "Meeting link"
                  ? "custom"
                  : attributes.location
              }
              className="w-[419px]"
              options={
                !zoomConnected
                  ? [
                      { value: "offline", label: "In-Person" },
                      { value: "zoom", label: "Zoom", disabled: true },
                      { value: "custom", label: "Online" },
                      { value: "hybrid", label: "Hybrid" },
                    ]
                  : [
                      { value: "offline", label: "In-Person" },
                      { value: "zoom", label: "Zoom" },
                      { value: "custom", label: "Online" },
                      { value: "hybrid", label: "Hybrid" },
                    ]
              }
              disabled={!isNew}
              onChange={handleVenueChange}
            />
          </div>
        </div>
      }
      <div className="step__content w-full">
        {(attributes.location === "offline" ||
          attributes.location === "hybrid") && (
          <div className="step__content_block">
            <span className="step__content_title">Location</span>

            <NewSelectControl
              helpText="Select location"
              value={locationId}
              options={locationOptions}
              onChange={handleLocationChange}
              iconRight={<ChevronDownIcon />}
              style={{ width: "100%" }}
            />
          </div>
        )}

        {attributes.location === "zoom" && zoomAccount && (
          <SelectDropdown
            id="zoom-account"
            title="Zoom account"
            options={[{ name: zoomAccount.email, id: zoomAccount.id }]}
            selected={zoomAccount.id || null}
            onSelect={() => {}}
            activeId={activeDropdownId}
            setActiveId={setActiveDropdownId}
          />
        )}

        {(custom_field_1_name === "Link" ||
          custom_field_1_name === "Meeting link") && (
          <div className="step__content_block">
            <span className="step__content_title">Meeting link</span>
            <NewInputControl
              // label="Description"
              placeholder="Enter Zoom, Meet, Teams or other meeting URL"
              value={custom_field_1_value}
              textarea={true}
              onChange={(val) => updateCustomField("custom_field_1_value", val)}
            />
          </div>
        )}
        {/* {attributes.type === "hybrid" && (
          <RadioGroup
            name="-mode"
            value={attributes.type}
            options={[
              { value: "offline", label: "Offline" },
              { value: "zoom", label: "Zoom" },
              { value: "hybrid", label: "Hybrid" },
            ]}
            onChange={handleVenueChange}
          />
        )} */}
        <div className="servv_actions mt-auto">
          {!isNew && (
            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={() => handleFormSubmit(true)}
            >
              Save and Exit
            </button>
          )}
          <button
            type="button"
            className="servv_button servv_button--secondary"
            onClick={() => changeStep("date")}
          >
            Previous
          </button>

          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={() => changeStep("tickets")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default VenueStep;
