"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_SettingsPage_jsx"],{

/***/ "./src/Components/Containers/AnnotatedSection.jsx":
/*!********************************************************!*\
  !*** ./src/Components/Containers/AnnotatedSection.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const AnnotatedSection = ({
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  contentClassName = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `annotated-section flex flex-col md:flex-row gap-4 md:gap-8 items-start ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "annotated-section-header flex-shrink-0 w-full md:w-32 lg:w-64",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: `text-sm font-semibold text-gray-900 mb-1 ${titleClassName}`,
        style: {
          fontFamily: "'Inter', sans-serif"
        },
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-sm text-gray-600 hidden md:block leading-relaxed",
        style: {
          fontFamily: "'Inter', sans-serif"
        },
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `annotated-section-content flex-1 w-full ${contentClassName}`,
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotatedSection);

/***/ }),

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

/***/ "./src/Components/Containers/PageContent.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Containers/PageContent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PageContent = props => {
  const {
    className = "",
    children,
    ...rest
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...rest,
    className: `page-content ${className}`,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContent);

/***/ }),

/***/ "./src/Components/Controls/ButtonGroup.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Controls/ButtonGroup.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "input-container-row justify-between",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "input-container-col grow",
      children: [title.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "section-description",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "button-group-container",
        children: buttons.map(button => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `${active == button ? "button-group-button-active" : "button-group-button"} section-description`,
          "data-value": button,
          disabled: disabled,
          onClick: e => {
            onChange(e.target.dataset.value);
          },
          children: button
        }, button))
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);

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

/***/ "./src/Components/Controls/InputFieldControl.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Controls/InputFieldControl.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InputFieldControl = ({
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  onChange = () => {},
  handleKeyPress = () => {},
  maxLength = "",
  minValue = "",
  maxValue = "",
  fullWidth = false,
  align = "center",
  image = null,
  suffix = "",
  width = null,
  prefix = "",
  prefixWidth = "w-12",
  step = null,
  className = "",
  style = {}
}) => {
  // Alignment helper
  const getAlignmentClass = () => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };
  const handleChange = e => {
    const value = e.target.value;
    if (type === "number" && maxValue && value > maxValue) {
      onChange(maxValue);
    } else if (type === "number" && minValue && value < minValue) {
      onChange(minValue);
    } else {
      onChange(value);
    }
  };

  // Responsive style for mobile
  const responsiveStyle = {
    // maxWidth: "100%",
    // width: "100%",
    boxSizing: "border-box",
    ...style
  };

  // Input classes
  const inputClasses = `
    w-full min-w-[4rem]
    input-control
    px-3 py-2
    pl-6
    border border-gray-300 rounded-lg
    text-sm font-medium
    focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500
    disabled:bg-gray-100 disabled:cursor-not-allowed
    transition-colors duration-200
    section-description
    ${getAlignmentClass()}
    ${fullWidth ? "w-full" : ""}
    ${width ? "w-full" : ""}
    ${align === "right" ? "pr-1" : ""}
    ${className}
  `.trim();
  const inputStyle = {
    width: fullWidth ? "100%" : width || undefined,
    fontFamily: "'Inter', sans-serif",
    ...responsiveStyle
  };

  // Main input (no image, no prefix)
  if (!image && prefix === "") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex relative group justify-center items-center w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: type,
        className: inputClasses,
        style: inputStyle,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        maxLength: maxLength,
        min: minValue,
        max: maxValue,
        onChange: e => handleChange(e),
        onKeyDown: handleKeyPress,
        step: step,
        autoComplete: "off"
      }), suffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "absolute text-gray-500 right-0 pr-8",
        style: {
          fontFamily: "'Inter', sans-serif"
        },
        children: suffix
      })]
    });
  }

  // Input with prefix (e.g. currency)
  if (!image && prefix !== "") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex w-full rounded-lg border border-gray-300 overflow-hidden text-md shadow-sm h-9",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `flex items-center justify-center bg-gray-50 text-gray-600 text-md ${prefixWidth} border-r border-gray-300`,
        children: prefix
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "text",
        inputMode: "decimal",
        pattern: "^\\d+(\\.\\d{0,2})?$",
        className: "w-full px-4 text-gray-800 placeholder-gray-400 text-md focus:outline-none bg-white [appearance:textfield]",
        placeholder: "0.00",
        value: value,
        onChange: e => {
          let val = e.target.value.replace(/[^\d.]/g, "");
          if (val.includes(".")) {
            const [int, dec] = val.split(".");
            val = `${int}.${dec.slice(0, 2)}`;
          }
          if (val.startsWith("00")) val = "0";else if (val.startsWith("0") && val[1] !== ".") val = val.slice(1);
          onChange(val);
        },
        style: responsiveStyle
      })]
    });
  }

  // Input with image
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex relative group justify-center items-center w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "flex absolute left-0 bg-transparent rounded text-base text-gray-600 p-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "size-6",
        style: {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "1.7rem",
          height: "1.7rem"
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: type,
      className: `
          input-control section-description description-image
          ${getAlignmentClass()}
          ${align === "right" ? "pr-1 pl-8" : ""}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `,
      style: inputStyle,
      placeholder: placeholder,
      value: value,
      disabled: disabled,
      maxLength: maxLength,
      min: minValue,
      max: maxValue,
      onChange: e => onChange(e.target.value),
      autoComplete: "off"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFieldControl);

/***/ }),

/***/ "./src/Components/Controls/PageActionButton.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/PageActionButton.jsx ***!
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


