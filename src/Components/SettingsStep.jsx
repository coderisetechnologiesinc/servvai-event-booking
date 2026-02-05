import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Cog6ToothIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import NewSelectControl from "./Controls/NewSelectControl";
import NewInputControl from "./Controls/NewInputControl";
import RadioGroup from "./Controls/RecurrenceRadioGroup";

const SettingsStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  onSave,
  loading,
}) => {
  const [checkingEmail, setCheckingEmail] = useState(true);
  const [emailConnected, setEmailConnected] = useState(false);

  /* --------------------------------------------
     Timezone options (reuse existing approach)
  -------------------------------------------- */

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

  /* --------------------------------------------
     Date format options
  -------------------------------------------- */

  const dateFormatOptions = [
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY (12/31/2024)" },
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY (31/12/2024)" },
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD (2024-12-31)" },
  ];

  /* --------------------------------------------
     Email connection status
  -------------------------------------------- */

  useEffect(() => {
    checkEmailStatus();
  }, []);

  const checkEmailStatus = async () => {
    setCheckingEmail(true);

    try {
      const res = await axios.get("/wp-json/servv-plugin/v1/email/status", {
        headers: { "X-WP-Nonce": servvData.nonce },
      });

      const connected = res.data?.connected || false;

      setEmailConnected(connected);

      setAttributes({
        emailConnected: connected,
      });
    } catch {
      setEmailConnected(false);
    } finally {
      setCheckingEmail(false);
    }
  };

  const handleEmailConnect = () => {
    const returnUrl = `${window.location.origin}/onboarding?step=settings&return_step=settings`;
    window.location.href =
      "/wp-json/servv-plugin/v1/email/connect?return_url=" +
      encodeURIComponent(returnUrl);
  };

  /* --------------------------------------------
     Submit
  -------------------------------------------- */

  const handleContinue = () => {
    if (!attributes.timezone) {
      toast.error("Please select a timezone");
      return;
    }

    onSave({
      timezone: attributes.timezone,
      location: attributes.location,
      dateFormat: attributes.dateFormat,
      defaultEventType: attributes.defaultEventType,
      emailConnected: attributes.emailConnected,
    });
  };

  return (
    <div className="step__wrapper">
      {/* Header */}
      <div className="step__header">
        <Cog6ToothIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Basic Settings</h4>
          <p className="step__description">
            Configure your default preferences before creating events.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content">
        {/* Timezone */}
        <div className="step__content_block">
          <span className="step__content_title">Timezone</span>

          <NewSelectControl
            value={attributes.timezone || ""}
            options={timezoneOptions}
            helpText="Select timezone"
            onChange={(val) =>
              setAttributes({
                timezone: val,
              })
            }
            iconRight={<ChevronDownIcon />}
          />

          <p className="step__description">
            Used for scheduling all event start times.
          </p>
        </div>

        {/* Location */}
        <div className="step__content_block">
          <span className="step__content_title">
            Default Location (Optional)
          </span>

          <NewInputControl
            placeholder="Enter default city or venue"
            value={attributes.location || ""}
            onChange={(val) =>
              setAttributes({
                location: val,
              })
            }
          />
        </div>

        {/* Date Format */}
        <div className="step__content_block">
          <span className="step__content_title">Date Format</span>

          <NewSelectControl
            value={attributes.dateFormat || "MM/DD/YYYY"}
            options={dateFormatOptions}
            helpText="Select format"
            onChange={(val) =>
              setAttributes({
                dateFormat: val,
              })
            }
            iconRight={<ChevronDownIcon />}
          />
        </div>

        {/* Default Event Type */}
        <div className="step__content_block">
          <span className="step__content_title">Default Event Type</span>

          <RadioGroup
            name="default-event-type"
            value={attributes.defaultEventType || "offline"}
            options={[
              { value: "offline", label: "Offline (in-person)" },
              { value: "zoom", label: "Online (Zoom)" },
            ]}
            onChange={(val) =>
              setAttributes({
                defaultEventType: val,
              })
            }
          />
        </div>

        {/* Email */}
        <div className="step__content_block">
          <span className="step__content_title">Email Connection</span>

          {checkingEmail ? (
            <p className="step__description">Checking email status…</p>
          ) : emailConnected ? (
            <p className="step__description">
              ✅ Email is connected and ready for notifications.
            </p>
          ) : (
            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={handleEmailConnect}
            >
              Connect Email
            </button>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="servv_actions mt-auto">
        <button
          type="button"
          className="servv_button servv_button--secondary"
          onClick={goToPreviousStep}
          disabled={loading}
        >
          Previous
        </button>

        <button
          type="button"
          className="servv_button servv_button--primary"
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default SettingsStep;
