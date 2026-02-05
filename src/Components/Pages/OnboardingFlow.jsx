import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CalendarIcon,
  MapMarkIcon,
  BrushIcon,
  CloseIcon,
  Support,
} from "../../assets/icons";
import {
  Cog6ToothIcon,
  RocketLaunchIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useServvStore } from "../../store/useServvStore";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import PageWrapper from "./PageWrapper";
import { toast } from "react-toastify";

// Lazy load step components
const SettingsStep = React.lazy(() => import("../SettingsStep"));
const FirstEventStep = React.lazy(() => import("../Onboarding/FirstEventStep"));
const BrandingStep = React.lazy(() => import("../Onboarding/BrandingStep"));

const StepperIcon = ({ Icon, iconClass, active, showLine }) => (
  <div className="stepper-icon">
    <span className={`icon-box ${active ? "is-active" : ""}`}>
      <Icon className={`icon-box__svg ${iconClass}`} />
    </span>
    {showLine && <div className="icon-line" />}
  </div>
);

const StepperText = ({ title, subtitle, active, completed }) => {
  return (
    <div
      className={`stepper-text ${active ? "is-active" : ""} ${
        completed ? "is-completed" : ""
      }`}
    >
      <div className="stepper-title">{title}</div>
      <div className="stepper-subtitle">{subtitle}</div>
    </div>
  );
};

