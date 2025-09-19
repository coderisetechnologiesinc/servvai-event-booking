"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_PostEditor_EventDetails_jsx"],{

/***/ "./src/Components/Containers/Badge.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Containers/Badge.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BadgeImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BadgeImage */ "./src/Components/Containers/BadgeImage.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);

// size : small | medium | large

// type : pill-colour | pill-outline | badge | badge-modern

// color : gray | brand | error | warning | success | gray-blue | blue-light | blue | indigo | purple | pink | orange

const Badge = ({
  text,
  icon = null,
  iconAfter = null,
  image = null,
  color,
  type,
  size,
  align,
  fullWidth = false,
  justify = null,
  onAction = () => {}
}) => {
  const getColor = () => {
    if (color === "gray") {
      return "badge-gray";
    } else if (color === "brand") {
      return "badge-brand";
    } else if (color === "error") {
      return "badge-error";
    } else if (color === "warning") {
      return "badge-warning";
    } else if (color === "success") {
      return "badge-success";
    }
    return "badge-gray";
  };
  const getType = () => {
    if (type === "pill-colour") {
      return "badge-pill-colour";
    } else if (type === "pill-outline") {
      return "badge-pill-outline";
    } else if (type === "badge") {
      return "badge-colour";
    } else if (type === "badge-modern") {
      return "badge-modern";
    }
    return "badge-modern";
  };
  const getSize = () => {
    if (size === "small") {
      return "badge-small";
    } else if (size === "medium") {
      return "badge-medium";
    } else if (size === "large") {
      return "badge-large";
    }
    return "badge-small";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `badge ${fullWidth ? "w-max" : ""} ${getSize()} ${getType()} ${getColor()} ${align === "center" ? "items-center" : "items-end"} ${justify && justify === "start" ? "justify-start" : justify} cursor-pointer
`,
    onClick: onAction,
    children: [icon && icon, image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BadgeImage__WEBPACK_IMPORTED_MODULE_0__["default"], {
      image: image
    }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      children: text
    }), iconAfter && iconAfter]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./src/Components/Containers/BadgeImage.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/BadgeImage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BadgeImage = ({
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "badge-image",
    style: {
      background: `url('${image}')`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeImage);

/***/ }),

/***/ "./src/Components/Containers/TabsComponent.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Containers/TabsComponent.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TabsComponent = ({
  tabsList,
  selected,
  handleSelectChange,
  fullWidth
}) => {
  const renderTabs = () => {
    return tabsList.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      style: {
        flex: "0 0 auto",
        minWidth: 120
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: () => handleSelectChange(tab.value),
        className: `tab-element ${selected === tab.value ? "tab-active" : ""}`,
        style: {
          minWidth: 120,
          whiteSpace: "nowrap",
          flex: "0 0 auto"
        },
        children: tab.label
      })
    }, tab.value));
  };

  // Responsive scroll for mobile
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "tabs-group-container",
    style: {
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      width: "100%",
      marginBottom: 16
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: "flex flex-row servv-tabs",
      style: {
        flexWrap: "nowrap",
        minWidth: "100%",
        width: "max-content",
        marginBottom: 0
      },
      children: renderTabs()
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsComponent);

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

/***/ "./src/Components/Controls/CustomDropdown.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/CustomDropdown.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CustomDropdown = ({
  options,
  selected,
  onSelectChange,
  icon,
  image
}) => {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDropdown);

/***/ }),

/***/ "./src/Components/Controls/EndDateControl.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/EndDateControl.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _PostEditor_DatePickerControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostEditor/DatePickerControl */ "./src/Components/PostEditor/DatePickerControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const EndDateControl = ({
  recurrence,
  onChange,
  meetingType = "offline"
}) => {
  const {
    end_times,
    end_date_time
  } = recurrence;
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!end_times ? "date" : "number");
  const handleSelectChange = val => {
    setSelected(val);
  };
  const endDate = end_date_time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(end_date_time).format("YYYY-MM-DDTHH:mm:ss") : moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DDTHH:mm:ss");

  // --- ENFORCE LIMITS ---
  // For Zoom: max 60 occurrences, for in-person: up to 12 months
  const isZoom = meetingType === "zoom";
  const maxOccurrences = isZoom ? 60 : 365; // 365 is a safe upper bound for in-person
  const maxMonths = 12;

  // Generate options for occurrences
  const numbersOptions = () => {
    let numberOpt = [];
    for (let i = 1; i <= maxOccurrences; i++) {
      numberOpt.push(i);
    }
    return numberOpt;
  };

  // Clamp end date for in-person to 12 months from now
  const minDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().toDate();
  const maxDate = isZoom ? null : moment__WEBPACK_IMPORTED_MODULE_3___default()().add(maxMonths, "months").toDate();
  const handleEndTimesChange = val => {
    let newVal = parseInt(val, 10);
    if (isZoom && newVal > 60) newVal = 60;
    onChange({
      ...recurrence,
      end_times: newVal,
      end_date_time: undefined
    });
  };
  const handleEndDateTimeChange = val => {
    let dateVal = val;
    if (!isZoom && maxDate && moment__WEBPACK_IMPORTED_MODULE_3___default()(val).isAfter(maxDate)) {
      dateVal = moment__WEBPACK_IMPORTED_MODULE_3___default()(maxDate).format("YYYY-MM-DDTHH:mm:ss");
    }
    onChange({
      ...recurrence,
      end_date_time: dateVal,
      end_times: undefined
    });
  };
  const iconRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "input-control-icon-right"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "input-container-col",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gap: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "tabs-group-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
          className: "flex flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "me-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => handleSelectChange("date"),
              className: `tab-element ${selected === "date" ? "tab-active" : ""}`,
              children: t("End date by")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "me-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => handleSelectChange("number"),
              className: `tab-element ${selected === "number" ? "tab-active" : ""}`,
              children: t("End date after")
            })
          })]
        })
      }), selected === "date" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PostEditor_DatePickerControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        date: endDate,
        onChange: handleEndDateTimeChange,
        variant: "field",
        minDate: minDate,
        maxDate: maxDate
      }), selected === "number" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        options: numbersOptions(),
        selected: end_times,
        onSelectChange: handleEndTimesChange,
        helpText: isZoom ? "Max 60 occurrences for Zoom meetings" : "Up to 12 months for in-person events",
        style: {
          padding: "10px"
        }
      }), isZoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "text-xs text-gray-600 mt-2",
        children: t("Recurring meetings expire 365 days after the last occurrence of the series. You can schedule up to 60 occurrences into the future.")
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndDateControl);

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

/***/ "./src/Components/Controls/ListPagination.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/ListPagination.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const ListPagination = ({
  hasNext,
  hasPrev,
  onNext = () => {},
  onPrev = () => {},
  onSelect = () => {},
  pageNumber,
  pageCount
}) => {
  const renderPaginationPages = () => {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "pagination-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "pagination-control",
      disabled: !hasPrev,
      onClick: () => onPrev(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "pagination-control-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text",
        children: t("Previous")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "pagination-control",
      disabled: !hasNext,
      onClick: () => onNext(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pagination-control-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text",
        children: t("Next")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPagination);

/***/ }),

/***/ "./src/Components/Controls/RecurringControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/RecurringControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _SelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _CheckboxControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const RecurringControl = ({
  recurrence,
  onChange
}) => {
  const {
    type,
    repeat_interval,
    weekly_days,
    monthly_day,
    monthly_week,
    monthly_week_day
  } = recurrence;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (recurrence.monthly_week_day) {
      setMonthlyType(false);
    }
  }, [recurrence]);
  // const [recurrenceType, setRecurrenceType] = useState("day");
  const [monthlyType, setMonthlyType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); //true day_of_month | false day_of week
  const monthlyTypes = ["Occurs of days of month", "Occurs on day of week"];
  const handleRecurrenceTypeChange = val => {
    let recurrenceSettings = {
      ...recurrence
    };
    if (val === 1) {
      delete recurrenceSettings.weekly_days;
      delete recurrenceSettings.monthly_day;
      delete recurrenceSettings.monthly_week;
      delete recurrenceSettings.monthly_week_day;
    } else if (val === 2) {
      delete recurrenceSettings.monthly_day;
      delete recurrenceSettings.monthly_week;
      delete recurrenceSettings.monthly_week_day;
    } else if (val === 3) {
      delete recurrenceSettings.weekly_days;
    }
    console.log(recurrenceSettings);
    onChange({
      ...recurrenceSettings,
      type: val
    });
  };
  const handleMonthlyTypeChange = val => {
    if (val === "Occurs of days of month") setMonthlyType(true);else setMonthlyType(false);
  };
  const dailyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 day");
    for (let i = 2; i < 15; i++) {
      repeatOpts.push(`${i} days`);
    }
    return repeatOpts;
  };
  const weeklyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 week");
    for (let i = 2; i < 15; i++) {
      repeatOpts.push(`${i} weeks`);
    }
    return repeatOpts;
  };
  const monthlyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 month");
    for (let i = 2; i < 4; i++) {
      repeatOpts.push(`${i} months`);
    }
    return repeatOpts;
  };
  const monthlyDayRepeatOptions = () => {
    let repeatOpts = [];
    for (let i = 1; i < 32; i++) {
      repeatOpts.push(i);
    }
    return repeatOpts;
  };
  const monthlyWeekRepeatOptions = ["First", "Second", "Third", "Fourth", "Last"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const renderOptions = () => {
    const recurrenceOptions = ["day", "week", "month"];
    return recurrenceOptions.map(interval => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "input-container-row items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
          type: "radio",
          className: "input-control radio-control",
          name: "recurrence-select",
          id: interval,
          checked: type === recurrenceOptions.indexOf(interval) + 1,
          onChange: () => handleRecurrenceTypeChange(recurrenceOptions.indexOf(interval) + 1)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
          htmlFor: "daily",
          className: "section-description",
          children: interval === "day" ? "Daily" : String(interval).charAt(0).toUpperCase() + String(interval).slice(1) + "ly"
        })]
      });
    });
  };
  const handleWeeklyDaysChange = (index, checked) => {
    let newWeeklyDays = weekly_days || [];
    if (checked) {
      newWeeklyDays = weekly_days.filter(item => item !== index);
    } else {
      newWeeklyDays.push(index);
    }
    onChange({
      ...recurrence,
      weekly_days: newWeeklyDays
    });
  };
  const renderWeeklyOptions = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
      const checked = weekly_days && weekly_days.includes(index + 1);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CheckboxControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "checkbox",
          checked: checked,
          onChange: () => handleWeeklyDaysChange(index + 1, checked)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
          className: "ml-2 section-description",
          children: day
        })]
      });
    });
  };
  const handleRepeatIntervalChange = val => {
    onChange({
      ...recurrence,
      repeat_interval: Number.parseInt(val.split(" ")[0])
    });
  };
  const handleMonthlyDayChange = val => {
    onChange({
      ...recurrence,
      monthly_day: Number.parseInt(val)
    });
  };
  const handleMonthlyWeekChange = val => {
    onChange({
      ...recurrence,
      monthly_week: monthlyWeekRepeatOptions.indexOf(val) + 1
    });
  };
  const handleMonthlyWeekDayChange = val => {
    onChange({
      ...recurrence,
      monthly_week_day: days.indexOf(val) + 1
    });
  };
  const iconRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "input-control-icon-right"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("fieldset", {
      className: "input-container-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("legend", {
          className: "section-description",
          children: t("Select type of recurrence")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "input-container-row items-start justify-between w-full",
          children: renderOptions()
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gap: 8,
      cardsLayout: true,
      children: [type === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Repeat every",
        options: dailyRepeatOptions(),
        selected: repeat_interval === 1 ? "1 day" : `${repeat_interval} days`,
        onSelectChange: handleRepeatIntervalChange,
        style: {
          padding: "10px"
        }
      }), type === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 4,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          label: "Repeat every",
          options: weeklyRepeatOptions(),
          selected: repeat_interval === 1 ? "1 week" : `${repeat_interval} weeks`,
          onSelectChange: handleRepeatIntervalChange,
          style: {
            padding: "10px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: t("Occurs on")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "grid grid-cols-2",
          children: renderWeeklyOptions()
        })]
      }), type === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 4,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          label: "Repeat every",
          options: monthlyRepeatOptions(),
          selected: repeat_interval === 1 || repeat_interval > 3 ? "1 month" : `${repeat_interval} months`,
          onSelectChange: handleRepeatIntervalChange,
          style: {
            padding: "10px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Event recurrence",
          buttons: monthlyTypes,
          active: monthlyType ? "Occurs of days of month" : "Occurs on day of week",
          onChange: handleMonthlyTypeChange
        }), monthlyType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "input-container-col gap-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
            label: "",
            options: monthlyDayRepeatOptions(),
            selected: monthly_day,
            onSelectChange: handleMonthlyDayChange,
            style: {
              padding: "10px"
            }
          })
        }), !monthlyType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gap: 4,
          cardsLayout: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
              label: "",
              options: monthlyWeekRepeatOptions,
              selected: monthly_week ? monthlyWeekRepeatOptions[monthly_week - 1] : monthlyWeekRepeatOptions[0],
              onSelectChange: handleMonthlyWeekChange,
              style: {
                padding: "10px"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
              label: "",
              options: days,
              selected: monthly_week_day ? days[monthly_week_day - 1] : days[0],
              onSelectChange: handleMonthlyWeekDayChange,
              style: {
                padding: "10px"
              }
            })]
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecurringControl);

