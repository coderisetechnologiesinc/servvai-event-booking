"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_FiltersPage_jsx"],{

/***/ "./src/Components/Containers/AnnotatedSection.jsx":
/*!********************************************************!*\
  !*** ./src/Components/Containers/AnnotatedSection.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AnnotatedSection = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "annotated-layout",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "section-annotation",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "annotated-section-title",
        children: props.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "annotated-section-description",
        children: props.description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "section-content",
      children: props.children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotatedSection);

/***/ }),

/***/ "./src/Components/Containers/Card.jsx":
/*!********************************************!*\
  !*** ./src/Components/Containers/Card.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Card = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: `servv-card ${props.padding ? props.padding : "p-0"} ${props.align === "center" ? "mx-auto" : ""} ${props.background ? props.background : "bg-white"}`,
    style: {
      maxWidth: props.maxWidth
    },
    children: props.children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/Components/Containers/Dropdown.jsx":
/*!************************************************!*\
  !*** ./src/Components/Containers/Dropdown.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Dropdown = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "dropdown",
    children: [props.activator && props.activator, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `dropdown-content ${!props.status ? "hidden" : "inline-flex"}`,
      children: props.children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./src/Components/Containers/FilterTable.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Containers/FilterTable.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FilterTable = ({
  headings,
  rows
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
    className: "filter-table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
      className: "filter-table-headings",
      children: headings
    }), rows]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterTable);

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PageContent = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "page-content",
    children: props.children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContent);

/***/ }),

