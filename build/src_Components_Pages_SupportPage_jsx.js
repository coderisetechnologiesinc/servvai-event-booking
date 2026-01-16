"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_SupportPage_jsx"],{

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const PageWrapper = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fixed inset-0 bg-[#F5F5F5]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "w-full relative pl-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `flex flex-col flex-1 h-full w-full pr-4 max-w-full min-w-0 overflow-visible ${props.loading ? "loading" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/Components/Pages/SupportPage.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/SupportPage.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowTopRightOnSquareIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InformationCircleIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/EnvelopeIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChatBubbleLeftRightIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const SupportPage = ({
  settings
}) => {
  const [intercomLaded, setIntercomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const FAQs = [{
    title: "How do I create my first event?",
    url: "https://support.servv.ai/getting-started/event/createevent/"
  }, {
    title: "Can I customise the booking form fields?",
    url: "https://support.servv.ai/getting-started/booking/#table-customization"
  }, {
    title: "How do I set booking limits or max capacity?",
    url: "https://support.servv.ai/getting-started/event/ticket/"
  }, {
    title: "How do I configure event categories or tags?",
    url: "https://support.servv.ai/getting-started/filter/categoryfilter/"
  }, {
    title: "This is an example question with external link?",
    url: "https://support.servv.ai/getting-started/filter/categoryfilter/#related-links"
  }];
  const mainLinks = [{
    title: "Documentation",
    description: "Step-by-step guides & API docs",
    url: "https://support.servv.ai"
  }, {
    title: "Support forum",
    description: "Real-time answers from power users",
    url: "https://wordpress.org/support/plugin/servvai-event-booking"
  }, {
    title: "Submit ticket",
    description: "One-to-one help",
    url: "https://servv.ai/contact/"
  }, {
    title: "Raise a bug",
    description: "Log an issue on GitHub",
    url: "https://github.com/coderisetechnologiesinc/servvai-event-booking/issues"
  }, {
    title: "Feature request",
    description: "Have an idea for us?",
    url: "https://github.com/coderisetechnologiesinc/servvai-event-booking/discussions/new?category=ideas"
  }];
  const additionalLinks = [{
    title: "Changelog",
    description: "View the latest updates and changes to our platform",
    url: "https://support.servv.ai/changelogs/changelog/"
  }, {
    title: "Releases",
    description: "See what's coming next and upcoming features",
    url: "https://github.com/coderisetechnologiesinc/servvai-event-booking/releases"
  }];
  const versionInfo = {
    Version: "2.1.4",
    Build: "2024.01.15",
    Environment: "Production",
    "Last Updated": "2025-08-13T12:34:56Z"
  };
  const renderFAQ = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex flex-col border border-gray-200 rounded-lg p-3xl mt-4xl",
      children: FAQs.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === FAQs.length - 1;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: `flex flex-row justify-between items-baseline 
              ${!isFirst ? "pt-2xl" : ""} 
              ${!isLast ? "border-b border-gray-200 pb-2xl" : ""}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: item.url,
            className: "text-brand-600 no-underline font-[500] text-[1rem]",
            children: item.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-[18px] fill-gray-400"
          })]
        }, index);
      })
    });
  };
  const renderVersionInfo = () => {
    const info = Object.keys(versionInfo);
    const currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default()();
    const last_updated = versionInfo["Last Updated"];
    const lastUpdatedMoment = moment__WEBPACK_IMPORTED_MODULE_0___default().utc(last_updated);
    const diff = moment__WEBPACK_IMPORTED_MODULE_0___default().duration(currentTime.diff(lastUpdatedMoment));
    let parts = [];
    if (diff.months()) parts.push(`${diff.months()} months`);
    if (diff.days()) parts.push(`${diff.days()} days`);
    if (diff.hours()) parts.push(`${diff.hours()} hours`);
    if (diff.minutes()) parts.push(`${diff.minutes()} minutes`);
    const diffString = parts.join(", ");
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-col border border-gray-200 rounded-lg p-3xl mt-4xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col mb-3xl gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-row gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "fill-[#717182] w-[0.875rem]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-[#0A0A0A] font-[500] text-md",
            children: "System Information"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#717182] font-[400] text-sm",
          children: "Current version and build details"
        })]
      }), info.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === info.length - 1;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: `flex flex-row justify-between items-baseline 
              ${!isFirst ? "pt-2xl" : ""} 
              ${!isLast ? "border-b border-gray-200 pb-2xl" : ""}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-[#0A0A0A] font-[500] text-sm",
            children: item
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-[#717182] font-[400] text-sm",
            children: item !== "Last Updated" ? versionInfo[item] : diffString
          })]
        }, index);
      })]
    });
  };
  const renderLinks = (links, layout) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: `mt-16 gap-4 max-md:flex-col max-md:justify-start max-md:flex-nowrap 
        ${layout === 3 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid grid-cols-1 sm:grid-cols-2"}`,
      children: links.map((link, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "border rounded-xl border-gray-200 shadow-lg p-[1.5rem] flex flex-col",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
          gap: 8,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: () => window.open(link.url, "_blank"),
            className: "inline-flex w-fit rounded-[0.625rem] border border-gray-300 bg-white shadow-sm p-[14px]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "w-[20px] fill-gray-700"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
              className: "text-gray-900 text-display-sm",
              children: link.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-[0.75rem] font-regular",
              children: link.description
            })]
          })]
        })
      }, index))
    });
  };
  const handleIntercomClick = () => {
    // Avoid injecting multiple times
    if (window.IntercomInjected) return;
    window.IntercomInjected = true;

    // Set Intercom settings
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "peztdh9y",
      custom_launcher_selector: "#servv_live_chat"
    };

    // Inject main Intercom loader script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function () { 
        var w = window; 
        var ic = w.Intercom; 
        if (typeof ic === "function") { 
          ic('reattach_activator'); 
          ic('update', w.intercomSettings); 
        } else { 
          var d = document; 
          var i = function () { i.c(arguments); }; 
          i.q = []; 
          i.c = function (args) { i.q.push(args); }; 
          w.Intercom = i; 
          var l = function () { 
            var s = d.createElement('script'); 
            s.type = 'text/javascript'; 
            s.async = true; 
            s.src = 'https://widget.intercom.io/widget/peztdh9y'; 
            var x = d.getElementsByTagName('script')[0]; 
            x.parentNode.insertBefore(s, x); 
          }; 
          if (document.readyState === 'complete') { 
            l(); 
          } else if (w.attachEvent) { 
            w.attachEvent('onload', l); 
          } else { 
            w.addEventListener('load', l, false); 
          } 
        } 
      })();
    `;
    document.body.appendChild(script);
    script.onload = () => {
      if (window.Intercom) {
        window.Intercom("boot");
      }
    };
    setIntercomLoaded(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleIntercomClick();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "mt-[2rem] mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col justify-center items-center ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-gray-900 text-display-sm",
            children: "Help & Support"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-regular text-[#475467] text-md text-center",
            children: "Get help, find resources, and connect with our support team to resolve any issues quickly."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-row gap-2 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: "mailto:support@servv.ai",
            className: "rounded-[0.625rem] border no-underline border-gray-300 bg-white shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "w-[20px] fill-gray-700"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-sm text-gray-700 font-semibold",
              children: "Email Us"
            })]
          }), intercomLaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            id: "servv_live_chat",
            className: "rounded-[0.625rem] border border-white bg-brand-600 shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
            // onClick={handleIntercomClick}
            ,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "w-[20px] fill-white"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-sm text-white font-semibold",
              children: "Live Chat"
            })]
          })]
        })]
      }), renderLinks(mainLinks, 3), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: "text-gray-900 text-display-sm mt-16",
        children: "Frequently Asked Questions"
      }), renderFAQ(), renderLinks(additionalLinks), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "text-regular text-sm text-gray-[#0A0A0A] mt-4xl",
        children: "Version Information : 1.0"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupportPage);

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

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowTopRightOnSquareIcon.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowTopRightOnSquareIcon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowTopRightOnSquareIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowTopRightOnSquareIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/InformationCircleIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/InformationCircleIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function InformationCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(InformationCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_SupportPage_jsx.js.map?ver=6604b6af5bc06940461a