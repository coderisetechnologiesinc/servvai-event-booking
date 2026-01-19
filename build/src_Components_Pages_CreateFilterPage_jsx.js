"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_CreateFilterPage_jsx"],{

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

/***/ "./src/Components/Containers/PageHeader.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/PageHeader.jsx ***!
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


const PageHeader = props => {
  const {
    className = "",
    bottomLine,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...rest,
    className: `page-header ${bottomLine ? "border-b pb-4" : ""} ${className}`,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

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

/***/ "./src/Components/Controls/MobileFooterActions.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/MobileFooterActions.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const MobileFooterActions = ({
  onSave,
  onCancel,
  saveText = "Save",
  cancelText = "Cancel",
  saveDisabled = false,
  saveIcon = null,
  loading = false,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 safe-area-pb",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex gap-3 w-full max-w-md mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
          text: cancelText,
          type: "secondary",
          onAction: onCancel,
          disabled: loading,
          className: `flex-1 min-h-[44px] text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${className}`,
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
          text: saveText,
          icon: saveIcon,
          type: "primary",
          onAction: onSave,
          disabled: saveDisabled || loading,
          className: `flex-1 min-h-[44px] text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-colors duration-200 ${className}`,
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "md:hidden h-20"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileFooterActions);

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
  style = {}
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

/***/ "./src/Components/Pages/CreateCategoryFilterForm.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/CreateCategoryFilterForm.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const CreateCategoryFilterForm = ({
  setLoading = () => {}
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useSearchParams)();
  const id = searchParams.get("id");
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore)(s => s.filtersList);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore)(s => s.syncSingleFilterFromServer);
  // Try to find existing category if ID is provided
  const existingCategory = id && filtersList.categories ? filtersList.categories.find(c => String(c.id) === String(id)) : null;
  const [categoryData, setCategoryData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(existingCategory || {});
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onCancel = () => navigate(-1); // Go back

  const handleCategroyChange = (field, value) => {
    setCategoryData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleCategorySave = async () => {
    if (!categoryData?.name) return;
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/filters/categories";
    let method = "POST";

    // Editing existing
    if (existingCategory) {
      url += `/${existingCategory.id}`;
      method = "PATCH";
    }
    await (0,axios__WEBPACK_IMPORTED_MODULE_13__["default"])({
      method,
      url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...categoryData,
        priority: Number.parseInt(categoryData.priority) || 0
      }
    });
    await syncSingleFilterFromServer("categories");
    navigate(-1);
  };
  const isFormValid = categoryData?.name?.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    widthBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
            className: "dashboard-title text-gray-900",
            children: existingCategory ? `Category Filter "${existingCategory.name}"` : "New Category"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            className: "dashboard-description mt-4 text-gray-600",
            children: existingCategory ? `Edit details for ${existingCategory.name}` : "Create a new category filter"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Cancel",
            type: "secondary",
            onAction: onCancel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Save",
            type: "primary",
            onAction: handleCategorySave,
            disabled: !isFormValid
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "pb-20 md:pb-0 py-0 my-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Category Name",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: categoryData?.name || "",
                type: "text",
                align: "left",
                maxLength: 100,
                onChange: val => handleCategroyChange("name", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Category Details",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: categoryData?.details || "",
                type: "text",
                align: "left",
                maxLength: 200,
                onChange: val => handleCategroyChange("details", val),
                width: isMobile ? "100%" : "400px"
              })
            }), existingCategory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Order",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: categoryData.priority || "",
                type: "text",
                align: "left",
                maxLength: 10,
                onChange: val => handleCategroyChange("priority", val),
                width: isMobile ? "100%" : "400px"
              })
            })]
          })
        })
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSave: handleCategorySave,
        onCancel: onCancel,
        saveText: "Save",
        cancelText: "Cancel",
        saveDisabled: !isFormValid
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCategoryFilterForm);

/***/ }),

