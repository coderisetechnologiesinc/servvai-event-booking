import React, { useState } from "react";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { CheckIcon, CalendarIcon } from "@heroicons/react/16/solid";
import InteractiveCard from "./Containers/InteractiveCard";
import ModalShell from "./ModalShell";
import GmailConnectModalContent from "./Containers/GmailConnectModalContent";
// import ZoomPaidAccountModalContent from "./ZoomPaidAccountModalContent";
import { useServvStore } from "../store/useServvStore";
import { getCalendarConnectURL } from "../utilities/accounts";
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

const IntegrationsStep = ({
  goToNextStep,
  isGmailConnected,
  zoomConnected,
  stripeConnected,
  checkingEmail,
  loading,
  onConnectGmail,
  onConnectZoom,
  onConnectStripe,
}) => {
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [gmailConfirmed, setGmailConfirmed] = useState(false);
  const [zoomConfirmed, setZoomConfirmed] = useState(false);
  const calendarConnected = useServvStore((s) => s.calendarConnected);
  return (
    <div className="step__wrapper">
      <div className="step__header">
        <LinkIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Integrations</h4>
          <p className="step__description">
            Connect your services to enable notifications, video calls, and
            payments.
          </p>
        </div>
      </div>

      <div className="step__content w-full max-w-[640px]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <IntegrationCard
            icon={EnvelopeIcon}
            title="Gmail"
            description="Connect for email notifications and reminders"
            optional={false}
            connected={isGmailConnected}
            onConnect={() => setShowGmailModal(true)}
            disabled={checkingEmail}
          />

          <IntegrationCard
            icon={CalendarIcon}
            title="Calendar"
            description="Connect Google Calendar to keep track of your event schedule"
            optional={true}
            connected={calendarConnected}
            onConnect={() => {
              localStorage.setItem(
                "redirectToOnboarding",
                window.location.href,
              );
              getCalendarConnectURL();
            }}
            disabled={loading}
          />

          {/* <IntegrationCard
            icon={<CreditCardIcon className="w-7 h-7 text-white" />}
            iconBg="#635BFF"
            title="Stripe"
            description="Accept payments for your events"
            optional={true}
            connected={stripeConnected}
            onConnect={onConnectStripe}
            disabled={loading}
          /> */}
        </div>

        <div className="servv_actions mt-auto">
          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={goToNextStep}
            disabled={loading || !isGmailConnected}
          >
            Continue
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
            handlerOnAccountAdd={onConnectGmail}
            closeModal={() => setShowGmailModal(false)}
          />
        </ModalShell>
      )}

      {/* {showZoomModal && (
        <ModalShell
          title="Connect Zoom"
          onClose={() => setShowZoomModal(false)}
        >
          <ZoomPaidAccountModalContent
            zoomConfirmed={zoomConfirmed}
            setZoomConfirmed={setZoomConfirmed}
            handlerOnZoomAccountAdd={onConnectZoom}
            closeModal={() => setShowZoomModal(false)}
          />
        </ModalShell>
      )} */}
    </div>
  );
};

export default IntegrationsStep;
