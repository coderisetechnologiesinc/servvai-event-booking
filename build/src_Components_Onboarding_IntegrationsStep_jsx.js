"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Onboarding_IntegrationsStep_jsx"],{

/***/ "./src/Components/Containers/GmailConnectModalContent.jsx":
/*!****************************************************************!*\
  !*** ./src/Components/Containers/GmailConnectModalContent.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Shared_StepBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/StepBlock */ "./src/Components/Shared/StepBlock.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const GmailConnectModalContent = ({
  gmailConfirmed,
  setGmailConfirmed,
  handlerOnAccountAdd,
  closeModal
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_3__["default"]
    // title="Connect Gmail"
    , {
      description: "Before connecting, please confirm the required permission.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-sm font-semibold text-gray-900",
            children: "Important note"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "text-sm text-gray-600 leading-relaxed",
            children: ["Please ensure that you select the checkbox for the", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "font-medium text-gray-900",
              children: "\u201CSend email on your behalf\u201D"
            }), " ", "permission when connecting Gmail."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            alt: "Gmail permission",
            src: `${servvData.pluginUrl}/public/assets/images/GmailPermission.png`,
            className: "w-full rounded-lg border object-cover"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-sm font-medium text-gray-800",
            children: "I have read the note above"
          }),
          checked: gmailConfirmed,
          onChange: () => setGmailConfirmed(!gmailConfirmed)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-gray-100 py-2 w-fit px-2 -ml-2 rounded-[6px]",
          onClick: () => open("https://support.servv.ai/pages/getting-started/integrations/integrations/", "_blank"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-[16px] h-[16px]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-sm text-gray-600 leading-relaxed",
            children: "Learn more"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex justify-end gap-3 pt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            onClick: closeModal,
            className: "px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            disabled: !gmailConfirmed,
            onClick: () => {
              handlerOnAccountAdd();
              closeModal();
            },
            className: `px-4 py-2 rounded-lg text-sm font-semibold transition ${gmailConfirmed ? "bg-[#7a5af8] text-white hover:bg-[#6845f5]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`,
            children: "Connect"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GmailConnectModalContent);

/***/ }),

/***/ "./src/Components/Containers/InteractiveCard.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/InteractiveCard.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InteractiveCard = ({
  isPremium = false,
  background,
  onClick,
  subtitle,
  title,
  text,
  action,
  footer,
  children,
  style,
  className = "",
  selected = false
}) => {
  const computedBg = background !== null && background !== void 0 ? background : isPremium ? "#462986" : "#FFFFFF";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `relative flex flex-col rounded-2xl border p-6 flex-1 ${className}${onClick ? " cursor-pointer" : ""}`,
    style: {
      background: computedBg,
      border: selected ? "2px solid #7A5AF8" : "1px solid #E6EBE7",
      boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
      ...style
    },
    onClick: onClick,
    children: [selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-3 right-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.CheckMark, {})
    }), (subtitle || title || text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col items-center gap-2 text-center",
      children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: subtitle
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: title
      }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: text
      })]
    }), children, action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-auto pt-6",
      children: action
    }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 text-center",
      children: footer
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveCard);

/***/ }),

/***/ "./src/Components/Controls/CheckboxControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/CheckboxControl.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CheckboxControl = ({
  label = "",
  value = "",
  name = "",
  size = 6,
  checked = false,
  disabled,
  onChange = () => {},
  font = null,
  color = "text-gray-700"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "input-container-row items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "checkbox",
      className: `input-control checkbox-control size-${size} accent-brand-700`,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
      htmlFor: name,
      className: `section-description ${color} ${font ? font : ""}`,
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxControl);

/***/ }),

/***/ "./src/Components/Onboarding/IntegrationsStep.jsx":
/*!********************************************************!*\
  !*** ./src/Components/Onboarding/IntegrationsStep.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/CalendarIcon.js");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _Containers_GmailConnectModalContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/GmailConnectModalContent */ "./src/Components/Containers/GmailConnectModalContent.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/accounts */ "./src/utilities/accounts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






// import ZoomPaidAccountModalContent from "../Modals/ZoomPaidAccountModalContent";



const gradient = "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)";
const IntegrationCard = ({
  icon: Icon,
  title,
  description,
  optional,
  connected,
  onConnect,
  disabled
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  style: {
    minHeight: 0
  },
  subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "flex flex-col items-center gap-2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "relative w-16 h-16 flex items-center justify-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Icon, {
          className: "w-full h-full text-[#6941C6] z-10"
        })
      })]
    })
  }),
  title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
      className: "text-2xl font-bold",
      style: {
        background: gradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: "text-[11px] font-semibold px-2.5 py-0.5 rounded-full",
      style: {
        background: optional ? "#F3F4F6" : "",
        color: "#6B7280"
      },
      children: optional && "Optional"
    })]
  }),
  text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
    className: "text-sm",
    style: {
      color: "#717680"
    },
    children: description
  }),
  action: connected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
      type: "button",
      className: "servv_button servv_button--secondary w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "w-4 h-4 mr-1"
      }), "Connected"]
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
    type: "button",
    className: "w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50",
    style: {
      background: gradient,
      border: "3px solid rgba(255, 255, 255, 0.35)",
      boxShadow: "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
      color: "#FFFFFF"
    },
    onClick: onConnect,
    disabled: disabled,
    children: "Connect"
  })
});
const IntegrationsStep = ({
  goToNextStep,
  isGmailConnected,
  zoomConnected,
  stripeConnected,
  checkingEmail,
  loading,
  onConnectGmail,
  onConnectZoom,
  onConnectStripe
}) => {
  const [showGmailModal, setShowGmailModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showZoomModal, setShowZoomModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [gmailConfirmed, setGmailConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [zoomConfirmed, setZoomConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const calendarConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.calendarConnected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
          className: "step__header_title",
          children: "Integrations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "step__description",
          children: "Connect your services to enable notifications, video calls, and payments."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__content w-full max-w-[640px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-1 gap-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(IntegrationCard, {
          icon: _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_9__["default"],
          title: "Calendar",
          description: "Connect Google Calendar to keep track of your event schedule",
          optional: true,
          connected: calendarConnected,
          onConnect: () => {
            localStorage.setItem("redirectToOnboarding", window.location.href);
            (0,_utilities_accounts__WEBPACK_IMPORTED_MODULE_5__.getCalendarConnectURL)();
          },
          disabled: loading
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "servv_actions mt-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: goToNextStep,
          disabled: loading,
          children: "Continue"
        })
      })]
    }), showGmailModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Connect Gmail",
      onClose: () => setShowGmailModal(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_GmailConnectModalContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gmailConfirmed: gmailConfirmed,
        setGmailConfirmed: setGmailConfirmed,
        handlerOnAccountAdd: onConnectGmail,
        closeModal: () => setShowGmailModal(false)
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationsStep);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/CalendarIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/CalendarIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CalendarIcon({
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
    d: "M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CheckIcon({
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
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function QuestionMarkCircleIcon({
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
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(QuestionMarkCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Onboarding_IntegrationsStep_jsx.js.map?ver=15bc32bd1cf9aaa4e200