/***/ "./src/Components/Pages/CreateFilterPage.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Pages/CreateFilterPage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateFilterPage)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _CreateLocationFilterForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateLocationFilterForm */ "./src/Components/Pages/CreateLocationFilterForm.jsx");
/* harmony import */ var _CreateLanguageFilterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateLanguageFilterForm */ "./src/Components/Pages/CreateLanguageFilterForm.jsx");
/* harmony import */ var _CreateCategoryFilterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateCategoryFilterForm */ "./src/Components/Pages/CreateCategoryFilterForm.jsx");
/* harmony import */ var _CreateMemberFilterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateMemberFilterForm */ "./src/Components/Pages/CreateMemberFilterForm.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function CreateFilterPage() {
  const {
    type
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const onCancel = () => navigate(-1);
  const map = {
    Locations: _CreateLocationFilterForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    Languages: _CreateLanguageFilterForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    Categories: _CreateCategoryFilterForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    Members: _CreateMemberFilterForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  const Form = map[type];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    withBackground: true,
    children: Form ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Form, {
      onCancel: onCancel
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Unknown filter type."
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/CreateLanguageFilterForm.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/CreateLanguageFilterForm.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const CreateLanguageFilterForm = ({
  setLoading = () => {}
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useSearchParams)();
  const id = searchParams.get("id");
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore)(s => s.filtersList);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore)(s => s.syncSingleFilterFromServer);

  // Find existing language if editing
  const existingLanguage = id && filtersList.languages ? filtersList.languages.find(l => String(l.id) === String(id)) : null;
  const [languageData, setLanguageData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(existingLanguage || {});
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onCancel = () => navigate(-1); // Return to previous page

  const handleLanguageChange = (field, value) => {
    setLanguageData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleLanguageSave = async () => {
    if (!languageData?.name) return;
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/filters/languages";
    let method = "POST";

    // Editing existing
    if (existingLanguage) {
      url += `/${existingLanguage.id}`;
      method = "PATCH";
    }
    await (0,axios__WEBPACK_IMPORTED_MODULE_13__["default"])({
      method,
      url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...languageData,
        priority: Number.parseInt(languageData.priority) || 0
      }
    });
    await syncSingleFilterFromServer("languages");
    navigate(-1);
  };
  const isFormValid = languageData?.name?.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
            className: "dashboard-title text-gray-900",
            children: existingLanguage ? `Language Filter "${existingLanguage.name}"` : "New Language"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            className: "dashboard-description text-gray-600 text-base leading-relaxed",
            children: existingLanguage ? `Edit details for ${existingLanguage.name}` : "Create a new language filter"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Cancel",
            type: "secondary",
            onAction: onCancel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Save",
            type: "primary",
            onAction: handleLanguageSave,
            disabled: !isFormValid
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "py-0 my-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "pb-20 md:pb-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Language Name",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: languageData?.name || "",
                type: "text",
                align: "left",
                maxLength: 100,
                onChange: val => handleLanguageChange("name", val),
                width: isMobile ? "100%" : "400px"
              })
            }), existingLanguage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Order",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: languageData.priority || "",
                type: "text",
                align: "left",
                maxLength: 10,
                onChange: val => handleLanguageChange("priority", val),
                width: isMobile ? "100%" : "400px"
              })
            })]
          })
        })
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSave: handleLanguageSave,
        onCancel: onCancel,
        saveText: "Save",
        cancelText: "Cancel",
        saveDisabled: !isFormValid
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateLanguageFilterForm);

/***/ }),

/***/ "./src/Components/Pages/CreateLocationFilterForm.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/CreateLocationFilterForm.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















const CreateLocationFilterForm = ({
  setLoading = () => {},
  timeFormat = "hh:mm a"
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams)();
  const id = searchParams.get("id");
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_12__.useServvStore)(s => s.filtersList);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_12__.useServvStore)(s => s.syncSingleFilterFromServer);
  const existingLocation = id && filtersList.locations ? filtersList.locations.find(l => String(l.id) === String(id)) : null;
  const [locationData, setLocationData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(existingLocation || {});
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(window.innerWidth < 768);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onCancel = () => navigate(-1);
  const handleLocationChange = (field, value) => {
    setLocationData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleLocationSave = async () => {
    if (!locationData?.name) return;
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/filters/locations";
    let method = "POST";
    if (existingLocation) {
      url += `/${existingLocation.id}`;
      method = "PATCH";
    }
    await (0,axios__WEBPACK_IMPORTED_MODULE_15__["default"])({
      method,
      url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...locationData,
        priority: Number.parseInt(locationData.priority) || 0
      }
    });
    await syncSingleFilterFromServer("locations");
    navigate(-1);
  };

  /** ------------------ Operational Hours Helpers ------------------ **/
  const getStartTime = () => {
    if (locationData?.operational_hours) {
      const [start] = locationData.operational_hours.split(" - ");
      return moment__WEBPACK_IMPORTED_MODULE_11___default()(start, timeFormat);
    }
    return moment__WEBPACK_IMPORTED_MODULE_11___default()("09:00", "HH:mm");
  };
  const getEndTime = () => {
    if (locationData?.operational_hours) {
      const parts = locationData.operational_hours.split(" - ");
      return moment__WEBPACK_IMPORTED_MODULE_11___default()(parts[1], timeFormat);
    }
    return moment__WEBPACK_IMPORTED_MODULE_11___default()("17:00", "HH:mm");
  };
  const handleStartTimeChange = newVal => {
    const start = moment__WEBPACK_IMPORTED_MODULE_11___default()(newVal).format(timeFormat);
    const end = locationData.operational_hours?.split(" - ")[1] || moment__WEBPACK_IMPORTED_MODULE_11___default()("17:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };
  const handleEndTimeChange = newVal => {
    const end = moment__WEBPACK_IMPORTED_MODULE_11___default()(newVal).format(timeFormat);
    const start = locationData.operational_hours?.split(" - ")[0] || moment__WEBPACK_IMPORTED_MODULE_11___default()("09:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };
  const isFormValid = locationData?.name?.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h1", {
            className: "dashboard-title text-gray-900",
            children: existingLocation ? `Location Filter "${existingLocation.name}"` : "New Location"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "dashboard-description text-gray-600 mt-4 text-base leading-relaxed",
            children: existingLocation ? `Edit details for ${existingLocation.name}` : "Create a new location filter"
          })]
        }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Cancel",
            type: "secondary",
            onAction: onCancel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Save",
            type: "primary",
            onAction: handleLocationSave,
            disabled: !isFormValid
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "py-0 my-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "pb-20 md:pb-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Location Name",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: locationData?.name || "",
                type: "text",
                align: "left",
                maxLength: 100,
                onChange: val => handleLocationChange("name", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Location Details",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: locationData?.details || "",
                type: "text",
                align: "left",
                maxLength: 200,
                onChange: val => handleLocationChange("details", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Operational Hours",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                style: {
                  width: isMobile ? "100%" : "400px"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                  className: `${isMobile ? "flex-col" : "flex-row"} flex gap-4`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    label: "Start Time",
                    time: getStartTime(),
                    onChange: handleStartTimeChange,
                    timeFormat: timeFormat
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    label: "End Time",
                    time: getEndTime(),
                    onChange: handleEndTimeChange,
                    timeFormat: timeFormat
                  })]
                })
              })
            }), existingLocation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Order",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: locationData.priority || "",
                type: "text",
                align: "left",
                maxLength: 10,
                onChange: val => handleLocationChange("priority", val),
                width: isMobile ? "100%" : "400px"
              })
            })]
          })
        })
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSave: handleLocationSave,
        onCancel: onCancel,
        saveText: "Save",
        cancelText: "Cancel",
        saveDisabled: !isFormValid
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateLocationFilterForm);

