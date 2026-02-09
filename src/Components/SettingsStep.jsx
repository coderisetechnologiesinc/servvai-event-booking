import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Cog6ToothIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ModalShell from "./ModalShell";
import GmailConnectModalContent from "./Containers/GmailConnectModalContent";

import NewSelectControl from "./Controls/NewSelectControl";
import NewInputControl from "./Controls/NewInputControl";
import RadioGroup from "./Controls/RecurrenceRadioGroup";

const SettingsStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  zoomConnected,
  checkingEmail,
  onSave,
  loading,
  isGmailConnected,
}) => {
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);

  const [gmailConfirmed, setGmailConfirmed] = useState(false);
  const [zoomConfirmed, setZoomConfirmed] = useState(false);
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

  const connectZoom = async () => {
    const getAuthURLResponse = await axios(
      "/wp-json/servv-plugin/v1/zoom/url",
      {
        method: "GET",
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        redirect: "manual",
      },
    );
    await onSave({ sync: true });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(
        `${
          servvData.shopify_app
        }/zoom/connect?wordpress_url=${encodeURIComponent(
          getAuthURLResponse.data.auth_url,
        )}&wordpress_return_url=${encodeURIComponent(
          window.location.origin,
        )}&servv_nonce=${getAuthURLResponse.data.nonce}`,
        "_top",
      );
      // open(getAuthURLResponse.data.auth_url)
    }
  };

  const handleEmailConnect = () => {
    setShowGmailModal(true);
  };

  const handleConnectZoom = () => {
    setShowZoomModal(true);
  };

  const connectGmail = async () => {
    const getAuthURLResponse = await axios(
      "/wp-json/servv-plugin/v1/gmail/url",
      {
        method: "GET",
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        redirect: "manual",
      },
    );
    await onSave({ sync: true });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(
        `${
          servvData.shopify_app
        }/mail/connect?wordpress_url=${encodeURIComponent(
          getAuthURLResponse.data.auth_url,
        )}&wordpress_return_url=${encodeURIComponent(
          window.location.origin,
        )}&servv_nonce=${getAuthURLResponse.data.nonce}`,
        "_top",
      );
    }
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
        <Cog6ToothIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Basic Settings</h4>
          <p className="step__description">
            Configure your default preferences before creating events.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content">
        <div className="flex flex-col gap-y-[24px]">
          {/* Timezone */}
          <div className="step__content_block">
            <span className="step__content_title">Timezone</span>

            <NewSelectControl
              value={attributes.timezone || ""}
              options={timezoneOptions}
              helpText="Select timezone"
              style={{ width: "100%" }}
              onChange={(val) =>
                setAttributes({
                  timezone: val,
                })
              }
              iconRight={<ChevronDownIcon />}
            />

            {/* <p className="step__description">
              Used for scheduling all event start times.
            </p> */}
          </div>

          {/* Location */}
          <div className="step__content_block">
            <span className="step__content_title">Default Location</span>

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

          {/* Time Format */}
          <div className="step__content_block">
            <span className="step__content_title">Time Format</span>

            <NewSelectControl
              value={attributes.timeFormat || "12h"}
              options={[
                { label: "12 hours (AM/PM)", value: "12h" },
                { label: "24 hours", value: "24h" },
              ]}
              helpText="Select time format"
              style={{ width: "100%" }}
              onChange={(val) =>
                setAttributes({
                  timeFormat: val,
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
                { value: "offline", label: "Offline" },
                { value: "zoom", label: "Online" },
              ]}
              onChange={(val) =>
                setAttributes({
                  defaultEventType: val,
                })
              }
            />
          </div>
          {attributes.defaultEventType === "zoom" && (
            <div className="step__content_block">
              <span className="step__content_title">Connect Zoom Account</span>

              {checkingEmail ? (
                <p className="step__description">Checking zoom status…</p>
              ) : zoomConnected ? (
                <p className="step__description">
                  Email is connected and ready for notifications.
                </p>
              ) : (
                <button
                  type="button"
                  className="servv_button servv_button--secondary"
                  onClick={handleConnectZoom}
                >
                  Connect
                </button>
              )}
            </div>
          )}

          {/* Email */}

          <div className="step__content_block">
            <span className="step__content_title">Email Connection</span>

            {checkingEmail ? (
              <p className="step__description">Checking email status…</p>
            ) : isGmailConnected ? (
              <p className="step__description">
                Email is connected and ready for notifications.
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
          {/* {
            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={goToPreviousStep}
              disabled={loading}
            >
              Previous
            </button>
          } */}

          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={handleContinue}
            disabled={
              loading ||
              !isGmailConnected ||
              (attributes.defaultEventType === "zoom" && !zoomConnected)
            }
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
      {showGmailModal && (
        <ModalShell
          title="Connect Gmail"
          onClose={() => setShowGmailModal(false)}
        >
          <GmailConnectModalContent
            gmailConfirmed={gmailConfirmed}
            setGmailConfirmed={setGmailConfirmed}
            handlerOnAccountAdd={connectGmail}
            closeModal={() => setShowGmailModal(false)}
          />
        </ModalShell>
      )}
      {showZoomModal && (
        <ModalShell
          title="Connect Zoom"
          onClose={() => setShowZoomModal(false)}
        >
          <ZoomPaidAccountModalContent
            zoomConfirmed={zoomConfirmed}
            setZoomConfirmed={setZoomConfirmed}
            handlerOnZoomAccountAdd={connectZoom}
            closeModal={() => setShowZoomModal(false)}
          />
        </ModalShell>
      )}
    </div>
  );
};

export default SettingsStep;