/***/ }),

/***/ "./src/Components/Controls/RecurringSection.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/RecurringSection.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Controls_RecurringControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/RecurringControl */ "./src/Components/Controls/RecurringControl.jsx");
/* harmony import */ var _Controls_EndDateControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/EndDateControl */ "./src/Components/Controls/EndDateControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const RecurringSection = ({
  recurrence,
  onChange = () => {},
  disabled = false,
  meetingType = "offline" // <-- Accept meetingType
}) => {
  const eventTypes = ["One-time", "Recurring"];
  const handleTypeChange = val => {
    if (val === "Recurring") {
      onChange({
        type: 1,
        repeat_interval: 1,
        end_times: 1
      });
    } else onChange(null);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Recurrence",
      buttons: eventTypes,
      active: recurrence ? eventTypes[1] : eventTypes[0],
      onChange: handleTypeChange,
      disabled: disabled
    }), recurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_RecurringControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      recurrence: recurrence,
      onChange: onChange,
      meetingType: meetingType // <-- Pass down
    }), recurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_EndDateControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      recurrence: recurrence,
      onChange: onChange,
      meetingType: meetingType // <-- Pass down
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecurringSection);

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
    className: `input-container-col items-start ${align === "start" ? "grow" : "grow-0"} justify-between md:grow-0`,
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

/***/ "./src/Components/PostEditor/AIButton.jsx":
/*!************************************************!*\
  !*** ./src/Components/PostEditor/AIButton.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/SparklesIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const AIButton = ({
  onClick,
  children = "Use AI",
  loading = false
}) => {
  const pulseClasses = loading ? "animate-pulse scale-105" : "";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
    onClick: onClick,
    disabled: loading,
    className: `
        inline-flex items-center
        px-6 py-2
        rounded-lg 
        text-md             
        text-brand-700
        bg-transparent           
        relative                 
        font-semibold
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        overflow-hidden
        transition-transform duration-300
        ${loading ? "opacity-70 cursor-wait" : "hover:bg-gray-100"}
      `,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: " absolute inset-0      rounded-lg            -z-10                 ",
      style: {
        background: "linear-gradient(90deg, #6ee7b7, #8b5cf6, #ec4899, #fbbf24)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: `w-4 h-4 mr-3 transition-transform duration-300 ${pulseClasses}`,
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: `transition-transform duration-300 ${pulseClasses}`,
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AIButton);

/***/ }),

/***/ "./src/Components/PostEditor/CustomFieldsSection.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/PostEditor/CustomFieldsSection.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const CustomFieldsSection = ({
  customFields,
  onChange,
  meetingType = "offline"
}) => {
  const {
    custom_field_1_name,
    custom_field_1_value,
    custom_field_2_name,
    custom_field_2_value
  } = customFields;
  const handleCustomFieldsChange = (field, value) => {
    onChange(field, value);
  };
  // console.log(meetingType);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section-heading",
      children: t("Additional notes")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-gray-600 font-regular text-sm",
      children: t("Add items to bring or other info for attendees. Included in email\r\n        notifications.")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "section-description",
          children: t("Title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
          value: custom_field_2_name,
          onChange: val => handleCustomFieldsChange("custom_field_2_name", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "section-description",
          children: t("Description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
          value: custom_field_2_value,
          onChange: val => handleCustomFieldsChange("custom_field_2_value", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFieldsSection);

/***/ }),

/***/ "./src/Components/PostEditor/DatePickerControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/PostEditor/DatePickerControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const DatePickerControl = ({
  date = null,
  onChange = () => {},
  label = "Select a Date",
  variant = "button",
  adminSection = false
}) => {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).startOf("day").toDate() : null,
    endDate: null
  });
  const minDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").toDate();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValue({
      startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).startOf("day").toDate() : null,
      endDate: null
    });
  }, [date]);
  const handleDateChange = val => {
    setValue(val);
    if (val?.startDate) {
      const newDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(val.startDate);
      onChange(newDate);
    } else {
      onChange(null);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    minDate: minDate,
    asSingle: true,
    useRange: false,
    displayFormat: "MMM DD, YYYY",
    selected: value,
    value: value,
    placeholder: value?.startDate && moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate, (moment__WEBPACK_IMPORTED_MODULE_1___default().ISO_8601), true).isValid() ? moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate).format("MMM DD, YYYY") : "Select dates",
    inputClassName: `input-control section-description text-left w-full ${variant === "button" ? adminSection ? "" : "max-w-[10rem]" : "w-full"} ${adminSection ? "min-w-[8rem]" : "min-w-[10rem]"} shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700 max-sm:w-full`,
    onChange: handleDateChange
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerControl);

/***/ }),

/***/ "./src/Components/PostEditor/DateTimeSection.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/PostEditor/DateTimeSection.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var _Controls_RecurringSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/RecurringSection */ "./src/Components/Controls/RecurringSection.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DatePickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DatePickerControl */ "./src/Components/PostEditor/DatePickerControl.jsx");
/* harmony import */ var _AIButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AIButton */ "./src/Components/PostEditor/AIButton.jsx");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);

// Components
// import DatePicker from "./DatePicker";



// Icons

// Utilities



// import { toast } from "react-toastify";





const DateTimeSection = ({
  eventDetails,
  onChange,
  settings,
  occurrenceId,
  adminSection,
  setToast
}) => {
  const [isAiLoading, setIsAILoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    startTime,
    duration,
    timezone,
    recurrence
  } = eventDetails;
  const time = startTime !== null ? typeof startTime === "string" ? moment__WEBPACK_IMPORTED_MODULE_5___default()(startTime) : startTime : moment__WEBPACK_IMPORTED_MODULE_5___default()();
  const [isDateChanged, setDateChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!startTime);
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  const endTime = time ? moment__WEBPACK_IMPORTED_MODULE_5___default()(time).add(duration, "minutes") : moment__WEBPACK_IMPORTED_MODULE_5___default()().add(duration, "minutes");
  const timezoneOptions = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].map(timezone => timezone.zone);
  const [userTimezone, setUserTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("US/Pacific");
  const updateTimezone = settings => {
    let defaultTimezone = null;
    if (!settings) return;
    if (settings.settings?.admin_dashboard) {
      const adminSettings = settings.settings.admin_dashboard;
      defaultTimezone = adminSettings.default_timezone || moment__WEBPACK_IMPORTED_MODULE_5___default().tz.guess();
    } else {
      defaultTimezone = moment__WEBPACK_IMPORTED_MODULE_5___default().tz.guess();
    }
    let findTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].filter(t => t.zone === defaultTimezone);
    if (findTimezone.length > 0) {
      setUserTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment__WEBPACK_IMPORTED_MODULE_5___default().tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;
      let availableTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].filter(t => t.gmt === formattedOffset);
      if (availableTimezone.length > 0) {
        setUserTimezone(availableTimezone[0]);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateTimezone(settings);
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings && !settings.timezone && userTimezone.length > 0 && eventDetails && eventDetails.timezone && timezone.length === 0) {
      onChange("timezone", userTimezone[0].zone);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_timezone) {
      onChange("timezone", settings.settings.admin_dashboard.default_timezone);
    }
  }, [settings]);
  const handleTimezoneChange = value => {
    let currentSelectedTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].filter(timezone => timezone.zone === value);
    if (currentSelectedTimezone.length > 0) {
      onChange("timezone", currentSelectedTimezone[0].zone);
    }
  };
  const handleDateChange = val => {
    const currentTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(time);
    const newVal = moment__WEBPACK_IMPORTED_MODULE_5___default()(val);
    if (val) {
      newVal.set({
        hour: currentTime.get("hour"),
        minute: currentTime.get("minute"),
        second: currentTime.get("second")
      });
      onChange("startTime", newVal.format("YYYY-MM-DDTHH:mm:ss"));
    }
  };
  const handleStartTimeChange = val => {
    const newTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(val);
    onChange("startTime", newTime.format("YYYY-MM-DDTHH:mm:ss"));
  };
  const handleEndTimeChange = val => {
    onChange("duration", moment__WEBPACK_IMPORTED_MODULE_5___default()(val).diff(moment__WEBPACK_IMPORTED_MODULE_5___default()(time), "minutes"));
  };
  const handleRecurrenceChange = val => {
    // console.log(val);
    onChange("recurrence", val);
  };
  const handleTimeFormatChange = () => {
    if (!settings) return;else if (settings && settings.settings && settings.settings.time_format_24_hours) {
      // console.log(settings.settings.time_format_24_hours);
      setTimeFormat("HH:mm");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleTimeFormatChange();
  }, [settings]);
  const iconRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "input-control-icon-right"
  });
  const fetchDescription = async () => {
    if (adminSection) return;
    if (eventDetails.title.length === 0) {
      setToast("Please enter a title to use this feature.");
      return;
    }
    setIsAILoading(true);
    const {
      createBlock
    } = wp.blocks;
    const {
      dispatch,
      select
    } = wp.data;
    const url = "/wp-json/servv-plugin/v1/event/data/generate";
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].post(url, {
        title: eventDetails.title
      }, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      }).catch(error => {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)(error.message ? error.message : "AI generation could not be completed. Please try again.");
      });
      const {
        description,
        image,
        tags
      } = response.data;

      // 1. Insert Description Block
      if (description && description.length > 0) {
        const descriptionBlock = createBlock("core/paragraph", {
          content: description
        });
        dispatch("core/block-editor").insertBlocks(descriptionBlock);
      }
      setIsAILoading(false);
      if (image) {
        const blob = b64toBlob(image, "image/png");
        const file = new File([blob], "featured-image.png", {
          type: "image/png"
        });
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", "Featured Image");
        if (eventDetails?.title) {
          formData.append("alt_text", eventDetails.title);
        }
        try {
          // Upload to WP Media Library
          const uploadResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
            path: "/wp/v2/media",
            method: "POST",
            body: formData,
            headers: {
              "X-WP-Nonce": servvData.nonce // provided by wp_localize_script
            }
          });
          if (uploadResponse?.id) {
            // Assign uploaded image as Featured Image
            dispatch("core/editor").editPost({
              featured_media: uploadResponse.id
            });
          }
        } catch (imgErr) {
          console.error("Failed to upload featured image:", imgErr);
        }
      }
      // 3. Create and Assign Tags
      if (Array.isArray(tags)) {
        const tagIds = [];
        for (const tagRaw of tags) {
          const tagName = tagRaw.replace(/^#/, "").trim();
          if (!tagName) continue;
          let tag = select("core").getEntityRecords("taxonomy", "post_tag", {
            search: tagName,
            per_page: 1
          });
          if (!tag) {
            const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
              path: `/wp/v2/tags?search=${encodeURIComponent(tagName)}`
            });
            tag = results.length ? results[0] : null;
          }
          if (!tag) {
            tag = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
              path: "/wp/v2/tags",
              method: "POST",
              data: {
                name: tagName
              }
            });
          }
          if (tag && tag.id) {
            tagIds.push(tag.id);
          }
        }
        if (tagIds.length > 0) {
          dispatch("core/editor").editPost({
            tags: tagIds
          });
        }
      }
    } catch (error) {
      setIsAILoading(false);
      console.error("Error:", error.response ? error.response.data : error.message);
      const fallbackContent = error.response ? error.response.data : error.message;
      const fallbackBlock = wp.blocks.createBlock("core/paragraph", {
        content: fallbackContent
      });
      wp.data.dispatch("core/block-editor").insertBlocks(fallbackBlock);
    }
  };

  // Helper: base64 → Blob
  function b64toBlob(b64Data, contentType = "", sliceSize = 512) {
    // Remove "data:image/...;base64," if present
    const cleaned = b64Data.includes(",") ? b64Data.split(",")[1] : b64Data;

    // Remove any whitespace or line breaks
    const safeBase64 = cleaned.replace(/\s/g, "");
    const byteCharacters = atob(safeBase64);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {
      type: contentType
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "flex flex-row justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "section-heading",
        children: "Date and time *"
      }), !adminSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AIButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: fetchDescription,
        loading: isAiLoading
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "flex flex-row gap-5 justify-between items-end max-sm:flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        date: time,
        onChange: handleDateChange,
        variant: "button",
        adminSection: adminSection
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex flex-row gap-3 justify-between align-center max-sm:justify-start md:justify-between max-sm:w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_2__["default"]
        // label="Start time"
        , {
          time: time,
          onChange: handleStartTimeChange,
          minValue: 0,
          maxValue: timeFormat === "hh:mm a" ? 12 : 24,
          timeFormat: timeFormat,
          align: "start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "self-center",
          children: "to"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_2__["default"]
        // label="End time"
        , {
          time: endTime,
          onChange: handleEndTimeChange,
          minValue: 0,
          maxValue: timeFormat === "hh:mm a" ? 12 : 24,
          timeFormat: timeFormat,
          align: "end"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Timezone *",
      options: timezoneOptions,
      helpText: "Select a timezone",
      selected: timezone ? timezone : null,
      disabled: false,
      onSelectChange: handleTimezoneChange,
      style: {
        padding: "10px"
      }
    }), !occurrenceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_RecurringSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      recurrence: recurrence,
      onChange: handleRecurrenceChange,
      disabled: settings && settings.current_plan.id !== 2
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTimeSection);

