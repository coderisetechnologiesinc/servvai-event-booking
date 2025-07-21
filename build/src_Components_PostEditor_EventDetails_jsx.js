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
    return tabsList.map(tab => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        className: "me-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: () => handleSelectChange(tab.value),
          className: `tab-element ${selected === tab.value ? "tab-active" : ""}`,
          children: tab.label
        })
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: `tabs-group-container ${fullWidth ? "w-full justify-between" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: "flex flex-row",
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
          className: `button-group-button${active == button ? "-active" : ""} section-description`,
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



// import DatePicker from "../PostEditor/DatePicker";




const EndDateControl = ({
  recurrence,
  onChange
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
  const handleEndTimesChange = val => {
    const newRecurrenceSettings = {
      ...recurrence
    };
    delete newRecurrenceSettings.end_date_time;
    newRecurrenceSettings.end_times = val;
    onChange(newRecurrenceSettings);
  };
  const handleEndDateTimeChange = val => {
    const newRecurrenceSettings = {
      ...recurrence
    };
    delete newRecurrenceSettings.end_times;
    newRecurrenceSettings.end_date_time = val;
    onChange(newRecurrenceSettings);
  };
  const numbersOptions = () => {
    let numberOpt = [];
    for (let i = 0; i < 60; i++) {
      numberOpt.push(i);
    }
    return numberOpt;
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
              children: "End date by"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "me-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => handleSelectChange("number"),
              className: `tab-element ${selected === "number" ? "tab-active" : ""}`,
              children: "End date after"
            })
          })]
        })
      }), selected === "date" &&
      /*#__PURE__*/
      // <DatePicker
      //   date={endDate}
      //   onChange={handleEndDateTimeChange}
      //   label={!endDate ? "Select a Date" : endDate}
      //   variant="field"
      //   instance="endDate"
      // />
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PostEditor_DatePickerControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        date: endDate,
        onChange: handleEndDateTimeChange,
        variant: "field"
      }), selected === "number" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        options: numbersOptions(),
        selected: end_times,
        onSelectChange: handleEndTimesChange
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
  step = null
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!image && prefix === "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex relative group justify-center items-center w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: type,
        className: `input-control section-description text-${align} ${align === "right" ? "pr-1" : ""} ${fullWidth || width ? "w-full" : ""}`,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        maxLength: maxLength,
        onChange: e => onChange(e.target.value),
        min: minValue,
        max: maxValue,
        onKeyDown: handleKeyPress,
        step: step
      }), suffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "absolute text-gray-500 right-0 pr-8",
        children: suffix
      })]
    }), !image && prefix !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex w-full rounded-lg border border-gray-300 overflow-hidden text-md shadow-sm h-9",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex items-center justify-center bg-gray-50 text-gray-600 text-md w-12 border-r border-gray-300",
        children: "$"
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
        }
      })]
    }), image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
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
            width: "24px",
            height: "24px"
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: type,
        className: `input-control section-description description-image text-${align} ${align === "right" ? "pr-1 pl-8" : ""} ${fullWidth ? "w-full" : ""}`,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        size: maxLength,
        onChange: e => onChange(e.target.value),
        min: minValue,
        max: maxValue
      })]
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
        children: "Previous"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "pagination-control",
      disabled: !hasNext,
      onClick: () => onNext(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pagination-control-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text",
        children: "Next"
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
          children: "Select type of recurrence"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "input-container-row justify-start gap-40",
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
        onSelectChange: handleRepeatIntervalChange
      }), type === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 4,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          label: "Repeat every",
          options: weeklyRepeatOptions(),
          selected: repeat_interval === 1 ? "1 week" : `${repeat_interval} weeks`,
          onSelectChange: handleRepeatIntervalChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: "Occurs on"
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
          onSelectChange: handleRepeatIntervalChange
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
            onSelectChange: handleMonthlyDayChange
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
              onSelectChange: handleMonthlyWeekChange
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
              label: "",
              options: days,
              selected: monthly_week_day ? days[monthly_week_day - 1] : days[0],
              onSelectChange: handleMonthlyWeekDayChange
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
  disabled = false
}) => {
  // Button group control
  const eventTypes = ["One-time", "Recurring"];
  const handleTypeChange = val => {
    if (val === "Recurring") {
      onChange({
        type: 1,
        // Daily
        repeat_interval: 1,
        // 1 day, 1 week, 1 month
        // weekly_days: [], // "2,3"
        // monthly_day: 1, // 1 - 30,
        // monthly_week: 1, // 1 - 4, -1
        // monthly_week_day: 2, // 1 - 7
        end_times: 1
        // end_date_time: new Date(),
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
      onChange: onChange
    }), recurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_EndDateControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      recurrence: recurrence,
      onChange: onChange
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
  iconLeft = null
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
        }, "value"))]
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "input-container-col",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      for: "timezone",
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "select-control-with-icon-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
        name: "timezone",
        id: "timezone",
        className: "select-control select-control-with-icon text-sm",
        value: selected,
        onChange: e => onSelectChange(e.target.value),
        disabled: disabled,
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
    const hh = selectedTime.get("hour");
    if (hh > 12 && timeFormat === "hh:mm a") return hh % 12;else return hh;
  };
  const getMinutes = () => {
    const selectedTime = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    return selectedTime.get("minute");
  };
  const onHoursChange = val => {
    let currentVal = val;
    if (currentVal.length > 2) {
      if (currentVal[0] !== "0") currentVal = currentVal.slice(0, 2);else currentVal = currentVal.slice(1, 3);
    }
    if (Number.parseInt(currentVal) > 12 && timeFormat === "hh:mm a") {
      currentVal = 12;
    } else if (Number.parseInt(currentVal) > 24 && timeFormat === "hh:mm a") {
      currentVal = 24;
    }
    const newTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(time);
    newTime.set("hour", Number.parseInt(val ? currentVal : 0));
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
    // console.log(newTime);

    const hh = time.get("hour");
    if (val === "am") {
      newTime.set("hour", hh + 12);
    } else {
      newTime.set("hour", hh - 12);
    }
    onChange(newTime);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `input-container-col items-start ${align === "start" ? "grow" : "grow-0"} justify-between`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_InputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: String(getHours()).padStart(2, "0"),
        onChange: val => onHoursChange(val),
        maxLength: 2,
        type: "number",
        minValue: 0,
        maxValue: timeFormat === "hh:mm a" ? 12 : 24,
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
    onClick: () => onChange(moment__WEBPACK_IMPORTED_MODULE_1___default()(time).get("hour") > 12 ? "pm" : "am"),
    className: "period-control section-description font-regular leading-none",
    disabled: disabled,
    children: time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).get("hour") > 12 ? "pm" : "am" : "am"
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
  children = "Use AI"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
    onClick: onClick,
    className: " inline-flex items-center px-6 py-2 rounded-lg  text-md              text-brand-700 bg-transparent            relative                  font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 overflow-hidden           ",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: " absolute inset-0      rounded-lg            -z-10                 ",
      style: {
        background: "linear-gradient(90deg, #6ee7b7, #8b5cf6, #ec4899, #fbbf24)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "w-4 h-4 mr-3",
      "aria-hidden": "true"
    }), children]
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
    className: "section-container border-b-2 border-gray-200",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section-heading",
      children: "Additional notes"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-gray-600 font-regular text-sm",
      children: "Add items to bring or other info for attendees. Included in email notifications."
    }), meetingType === "online" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "section-description",
          children: "Title"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
          value: custom_field_1_name,
          onChange: val => handleCustomFieldsChange("custom_field_1_name", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "section-description",
          children: "Description"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
          value: custom_field_1_value,
          onChange: val => handleCustomFieldsChange("custom_field_1_value", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "section-description",
          children: "Title"
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
          children: "Description"
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
  variant = "button"
}) => {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).toDate() : null,
    endDate: null
  });
  const minDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().toDate();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValue({
      startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).toDate() : null,
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
    inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700",
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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DatePickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DatePickerControl */ "./src/Components/PostEditor/DatePickerControl.jsx");
/* harmony import */ var _AIButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AIButton */ "./src/Components/PostEditor/AIButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);

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
  const {
    startTime,
    duration,
    timezone,
    recurrence
  } = eventDetails;
  const time = startTime !== null ? moment__WEBPACK_IMPORTED_MODULE_5___default()(startTime) : moment__WEBPACK_IMPORTED_MODULE_5___default()();
  const [isDateChanged, setDateChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!startTime);
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  const endTime = time ? moment__WEBPACK_IMPORTED_MODULE_5___default()(time).add(duration, "minutes") : moment__WEBPACK_IMPORTED_MODULE_5___default()().add(duration, "minutes");
  const timezoneOptions = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].map(timezone => timezone.zone);
  const userTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].filter(timezone => timezone.zone === Intl.DateTimeFormat().resolvedOptions().timeZone);
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
  const iconRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "input-control-icon-right"
  });
  const fetchDescription = async () => {
    if (adminSection) return;
    if (eventDetails.title.length === 0) {
      setToast("Please enter a title to use this feature.");
      return;
    }
    const {
      createBlock
    } = wp.blocks;
    const {
      dispatch
    } = wp.data;
    let url = "https://ai-api.servv.ai/generate-description";

    // let prompt = `Write a compelling event description for this information specific to the store provided.
    //               Title: ${eventDetails.title}
    //               Date time: ${eventDetails.startTime} timezone: ${eventDetails.timezone}
    //               Put location and date time in separate lines at the end.`;
    await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post(url, {
      title: eventDetails.title
      // model: "gpt-4o-mini",
      // messages: [
      //   {
      //     role: "user",
      //     content: prompt,
      //   },
      // ],
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      const descriptionContent = response?.data?.description.length > 0 ? response?.data?.description : "";
      const descriptionBlock = createBlock("core/paragraph", {
        content: descriptionContent
      });

      // Insert block into current post
      dispatch("core/block-editor").insertBlocks(descriptionBlock);
      return response;
    }).catch(error => {
      console.error("Error:", error.response ? error.response.data : error.message);
      const descriptionContent = error.response ? error.response.data : error.message;
      const descriptionBlock = createBlock("core/paragraph", {
        content: descriptionContent
      });
      dispatch("core/block-editor").insertBlocks(descriptionBlock);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex flex-row justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "section-heading",
        children: "Date and time"
      }), !adminSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AIButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: fetchDescription
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex flex-row gap-5 justify-between items-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        date: time,
        onChange: handleDateChange,
        variant: "button"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex flex-row gap-5 justify-between align-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_2__["default"]
        // label="Start time"
        , {
          time: time,
          onChange: handleStartTimeChange,
          minValue: 0,
          maxValue: timeFormat === "hh:mm a" ? 12 : 24,
          timeFormat: timeFormat,
          align: "start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "self-center",
          children: "to"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Time zone",
      options: timezoneOptions,
      helpText: "Select a timezone",
      selected: timezone ? timezone : null,
      disabled: false,
      onSelectChange: handleTimezoneChange
    }), !occurrenceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_RecurringSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductDetails */ "./src/Components/PostEditor/ProductDetails.jsx");
