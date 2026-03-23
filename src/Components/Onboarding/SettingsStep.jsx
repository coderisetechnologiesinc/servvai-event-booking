import React from "react";
import { toast } from "react-toastify";
import { Cog6ToothIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import NewInputControl from "../Controls/NewInputControl";
import InteractiveCard from "../Containers/InteractiveCard";

const SettingsStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  loading,
  onSave,
}) => {
  const popularTimezones = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  const allTimezones = Intl.supportedValuesOf("timeZone");

  const timezoneOptions = [
    ...popularTimezones.map((tz) => ({
      value: tz,
      label: tz.replace(/_/g, " "),
    })),
    ...allTimezones
      .filter((tz) => !popularTimezones.includes(tz))
      .map((tz) => ({
        value: tz,
        label: tz.replace(/_/g, " "),
      })),
  ];

  const handleContinue = () => {
    if (!attributes.timezone) {
      toast.error("Please select a timezone");
      return;
    }

    onSave({
      timezone: attributes.timezone,
      location: attributes.location?.trim() ?? "",
      timeFormat: attributes.timeFormat,
    });
  };

  return (
    <div className="step__wrapper w-full">
      <div className="step__header">
        <Cog6ToothIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Settings</h4>
          <p className="step__description">
            Configure your default preferences before creating events.
          </p>
        </div>
      </div>

      <div className="step__content w-full max-w-[640px]">
        <InteractiveCard>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="step__content_title">Timezone</span>
              <NewSelectControl
                value={attributes.timezone || ""}
                options={timezoneOptions}
                helpText="Select timezone"
                style={{ width: "100%" }}
                onChange={(val) => setAttributes({ timezone: val })}
                iconRight={<ChevronDownIcon />}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="step__content_title">Default Location</span>
              <NewInputControl
                placeholder="Enter default city or venue"
                value={attributes.location || ""}
                onChange={(val) => setAttributes({ location: val })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="step__content_title">Time Format</span>
              <NewSelectControl
                value={attributes.timeFormat || "12h"}
                options={[
                  { label: "12 hours (AM/PM)", value: "12h" },
                  { label: "24 hours", value: "24h" },
                ]}
                helpText="Select time format"
                style={{ width: "100%" }}
                onChange={(val) => setAttributes({ timeFormat: val })}
                iconRight={<ChevronDownIcon />}
              />
            </div>
          </div>
        </InteractiveCard>

        <div className="servv_actions mt-auto">
          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={handleContinue}
            disabled={loading || !attributes.timezone}
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsStep;