/***/ }),

/***/ "./src/Components/PostEditor/EventDetails.jsx":
/*!****************************************************!*\
  !*** ./src/Components/PostEditor/EventDetails.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DateTimeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTimeSection */ "./src/Components/PostEditor/DateTimeSection.jsx");
/* harmony import */ var _LocationSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationSection */ "./src/Components/PostEditor/LocationSection.jsx");
/* harmony import */ var _Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/TabsComponent */ "./src/Components/Containers/TabsComponent.jsx");
/* harmony import */ var _EventVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventVisibility */ "./src/Components/PostEditor/EventVisibility.jsx");
/* harmony import */ var _RegistrantsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegistrantsSection */ "./src/Components/PostEditor/RegistrantsSection.jsx");
/* harmony import */ var _NotificationsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NotificationsSection */ "./src/Components/PostEditor/NotificationsSection.jsx");
/* harmony import */ var _FiltersSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FiltersSection */ "./src/Components/PostEditor/FiltersSection.jsx");
/* harmony import */ var _TicketsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TicketsSection */ "./src/Components/PostEditor/TicketsSection.jsx");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CustomFieldsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomFieldsSection */ "./src/Components/PostEditor/CustomFieldsSection.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

// Components



// import ProductDetails from "./ProductDetails";












const EventDetails = ({
  title,
  agenda,
  attributes,
  setAttributes,
  postID = null,
  occurrenceId = null,
  adminSection = false,
  handleSetLoading = () => {},
  removeBlock = () => {},
  returnWithError = () => {},
  filters = null,
  settingsData = null,
  requiredFieldsNotification = false,
  hideReqieredFieldsNotification = () => {}
}) => {
  // console.log(attributes);
  let eventDetails = {
    ...attributes.meeting
  };
  const [postId, setPostId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [registrants, setRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [googleCalendar, setGoogleCalendar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [calendarAccountFetched, setCalendarAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mailAccountFetched, setMailAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [connectedMailAccount, setConnectedMailAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [zoomAccount, setZoomAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeAccount, setStripeAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [filtersList, setFiltersList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [activationError, setActivationError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/calendar/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getCalendarAccountResponse && getCalendarAccountResponse.status === 200) {
      setGoogleCalendar(getCalendarAccountResponse.data);
    }
    setCalendarAccountFetched(true);
  };
  const setToastMessage = val => {
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)(val, {
      autoClose: 5000
    });
  };
  // const servvData = { servv_plugin_mode: "production" };
  // const servvData = { servv_plugin_mode: "development" };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
    // setCalendarAccountFetched(true);
  };
  // useEffect(() => {
  //   if (requiredFieldsNotification) {
  //     setToastMessage("Please fill in the required fields");
  //     hideReqieredFieldsNotification();
  //   }
  // }, [requiredFieldsNotification]);
  const getStripeAccount = async () => {
    const getStripeAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getStripeAccountResponse && getStripeAccountResponse.status === 200) {
      setStripeAccount(getStripeAccountResponse.data);
    }
  };
  const getGmailAccount = async () => {
    const getGmailAccountResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/gmail/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getGmailAccountResponse && getGmailAccountResponse.status === 200) {
      setConnectedMailAccount(getGmailAccountResponse.data);
    }
    setMailAccountFetched(true);
  };
  const getAccountsInfo = async () => {
    if (servvData && servvData.servv_plugin_mode === "development") {
      if (settings && settings.current_plan.id === 2) {
        await getCalendarAccount();
        await getGmailAccount();
        await getZoomAccount();
        await getStripeAccount();
      } else {
        await getCalendarAccount();
      }
    } else {
      if (settings && settings.current_plan.id === 2) {
        getCalendarAccount();
        getGmailAccount();
        getZoomAccount();
        getStripeAccount();
      } else {
        getCalendarAccount();
      }
    }
  };
  const handleNextRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber + 1);
  };
  const handlePrevRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber - 1);
  };
  const getSettings = async () => {
    let getSettingsResponse;
    if (!adminSection) {
      try {
        getSettingsResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
          headers: {
            "X-WP-Nonce": servvData.nonce
          }
        });
      } catch (e) {
        console.log(e);
        setLoading(false);
        if (e.status === 401) setActivationError(true);
      }
    } else {
      // console.log(settingsData);
      getSettingsResponse = {
        status: 200,
        data: settingsData
      };
    }
    if (getSettingsResponse && getSettingsResponse.status === 200) {
      setSettings({
        ...getSettingsResponse.data,
        // current_plan: { ...getSettingsResponse.data.current_plan, id: 1 },
        settings: {
          ...getSettingsResponse.data.settings,
          admin_dashboard: getSettingsResponse.data?.settings?.admin_dashboard ? JSON.parse(getSettingsResponse.data.settings.admin_dashboard) : {}
        }
      });
    }
  };
  // console.log(attributes);

  const getFilterType = async type => {
    try {
      let reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
      let getFiltersListResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get(reqURL, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (getFiltersListResponse && getFiltersListResponse.status === 200) {
        setFiltersList(prevFilters => ({
          ...prevFilters,
          [type]: getFiltersListResponse.data
        }));
      }
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };
  const getEventTickets = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let postId = postID ? postID : urlParams.get("post");
      let reqURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
      if (occurrenceId) {
        reqURL += `?occurrence_id=${occurrenceId}`;
      }
      let getTicketsResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get(reqURL, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (getTicketsResponse && getTicketsResponse.status === 200) {
        setAttributes({
          tickets: getTicketsResponse.data
        });
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!adminSection) {
      setTabsList([{
        label: "Details",
        value: 0
      }, {
        label: "Settings",
        value: 1
      }]);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
  const getFilters = async () => {
    setLoading(true);
    if (!filters) {
      await getFilterType("locations");
      await getFilterType("languages");
      await getFilterType("categories");
      if (settings && settings.current_plan.id === 2) {
        await getFilterType("members");
      }
    } else {
      setFiltersList(filters);
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!postId && settings && settings.settings && settings.settings.admin_dashboard) {
      const {
        default_start_time,
        default_duration,
        default_event_type,
        default_quantity
      } = settings.settings.admin_dashboard;
      let newStartTime = null;
      if (default_start_time) {
        newStartTime = moment(default_start_time, "hh:mm a");
        handleEventChange("startTime", newStartTime.format("YYYY-MM-DDTHH:mm:ss"));
      }
      if (default_duration) {
        handleEventChange("duration", default_duration * 60);
      }
      if (default_event_type) {
        handleEventChange("location", default_event_type);
      }
      if (settings.current_plan.id === 1) {
        if (default_quantity) {
          handleProductChange("quantity", Number.parseInt(default_quantity));
        } else {
          handleProductChange("quantity", 1);
        }
      }
    }
  }, [settings]);
  const getEventData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let postId = postID ? postID : urlParams.get("post");
    let postStatus = "admin";
    if (!adminSection) {
      const {
        getEditedPostAttribute
      } = wp.data.select("core/editor");
      postStatus = getEditedPostAttribute("status");
      setStatus(postStatus);
    }
    setPostId(postId);
    if (postId) {
      let url = `/servv-plugin/v1/event/${postId}`;
      if (occurrenceId) {
        url += `?occurrence_id=${occurrenceId}`;
      }
      let res = null;
      if (postStatus === "publish" || postStatus === "admin") {
        try {
          res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
            path: url
          });
        } catch (e) {
          res = e;
          console.log(e);
          if (adminSection && e.message === "Post doesn't exist") {
            returnWithError(e.message);
          }
          return;
        }
      }
      if (res && res.code !== 404) {
        let startTime = null;
        if (res.meeting.provider === "offline") {
          if (res.meeting.providers_type === 1 || res.meeting.providers_type === 2 && occurrenceId) {
            startTime = moment(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
          } else if (res.meeting.providers_type === 2 && !occurrenceId) {
            startTime = moment(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
          }
        }
        if (res && res.meeting.provider === "zoom") {
          if (res.meeting.providers_type === 2 || res.meeting.providers_type === 8 && occurrenceId) {
            startTime = moment(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
          } else if (res.meeting.providers_type === 8 && !occurrenceId) {
            startTime = moment(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
          }
        }
        if (res.meeting.recurrence && !occurrenceId) {
          setTabsList([{
            label: "Details",
            value: 0
          }, {
            label: "Settings",
            value: 1
          }]);
        }
        let eventRecurrence = null;
        if (res.meeting.recurrence && res.meeting.recurrence.type) {
          eventRecurrence = res.meeting.recurrence;
        }
        let newAttributes = {
          meeting: {
            eventType: res.meeting.providers_type,
            title: res.meeting.topic,
            location: res.meeting.provider,
            startTime: startTime,
            duration: res.meeting.duration,
            timezone: res.meeting.timezone,
            recurrence: eventRecurrence
          },
          product: {
            price: res.product.price,
            quantity: res.product.current_quantity,
            current_quantity: res.product.current_quantity
          },
          notifications: {
            google_calendar: res.notifications.google_calendar,
            disable_emails: res.notifications.disable_emails
          },
          types: {
            ...res.types
          },
          custom_fields: {
            ...res.custom_fields
          }
        };
        if (res.tickets && res.tickets) {
          newAttributes.tickets = res.tickets;
        }
        if (!res.product.current_quantity) {
          delete newAttributes.product.current_quantity;
        }
        setAttributes(newAttributes);
      }
    }
    return postId;
  };
  const [selectedRegistrants, setSelectedRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const handleSelectRegistrants = id => {
    let currentRegistrants = [...selectedRegistrants];
    if (currentRegistrants.indexOf(id) >= 0) {
      currentRegistrants = currentRegistrants.filter(reg => reg !== id);
    } else {
      currentRegistrants.push(id);
    }
    setSelectedRegistrants(currentRegistrants);
  };
  const [registrantsPagination, setRegistrantsPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const getEventRegistrants = async (page = 1, id = null) => {
    setLoading(true);
    let post = postID;
    let res = null;
    if (id) {
      post = id;
    }
    let url = `/servv-plugin/v1/event/${post}/registrants?page_size=10&page=${page}`;
    if (occurrenceId) {
      url += `&occurrence_id=${occurrenceId}`;
    }
    try {
      res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
        path: url
      });
    } catch (e) {
      console.log(e);
    }
    if (res) {
      let registrantsForEdit = registrants.filter(reg => reg.status);
      let existingRegistrants = res.registrants.map(registrant => {
        if (registrant) return {
          id: registrant.id,
          firstName: registrant.first_name,
          lastName: registrant.last_name,
          email: registrant.email
        };
      });
      let registrantsForShow = existingRegistrants.concat(registrantsForEdit);
      setRegistrants(registrantsForShow || []);
      setRegistrantsPagination({
        pageNumber: res.page_number,
        pageCount: res.page_count
      });
    }
    setLoading(false);
  };
  const handleDeleteMultipleRegistrants = async selectedRegistrants => {
    const results = [];
    for (const id of selectedRegistrants) {
      try {
        const value = await removeSingleRegistrant(id);
        results.push({
          status: "fulfilled",
          value
        });
      } catch (reason) {
        results.push({
          status: "rejected",
          reason
        });
      }
    }
    getEventRegistrants();
    return results;
  };
  const removeSingleRegistrant = async registrantID => {
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE"
    });
    return res;
  };
  const removeRegistrant = async registrantID => {
    setLoading(true);
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE"
    });
    setLoading(false);
    if (res) {
      let currentRegistrants = [...registrants];
      currentRegistrants = currentRegistrants.filter(reg => reg.id !== registrantID);

      // setAttributes({ registrants: currentRegistrants });
      // setRegistrants(currentRegistrants);
      getEventRegistrants();
    }
  };
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getEventFullInfo = async () => {
    setLoading(true);
    if (servvData && servvData.servv_plugin_mode === "development") {
      const id = await getEventData();
      if (id && adminSection) {
        await getEventRegistrants(1, id);
        if (adminSection && settings && settings.current_plan.id === 2) {
          await getEventTickets();
        }
      }
      await getFilters();
      await getAccountsInfo();
    } else {
      const id = await getEventData();
      if (id && adminSection) {
        getEventRegistrants(1, id);
        if (adminSection && settings && settings.current_plan.id === 2) {
          getEventTickets();
        }
      }
      getFilters();
      getAccountsInfo();
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoading(true);
    setAttributes({
      registrants: []
    });
    getSettings();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings) getEventFullInfo();
  }, [settings]);
  const productDetails = {
    ...attributes.product
  };
  const notifications = {
    ...attributes.notifications
  };
  const customFields = {
    ...attributes.custom_fields
  };
  const types = {
    ...attributes.types
  };
  const tickets = [...attributes.tickets];
  // console.log(productDetails);
  const handleRegistrantsChange = registrant => {
    let currentRegistrants = registrants;
    // console.log(registrant, registrant?.status);
    if (registrant) {
      if (registrant.status === "create") {
        currentRegistrants.push(registrant);
      } else {
        currentRegistrants = currentRegistrants.filter(reg => reg.tempId !== registrant.tempId);
      }
      setRegistrants(currentRegistrants);
      setAttributes({
        registrants: currentRegistrants.map(reg => {
          if (reg.id) return {
            id: reg.id,
            first_name: reg.firstName,
            last_name: reg.lastName,
            email: reg.email
          };else return {
            first_name: reg.firstName,
            last_name: reg.lastName,
            email: reg.email,
            status: reg.status
          };
        })
      });
    }
  };
  const handleEventChange = (field, value) => {
    const meeting = attributes.meeting;
    const customFields = attributes.custom_fields || {};
    meeting[field] = value;
    if (field === "recurrence" && value !== null) {
      if (meeting.location === "offline") {
        meeting.eventType = 2;
      } else if (meeting.location === "zoom") {
        meeting.eventType = 8;
      }
    } else if (field === "recurrence" && value === null) {
      if (meeting.location === "offline") {
        meeting.eventType = 1;
      } else if (meeting.location === "zoom") {
        meeting.eventType = 2;
      }
    }
    if (field === "location") {
      if (value === "zoom") {
        if (meeting.recurrence) {
          meeting.eventType = 8;
        } else meeting.eventType = 2;
        // customFields.custom_field_1_name = "";
        // customFields.custom_field_1_value = "";
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
        // customFields.custom_field_1_name = "Meeting URL";
        // customFields.custom_field_1_value = "";
      }
    }
    // console.log(meeting.location);
    setAttributes({
      meeting: {
        ...meeting
      },
      custom_fields: {
        ...customFields
      }
    });
  };
  const handleTypesChange = (field, value) => {
    let types = attributes.types;
    if (field === "members" && value.length > 0) {
      types["members"] = value;
    } else {
      if (types[field] === value) {
        delete types[field];
      } else {
        types[field] = value;
      }
    }
    setAttributes({
      types: {
        ...types
      }
    });
  };
  const handleNotificationsChange = (field, value) => {
    const notifications = attributes.notifications;
    notifications[field] = value;
    setAttributes({
      notifications: {
        ...notifications
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleEventChange("title", title);
  }, [title]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleEventChange("agenda", agenda);
  }, [agenda]);
  const [tabsList, setTabsList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    label: "Details",
    value: 0
  }, {
    label: "Settings",
    value: 1
  }, {
    label: "Registrants",
    value: 2
  }]);
  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const handleSelectChange = val => {
    setSelectedTab(val);
  };
  const handleProductChange = (field, value) => {
    const product = attributes.product;
    product[field] = value;
    setAttributes({
      product: {
        ...product
      }
    });
  };
  const handleCustomFieldsChange = (field, value) => {
    const customFields = attributes.custom_fields;
    customFields[field] = value;
    setAttributes({
      custom_fields: {
        ...customFields
      }
    });
  };
  const handleResendNotifications = async registrants => {
    for (const id of registrants) {
      try {
        await handleResendNotificationToSingleRegistrant(id);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Email notifications are successfully resend", {
          autoClose: 5000
        });
      } catch (error) {
        console.error(`Failed to resend notification to registrant ${id}:`, error);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)(`Failed to resend notification to registrant ${registrants.filter(reg => reg.id === id)[0].email}:`, {
          autoClose: 5000
        });
      }
    }
  };
  const handleResendNotificationToSingleRegistrant = async registrantID => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({
      path: url,
      method: "POST"
    });
  };
  const handleResendNotificationsToAll = async () => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = await (0,axios__WEBPACK_IMPORTED_MODULE_14__["default"])({
      url: url,
      method: "POST",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(e => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Servv was unable to resend notifications. Please try again.");
    });
    if (res && res.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Email notifications have been resent.");
    }
  };
  const handleTicketsChange = tickets => {
    setAttributes({
      tickets: tickets
    });
    const quantity = tickets.reduce((totalQuantity, ticket) => totalQuantity + ticket.quantity, 0);
    if (quantity > 0) {
      handleProductChange("quantity", quantity);
    }
  };
  // console.log(
  //   "1 -->",
  //   eventDetails && eventDetails.location ? eventDetails.location : ""
  // );
  // console.log(
  //   "2 -->",
  //   settings && settings.settings.admin_dashboard.default_event_type
  //     ? settings.settings.admin_dashboard.default_event_type
  //     : "offline"
  // );
  // console.log(postId);

  const [emptyFilters, setEmptyFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isFiltersEmpty = !filtersList || filtersList && filtersList.categories && filtersList.categories.length === 0 && filtersList && filtersList.members && filtersList.members.length === 0 && filtersList && filtersList.languages && filtersList.languages.length === 0;
    // console.log(isFiltersEmpty);
    if (isFiltersEmpty) {
      setEmptyFilters(true);
    }
  }, [filtersList]);
  const isBillingPlanRestriction = occurrenceId || settings?.current_plan.id !== 2;
  // const isBillingPlanRestriction = false;
  // console.log(status === "publish");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      children: loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: `${loading ? "loading" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {
        position: "bottom-right"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tabsList: tabsList,
        selected: selectedTab,
        handleSelectChange: handleSelectChange
      }), selectedTab === 0 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DateTimeSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          eventDetails: eventDetails,
          occurrenceId: occurrenceId,
          onChange: handleEventChange,
          settings: settings,
          adminSection: adminSection,
          setToast: setToastMessage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_LocationSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
          eventDetails: eventDetails,
          onChange: handleEventChange,
          settings: settings,
          disabled: !zoomAccount || zoomAccount && zoomAccount.length === 0 || adminSection || status === "publish",
          meetingType: eventDetails && eventDetails.location ? eventDetails.location : settings && settings.settings.admin_dashboard.default_event_type ? settings.settings.admin_dashboard.default_event_type : "offline",
          customFields: customFields,
          handleCustomFieldChange: handleCustomFieldsChange,
          zoomAccount: zoomAccount,
          types: types,
          onFilterChange: handleTypesChange,
          filtersList: filtersList
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_TicketsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
          adminSection: adminSection,
          tickets: tickets,
          eventDetails: eventDetails,
          onTicketsChange: handleTicketsChange,
          productDetails: productDetails,
          id: postId,
          handleDetailsChange: handleProductChange,
          settings: settings,
          postId: postId,
          disabled: settings?.current_plan.id !== 2,
          handleSetLoading: handleSetLoading,
          stripeAccount: stripeAccount,
          occurrenceId: occurrenceId,
          status: status
        }), emptyFilters !== undefined && emptyFilters === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_FiltersSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
          types: types,
          onChange: handleTypesChange,
          filtersList: filtersList
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
          customFields: customFields,
          onChange: handleCustomFieldsChange,
          meetingType: eventDetails && eventDetails.location ? eventDetails.location : settings && settings.settings.admin_dashboard.default_event_type ? settings.settings.admin_dashboard.default_event_type : "offline"
        })]
      }), selectedTab === 1 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EventVisibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
          productDetails: productDetails,
          onChange: handleProductChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_NotificationsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          notifications: notifications,
          onChange: handleNotificationsChange,
          googleCalendar: googleCalendar,
          connectedMailAccount: connectedMailAccount,
          calendarAccountFetched: calendarAccountFetched,
          mailAccountFetched: mailAccountFetched
        })]
      }), selectedTab === 2 && adminSection && postId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_RegistrantsSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
        registrants: registrants,
        onChange: handleRegistrantsChange,
        onDelete: removeRegistrant,
        selectedRegistrants: selectedRegistrants,
        handleSelectRegistrants: handleSelectRegistrants,
        handleDeleteMultipleRegistrants: handleDeleteMultipleRegistrants,
        registrantsPagination: registrantsPagination,
        onNext: handleNextRegistrantsPage,
        onPrev: handlePrevRegistrantsPage,
        handleResendNotifications: handleResendNotifications,
        handleResendNotificationsToAll: handleResendNotificationsToAll,
        disabled: settings?.current_plan.id !== 2
      }), selectedTab === 0 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "section-container border-b-2 border-gray-200",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "section-description",
          children: "* Indicates a required field"
        })
      })]
    }), activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "section-container border-b-2 border-gray-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "section-description",
        children: "Activation failed. Please contact the Servv support team."
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDetails);