const PageActionButton = ({
  text,
  icon,
  type = "primary",
  // primary | secondary | danger
  size = "md",
  // md | sm
  onAction,
  disabled = false,
  className = "",
  style = {},
  hidden
}) => {
  const baseClass = "servv_button";
  const typeClass = `servv_button--${type}`;
  const sizeClass = size === "sm" ? "servv_button--sm" : "servv_button--md";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
    type: "button",
    onClick: onAction,
    disabled: disabled,
    className: `${baseClass} ${typeClass} ${sizeClass} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
    style: style,
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "mr-2 flex items-center",
      children: icon
    }), text]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageActionButton);

/***/ }),

/***/ "./src/Components/Controls/PaymentOptionsModal.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/PaymentOptionsModal.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PaymentOptionsModal = ({
  open = false,
  title = "Payment option",
  text = "Select a payment option (monthly or annual)",
  price = 0,
  priceAnnual = 0,
  fee = 0,
  onAcceptMonthly = () => {},
  onAcceptAnnual = () => {},
  onCancel = () => {}
}) => {
  if (!open) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
    role: "dialog",
    "aria-modal": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "bg-white rounded-2xl shadow-md w-full max-w-md p-6 flex flex-col gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
        className: "text-lg font-semibold text-gray-800",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-gray-600",
        children: text
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text-gray-600 font-semibold",
        children: ["Price monthly: $", price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text-gray-600 font-semibold",
        children: ["Price annual: $", priceAnnual]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text-gray-600 font-semibold",
        children: ["Application Fee: $", fee, " %"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row justify-end gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: onCancel,
          className: "px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: onAcceptMonthly,
          className: "px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-700",
          children: "Monthly"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: onAcceptAnnual,
          className: "px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-700",
          children: "Annual"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentOptionsModal);

/***/ }),

/***/ "./src/Components/Controls/SelectControl.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Controls/SelectControl.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SelectControl = ({
  label = "",
  options = [],
  helpText = "",
  selected = null,
  disabled = false,
  onSelectChange = () => {},
  iconRight = null,
  iconLeft = null,
  style = {} // <-- Add style prop
}) => {
  const renderOptions = () => {
    if (options.length > 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [helpText.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          disabled: true,
          selected: !selected,
          children: helpText
        }, ""), options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: option,
          selected: selected === option,
          children: option
        }, option))]
      });
    }
  };
  // Responsive style for mobile
  const responsiveStyle = {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
    ...style
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "input-container-col",
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: "timezone",
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "select-control-with-icon-container",
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
        name: "timezone",
        id: "timezone-select",
        className: "select-control select-control-with-icon text-sm p-4",
        value: selected,
        onChange: e => onSelectChange(e.target.value),
        disabled: disabled,
        style: responsiveStyle,
        children: renderOptions()
      }), iconRight !== null && iconRight]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControl);

/***/ }),

/***/ "./src/Components/Controls/TimeInputControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/TimeInputControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _TimePeriodControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimePeriodControl */ "./src/Components/Controls/TimePeriodControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const TimeInputControl = ({
  label,
  time,
  disabled,
  timeFormat,
  onChange,
  align = "start"
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (time === null) {
      const newTime = moment__WEBPACK_IMPORTED_MODULE_3___default()();
      onChange(newTime);
    }
  }, []);
  const getHours = () => {
    const selectedTime = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    const hh = selectedTime.hour();
    if (timeFormat === "hh:mm a") {
      return selectedTime.format("hh");
    } else {
      return hh;
    }
  };
  const getMinutes = () => {
    const selectedTime = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    return selectedTime.get("minute");
  };
  const onHoursChange = val => {
    const newTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(time);
    let currentVal = Number.parseInt(val);
    if (timeFormat === "hh:mm a") {
      if (currentVal < 1) currentVal = 1;
      if (currentVal > 12) currentVal = 12;
      const isPM = newTime.format("A") === "PM";
      if (isPM && currentVal !== 12) {
        currentVal += 12;
      } else if (!isPM && currentVal === 12) {
        currentVal = 0;
      }
    } else {
      if (currentVal < 0) currentVal = 0;
      if (currentVal > 23) currentVal = 23;
    }
    newTime.set("hour", currentVal);
    onChange(newTime);
  };
  const onMinutesChange = val => {
    let currentVal = val;
    if (currentVal.length > 2) {
      if (currentVal[0] !== "0") currentVal = currentVal.slice(0, 2);else currentVal = currentVal.slice(1, 3);
    }
    if (Number.parseInt(currentVal) > 59) {
      currentVal = 0;
    }
    const newTime = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time).clone() : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    newTime.set("minute", Number.parseInt(currentVal || 0));
    onChange(newTime);
  };
  const onPeriodChange = val => {
    const newTime = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    const currentDate = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time).date() : moment__WEBPACK_IMPORTED_MODULE_3___default()().date();
    const hh = newTime.hour();
    let newTimeValue = val;
    if (val === "am" && hh < 12) {
      newTimeValue = hh - 12;
    } else if (val === "pm" && hh >= 12) {
      newTimeValue = hh + 12;
    }
    if (newTimeValue > -24 || newTimeValue < 0) {
      newTime.hour(newTimeValue);
      newTime.set({
        date: currentDate
      });
    } else {
      newTime.hour(newTimeValue);
    }
    onChange(newTime);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `input-container-col items-start ${align === "start" ? "grow" : "grow-0"} justify-between [@media(max-width:735px)]:grow-0`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: String(getHours()).padStart(2, "0"),
        onChange: onHoursChange,
        maxLength: 2,
        type: "number",
        minValue: timeFormat === "hh:mm a" ? 1 : 0,
        maxValue: timeFormat === "hh:mm a" ? 12 : 23,
        disabled: disabled
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "section-description",
        children: ":"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: String(getMinutes()).padStart(2, "0"),
        onChange: val => onMinutesChange(val),
        maxLength: 2,
        type: "number",
        minValue: 0,
        maxValue: 60,
        disabled: disabled
      }), timeFormat === "hh:mm a" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TimePeriodControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        time: time,
        onChange: onPeriodChange,
        disabled: disabled
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeInputControl);

/***/ }),

/***/ "./src/Components/Controls/TimePeriodControl.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Controls/TimePeriodControl.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const TimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {}
}) => {
  // useEffect(() => {
  // }, [time]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    onClick: () => onChange(time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format("a") : "am"),
    className: "period-control section-description font-regular leading-none",
    disabled: disabled,
    children: time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format("a") : "am"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimePeriodControl);

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

/***/ "./src/Components/Pages/N8NSettings.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/N8NSettings.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const N8NSettings = ({
  n8nSettingsData = {},
  settingsUpdate = () => {}
}) => {
  const selectOptions = ["POST", "GET", "PUT", "PATCH", "DELETE"];
  const responsiveBlockStack = "w-full min-w-0 items-center";
  const responsiveInput = "w-full min-w-0";

  // const convertTitle = (title) => {
  //   return title.charAt(0).toUpperCase() + title.split("_").join(" ").slice(1);
  // };
  const handleValueChange = (key, val) => {
    let currValues = n8nSettingsData;
    if (!isNaN(Number.parseInt(val))) {
      currValues[key] = Number.parseInt(val) === 1 ? false : true;
    } else if (typeof val === "boolean") {
      currValues[key] = !currValues[key];
    } else {
      currValues[key] = val;
    }
    settingsUpdate(currValues);
  };
  const renderN8NSettings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex flex-col w-full gap-16",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: `${responsiveInput} items-center`,
          title: "Event Created Trigger",
          description: "Enable this to trigger the workflow whenever a new event is created.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            checked: typeof n8nSettingsData.event_created_active === "boolean" ? n8nSettingsData.event_created_active : Number.parseInt(n8nSettingsData.event_created_active) === 1,
            onChange: () => handleValueChange("event_created_active", n8nSettingsData.event_created_active)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: `${responsiveInput} items-center`,
          title: "New Booking Trigger",
          description: "Enable this to trigger the workflow whenever a new booking is made.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            checked: typeof n8nSettingsData.new_booking_active === "boolean" ? n8nSettingsData.new_booking_active : Number.parseInt(n8nSettingsData.new_booking_active) === 1,
            onChange: () => handleValueChange("new_booking_active", n8nSettingsData.new_booking_active)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: `${responsiveInput} items-center`,
          title: "Canceled Booking Trigger",
          description: "Enable this to trigger the workflow whenever a booking is canceled.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            checked: typeof n8nSettingsData.canceled_booking_active === "boolean" ? n8nSettingsData.canceled_booking_active : Number.parseInt(n8nSettingsData.canceled_booking_active) === 1,
            onChange: () => handleValueChange("canceled_booking_active", n8nSettingsData.canceled_booking_active)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "font-semibold border-b pb-1 w-full self-end",
          children: "Triggers settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: responsiveInput,
          title: "Event Created Wrokflow Settings",
          description: "Configure how n8n should handle new event creation. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-row w-full items-end gap-2 mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  options: selectOptions,
                  selected: n8nSettingsData.event_created_method || null,
                  onSelectChange: newVal => handleValueChange("event_created_method", newVal),
                  style: {
                    padding: "10px"
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: responsiveBlockStack,
                  align: "left",
                  value: n8nSettingsData.event_created_url,
                  onChange: newVal => handleValueChange("event_created_url", newVal),
                  placeholder: "Endpoint URL"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "flex-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: responsiveBlockStack,
                align: "left",
                value: n8nSettingsData.event_created_secret,
                onChange: newVal => handleValueChange("event_created_secret", newVal),
                placeholder: "Secret"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: responsiveInput,
          title: "New Booking Workflow Settings",
          description: "Configure how n8n should handle new bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-row w-full items-end gap-2 mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  options: selectOptions,
                  selected: n8nSettingsData.new_booking_method || null,
                  onSelectChange: newVal => handleValueChange("new_booking_method", newVal),
                  style: {
                    padding: "10px"
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: responsiveBlockStack,
                  align: "left",
                  value: n8nSettingsData.new_booking_url,
                  onChange: newVal => handleValueChange("new_booking_url", newVal),
                  placeholder: "Endpoint URL"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "flex-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: responsiveBlockStack,
                align: "left",
                value: n8nSettingsData.canceled_booking_secret,
                onChange: newVal => handleValueChange("canceled_booking_secret", newVal),
                placeholder: "Secret"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: responsiveInput,
          title: "Canceled Booking Workflow Settings",
          description: "Configure how n8n should handle canceled bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-row w-full items-end gap-2 mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  options: selectOptions,
                  selected: n8nSettingsData.canceled_booking_method || null,
                  onSelectChange: newVal => handleValueChange("canceled_booking_method", newVal),
                  style: {
                    padding: "10px"
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "flex-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: responsiveBlockStack,
                  align: "left",
                  value: n8nSettingsData.canceled_booking_url,
                  onChange: newVal => handleValueChange("canceled_booking_url", newVal),
                  placeholder: "Endpoint URL"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "flex-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: responsiveBlockStack,
                align: "left",
                value: n8nSettingsData.new_booking_secret,
                onChange: newVal => handleValueChange("new_booking_secretn", newVal),
                placeholder: "Secret"
              })
            })]
          })
        })]
      })]
    });
    // return Object.keys(n8nSettingsData).map((setting) => {
    //   if (
    //     setting === "canceled_booking_active" ||
    //     setting === "event_created_active" ||
    //     setting === "new_booking_active"
    //   ) {
    //     return (
    //       <AnnotatedSection
    //         className={responsiveInput}
    //         title={convertTitle(setting)}
    //       >
    //         <CheckboxControl
    //           checked={
    //             typeof n8nSettingsData[setting] === "boolean"
    //               ? n8nSettingsData[setting]
    //               : Number.parseInt(n8nSettingsData[setting]) === 1
    //           }
    //           onChange={() =>
    //             handleValueChange(setting, n8nSettingsData[setting])
    //           }
    //         />
    //       </AnnotatedSection>
    //     );
    //   } else {
    //     return (
    //       <AnnotatedSection
    //         title={convertTitle(setting)}
    //         className={responsiveBlockStack}
    //       >
    //         <InputFieldControl
    //           className={responsiveBlockStack}
    //           align="left"
    //           value={n8nSettingsData[setting]}
    //           onChange={(newVal) => handleValueChange(setting, newVal)}
    //         />
    //       </AnnotatedSection>
    //     );
    //   }
    // });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "flex flex-col w-full",
      children: renderN8NSettings()
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (N8NSettings);

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

/***/ "./src/Components/Pages/Settings/BillingSettings.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Settings/BillingSettings.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_PaymentOptionsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controls/PaymentOptionsModal */ "./src/Components/Controls/PaymentOptionsModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// components/Settings/BillingSettings.jsx



const BillingSettings = ({
  responsiveBlockStack,
  showPaymentForm,
  renderBillingPlans,
  showPaymentOptionsModal,
  setShowPaymentOptionsModal,
  selectedPlan,
  setSelectedPlan,
  activateBillingPlan
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
      gap: 8,
      className: responsiveBlockStack,
      children: [!showPaymentForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6",
        children: renderBillingPlans()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        id: "servv-payment-element"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Controls_PaymentOptionsModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: showPaymentOptionsModal,
      onCancel: () => {
        setShowPaymentOptionsModal(false);
        setSelectedPlan(null);
      },
      fee: selectedPlan?.application_fee_percent,
      onAcceptMonthly: () => activateBillingPlan(selectedPlan.id),
      onAcceptAnnual: () => activateBillingPlan(selectedPlan.id, true),
      price: selectedPlan?.price || 0,
      priceAnnual: selectedPlan?.price_annual || 0
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/CheckoutSettings.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Settings/CheckoutSettings.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// components/Settings/CheckoutSettings.jsx




const CheckoutSettings = ({
  settings,
  handleFreeCheckoutChange,
  handleSkipCaptchaChange,
  handleMarketingConsentChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Enable Fast Checkout for Free Events",
      description: "Activate fast checkout to speed up the booking process for free services",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Enable Fast Checkout",
          checked: settings?.settings?.free_events_skip_checkout || 0,
          onChange: handleFreeCheckoutChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Skip Captcha on Fast Checkout",
      description: "Activate to bypass captcha verification during fast checkout for free services.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Skip Captcha",
          checked: settings?.settings?.free_events_skip_captcha || 0,
          onChange: handleSkipCaptchaChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Marketing Consent Checkbox",
      description: "Turn on this option to show a checkbox at free checkout, so customers can sign up for marketing emails and newsletters",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Marketing Consent",
          checked: settings?.settings?.free_checkout_marketing_checkbox || 0,
          onChange: handleMarketingConsentChange
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/GeneralSettings.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Settings/GeneralSettings.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const GeneralSettings = ({
  settings,
  timezones,
  timeOptions,
  currencyOptions,
  durationOptions,
  eventTypes,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  stripeConnected,
  zoomAccount,
  handleTimezoneChange,
  handleTimeFormatChange,
  handleHideTimezoneChange,
  handleCurrencyChange,
  handleDefaultDurationChange,
  handleDefaultStartTimeChange,
  getDefaultStartTime,
  getDefaultEndTime,
  handleDefaultPriceChange,
  handleDefaultQuantityChange,
  handleDefaultTypeChange
}) => {
  console.log(eventTypes);
  console.log(settings?.settings?.admin_dashboard?.default_event_type);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    cardsLayout: true,
    className: responsiveBlockStack,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Time zone",
      description: "Set a default time zone.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "",
          options: timezones.map(t => t.name),
          selected: settings?.settings?.admin_dashboard?.default_timezone && timezones.findIndex(t => t.id === settings?.settings?.admin_dashboard?.default_timezone) >= 0 ? timezones[timezones.findIndex(t => t.id === settings?.settings?.admin_dashboard?.default_timezone)].name : null,
          onSelectChange: handleTimezoneChange,
          className: responsiveInput
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Time format",
      description: "Set a default time format.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 4,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "",
          options: timeOptions,
          selected: settings?.settings?.time_format_24_hours ? "24 hours" : "12 hours",
          onSelectChange: handleTimeFormatChange,
          className: responsiveInput
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Hide timezone abbreviation in email, widget and dashboard.",
          checked: settings?.settings?.hide_time_zone,
          onChange: handleHideTimezoneChange
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Currency format",
      description: "Set a default currency.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "",
          options: currencyOptions,
          selected: settings?.settings?.widget_style_settings?.currency_format === "sign" ? "Currency sign: $ / 元" : "Alphabets: USD / CAD / CNY",
          onSelectChange: handleCurrencyChange,
          className: responsiveInput
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Duration",
      description: "Set a default event duration.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "",
          options: durationOptions(),
          selected: settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_duration ? durationOptions()[settings.settings.admin_dashboard.default_duration - 1] : "1 hour",
          onSelectChange: val => handleDefaultDurationChange(val),
          className: responsiveInput
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Start / end time",
      description: "Set a default start and end time.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col md:flex-row gap-5 w-full min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Start time",
            time: getDefaultStartTime(),
            onChange: val => handleDefaultStartTimeChange(val),
            minValue: 0,
            maxValue: 12,
            timeFormat: settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a",
            className: responsiveInput
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "End time",
            time: getDefaultEndTime(),
            onChange: () => {},
            minValue: 0,
            maxValue: 60,
            disabled: true,
            timeFormat: settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a",
            className: responsiveInput
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Ticket price",
      description: "Set a default ticket price.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: settings && settings.settings && settings.settings.admin_dashboard ? settings.settings.admin_dashboard.default_price : 0.0,
          type: "number",
          align: "left",
          minValue: 0,
          disabled: isBillingPlanRestriction || !stripeConnected,
          onChange: newVal => handleDefaultPriceChange(newVal),
          className: responsiveInput
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Ticket quantity",
      description: `Set a default ticket quantity. The maximum number of tickets for your plan is ${settings?.free_registrants_limit || 15}`,
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: settings && settings.settings && settings.settings.admin_dashboard ? settings.settings.admin_dashboard.default_quantity : 0.0,
          type: "number",
          align: "left",
          minValue: 0,
          disabled: isBillingPlanRestriction ? 15 : null,
          onChange: newVal => handleDefaultQuantityChange(newVal),
          className: responsiveInput
        })
      })
    }), zoomAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Location",
      description: "Set a default event location.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "",
          buttons: eventTypes.map(type => type.label),
          active: settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_event_type ? eventTypes[eventTypes.map(type => type.value).indexOf(settings.settings.admin_dashboard.default_event_type)].label : "offline",
          disabled: isBillingPlanRestriction || !zoomAccount,
          onChange: newVal => handleDefaultTypeChange(newVal)
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/RemindersSettings.jsx":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Settings/RemindersSettings.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const RemindersSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  handleEmailRemindersStateChange,
  handleFirstReminderStateChange,
  handleFirstReminderHoursChange,
  handleSecondReminderStateChange,
  handleSecondReminderHoursChange,
  handleFinishedReminderStateChange,
  handleNewAdditionalEmailsChange,
  handleAdditionalRemindersHoursChange,
  handleStaffMemberEmailChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    className: responsiveBlockStack,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Email notifications",
      description: "Enable email notifications",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Enable email notifications",
          checked: settings?.settings?.disable_emails === false,
          onChange: handleEmailRemindersStateChange,
          disabled: isBillingPlanRestriction
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "First reminder",
      description: "Enable first reminder and specify time to first reminder",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "First reminder",
          checked: settings?.settings?.first_reminder,
          onChange: handleFirstReminderStateChange,
          disabled: isBillingPlanRestriction
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          value: settings ? settings.first_reminder_hours : 0,
          fullWidth: true,
          type: "number",
          align: "left",
          disabled: isBillingPlanRestriction,
          onChange: newVal => handleFirstReminderHoursChange(newVal),
          className: responsiveInput
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Second reminder",
      description: "Enable second reminder and specify time to second reminder",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Second reminder",
          checked: settings?.settings?.second_reminder,
          onChange: handleSecondReminderStateChange,
          disabled: isBillingPlanRestriction
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          value: settings ? settings.second_reminder_hours : 0,
          fullWidth: true,
          type: "number",
          align: "left",
          disabled: isBillingPlanRestriction,
          onChange: newVal => handleSecondReminderHoursChange(newVal),
          className: responsiveInput
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Finished reminder",
      description: "Send notification after the event has ended",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Finished reminder",
          disabled: isBillingPlanRestriction,
          checked: settings?.settings?.finished_reminder || 0,
          onChange: handleFinishedReminderStateChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Additional Email Notification Settings",
      description: "Set up extra email alerts and reminders for your events. You can choose to skip staff notifications or add reminder emails at specific times before the event",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "section-description",
              children: "Additional reminder emails list (comma-separated)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              value: settings ? settings.additional_reminder_emails : "",
              disabled: isBillingPlanRestriction,
              fullWidth: true,
              type: "text",
              align: "left",
              onChange: newVal => handleNewAdditionalEmailsChange(newVal),
              className: responsiveInput
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "section-description",
              children: "Additional reminder hours"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              value: settings ? settings.members_reminder_hours : 0,
              fullWidth: true,
              type: "number",
              align: "left",
              disabled: isBillingPlanRestriction,
              onChange: newVal => handleAdditionalRemindersHoursChange(newVal),
              className: responsiveInput
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Skip Staff Email Notification",
            disabled: isBillingPlanRestriction,
            checked: settings?.settings?.skip_members_in_calendar_files || 0,
            onChange: handleStaffMemberEmailChange
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemindersSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/SettingsSection.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Settings/SettingsSection.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// components/Settings/SettingsSection.jsx




const SettingsSection = ({
  icon: Icon,
  title = "General Settings",
  description = "Configure your general settings",
  statusText = "Settings configured",
  status = "available",
  // "available" | "unavailable"
  children,
  onSave,
  onCancel,
  onView,
  // callback for View button
  direct = false,
  // if true, shows View button instead of Edit settings
  showActions = true,
  sectionId,
  activeSection,
  setActiveSection
}) => {
  const isEditing = activeSection === sectionId;
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("card");
  const handleSave = () => {
    if (onSave) onSave();
  };
  const handleCancel = () => {
    if (onCancel) onCancel();
    setMode("closing");
    setTimeout(() => {
      setMode("card");
    }, 250);
    setTimeout(() => {
      setActiveSection(null);
    }, 248);
  };
  if (mode === "card" && !isEditing) {
    // CARD VIEW
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "settings-slide h-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "settings-card h-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex flex-col justify-center items-center p-4 gap-3 w-full min-w-[330px] bg-white border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl h-full flex-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col items-start gap-3 w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex justify-between items-center w-full h-16",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "relative w-16 h-16 flex items-center justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                    className: "w-full h-full text-[#6941C6] z-10"
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex flex-col gap-1 w-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "font-bold text-lg leading-7 text-[#181D27]",
                children: title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-base leading-6 text-[#717680]",
                children: description
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "w-full h-px bg-[#E6E6EB]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex justify-between items-center w-full h-10",
            children: [direct && onView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: onView,
              className: "flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-sm font-semibold text-[#414651]",
                children: "View"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => {
                setMode("editing");
                setActiveSection(sectionId);
              },
              className: "flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-sm font-semibold text-[#414651]",
                children: "Edit settings"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex items-center gap-1",
              children: status === "available" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  className: "w-5 h-5 text-[#039855]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-sm text-[#039855]",
                  children: statusText
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: "w-5 h-5 text-[#717680]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-sm text-[#717680]",
                  children: "Not configured"
                })]
              })
            })]
          })]
        })
      })
    });
  }

  // EDIT VIEW
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: `settings-slide ${mode === "closing" ? "settings-edit-exit" : "settings-edit-enter"}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            onClick: handleCancel,
            className: "flex items-center gap-2 mb-4 text-[#414651] hover:text-[#6941C6]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "w-5 h-5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-sm font-semibold",
              children: "Back to Settings"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            className: "dashboard-title",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "dashboard-description mt-4",
            children: description
          })]
        }), showActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "dashboard-actions mb-2 md:mb-0 md:flex flex-row items-center gap-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
            text: "Save",
            type: "primary",
            onAction: handleSave
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "py-6",
        children: children
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsSection);

