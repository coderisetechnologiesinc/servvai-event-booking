"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Onboarding_SettingsStep_jsx"],{

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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const DropdownIndicator = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_2__.c.DropdownIndicator, {
  ...props,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    width: 20,
    height: 20,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  })
});
const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  multiple = false,
  onChange = () => {},
  iconRight = null,
  style = {}
}) => {
  // const options = [{ value: null, label: "" }, ...options];
  if (multiple) {
    const selected = Array.isArray(value) ? value.map(String) : [];
    const selectedOptions = options.filter(o => selected.includes(o.value));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "servv-select",
      style: {
        width: "100%"
      },
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        className: "step__content_title",
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMulti: true,
        options: options,
        value: selectedOptions,
        onChange: picked => onChange((picked || []).map(o => o.value)),
        isDisabled: disabled,
        placeholder: helpText || "Select...",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator
        },
        styles: {
          container: base => ({
            ...base,
            ...style
          }),
          control: base => ({
            ...base,
            border: "1px solid #d5d7da",
            borderRadius: "8px",
            boxShadow: "0px 1px 2px rgba(10, 13, 18, 0.05)",
            paddingLeft: "12px",
            paddingRight: "10px",
            fontSize: "14px",
            "&:hover": {
              borderColor: "#d5d7da"
            }
          }),
          placeholder: base => ({
            ...base,
            color: "#182230"
          }),
          option: base => ({
            ...base,
            color: "#182230"
          }),
          multiValueLabel: base => ({
            ...base,
            color: "#182230"
          }),
          input: base => ({
            ...base,
            color: "#182230"
          }),
          dropdownIndicator: base => ({
            ...base,
            padding: "0 4px"
          })
        }
      })]
    });
  }
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
        value: value !== null && value !== void 0 ? value : "",
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

/***/ "./src/Components/Onboarding/SettingsStep.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Onboarding/SettingsStep.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const SettingsStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  loading,
  onSave
}) => {
  const popularTimezones = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo", "Australia/Sydney"];
  const allTimezones = Intl.supportedValuesOf("timeZone");
  const timezoneOptions = [...popularTimezones.map(tz => ({
    value: tz,
    label: tz.replace(/_/g, " ")
  })), ...allTimezones.filter(tz => !popularTimezones.includes(tz)).map(tz => ({
    value: tz,
    label: tz.replace(/_/g, " ")
  }))];
  const handleContinue = () => {
    var _attributes$location$;
    if (!attributes.timezone) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Please select a timezone");
      return;
    }
    onSave({
      timezone: attributes.timezone,
      location: (_attributes$location$ = attributes.location?.trim()) !== null && _attributes$location$ !== void 0 ? _attributes$location$ : "",
      timeFormat: attributes.timeFormat
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "step__wrapper w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
          className: "step__header_title",
          children: "Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "step__description",
          children: "Configure your default preferences before creating events."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "step__content w-full max-w-[640px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "step__content_title",
              children: "Timezone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: attributes.timezone || "",
              options: timezoneOptions,
              helpText: "Select timezone",
              style: {
                width: "100%"
              },
              onChange: val => setAttributes({
                timezone: val
              }),
              iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "step__content_title",
              children: "Default Location"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "Enter default city or venue",
              value: attributes.location || "",
              onChange: val => setAttributes({
                location: val
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "step__content_title",
              children: "Time Format"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
              iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "servv_actions mt-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: handleContinue,
          disabled: loading || !attributes.timezone,
          children: loading ? "Saving..." : "Continue"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsStep);

/***/ })

}]);
//# sourceMappingURL=src_Components_Onboarding_SettingsStep_jsx.js.map?ver=83e5c2fb4f8cfa3586f0