/***/ }),

/***/ "./src/Components/PostEditor/EventVisibility.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/PostEditor/EventVisibility.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const EventVisibility = ({
  productDetails,
  onChange
}) => {
  const eventVisibilityOptions = ["Public", "Unlisted"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section-heading",
      children: t("Visibility")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "Set event visibility",
      buttons: eventVisibilityOptions,
      active: !productDetails.is_hidden ? eventVisibilityOptions[0] : eventVisibilityOptions[1],
      onChange: () => {
        onChange("is_hidden", !productDetails.is_hidden);
      }
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventVisibility);

/***/ }),

/***/ "./src/Components/PostEditor/FiltersSection.jsx":
/*!******************************************************!*\
  !*** ./src/Components/PostEditor/FiltersSection.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _SelectDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectDropdown */ "./src/Components/PostEditor/SelectDropdown.jsx");
/* harmony import */ var _Controls_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/CustomDropdown */ "./src/Components/Controls/CustomDropdown.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {}
}) => {
  const filtersTabs = ["Your filters", "Create new"];
  const handleSelectLocation = location => {
    onChange("location_id", location);
  };
  const handleSelectCategory = category => {
    onChange("category_id", category);
  };
  const handleSelectLanguage = language => {
    onChange("language_id", language);
  };
  const handleSelectMember = member => {
    onChange("members", member);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "section-heading",
        children: t("Filters")
      }), filtersList.categories && filtersList.categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Category",
        options: filtersList.categories,
        selected: types.category_id || null,
        onSelect: handleSelectCategory
      }), filtersList.languages && filtersList.languages.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Language",
        options: filtersList.languages,
        selected: types.language_id || null,
        onSelect: handleSelectLanguage
      }), filtersList.members && filtersList.members.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Members",
        options: filtersList.members,
        selected: types.members || [],
        onSelect: handleSelectMember,
        multi: true
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersSection);

/***/ }),

/***/ "./src/Components/PostEditor/LocationSection.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/PostEditor/LocationSection.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectDropdown */ "./src/Components/PostEditor/SelectDropdown.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const LocationSection = ({
  eventDetails,
  onChange,
  meetingType,
  customFields,
  handleCustomFieldChange,
  settings = {},
  disabled = false,
  zoomAccount,
  types = {},
  filtersList = [],
  onFilterChange = () => {}
}) => {
  const {
    custom_field_1_name,
    custom_field_1_value
  } = customFields;
  const [onlineType, setOnlineType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    location
  } = eventDetails;
  const eventTypes = ["In-person", "Online"];
  const handleLocationChange = newVal => {
    if (newVal === eventTypes[0]) {
      onChange("location", "offline");
      handleCustomFieldChange("custom_field_1_name", "Address");
      handleCustomFieldChange("custom_field_1_value", "");
    } else if (newVal === eventTypes[1]) {
      onChange("location", "zoom");
      handleCustomFieldChange("custom_field_1_name", "Link");
      handleCustomFieldChange("custom_field_1_value", "");
    }
  };
  const handleSelectLocation = location => {
    onFilterChange("location_id", location);
  };
  const handleSelectOnlineType = type => {
    setOnlineType(type);
    if (!type) {
      onChange("location", "offline");
    } else {
      onChange("location", "zoom");
    }
    handleCustomFieldChange("custom_field_1_name", "Link");
    handleCustomFieldChange("custom_field_1_value", "");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if (disabled) {
    //   handleLocationChange("offline");
    // }

    if ((location === "zoom" || location === "online") && !custom_field_1_name) {
      handleCustomFieldChange("custom_field_1_name", "Link");
    }
  }, [disabled, location, customFields]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-heading",
      children: "Venue & access"
    }), settings && zoomAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "",
      buttons: eventTypes,
      active: location === "offline" && custom_field_1_name !== "Link" ? eventTypes[0] : eventTypes[1],
      onChange: handleLocationChange
      // disabled={disabled}
    }), settings && (!zoomAccount || !zoomAccount.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-description",
      children: "Please note: To use the Integrations feature, you need to connect your Zoom account."
    }), meetingType === "offline" && custom_field_1_name !== "Link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "input-container-row items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "section-description",
          children: t("Location (In-person) or meeting link (e.g., Google Meet, Microsoft\r\n              Teams)")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: custom_field_1_value,
          onChange: val => handleCustomFieldChange("custom_field_1_value", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      })
    }), (meetingType !== "offline" || custom_field_1_name === "Link") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "section-description",
        children: "Choose a join method:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "tabs-group-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "flex flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "me-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => handleSelectOnlineType(false),
              className: `tab-element ${!onlineType ? "tab-active" : ""}`,
              children: "Join link URL"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "me-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => handleSelectOnlineType(true),
              className: `tab-element ${onlineType ? "tab-active" : ""}`,
              disabled: !zoomAccount || zoomAccount && !zoomAccount.email,
              children: "Integration"
            })
          })]
        })
      }), !onlineType && custom_field_1_name === "Link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "section-description",
          children: "Join link URL"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: custom_field_1_value,
          onChange: val => handleCustomFieldChange("custom_field_1_value", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      }), onlineType && zoomAccount && zoomAccount.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "input-container-col w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "Select an integration",
          options: [{
            ...zoomAccount
          }].map(acc => {
            return {
              name: acc.email,
              id: acc.id
            };
          }),
          selected: zoomAccount.id || null,
          onSelect: () => {}
        })
      })]
    }), filtersList.locations && filtersList.locations.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Location",
      options: filtersList.locations,
      selected: types.location_id || null,
      onSelect: handleSelectLocation
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationSection);

