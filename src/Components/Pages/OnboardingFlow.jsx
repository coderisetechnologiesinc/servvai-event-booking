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
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { useServvStore } from "../../store/useServvStore";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import PageWrapper from "./PageWrapper";
import { toast } from "react-toastify";
import ModalShell from "../ModalShell";
import SkipOnboardingModalContent from "./SkipOnboardingModalContent";
import timezones from "../../utilities/timezones";
// Lazy load step components
const SettingsStep = React.lazy(() => import("../SettingsStep"));
// const FirstEventStep = React.lazy(() => import("../Onboarding/FirstEventStep"));
const BrandingStep = React.lazy(() => import("../BrandingStep"));
const BillingStep = React.lazy(() => import("../BillingStep"));

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
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const filtersList = useServvStore((s) => s.filtersList);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const syncGmailAccount = useServvStore((s) => s.syncGmailAccount);
  const syncZoomAccount = useServvStore((s) => s.syncZoomAccount);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );
  const [synchronization, setSynchronization] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get initial step from URL or default to first step
  const stepFromUrl = searchParams.get("step");
  const [brandingCompleted, setBrandingCompleted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [skipConfirmed, setSkipConfirmed] = useState(false);

  const [attributes, setAttributes] = useState({
    // Settings step
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: "",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
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
      key: "billing",
      title: "Billing Plan",
      subtitle: "Choose your plan",
      Icon: CreditCardIcon,
      iconClass: "icon--angled",
    },
    {
      key: "branding",
      title: "Store Branding",
      subtitle: "Personalize your appearance",
      Icon: BrushIcon,
      iconClass: "icon--angled",
    },
    {
      key: "settings",
      title: "Global Settings",
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
    setSynchronization(true);
    syncGmailAccount();
    syncZoomAccount();
    syncSingleFilterFromServer("locations");
    setSynchronization(false);
  }, []);

  useEffect(() => {
    if (
      !attributes.location &&
      Array.isArray(filtersList?.locations) &&
      filtersList.locations.length > 0
    ) {
      const firstLocationName = filtersList.locations[0]?.name;

      if (firstLocationName) {
        setAttributes((prev) => ({
          ...prev,
          location: firstLocationName,
        }));
      }
    }
  }, [filtersList?.locations]);

  useEffect(() => {
    if (!settings?.settings) return;

    let adminDashboard = {};
    try {
      adminDashboard =
        typeof settings.settings.admin_dashboard === "string"
          ? JSON.parse(settings.settings.admin_dashboard)
          : settings.settings.admin_dashboard || {};
    } catch (e) {
      console.warn("Invalid admin_dashboard JSON", e);
    }

    setAttributes((prev) => ({
      ...prev,

      ...(adminDashboard.default_timezone && {
        timezone: adminDashboard.default_timezone,
      }),

      ...(adminDashboard.default_event_type && {
        defaultEventType:
          adminDashboard.default_event_type === "zoom" ? "zoom" : "offline",
      }),

      ...(typeof settings.settings.time_format_24_hours === "boolean" && {
        timeFormat: settings.settings.time_format_24_hours ? "24h" : "12h",
      }),

      ...(settings.location && {
        location: settings.location,
      }),
    }));
  }, [settings]);

  const stepComponents = {
    billing: BillingStep,
    settings: SettingsStep,
    "first-event": null,
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

      if (currentIndex === 2) {
        navigate(
          `/events/new?onboarding_step=2&timezone=${attributes.timezone}`,
        );
        return;
      }

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
    if (clickedIndex !== 3) {
      setCurrentStep(stepKey);
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

  const handleBrandingComplete = async (branding) => {
    try {
      setLoading(true);

      let existing = {};
      try {
        existing = JSON.parse(
          settings?.settings?.widget_style_settings || "{}",
        );
      } catch {
        existing = {};
      }

      const mergedSettings = {
        ...existing,

        /* Profile */
        pw_title: branding.title || existing.pw_title || "",
        pw_description: branding.description || existing.pw_description || "",
        pw_avatar: branding.avatar ?? existing.pw_avatar ?? null,
        pw_banner_image: branding.banner ?? existing.pw_banner_image ?? null,

        /* Theme */
        pw_bg_type: branding.backgroundType || existing.pw_bg_type || "color",
        pw_background_color:
          branding.backgroundColor || existing.pw_background_color || "#ffffff",
        pw_background_gradient:
          branding.backgroundGradient ??
          existing.pw_background_gradient ??
          null,
        pw_text_color:
          branding.textColor || existing.pw_text_color || "#000000",
      };

      await axios.put(
        "/wp-json/servv-plugin/v1/shop/settings",
        {
          ...settings,
          settings: {
            ...settings.settings,
            widget_style_settings: JSON.stringify(mergedSettings),
          },
        },
        {
          headers: {
            "X-WP-Nonce": servvData.nonce,
          },
        },
      );

      toast.success("Branding saved successfully");
      await fetchSettings();
      setBrandingCompleted(true);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save branding");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSave = async (location) => {
    setLoading(true);

    let url = "/wp-json/servv-plugin/v1/filters/locations";
    let method = "POST";

    await axios({
      method,
      url,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        name: location,
      },
    });
    // await syncSingleFilterFromServer("locations");
  };

  const handleSettingsSave = async ({ sync = false }) => {
    setLoading(true);

    const adminDashboard = JSON.stringify(settings.admin_dashboard);

    const payload = {
      ...settings,
      settings: {
        ...settings.settings,
        time_format_24_hours: attributes.timeFormat === "24h" ? true : false,
        admin_dashboard: JSON.stringify({
          ...adminDashboard,
          default_timezone: attributes.timezone,
          default_event_type: attributes.defaultEventType,
        }),
      },
    };

    try {
      const saveSettingsResponse = await axios({
        method: "PUT",
        url: "/wp-json/servv-plugin/v1/shop/settings",
        headers: { "X-WP-Nonce": servvData.nonce },
        data: {
          ...payload,
        },
      }).catch((err) => console.error(err));
      if (attributes.location && attributes.location.length > 0) {
        if (
          filtersList?.locations?.filter((f) => f.name === attributes.location)
            ?.length === 0
        )
          await handleLocationSave(attributes.location);
      }
      //   toast.success("Settings saved successfully");
      if (sync) await fetchSettings();
      if (!sync) goToNextStep();
    } catch (error) {
      console.error("Settings save error:", error);
      toast.error("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkipOnboarding = () => {
    const isBrandingStep = currentStep === "branding";

    const brandingCompleted = attributes?.branding?.title?.trim();

    if (isBrandingStep && brandingCompleted) {
      localStorage.setItem("onboardingSkipped", "1");

      navigate("/dashboard", { replace: true });
      return;
    }

    setShowSkipModal(true);
  };

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
                checkingEmail={synchronization}
                loading={loading}
                zoomConnected={zoomConnected}
                isGmailConnected={gmailConnected}
                brandingCompleted={brandingCompleted}
                settings={settings}
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
        {showSkipModal && (
          <ModalShell
            title="Skip onboarding"
            onClose={() => setShowSkipModal(false)}
          >
            <SkipOnboardingModalContent
              confirmed={skipConfirmed}
              setConfirmed={setSkipConfirmed}
              closeModal={() => setShowSkipModal(false)}
              onConfirm={() => {
                setShowSkipModal(false);
                localStorage.setItem("onboardingSkipped", "1");
                navigate("/dashboard?onboarding=skipped");
              }}
            />
          </ModalShell>
        )}
      </div>
    </PageWrapper>
  );
};

export default OnboardingFlow;
