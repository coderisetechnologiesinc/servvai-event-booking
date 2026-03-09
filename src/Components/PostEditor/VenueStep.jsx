import { useEffect, useState } from "react";
import { MapMarkIcon } from "../../assets/icons";
import { ChevronDownIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import RadioGroup from "../Controls/RecurrenceRadioGroup";
import NewInputControl from "../Controls/NewInputControl";
import SelectDropdown from "./SelectDropdown";
import InteractiveCard from "../Containers/InteractiveCard";
import ModalShell from "../ModalShell";
import ZoomPaidAccountModalContent from "../ZoomPaidAccountModalContent";
import { useServvStore } from "../../store/useServvStore";
import { getZoomConnectURL } from "../../utilities/accounts";
const gradient = "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)";
const IntegrationCard = ({
  icon: Icon,
  title,
  description,
  optional,
  connected,
  onConnect,
  disabled,
}) => (
  <InteractiveCard
    style={{ minHeight: 0 }}
    subtitle={
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg" />
          <div className="absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]" />
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20">
            <Icon className="w-full h-full text-[#6941C6] z-10" />
          </div>
        </div>
      </div>
    }
    title={
      <>
        {" "}
        <h2
          className="text-2xl font-bold"
          style={{
            background: gradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
        {
          <span
            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: optional ? "#F3F4F6" : "", color: "#6B7280" }}
          >
            {optional && "Optional"}
          </span>
        }
      </>
    }
    text={
      <p className="text-sm" style={{ color: "#717680" }}>
        {description}
      </p>
    }
    action={
      connected ? (
        <div className="flex justify-center">
          <button
            type="button"
            className="servv_button servv_button--secondary w-full"
          >
            <CheckIcon className="w-4 h-4 mr-1" />
            Connected
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            background: gradient,
            border: "3px solid rgba(255, 255, 255, 0.35)",
            boxShadow:
              "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
            color: "#FFFFFF",
          }}
          onClick={onConnect}
          disabled={disabled}
        >
          Connect
        </button>
      )
    }
  />
);
const VENUE_OPTIONS = [
  {
    value: "offline",
    label: "In-Person",
    bg: "#065F46",
  },
  {
    value: "zoom",
    label: "Zoom",
    bg: "#1E3A8A",
  },
  {
    value: "custom",
    label: "Online",
    bg: "#4C1D95",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    bg: "#92400E",
  },
];

const VenueStep = ({
  attributes,
  setAttributes,
  changeStep,
  zoomConnected,
  isNew,
  settings,
  handleFormSubmit,
  isOnboarding,
  setFullWidth,
}) => {
  const filtersList = useServvStore((s) => s.filtersList);
  const locationId = attributes?.filters?.location_id || "";
  const customFields = attributes.custom_fields || {};
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const [zoomConfirmed, setZoomConfirmed] = useState(false);
  const syncZoomAccount = useServvStore((s) => s.syncZoomAccount);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [showZoomModal, setShowZoomModal] = useState(false);
  useEffect(() => {
    if (isOnboarding) setFullWidth?.(false);
  }, [isOnboarding]);

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

  const handleVenueSelect = (val) => {
    handleVenueChange(val);
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

  const currentVenueType =
    custom_field_1_name === "Link"
      ? "hybrid"
      : custom_field_1_name === "Meeting link"
      ? "custom"
      : attributes.location;

  /* Fields shown after a card is selected (in onboarding mode) */
  const renderOnboardingFields = () => {
    const needsLocationSelect =
      currentVenueType === "offline" || currentVenueType === "hybrid";

    const needsLinkField =
      custom_field_1_name === "Link" || custom_field_1_name === "Meeting link";

    if (!needsLocationSelect && !needsLinkField && currentVenueType !== "zoom")
      return null;

    return (
      <div className="flex flex-col gap-4 mt-4 w-full max-w-[384px] self-stretch mx-auto">
        {needsLocationSelect && (
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

        {!zoomConnected && attributes.location === "zoom" && (
          <IntegrationCard
            icon={VideoCameraIcon}
            title="Zoom"
            description="Connect Zoom to provide unique meeting links to attendees"
            optional={true}
            connected={zoomConnected}
            onConnect={() => setShowZoomModal(true)}
            disabled={false}
          />
        )}
        {needsLinkField && (
          <div className="step__content_block">
            <span className="step__content_title">Meeting link</span>
            <NewInputControl
              placeholder="Enter Zoom, Meet, Teams or other meeting URL"
              value={custom_field_1_value}
              textarea={true}
              onChange={(val) => updateCustomField("custom_field_1_value", val)}
            />
          </div>
        )}
      </div>
    );
  };
  // console.log(!zoomConnected && attributes.location === "zoom");
  return (
    <div className="step__wrapper">
      <div className="step__header">
        <MapMarkIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Location</h4>
          <p className="step__description">Choose the event location</p>
        </div>
      </div>

      {isOnboarding ? (
        /* ── Onboarding card layout ── */
        <div className="step__content w-full">
          <div className="grid grid-cols-2 gap-4">
            {VENUE_OPTIONS.map((option) => {
              // const isDisabled = option.value === "zoom" && !zoomConnected;
              const isDisabled = false;
              return (
                <InteractiveCard
                  key={option.value}
                  onClick={
                    isDisabled
                      ? undefined
                      : () => handleVenueSelect(option.value)
                  }
                  selected={currentVenueType === option.value}
                  style={{
                    minHeight: 0,
                    opacity: isDisabled ? 0.45 : 1,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                  }}
                  subtitle={
                    <p
                      className="text-sm font-bold tracking-widest uppercase"
                      style={{ color: "#872CFA" }}
                    >
                      Location
                    </p>
                  }
                  title={
                    <h2
                      className="text-3xl font-bold"
                      style={{ color: "#070908" }}
                    >
                      {option.label}
                    </h2>
                  }
                />
              );
            })}
          </div>

          {renderOnboardingFields()}

          <div className="servv_actions mt-auto">
            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={() => changeStep("date")}
            >
              Previous
            </button>

            {currentVenueType && (
              <button
                type="button"
                className="servv_button servv_button--primary"
                onClick={() => changeStep("tickets")}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      ) : (
        /* ── Default (non-onboarding) layout ── */
        <>
          <div className="step__content">
            <div className="step__content_block">
              <RadioGroup
                name="venue-mode"
                value={currentVenueType}
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
                  placeholder="Enter Zoom, Meet, Teams or other meeting URL"
                  value={custom_field_1_value}
                  textarea={true}
                  onChange={(val) =>
                    updateCustomField("custom_field_1_value", val)
                  }
                />
              </div>
            )}

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
                disabled={attributes.location === "zoom" && !zoomAccount}
              >
                Continue
              </button>
            </div>
          </div>
        </>
      )}
      {showZoomModal && (
        <ModalShell
          title="Connect Zoom"
          onClose={() => setShowZoomModal(false)}
        >
          <ZoomPaidAccountModalContent
            zoomConfirmed={zoomConfirmed}
            setZoomConfirmed={setZoomConfirmed}
            handlerOnZoomAccountAdd={() => {
              getZoomConnectURL();
            }}
            closeModal={() => setShowZoomModal(false)}
          />
        </ModalShell>
      )}
    </div>
  );
};

export default VenueStep;