/***/ }),

/***/ "./src/Components/PostEditor/NotificationsSection.jsx":
/*!************************************************************!*\
  !*** ./src/Components/PostEditor/NotificationsSection.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const NotificationsSection = ({
  notifications,
  onChange,
  googleCalendar,
  connectedMailAccount,
  calendarAccountFetched,
  mailAccountFetched
}) => {
  const notificationsOptions = ["On", "Off"];

  // useEffect(() => {
  //     getAccountsInfo()
  // }, [])
  // console.log(notifications);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "section-container border-b",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "section-heading",
        children: t("Notifications")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: "Email notifications",
        buttons: notificationsOptions,
        active: !notifications.disable_emails && connectedMailAccount ? notificationsOptions[0] : notificationsOptions[1],
        disabled: !mailAccountFetched || mailAccountFetched && !connectedMailAccount,
        onChange: () => {
          onChange("disable_emails", !notifications.disable_emails);
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsSection);

/***/ }),

/***/ "./src/Components/PostEditor/ProductDetails.jsx":
/*!******************************************************!*\
  !*** ./src/Components/PostEditor/ProductDetails.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





// import { PlusCircleIcon } from "@heroicons/react/16/solid";

const ProductDetails = ({
  productDetails,
  handleDetailsChange,
  id,
  stripeAccount
}) => {
  const {
    price,
    quantity,
    current_quantity
  } = productDetails;
  const ticketTypes = ["Free", "Paid"];
  const ticketsAvailability = ["Open", "Sales start & end"];
  const [ticketAvailability, setTicketAvailability] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedTicketType, setSelectedTicketType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ticketTypes[0]);
  const handleTicketTypeChange = newValue => {
    setSelectedTicketType(newValue);
  };
  const changeQuantity = val => {
    // console.log(val);
    if (isNaN(Number.parseInt(val))) handleDetailsChange("quantity", 0);else handleDetailsChange("quantity", Number.parseInt(val) <= 100 ? Number.parseInt(val) : 100);
    // handleDetailsChange("quantity", Number.parseInt(val));
  };
  const renderStandartTicket = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "w-full border border-gray-200 bg-white rounded-lg flex flex-row p-lg relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row gap-1 justify-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "text-sm font-semibold text-gray-700",
            children: "Standard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "text-sm font-regular text-gray-600",
            children: productDetails?.price || "Free"
          })]
        }), productDetails.quantity !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: `${productDetails.quantity > 1 || productDetails.quantity < 1 ? productDetails.quantity + " " + "tickets" : productDetails.quantity + " " + "ticket"}`,
          color: "success",
          type: "pill-colour"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "Unlimited quantity",
          color: "success",
          type: "pill-colour"
        })]
      })
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (productDetails.price === 0) {
      setSelectedTicketType(ticketTypes[0]);
    } else {
      setSelectedTicketType(ticketTypes[1]);
    }
  }, []);
  const handleTicketAdd = () => {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [renderStandartTicket(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("fieldset", {
        className: "input-container-col",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "input-container-col"
          }), selectedTicketType === ticketTypes[1] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "section-description",
              children: "Ticket price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
              value: price,
              onChange: val => handleDetailsChange("price", val),
              fullWidth: true,
              maxLength: 4,
              type: "number",
              minValue: 0,
              maxValue: 10000000,
              align: "right",
              disabled: !stripeAccount || !stripeAccount.id
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              className: "section-description",
              children: "Quantity"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "input-container-col w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
                value: quantity,
                onChange: val => changeQuantity(val),
                fullWidth: true,
                maxLength: 20,
                type: "number",
                minValue: 0,
                maxValue: 100,
                align: "left"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-sm text-gray-300",
              children: "Maximum quantity for free plan is 25"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Availability",
            buttons: ticketsAvailability,
            active: ticketsAvailability[ticketAvailability],
            onChange: () => {},
            disabled: true
          })]
        })
      })
    })]
  })
  // <div className="input-container-row items-center">
  //   <div className="input-container-col w-full">
  //     <div className="section-description">Price</div>
  //     <InputFieldControl
  //       value={price}
  //       onChange={(val) => handleDetailsChange("price", val)}
  //       fullWidth={true}
  //       maxLength={4}
  //       type="number"
  //       minValue={0}
  //       maxValue={10000000}
  //       align="right"
  //       disabled={!stripeAccount || !stripeAccount.id}
  //     />
  //   </div>
  //   <div className="input-container-col w-full">
  //     <div className="section-description">Quantity</div>
  //     <InputFieldControl
  //       value={quantity}
  //       onChange={(val) =>
  //         handleDetailsChange("quantity", Number.parseInt(val))
  //       }
  //       fullWidth={true}
  //       maxLength={20}
  //       type="number"
  //       minValue={0}
  //       maxValue={10000000}
  //       align="right"
  //     />
  //   </div>
  // </div>
  ;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

/***/ }),

/***/ "./src/Components/PostEditor/Registrant.jsx":
/*!**************************************************!*\
  !*** ./src/Components/PostEditor/Registrant.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Registrant = ({
  id,
  firstName,
  lastName,
  email,
  status,
  onStatusChange,
  onSelect,
  selected
}) => {
  console.log(id, selected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "registrant group",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
      gap: 2,
      align: "left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: () => onSelect(id),
        checked: selected
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
        children: firstName + " " + lastName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: email
      }), status === "create" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Draft",
        size: "medium",
        color: "success",
        type: "pill-colour"
      }), status === "delete" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Delete",
        size: "medium",
        color: "error",
        type: "pill-colour"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto hidden group-hover:flex",
        onClick: () => onStatusChange(id),
        children: !status || status === "create" ? "Delete" : "Revert"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registrant);

/***/ }),

/***/ "./src/Components/PostEditor/RegistrantsSection.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/PostEditor/RegistrantsSection.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Registrant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Registrant */ "./src/Components/PostEditor/Registrant.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const RegistrantsSection = ({
  registrants,
  onChange,
  onDelete,
  handleSelectRegistrants,
  selectedRegistrants,
  handleDeleteMultipleRegistrants,
  registrantsPagination,
  onNext,
  onPrev,
  handleResendNotifications,
  handleResendNotificationsToAll,
  disabled = true
}) => {
  const [firstNameValue, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const [lastNameValue, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const [showError, setShowError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const onStatusChange = id => {
    let newRegistrants = [...registrants];
    let registrantIndex = newRegistrants.findIndex(reg => reg.id === id || reg.tempId === id);
    let registrant = newRegistrants[registrantIndex];
    // console.log(registrant);
    if (registrant.status) {
      if (registrant.status === "create") registrant.status = "delete";
      onChange(registrant);
    } else {
      onDelete(id);
    }
  };
  const handleRegistrantAdd = () => {
    let newRegistrant = {};
    newRegistrant["tempId"] = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
    newRegistrant["firstName"] = firstNameValue;
    newRegistrant["lastName"] = lastNameValue;
    newRegistrant["email"] = email;
    newRegistrant["status"] = "create";
    let newRegistrants = [...registrants];
    newRegistrants.push(newRegistrant);
    setFirstName("");
    setLastName("");
    setEmail("");
    onChange(newRegistrant);
  };
  const renderRegistrants = () => {
    return registrants.map(registrant => {
      console.log("selectedRegistrants", selectedRegistrants, registrant.id, selectedRegistrants.indexOf(registrant.id) >= 0);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Registrant__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: registrant.id || registrant.tempId,
        firstName: registrant.firstName,
        lastName: registrant.lastName,
        email: registrant.email,
        status: registrant.status,
        onStatusChange: onStatusChange,
        onSelect: handleSelectRegistrants,
        selected: selectedRegistrants.indexOf(registrant.id) >= 0 || selectedRegistrants.indexOf(registrant.tempId) >= 0
      });
    });
  };
  const isResentdToAllAvailable = () => {
    return registrants.filter(reg => reg.id).length > 0 && !disabled;
  };
  const isResendAvailable = () => {
    const filtered = registrants.filter(reg => selectedRegistrants.includes(reg.id));
    return filtered.length > 0 && !disabled;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "section-container border-b",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "section-heading",
      children: "Registrants"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("fieldset", {
      className: "input-container-col",
      children: !disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              className: "section-description",
              children: "First Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: firstNameValue,
              onChange: val => setFirstName(val),
              type: "text",
              width: "100%",
              align: "left"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              className: "section-description",
              children: "Last Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: lastNameValue,
              onChange: val => setLastName(val),
              type: "text",
              width: "100%",
              align: "left"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "input-container-col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "section-description",
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: email,
            onChange: val => setEmail(val),
            type: "text",
            width: "100%",
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          align: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "flex flex-row gap-2 items-center p-2 rounded-lg border-solid border border-gray-300 bg-white text-gray-900 text-sm disabled:text-gray-300 disabled:border-gray-100",
            onClick: () => handleRegistrantAdd(),
            disabled: email.length === 0 || firstNameValue.length === 0 || lastNameValue.length === 0,
            children: "Add Registrant"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
      gap: 2,
      children: renderRegistrants()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
      align: "right",
      gap: 2,
      children: [selectedRegistrants.length > 0 && isResendAvailable() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50",
          onClick: () => handleDeleteMultipleRegistrants(selectedRegistrants),
          disabled: !isResendAvailable(),
          children: "Delete Registrants"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50",
          onClick: () => handleResendNotifications(selectedRegistrants),
          disabled: !isResendAvailable(),
          children: "Resend notifications"
        })]
      }), registrants.length > 0 && isResentdToAllAvailable() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto group-hover:flex disabled:text-gray-300 disabled:border-gray-200 disabled:bg-gray-50",
        onClick: () => handleResendNotificationsToAll(),
        disabled: !isResentdToAllAvailable(),
        children: "Resend notifications to All"
      })]
    }), registrantsPagination && registrantsPagination.pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
      hasNext: registrantsPagination.pageNumber < registrantsPagination.pageCount,
      hasPrev: registrantsPagination.pageNumber > 1,
      onNext: onNext,
      onPrev: onPrev
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrantsSection);

/***/ }),

/***/ "./src/Components/PostEditor/SelectDropdown.jsx":
/*!******************************************************!*\
  !*** ./src/Components/PostEditor/SelectDropdown.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/FiberManualRecord */ "./node_modules/@mui/icons-material/esm/FiberManualRecord.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





/**
 * @param {string} title
 * @param {Array} options [{id, name}]
 * @param {number|Array} selected
 * @param {function} onSelect
 * @param {boolean} multi
 */