/***/ "./src/Components/Containers/PageContentPlaceholder.jsx":
/*!**************************************************************!*\
  !*** ./src/Components/Containers/PageContentPlaceholder.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PageContentPlaceholder = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "page-content-placeholder",
    children: [props.icon && props.icon, props.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
      className: "page-conetent-placeholder-title",
      children: props.title
    }), props.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "page-conetent-placeholder-description",
      children: props.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "page-conetent-placeholder-actions",
      children: props.children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContentPlaceholder);

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PageHeader = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: `page-header ${props.bottomLine ? 'border-b pb-4' : ''}`,
    children: props.children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

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
  type,
  customStyle,
  hidden = false,
  onAction = () => {},
  slim = false,
  justify = null,
  disabled
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
    className: `page-action-button ${type === "primary" ? "primary" : ""}${hidden ? "opacity-0" : ""} ${slim ? "px-1 py-0.5" : "p-2"} ${customStyle ? customStyle : ""} ${justify ? justify : ""}`,
    onClick: onAction,
    disabled: disabled,
    children: [icon && icon, text]
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

/***/ "./src/Components/Menu/BreadCrumbs.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Menu/BreadCrumbs.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronRightIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const BreadCrumbs = ({
  breadcrumbs = [],
  onBreadCrumbClick
}) => {
  const handleNavigate = (e, item) => {
    e.preventDefault();
    item.action();
    onBreadCrumbClick(item.label);
  };
  const renderBreadCrumbs = () => {
    return breadcrumbs.map((item, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row gap-4 items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "",
          onClick: e => handleNavigate(e, item),
          children: item.label
        }), index < breadcrumbs.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "breadcrumbs-icon"
        })]
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: `breadcrumbs flex flex-row items-center gap-4 ${breadcrumbs.length > 1 ? "opacity-100" : "opacity-0"}`,
    children: renderBreadCrumbs()
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);

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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const CreateCategoryFilterForm = ({
  category = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [categoryData, setCategoryData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(category);
  const handleCategroyChange = (field, value) => {
    let newCategoryData = {
      ...categoryData
    };
    newCategoryData[field] = value;
    setCategoryData(newCategoryData);
  };
  const handleCategorySave = async () => {
    if (categoryData?.name?.length === 0) return;
    let url = "/wp-json/servv-plugin/v1/filters/categories";
    if (categoryData.name && categoryData.name.length > 0) {
      setLoading(true);
      if (category && category.id) {
        delete categoryData.id;
        delete categoryData.shop_id;
        delete categoryData.created_datetime;
        url += `/${category.id}`;
      }
      await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
        method: category && category.id ? "PATCH" : "POST",
        url: url,
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...categoryData,
          priority: isNaN(Number.parseInt(categoryData.priority)) ? 0 : Number.parseInt(categoryData.priority)
        }
      });
      onCancel();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: categoryData && categoryData.id ? `Category filter "${categoryData.name}"` : "New Category"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          className: "page-header-description",
          children: ["Edit details for", " ", categoryData && categoryData.id ? `${categoryData.name}` : "new category"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: `${!categoryData || !categoryData?.name || categoryData?.name?.length === 0 ? "button-icon-disabled" : "button-icon"}`
          }),
          type: "primary",
          onAction: () => handleCategorySave(),
          disabled: !categoryData || !categoryData?.name || categoryData?.name?.length === 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: () => onCancel()
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Category name",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: categoryData?.name || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleCategroyChange("name", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Category details",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: categoryData?.details || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleCategroyChange("details", val),
            width: "100%"
          })
        }), category && category.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Order",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: categoryData.priority,
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleCategroyChange("priority", val),
            width: "100%"
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCategoryFilterForm);

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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const CreateLanguageFilterForm = ({
  language = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [languageData, setLanguageData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(language);
  const handleLanguageChange = (field, value) => {
    let newLanguageData = {
      ...languageData
    };
    newLanguageData[field] = value;
    setLanguageData(newLanguageData);
  };
  const handleLanguageSave = async () => {
    if (languageData.name && languageData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/languages";
      if (language && language.id) {
        delete languageData.id;
        delete languageData.shop_id;
        delete languageData.created_datetime;
        url += `/${language.id}`;
      }
      await (0,axios__WEBPACK_IMPORTED_MODULE_10__["default"])({
        method: language && language.id ? "PATCH" : "POST",
        url: url,
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...languageData,
          priority: isNaN(Number.parseInt(languageData.priority)) ? 0 : Number.parseInt(languageData.priority)
        }
      });
      onCancel();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: languageData && languageData.id ? `Language filter "${languageData.name}"` : "New Language"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "page-header-description",
          children: ["Edit details for", " ", languageData && languageData.id ? `${languageData.name}` : "new language"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: `${!languageData || !languageData?.name || languageData?.name?.length === 0 ? "button-icon-disabled" : "button-icon"}`
          }),
          type: "primary",
          onAction: () => handleLanguageSave(),
          disabled: !languageData || !languageData?.name || languageData?.name?.length === 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: () => onCancel()
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Language name",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: languageData?.name || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleLanguageChange("name", val),
            width: "100%"
          })
        }), languageData && languageData.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Order",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: languageData.priority,
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleLanguageChange("priority", val),
            width: "100%"
          })
        })]
      })
    })]
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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const CreateLocationFilterForm = ({
  location = {},
  onCancel = () => {},
  setLoading = () => {},
  timeFormat = "hh:mm a"
}) => {
  const [locationData, setLocationData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(location);
  const handleLocationChange = (field, value) => {
    let newLocationData = {
      ...locationData
    };
    newLocationData[field] = value;
    setLocationData(newLocationData);
  };
  const handleLocationSave = async () => {
    if (locationData.name && locationData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/locations";
      if (location && location.id) {
        delete locationData.id;
        delete locationData.shop_id;
        delete locationData.created_datetime;
        url += `/${location.id}`;
      }
      await (0,axios__WEBPACK_IMPORTED_MODULE_11__["default"])({
        method: location && location.id ? "PATCH" : "POST",
        url: url,
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...locationData,
          priority: isNaN(Number.parseInt(locationData.priority)) ? 0 : Number.parseInt(locationData.priority)
        }
      });
      onCancel();
    }
  };
  const getStartTime = () => {
    if (locationData?.operational_hours) {
      return moment__WEBPACK_IMPORTED_MODULE_8___default()(locationData.operational_hours.split(" - ")[0], "hh:mm a");
    }
    return moment__WEBPACK_IMPORTED_MODULE_8___default()();
  };
  const getEndTime = () => {
    if (locationData?.operational_hours) {
      return moment__WEBPACK_IMPORTED_MODULE_8___default()(locationData.operational_hours.split(" - ")[1], "hh:mm a");
    }
    return moment__WEBPACK_IMPORTED_MODULE_8___default()();
  };
  const handleStartTimeChange = (newVal, variant) => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let startTime, endTime;
    if (currentOperationalHours.length > 0) {
      startTime = moment__WEBPACK_IMPORTED_MODULE_8___default()(currentOperationalHours.split(" - ")[0], "hh:mm a").format("hh:mm a");
      endTime = moment__WEBPACK_IMPORTED_MODULE_8___default()(currentOperationalHours.split(" - ")[1], "hh:mm a").format("hh:mm a");
    } else {
      startTime = moment__WEBPACK_IMPORTED_MODULE_8___default()().format("hh:mm a");
      endTime = moment__WEBPACK_IMPORTED_MODULE_8___default()().format("hh:mm a");
    }
    if (variant === "start") {
      startTime = moment__WEBPACK_IMPORTED_MODULE_8___default()(newVal, "hh:mm a").format("hh:mm a");
    }
    if (variant === "end") {
      endTime = moment__WEBPACK_IMPORTED_MODULE_8___default()(newVal, "hh:mm a").format("hh:mm a");
    }
    console.log("start time", startTime);
    console.log("end time", endTime);
    let newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: [" ", locationData && locationData.id ? `Location filter "${locationData.name}"` : "New Location"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "page-header-description",
          children: ["Edit details for", " ", locationData && locationData.id ? `${locationData.name}` : "new location"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: `${!locationData || !locationData?.name || locationData?.name?.length === 0 ? "button-icon-disabled" : "button-icon"}`
          }),
          type: "primary",
          onAction: () => handleLocationSave(),
          disabled: !locationData || !locationData?.name || locationData?.name?.length === 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: () => onCancel()
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Location name",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: locationData?.name || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleLocationChange("name", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Location details",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: locationData?.details || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleLocationChange("details", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Operational hours",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 2,
            align: "right",
            justify: "space",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
              label: "Start time",
              time: getStartTime(),
              onChange: val => handleStartTimeChange(val, "start"),
              timeFormat: timeFormat,
              align: "start"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
              label: "End time",
              time: getEndTime(),
              onChange: val => handleStartTimeChange(val, "end"),
              timeFormat: timeFormat,
              align: "end"
            })]
          })
        }), location && location.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Order",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: locationData.priority,
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleLocationChange("priority", val),
            width: "100%"
          })
        })]
      })
    })]
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
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const CreateMemberFilterForm = ({
  member = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(member);
  const handleMemberChange = (field, value) => {
    let newMemberData = {
      ...memberData
    };
    newMemberData[field] = value;
    setMemberData(newMemberData);
  };
  const handleMemberSave = async () => {
    if (memberData.name && memberData.name.length > 0) {
      setLoading(true);
      let url = "/wp-json/servv-plugin/v1/filters/members";
      if (member && member.id) {
        url += `/${member.id}`;
        delete memberData.id;
        delete memberData.shop_id;
        delete memberData.created_datetime;
      }
      await (0,axios__WEBPACK_IMPORTED_MODULE_10__["default"])({
        method: member && member.id ? "PATCH" : "POST",
        url: url,
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...memberData,
          priority: isNaN(Number.parseInt(memberData.priority)) ? 0 : Number.parseInt(memberData.priority)
        }
      });
      onCancel();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: memberData && memberData.id ? `Member filter "${memberData.name}"` : "New Member"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "page-header-description",
          children: ["Edit details for", " ", memberData && memberData.id ? `${memberData.name}` : "new member"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: `${!memberData || !memberData?.name || memberData?.name?.length === 0 ? "button-icon-disabled" : "button-icon"}`
          }),
          type: "primary",
          onAction: () => handleMemberSave(),
          disabled: !memberData || !memberData?.name || memberData?.name?.length === 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: () => onCancel()
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        gap: 8,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Member name",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: memberData?.name || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleMemberChange("name", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Member email",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: memberData?.email || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleMemberChange("email", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Phone",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: memberData?.phone || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleMemberChange("phone", val),
            width: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Description",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: memberData?.description || "",
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleMemberChange("description", val),
            width: "100%"
          })
        }), member && member.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "Order",
          description: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: memberData?.priority,
            fullWidth: false,
            type: "text",
            align: "right",
            disabled: false,
            maxLength: 30,
            onChange: val => handleMemberChange("priority", val),
            width: "100%"
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMemberFilterForm);