/***/ }),

/***/ "./src/Components/Pages/Settings/TranslationsSection.jsx":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/Settings/TranslationsSection.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// components/Settings/TranslationsSettings.jsx




const TranslationsSection = ({
  responsiveBlockStack,
  responsiveInput,
  getLangsSelectOptions,
  getDefaultWidgetLanguageName,
  handleDefaultLanguageChange,
  langForEdit,
  handleSelectLanguageforEdit,
  renderTranslations
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    cardsLayout: true,
    className: responsiveBlockStack,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Default language for widgets",
      description: "Translate text in widgets to any language",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "Default language",
        options: getLangsSelectOptions().map(lang => lang.label),
        onSelectChange: handleDefaultLanguageChange,
        selected: getDefaultWidgetLanguageName(),
        className: responsiveInput
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Language for translate",
      description: "Before choosing the default language, select one from the list. Then, edit the widget fields and save the changes",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "Language",
        options: getLangsSelectOptions().map(lang => lang.label),
        onSelectChange: handleSelectLanguageforEdit,
        selected: getLangsSelectOptions().map(lang => lang.label).find(label => label.startsWith(langForEdit)),
        className: responsiveInput
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Global Widgets Translations",
      className: responsiveBlockStack,
      children: renderTranslations()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Events Widget Translations",
      className: responsiveBlockStack,
      children: renderTranslations("mainWidget")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationsSection);

/***/ }),

/***/ "./src/Components/Pages/Settings/WidgetSettings.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Pages/Settings/WidgetSettings.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// components/Settings/WidgetSettings.jsx







const WidgetSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInlineStack,
  responsiveInput,
  availableViewMods,
  selectedView,
  availablePageSizes,
  selectedPageSize,
  handleViewModeChange,
  handleChangeFluidGrid,
  handleDescriptionLengthChange,
  handlePageSizeChange,
  renderAvailableFilters,
  handleAdditionalPropertyChange
}) => {
  var _settings$settings$wi, _settings$settings$wi2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    className: responsiveBlockStack,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Display mode options",
      description: "These settings let you choose how your widget appears on the page. Each mode offers a unique experience, tailored to your needs.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "",
          options: availableViewMods,
          selected: selectedView,
          onSelectChange: handleViewModeChange,
          className: responsiveInput
        }), settings?.settings?.widget_style_settings?.ew_events_list_view === "grid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Fluid grid",
          checked: settings?.settings?.widget_style_settings?.ew_events_grid_fluid_mode || false,
          onChange: handleChangeFluidGrid
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Item settings",
      description: "Configure the display limits and default page sizes for various items.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 4,
          cardsLayout: true,
          align: "left",
          className: responsiveInlineStack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 2,
            cardsLayout: true,
            className: responsiveBlockStack,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "font-semibold",
              children: "Grid item description display limit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              value: (_settings$settings$wi = settings?.settings?.widget_style_settings?.ew_card_description_display_words_limit) !== null && _settings$settings$wi !== void 0 ? _settings$settings$wi : "",
              fullWidth: true,
              type: "number",
              align: "left",
              onChange: newVal => handleDescriptionLengthChange("ew_card_description_display_words_limit", newVal),
              suffix: "words",
              className: responsiveInput
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 2,
            cardsLayout: true,
            className: responsiveBlockStack,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "font-semibold",
              children: "List item description display limit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              value: (_settings$settings$wi2 = settings?.settings?.widget_style_settings?.ew_list_item_description_display_words_limit) !== null && _settings$settings$wi2 !== void 0 ? _settings$settings$wi2 : "",
              fullWidth: true,
              type: "number",
              align: "left",
              onChange: newVal => handleDescriptionLengthChange("ew_list_item_description_display_words_limit", newVal),
              suffix: "words",
              className: responsiveInput
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 1,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "font-semibold",
            children: "Default page size"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "",
            options: availablePageSizes,
            selected: selectedPageSize,
            onSelectChange: handlePageSizeChange,
            className: responsiveInput
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Filter settings",
      description: "Select the filters to be displayed on the event widget.",
      className: responsiveBlockStack,
      children: settings?.settings?.widget_style_settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        className: responsiveBlockStack,
        children: renderAvailableFilters()
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Additional widget display settings",
      description: "Select which parts of the events widget users can see. Also, adjust the visibility of different components",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "font-semibold border-b pb-1",
          children: "Widget elements"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show language selector",
          checked: settings?.settings?.widget_style_settings?.ew_show_language_selector || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_language_selector")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Display calendar permanently",
          checked: settings?.settings?.widget_style_settings?.permanently_open_calendar || true,
          onChange: () => handleAdditionalPropertyChange("permanently_open_calendar")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show events counter",
          checked: settings?.settings?.widget_style_settings?.ew_events_counter || false,
          onChange: () => handleAdditionalPropertyChange("ew_events_counter")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "View mode switch",
          checked: !settings?.settings?.widget_style_settings?.ew_hide_view_mode_switch || false,
          onChange: () => handleAdditionalPropertyChange("ew_hide_view_mode_switch")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "font-semibold border-b pb-1",
          children: "Item elements"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show event images",
          checked: settings?.settings?.widget_style_settings?.show_event_images || false,
          onChange: () => handleAdditionalPropertyChange("show_event_images")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show images as square",
          checked: settings?.settings?.widget_style_settings?.ew_image_aspect || false,
          onChange: () => handleAdditionalPropertyChange("ew_image_aspect")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show separator badges",
          checked: settings?.settings?.widget_style_settings?.show_events_list_separator_badge || false,
          onChange: () => handleAdditionalPropertyChange("show_events_list_separator_badge")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Share button",
          checked: settings?.settings?.widget_style_settings?.ew_show_share_button || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_share_button")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Event type badge",
          checked: settings?.settings?.widget_style_settings?.ew_show_event_type_badge || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_event_type_badge")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/WorkflowSettings.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Settings/WorkflowSettings.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _N8NSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../N8NSettings */ "./src/Components/Pages/N8NSettings.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// components/Settings/WorkflowSettings.jsx




const WorkflowSettings = ({
  responsiveBlockStack,
  responsiveInlineStack,
  n8nCurentSettings,
  updateN8NSettings
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    className: responsiveBlockStack,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
      gap: 4,
      cardsLayout: true,
      className: responsiveInlineStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_N8NSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
        n8nSettingsData: n8nCurentSettings,
        settingsUpdate: updateN8NSettings
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkflowSettings);

/***/ }),

/***/ "./src/Components/Pages/SettingsPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/SettingsPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.startcase */ "./node_modules/lodash.startcase/index.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_startcase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.capitalize */ "./node_modules/lodash.capitalize/index.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/BellIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Square3Stack3DIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var _utilities_translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/translations */ "./src/utilities/translations.js");
/* harmony import */ var _utilities_languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/languages */ "./src/utilities/languages.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Settings/SettingsSection */ "./src/Components/Pages/Settings/SettingsSection.jsx");
/* harmony import */ var _Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Settings/GeneralSettings */ "./src/Components/Pages/Settings/GeneralSettings.jsx");
/* harmony import */ var _Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Settings/RemindersSettings */ "./src/Components/Pages/Settings/RemindersSettings.jsx");
/* harmony import */ var _Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Settings/CheckoutSettings */ "./src/Components/Pages/Settings/CheckoutSettings.jsx");
/* harmony import */ var _Settings_WidgetSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Settings/WidgetSettings */ "./src/Components/Pages/Settings/WidgetSettings.jsx");
/* harmony import */ var _Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Settings/TranslationsSection */ "./src/Components/Pages/Settings/TranslationsSection.jsx");
/* harmony import */ var _Settings_BillingSettings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Settings/BillingSettings */ "./src/Components/Pages/Settings/BillingSettings.jsx");
/* harmony import */ var _Settings_WorkflowSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Settings/WorkflowSettings */ "./src/Components/Pages/Settings/WorkflowSettings.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
// SettingsPage.jsx - Refactored with card layout


















// Import new components