/* harmony import */ var _EventVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventVisibility */ "./src/Components/PostEditor/EventVisibility.jsx");
/* harmony import */ var _RegistrantsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegistrantsSection */ "./src/Components/PostEditor/RegistrantsSection.jsx");
/* harmony import */ var _NotificationsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotificationsSection */ "./src/Components/PostEditor/NotificationsSection.jsx");
/* harmony import */ var _FiltersSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FiltersSection */ "./src/Components/PostEditor/FiltersSection.jsx");
/* harmony import */ var _TicketsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TicketsSection */ "./src/Components/PostEditor/TicketsSection.jsx");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CustomFieldsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CustomFieldsSection */ "./src/Components/PostEditor/CustomFieldsSection.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

// Components















const EventDetails = ({
  title,
  attributes,
  setAttributes,
  postID = null,
  occurrenceId = null,
  adminSection = false,
  handleSetLoading = () => {},
  removeBlock = () => {},
  returnWithError = () => {},
  filters = null,
  settingsData = null
}) => {
  let eventDetails = {
    ...attributes.meeting
  };
  const [postId, setPostId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [registrants, setRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [googleCalendar, setGoogleCalendar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [calendarAccountFetched, setCalendarAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mailAccountFetched, setMailAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [connectedMailAccount, setConnectedMailAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [zoomAccount, setZoomAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeAccount, setStripeAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [filtersList, setFiltersList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: "/servv-plugin/v1/calendar/account"
    });
    if (getCalendarAccountResponse) {
      setGoogleCalendar(getCalendarAccountResponse);
    }
    setCalendarAccountFetched(true);
  };
  const setToastMessage = val => {
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(val, {
      autoClose: 5000
    });
  };
  const servvData = {
    servv_plugin_mode: "production"
  };
  // const servvData = { servv_plugin_mode: "development" };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: "/servv-plugin/v1/zoom/account"
    });
    if (getZoomAccountResponse) {
      setZoomAccount(getZoomAccountResponse);
    }
    // setCalendarAccountFetched(true);
  };
  const getStripeAccount = async () => {
    const getStripeAccountResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: "/servv-plugin/v1/stripe/account"
    });
    if (getStripeAccountResponse) {
      setStripeAccount(getStripeAccountResponse);
    }
  };
  const getGmailAccount = async () => {
    const getGmailAccountResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: "/servv-plugin/v1/gmail/account"
    });
    if (getGmailAccountResponse) {
      setConnectedMailAccount(getGmailAccountResponse);
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
        getSettingsResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
          path: "/servv-plugin/v1/shop/info"
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(settingsData);
      getSettingsResponse = settingsData;
    }
    if (getSettingsResponse) {
      setSettings({
        ...getSettingsResponse,
        settings: {
          ...getSettingsResponse.settings,
          admin_dashboard: getSettingsResponse?.settings?.admin_dashboard ? JSON.parse(getSettingsResponse.settings.admin_dashboard) : {}
        }
      });
    }
  };
  const getFilterType = async type => {
    try {
      let reqURL = `/servv-plugin/v1/filters/${type}`;
      let getFiltersListResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
        path: reqURL
      });
      if (getFiltersListResponse) {
        setFiltersList(prevFilters => ({
          ...prevFilters,
          [type]: getFiltersListResponse
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
      let reqURL = `/servv-plugin/v1/event/${postId}/tickets`;
      if (occurrenceId) {
        reqURL += `?occurrence_id=${occurrenceId}`;
      }
      let getTicketsResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
        path: reqURL
      });
      if (getTicketsResponse) {
        setAttributes({
          tickets: getTicketsResponse
        });
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
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
        default_price
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
      // if (default_price && settings.current_plan === 2) {
      //   handleProductChange("price", default_price);
      // }
    }
  }, [settings]);
  const getEventData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let postId = postID ? postID : urlParams.get("post");
    setPostId(postId);
    if (postId) {
      let url = `/servv-plugin/v1/event/${postId}`;
      if (occurrenceId) {
        url += `?occurrence_id=${occurrenceId}`;
      }
      let res = null;
      let postStatus = "admin";
      if (!adminSection) {
        const {
          getEditedPostAttribute
        } = wp.data.select("core/editor");
        postStatus = getEditedPostAttribute("status");
      }
      if (postStatus === "publish" || postStatus === "admin") {
        // console.log("Error fetching post");
        try {
          res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
            path: url
          });
        } catch (e) {
          res = e;
          console.log(e);
          if (adminSection && e.message === "Post doesn't exist") {
            returnWithError(e.message);
          }
          if (!adminSection) removeBlock();
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
            quantity: res.product.current_quantity || 0,
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
    // const urlParams = new URLSearchParams(window.location.search);
    // let postId = urlParams.get("post");
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
      res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
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
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE"
    });
    return res;
  };
  const removeRegistrant = async registrantID => {
    setLoading(true);
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
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
    // setLoading(true);
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
      const id = getEventData();
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
  const handleRegistrantsChange = registrant => {
    let currentRegistrants = registrants;
    // console.log(registrant, registrant?.status);
    if (registrant) {
      if (registrant.status === "create") {
        currentRegistrants.push(registrant);
      } else {
        console.log("delete");
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
        customFields.custom_field_1_name = "";
        customFields.custom_field_1_value = "";
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
        customFields.custom_field_1_name = "Meeting URL";
        customFields.custom_field_1_value = "";
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
    if (field === "members") {
      let members = types.members || [];
      if (members.indexOf(value) >= 0) {
        members = members.filter(id => id !== value);
      } else {
        members.push(value);
      }
      types["members"] = members;
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
  const tabsList = [{
    label: "Event details",
    value: 0
  }, {
    label: "Event settings",
    value: 1
  }, {
    label: "Registrants",
    value: 2
  }];
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
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)("Email notifications are successfully resend", {
          autoClose: 5000
        });
      } catch (error) {
        console.error(`Failed to resend notification to registrant ${id}:`, error);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(`Failed to resend notification to registrant ${registrants.filter(reg => reg.id === id)[0].email}:`, {
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
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: url,
      method: "POST"
    });
  };
  const handleResendNotificationsToAll = async () => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
      path: url,
      method: "POST"
    });
  };
  const handleTicketsChange = tickets => {
    setAttributes({
      tickets: tickets
    });
    const quantity = tickets.reduce((totalQuantity, ticket) => totalQuantity + ticket.quantity, 0);
    console.log(quantity);
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
  const isFiltersEmpty = Object.values(filtersList).reduce((allEmptySoFar, value) => {
    return allEmptySoFar && Array.isArray(value) && value.length === 0;
  }, true);
  const isBillingPlanRestriction = occurrenceId || settings?.current_plan.id !== 2;
  // const isBillingPlanRestriction = false;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      children: loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        loading: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: `${loading ? "loading" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {
        position: "bottom-right"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tabsList: tabsList,
        selected: selectedTab,
        handleSelectChange: handleSelectChange
      }), selectedTab === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DateTimeSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          eventDetails: eventDetails,
          occurrenceId: occurrenceId,
          onChange: handleEventChange,
          settings: settings,
          adminSection: adminSection,
          setToast: setToastMessage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_LocationSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
          eventDetails: eventDetails,
          onChange: handleEventChange,
          settings: settings,
          disabled: !zoomAccount || zoomAccount && zoomAccount.length === 0 || adminSection,
          meetingType: eventDetails && eventDetails.location ? eventDetails.location : settings && settings.settings.admin_dashboard.default_event_type ? settings.settings.admin_dashboard.default_event_type : "offline",
          customFields: customFields,
          handleCustomFieldChange: handleCustomFieldsChange,
          zoomAccount: zoomAccount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TicketsSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          occurrenceId: occurrenceId
        }), !isFiltersEmpty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_FiltersSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
          types: types,
          onChange: handleTypesChange,
          filtersList: filtersList
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
          customFields: customFields,
          onChange: handleCustomFieldsChange,
          meetingType: eventDetails && eventDetails.location ? eventDetails.location : settings && settings.settings.admin_dashboard.default_event_type ? settings.settings.admin_dashboard.default_event_type : "offline"
        })]
      }), selectedTab === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_EventVisibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
          productDetails: productDetails,
          onChange: handleProductChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_NotificationsSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
          notifications: notifications,
          onChange: handleNotificationsChange,
          googleCalendar: googleCalendar,
          connectedMailAccount: connectedMailAccount,
          calendarAccountFetched: calendarAccountFetched,
          mailAccountFetched: mailAccountFetched
        })]
      }), selectedTab === 2 && adminSection && postId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RegistrantsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      })]
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
      children: "Visibility"
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectDropdown */ "./src/Components/PostEditor/SelectDropdown.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {}
}) => {
  const filtersTabs = ["Your filters", "Create new"];
  //   const [filtersList, setFiltersList] = useState({});
  //   const getFilterType = async (type) => {
  //     try {
  //       let reqURL = `/servv-plugin/v1/filters/${type}`;
  //       let getFiltersListResponse = await apiFetch({ path: reqURL });
  //       if (getFiltersListResponse) {
  //         setFiltersList((prevFilters) => ({
  //           ...prevFilters,
  //           [type]: getFiltersListResponse,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching filters:", error);
  //     }
  //   };
  //   const getFilters = async () => {
  //     await getFilterType("locations");
  //     // await getFilterType("languages");
  //     // await getFilterType("categories");
  //     // await getFilterType("members");
  //   };
  //   useEffect(() => {
  //     getFilters();
  //   }, []);

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
    console.log(member);
    onChange("members", member);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "section-container border-b",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "section-heading",
        children: "Filters"
      }), filtersList.locations && filtersList.locations.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Location",
        options: filtersList.locations,
        selected: types.location_id || null,
        onSelect: handleSelectLocation
      }), filtersList.categorie && filtersList.categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Category",
        options: filtersList.categories,
        selected: types.category_id || null,
        onSelect: handleSelectCategory
      }), filtersList.languages && filtersList.languages.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Language",
        options: filtersList.languages,
        selected: types.language_id || null,
        onSelect: handleSelectLanguage
      }), filtersList.members && filtersList.members.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Members",
        options: filtersList.members,
        selected: types.members || [],
        onSelect: handleSelectMember
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const LocationSection = ({
  eventDetails,
  onChange,
  meetingType,
  customFields,
  handleCustomFieldChange,
  settings = {},
  disabled = false,
  zoomAcctount
}) => {
  const {
    custom_field_1_name,
    custom_field_1_value
  } = customFields;
  const {
    location
  } = eventDetails;
  const eventTypes = ["Standard", "Zoom meeting"];
  const handleLocationChange = newVal => {
    if (newVal === eventTypes[0] && location !== "offline") {
      onChange("location", "offline");
    } else if (newVal === eventTypes[1] && location !== "zoom") {
      onChange("location", "zoom");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      handleLocationChange("Standard");
    }
  }, [disabled, location]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "section-heading",
      children: zoomAcctount ? "Type" : "Add location"
    }), settings && zoomAcctount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "",
      buttons: eventTypes,
      active: location === "offline" ? eventTypes[0] : eventTypes[1],
      onChange: handleLocationChange,
      disabled: disabled
    }), meetingType === "offline" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "input-container-row items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "input-container-col w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "section-description",
          children: "Location (In-person) or meeting link (e.g., Google Meet, Microsoft Teams)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: custom_field_1_value,
          onChange: val => handleCustomFieldChange("custom_field_1_value", val),
          fullWidth: true,
          type: "text",
          align: "left"
        })]
      })
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "section-container border-b",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "section-heading",
        children: "Notifications"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Calendar notifications",
        buttons: notificationsOptions,
        disabled: !calendarAccountFetched || calendarAccountFetched && !googleCalendar,
        active: notifications.google_calendar && googleCalendar ? notificationsOptions[0] : notificationsOptions[1],
        onChange: () => {
          onChange("google_calendar", !notifications.google_calendar);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Email notifications",
        buttons: notificationsOptions,
        active: notifications.disable_emails && connectedMailAccount ? notificationsOptions[0] : notificationsOptions[1],
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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusCircleIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







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
        }), productDetails.quantity ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: `${productDetails.quantity > 1 ? productDetails.quantity + " " + "tickets" : productDetails.quantity + " " + "ticket"}`,
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
    children: [renderStandartTicket(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        className: `flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${ true ? "filter grayscale" : 0}`,
        onClick: handleTicketAdd,
        disabled: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "w-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "Create new ticket"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("fieldset", {
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
                onChange: val => handleDetailsChange("quantity", Number.parseInt(val)),
                fullWidth: true,
                maxLength: 20,
                type: "number",
                minValue: 0,
                maxValue: 10000000,
                align: "right"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Availability",
            buttons: ticketsAvailability,
            active: ticketsAvailability[ticketAvailability],
            onChange: () => {},
            disabled: true
          })]
        })
      })]
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
              width: "100%"
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
              width: "100%"
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
            width: "100%"
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