const SelectDropdown = ({
  title,
  options,
  selected,
  onSelect,
  multi = false
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // console.log(options, selected);
  // Robust outside click handler using pointerdown and composedPath
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) return;
    const handleClickOutside = event => {
      const path = event.composedPath ? event.composedPath() : [];
      if (dropdownRef.current && !path.includes(dropdownRef.current) && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpen]);

  // Multi-select logic
  const handleMultiSelect = optionId => {
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    if (newSelected.includes(optionId)) {
      newSelected = newSelected.filter(id => id !== optionId);
    } else {
      newSelected.push(optionId);
    }
    onSelect(newSelected);
    setIsOpen(false);
  };

  // Single-select logic
  const handleSingleSelect = optionId => {
    onSelect(optionId);
    setIsOpen(false);
  };

  // Remove badge for multi-select
  const handleRemoveBadge = (optionId, e) => {
    e.stopPropagation();
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    newSelected = newSelected.filter(id => id !== optionId);
    onSelect(newSelected);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative w-full",
    ref: dropdownRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: `${title}-select`,
      className: "block text-sm font-medium text-gray-700 mb-1",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer bg-white",
      onClick: () => setIsOpen(open => !open),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "flex flex-row text-sm flex-wrap gap-1",
        children: multi && Array.isArray(selected) && selected.length > 0 ? selected.map(selectedId => {
          const option = options.find(opt => opt.id === selectedId);
          // console.log("option", option);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
            text: option?.name,
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__["default"], {
              style: {
                width: "10px",
                fill: "#17B26A"
              }
            }),
            iconAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              onClick: e => handleRemoveBadge(selectedId, e),
              style: {
                cursor: "pointer"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__["default"], {
                style: {
                  width: "10px"
                }
              })
            }),
            color: "gray",
            type: "badge-pill-outline",
            size: "small",
            align: "center"
          }, selectedId);
        }) : !multi && options.find(option => option.id === selected) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
          text: options.find(option => option.id === selected)?.name,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__["default"], {
            style: {
              width: "10px",
              fill: "#17B26A"
            }
          }),
          iconAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            onClick: e => {
              e.stopPropagation();
              onSelect(null);
            },
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__["default"], {
              style: {
                width: "10px"
              }
            })
          }),
          color: "gray",
          type: "badge-pill-outline",
          size: "small",
          align: "center"
        }) : "Select an option"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: `w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`,
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M19 9l-7 7-7-7"
        })
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      className: "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto",
      children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
        className: `w-full p-2 hover:bg-gray-100 cursor-pointer flex items-center ${multi && selected && selected.includes(option.id) ? "font-semibold text-purple-700" : ""}`,
        onClick: () => multi ? handleMultiSelect(option.id) : handleSingleSelect(option.id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "w-full flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
            text: option.name,
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__["default"], {
              style: {
                width: "10px",
                fill: "#17B26A"
              }
            }),
            color: "gray",
            type: "badge-pill-outline",
            size: "small",
            fullWidth: true,
            align: "center"
          }), multi && selected && selected.includes(option.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "ml-auto text-xs text-purple-600",
            children: t("✓")
          })]
        })
      }, index))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectDropdown);

/***/ }),