const SettingsPage = () => {
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [billingPlans, setBillingPlans] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showPaymentForm, setShowPaymentForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [zoomAccount, setZoomAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeAccount, setStripeAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [stripeForm, setStripeForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [defaultEndTime, setDefaultEndTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  const [tabsList, setTabsList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [n8nCurentSettings, setN8nSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isN8NSettingsUpdated, setIsN8NSettingsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [langForEdit, setLangForEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("English");
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const stripeConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_11__.useServvStore)(s => s.stripeConnected);
  const timezones = Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_8__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_8__.timezonesList[zone]
  }));
  const viewModeOptions = [{
    label: "List",
    value: "list"
  }, {
    label: "Grid",
    value: "grid"
  }];
  const pageSizes = [{
    label: "12 items",
    value: 12
  }, {
    label: "24 items",
    value: 24
  }, {
    label: "48 items",
    value: 48
  }];
  const filters = ["Locations", "Languages", "Categories", "Members"];
  const availableViewMods = viewModeOptions.map(opt => opt.label);
  const availablePageSizes = pageSizes.map(opt => opt.label);
  const timeOptions = [{
    label: "24 hours",
    value: 24
  }, {
    label: "12 hours",
    value: 12
  }].map(format => format.label);
  const eventTypes = [{
    label: "Event",
    value: "offline"
  }, {
    label: "Zoom Event",
    value: "zoom"
  }];
  const currencyOptions = [{
    label: "Currency sign: $ / 元"
  }, {
    label: "Alphabets: USD / CAD / CNY"
  }].map(format => format.label);

  // Responsive helpers
  const responsiveBlockStack = "w-full min-w-0";
  const responsiveInlineStack = "flex-col md:flex-row w-full min-w-0";
  const responsiveInput = "w-full min-w-0";

  // All the handler functions and utility functions from original file
  // ... (keeping all existing functions: validateWidgetSettings, validateSettings, etc.)

  const validateWidgetSettings = async newSettings => {
    let settings = {
      ...newSettings
    };
    if (settings.ew_events_list_view === undefined) settings.ew_events_list_view = "list";
    if (settings.ew_events_grid_fluid_mode === undefined) settings.ew_events_grid_fluid_mode = false;
    if (settings.ew_card_description_display_words_limit === undefined) settings.ew_card_description_display_words_limit = 9;
    if (settings.ew_list_item_description_display_words_limit === undefined) settings.ew_list_item_description_display_words_limit = 9;
    if (settings.ew_events_list_page_size_default === undefined) settings.ew_events_list_page_size_default = 12;
    if (settings.available_filters === undefined) settings.available_filters = "locations,languages,categories,members";
    if (settings.ew_show_language_selector === undefined) settings.ew_show_language_selector = true;
    if (settings.ew_show_top_filters === undefined) settings.ew_show_top_filters = true;
    if (settings.show_calendar === undefined) settings.show_calendar = true;
    if (settings.permanently_open_calendar === undefined) settings.permanently_open_calendar = true;
    if (settings.show_widget_title === undefined) settings.show_widget_title = true;
    if (settings.ew_events_counter === undefined) settings.ew_events_counter = true;
    if (settings.ew_hide_view_mode_switch === undefined) settings.ew_hide_view_mode_switch = false;
    if (settings.show_event_images === undefined) settings.show_event_images = true;
    if (settings.ew_image_aspect === undefined) settings.ew_image_aspect = false;
    if (settings.show_events_list_separator_badge === undefined) settings.show_events_list_separator_badge = true;
    if (settings.ew_show_quantity === undefined) settings.ew_show_quantity = false;
    if (settings.ew_show_share_button === undefined) settings.ew_show_share_button = true;
    if (settings.ew_show_event_type_badge === undefined) settings.ew_show_event_type_badge = true;
    if (settings.translations === undefined) {
      settings.translations = (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_9__.mergeTranslations)((0,_utilities_translations__WEBPACK_IMPORTED_MODULE_9__.getTranslationsTpl)(), settings?.settings?.widget_style_settings?.translations || {});
    }
    return settings;
  };
  const validateSettings = async newSettings => {
    let validatedSettings = {
      ...newSettings
    };
    validatedSettings.settings.widget_style_settings = validatedSettings.settings.widget_style_settings.length > 0 ? JSON.parse(validatedSettings.settings.widget_style_settings) : {};
    validatedSettings.settings.admin_dashboard = validatedSettings.settings.admin_dashboard.length > 0 ? JSON.parse(validatedSettings.settings.admin_dashboard) : {};
    if (!newSettings?.settings?.admin_dashboard?.default_timezone) {
      validatedSettings.settings.admin_dashboard.default_timezone = "America/Los_Angeles";
    }
    if (!newSettings?.settings?.admin_dashboard?.default_duration) {
      validatedSettings.settings.admin_dashboard.default_duration = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_start_time) {
      validatedSettings.settings.admin_dashboard.default_start_time = moment__WEBPACK_IMPORTED_MODULE_1___default()("10:00 am", "hh:mm a").format("hh:mm a");
    }
    if (!newSettings?.settings?.admin_dashboard?.default_price) {
      validatedSettings.settings.admin_dashboard.default_price = 10.0;
    }
    if (!newSettings.settings) {
      validatedSettings.settings.time_format_24_hours = false;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_quantity) {
      validatedSettings.settings.admin_dashboard.default_quantity = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_event_type) {
      validatedSettings.settings.admin_dashboard.default_event_type = "offline";
    }
    if (!newSettings.currency || newSettings.currency.length === 0) {
      validatedSettings.currency = "sign";
    }
    if (!newSettings.settings) {
      validatedSettings.hide_time_zone = false;
    }
    if (!newSettings.first_reminder_hours) {
      validatedSettings.first_reminder_hours = 24;
    }
    if (!newSettings.second_reminder_hours) {
      validatedSettings.second_reminder_hours = 2;
    }
    validatedSettings.settings.widget_style_settings = await validateWidgetSettings(validatedSettings.settings.widget_style_settings);
    const baseTabs = [{
      label: "General",
      value: 0
    }, {
      label: "Reminders",
      value: 1
    }];
    const widgetTabs = [{
      label: "Widget",
      value: 5
    }, {
      label: "Translations",
      value: 6
    }];
    const billingTab = {
      label: "Billing",
      value: 7
    };
    const planId = validatedSettings?.current_plan?.id;
    let tabs = [...baseTabs];
    if (planId) {
      if (!newSettings.is_wp_marketplace) {
        tabs.push(...widgetTabs);
      }
      tabs.push(billingTab);
    } else {
      tabs.push(...widgetTabs, billingTab);
    }
    setTabsList(tabs);
    setSettings({
      ...validatedSettings
    });
  };
  const updateN8NSettings = newVal => {
    setN8nSettings({
      ...newVal
    });
    setIsN8NSettingsUpdated(true);
  };
  const getN8nSettings = async () => {
    setLoading(true);
    const getN8nResponse = await axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/wp-json/servv-plugin/v1/n8n/settings", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getN8nResponse?.status === 200) {
      setN8nSettings(getN8nResponse.data);
    }
    setLoading(false);
  };
  const saveN8nSettings = async () => {
    setLoading(true);
    let settingsForSave = n8nCurentSettings;
    if (settingsForSave?.new_booking_url?.length > 0 && !settingsForSave.new_booking_method?.length) {
      settingsForSave.new_booking_method = "POST";
    }
    if (settingsForSave?.canceled_booking_url?.length > 0 && !settingsForSave.canceled_booking_method?.length) {
      settingsForSave.canceled_booking_method = "POST";
    }
    if (settingsForSave?.event_created_url?.length > 0 && !settingsForSave.event_created_method?.length) {
      settingsForSave.event_created_method = "POST";
    }
    const saveN8nResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/n8n/settings",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: n8nCurentSettings
    });
    if (saveN8nResponse?.status === 200) {
      setLoading(false);
    }
  };
  const getSettings = async () => {
    const getSettingsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])("/wp-json/servv-plugin/v1/shop/info", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(() => (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Servv unable to fetch settings."));
    if (getSettingsResponse?.status === 200) {
      await validateSettings(getSettingsResponse.data);
    }
  };
  const getBillingPlans = async () => {
    const getBillingPlansResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])("/wp-json/servv-plugin/v1/shop/paymentplans", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(() => (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Servv unable to fetch billing plans."));
    if (getBillingPlansResponse?.status === 200) {
      setBillingPlans(getBillingPlansResponse.data.plans);
    }
  };
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getZoomAccountResponse?.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
  };
  const getStripeAccount = async () => {
    const getStripeAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getStripeAccountResponse?.status === 200) {
      setStripeAccount(getStripeAccountResponse.data);
    }
  };
  const defaultWidgetLanguage = settings?.settings?.widget_style_settings?.widgets_default_language || "en";
  const translations = (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_9__.mergeTranslations)((0,_utilities_translations__WEBPACK_IMPORTED_MODULE_9__.getTranslationsTpl)(), settings?.settings?.widget_style_settings?.translations || {});
  const getDefaultWidgetLanguageName = () => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_10__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.value === defaultWidgetLanguage)[0]?.label;
    return langCode || "English";
  };
  const saveSettings = async () => {
    setLoading(true);
    const saveSettingsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/shop/settings",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...settings,
        settings: {
          ...settings.settings,
          admin_dashboard: JSON.stringify(settings.settings.admin_dashboard),
          widget_style_settings: JSON.stringify(settings.settings.widget_style_settings)
        }
      }
    }).catch(err => console.error(err));
    if (saveSettingsResponse?.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Settings saved successfully.");
    }
    setLoading(false);
  };
  const saveAllSettings = async () => {
    if (servvData.servv_plugin_mode === "development") {
      await saveSettings();
      if (isN8NSettingsUpdated) {
        await saveN8nSettings();
      }
    } else {
      saveSettings();
      if (isN8NSettingsUpdated) {
        saveN8nSettings();
      }
    }
  };
  const getSettingsInfo = async () => {
    if (servvData.servv_plugin_mode === "development") {
      setLoading(true);
      await getSettings();
      await getBillingPlans();
      await getN8nSettings();
      if (settings?.current_plan?.id !== 1) {
        await getZoomAccount();
        await getStripeAccount();
      }
      setLoading(false);
    } else {
      setLoading(true);
      getSettings();
      getBillingPlans();
      getN8nSettings();
      if (settings?.current_plan?.id !== 1) {
        getZoomAccount();
        getStripeAccount();
      }
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getSettingsInfo();
  }, []);
  const durationOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      if (i === 1) options.push({
        label: "1 hour",
        value: 1
      });else options.push({
        label: `${i} hours`,
        value: i
      });
    }
    return options.map(option => option.label);
  };

  // All handler functions
  const handleTimezoneChange = zone => {
    let currentSettings = {
      ...settings
    };
    let currentSelectedTimezone = timezones.findIndex(timezone => timezone.name === zone);
    if (currentSelectedTimezone >= 0) {
      currentSettings.settings.admin_dashboard.default_timezone = timezones[currentSelectedTimezone].id;
      setSettings(currentSettings);
    }
  };
  const handleDefaultStartTimeChange = newVal => {
    let currentSettings = {
      ...settings
    };
    let newTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(newVal);
    currentSettings.settings.admin_dashboard.default_start_time = newTime.format("hh:mm a");
    setDefaultEndTime(newTime.add(currentSettings.settings.admin_dashboard.default_duration, "hours"));
    setSettings(currentSettings);
  };
  const handleDefaultDurationChange = newVal => {
    let currentSettings = {
      ...settings
    };
    let duration = durationOptions().indexOf(newVal);
    currentSettings.settings.admin_dashboard.default_duration = duration + 1;
    const newTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(currentSettings.settings.admin_dashboard.default_start_time, "hh:mm a");
    setDefaultEndTime(newTime.add(duration + 1, "hours"));
    setSettings(currentSettings);
  };
  const showPaymentOptions = plan => {
    setSelectedPlan(plan);
    setShowPaymentOptionsModal(true);
  };
  const handleTimeFormatChange = format => {
    let currentSettings = {
      ...settings
    };
    const newFormat = format === "24 hours";
    currentSettings.settings.time_format_24_hours = newFormat;
    setSettings(currentSettings);
  };
  const handleHideTimezoneChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.hide_time_zone = !currentSettings.settings.hide_time_zone;
    setSettings(currentSettings);
  };
  const handleCurrencyChange = currencyFormat => {
    let currentSettings = {
      ...settings
    };
    if (currencyFormat === "Alphabets: USD / CAD / CNY") currentSettings.settings.widget_style_settings.currency_format = "alphabets";else currentSettings.settings.widget_style_settings.currency_format = "sign";
    setSettings(currentSettings);
  };
  const handleDefaultPriceChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.admin_dashboard.default_price = newVal;
    setSettings(currentSettings);
  };
  const handleDefaultQuantityChange = newVal => {
    let currentSettings = {
      ...settings
    };
    if (newVal <= settings.free_registrants_limit) currentSettings.settings.admin_dashboard.default_quantity = newVal;
    setSettings(currentSettings);
  };
  const getDefaultStartTime = () => {
    if (settings?.settings?.admin_dashboard?.default_start_time) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(settings.settings.admin_dashboard.default_start_time, "hh:mm a");
    }
    return moment__WEBPACK_IMPORTED_MODULE_1___default()("10:00 am", "hh:mm a");
  };
  const handleEmailRemindersStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.disable_emails = !currentSettings.settings.disable_emails;
    setSettings(currentSettings);
  };
  const handleFirstReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.first_reminder = !currentSettings.settings.first_reminder;
    setSettings(currentSettings);
  };
  const handleSecondReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.second_reminder = !currentSettings.settings.second_reminder;
    setSettings(currentSettings);
  };
  const handleFinishedReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.finished_reminder = !currentSettings.settings.finished_reminder;
    setSettings(currentSettings);
  };
  const handleFirstReminderHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.first_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleSecondReminderHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.second_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleDefaultTypeChange = newVal => {
    let currentSettings = {
      ...settings
    };
    if (newVal === "Zoom Event") currentSettings.settings.admin_dashboard.default_event_type = "online";else currentSettings.settings.admin_dashboard.default_event_type = "offline";
    setSettings(currentSettings);
  };
  const handleFreeCheckoutChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_events_skip_checkout = !currentSettings.settings.free_events_skip_checkout;
    setSettings(currentSettings);
  };
  const handleSkipCaptchaChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_events_skip_captcha = !currentSettings.settings.free_events_skip_captcha;
    setSettings(currentSettings);
  };
  const handleMarketingConsentChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_checkout_marketing_checkbox = !currentSettings.settings.free_checkout_marketing_checkbox;
    setSettings(currentSettings);
  };
  const handleNewAdditionalEmailsChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.additional_reminder_emails = newVal;
    setSettings(currentSettings);
  };
  const handleAdditionalRemindersHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.members_reminder_hours = newVal;
    setSettings(currentSettings);
  };
  const handleStaffMemberEmailChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.skip_members_in_calendar_files = !currentSettings.settings.skip_members_in_calendar_files;
    setSettings(currentSettings);
  };
  const getDefaultEndTime = () => {
    if (settings?.settings?.admin_dashboard?.default_start_time && settings?.settings?.admin_dashboard?.default_duration) {
      let newTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(settings.settings.admin_dashboard.default_start_time, "hh:mm a");
      newTime.add(settings.settings.admin_dashboard.default_duration, "hours");
      return newTime;
    }
    return moment__WEBPACK_IMPORTED_MODULE_1___default()("11:00 am", "hh:mm a");
  };
  const handleViewModeChange = val => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_list_view = val.toLowerCase();
    setSettings(currentSettings);
  };
  const handleChangeFluidGrid = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode = !currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode;
    setSettings(currentSettings);
  };
  const selectedView = settings?.settings?.widget_style_settings?.ew_events_list_view ? viewModeOptions[viewModeOptions.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_view)].label : "List";
  const selectedPageSize = settings?.settings?.widget_style_settings?.ew_events_list_page_size_default && pageSizes.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_page_size_default) >= 0 ? pageSizes[pageSizes.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_page_size_default)].label : "12 items";
  const handleDescriptionLengthChange = (view, length) => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings[view] = Number.parseInt(length);
    setSettings(currentSettings);
  };
  const handlePageSizeChange = val => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_list_page_size_default = Number.parseInt(val.split(" ")[0]);
    setSettings(currentSettings);
  };
  const handleSelectedFilterChange = filter => {
    let currentSettings = {
      ...settings
    };
    const filterSettings = settings.settings.widget_style_settings.available_filters || "";
    let selectedFilters = filterSettings.split(",").filter(f => f.length > 0);
    if (selectedFilters.indexOf(filter) >= 0) {
      selectedFilters = selectedFilters.filter(fil => fil !== filter);
    } else {
      selectedFilters.push(filter);
    }
    currentSettings.settings.widget_style_settings.available_filters = selectedFilters.join(",");
    setSettings(currentSettings);
  };
  const handleSelectLanguageforEdit = newVal => setLangForEdit(newVal);
  const renderAvailableFilters = () => {
    const filterSettings = settings.settings.widget_style_settings.available_filters || "";
    const selectedFilters = filterSettings.split(",");
    return filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: filter,
      checked: selectedFilters.some(f => f.toLowerCase() === filter.toLowerCase()),
      onChange: () => handleSelectedFilterChange(filter.toLowerCase())
    }, index));
  };
  const handleAdditionalPropertyChange = prop => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings[prop] = !currentSettings.settings.widget_style_settings[prop];
    setSettings(currentSettings);
  };
  const getLangsSelectOptions = () => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_10__.getLanguagesList)();
    const currentLanguagesList = Object.keys(translations);
    return fullList.filter(lang => currentLanguagesList.includes(lang.value));
  };
  const handleDefaultLanguageChange = newVal => {
    let currentSettings = {
      ...settings
    };
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_10__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.label === newVal)[0]?.value;
    if (langCode) {
      currentSettings.settings.widget_style_settings.widgets_default_language = langCode;
      setSettings(currentSettings);
    }
  };
  const handleTranslationChange = (section, lang, field, newVal) => {
    let currentSettings = {
      ...settings
    };
    settings.settings.widget_style_settings.translations[lang][section][field] = newVal;
    setSettings(currentSettings);
  };
  const renderTranslations = (section = "globalWidgetsTranslations") => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_10__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.label === langForEdit)[0]?.value || "en";
    if (!langCode) return null;
    const translationSection = settings?.settings?.widget_style_settings?.translations?.[langCode]?.[section] || {};
    return Object.keys(translationSection).map((translation, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_14__["default"], {
      gap: 1,
      className: responsiveBlockStack,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: "font-semibold",
        children: lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default()(lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default()(translation))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: translationSection[translation],
        fullWidth: true,
        type: "text",
        align: "left",
        suffix: langCode,
        onChange: newVal => handleTranslationChange(section, langCode, translation, newVal)
      })]
    }, index));
  };
  const getPortalLink = async () => {
    setLoading(true);
    const getPortalLink = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])({
      url: "/wp-json/servv-plugin/v1/shop/billing/portal/session",
      method: "POST",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(() => {
      setLoading(false);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Servv unable to open billing portal.");
    });
    if (getPortalLink?.status === 200) {
      setLoading(false);
      return getPortalLink.data;
    }
  };
  const handleOpenPortal = async () => {
    const link = await getPortalLink();
    if (link) {
      open(link.redirect_url, "_blank");
    }
  };
  const activateBillingPlan = async (id, isAnnual = false) => {
    setLoading(true);
    setShowPaymentOptionsModal(false);
    const saveSettingsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_24__["default"])({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        is_annual: isAnnual
      }
    });
    if (saveSettingsResponse?.status === 200) {
      const {
        client_secret,
        public_key
      } = saveSettingsResponse.data;
      const stripe = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(public_key);
      const handleComplete = async function () {
        checkout.destroy();
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Your billing plan has been successfully activated.");
        await getSettings();
        setShowPaymentForm(false);
      };
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete
      });
      setShowPaymentForm(true);
      const form = checkout.mount("#servv-payment-element");
      setStripeForm(checkout);
    }
    setLoading(false);
  };
  const renderBillingPlans = () => {
    if (!settings?.current_plan || !billingPlans) return null;
    return billingPlans.map(plan => {
      const isCurrent = settings.current_plan.id === plan.id;
      const isUpgradeable = plan.id > settings.current_plan.id;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: `flex flex-col h-full rounded-lg border ${isCurrent ? "border-brand-500 bg-brand-50" : "border-gray-200 bg-white"} p-lg`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex items-start justify-between gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h2", {
              className: "text-lg font-semibold text-gray-900",
              children: plan.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "mt-1 min-h-[1.25rem] flex flex-wrap items-center gap-2 text-sm text-gray-600",
              children: [(plan.price > 0 || plan.price_annual > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
                children: plan.price > 0 ? `$${plan.price}/mo` : `$${plan.price_annual}/yr`
              }), plan.application_fee_percent > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
                children: ["\xB7 ", plan.application_fee_percent, "% fee"]
              })]
            })]
          }), isCurrent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
            className: "text-xs font-semibold text-brand-700 bg-brand-100 px-2 py-1 rounded-full",
            children: "Current"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("ul", {
          className: "mt-4 space-y-2",
          children: plan.features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("li", {
            className: "flex items-start gap-2",
            children: [feature.value === "true" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__["default"], {
              className: "w-5 h-5 text-success-600 shrink-0"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: "w-5 h-5 text-error-600 shrink-0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
              className: "text-sm text-gray-700",
              children: feature.title
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: "mt-auto pt-6",
          children: isCurrent ? (plan.price > 0 || plan.price_annual > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "w-full rounded-lg border border-brand-300 text-sm font-semibold text-brand-700 bg-white px-lg py-md shadow-combined-brand",
            onClick: handleOpenPortal,
            children: "Manage"
          }) : isUpgradeable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "w-full rounded-lg px-lg py-md text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700",
            onClick: () => showPaymentOptions(plan),
            children: "Activate"
          })
        })]
      }, plan.id);
    });
  };
  const isBillingPlanRestriction = settings?.current_plan && settings.current_plan.id === 1;
  console.log(loading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "servv-dashboard-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h1", {
            className: "dashboard-title",
            children: "Settings"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("p", {
            className: "dashboard-description mt-4",
            children: "Set default values for new events to save time"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "py-0 my-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6 items-stretch",
          children: [(!activeSection || activeSection === "general") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__["default"],
            title: "General",
            description: "Time zone, format and event defaults",
            statusText: "General settings configured",
            status: "available",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            sectionId: "general",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_16__["default"], {
              settings: settings,
              timezones: timezones,
              timeOptions: timeOptions,
              currencyOptions: currencyOptions,
              durationOptions: durationOptions,
              eventTypes: eventTypes,
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              isBillingPlanRestriction: isBillingPlanRestriction,
              stripeConnected: stripeConnected,
              zoomAccount: zoomAccount,
              handleTimezoneChange: handleTimezoneChange,
              handleTimeFormatChange: handleTimeFormatChange,
              handleHideTimezoneChange: handleHideTimezoneChange,
              handleCurrencyChange: handleCurrencyChange,
              handleDefaultDurationChange: handleDefaultDurationChange,
              handleDefaultStartTimeChange: handleDefaultStartTimeChange,
              getDefaultStartTime: getDefaultStartTime,
              getDefaultEndTime: getDefaultEndTime,
              handleDefaultPriceChange: handleDefaultPriceChange,
              handleDefaultQuantityChange: handleDefaultQuantityChange,
              handleDefaultTypeChange: handleDefaultTypeChange
            })
          }), (!activeSection || activeSection === "reminders") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__["default"],
            title: "Reminders",
            description: "Email notifications and reminder settings",
            statusText: settings?.settings?.disable_emails === false ? "Reminders enabled" : "Reminders disabled",
            status: settings?.settings?.disable_emails === false ? "available" : "unavailable",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            sectionId: "reminders",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
              settings: settings,
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              isBillingPlanRestriction: isBillingPlanRestriction,
              handleEmailRemindersStateChange: handleEmailRemindersStateChange,
              handleFirstReminderStateChange: handleFirstReminderStateChange,
              handleFirstReminderHoursChange: handleFirstReminderHoursChange,
              handleSecondReminderStateChange: handleSecondReminderStateChange,
              handleSecondReminderHoursChange: handleSecondReminderHoursChange,
              handleFinishedReminderStateChange: handleFinishedReminderStateChange,
              handleNewAdditionalEmailsChange: handleNewAdditionalEmailsChange,
              handleAdditionalRemindersHoursChange: handleAdditionalRemindersHoursChange,
              handleStaffMemberEmailChange: handleStaffMemberEmailChange
            })
          }), !activeSection || activeSection === "checkout" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__["default"],
            title: "Checkout",
            description: "Fast checkout and marketing consent settings",
            statusText: settings?.settings?.free_events_skip_checkout ? "Fast checkout enabled" : "Standard checkout",
            status: "available",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            sectionId: "checkout",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_18__["default"], {
              settings: settings,
              handleFreeCheckoutChange: handleFreeCheckoutChange,
              handleSkipCaptchaChange: handleSkipCaptchaChange,
              handleMarketingConsentChange: handleMarketingConsentChange
            })
          }), (!activeSection || activeSection === "widget") && settings && settings.is_wp_marketplace === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__["default"],
            title: "Widget",
            description: "Display mode, filters, and widget elements",
            statusText: "Widget configured",
            status: "available",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            sectionId: "widget",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_WidgetSettings__WEBPACK_IMPORTED_MODULE_19__["default"], {
              settings: settings,
              responsiveBlockStack: responsiveBlockStack,
              responsiveInlineStack: responsiveInlineStack,
              responsiveInput: responsiveInput,
              availableViewMods: availableViewMods,
              selectedView: selectedView,
              availablePageSizes: availablePageSizes,
              selectedPageSize: selectedPageSize,
              handleViewModeChange: handleViewModeChange,
              handleChangeFluidGrid: handleChangeFluidGrid,
              handleDescriptionLengthChange: handleDescriptionLengthChange,
              handlePageSizeChange: handlePageSizeChange,
              renderAvailableFilters: renderAvailableFilters,
              handleAdditionalPropertyChange: handleAdditionalPropertyChange
            })
          }), (!activeSection || activeSection === "translations") && settings && settings.is_wp_marketplace === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__["default"],
            title: "Translations",
            description: "Translate widget text to any language",
            statusText: `Default: ${getDefaultWidgetLanguageName()}`,
            status: "available",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            sectionId: "translations",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_20__["default"], {
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              getLangsSelectOptions: getLangsSelectOptions,
              getDefaultWidgetLanguageName: getDefaultWidgetLanguageName,
              handleDefaultLanguageChange: handleDefaultLanguageChange,
              langForEdit: langForEdit,
              handleSelectLanguageforEdit: handleSelectLanguageforEdit,
              renderTranslations: renderTranslations
            })
          }), (!activeSection || activeSection === "billing") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__["default"],
            title: "Billing",
            description: "Manage your subscription and payment plans",
            statusText: settings?.current_plan?.name || "No plan",
            status: "available",
            onSave: saveAllSettings,
            onCancel: getSettingsInfo,
            showActions: false,
            sectionId: "billing",
            activeSection: activeSection,
            setActiveSection: setActiveSection,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Settings_BillingSettings__WEBPACK_IMPORTED_MODULE_21__["default"], {
              responsiveBlockStack: responsiveBlockStack,
              showPaymentForm: showPaymentForm,
              renderBillingPlans: renderBillingPlans,
              showPaymentOptionsModal: showPaymentOptionsModal,
              setShowPaymentOptionsModal: setShowPaymentOptionsModal,
              selectedPlan: selectedPlan,
              setSelectedPlan: setSelectedPlan,
              activateBillingPlan: activateBillingPlan
            })
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

