"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_SettingsStep_jsx"],{

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
/* harmony import */ var _StepBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StepBlock */ "./src/Components/StepBlock.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const GmailConnectModalContent = ({
  gmailConfirmed,
  setGmailConfirmed,
  handlerOnAccountAdd,
  closeModal
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_3__["default"]
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
            src: "https://servv-ai.intercom-attachments-1.com/i/o/984345698/5eb5d03c231220e22de523ae/Screen_Shot_2022-06-30_at_8_45_20_AM.png?expires=1770057000&signature=82bc4f838d185ac078528f3d91d17e30214cfb7f652cbb31aa60ef06c50f83fc",
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

/***/ "./src/Components/Controls/NewInputControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NewInputControl = ({
  label = "",
  value = "",
  placeholder = "",
  helpText = "",
  disabled = false,
  onChange = () => {},
  textarea = false,
  style = {},
  error,
  maxValue
}) => {
  const InputTag = textarea ? "textarea" : "input";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "servv_input",
    style: {
      width: "100%"
    },
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      className: "step__content_title",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `servv-input ${textarea ? "textarea" : "input"} ${error ? "servv-input--error" : ""}`,
      style: style,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "servv-input__content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputTag, {
          className: "servv-input__native",
          value: value,
          placeholder: placeholder || helpText,
          disabled: disabled,
          onChange: e => onChange(e.target.value),
          rows: textarea ? 4 : undefined,
          max: maxValue ? Number.parseFloat(maxValue) : undefined
        })
      })
    }), error && typeof error === "string" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "servv-input__error-text",
      children: error
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputControl);

/***/ }),

/***/ "./src/Components/Controls/NewSelectControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  onChange = () => {},
  iconRight = null,
  style = {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "servv-select",
    style: {
      width: "100%"
    },
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      className: "step__content_title",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `servv-select__control ${disabled ? "servv-select--disabled" : ""}`,
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
        className: "servv-select__native",
        value: value,
        onChange: e => onChange(e.target.value),
        disabled: disabled,
        children: [helpText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          disabled: true,
          children: helpText
        }), options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))]
      }), iconRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-select__icon",
        children: iconRight
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSelectControl);

/***/ }),

/***/ "./src/Components/Controls/RecurrenceRadioGroup.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/RecurrenceRadioGroup.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const RadioGroup = ({
  name,
  value,
  options = [],
  // [{ value, label }]
  onChange,
  disabled = false,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `servv-recurrence-group ${className}`,
    children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      className: "servv-radio",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "radio",
        name: name,
        value: opt.value,
        checked: value === opt.value,
        onChange: () => onChange(opt.value),
        disabled: disabled
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-radio__control"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-radio__label",
        children: opt.label
      })]
    }, opt.value))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);

/***/ }),

/***/ "./src/Components/SettingsStep.jsx":
/*!*****************************************!*\
  !*** ./src/Components/SettingsStep.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _ModalShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalShell */ "./src/Components/ModalShell.jsx");
