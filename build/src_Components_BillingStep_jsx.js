"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_BillingStep_jsx"],{

/***/ "./src/Components/BillingStep.jsx":
/*!****************************************!*\
  !*** ./src/Components/BillingStep.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js");
/* harmony import */ var _ModalShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalShell */ "./src/Components/ModalShell.jsx");
/* harmony import */ var _Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const BillingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  onSave,
  loading: parentLoading,
  settings
}) => {
  const [billingPlans, setBillingPlans] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPaymentForm, setShowPaymentForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeForm, setStripeForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    fetchSettings
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getBillingPlans();
  }, []);
  const getBillingPlans = async () => {
    setLoading(true);
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])("/wp-json/servv-plugin/v1/shop/paymentplans", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(() => (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Unable to fetch billing plans."));
    if (response?.status === 200) {
      setBillingPlans(response.data.plans);
    }
    setLoading(false);
  };
  const activateBillingPlan = async (id, isAnnual = false) => {
    setLoading(true);
    setShowPaymentOptionsModal(false);
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_7__["default"])({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        is_annual: isAnnual
      }
    }).catch(() => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Unable to activate billing plan.");
      setLoading(false);
    });
    if (response?.status === 200) {
      const {
        client_secret,
        public_key
      } = response.data;
      const stripe = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)(public_key);
      const handleComplete = async () => {
        setLoading(true);
        checkout.destroy();
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Your billing plan has been successfully activated.");
        setShowPaymentForm(false);
        setAttributes({
          planActivated: true,
          planId: id
        });
        await fetchSettings();
        setLoading(false);
      };
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete
      });
      setShowPaymentForm(true);
      checkout.mount("#servv-payment-element");
      setStripeForm(checkout);
    }
    setLoading(false);
  };
  const showPaymentOptions = plan => {
    setSelectedPlan(plan);
    setShowPaymentOptionsModal(true);
  };
  const handleContinue = () => {
    onSave({
      ...attributes
    });
  };
  const activePlanId = settings?.current_plan?.id || 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "step__wrapper w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
          className: "step__header_title",
          children: "Choose a Plan"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "step__description",
          children: "Select the plan that best fits your needs."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: `step__content w-full`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "flex flex-col gap-y-[24px] mb-[30px]",
        children: !showPaymentForm ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isLoading: loading && !billingPlans,
          customStyling: "top-[30px]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: billingPlans?.map((plan, idx) => {
              const isCurrent = activePlanId === plan.id;
              const isUpgradeable = plan.id > (activePlanId || 0);
              const premium = idx === billingPlans.length - 1;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex flex-col rounded-2xl border p-6 flex-1",
                style: {
                  background: premium ? "#462986" : "#FFFFFF",
                  border: "1px solid #E6EBE7",
                  boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
                  minHeight: 0
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "flex flex-col items-center gap-3 text-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                    className: "text-sm font-bold tracking-widest uppercase",
                    style: {
                      background: premium ? "linear-gradient(91.35deg, #FFFFFF 2.18%, #CAC5E6 16.69%, #C4CBF7 40.59%, #C3E2E9 67.97%, #E8A76B 98.12%)" : undefined,
                      WebkitBackgroundClip: premium ? "text" : undefined,
                      WebkitTextFillColor: premium ? "transparent" : "transparent",
                      backgroundClip: premium ? "text" : undefined,
                      color: premium ? undefined : "#872CFA",
                      WebkitTextFillColor: premium ? "transparent" : "#872CFA"
                    },
                    children: plan.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                    className: "text-3xl font-bold",
                    style: {
                      color: premium ? "#FFFFFF" : "#070908"
                    },
                    children: plan.price > 0 ? `$${plan.price}/mo` : plan.price_annual > 0 ? `$${plan.price_annual}/yr` : "Free"
                  }), plan.application_fee_percent > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                    className: "text-sm",
                    style: {
                      color: premium ? "rgba(255,255,255,0.6)" : "#717680"
                    },
                    children: [plan.application_fee_percent, "% transaction fee"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "mt-auto pt-8 flex flex-col items-center gap-3",
                  children: isCurrent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-xs font-semibold px-2 py-1 rounded-full",
                      style: {
                        color: premium ? "#462986" : "#6941C6",
                        background: premium ? "#FFFFFF" : "#F4EBFF"
                      },
                      children: "Active Plan"
                    })
                  }) : isUpgradeable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50",
                    style: {
                      background: "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)",
                      border: "3px solid rgba(255, 255, 255, 0.35)",
                      boxShadow: "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
                      color: "#FFFFFF"
                    },
                    onClick: () => showPaymentOptions(plan),
                    disabled: loading,
                    children: "Activate"
                  })
                })]
              }, plan.id);
            })
          })
        }) : null
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        id: "servv-payment-element"
      }), !loading && billingPlans && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: `servv_actions mt-auto`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: goToNextStep,
          disabled: loading || parentLoading,
          children: parentLoading ? "Saving..." : "Continue"
        })
      })]
    }), showPaymentOptionsModal && selectedPlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ModalShell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: `Activate ${selectedPlan.name}`,
      onClose: () => {
        setShowPaymentOptionsModal(false);
        setSelectedPlan(null);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col gap-y-[16px] p-[24px]",
        children: [selectedPlan.application_fee_percent > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "step__description",
          children: ["This plan includes a ", selectedPlan.application_fee_percent, "% transaction fee."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col gap-y-[12px]",
          children: [selectedPlan.price > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            className: "servv_button servv_button--primary w-full",
            onClick: () => activateBillingPlan(selectedPlan.id),
            children: ["Monthly \u2014 $", selectedPlan.price, "/mo"]
          }), selectedPlan.price_annual > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            className: "servv_button servv_button--secondary w-full",
            onClick: () => activateBillingPlan(selectedPlan.id, true),
            children: ["Annual \u2014 $", selectedPlan.price_annual, "/yr"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--secondary w-full",
          onClick: () => {
            setShowPaymentOptionsModal(false);
            setSelectedPlan(null);
          },
          children: "Cancel"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingStep);

/***/ }),

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SpinnerLoader = ({
  isLoading,
  children,
  customStyling
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: isLoading ? "blur-sm pointer-events-none" : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `absolute inset-0 flex items-center justify-center ${customStyling}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var RELEASE_TRAIN = 'acacia';

var runtimeVersionToUrlVersion = function runtimeVersionToUrlVersion(version) {
  return version === 3 ? 'v3' : version;
};

var ORIGIN = 'https://js.stripe.com';
var STRIPE_JS_URL = "".concat(ORIGIN, "/").concat(RELEASE_TRAIN, "/stripe.js");
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var STRIPE_JS_URL_REGEX = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';

var isStripeJSURL = function isStripeJSURL(url) {
  return V3_URL_REGEX.test(url) || STRIPE_JS_URL_REGEX.test(url);
};

var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(ORIGIN, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!isStripeJSURL(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(STRIPE_JS_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "6.1.0",
    startTime: startTime
  });
};

var stripePromise$1 = null;
var onErrorListener = null;
var onLoadListener = null;

var onError = function onError(reject) {
  return function (cause) {
    reject(new Error('Failed to load Stripe.js', {
      cause: cause
    }));
  };
};

var onLoad = function onLoad(resolve, reject) {
  return function () {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error('Stripe.js not available'));
    }
  };
};

var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }

  stripePromise$1 = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;

        // remove event listeners
        script.removeEventListener('load', onLoadListener);
        script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,
        // reload script to trigger 'load' event

        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }

      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener('load', onLoadListener);
      script.addEventListener('error', onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  }); // Resets stripePromise on error

  return stripePromise$1["catch"](function (error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var pk = args[0];
  var isTestKey = pk.match(/^pk_test/); // @ts-expect-error this is not publicly typed

  var version = runtimeVersionToUrlVersion(maybeStripe.version);
  var expectedVersion = RELEASE_TRAIN;

  if (isTestKey && version !== expectedVersion) {
    console.warn("Stripe.js@".concat(version, " was loaded on the page, but @stripe/stripe-js@").concat("6.1.0", " expected Stripe.js@").concat(expectedVersion, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var stripePromise;
var loadCalled = false;

var getStripePromise = function getStripePromise() {
  if (stripePromise) {
    return stripePromise;
  }

  stripePromise = loadScript(null)["catch"](function (error) {
    // clear cache on error
    stripePromise = null;
    return Promise.reject(error);
  });
  return stripePromise;
}; // Execute our own script injection after a tick to give users time to do their
// own script injection.


Promise.resolve().then(function () {
  return getStripePromise();
})["catch"](function (error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script

  return getStripePromise().then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/@stripe/stripe-js/lib/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/lib/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* reexport safe */ _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.loadStripe)
/* harmony export */ });
/* harmony import */ var _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/index.mjs */ "./node_modules/@stripe/stripe-js/dist/index.mjs");



/***/ })

}]);
//# sourceMappingURL=src_Components_BillingStep_jsx.js.map?ver=dd39ae92f9c4f25e1e11