/***/ }),

/***/ "./src/utilities/languages.js":
/*!************************************!*\
  !*** ./src/utilities/languages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLanguageOption: () => (/* binding */ getLanguageOption),
/* harmony export */   getLanguagesList: () => (/* binding */ getLanguagesList)
/* harmony export */ });
const languagesList = [{
  code: "ab",
  name: "Abkhaz",
  nativeName: "аҧсуа"
}, {
  code: "aa",
  name: "Afar",
  nativeName: "Afaraf"
}, {
  code: "af",
  name: "Afrikaans",
  nativeName: "Afrikaans"
}, {
  code: "ak",
  name: "Akan",
  nativeName: "Akan"
}, {
  code: "sq",
  name: "Albanian",
  nativeName: "Shqip"
}, {
  code: "am",
  name: "Amharic",
  nativeName: "አማርኛ"
}, {
  code: "ar",
  name: "Arabic",
  nativeName: "العربية"
}, {
  code: "an",
  name: "Aragonese",
  nativeName: "Aragonés"
}, {
  code: "hy",
  name: "Armenian",
  nativeName: "Հայերեն"
}, {
  code: "as",
  name: "Assamese",
  nativeName: "অসমীয়া"
}, {
  code: "av",
  name: "Avaric",
  nativeName: "авар мацӀ, магӀарул мацӀ"
}, {
  code: "ae",
  name: "Avestan",
  nativeName: "avesta"
}, {
  code: "ay",
  name: "Aymara",
  nativeName: "aymar aru"
}, {
  code: "az",
  name: "Azerbaijani",
  nativeName: "azərbaycan dili"
}, {
  code: "bm",
  name: "Bambara",
  nativeName: "bamanankan"
}, {
  code: "ba",
  name: "Bashkir",
  nativeName: "башҡорт теле"
}, {
  code: "eu",
  name: "Basque",
  nativeName: "euskara, euskera"
}, {
  code: "be",
  name: "Belarusian",
  nativeName: "Беларуская"
}, {
  code: "bn",
  name: "Bengali",
  nativeName: "বাংলা"
}, {
  code: "bh",
  name: "Bihari",
  nativeName: "भोजपुरी"
}, {
  code: "bi",
  name: "Bislama",
  nativeName: "Bislama"
}, {
  code: "bs",
  name: "Bosnian",
  nativeName: "bosanski jezik"
}, {
  code: "br",
  name: "Breton",
  nativeName: "brezhoneg"
}, {
  code: "bg",
  name: "Bulgarian",
  nativeName: "български език"
}, {
  code: "my",
  name: "Burmese",
  nativeName: "ဗမာစာ"
}, {
  code: "ca",
  name: "Catalan; Valencian",
  nativeName: "Català"
}, {
  code: "ch",
  name: "Chamorro",
  nativeName: "Chamoru"
}, {
  code: "ce",
  name: "Chechen",
  nativeName: "нохчийн мотт"
}, {
  code: "ny",
  name: "Chichewa; Chewa; Nyanja",
  nativeName: "chiCheŵa, chinyanja"
}, {
  code: "zh-cn",
  name: "Chinese",
  nativeName: "中文 (Zhōngwén), 汉语, 漢語"
}, {
  code: "cv",
  name: "Chuvash",
  nativeName: "чӑваш чӗлхи"
}, {
  code: "kw",
  name: "Cornish",
  nativeName: "Kernewek"
}, {
  code: "co",
  name: "Corsican",
  nativeName: "corsu, lingua corsa"
}, {
  code: "cr",
  name: "Cree",
  nativeName: "ᓀᐦᐃᔭᐍᐏᐣ"
}, {
  code: "hr",
  name: "Croatian",
  nativeName: "hrvatski"
}, {
  code: "cs",
  name: "Czech",
  nativeName: "česky, čeština"
}, {
  code: "da",
  name: "Danish",
  nativeName: "dansk"
}, {
  code: "dv",
  name: "Divehi; Dhivehi; Maldivian;",
  nativeName: "ދިވެހި"
}, {
  code: "nl",
  name: "Dutch",
  nativeName: "Nederlands, Vlaams"
}, {
  code: "en",
  name: "English",
  nativeName: "English"
}, {
  code: "eo",
  name: "Esperanto",
  nativeName: "Esperanto"
}, {
  code: "et",
  name: "Estonian",
  nativeName: "eesti, eesti keel"
}, {
  code: "ee",
  name: "Ewe",
  nativeName: "Eʋegbe"
}, {
  code: "fo",
  name: "Faroese",
  nativeName: "føroyskt"
}, {
  code: "fj",
  name: "Fijian",
  nativeName: "vosa Vakaviti"
}, {
  code: "fi",
  name: "Finnish",
  nativeName: "suomi, suomen kieli"
}, {
  code: "fr",
  name: "French",
  nativeName: "français, langue française"
}, {
  code: "ff",
  name: "Fula; Fulah; Pulaar; Pular",
  nativeName: "Fulfulde, Pulaar, Pular"
}, {
  code: "gl",
  name: "Galician",
  nativeName: "Galego"
}, {
  code: "ka",
  name: "Georgian",
  nativeName: "ქართული"
}, {
  code: "de",
  name: "German",
  nativeName: "Deutsch"
}, {
  code: "el",
  name: "Greek, Modern",
  nativeName: "Ελληνικά"
}, {
  code: "gn",
  name: "Guaraní",
  nativeName: "Avañeẽ"
}, {
  code: "gu",
  name: "Gujarati",
  nativeName: "ગુજરાતી"
}, {
  code: "ht",
  name: "Haitian; Haitian Creole",
  nativeName: "Kreyòl ayisyen"
}, {
  code: "ha",
  name: "Hausa",
  nativeName: "Hausa, هَوُسَ"
}, {
  code: "he",
  name: "Hebrew (modern)",
  nativeName: "עברית"
}, {
  code: "hz",
  name: "Herero",
  nativeName: "Otjiherero"
}, {
  code: "hi",
  name: "Hindi",
  nativeName: "हिन्दी, हिंदी"
}, {
  code: "ho",
  name: "Hiri Motu",
  nativeName: "Hiri Motu"
}, {
  code: "hu",
  name: "Hungarian",
  nativeName: "Magyar"
}, {
  code: "ia",
  name: "Interlingua",
  nativeName: "Interlingua"
}, {
  code: "id",
  name: "Indonesian",
  nativeName: "Bahasa Indonesia"
}, {
  code: "ie",
  name: "Interlingue",
  nativeName: "Originally called Occidental; then Interlingue after WWII"
}, {
  code: "ga",
  name: "Irish",
  nativeName: "Gaeilge"
}, {
  code: "ig",
  name: "Igbo",
  nativeName: "Asụsụ Igbo"
}, {
  code: "ik",
  name: "Inupiaq",
  nativeName: "Iñupiaq, Iñupiatun"
}, {
  code: "io",
  name: "Ido",
  nativeName: "Ido"
}, {
  code: "is",
  name: "Icelandic",
  nativeName: "Íslenska"
}, {
  code: "it",
  name: "Italian",
  nativeName: "Italiano"
}, {
  code: "iu",
  name: "Inuktitut",
  nativeName: "ᐃᓄᒃᑎᑐᑦ"
}, {
  code: "ja",
  name: "Japanese",
  nativeName: "日本語 (にほんご／にっぽんご)"
}, {
  code: "jv",
  name: "Javanese",
  nativeName: "basa Jawa"
}, {
  code: "kl",
  name: "Kalaallisut, Greenlandic",
  nativeName: "kalaallisut, kalaallit oqaasii"
}, {
  code: "kn",
  name: "Kannada",
  nativeName: "ಕನ್ನಡ"
}, {
  code: "kr",
  name: "Kanuri",
  nativeName: "Kanuri"
}, {
  code: "ks",
  name: "Kashmiri",
  nativeName: "कश्मीरी, كشميري‎"
}, {
  code: "kk",
  name: "Kazakh",
  nativeName: "Қазақ тілі"
}, {
  code: "km",
  name: "Khmer",
  nativeName: "ភាសាខ្មែរ"
}, {
  code: "ki",
  name: "Kikuyu, Gikuyu",
  nativeName: "Gĩkũyũ"
}, {
  code: "rw",
  name: "Kinyarwanda",
  nativeName: "Ikinyarwanda"
}, {
  code: "ky",
  name: "Kirghiz, Kyrgyz",
  nativeName: "кыргыз тили"
}, {
  code: "kv",
  name: "Komi",
  nativeName: "коми кыв"
}, {
  code: "kg",
  name: "Kongo",
  nativeName: "KiKongo"
}, {
  code: "ko",
  name: "Korean",
  nativeName: "한국어 (韓國語), 조선말 (朝鮮語)"
}, {
  code: "ku",
  name: "Kurdish",
  nativeName: "Kurdî, كوردی‎"
}, {
  code: "kj",
  name: "Kwanyama, Kuanyama",
  nativeName: "Kuanyama"
}, {
  code: "la",
  name: "Latin",
  nativeName: "latine, lingua latina"
}, {
  code: "lb",
  name: "Luxembourgish, Letzeburgesch",
  nativeName: "Lëtzebuergesch"
}, {
  code: "lg",
  name: "Luganda",
  nativeName: "Luganda"
}, {
  code: "li",
  name: "Limburgish, Limburgan, Limburger",
  nativeName: "Limburgs"
}, {
  code: "ln",
  name: "Lingala",
  nativeName: "Lingála"
}, {
  code: "lo",
  name: "Lao",
  nativeName: "ພາສາລາວ"
}, {
  code: "lt",
  name: "Lithuanian",
  nativeName: "lietuvių kalba"
}, {
  code: "lu",
  name: "Luba-Katanga",
  nativeName: ""
}, {
  code: "lv",
  name: "Latvian",
  nativeName: "latviešu valoda"
}, {
  code: "gv",
  name: "Manx",
  nativeName: "Gaelg, Gailck"
}, {
  code: "mk",
  name: "Macedonian",
  nativeName: "македонски јазик"
}, {
  code: "mg",
  name: "Malagasy",
  nativeName: "Malagasy fiteny"
}, {
  code: "ms",
  name: "Malay",
  nativeName: "bahasa Melayu, بهاس ملايو‎"
}, {
  code: "ml",
  name: "Malayalam",
  nativeName: "മലയാളം"
}, {
  code: "mt",
  name: "Maltese",
  nativeName: "Malti"
}, {
  code: "mi",
  name: "Māori",
  nativeName: "te reo Māori"
}, {
  code: "mr",
  name: "Marathi (Marāṭhī)",
  nativeName: "मराठी"
}, {
  code: "mh",
  name: "Marshallese",
  nativeName: "Kajin M̧ajeļ"
}, {
  code: "mn",
  name: "Mongolian",
  nativeName: "монгол"
}, {
  code: "na",
  name: "Nauru",
  nativeName: "Ekakairũ Naoero"
}, {
  code: "nv",
  name: "Navajo, Navaho",
  nativeName: "Diné bizaad, Dinékʼehǰí"
}, {
  code: "nb",
  name: "Norwegian Bokmål",
  nativeName: "Norsk bokmål"
}, {
  code: "nd",
  name: "North Ndebele",
  nativeName: "isiNdebele"
}, {
  code: "ne",
  name: "Nepali",
  nativeName: "नेपाली"
}, {
  code: "ng",
  name: "Ndonga",
  nativeName: "Owambo"
}, {
  code: "nn",
  name: "Norwegian Nynorsk",
  nativeName: "Norsk nynorsk"
}, {
  code: "no",
  name: "Norwegian",
  nativeName: "Norsk"
}, {
  code: "ii",
  name: "Nuosu",
  nativeName: "ꆈꌠ꒿ Nuosuhxop"
}, {
  code: "nr",
  name: "South Ndebele",
  nativeName: "isiNdebele"
}, {
  code: "oc",
  name: "Occitan",
  nativeName: "Occitan"
}, {
  code: "oj",
  name: "Ojibwe, Ojibwa",
  nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
}, {
  code: "cu",
  name: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
  nativeName: "ѩзыкъ словѣньскъ"
}, {
  code: "om",
  name: "Oromo",
  nativeName: "Afaan Oromoo"
}, {
  code: "or",
  name: "Oriya",
  nativeName: "ଓଡ଼ିଆ"
}, {
  code: "os",
  name: "Ossetian, Ossetic",
  nativeName: "ирон æвзаг"
}, {
  code: "pa",
  name: "Panjabi, Punjabi",
  nativeName: "ਪੰਜਾਬੀ, پنجابی‎"
}, {
  code: "pi",
  name: "Pāli",
  nativeName: "पाऴि"
}, {
  code: "fa",
  name: "Persian",
  nativeName: "فارسی"
}, {
  code: "pl",
  name: "Polish",
  nativeName: "polski"
}, {
  code: "ps",
  name: "Pashto, Pushto",
  nativeName: "پښتو"
}, {
  code: "pt",
  name: "Portuguese",
  nativeName: "Português"
}, {
  code: "qu",
  name: "Quechua",
  nativeName: "Runa Simi, Kichwa"
}, {
  code: "rm",
  name: "Romansh",
  nativeName: "rumantsch grischun"
}, {
  code: "rn",
  name: "Kirundi",
  nativeName: "kiRundi"
}, {
  code: "ro",
  name: "Romanian, Moldavian, Moldovan",
  nativeName: "română"
}, {
  code: "ru",
  name: "Russian",
  nativeName: "русский язык"
}, {
  code: "sa",
  name: "Sanskrit (Saṁskṛta)",
  nativeName: "संस्कृतम्"
}, {
  code: "sc",
  name: "Sardinian",
  nativeName: "sardu"
}, {
  code: "sd",
  name: "Sindhi",
  nativeName: "सिन्धी, سنڌي، سندھی‎"
}, {
  code: "se",
  name: "Northern Sami",
  nativeName: "Davvisámegiella"
}, {
  code: "sm",
  name: "Samoan",
  nativeName: "gagana faa Samoa"
}, {
  code: "sg",
  name: "Sango",
  nativeName: "yângâ tî sängö"
}, {
  code: "sr",
  name: "Serbian",
  nativeName: "српски језик"
}, {
  code: "gd",
  name: "Scottish Gaelic; Gaelic",
  nativeName: "Gàidhlig"
}, {
  code: "sn",
  name: "Shona",
  nativeName: "chiShona"
}, {
  code: "si",
  name: "Sinhala, Sinhalese",
  nativeName: "සිංහල"
}, {
  code: "sk",
  name: "Slovak",
  nativeName: "slovenčina"
}, {
  code: "sl",
  name: "Slovene",
  nativeName: "slovenščina"
}, {
  code: "so",
  name: "Somali",
  nativeName: "Soomaaliga, af Soomaali"
}, {
  code: "st",
  name: "Southern Sotho",
  nativeName: "Sesotho"
}, {
  code: "es",
  name: "Spanish",
  nativeName: "español, castellano"
}, {
  code: "su",
  name: "Sundanese",
  nativeName: "Basa Sunda"
}, {
  code: "sw",
  name: "Swahili",
  nativeName: "Kiswahili"
}, {
  code: "ss",
  name: "Swati",
  nativeName: "SiSwati"
}, {
  code: "sv",
  name: "Swedish",
  nativeName: "svenska"
}, {
  code: "ta",
  name: "Tamil",
  nativeName: "தமிழ்"
}, {
  code: "te",
  name: "Telugu",
  nativeName: "తెలుగు"
}, {
  code: "tg",
  name: "Tajik",
  nativeName: "тоҷикӣ, toğikī, تاجیکی‎"
}, {
  code: "th",
  name: "Thai",
  nativeName: "ไทย"
}, {
  code: "ti",
  name: "Tigrinya",
  nativeName: "ትግርኛ"
}, {
  code: "bo",
  name: "Tibetan Standard, Tibetan, Central",
  nativeName: "བོད་ཡིག"
}, {
  code: "tk",
  name: "Turkmen",
  nativeName: "Türkmen, Түркмен"
}, {
  code: "tl",
  name: "Tagalog",
  nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
}, {
  code: "tn",
  name: "Tswana",
  nativeName: "Setswana"
}, {
  code: "to",
  name: "Tonga (Tonga Islands)",
  nativeName: "faka Tonga"
}, {
  code: "tr",
  name: "Turkish",
  nativeName: "Türkçe"
}, {
  code: "ts",
  name: "Tsonga",
  nativeName: "Xitsonga"
}, {
  code: "tt",
  name: "Tatar",
  nativeName: "татарча, tatarça, تاتارچا‎"
}, {
  code: "tw",
  name: "Twi",
  nativeName: "Twi"
}, {
  code: "ty",
  name: "Tahitian",
  nativeName: "Reo Tahiti"
}, {
  code: "ug",
  name: "Uighur, Uyghur",
  nativeName: "Uyƣurqə, ئۇيغۇرچە‎"
}, {
  code: "uk",
  name: "Ukrainian",
  nativeName: "українська"
}, {
  code: "ur",
  name: "Urdu",
  nativeName: "اردو"
}, {
  code: "uz",
  name: "Uzbek",
  nativeName: "zbek, Ўзбек, أۇزبېك‎"
}, {
  code: "ve",
  name: "Venda",
  nativeName: "Tshivenḓa"
}, {
  code: "vi",
  name: "Vietnamese",
  nativeName: "Tiếng Việt"
}, {
  code: "vo",
  name: "Volapük",
  nativeName: "Volapük"
}, {
  code: "wa",
  name: "Walloon",
  nativeName: "Walon"
}, {
  code: "cy",
  name: "Welsh",
  nativeName: "Cymraeg"
}, {
  code: "wo",
  name: "Wolof",
  nativeName: "Wollof"
}, {
  code: "fy",
  name: "Western Frisian",
  nativeName: "Frysk"
}, {
  code: "xh",
  name: "Xhosa",
  nativeName: "isiXhosa"
}, {
  code: "yi",
  name: "Yiddish",
  nativeName: "ייִדיש"
}, {
  code: "yo",
  name: "Yoruba",
  nativeName: "Yorùbá"
}, {
  code: "za",
  name: "Zhuang, Chuang",
  nativeName: "Saɯ cueŋƅ, Saw cuengh"
}];
const getLanguagesList = (selectComponentOptions = true, rawName = false) => {
  if (!selectComponentOptions) return languagesList;
  return languagesList.map(item => {
    return {
      value: item.code,
      label: rawName ? item.name : `${item.name} - ${item.nativeName}`
    };
  });
};
const getLanguageOption = (langCode, rawName = false) => {
  const selectedLang = languagesList.find(item => item.code === langCode);
  if (!selectedLang) {
    return null;
  }
  return {
    value: selectedLang.code,
    label: rawName ? selectedLang.name : `${selectedLang.name} - ${selectedLang.nativeName}`
  };
};