/***/ }),

/***/ "./src/Components/Pages/FiltersList.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/FiltersList.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_FilterTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/FilterTable */ "./src/Components/Containers/FilterTable.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_PageContentPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageContentPlaceholder */ "./src/Components/Containers/PageContentPlaceholder.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PencilIcon.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const FiltersList = ({
  title,
  filters,
  selected,
  onSelect,
  onEdit,
  onDelete,
  onSelectAll,
  handleSingleDelete
}) => {
  // const headings = [
  //   { label: "Name", value: "name" },
  //   { label: "Details", value: "details" },
  //   { label: "Operational hours", value: "operational_hours" },
  //   { label: "Priority", value: "priority" },
  // ];
  const headings = () => {
    if (title === "Languages") {
      return [{
        label: "Name",
        value: "name"
      }, {
        label: "Order",
        value: "priority"
      }, {
        label: "",
        value: "action1"
      }];
    }
    if (title === "Locations") {
      return [{
        label: "Name",
        value: "name"
      }, {
        label: "Details",
        value: "details"
      }, {
        label: "Operational hours",
        value: "operational_hours"
      }, {
        label: "Order",
        value: "priority"
      }, {
        label: "",
        value: "action"
      }];
    }
    if (title === "Members") {
      return [{
        label: "Name",
        value: "name"
      }, {
        label: "Email",
        value: "email"
      }, {
        label: "Phone",
        value: "phone"
      }, {
        label: "Description",
        value: "description"
      }, {
        label: "Order",
        value: "priority"
      }, {
        label: "",
        value: "action"
      }];
    }
    if (title === "Categories") {
      return [{
        label: "Name",
        value: "name"
      }, {
        label: "Description",
        value: "details"
      }, {
        label: "Order",
        value: "priority"
      }, {
        label: "",
        value: "action"
      }];
    }
    return [{
      label: "Name",
      value: "name"
    }, {
      label: "Order",
      value: "priority"
    }, {
      label: "",
      value: "action"
    }];
  };
  const renderHeadings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
          checked: selected.length === filters.length,
          onChange: () => onSelectAll()
        })
      }), headings().map(heading => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
          children: heading.label
        });
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {})]
    });
  };
  const renderRows = filters => {
    return filters.map(row => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
        className: "table-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
            checked: selected.includes(row.id),
            onChange: () => onSelect(row.id)
          })
        }), headings().map(heading => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
            children: heading.value === "name" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
              href: "#",
              className: "filter-table-link",
              onClick: e => onEdit(e, row),
              children: row[heading.value]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: row[heading.value]
            })
          });
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex flex-row gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_10__["default"], {
              className: "button-icon",
              onClick: () => onDelete(title, [row.id])
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: "button-icon",
              onClick: e => onEdit(e, row)
            })]
          })
        })]
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gap: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: "Delete",
          icon: null,
          type: "secondary",
          onAction: () => onDelete(title, selected),
          hidden: selected.length === 0
        })
      }), filters && filters.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_0__["default"], {
          headings: renderHeadings(),
          rows: renderRows(filters)
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersList);