/***/ "./src/Components/PostEditor/TicketsSection.jsx":
/*!******************************************************!*\
  !*** ./src/Components/PostEditor/TicketsSection.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _DatePickerControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatePickerControl */ "./src/Components/PostEditor/DatePickerControl.jsx");
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductDetails */ "./src/Components/PostEditor/ProductDetails.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/EllipsisVerticalIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PencilSquareIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/DocumentDuplicateIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusCircleIcon.js");
/* harmony import */ var _utilities_tickets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/tickets */ "./src/utilities/tickets.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const TicketsSection = ({
  adminSection,
  tickets,
  eventDetails,
  onTicketsChange,
  settings,
  postId,
  disabled,
  stripeAccount,
  handleSetLoading = () => {},
  productDetails,
  id,
  handleDetailsChange = () => {},
  occurrenceId,
  status = null
}) => {
  const ticketTypes = ["Paid", "Free", "Donation"];
  const ticketsAvailability = ["Open", "Sales start & end"];
  const [selectedTicket, setSelectedTicket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [ticketName, setTicketName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedTicketType, setSelectedTicketType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showTicketDropdown, setShowTicketDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [ticketQuantity, setTicketsQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [ticketPrice, setTicketPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [ticketPriceInput, setTicketPriceInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [ticketAvailability, setTicketAvailability] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status === "publish" || status === "admin") return;
    if (settings && settings.settings && settings.current_plan && settings.current_plan.id === 1) {
      if (settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_quantity) {
        if (productDetails.quantity !== 1) {
          handleDetailsChange("quantity", 1);
        }
      } else {
        console.log("quantity change");
        handleDetailsChange("quantity", 1);
      }
    }
  }, [status, settings]);
  const handleTicketDelete = async index => {
    let currentTickets = [...tickets];
    if (currentTickets[index].id) {
      handleSetLoading(true);
      const response = await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.deleteTicket)({
        postId: postId,
        token: servvData.nonce,
        ticketId: currentTickets[index].id
      });
      if (response && response.status === 200) {
        currentTickets.splice(index, 1);
        onTicketsChange(currentTickets);
        if (selectedTicket === index) setSelectedTicket(null);
        setShowTicketDropdown(null);
      }
      handleSetLoading(false);
    } else {
      currentTickets.splice(index, 1);
      onTicketsChange(currentTickets);
      if (selectedTicket === index) setSelectedTicket(null);
      setShowTicketDropdown(null);
    }
  };
  const handleTicketChange = (field, value) => {
    let editedTicket = [...tickets];
    editedTicket[selectedTicket][field] = value;
    onTicketsChange(editedTicket);
  };
  const handleTimeFormatChange = () => {
    if (!settings) return;else if (settings && settings.settings && settings.settings.time_format_24_hours) {
      // console.log(settings.settings.time_format_24_hours);
      setTimeFormat("HH:mm");
    }
  };
  const handleSetTicketForEdit = index => {
    setSelectedTicket(index);
    if (tickets[index].price > 0) {
      setSelectedTicketType(0);
    } else if (tickets[index].is_donation) {
      setSelectedTicketType(2);
    } else {
      setSelectedTicketType(1);
    }
    setShowTicketDropdown(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleTimeFormatChange();
  }, [settings]);
  const renderTickets = () => {
    return tickets.map((ticket, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "w-full border border-gray-200 bg-white rounded-lg flex flex-row p-lg relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex flex-row gap-1 justify-start items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-semibold text-gray-700",
                children: ticket?.name || ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-regular text-gray-600",
                children: ticket?.price ? ticket.price + ` ${settings.currency ? settings.currency : "CAD"}` : "Free"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex flex-row gap-2",
              children: [ticket.quantity ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: `${ticket.quantity > 1 ? ticket.quantity + " " + "tickets" : ticket.quantity + " " + "ticket"}`,
                color: "success",
                type: "pill-colour"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: "Unlimited quantity",
                color: "success",
                type: "pill-colour"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "self-end justify-self-end",
                children: !ticket.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  text: "Draft",
                  color: "gray",
                  type: "pill-outline"
                })
              })]
            })]
          }), (adminSection || !ticket.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            className: "justify-self-end ml-auto",
            onClick: showTicketDropdown === index ? () => setShowTicketDropdown(null) : () => setShowTicketDropdown(index),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: "w-6 fill-gray-700"
            })
          }), showTicketDropdown === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "absolute top-full right-0 mt-2 transform translate-x-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 flex flex-col gap-4 transition-all duration-200 ease-out opacity-100 scale-100",
            children: [ticket?.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "text-sm font-semibold text-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: ticket?.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: " "
              }), ticket?.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "font-regular",
                children: ticket?.price + ` ${settings.currency ? settings.currency : "CAD"}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
              className: "flex flex-row justify-start gap-2 w-full flex-nowrap",
              onClick: () => {
                handleSetTicketForEdit(index);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: "w-6 stroke-white fill-black"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-medium text-gray-700",
                children: t("Edit ticket")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
              className: "flex flex-row justify-start gap-2 w-full flex-nowrap",
              onClick: () => handleTicketAdd({
                ticket: ticket
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
                className: "w-6 stroke-white fill-black"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-medium text-gray-700",
                children: t("Duplicate ticket")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "w-full border-b border-gray-200"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
              className: "flex flex-row justify-start gap-2 w-full flex-nowrap",
              onClick: () => handleTicketDelete(index),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_14__["default"], {
                className: "w-6 stroke-white fill-black"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-medium text-gray-700",
                children: t("Delete ticket")
              })]
            })]
          })]
        })
      });
    });
  };
  const handleTicketTypeChange = val => {
    const type = ticketTypes.indexOf(val);
    let currentTickets = [...tickets];
    if (type === 0) {
      currentTickets[selectedTicket].price = 0;
      if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_price) {
        currentTickets[selectedTicket].price = settings.settings.admin_dashboard.default_price;
        setTicketPriceInput(settings.settings.admin_dashboard.default_price);
      }
      currentTickets[selectedTicket].is_donation = false;
    }
    if (type === 1) {
      delete currentTickets[selectedTicket].price;
      currentTickets[selectedTicket].is_donation = false;
    }
    if (type == 2) {
      delete currentTickets[selectedTicket].price;
      currentTickets[selectedTicket].is_donation = true;
    }
    onTicketsChange(currentTickets);
    setSelectedTicketType(type);
  };
  const handleTicketNameChange = val => {
    handleTicketChange("name", val);
  };
  const handleTicketPriceChange = val => {
    let currentValue = val;
    if (val.indexOf(".") === currentValue.length - 1) {
      currentValue += "00";
    }
    const newPrice = Number.parseFloat(currentValue);
    handleTicketChange("price", isNaN(newPrice) ? "" : newPrice);
    setTicketPriceInput(val);
  };
  const handleTicketsQuantityChange = val => {
    if (isNaN(Number.parseInt(val)) && Number.parseInt(val) < 0) handleTicketChange("quantity", 0);else handleTicketChange("quantity", Number.parseInt(val) <= 1000 ? Number.parseInt(val) : 1000);
  };
  const handleTicketAvailabilityChange = val => {
    const type = ticketsAvailability.indexOf(val);
    const currentTickets = [...tickets];
    if (type === 0) {
      if (currentTickets[selectedTicket].start_datetime) {
        delete currentTickets[selectedTicket].start_datetime;
        delete currentTickets[selectedTicket].end_datetime;
      }
    }
    if (type === 1) {
      // let currentStartTime = eventDetails.startTime
      //   ? eventDetails.timezone
      //     ? moment(eventDetails.startTime).tz(eventDetails.timezone)
      //     : moment(eventDetails.startTime)
      //   : eventDetails.timezone
      //   ? moment().tz(eventDetails.timezone)
      //   : moment();
      // currentTickets[selectedTicket].start_datetime = currentStartTime.format();
      // currentTickets[selectedTicket].end_datetime = moment(currentStartTime)
      //   .add(1, "d")
      //   .format();
    }
    setTicketAvailability(type);
    onTicketsChange(currentTickets);
  };
  const handleTicketAdd = ({
    ticket = null
  }) => {
    let currentTickets = [...tickets];
    if (ticket) {
      currentTickets.push({
        ...ticket,
        id: null
      });
    } else {
      let newTicket = {
        quantity: null
      };
      if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_price && !disabled && selectedTicketType === 0) {
        newTicket.price = Number.parseFloat(settings.settings.admin_dashboard.default_price);
      }
      if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_quantity) {
        newTicket.quantity = Number.parseInt(settings.settings.admin_dashboard.default_quantity);
      }
      currentTickets.push({
        ...newTicket
      });
    }
    setSelectedTicket(currentTickets.length - 1);
    setTicketPriceInput(ticket ? ticket.price : currentTickets[currentTickets.length - 1].price || 0);
    if (ticket && ticket.is_donation) {
      setSelectedTicketType(2);
    } else if (ticket && ticket.price > 0) {
      setSelectedTicketType(0);
    } else {
      setSelectedTicketType(1);
    }
    onTicketsChange(currentTickets);
    setShowTicketDropdown(null);
  };
  const handleTicketCancel = () => {
    setSelectedTicket(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!tickets || tickets.length === 0 || selectedTicket === null || tickets.length - 1 < selectedTicket) return;
    if (tickets[selectedTicket].name) {
      setTicketName(tickets[selectedTicket].name);
    }
    if (tickets[selectedTicket].price) {
      setTicketPrice(tickets[selectedTicket].price);
      setTicketPriceInput(tickets[selectedTicket].price);
    }
    if (tickets[selectedTicket].quantity) {
      setTicketsQuantity(tickets[selectedTicket].quantity);
    }
    if (tickets[selectedTicket].is_donation === true) {
      setSelectedTicketType(2);
    } else if (tickets[selectedTicket].price > 0) {
      setSelectedTicketType(0);
    } else {
      setSelectedTicketType(1);
    }
    // console.log(
    //   tickets[selectedTicket].start_datetime,
    //   tickets[selectedTicket].end_datetime
    // );
    if (tickets[selectedTicket].start_datetime !== undefined || tickets[selectedTicket].end_datetime !== undefined) {
      setTicketAvailability(1);
    } else {
      setTicketAvailability(0);
    }
  }, [selectedTicket]);
  const handleSaleStartDateChange = date => {
    const currentTickets = [...tickets];
    // console.log("newDate", date);
    // console.log("time", currentTickets[selectedTicket].start_datetime);
    const currentTime = currentTickets[selectedTicket].start_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].start_datetime).tz(eventDetails.timezone || "US/Pacific") : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime).tz(eventDetails.timezone || "US/Pacific");
    // console.log("currentTime", currentTime);
    const selectedDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(date).startOf("day");
    // console.log("selectedDate", selectedDate);
    currentTime.set({
      year: selectedDate.year(),
      month: selectedDate.month(),
      date: selectedDate.date()
    }, true);
    // console.log("selectedDate+time", currentTime);

    currentTickets[selectedTicket].start_datetime = currentTime.toISOString();
    onTicketsChange(currentTickets);
  };
  const handleSaleEndDateChange = date => {
    const currentTickets = [...tickets];
    const currentTime = currentTickets[selectedTicket].end_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].end_datetime).tz(eventDetails.timezone || "US/Pacific") : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime).add(1, "d").tz(eventDetails.timezone || "US/Pacific");
    const selectedDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(date).tz(eventDetails.timezone || "US/Pacific");
    selectedDate.set({
      hour: currentTime.get("hour"),
      minute: currentTime.get("minute"),
      second: currentTime.get("second")
    });
    currentTickets[selectedTicket].end_datetime = selectedDate.toISOString();
    onTicketsChange(currentTickets);
  };
  const getStartDate = () => {
    if (tickets[selectedTicket].start_datetime) {
      // console.log(tickets[selectedTicket].start_datetime);
      // const startMoment = moment(tickets[selectedTicket].start_datetime);

      // console.log(startMoment.format("YYYY-MM-DD").split("T")[0]);

      return {
        startDate: tickets[selectedTicket].start_datetime.split("T")[0],
        label: tickets[selectedTicket].start_datetime.split("T")[0]
      };
    }
    return {
      startDate: null,
      label: "Select a date"
    };
  };
  const getEndDate = () => {
    if (tickets[selectedTicket].end_datetime) {
      // const endMoment = moment(tickets[selectedTicket].end_datetime).tz(
      //   eventDetails.timezone || "US/Pacific"
      // );

      return {
        endDate: tickets[selectedTicket].end_datetime.split("T")[0],
        label: tickets[selectedTicket].end_datetime.split("T")[0]
      };
    }
    return {
      endDate: null,
      label: "Select a date"
    };
  };
  const getStartTime = () => {
    if (tickets[selectedTicket].start_datetime) {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].start_datetime).tz(eventDetails.timezone || "US/Pacific");
    }
    return moment__WEBPACK_IMPORTED_MODULE_9___default()().tz(eventDetails.timezone || "US/Pacific");
  };
  const getEndTime = () => {
    if (tickets[selectedTicket].end_datetime) {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].end_datetime).tz(eventDetails.timezone || "US/Pacific");
    }
    return moment__WEBPACK_IMPORTED_MODULE_9___default()().tz(eventDetails.timezone || "US/Pacific");
  };
  const handleSaleStartTimeChange = newVal => {
    const currentDateTime = tickets[selectedTicket].start_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].start_datetime).tz(eventDetails.timezone || "US/Pacific") : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime).tz(eventDetails.timezone || "US/Pacific");
    const selectedTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal).tz(eventDetails.timezone || "US/Pacific");
    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minute: selectedTime.get("minute"),
      second: 0
    });
    const currentTickets = [...tickets];
    currentTickets[selectedTicket].start_datetime = currentDateTime.toISOString();
    onTicketsChange(currentTickets);
  };
  const handleSaleEndTimeChange = newVal => {
    const currentDateTime = tickets[selectedTicket].end_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].end_datetime).tz(eventDetails.timezone || "US/Pacific") : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime).tz(eventDetails.timezone || "US/Pacific");
    const selectedTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal).tz(eventDetails.timezone || "US/Pacific");
    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minute: selectedTime.get("minute"),
      second: 0
    });
    const currentTickets = [...tickets];
    currentTickets[selectedTicket].end_datetime = currentDateTime.toISOString();
    onTicketsChange(currentTickets);
  };
  const checkTimeDiff = () => {
    const startDate = tickets[selectedTicket].start_datetime;
    const endDate = tickets[selectedTicket].end_datetime;
    if (startDate && endDate) {
      let start = moment__WEBPACK_IMPORTED_MODULE_9___default()(startDate);
      let end = moment__WEBPACK_IMPORTED_MODULE_9___default()(endDate);
      return start.isAfter(end);
    } else return false;
  };
  const ticketsMods = ["Single", "Multiple"];
  const [selectedTicketsMode, setSelectedTicketMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ticketsMods[0]);
  const handleTicketModeChange = val => {
    setSelectedTicketMode(val);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (tickets.length > 0) {
      setSelectedTicketMode(ticketsMods[1]);
    }
  }, [tickets]);
  // useEffect(() => {
  //   if (ticketAvailability === 1) {
  //     console.log(moment.utc(getEndDate().endDate).toISOString());
  //   }
  // }, [ticketAvailability]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: `section-container`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "section-heading",
        children: t("Tickets")
      }), disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ProductDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
        productDetails: productDetails,
        id: postId,
        handleDetailsChange: handleDetailsChange,
        stripeAccount: stripeAccount
      }), !disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [tickets?.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-gray-600 font-regular text-sm",
          children: t("Click the button below to create a new ticket")
        }), adminSection && eventDetails.recurrence && !occurrenceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-gray-600 font-regular text-sm",
          children: t("This is a recurring event. To see tickets for a specific date,\r\n                please view that occurrence.")
        }), tickets?.length > 0 && renderTickets(), (tickets?.length === 0 || tickets?.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: `flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${disabled ? "filter grayscale" : ""}`,
          onClick: handleTicketAdd,
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "w-4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            children: t("Create new ticket")
          })]
        }), tickets?.length > 0 && selectedTicket !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("fieldset", {
          className: "input-container-col",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
              title: "Type",
              buttons: ticketTypes,
              active: ticketTypes[selectedTicketType],
              onChange: handleTicketTypeChange,
              disabled: !stripeAccount || !stripeAccount.id || disabled
            }), settings && (!stripeAccount || !stripeAccount.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "section-description",
              children: "Please note: To create paid and donation tickets, you need to connect your Stripe account."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "input-container-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "section-description",
                children: t("Name")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                value: tickets[selectedTicket]?.name || "",
                onChange: handleTicketNameChange,
                disabled: disabled,
                type: "text",
                width: "100%",
                align: "left"
              })]
            }), selectedTicketType === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "input-container-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "section-description",
                children: t("Ticket price")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                value: ticketPriceInput
                // value={ticketPrice}
                ,
                onChange: handleTicketPriceChange,
                type: "text",
                width: "100%",
                disabled: disabled,
                align: "left",
                placeholder: "0.00",
                prefix: "$"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "input-container-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "section-description",
                children: t("Quantity")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                value: tickets[selectedTicket]?.quantity || "",
                onChange: handleTicketsQuantityChange,
                type: "number",
                width: "100%",
                minValue: "0"
                // maxValue="1000"
                ,
                disabled: disabled,
                align: "left",
                placeholder: "0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
              title: "Availability",
              buttons: ticketsAvailability,
              active: ticketsAvailability[ticketAvailability],
              onChange: handleTicketAvailabilityChange
            }), ticketAvailability === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                className: "text-sm text-regular text-gray-500",
                children: `Timezone: ${eventDetails.timezone ? eventDetails.timezone : "Not selected"}`
              }), checkTimeDiff() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                className: "text-sm text-regular text-error-500",
                children: t("Sales start must be erlier then sales end.")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex flex-row justify-between gap-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "input-container-col w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                    className: "section-description text-gray-700",
                    children: t("Sales start")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "pt-",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: getStartDate().label,
                      date: getStartDate().startDate,
                      onChange: handleSaleStartDateChange,
                      variant: "fields",
                      disabled: disabled
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "input-container-col",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    time: getStartTime(),
                    label: "Start time",
                    timeFormat: timeFormat,
                    onChange: handleSaleStartTimeChange,
                    disabled: disabled
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex flex-row justify-between gap-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "input-container-col w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                    className: "section-description text-gray-700",
                    children: t("Sales end")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: getEndDate().label,
                      date: getEndDate().endDate,
                      onChange: handleSaleEndDateChange,
                      disabled: disabled,
                      variant: "fields"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "input-container-col",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    time: getEndTime(),
                    label: "End time",
                    timeFormat: timeFormat,
                    onChange: handleSaleEndTimeChange,
                    disabled: disabled
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex flex-row justify-start gap-lg mt-[1em]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                className: "rounded-lg border border-gray-300 text-sm text-gray-500 font-semibold px-lg py-md bg-white shadow-combined-gray disabled:border-gray-100 text-gray-200",
                onClick: handleTicketCancel,
                disabled: disabled,
                children: t("Cancel")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                className: "rounded-lg border border-brand-300 text-sm text-brand-700 font-semibold px-lg py-md bg-white shadow-combined-brand",
                onClick: () => {
                  setSelectedTicket(null);
                },
                disabled: disabled,
                children: t("Save")
              })]
            })]
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketsSection);

/***/ }),

/***/ "./src/utilities/tickets.js":
/*!**********************************!*\
  !*** ./src/utilities/tickets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTicket: () => (/* binding */ createTicket),
/* harmony export */   deleteTicket: () => (/* binding */ deleteTicket),
/* harmony export */   multipleTicketsCreate: () => (/* binding */ multipleTicketsCreate),
/* harmony export */   multipleTicketsUpdate: () => (/* binding */ multipleTicketsUpdate),
/* harmony export */   updateTicket: () => (/* binding */ updateTicket)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const createTicket = async ({
  postId,
  occurrenceId = null,
  token,
  ticket
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: requestURL,
      headers: {
        "X-WP-Nonce": token
      },
      data: {
        ...ticket
      }
    });
    return response;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
};
const updateTicket = async ({
  postId,
  occurrenceId = null,
  token,
  ticket
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticket.id}`;
    // if (occurrenceId) {
    //   requestURL += `?occurrence_id=${occurrenceId}`;
    // }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "PATCH",
      url: requestURL,
      headers: {
        "X-WP-Nonce": token
      },
      data: {
        name: ticket.name,
        quantity: ticket.quantity,
        price: ticket.price,
        is_donation: ticket.is_donation,
        start_datetime: ticket.start_datetime,
        end_datetime: ticket.end_datetime
      }
    });
    return response;
  } catch (error) {
    console.error("Error on ticket update:", error);
    return null;
  }
};
const deleteTicket = async ({
  postId,
  occurrenceId = null,
  ticketId,
  token
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticketId}`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "DELETE",
      url: requestURL,
      headers: {
        "X-WP-Nonce": token
      }
    });
    return response;
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return null;
  }
};
const multipleTicketsCreate = async ({
  postId,
  occurrenceId = null,
  token,
  tickets
}) => {
  try {
    const responses = await Promise.all(tickets.map(ticket => (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/event/${postId}/tickets`,
      headers: {
        "X-WP-Nonce": token
      },
      data: {
        ticket
      }
    })));
    return responses;
  } catch (error) {
    console.error("Error creating one or more tickets:", error);
    return null;
  }
};
const multipleTicketsUpdate = async ({
  postId,
  occurrenceId = null,
  token,
  tickets
}) => {
  const responses = [];
  try {
    for (const ticket of tickets) {
      let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticket.id}`;
      // if (occurrenceId) {
      //   requestURL += `?occurrence_id=${occurrenceId}`;
      // }

      const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
        method: "PATCH",
        url: requestURL,
        headers: {
          "X-WP-Nonce": token
        },
        data: {
          name: ticket.name,
          quantity: ticket.quantity,
          price: ticket.price,
          is_donation: ticket.is_donation,
          start_datetime: ticket.start_datetime,
          end_datetime: ticket.end_datetime
        }
      });
      responses.push(response);
    }
    return responses;
  } catch (error) {
    console.error("Error updating one or more tickets:", error);
    return null;
  }
};

/***/ }),

/***/ "./src/utilities/timezones.js":
/*!************************************!*\
  !*** ./src/utilities/timezones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timezones = [{
  "zone": "Pacific/Midway",
  "gmt": "(GMT-11:00)",
  "name": "Midway Island"
}, {
  "zone": "US/Samoa",
  "gmt": "(GMT-11:00)",
  "name": "Samoa"
}, {
  "zone": "US/Hawaii",
  "gmt": "(GMT-10:00)",
  "name": "Hawaii"
}, {
  "zone": "US/Alaska",
  "gmt": "(GMT-09:00)",
  "name": "Alaska"
}, {
  "zone": "US/Pacific",
  "gmt": "(GMT-08:00)",
  "name": "Pacific Time (US &amp; Canada)"
}, {
  "zone": "America/Tijuana",
  "gmt": "(GMT-08:00)",
  "name": "Tijuana"
}, {
  "zone": "US/Arizona",
  "gmt": "(GMT-07:00)",
  "name": "Arizona"
}, {
  "zone": "US/Mountain",
  "gmt": "(GMT-07:00)",
  "name": "Mountain Time (US &amp; Canada)"
}, {
  "zone": "America/Chihuahua",
  "gmt": "(GMT-07:00)",
  "name": "Chihuahua"
}, {
  "zone": "America/Mazatlan",
  "gmt": "(GMT-07:00)",
  "name": "Mazatlan"
}, {
  "zone": "America/Mexico_City",
  "gmt": "(GMT-06:00)",
  "name": "Mexico City"
}, {
  "zone": "America/Monterrey",
  "gmt": "(GMT-06:00)",
  "name": "Monterrey"
}, {
  "zone": "Canada/Saskatchewan",
  "gmt": "(GMT-06:00)",
  "name": "Saskatchewan"
}, {
  "zone": "US/Central",
  "gmt": "(GMT-06:00)",
  "name": "Central Time (US &amp; Canada)"
}, {
  "zone": "US/Eastern",
  "gmt": "(GMT-05:00)",
  "name": "Eastern Time (US &amp; Canada)"
}, {
  "zone": "US/East-Indiana",
  "gmt": "(GMT-05:00)",
  "name": "Indiana (East)"
}, {
  "zone": "America/Bogota",
  "gmt": "(GMT-05:00)",
  "name": "Bogota"
}, {
  "zone": "America/Lima",
  "gmt": "(GMT-05:00)",
  "name": "Lima"
}, {
  "zone": "America/Caracas",
  "gmt": "(GMT-04:30)",
  "name": "Caracas"
}, {
  "zone": "Canada/Atlantic",
  "gmt": "(GMT-04:00)",
  "name": "Atlantic Time (Canada)"
}, {
  "zone": "America/La_Paz",
  "gmt": "(GMT-04:00)",
  "name": "La_Paz"
}, {
  "zone": "America/Santiago",
  "gmt": "(GMT-04:00)",
  "name": "Santiago"
}, {
  "zone": "Canada/Newfoundland",
  "gmt": "(GMT-03:30)",
  "name": "Newfoundland"
}, {
  "zone": "America/Buenos_Aires",
  "gmt": "(GMT-03:00)",
  "name": "Buenos Aires"
}, {
  "zone": "Greenland",
  "gmt": "(GMT-03:00)",
  "name": "Greenland"
}, {
  "zone": "Atlantic/Stanley",
  "gmt": "(GMT-02:00)",
  "name": "Stanley"
}, {
  "zone": "Atlantic/Azores",
  "gmt": "(GMT-01:00)",
  "name": "Azores"
}, {
  "zone": "Atlantic/Cape_Verde",
  "gmt": "(GMT-01:00)",
  "name": "Cape Verde Is."
}, {
  "zone": "Africa/Casablanca",
  "gmt": "(GMT)",
  "name": "Casablanca"
}, {
  "zone": "Europe/Dublin",
  "gmt": "(GMT)",
  "name": "Dublin"
}, {
  "zone": "Europe/Lisbon",
  "gmt": "(GMT)",
  "name": "Libson"
}, {
  "zone": "Europe/London",
  "gmt": "(GMT)",
  "name": "London"
}, {
  "zone": "Africa/Monrovia",
  "gmt": "(GMT)",
  "name": "Monrovia"
}, {
  "zone": "Europe/Amsterdam",
  "gmt": "(GMT+01:00)",
  "name": "Amsterdam"
}, {
  "zone": "Europe/Belgrade",
  "gmt": "(GMT+01:00)",
  "name": "Belgrade"
}, {
  "zone": "Europe/Berlin",
  "gmt": "(GMT+01:00)",
  "name": "Berlin"
}, {
  "zone": "Europe/Bratislava",
  "gmt": "(GMT+01:00)",
  "name": "Bratislava"
}, {
  "zone": "Europe/Brussels",
  "gmt": "(GMT+01:00)",
  "name": "Brussels"
}, {
  "zone": "Europe/Budapest",
  "gmt": "(GMT+01:00)",
  "name": "Budapest"
}, {
  "zone": "Europe/Copenhagen",
  "gmt": "(GMT+01:00)",
  "name": "Copenhagen"
}, {
  "zone": "Europe/Ljubljana",
  "gmt": "(GMT+01:00)",
  "name": "Ljubljana"
}, {
  "zone": "Europe/Madrid",
  "gmt": "(GMT+01:00)",
  "name": "Madrid"
}, {
  "zone": "Europe/Paris",
  "gmt": "(GMT+01:00)",
  "name": "Paris"
}, {
  "zone": "Europe/Prague",
  "gmt": "(GMT+01:00)",
  "name": "Prague"
}, {
  "zone": "Europe/Rome",
  "gmt": "(GMT+01:00)",
  "name": "Rome"
}, {
  "zone": "Europe/Sarajevo",
  "gmt": "(GMT+01:00)",
  "name": "Sarajevo"
}, {
  "zone": "Europe/Skopje",
  "gmt": "(GMT+01:00)",
  "name": "Skopje"
}, {
  "zone": "Europe/Stockholm",
  "gmt": "(GMT+01:00)",
  "name": "Stockholm"
}, {
  "zone": "Europe/Vienna",
  "gmt": "(GMT+01:00)",
  "name": "Vienna"
}, {
  "zone": "Europe/Warsaw",
  "gmt": "(GMT+01:00)",
  "name": "Warsaw"
}, {
  "zone": "Europe/Zagreb",
  "gmt": "(GMT+01:00)",
  "name": "Zagreb"
}, {
  "zone": "Europe/Athens",
  "gmt": "(GMT+02:00)",
  "name": "Athens"
}, {
  "zone": "Europe/Bucharest",
  "gmt": "(GMT+02:00)",
  "name": "Bucharest"
}, {
  "zone": "Africa/Cairo",
  "gmt": "(GMT+02:00)",
  "name": "Cairo"
}, {
  "zone": "Africa/Harare",
  "gmt": "(GMT+02:00)",
  "name": "Harere"
}, {
  "zone": "Europe/Helsinki",
  "gmt": "(GMT+02:00)",
  "name": "Helsinki"
}, {
  "zone": "Europe/Istanbul",
  "gmt": "(GMT+02:00)",
  "name": "Istanbul"
}, {
  "zone": "Asia/Jerusalem",
  "gmt": "(GMT+02:00)",
  "name": "Jerusalem"
}, {
  "zone": "Europe/Kiev",
  "gmt": "(GMT+02:00)",
  "name": "Kiev"
}, {
  "zone": "Europe/Minsk",
  "gmt": "(GMT+02:00)",
  "name": "Minsk"
}, {
  "zone": "Europe/Riga",
  "gmt": "(GMT+02:00)",
  "name": "Riga"
}, {
  "zone": "Europe/Sofia",
  "gmt": "(GMT+02:00)",
  "name": "Sofia"
}, {
  "zone": "Europe/Tallinn",
  "gmt": "(GMT+02:00)",
  "name": "Tallinn"
}, {
  "zone": "Europe/Vilnius",
  "gmt": "(GMT+02:00)",
  "name": "Vilnius"
}, {
  "zone": "Asia/Baghdad",
  "gmt": "(GMT+03:00)",
  "name": "Baghdad"
}, {
  "zone": "Asia/Kuwait",
  "gmt": "(GMT+03:00)",
  "name": "Kuwait"
}, {
  "zone": "Africa/Nairobi",
  "gmt": "(GMT+03:00)",
  "name": "Nairobi"
}, {
  "zone": "Asia/Riyadh",
  "gmt": "(GMT+03:00)",
  "name": "Riyadh"
}, {
  "zone": "Asia/Tehran",
  "gmt": "(GMT+03:30)",
  "name": "Tehran"
}, {
  "zone": "Europe/Moscow",
  "gmt": "(GMT+04:00)",
  "name": "Moscow"
}, {
  "zone": "Asia/Baku",
  "gmt": "(GMT+04:00)",
  "name": "Baku"
}, {
  "zone": "Europe/Volgograd",
  "gmt": "(GMT+04:00)",
  "name": "Volgograd"
}, {
  "zone": "Asia/Muscat",
  "gmt": "(GMT+04:00)",
  "name": "Muscat"
}, {
  "zone": "Asia/Tbilisi",
  "gmt": "(GMT+04:00)",
  "name": "Tbilisi"
}, {
  "zone": "Asia/Yerevan",
  "gmt": "(GMT+04:00)",
  "name": "Yerevan"
}, {
  "zone": "Asia/Kabul",
  "gmt": "(GMT+04:30)",
  "name": "Kabul"
}, {
  "zone": "Asia/Karachi",
  "gmt": "(GMT+05:00)",
  "name": "Karachi"
}, {
  "zone": "Asia/Tashkent",
  "gmt": "(GMT+05:00)",
  "name": "Tashkent"
}, {
  "zone": "Asia/Kolkata",
  "gmt": "(GMT+05:30)",
  "name": "Kolkata"
}, {
  "zone": "Asia/Kathmandu",
  "gmt": "(GMT+05:45)",
  "name": "Kathmandu"
}, {
  "zone": "Asia/Yekaterinburg",
  "gmt": "(GMT+06:00)",
  "name": "Yekaterinburg"
}, {
  "zone": "Asia/Almaty",
  "gmt": "(GMT+06:00)",
  "name": "Almaty"
}, {
  "zone": "Asia/Dhaka",
  "gmt": "(GMT+06:00)",
  "name": "Dhaka"
}, {
  "zone": "Asia/Novosibirsk",
  "gmt": "(GMT+07:00)",
  "name": "Novosibirsk"
}, {
  "zone": "Asia/Bangkok",
  "gmt": "(GMT+07:00)",
  "name": "Bangkok"
}, {
  "zone": "Asia/Jakarta",
  "gmt": "(GMT+07:00)",
  "name": "Jakarta"
}, {
  "zone": "Asia/Krasnoyarsk",
  "gmt": "(GMT+08:00)",
  "name": "Krasnoyarsk"
}, {
  "zone": "Asia/Chongqing",
  "gmt": "(GMT+08:00)",
  "name": "Chongqing"
}, {
  "zone": "Asia/Hong_Kong",
  "gmt": "(GMT+08:00)",
  "name": "Hong Kong"
}, {
  "zone": "Asia/Kuala_Lumpur",
  "gmt": "(GMT+08:00)",
  "name": "Kuala Lumpur"
}, {
  "zone": "Australia/Perth",
  "gmt": "(GMT+08:00)",
  "name": "Perth"
}, {
  "zone": "Asia/Singapore",
  "gmt": "(GMT+08:00)",
  "name": "Singapore"
}, {
  "zone": "Asia/Taipei",
  "gmt": "(GMT+08:00)",
  "name": "Taipei"
}, {
  "zone": "Asia/Ulaanbaatar",
  "gmt": "(GMT+08:00)",
  "name": "Ulaan Bataar"
}, {
  "zone": "Asia/Urumqi",
  "gmt": "(GMT+08:00)",
  "name": "Urumqi"
}, {
  "zone": "Asia/Irkutsk",
  "gmt": "(GMT+09:00)",
  "name": "Irkutsk"
}, {
  "zone": "Asia/Seoul",
  "gmt": "(GMT+09:00)",
  "name": "Seoul"
}, {
  "zone": "Asia/Tokyo",
  "gmt": "(GMT+09:00)",
  "name": "Tokyo"
}, {
  "zone": "Australia/Adelaide",
  "gmt": "(GMT+09:30)",
  "name": "Adelaide"
}, {
  "zone": "Australia/Darwin",
  "gmt": "(GMT+09:30)",
  "name": "Darwin"
}, {
  "zone": "Asia/Yakutsk",
  "gmt": "(GMT+10:00)",
  "name": "Yakutsk"
}, {
  "zone": "Australia/Brisbane",
  "gmt": "(GMT+10:00)",
  "name": "Brisbane"
}, {
  "zone": "Australia/Canberra",
  "gmt": "(GMT+10:00)",
  "name": "Canberra"
}, {
  "zone": "Pacific/Guam",
  "gmt": "(GMT+10:00)",
  "name": "Guam"
}, {
  "zone": "Australia/Hobart",
  "gmt": "(GMT+10:00)",
  "name": "Hobart"
}, {
  "zone": "Australia/Melbourne",
  "gmt": "(GMT+10:00)",
  "name": "Melbourne"
}, {
  "zone": "Pacific/Port_Moresby",
  "gmt": "(GMT+10:00)",
  "name": "Port Moresby"
}, {
  "zone": "Australia/Sydney",
  "gmt": "(GMT+10:00)",
  "name": "Sydney"
}, {
  "zone": "Asia/Vladivostok",
  "gmt": "(GMT+11:00)",
  "name": "Vladivostok"
}, {
  "zone": "Asia/Magadan",
  "gmt": "(GMT+12:00)",
  "name": "Magadan"
}, {
  "zone": "Pacific/Auckland",
  "gmt": "(GMT+12:00)",
  "name": "Auckland"
}, {
  "zone": "Pacific/Fiji",
  "gmt": "(GMT+12:00)",
  "name": "Fiji"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timezones);

/***/ })

}]);
//# sourceMappingURL=src_Components_PostEditor_EventDetails_jsx.js.map?ver=4f9d3cb9fa33ad3d0d95