/***/ }),

/***/ "./src/utilities/timezones.js":
/*!************************************!*\
  !*** ./src/utilities/timezones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   timezonesList: () => (/* binding */ timezonesList)
/* harmony export */ });
const timezones = [{
  zone: "Pacific/Midway",
  gmt: "(GMT-11:00)",
  name: "Midway Island"
}, {
  zone: "US/Samoa",
  gmt: "(GMT-11:00)",
  name: "Samoa"
}, {
  zone: "US/Hawaii",
  gmt: "(GMT-10:00)",
  name: "Hawaii"
}, {
  zone: "US/Alaska",
  gmt: "(GMT-09:00)",
  name: "Alaska"
}, {
  zone: "US/Pacific",
  gmt: "(GMT-08:00)",
  name: "Pacific Time (US and Canada)"
}, {
  zone: "America/Tijuana",
  gmt: "(GMT-08:00)",
  name: "Tijuana"
}, {
  zone: "US/Arizona",
  gmt: "(GMT-07:00)",
  name: "Arizona"
}, {
  zone: "US/Mountain",
  gmt: "(GMT-07:00)",
  name: "Mountain Time (US and Canada)"
}, {
  zone: "America/Chihuahua",
  gmt: "(GMT-07:00)",
  name: "Chihuahua"
}, {
  zone: "America/Mazatlan",
  gmt: "(GMT-07:00)",
  name: "Mazatlan"
}, {
  zone: "America/Mexico_City",
  gmt: "(GMT-06:00)",
  name: "Mexico City"
}, {
  zone: "America/Monterrey",
  gmt: "(GMT-06:00)",
  name: "Monterrey"
}, {
  zone: "Canada/Saskatchewan",
  gmt: "(GMT-06:00)",
  name: "Saskatchewan"
}, {
  zone: "US/Central",
  gmt: "(GMT-06:00)",
  name: "Central Time (US and Canada)"
}, {
  zone: "US/Eastern",
  gmt: "(GMT-05:00)",
  name: "Eastern Time (US and Canada)"
}, {
  zone: "US/East-Indiana",
  gmt: "(GMT-05:00)",
  name: "Indiana (East)"
}, {
  zone: "America/Bogota",
  gmt: "(GMT-05:00)",
  name: "Bogota"
}, {
  zone: "America/Lima",
  gmt: "(GMT-05:00)",
  name: "Lima"
}, {
  zone: "America/Caracas",
  gmt: "(GMT-04:30)",
  name: "Caracas"
}, {
  zone: "Canada/Atlantic",
  gmt: "(GMT-04:00)",
  name: "Atlantic Time (Canada)"
}, {
  zone: "America/La_Paz",
  gmt: "(GMT-04:00)",
  name: "La_Paz"
}, {
  zone: "America/Santiago",
  gmt: "(GMT-04:00)",
  name: "Santiago"
}, {
  zone: "Canada/Newfoundland",
  gmt: "(GMT-03:30)",
  name: "Newfoundland"
}, {
  zone: "America/Buenos_Aires",
  gmt: "(GMT-03:00)",
  name: "Buenos Aires"
}, {
  zone: "Greenland",
  gmt: "(GMT-03:00)",
  name: "Greenland"
}, {
  zone: "Atlantic/Stanley",
  gmt: "(GMT-02:00)",
  name: "Stanley"
}, {
  zone: "Atlantic/Azores",
  gmt: "(GMT-01:00)",
  name: "Azores"
}, {
  zone: "Atlantic/Cape_Verde",
  gmt: "(GMT-01:00)",
  name: "Cape Verde Is."
}, {
  zone: "Africa/Casablanca",
  gmt: "(GMT)",
  name: "Casablanca"
}, {
  zone: "Europe/Dublin",
  gmt: "(GMT)",
  name: "Dublin"
}, {
  zone: "Europe/Lisbon",
  gmt: "(GMT)",
  name: "Libson"
}, {
  zone: "Europe/London",
  gmt: "(GMT)",
  name: "London"
}, {
  zone: "Africa/Monrovia",
  gmt: "(GMT)",
  name: "Monrovia"
}, {
  zone: "Europe/Amsterdam",
  gmt: "(GMT+01:00)",
  name: "Amsterdam"
}, {
  zone: "Europe/Belgrade",
  gmt: "(GMT+01:00)",
  name: "Belgrade"
}, {
  zone: "Europe/Berlin",
  gmt: "(GMT+01:00)",
  name: "Berlin"
}, {
  zone: "Europe/Bratislava",
  gmt: "(GMT+01:00)",
  name: "Bratislava"
}, {
  zone: "Europe/Brussels",
  gmt: "(GMT+01:00)",
  name: "Brussels"
}, {
  zone: "Europe/Budapest",
  gmt: "(GMT+01:00)",
  name: "Budapest"
}, {
  zone: "Europe/Copenhagen",
  gmt: "(GMT+01:00)",
  name: "Copenhagen"
}, {
  zone: "Europe/Ljubljana",
  gmt: "(GMT+01:00)",
  name: "Ljubljana"
}, {
  zone: "Europe/Madrid",
  gmt: "(GMT+01:00)",
  name: "Madrid"
}, {
  zone: "Europe/Paris",
  gmt: "(GMT+01:00)",
  name: "Paris"
}, {
  zone: "Europe/Prague",
  gmt: "(GMT+01:00)",
  name: "Prague"
}, {
  zone: "Europe/Rome",
  gmt: "(GMT+01:00)",
  name: "Rome"
}, {
  zone: "Europe/Sarajevo",
  gmt: "(GMT+01:00)",
  name: "Sarajevo"
}, {
  zone: "Europe/Skopje",
  gmt: "(GMT+01:00)",
  name: "Skopje"
}, {
  zone: "Europe/Stockholm",
  gmt: "(GMT+01:00)",
  name: "Stockholm"
}, {
  zone: "Europe/Vienna",
  gmt: "(GMT+01:00)",
  name: "Vienna"
}, {
  zone: "Europe/Warsaw",
  gmt: "(GMT+01:00)",
  name: "Warsaw"
}, {
  zone: "Europe/Zagreb",
  gmt: "(GMT+01:00)",
  name: "Zagreb"
}, {
  zone: "Europe/Athens",
  gmt: "(GMT+02:00)",
  name: "Athens"
}, {
  zone: "Europe/Bucharest",
  gmt: "(GMT+02:00)",
  name: "Bucharest"
}, {
  zone: "Africa/Cairo",
  gmt: "(GMT+02:00)",
  name: "Cairo"
}, {
  zone: "Africa/Harare",
  gmt: "(GMT+02:00)",
  name: "Harere"
}, {
  zone: "Europe/Helsinki",
  gmt: "(GMT+02:00)",
  name: "Helsinki"
}, {
  zone: "Europe/Istanbul",
  gmt: "(GMT+02:00)",
  name: "Istanbul"
}, {
  zone: "Asia/Jerusalem",
  gmt: "(GMT+02:00)",
  name: "Jerusalem"
}, {
  zone: "Europe/Kiev",
  gmt: "(GMT+02:00)",
  name: "Kiev"
}, {
  zone: "Europe/Minsk",
  gmt: "(GMT+02:00)",
  name: "Minsk"
}, {
  zone: "Europe/Riga",
  gmt: "(GMT+02:00)",
  name: "Riga"
}, {
  zone: "Europe/Sofia",
  gmt: "(GMT+02:00)",
  name: "Sofia"
}, {
  zone: "Europe/Tallinn",
  gmt: "(GMT+02:00)",
  name: "Tallinn"
}, {
  zone: "Europe/Vilnius",
  gmt: "(GMT+02:00)",
  name: "Vilnius"
}, {
  zone: "Asia/Baghdad",
  gmt: "(GMT+03:00)",
  name: "Baghdad"
}, {
  zone: "Asia/Kuwait",
  gmt: "(GMT+03:00)",
  name: "Kuwait"
}, {
  zone: "Africa/Nairobi",
  gmt: "(GMT+03:00)",
  name: "Nairobi"
}, {
  zone: "Asia/Riyadh",
  gmt: "(GMT+03:00)",
  name: "Riyadh"
}, {
  zone: "Asia/Tehran",
  gmt: "(GMT+03:30)",
  name: "Tehran"
}, {
  zone: "Europe/Moscow",
  gmt: "(GMT+04:00)",
  name: "Moscow"
}, {
  zone: "Asia/Baku",
  gmt: "(GMT+04:00)",
  name: "Baku"
}, {
  zone: "Europe/Volgograd",
  gmt: "(GMT+04:00)",
  name: "Volgograd"
}, {
  zone: "Asia/Muscat",
  gmt: "(GMT+04:00)",
  name: "Muscat"
}, {
  zone: "Asia/Tbilisi",
  gmt: "(GMT+04:00)",
  name: "Tbilisi"
}, {
  zone: "Asia/Yerevan",
  gmt: "(GMT+04:00)",
  name: "Yerevan"
}, {
  zone: "Asia/Kabul",
  gmt: "(GMT+04:30)",
  name: "Kabul"
}, {
  zone: "Asia/Karachi",
  gmt: "(GMT+05:00)",
  name: "Karachi"
}, {
  zone: "Asia/Tashkent",
  gmt: "(GMT+05:00)",
  name: "Tashkent"
}, {
  zone: "Asia/Kolkata",
  gmt: "(GMT+05:30)",
  name: "Kolkata"
}, {
  zone: "Asia/Kathmandu",
  gmt: "(GMT+05:45)",
  name: "Kathmandu"
}, {
  zone: "Asia/Yekaterinburg",
  gmt: "(GMT+06:00)",
  name: "Yekaterinburg"
}, {
  zone: "Asia/Almaty",
  gmt: "(GMT+06:00)",
  name: "Almaty"
}, {
  zone: "Asia/Dhaka",
  gmt: "(GMT+06:00)",
  name: "Dhaka"
}, {
  zone: "Asia/Novosibirsk",
  gmt: "(GMT+07:00)",
  name: "Novosibirsk"
}, {
  zone: "Asia/Bangkok",
  gmt: "(GMT+07:00)",
  name: "Bangkok"
}, {
  zone: "Asia/Jakarta",
  gmt: "(GMT+07:00)",
  name: "Jakarta"
}, {
  zone: "Asia/Krasnoyarsk",
  gmt: "(GMT+08:00)",
  name: "Krasnoyarsk"
}, {
  zone: "Asia/Chongqing",
  gmt: "(GMT+08:00)",
  name: "Chongqing"
}, {
  zone: "Asia/Hong_Kong",
  gmt: "(GMT+08:00)",
  name: "Hong Kong"
}, {
  zone: "Asia/Kuala_Lumpur",
  gmt: "(GMT+08:00)",
  name: "Kuala Lumpur"
}, {
  zone: "Australia/Perth",
  gmt: "(GMT+08:00)",
  name: "Perth"
}, {
  zone: "Asia/Singapore",
  gmt: "(GMT+08:00)",
  name: "Singapore"
}, {
  zone: "Asia/Taipei",
  gmt: "(GMT+08:00)",
  name: "Taipei"
}, {
  zone: "Asia/Ulaanbaatar",
  gmt: "(GMT+08:00)",
  name: "Ulaan Bataar"
}, {
  zone: "Asia/Urumqi",
  gmt: "(GMT+08:00)",
  name: "Urumqi"
}, {
  zone: "Asia/Irkutsk",
  gmt: "(GMT+09:00)",
  name: "Irkutsk"
}, {
  zone: "Asia/Seoul",
  gmt: "(GMT+09:00)",
  name: "Seoul"
}, {
  zone: "Asia/Tokyo",
  gmt: "(GMT+09:00)",
  name: "Tokyo"
}, {
  zone: "Australia/Adelaide",
  gmt: "(GMT+09:30)",
  name: "Adelaide"
}, {
  zone: "Australia/Darwin",
  gmt: "(GMT+09:30)",
  name: "Darwin"
}, {
  zone: "Asia/Yakutsk",
  gmt: "(GMT+10:00)",
  name: "Yakutsk"
}, {
  zone: "Australia/Brisbane",
  gmt: "(GMT+10:00)",
  name: "Brisbane"
}, {
  zone: "Australia/Canberra",
  gmt: "(GMT+10:00)",
  name: "Canberra"
}, {
  zone: "Pacific/Guam",
  gmt: "(GMT+10:00)",
  name: "Guam"
}, {
  zone: "Australia/Hobart",
  gmt: "(GMT+10:00)",
  name: "Hobart"
}, {
  zone: "Australia/Melbourne",
  gmt: "(GMT+10:00)",
  name: "Melbourne"
}, {
  zone: "Pacific/Port_Moresby",
  gmt: "(GMT+10:00)",
  name: "Port Moresby"
}, {
  zone: "Australia/Sydney",
  gmt: "(GMT+10:00)",
  name: "Sydney"
}, {
  zone: "Asia/Vladivostok",
  gmt: "(GMT+11:00)",
  name: "Vladivostok"
}, {
  zone: "Asia/Magadan",
  gmt: "(GMT+12:00)",
  name: "Magadan"
}, {
  zone: "Pacific/Auckland",
  gmt: "(GMT+12:00)",
  name: "Auckland"
}, {
  zone: "Pacific/Fiji",
  gmt: "(GMT+12:00)",
  name: "Fiji"
}];
const timezonesList = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Pago_Pago": "Pago Pago",
  "Pacific/Honolulu": "Hawaii",
  "America/Anchorage": "Alaska",
  "America/Vancouver": "Vancouver",
  "America/Los_Angeles": "Pacific Time (US and Canada)",
  "America/Tijuana": "Tijuana",
  "America/Edmonton": "Edmonton",
  "America/Denver": "Mountain Time (US and Canada)",
  "America/Phoenix": "Arizona",
  "America/Mazatlan": "Mazatlan",
  "America/Winnipeg": "Winnipeg",
  "America/Regina": "Saskatchewan",
  "America/Chicago": "Central Time (US and Canada)",
  "America/Mexico_City": "Mexico City",
  "America/Guatemala": "Guatemala",
  "America/El_Salvador": "El Salvador",
  "America/Managua": "Managua",
  "America/Costa_Rica": "Costa Rica",
  "America/Montreal": "Montreal",
  "America/New_York": "Eastern Time (US and Canada)",
  "America/Indianapolis": "Indiana (East)",
  "America/Panama": "Panama",
  "America/Bogota": "Bogota",
  "America/Lima": "Lima",
  "America/Halifax": "Halifax",
  "America/Puerto_Rico": "Puerto Rico",
  "America/Caracas": "Caracas",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Montevideo": "Montevideo",
  "America/Araguaina": "Brasilia",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Sao_Paulo": "Sao Paulo",
  "Atlantic/Azores": "Azores",
  "Canada/Atlantic": "Atlantic Time (Canada)",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  UTC: "Universal Time UTC",
  "Etc/Greenwich": "Greenwich Mean Time",
  "Europe/Belgrade": "Belgrade, Bratislava, Ljubljana",
  CET: "Sarajevo, Skopje, Zagreb",
  "Atlantic/Reykjavik": "Reykjavik",
  "Europe/Dublin": "Dublin",
  "Europe/London": "London",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca",
  "Africa/Nouakchott": "Nouakchott",
  "Europe/Oslo": "Oslo",
  "Europe/Copenhagen": "Copenhagen",
  "Europe/Brussels": "Brussels",
  "Europe/Berlin": "Amsterdam, Berlin, Rome, Stockholm, Vienna",
  "Europe/Helsinki": "Helsinki",
  "Europe/Amsterdam": "Amsterdam",
  "Europe/Rome": "Rome",
  "Europe/Stockholm": "Stockholm",
  "Europe/Vienna": "Vienna",
  "Europe/Luxembourg": "Luxembourg",
  "Europe/Paris": "Paris",
  "Europe/Zurich": "Zurich",
  "Europe/Madrid": "Madrid",
  "Africa/Bangui": "West Central Africa",
  "Africa/Algiers": "Algiers",
  "Africa/Tunis": "Tunis",
  "Africa/Harare": "Harare, Pretoria",
  "Africa/Nairobi": "Nairobi",
  "Europe/Warsaw": "Warsaw",
  "Europe/Prague": "Prague Bratislava",
  "Europe/Budapest": "Budapest",
  "Europe/Sofia": "Sofia",
  "Europe/Istanbul": "Istanbul",
  "Europe/Athens": "Athens",
  "Europe/Bucharest": "Bucharest",
  "Asia/Nicosia": "Nicosia",
  "Asia/Beirut": "Beirut",
  "Asia/Damascus": "Damascus",
  "Asia/Jerusalem": "Jerusalem",
  "Asia/Amman": "Amman",
  "Africa/Tripoli": "Tripoli",
  "Africa/Cairo": "Cairo",
  "Africa/Johannesburg": "Johannesburg",
  "Europe/Moscow": "Moscow",
  "Asia/Baghdad": "Baghdad",
  "Asia/Kuwait": "Kuwait",
  "Asia/Riyadh": "Riyadh",
  "Asia/Bahrain": "Bahrain",
  "Asia/Qatar": "Qatar",
  "Asia/Aden": "Aden",
  "Asia/Tehran": "Tehran",
  "Africa/Khartoum": "Khartoum",
  "Africa/Djibouti": "Djibouti",
  "Africa/Mogadishu": "Mogadishu",
  "Asia/Dubai": "Dubai",
  "Asia/Muscat": "Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Yekaterinburg",
  "Asia/Tashkent": "Islamabad, Karachi, Tashkent",
  "Asia/Calcutta": "India",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Novosibirsk": "Novosibirsk",
  "Asia/Almaty": "Almaty",
  "Asia/Dacca": "Dacca",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Bangkok": "Bangkok",
  "Asia/Saigon": "Vietnam",
  "Asia/Jakarta": "Jakarta",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Shanghai": "Beijing, Shanghai",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Taipei": "Taipei",
  "Asia/Kuala_Lumpur": "Kuala Lumpur",
  "Asia/Singapore": "Singapore",
  "Australia/Perth": "Perth",
  "Asia/Yakutsk": "Yakutsk",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Port_Moresby": "Guam, Port Moresby",
  "Australia/Brisbane": "Brisbane",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Hobart": "Hobart",
  "Asia/Magadan": "Magadan",
  SST: "Solomon Islands",
  "Pacific/Noumea": "New Caledonia",
  "Asia/Kamchatka": "Kamchatka",
  "Pacific/Fiji": "Fiji Islands, Marshall Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Asia/Kolkata": "Mumbai, Kolkata, New Delhi",
  "Europe/Kiev": "Kiev",
  "America/Tegucigalpa": "Tegucigalpa",
  "Pacific/Apia": "Independent State of Samoa"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timezones);