/* harmony import */ var _Containers_GmailConnectModalContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Containers/GmailConnectModalContent */ "./src/Components/Containers/GmailConnectModalContent.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Controls/RecurrenceRadioGroup */ "./src/Components/Controls/RecurrenceRadioGroup.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const SettingsStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  zoomConnected,
  checkingEmail,
  onSave,
  loading,
  isGmailConnected
}) => {
  const [showGmailModal, setShowGmailModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showZoomModal, setShowZoomModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [gmailConfirmed, setGmailConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [zoomConfirmed, setZoomConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /* --------------------------------------------
     Timezone options (reuse existing approach)
  -------------------------------------------- */

  const popularTimezones = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo", "Australia/Sydney"];
  const allTimezones = Intl.supportedValuesOf("timeZone");
  const timezoneOptions = [...popularTimezones.map(tz => ({
    value: tz,
    label: tz.replace(/_/g, " ")
  })), ...allTimezones.filter(tz => !popularTimezones.includes(tz)).map(tz => ({
    value: tz,
    label: tz.replace(/_/g, " ")
  }))];

  /* --------------------------------------------
     Date format options
  -------------------------------------------- */

  const dateFormatOptions = [{
    value: "MM/DD/YYYY",
    label: "MM/DD/YYYY (12/31/2024)"
  }, {
    value: "DD/MM/YYYY",
    label: "DD/MM/YYYY (31/12/2024)"
  }, {
    value: "YYYY-MM-DD",
    label: "YYYY-MM-DD (2024-12-31)"
  }];

  /* --------------------------------------------
     Email connection status
  -------------------------------------------- */

  const connectZoom = async () => {
    const getAuthURLResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_8__["default"])("/wp-json/servv-plugin/v1/zoom/url", {
      method: "GET",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      redirect: "manual"
    });
    await onSave({
      sync: true
    });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(`${servvData.shopify_app}/zoom/connect?wordpress_url=${encodeURIComponent(getAuthURLResponse.data.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}&servv_nonce=${getAuthURLResponse.data.nonce}`, "_top");
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
    const getAuthURLResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_8__["default"])("/wp-json/servv-plugin/v1/gmail/url", {
      method: "GET",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      redirect: "manual"
    });
    await onSave({
      sync: true
    });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(`${servvData.shopify_app}/mail/connect?wordpress_url=${encodeURIComponent(getAuthURLResponse.data.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}&servv_nonce=${getAuthURLResponse.data.nonce}`, "_top");
    }
  };
  /* --------------------------------------------
     Submit
  -------------------------------------------- */

  const handleContinue = () => {
    if (!attributes.timezone) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Please select a timezone");
      return;
    }
    onSave({
      timezone: attributes.timezone,
      location: attributes.location,
      dateFormat: attributes.dateFormat,
      defaultEventType: attributes.defaultEventType,
      emailConnected: attributes.emailConnected
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
          className: "step__header_title",
          children: "Basic Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "step__description",
          children: "Configure your default preferences before creating events."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col gap-y-[24px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Timezone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: attributes.timezone || "",
            options: timezoneOptions,
            helpText: "Select timezone",
            style: {
              width: "100%"
            },
            onChange: val => setAttributes({
              timezone: val
            }),
            iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Default Location"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            placeholder: "Enter default city or venue",
            value: attributes.location || "",
            onChange: val => setAttributes({
              location: val
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Time Format"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: attributes.timeFormat || "12h",
            options: [{
              label: "12 hours (AM/PM)",
              value: "12h"
            }, {
              label: "24 hours",
              value: "24h"
            }],
            helpText: "Select time format",
            style: {
              width: "100%"
            },
            onChange: val => setAttributes({
              timeFormat: val
            }),
            iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Default Event Type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "default-event-type",
            value: attributes.defaultEventType || "offline",
            options: [{
              value: "offline",
              label: "Offline"
            }, {
              value: "zoom",
              label: "Online"
            }],
            onChange: val => setAttributes({
              defaultEventType: val
            })
          })]
        }), attributes.defaultEventType === "zoom" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Connect Zoom Account"
          }), checkingEmail ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "step__description",
            children: "Checking zoom status\u2026"
          }) : zoomConnected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "step__description",
            children: "Email is connected and ready for notifications."
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--secondary",
            onClick: handleConnectZoom,
            children: "Connect"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Email Connection"
          }), checkingEmail ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "step__description",
            children: "Checking email status\u2026"
          }) : isGmailConnected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "step__description",
            children: "Email is connected and ready for notifications."
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--secondary",
            onClick: handleEmailConnect,
            children: "Connect Email"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "servv_actions mt-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: handleContinue,
          disabled: loading || !isGmailConnected || attributes.defaultEventType === "zoom" && !zoomConnected,
          children: loading ? "Saving..." : "Continue"
        })
      })]
    }), showGmailModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ModalShell__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Connect Gmail",
      onClose: () => setShowGmailModal(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_GmailConnectModalContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gmailConfirmed: gmailConfirmed,
        setGmailConfirmed: setGmailConfirmed,
        handlerOnAccountAdd: connectGmail,
        closeModal: () => setShowGmailModal(false)
      })
    }), showZoomModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ModalShell__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Connect Zoom",
      onClose: () => setShowZoomModal(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoomPaidAccountModalContent, {
        zoomConfirmed: zoomConfirmed,
        setZoomConfirmed: setZoomConfirmed,
        handlerOnZoomAccountAdd: connectZoom,
        closeModal: () => setShowZoomModal(false)
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsStep);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronDownIcon({
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
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_SettingsStep_jsx.js.map?ver=ddd9d1356c491d221b73