"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_OnboardingFlow_jsx"],{

/***/ "./src/Components/Containers/BlockStack.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/BlockStack.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const BlockStack = ({
  gap = 4,
  cardsLayout,
  action,
  disabled,
  onAction,
  className = "",
  children,
  ...rest
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  ...rest,
  onClick: onAction ? () => onAction() : undefined,
  className: `${className} flex flex-col ${gap ? `space-y-${gap}` : ""} ${cardsLayout ? "flex-[1_1_0]" : ""} ${action ? "cursor-pointer" : ""} ${disabled ? "filter grayscale" : ""}`,
  children: children
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStack);

/***/ }),

/***/ "./src/Components/Menu/Spinner.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Menu/Spinner.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const override = {
  display: "block",
  margin: "0 auto"
  //   borderColor: "#7319C6",
};
const Spinner = ({
  loading,
  color = "#7319C6"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "svv-sweet-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: color,
      loading: loading,
      cssOverride: override,
      size: 75,
      "aria-label": "Loading Spinner",
      "data-testid": "loader"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/Components/ModalShell.jsx":
/*!***************************************!*\
  !*** ./src/Components/ModalShell.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ModalShell = ({
  title,
  children,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "bg-white w-full max-w-[640px] rounded-2xl shadow-xl p-6 relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-between items-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "text-lg font-semibold text-gray-900",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: onClose,
          className: "p-2 rounded-lg hover:bg-gray-100 transition",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "w-5 h-5 text-gray-500"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: children
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalShell);

/***/ }),

/***/ "./src/Components/Pages/OnboardingFlow.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Pages/OnboardingFlow.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _ModalShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ModalShell */ "./src/Components/ModalShell.jsx");
/* harmony import */ var _SkipOnboardingModalContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SkipOnboardingModalContent */ "./src/Components/Pages/SkipOnboardingModalContent.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











// Lazy load step components

const SettingsStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_SettingsStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../SettingsStep */ "./src/Components/SettingsStep.jsx")));
// const FirstEventStep = React.lazy(() => import("../Onboarding/FirstEventStep"));
const BrandingStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_BrandingStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../BrandingStep */ "./src/Components/BrandingStep.jsx")));
const StepperIcon = ({
  Icon,
  iconClass,
  active,
  showLine
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
  className: "stepper-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
    className: `icon-box ${active ? "is-active" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Icon, {
      className: `icon-box__svg ${iconClass}`
    })
  }), showLine && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "icon-line"
  })]
});
const StepperText = ({
  title,
  subtitle,
  active,
  completed
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: `stepper-text ${active ? "is-active" : ""} ${completed ? "is-completed" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "stepper-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "stepper-subtitle",
      children: subtitle
    })]
  });
};
const OnboardingFlow = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.settings);
  const gmailConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.gmailConnected);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.zoomConnected);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.filtersList);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.fetchSettings);
  const syncGmailAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.syncGmailAccount);
  const syncZoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.syncZoomAccount);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.syncSingleFilterFromServer);
  const [synchronization, setSynchronization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useSearchParams)();

  // Get initial step from URL or default to first step
  const stepFromUrl = searchParams.get("step");
  const [brandingCompleted, setBrandingCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [completedSteps, setCompletedSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showSkipModal, setShowSkipModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [skipConfirmed, setSkipConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    // Settings step
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: "",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    defaultEventType: "offline",
    // offline | zoom
    emailConnected: false,
    // First event step
    firstEvent: {
      topic: "",
      startTime: null,
      duration: 60,
      agenda: "",
      location: "offline"
    },
    // Branding step
    branding: {
      avatar: null,
      title: "",
      description: "",
      backgroundColor: "#ffffff",
      textColor: "#000000"
    }
  });
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    key: "settings",
    title: "Basic Settings",
    subtitle: "Configure your preferences",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"],
    iconClass: ""
  }, {
    key: "first-event",
    title: "Create First Event",
    subtitle: "Set up your initial event",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__["default"],
    iconClass: ""
  }, {
    key: "branding",
    title: "Customize Branding",
    subtitle: "Personalize your appearance",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_1__.BrushIcon,
    iconClass: "icon--angled"
  }]);

  // Determine current step from URL or default
  const getValidStep = stepKey => {
    return steps.find(s => s.key === stepKey) ? stepKey : steps[0].key;
  };
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getValidStep(stepFromUrl));

  // Update URL when step changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSearchParams({
      step: currentStep
    }, {
      replace: true
    });
  }, [currentStep, setSearchParams]);

  // Handle returning from redirect (e.g., after email connection)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const returnStep = searchParams.get("return_step");
    const success = searchParams.get("success");
    const error = searchParams.get("error");
    if (returnStep) {
      const validStep = getValidStep(returnStep);
      setCurrentStep(validStep);
      if (success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(decodeURIComponent(success));
      }
      if (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(decodeURIComponent(error));
      }

      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("return_step");
      newParams.delete("success");
      newParams.delete("error");
      setSearchParams(newParams, {
        replace: true
      });
    }
    setSynchronization(true);
    syncGmailAccount();
    syncZoomAccount();
    syncSingleFilterFromServer("locations");
    setSynchronization(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.location && Array.isArray(filtersList?.locations) && filtersList.locations.length > 0) {
      const firstLocationName = filtersList.locations[0]?.name;
      if (firstLocationName) {
        setAttributes(prev => ({
          ...prev,
          location: firstLocationName
        }));
      }
    }
  }, [filtersList?.locations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings?.settings) return;
    let adminDashboard = {};
    try {
      adminDashboard = typeof settings.settings.admin_dashboard === "string" ? JSON.parse(settings.settings.admin_dashboard) : settings.settings.admin_dashboard || {};
    } catch (e) {
      console.warn("Invalid admin_dashboard JSON", e);
    }
    setAttributes(prev => ({
      ...prev,
      ...(adminDashboard.default_timezone && {
        timezone: adminDashboard.default_timezone
      }),
      ...(adminDashboard.default_event_type && {
        defaultEventType: adminDashboard.default_event_type === "zoom" ? "zoom" : "offline"
      }),
      ...(typeof settings.settings.time_format_24_hours === "boolean" && {
        timeFormat: settings.settings.time_format_24_hours ? "24h" : "12h"
      }),
      ...(settings.location && {
        location: settings.location
      })
    }));
  }, [settings]);
  const stepComponents = {
    settings: SettingsStep,
    "first-event": null,
    branding: BrandingStep
  };
  const StepComponent = stepComponents[currentStep];
  const mergeAttributes = patch => {
    setAttributes(prev => {
      const next = {
        ...prev
      };
      Object.keys(patch).forEach(key => {
        if (typeof patch[key] === "object" && patch[key] !== null && !Array.isArray(patch[key])) {
          next[key] = {
            ...(prev[key] || {}),
            ...patch[key]
          };
        } else {
          next[key] = patch[key];
        }
      });
      return next;
    });
  };
  const markStepCompleted = stepKey => {
    setCompletedSteps(prev => new Set([...prev, stepKey]));
  };
  const goToNextStep = () => {
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    if (currentIndex < steps.length - 1) {
      markStepCompleted(currentStep);
      if (currentIndex === 0) {
        navigate("/events/new?onboarding_step=2");
        return;
      }
      setCurrentStep(steps[currentIndex + 1].key);
    }
  };
  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key);
    }
  };
  const handleStepClick = stepKey => {
    const clickedIndex = steps.findIndex(s => s.key === stepKey);
    const currentIndex = steps.findIndex(s => s.key === currentStep);

    // Allow going back to any previous step or completed step
    if (clickedIndex !== 1) {
      setCurrentStep(stepKey);
    }
  };
  const handleFirstEventCreate = async eventData => {
    setLoading(true);
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].post(`/wp-json/servv-plugin/v1/events/${eventData.location}`, {
        meeting: {
          topic: eventData.topic,
          startTime: eventData.startTime,
          duration: eventData.duration,
          agenda: eventData.agenda,
          timezone: attributes.timezone,
          eventType: eventData.location === "offline" ? 1 : 2
        }
      }, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });

      // Store event ID for later reference
      mergeAttributes({
        firstEventId: response.data.id
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("First event created successfully");
      goToNextStep();
    } catch (error) {
      console.error("Event creation error:", error);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleBrandingComplete = async branding => {
    try {
      var _ref, _branding$avatar, _ref2, _branding$banner, _ref3, _branding$backgroundG;
      setLoading(true);
      let existing = {};
      try {
        existing = JSON.parse(settings?.settings?.widget_style_settings || "{}");
      } catch {
        existing = {};
      }
      const mergedSettings = {
        ...existing,
        /* Profile */
        pw_title: branding.title || existing.pw_title || "",
        pw_description: branding.description || existing.pw_description || "",
        pw_avatar: (_ref = (_branding$avatar = branding.avatar) !== null && _branding$avatar !== void 0 ? _branding$avatar : existing.pw_avatar) !== null && _ref !== void 0 ? _ref : null,
        pw_banner_image: (_ref2 = (_branding$banner = branding.banner) !== null && _branding$banner !== void 0 ? _branding$banner : existing.pw_banner_image) !== null && _ref2 !== void 0 ? _ref2 : null,
        /* Theme */
        pw_bg_type: branding.backgroundType || existing.pw_bg_type || "color",
        pw_background_color: branding.backgroundColor || existing.pw_background_color || "#ffffff",
        pw_background_gradient: (_ref3 = (_branding$backgroundG = branding.backgroundGradient) !== null && _branding$backgroundG !== void 0 ? _branding$backgroundG : existing.pw_background_gradient) !== null && _ref3 !== void 0 ? _ref3 : null,
        pw_text_color: branding.textColor || existing.pw_text_color || "#000000"
      };
      await axios__WEBPACK_IMPORTED_MODULE_12__["default"].put("/wp-json/servv-plugin/v1/shop/settings", {
        ...settings,
        settings: {
          ...settings.settings,
          widget_style_settings: JSON.stringify(mergedSettings)
        }
      }, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Branding saved successfully");
      await fetchSettings();
      setBrandingCompleted(true);
    } catch (err) {
      console.error(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Failed to save branding");
    } finally {
      setLoading(false);
    }
  };
  const handleLocationSave = async location => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/filters/locations";
    let method = "POST";
    await (0,axios__WEBPACK_IMPORTED_MODULE_12__["default"])({
      method,
      url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        name: location
      }
    });
    // await syncSingleFilterFromServer("locations");
  };
  const handleSettingsSave = async ({
    sync = false
  }) => {
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
          default_event_type: attributes.defaultEventType
        })
      }
    };
    try {
      const saveSettingsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_12__["default"])({
        method: "PUT",
        url: "/wp-json/servv-plugin/v1/shop/settings",
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...payload
        }
      }).catch(err => console.error(err));
      if (attributes.location && attributes.location.length > 0) {
        if (filtersList?.locations?.filter(f => f.name !== attributes.location)?.length === 0) await handleLocationSave(attributes.location);
      }
      //   toast.success("Settings saved successfully");
      if (sync) await fetchSettings();
      if (!sync) goToNextStep();
    } catch (error) {
      console.error("Settings save error:", error);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleSkipOnboarding = () => {
    const isBrandingStep = currentStep === "branding";
    const brandingCompleted = attributes?.branding?.title?.trim();
    if (isBrandingStep && brandingCompleted) {
      localStorage.setItem("onboardingSkipped", "1");
      navigate("/dashboard", {
        replace: true
      });
      return;
    }
    setShowSkipModal(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [currentStep]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "create-event",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("aside", {
        className: `create-event__sidebar ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "logo-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "logo-bg",
            style: {
              backgroundImage: `url(${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__})`
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "sidebar__logo servv-logo-png"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "sidebar__stepper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            children: steps.map((step, index) => {
              const isActive = step.key === currentStep;
              const isCompleted = completedSteps.has(step.key);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "stepper__row",
                onClick: () => handleStepClick(step.key),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StepperIcon, {
                  Icon: step.Icon,
                  iconClass: step.iconClass,
                  active: isActive,
                  completed: isCompleted,
                  showLine: index < steps.length - 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StepperText, {
                  title: step.title,
                  subtitle: step.subtitle,
                  active: isActive,
                  completed: isCompleted
                })]
              }, step.key);
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "sidebar__bottom-link",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.Support, {
            className: "bottom-link__icon",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "bottom-link__text",
            onClick: () => window.open("/support", "_blank"),
            children: "Need Help?"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main", {
        className: `create-event__content ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
        ref: contentRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "servv-create-form-close",
          onClick: handleSkipOnboarding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {
            className: "servv-create-form-close-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "step-loading",
            children: "Loading\u2026"
          }),
          children: StepComponent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StepComponent, {
            attributes: attributes,
            setAttributes: mergeAttributes,
            currentStep: currentStep,
            goToNextStep: goToNextStep,
            goToPreviousStep: goToPreviousStep,
            checkingEmail: synchronization,
            loading: loading,
            zoomConnected: zoomConnected,
            isGmailConnected: gmailConnected,
            brandingCompleted: brandingCompleted,
            settings: settings,
            onSave: currentStep === "settings" ? handleSettingsSave : currentStep === "first-event" ? handleFirstEventCreate : handleBrandingComplete
          })
        })]
      }), showSkipModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ModalShell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Skip onboarding",
        onClose: () => setShowSkipModal(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SkipOnboardingModalContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          confirmed: skipConfirmed,
          setConfirmed: setSkipConfirmed,
          closeModal: () => setShowSkipModal(false),
          onConfirm: () => {
            setShowSkipModal(false);
            localStorage.setItem("onboardingSkipped", "1");
            navigate("/dashboard?onboarding=skipped");
          }
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingFlow);

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/PageWrapper.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const PageWrapper = props => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.Intercom) {
      if (location !== "/support") {
        window.Intercom("update", {
          hide_default_launcher: true
        });
      } else {
        window.Intercom("update", {
          hide_default_launcher: true
        });
      }
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fixed inset-0 bg-[#F5F5F5]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "w-full relative pl-4 flex flex-col min-h-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
        children: props.loading && !props.withoutSpinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `flex flex-col flex-1 w-full pr-4 max-w-full min-w-0 min-h-0 overflow-visible ${props.loading ? "loading" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/Components/Pages/SkipOnboardingModalContent.jsx":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/SkipOnboardingModalContent.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StepBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StepBlock */ "./src/Components/StepBlock.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SkipOnboardingModalContent = ({
  onConfirm,
  closeModal
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_0__["default"], {
  description: "You can skip onboarding now and configure everything later.",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 5,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-end gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition",
        onClick: closeModal,
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition",
        onClick: onConfirm,
        children: "Skip onboarding"
      })]
    })
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipOnboardingModalContent);

/***/ }),

/***/ "./src/Components/StepBlock.jsx":
/*!**************************************!*\
  !*** ./src/Components/StepBlock.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StepBlock = ({
  title,
  description,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "step__content_block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "step__content_title",
      children: title
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-500 mb-4",
      children: description
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepBlock);

/***/ }),

/***/ "./node_modules/react-spinners/esm/ClipLoader.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-spinners/esm/ClipLoader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/unitConverter */ "./node_modules/react-spinners/esm/helpers/unitConverter.js");
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/animation */ "./node_modules/react-spinners/esm/helpers/animation.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var clip = (0,_helpers_animation__WEBPACK_IMPORTED_MODULE_1__.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
    var style = __assign({ background: "transparent !important", width: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), height: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), borderRadius: "100%", border: "2px solid", borderTopColor: color, borderBottomColor: "transparent", borderLeftColor: color, borderRightColor: color, display: "inline-block", animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "both" }, cssOverride);
    if (!loading) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __assign({ style: style }, additionalprops));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipLoader);


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/animation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/animation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimation: () => (/* binding */ createAnimation)
/* harmony export */ });
var createAnimation = function (loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if (typeof window == "undefined" || !window.document) {
        return animationName;
    }
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
    if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
    }
    return animationName;
};


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/unitConverter.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/unitConverter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssValue: () => (/* binding */ cssValue),
/* harmony export */   parseLengthAndUnit: () => (/* binding */ parseLengthAndUnit)
/* harmony export */ });
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true,
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px",
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit,
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px",
    };
}
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}


/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.b4e524fb.png";

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function Cog6ToothIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Cog6ToothIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function RocketLaunchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(RocketLaunchIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_OnboardingFlow_jsx.js.map?ver=578c5c38d50cdb753624