/***/ }),

/***/ "./src/utilities/translations.js":
/*!***************************************!*\
  !*** ./src/utilities/translations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTranslationLanguages: () => (/* binding */ defaultTranslationLanguages),
/* harmony export */   getTranslationsTpl: () => (/* binding */ getTranslationsTpl),
/* harmony export */   languagesCodeName: () => (/* binding */ languagesCodeName),
/* harmony export */   mergeTranslations: () => (/* binding */ mergeTranslations),
/* harmony export */   translationsKeysTpl: () => (/* binding */ translationsKeysTpl)
/* harmony export */ });
/* harmony import */ var lodash_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.foreach */ "./node_modules/lodash.foreach/index.js");
/* harmony import */ var lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_foreach__WEBPACK_IMPORTED_MODULE_0__);

const translationsKeysTpl = {
  customFilters: {
    filter_label_dates: "Dates",
    filter_label_locations: "Location",
    filter_label_languages: "Language",
    filter_label_categories: "Category",
    filter_label_members: "Member",
    filter_label_teams: "Team",
    filterPropertyDetailsLabel: "Details",
    filterPropertyEmailLabel: "Email",
    filterPropertyPhoneLabel: "Phone",
    filterPropertyOperationalHoursLabel: "Operational hours"
  },
  globalWidgetsTranslations: {
    priceLabel: "Price",
    filtersLabel: "Filters",
    calendarLabel: "Calendar",
    priceFreeLabel: "Free",
    dayLabelPlural: "d",
    dayLabelSingular: "d",
    hourLabelPlural: "h",
    hourLabelSingular: "h",
    minuteLabelPlural: "m",
    minuteLabelSingular: "m"
  },
  mainWidget: {
    openDialogButton: "Book event",
    eventsListTitle: "Events list",
    widgetEventsListSwitchLabel: "Events",
    eventAddToCartButtonLabel: "Add to Cart",
    liveShoppingJoinButtonLabel: "Join",
    liveShoppingStartCountdown: "in",
    searchEventPlaceholder: "Search",
    itemsCounterLabel: "items",
    singleEventItemsCounterLabel: "item",
    clearFiltersLabel: "clear",
    bookButtonLabel: "Book now",
    eventDetailsButtonLabel: "Details",
    eventDescriptionFieldLabel: "Description",
    todaySeparatorLabel: "Today",
    tomorrowSeparatorLabel: "Tomorrow",
    filtersStepLabel: "Filters",
    resultStypeLabel: "Result",
    goToFiltersResultButton: "Next: Result",
    labelForMonthWithoutEvents: "There are no events scheduled for this month",
    nextMonthButton: "Next"
  },
  onProductWidget: {
    selectTimeButton: "Select the Date and Time",
    selectDateAndTimeButton: "Select the Date and Time",
    addToCartButton: "Add To Cart",
    registerInWaitingList: "Join the Waiting List",
    eventSoldOut: "Sold out",
    appointmentSoldOut: "Sold out",
    remainingBookingsLabel: "Hurry! Only ### left in stock!",
    addToCartLabel: "Confirm",
    questionsFormTitle: "Questions Form",
    additionalMembersFormTitle: "Multi Booking",
    memberFormDescription: "Add Email Addresses for Additional Recipients",
    freeCheckoutNewslettersAgreement: "Click here to receive marketing emails and newsletters",
    freeCheckoutCloseRegistrationButton: "Close",
    freeCheckoutInvalidEmailMessage: "Please enter a valid email address",
    freeCheckoutMandatoryRequiermentsMessageHeader: "Please fill in the form below with your email and name to complete your registration",
    freeRegistrationFormTitle: "Registration",
    freeRegistrationFormDescription: "Please fill in the form below with your email and name to complete your registration",
    fastRegistration: "Checkout",
    memberFormMember: "Additional Registrant",
    memberFormEmail: "Email",
    memberFormFirstName: "First Name",
    memberFormLastName: "Last Name",
    eventQuestionsFormTitle: "Event Questions Form",
    submitQuestionsForm: "Submit",
    mandatoryRequiermentsMessageHeader: "This field is mandatory",
    mandatoryRequiermentsMessage: "Please fill in this field",
    invalidEmailMessage: "Please enter a valid email address.",
    noAvailableSlots: "No appointment slots available at the moment",
    registrationCompletedMessageTitle: "Registration completed!",
    registrationCompletedMessageDescription: "You have successfully registered. A confirmation email has been sent to the provided email address. Please check your inbox."
  }
};
const defaultTranslationLanguages = ["zh-cn", "nl", "en", "fr", "de", "hi", "it", "ja", "ko", "no", "ru", "es", "sv"];
const languagesCodeName = {
  "zh-cn": "zh-CN",
  nl: "nl",
  en: "en-US",
  fr: "fr",
  de: "de",
  hi: "hi",
  it: "it",
  ja: "ja",
  ko: "ko",
  no: "no",
  ru: "ru",
  es: "es",
  sv: "sv"
};
const getTranslationsTpl = () => {
  const tpl = {};
  lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(defaultTranslationLanguages, langCode => {
    tpl[langCode] = translationsKeysTpl;
  });
  return tpl;
};
const mergeTranslations = (recipientTranslations = {}, injectedTranslations = {}) => {
  const languagesForProcessing = Object.keys(recipientTranslations);
  const mergedTranslations = {};
  lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(languagesForProcessing, langCode => {
    if (injectedTranslations[langCode] === undefined) {
      mergedTranslations[langCode] = translationsKeysTpl;
    } else {
      const langData = {};
      lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(recipientTranslations[langCode], (sectionValue, sectionName) => {
        if (injectedTranslations[langCode][sectionName] === undefined) {
          langData[sectionName] = recipientTranslations[langCode][sectionName];
        } else {
          if (!langData[sectionName]) langData[sectionName] = {};
          const fieldsForProcessing = Object.keys(recipientTranslations[langCode][sectionName]);
          lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()({
            ...recipientTranslations[langCode][sectionName],
            ...injectedTranslations[langCode][sectionName]
          }, (fieldValue, fieldName) => {
            if (fieldsForProcessing.includes(fieldName)) {
              langData[sectionName][fieldName] = fieldValue;
            }
          });
        }
      });
      mergedTranslations[langCode] = langData;
    }
  });
  return mergedTranslations;
};

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_SettingsPage_jsx.js.map?ver=756ecc54e3365eb99a4d