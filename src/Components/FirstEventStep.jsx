import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const gradient = "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)";

const FirstEventStep = ({ attributes }) => {
  const createEventUrl =
    servvData.adminUrl.replace("admin.php", "post-new.php") +
    "?post_type=event&onboarding_step=2";
  const viewSiteUrl = servvData.homepage ?? window.location.origin;
  const navigate = useNavigate();
  return (
    <div className="step__wrapper">
      <div className="step__header">
        <RocketLaunchIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Get started</h4>
          <p className="step__description">
            You're all set up and ready to go.
          </p>
        </div>
      </div>

      <div className="step__content w-full max-w-[640px] flex flex-col items-center text-center gap-6">
        <div
          className="w-40 h-40 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #F4EBFF, #E9D7FE)" }}
        >
          <CheckCircleIcon className="w-35 h-35" style={{ color: "#7A5AF8" }} />
        </div>

        <div className="flex flex-col gap-2">
          <h2
            className="text-3xl font-bold"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            You're all set!
          </h2>
          <p className="text-sm" style={{ color: "#717680" }}>
            Your account is ready. Create your first event or explore your site.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate(
                `/events/new?onboarding_step=2&timezone=${attributes.timezone}`,
              );
            }}
            className="w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 text-center"
            style={{
              background: gradient,
              border: "3px solid rgba(255, 255, 255, 0.35)",
              boxShadow:
                "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
              color: "#FFFFFF",
            }}
          >
            Create first event
          </a>
          <a
            href={viewSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="servv_button servv_button--secondary w-full text-center"
          >
            View site
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstEventStep;