const SelectDropdown = ({
  title,
  options,
  selected,
  onSelect
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleSelect = option => {
    onSelect(option);
    setIsOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: `${title}-select`,
      className: "block text-sm font-medium text-gray-700 mb-1",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer",
      onClick: () => setIsOpen(!isOpen),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "flex flex-row text-sm",
        children: selected && typeof selected !== "number" && selected.length > 0 ? selected.map(selected => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
          text: options.filter(option => option.id === selected)[0].name,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__["default"], {
            style: {
              width: "10px",
              fill: "#17B26A"
            }
          }),
          iconAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            onClick: e => {
              e.stopPropagation();
              onSelect(selected);
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
        })) : selected && typeof selected === "number" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
          text: options.filter(option => option.id === selected)[0].name,
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_3__["default"], {
            style: {
              width: "10px",
              fill: "#17B26A"
            }
          }),
          iconAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            onClick: e => {
              e.stopPropagation();
              onSelect(selected);
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
        className: "w-full p-2 hover:bg-gray-100 cursor-pointer flex items-center",
        onClick: () => handleSelect(option.id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          })
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
  occurrenceId
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
                children: ticket?.name || "Unknown"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-regular text-gray-600",
                children: ticket?.price || "Free"
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            className: "justify-self-end ml-auto",
            onClick: showTicketDropdown === index ? () => setShowTicketDropdown(null) : () => setShowTicketDropdown(index),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: "w-6 fill-gray-700"
            })
          }), showTicketDropdown === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "absolute top-full right-0 mt-2 transform translate-x-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 flex flex-col gap-4 transition-all duration-200 ease-out opacity-100 scale-100",
            children: [ticket?.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "text-sm font-semibold text-gray-700",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: ticket?.name
              })
            }), ticket?.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "text-sm font-regular text-gray-600",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: ticket?.price
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
              className: "flex flex-row justify-start gap-2 w-full flex-nowrap",
              onClick: () => {
                handleSetTicketForEdit(index);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: "w-6 stroke-white fill-black"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "text-sm font-medium text-gray-700",
                children: "Edit ticket"
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
                children: "Duplicate ticket"
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
                children: "Delete ticket"
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
    handleTicketChange("quantity", Number.parseInt(val));
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
        ...ticket
      });
    } else {
      let newTicket = {
        quantity: null
      };
      if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_price && !disabled && selectedTicketType === 0) {
        newTicket.price = settings.settings.admin_dashboard.default_price;
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
    if (!tickets || tickets.length === 0 || !selectedTicket || tickets.length - 1 < selectedTicket) return;
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
    if (tickets[selectedTicket].start_datetime || tickets[selectedTicket].end_datetime) {
      setTicketAvailability(1);
    } else {
      setTicketAvailability(0);
    }
  }, [selectedTicket]);
  const handleSaleStartDateChange = date => {
    let currentTickets = [...tickets];
    const currentTime = currentTickets[selectedTicket].start_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].start_datetime) : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime);
    const selectedDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(date);
    selectedDate.set("hour", currentTime.get("hour"));
    selectedDate.set("minute", currentTime.get("minute"));
    selectedDate.set("second", currentTime.get("second"));
    currentTickets[selectedTicket].start_datetime = selectedDate.tz(eventDetails.timezone || "US/Pacific").format("YYYY-MM-DDTHH:mm:ss");
    onTicketsChange(currentTickets);
  };
  const handleSaleEndDateChange = date => {
    let currentTickets = [...tickets];
    const currentTime = currentTickets[selectedTicket].end_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].end_datetime) : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime).add(1, "d");
    const selectedDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(date);
    selectedDate.set("hour", currentTime.get("hour"));
    selectedDate.set("minute", currentTime.get("minute"));
    selectedDate.set("second", currentTime.get("second"));
    currentTickets[selectedTicket].end_datetime = selectedDate.tz(eventDetails.timezone || "US/Pacific").format("YYYY-MM-DDTHH:mm:ss");
    onTicketsChange(currentTickets);
  };
  const getStartDate = () => {
    let startDate = null;
    if (tickets[selectedTicket].start_datetime) {
      startDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].start_datetime).tz(eventDetails.timezone || "US/Pacific");
      return {
        startDate: startDate,
        label: startDate.format("DDD MM, YYYY")
      };
    }
    return {
      startDate: null,
      label: "Select a date"
    };
  };
  const getEndDate = () => {
    let endDate = null;
    if (tickets[selectedTicket].end_datetime) {
      endDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].end_datetime).tz(eventDetails.timezone || "US/Pacific");
      return {
        endDate: endDate,
        label: endDate.format("DDD MM, YYYY")
      };
    }
    return {
      endDate: null,
      label: "Select a date"
    };
  };
  const getStartTime = () => {
    if (tickets[selectedTicket].start_datetime) {
      return tickets[selectedTicket].start_datetime;
    } else {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()();
    }
  };
  const getEndTime = () => {
    if (tickets[selectedTicket].end_datetime) {
      return tickets[selectedTicket].end_datetime;
    } else {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()();
    }
  };
  const handleSaleStartTimeChange = newVal => {
    let currentDateTime = tickets[selectedTicket].start_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].start_datetime) : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime);
    let selectedTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal);
    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minutes: selectedTime.get("minute"),
      second: 0
    });
    let currentTickets = [...tickets];
    currentTickets[selectedTicket].start_datetime = currentDateTime;
    onTicketsChange(currentTickets);
  };
  const handleSaleEndTimeChange = newVal => {
    let currentDateTime = tickets[selectedTicket].end_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(tickets[selectedTicket].end_datetime) : moment__WEBPACK_IMPORTED_MODULE_9___default()(eventDetails.startTime);
    let selectedTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal);
    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minutes: selectedTime.get("minute"),
      second: 0
    });
    let currentTickets = [...tickets];
    currentTickets[selectedTicket].end_datetime = currentDateTime;
    onTicketsChange(currentTickets);
  };
  const checkTimeDiff = () => {
    const startDate = tickets[selectedTicket].start_datetime;
    const endDate = tickets[selectedTicket].end_datetime;
    if (startDate && endDate) {
      let start = moment__WEBPACK_IMPORTED_MODULE_9___default()(startDate);
      let end = moment__WEBPACK_IMPORTED_MODULE_9___default()(endDate);
      return end.diff(start) <= 0;
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: `section-container`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "section-heading",
        children: "Tickets"
      }), disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ProductDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
        productDetails: productDetails,
        id: postId,
        handleDetailsChange: handleDetailsChange,
        stripeAccount: stripeAccount
      }), !disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [tickets?.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-gray-600 font-regular text-sm",
          children: "Click the button below to create a new ticket"
        }), adminSection && eventDetails.recurrence && !occurrenceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-gray-600 font-regular text-sm",
          children: "This is a recurring event. To see tickets for a specific date, please view that occurrence."
        }), tickets?.length > 0 && renderTickets(), (tickets?.length === 0 || tickets?.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: `flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${disabled ? "filter grayscale" : ""}`,
          onClick: handleTicketAdd,
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "w-4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            children: "Create new ticket"
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "input-container-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "section-description",
                children: "Name"
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
                children: "Ticket price"
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
                children: "Quantity"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                value: tickets[selectedTicket]?.quantity || "",
                onChange: handleTicketsQuantityChange,
                type: "number",
                width: "100%",
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
                children: "Sales start must be erlier then sales end."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex flex-row justify-between gap-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "input-container-col w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                    className: "section-description text-gray-700",
                    children: "Sales start"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "pt-",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: getStartDate().label,
                      date: getStartDate().startDate,
                      onChange: handleSaleStartDateChange,
                      variant: "button",
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
                    children: "Sales end"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "pt-",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: getEndDate().label,
                      date: getEndDate().endDate,
                      onChange: handleSaleEndDateChange,
                      disabled: disabled,
                      variant: "button"
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
                children: "Cancel"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                className: "rounded-lg border border-brand-300 text-sm text-brand-700 font-semibold px-lg py-md bg-white shadow-combined-brand",
                onClick: () => {
                  setSelectedTicket(null);
                },
                disabled: disabled,
                children: "Save"
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

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowLeftIcon({
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
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowRightIcon({
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
    d: "M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/XCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/XCircleIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function XCircleIcon({
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
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_PostEditor_EventDetails_jsx.js.map?ver=3e20c85558130bc9de7d