/***/ }),

/***/ "./src/Components/Pages/FiltersPage.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/FiltersPage.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageContentPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageContentPlaceholder */ "./src/Components/Containers/PageContentPlaceholder.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/MagnifyingGlassIcon.js");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/FilterTable */ "./src/Components/Containers/FilterTable.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _FiltersList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FiltersList */ "./src/Components/Pages/FiltersList.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _CreateLocationFilterForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateLocationFilterForm */ "./src/Components/Pages/CreateLocationFilterForm.jsx");
/* harmony import */ var _CreateCategoryFilterForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CreateCategoryFilterForm */ "./src/Components/Pages/CreateCategoryFilterForm.jsx");
/* harmony import */ var _CreateMemberFilterForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CreateMemberFilterForm */ "./src/Components/Pages/CreateMemberFilterForm.jsx");
/* harmony import */ var _CreateLanguageFilterForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CreateLanguageFilterForm */ "./src/Components/Pages/CreateLanguageFilterForm.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);





















const FiltersPage = ({
  settings,
  filtersList = {},
  getFilters = () => {},
  handleResetSubpage = () => {},
  resetSelectedSubpage = false
}) => {
  // const [filtersList, setFiltersList] = useState({});
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resetSelectedSubpage) {
      handleCloseCreateForm();
      setSelectedList(null);
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
  // const getFilterType = async (type) => {
  //   try {
  //     let reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
  //     let getFiltersListResponse = await axios.get(reqURL, {
  //       headers: { "X-WP-Nonce": servvData.nonce },
  //     });

  //     if (getFiltersListResponse.status === 200) {
  //       setFiltersList((prevFilters) => ({
  //         ...prevFilters,
  //         [type]: getFiltersListResponse.data, // Preserve existing filters
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching filters:", error);
  //   }
  // };
  const [breadcrumbs, setBreadcrumbs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const renderBreadCrumbs = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      breadcrumbs: breadcrumbs,
      onBreadCrumbClick: handleBreadCrumbsClick
    });
  };
  const handleBreadCrumbsChange = (label, action) => {
    setBreadcrumbs([...breadcrumbs, {
      label,
      action
    }]);
  };
  const handleBreadCrumbsClick = label => {
    // console.log(breadcrumbs.map((item) => item.label).indexOf(label));
    setBreadcrumbs(breadcrumbs.slice(0, breadcrumbs.map(item => item.label).indexOf(label) + 1));
  };
  const [filtersCategories, setFiltersCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const headings = [{
    label: "Filter categories",
    value: "categories"
  }, {
    label: "Description",
    value: "description"
  }, {
    label: "Action",
    value: "action"
  }];
  const getFilterDescription = filter => {
    switch (filter) {
      case "Locations":
        return "Locations description";
        break;
      case "Languages":
        return "Languages description";
        break;
      case "Categories":
        return "Categories description";
        break;
      case "Members":
        return "Members description";
        break;
      default:
        return "Description";
        break;
    }
  };
  const renderHeadings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: headings.map(heading => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("th", {
          children: heading.label
        });
      })
    });
  };
  const handleSelectType = (e, type) => {
    e.preventDefault();
    setSelectedList(type);
    handleBreadCrumbsChange(type, () => setSelectedList(type));
  };
  const [filterForUpdate, setFilterForUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const renderFiltersCategories = () => {
    return filtersCategories.map(filter => {
      if (filter) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
        className: "table-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("a", {
            className: "filter-table-link",
            onClick: e => handleSelectType(e, filter),
            children: filter
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
            children: getFilterDescription(filter)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Create",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            onAction: () => handleOpenCreateFilter(filter),
            slim: true
          })
        })]
      });
    });
  };

  // const getFilters = async () => {
  //   setLoading(true);
  //   if (servvData.servv_plugin_mode === "development") {
  //     await getFilterType("locations");
  //     await getFilterType("languages");
  //     await getFilterType("categories");
  //     if (settings && settings.current_plan.id == 2) {
  //       await getFilterType("members");
  //     }
  //   } else {
  //     getFilterType("locations");
  //     getFilterType("languages");
  //     getFilterType("categories");
  //     if (settings && settings.current_plan.id == 2) {
  //       getFilterType("members");
  //     }
  //   }
  //   setLoading(false);
  // };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFiltersCategories(Object.keys(filtersList).map(filter => {
      if (filtersList[filter] && filtersList[filter].length > 0) return filter.charAt(0).toUpperCase() + filter.slice(1);
    }));
  }, [filtersList]);
  const [createFilterOpen, setCreateFilterOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleCloseCreateForm = () => {
    setFilterForUpdate(null);
    getFilters();
    setCreateFilterOpen(null);
    setFilterForUpdate(null);
    setLoading(false);
  };
  const handleEditLocation = (e, location) => {
    e.preventDefault();
    setFilterForUpdate(location);
    setCreateFilterOpen("Locations");
  };
  const handleEditLanguage = (e, language) => {
    e.preventDefault();
    setFilterForUpdate(language);
    setCreateFilterOpen("Languages");
  };
  const handleEditCategory = (e, category) => {
    e.preventDefault();
    setFilterForUpdate(category);
    setCreateFilterOpen("Categories");
  };
  const handleEditMember = (e, member) => {
    e.preventDefault();
    setFilterForUpdate(member);
    setCreateFilterOpen("Members");
  };
  const handleOpenCreateFilter = type => {
    setCreateFilterDropdown(false);
    setCreateFilterOpen(type);
  };
  const [filtersAvailableCategories, setFiltersAvailableCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    label: "Location",
    value: "Locations"
  }, {
    label: "Language",
    value: "Languages"
  }, {
    label: "Category",
    value: "Categories"
  }, {
    label: "Member",
    value: "Members"
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings.current_plan.id !== 2) {
      setFiltersAvailableCategories([{
        label: "Location",
        value: "Locations"
      }, {
        label: "Language",
        value: "Languages"
      }, {
        label: "Category",
        value: "Categories"
      }]);
    }
  }, [settings]);
  const renderCreateFilterMenu = () => {
    return filtersAvailableCategories.map(filter => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("a", {
        href: "",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          setCreateFilterDropdown(false);
          handleOpenCreateFilter(filter.value);
        },
        children: filter.label
      });
    });
  };
  const [createFirstFilterDropdown, setCreateFirstFilterDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleSelectChange = id => {
    let newSelectedFilters = [...selectedFilter];
    if (!newSelectedFilters.includes(id)) {
      newSelectedFilters.push(id);
    } else {
      newSelectedFilters.pop(id);
    }
    setSelectedFilter(newSelectedFilters);
  };
  const handleSelectAll = () => {
    switch (selectedList) {
      case "Locations":
        if (selectedFilter.length < filtersList.locations.length) {
          setSelectedFilter(filtersList.locations.map(location => location.id));
        } else if (selectedFilter.length === filtersList.locations.length) {
          setSelectedFilter([]);
        }
        break;
      case "Members":
        if (selectedFilter.length < filtersList.members.length) {
          setSelectedFilter(filtersList.members.map(member => member.id), () => {});
        } else if (selectedFilter.length === filtersList.members.length) {
          setSelectedFilter([]);
        }
        break;
      case "Languages":
        if (selectedFilter.length < filtersList.languages.length) {
          setSelectedFilter(filtersList.languages.map(language => language.id), () => {});
        } else if (selectedFilter.length === filtersList.languages.length) {
          setSelectedFilter([]);
        }
        break;
      case "Categories":
        if (selectedFilter.length < filtersList.categories.length) {
          setSelectedFilter(filtersList.categories.map(category => category.id), () => {});
        } else if (selectedFilter.length === filtersList.categories.length) {
          setSelectedFilter([]);
        }
        break;
    }
  };
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getData();
  }, [settings]);
  // const getSettings = async () => {
  //   setLoading(true);
  //   const getSettingsResponse = await axios(
  //     "/wp-json/servv-plugin/v1/shop/info",
  //     {
  //       headers: { "X-WP-Nonce": servvData.nonce },
  //     }
  //   ).catch((error) => toast("Servv unable to fetch settings."));
  //   if (getSettingsResponse && getSettingsResponse.status === 200) {
  //     setTimeFormat(
  //       getSettingsResponse.data.settings.admin_dashboard.time_format_24_hours
  //         ? "HH:mm"
  //         : "hh:mm a"
  //     );
  //   }
  //   setLoading(false);
  // };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // console.log(filtersList);
  }, [filtersList]);
  const [selectedList, setSelectedList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const getData = async () => {
    // if (servvData.servv_plugin_mode === "development") {
    //   if (settings) await getFilters();
    // } else {
    //   getFilters();
    // }
    if (settings) {
      setTimeFormat(settings.settings.admin_dashboard.time_format_24_hours ? "HH:mm" : "hh:mm a");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // getData();
    handleBreadCrumbsChange("Filters", () => setSelectedList(null));
  }, []);
  const singleFilterDelete = async (type, id) => {
    let url = `/wp-json/servv-plugin/v1/filters/${type.toLowerCase()}/${id}`;
    setLoading(true);
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])({
      method: "DELETE",
      url: url,
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    setLoading(false);
    return response;
  };
  const handleFiltersDelete = async (type, ids) => {
    setLoading(true);
    const promises = ids.map(id => singleFilterDelete(type, id));
    const result = await Promise.allSettled(promises);
    if (result) {
      getFilters();
    }
    setLoading(false);
  };
  const [createFilterDropdown, setCreateFilterDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    loading: loading,
    children: [!createFilterOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("h1", {
            className: "text-display-sm font-semibold mt-6",
            children: !selectedList ? "Filters" : selectedList
          }), breadcrumbs.length > 1 && renderBreadCrumbs(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p", {
            className: "page-header-description",
            children: "Easily view, create, and modify filters to streamline your event management process."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gap: 2,
          align: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
            activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              text: "New filter",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: "button-icon"
              }),
              type: "primary",
              onAction: () => {
                !selectedList ? setCreateFirstFilterDropdown(!createFirstFilterDropdown) : handleOpenCreateFilter(selectedList);
              }
            }),
            status: createFirstFilterDropdown,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("ul", {
              className: "filters-dropdown",
              children: renderCreateFilterMenu()
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    }), createFilterOpen === "Locations" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CreateLocationFilterForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onCancel: handleCloseCreateForm,
      location: filterForUpdate,
      timeFormat: timeFormat
    }), createFilterOpen === "Languages" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CreateLanguageFilterForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onCancel: handleCloseCreateForm,
      language: filterForUpdate
    }), createFilterOpen === "Categories" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CreateCategoryFilterForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onCancel: handleCloseCreateForm,
      category: filterForUpdate
    }), createFilterOpen === "Members" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CreateMemberFilterForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onCancel: handleCloseCreateForm,
      member: filterForUpdate
    }), !createFilterOpen && filtersCategories.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_PageContentPlaceholder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: "placeholder-icon"
      }),
      title: "No filters found",
      description: "Filters allow your attendees to better search for and find events that apply to them.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: "Create",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
            className: "button-icon"
          }),
          type: "primary",
          onAction: () => {
            setCreateFilterDropdown(!createFilterDropdown);
          }
        }),
        status: createFilterDropdown,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("ul", {
          className: "filters-dropdown",
          children: renderCreateFilterMenu()
        })
      })
    }), !createFilterOpen && filtersCategories.length > 0 && !selectedList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        headings: renderHeadings(),
        rows: renderFiltersCategories()
      })
    }), !createFilterOpen && selectedList === "Locations" && filtersList.locations && filtersList.locations.length > 0 && !filterForUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_FiltersList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Locations",
      filters: filtersList.locations,
      selected: selectedFilter,
      onSelect: handleSelectChange,
      onSelectAll: handleSelectAll,
      onEdit: handleEditLocation,
      onDelete: handleFiltersDelete,
      setLoading: setLoading
    }), !createFilterOpen && selectedList === "Languages" && filtersList.languages && filtersList.languages.length > 0 && !filterForUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_FiltersList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Languages",
      filters: filtersList.languages,
      selected: selectedFilter,
      onSelect: handleSelectChange,
      onEdit: handleEditLanguage,
      onDelete: handleFiltersDelete,
      setLoading: setLoading
    }), !createFilterOpen && selectedList === "Categories" && filtersList.categories && filtersList.categories.length > 0 && !filterForUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_FiltersList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Categories",
      filters: filtersList.categories,
      selected: selectedFilter,
      onSelect: handleSelectChange,
      onEdit: handleEditCategory,
      onDelete: handleFiltersDelete,
      setLoading: setLoading
    }), !createFilterOpen && selectedList === "Members" && filtersList.members && filtersList.members.length > 0 && !filterForUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_FiltersList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Members",
      filters: filtersList.members,
      selected: selectedFilter,
      onSelect: handleSelectChange,
      onEdit: handleEditMember,
      onDelete: handleFiltersDelete,
      setLoading: setLoading
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersPage);

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
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const PageWrapper = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full border-l border-gray-200 relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `pl-4 pr-4 flex flex-col flex-1 max-w-[1080px] mx-auto h-full ${props.loading ? "loading" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
        position: "bottom-right"
      }), props.children]
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


/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ChevronRightIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ChevronRightIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronRightIcon({
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
    d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function InboxArrowDownIcon({
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
    d: "M8.75 2.75a.75.75 0 0 0-1.5 0v3.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V2.75Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.784 4.5a.75.75 0 0 0-.701.483L2.553 9h2.412a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 9h2.412l-1.53-4.017a.75.75 0 0 0-.7-.483h-.467a.75.75 0 0 1 0-1.5h.466c.934 0 1.77.577 2.103 1.449l1.534 4.026c.097.256.147.527.147.801v1.474A2.25 2.25 0 0 1 12.75 13h-9.5A2.25 2.25 0 0 1 1 10.75V9.276c0-.274.05-.545.147-.801l1.534-4.026A2.25 2.25 0 0 1 4.784 3h.466a.75.75 0 0 1 0 1.5h-.466Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(InboxArrowDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/MagnifyingGlassIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/MagnifyingGlassIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MagnifyingGlassIcon({
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
    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/PencilIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/PencilIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PencilIcon({
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
    d: "M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PlusIcon({
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
    d: "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/TrashIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/TrashIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function TrashIcon({
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
    d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_FiltersPage_jsx.js.map?ver=e7ae7f329f4c66ae7be4