/***/ }),

/***/ "./src/Components/Pages/CreateMemberFilterForm.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Pages/CreateMemberFilterForm.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const CreateMemberFilterForm = ({
  setLoading = () => {}
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useSearchParams)();
  const id = searchParams.get("id");
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_9__.useServvStore)(s => s.filtersList);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_9__.useServvStore)(s => s.syncSingleFilterFromServer);

  // Load existing member if editing
  const existingMember = id && filtersList.members ? filtersList.members.find(m => String(m.id) === String(id)) : null;
  const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(existingMember || {});
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onCancel = () => navigate(-1);
  const handleMemberChange = (field, value) => {
    setMemberData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleMemberSave = async () => {
    if (!memberData.name) return;
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/filters/members";
    let method = "POST";
    if (existingMember) {
      url += `/${existingMember.id}`;
      method = "PATCH";
    }
    await (0,axios__WEBPACK_IMPORTED_MODULE_13__["default"])({
      method,
      url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...memberData,
        priority: Number.parseInt(memberData.priority) || 0
      }
    });
    await syncSingleFilterFromServer("members");
    navigate(-1);
  };
  const isFormValid = memberData?.name?.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
            className: "dashboard-title text-gray-900",
            children: existingMember ? `Member Filter "${existingMember.name}"` : "New Member"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            className: "dashboard-description mt-4 text-gray-600 text-base leading-relaxed",
            children: existingMember ? `Edit details for ${existingMember.name}` : "Create a new member filter"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "dashboard-actions hidden md:flex flex-row items-center gap-2 flex-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Cancel",
            type: "secondary",
            onAction: onCancel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Save",
            type: "primary",
            disabled: !isFormValid,
            onAction: handleMemberSave
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "py-0 my-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "pb-20 md:pb-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Member Name",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                align: "left",
                value: memberData?.name || "",
                type: "text",
                maxLength: 100,
                onChange: val => handleMemberChange("name", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Member Email",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: memberData?.email || "",
                type: "email",
                align: "left",
                maxLength: 100,
                onChange: val => handleMemberChange("email", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Phone",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: memberData?.phone || "",
                type: "tel",
                align: "left",
                maxLength: 50,
                onChange: val => handleMemberChange("phone", val),
                width: isMobile ? "100%" : "400px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Description",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: memberData?.description || "",
                type: "text",
                align: "left",
                maxLength: 200,
                onChange: val => handleMemberChange("description", val),
                width: isMobile ? "100%" : "400px"
              })
            }), existingMember && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Order",
              className: "items-start",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                value: memberData.priority || "",
                type: "text",
                align: "left",
                maxLength: 10,
                onChange: val => handleMemberChange("priority", val),
                width: isMobile ? "100%" : "400px"
              })
            })]
          })
        })
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSave: handleMemberSave,
        onCancel: onCancel,
        saveText: "Save",
        cancelText: "Cancel",
        saveDisabled: !isFormValid
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMemberFilterForm);

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
      className: "w-full relative pl-4 flex flex-col min-h-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
        children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `flex flex-col flex-1 w-full pr-4 max-w-full min-w-0 min-h-0 overflow-hidden ${props.loading ? "loading" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

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


/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_CreateFilterPage_jsx.js.map?ver=0c4a109b834a862f9b22