const OnboardingFlow = () => {
  const settings = useServvStore((s) => s.settings);
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get initial step from URL or default to first step
  const stepFromUrl = searchParams.get("step");

  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loading, setLoading] = useState(false);

  const [attributes, setAttributes] = useState({
    // Settings step
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: "",
    dateFormat: "MM/DD/YYYY",
    defaultEventType: "offline", // offline | zoom
    emailConnected: false,

    // First event step
    firstEvent: {
      topic: "",
      startTime: null,
      duration: 60,
      agenda: "",
      location: "offline",
    },

    // Branding step
    branding: {
      avatar: null,
      title: "",
      description: "",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    },
  });

  const [steps, setSteps] = useState([
    {
      key: "settings",
      title: "Basic Settings",
      subtitle: "Configure your preferences",
      Icon: Cog6ToothIcon,
      iconClass: "",
    },
    {
      key: "first-event",
      title: "Create First Event",
      subtitle: "Set up your initial event",
      Icon: RocketLaunchIcon,
      iconClass: "",
    },
    {
      key: "branding",
      title: "Customize Branding",
      subtitle: "Personalize your appearance",
      Icon: BrushIcon,
      iconClass: "icon--angled",
    },
  ]);

  // Determine current step from URL or default
  const getValidStep = (stepKey) => {
    return steps.find((s) => s.key === stepKey) ? stepKey : steps[0].key;
  };

  const [currentStep, setCurrentStep] = useState(getValidStep(stepFromUrl));

  // Update URL when step changes
  useEffect(() => {
    setSearchParams({ step: currentStep }, { replace: true });
  }, [currentStep, setSearchParams]);

  // Handle returning from redirect (e.g., after email connection)
  useEffect(() => {
    const returnStep = searchParams.get("return_step");
    const success = searchParams.get("success");
    const error = searchParams.get("error");

    if (returnStep) {
      const validStep = getValidStep(returnStep);
      setCurrentStep(validStep);

      if (success) {
        toast.success(decodeURIComponent(success));
      }
      if (error) {
        toast.error(decodeURIComponent(error));
      }

      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("return_step");
      newParams.delete("success");
      newParams.delete("error");
      setSearchParams(newParams, { replace: true });
    }
  }, []);

  const stepComponents = {
    settings: SettingsStep,
    "first-event": FirstEventStep,
    branding: BrandingStep,
  };

  const StepComponent = stepComponents[currentStep];

  const mergeAttributes = (patch) => {
    setAttributes((prev) => {
      const next = { ...prev };

      Object.keys(patch).forEach((key) => {
        if (
          typeof patch[key] === "object" &&
          patch[key] !== null &&
          !Array.isArray(patch[key])
        ) {
          next[key] = {
            ...(prev[key] || {}),
            ...patch[key],
          };
        } else {
          next[key] = patch[key];
        }
      });

      return next;
    });
  };

  const markStepCompleted = (stepKey) => {
    setCompletedSteps((prev) => new Set([...prev, stepKey]));
  };

  const goToNextStep = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    if (currentIndex < steps.length - 1) {
      markStepCompleted(currentStep);
      setCurrentStep(steps[currentIndex + 1].key);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key);
    }
  };

  const handleStepClick = (stepKey) => {
    const clickedIndex = steps.findIndex((s) => s.key === stepKey);
    const currentIndex = steps.findIndex((s) => s.key === currentStep);

    // Allow going back to any previous step or completed step
    if (clickedIndex <= currentIndex || completedSteps.has(stepKey)) {
      setCurrentStep(stepKey);
    }
  };

  const handleSettingsSave = async (settingsData) => {
    setLoading(true);
    try {
      await axios.post(
        "/wp-json/servv-plugin/v1/onboarding/settings",
        settingsData,
        {
          headers: {
            "X-WP-Nonce": servvData.nonce,
          },
        },
      );

      toast.success("Settings saved successfully");
      goToNextStep();
    } catch (error) {
      console.error("Settings save error:", error);
      toast.error("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFirstEventCreate = async (eventData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/wp-json/servv-plugin/v1/events/${eventData.location}`,
        {
          meeting: {
            topic: eventData.topic,
            startTime: eventData.startTime,
            duration: eventData.duration,
            agenda: eventData.agenda,
            timezone: attributes.timezone,
            eventType: eventData.location === "offline" ? 1 : 2,
          },
        },
        {
          headers: {
            "X-WP-Nonce": servvData.nonce,
          },
        },
      );

      // Store event ID for later reference
      mergeAttributes({ firstEventId: response.data.id });

      toast.success("First event created successfully");
      goToNextStep();
    } catch (error) {
      console.error("Event creation error:", error);
      toast.error("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBrandingComplete = async (brandingData) => {
    setLoading(true);
    try {
      await axios.post(
        "/wp-json/servv-plugin/v1/onboarding/branding",
        brandingData,
        {
          headers: {
            "X-WP-Nonce": servvData.nonce,
          },
        },
      );

      // Mark onboarding as complete
      await axios.post(
        "/wp-json/servv-plugin/v1/onboarding/complete",
        {},
        {
          headers: {
            "X-WP-Nonce": servvData.nonce,
          },
        },
      );

      toast.success("Onboarding completed! Welcome to Servv!");

      // Redirect to dashboard or site preview
      setTimeout(() => {
        navigate("/dashboard?onboarding=complete");
      }, 1500);
    } catch (error) {
      console.error("Branding save error:", error);
      toast.error("Failed to save branding. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkipOnboarding = () => {
    if (
      window.confirm(
        "Are you sure you want to skip onboarding? You can always configure these settings later.",
      )
    ) {
      navigate("/dashboard?onboarding=skipped");
    }
  };

  // Scroll to top on step change
  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentStep]);

  return (
    <PageWrapper loading={loading}>
      <div className="create-event">
        {/* SIDEBAR */}
        <aside
          className={`create-event__sidebar ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          }`}
        >
          {/* Logo (same as original) */}
          <div className="logo-wrapper">
            <div
              className="logo-bg"
              style={{ backgroundImage: `url(${logo})` }}
            />
            <div className="sidebar__logo servv-logo-png" />
          </div>

          {/* Stepper */}
          <div className="sidebar__stepper">
            <div>
              {steps.map((step, index) => {
                const isActive = step.key === currentStep;
                const isCompleted = completedSteps.has(step.key);

                return (
                  <div
                    key={step.key}
                    className="stepper__row"
                    onClick={() => handleStepClick(step.key)}
                  >
                    <StepperIcon
                      Icon={step.Icon}
                      iconClass={step.iconClass}
                      active={isActive}
                      completed={isCompleted}
                      showLine={index < steps.length - 1}
                    />

                    <StepperText
                      title={step.title}
                      subtitle={step.subtitle}
                      active={isActive}
                      completed={isCompleted}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom link (match Support style) */}
          <div className="sidebar__bottom-link">
            <Support className="bottom-link__icon" aria-hidden="true" />
            <span
              className="bottom-link__text"
              onClick={() => window.open("/support", "_blank")}
            >
              Need Help?
            </span>
          </div>
        </aside>

        {/* CONTENT */}
        <main
          className={`create-event__content ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          }`}
          ref={contentRef}
        >
          {/* Close Icon */}
          <div
            className="servv-create-form-close"
            onClick={handleSkipOnboarding}
          >
            <CloseIcon className="servv-create-form-close-icon" />
          </div>

          {/* Step content */}
          <React.Suspense
            fallback={<div className="step-loading">Loading…</div>}
          >
            {StepComponent && (
              <StepComponent
                attributes={attributes}
                setAttributes={mergeAttributes}
                currentStep={currentStep}
                goToNextStep={goToNextStep}
                goToPreviousStep={goToPreviousStep}
                loading={loading}
                onSave={
                  currentStep === "settings"
                    ? handleSettingsSave
                    : currentStep === "first-event"
                    ? handleFirstEventCreate
                    : handleBrandingComplete
                }
              />
            )}
          </React.Suspense>
        </main>
      </div>
    </PageWrapper>
  );
};

export default OnboardingFlow;
