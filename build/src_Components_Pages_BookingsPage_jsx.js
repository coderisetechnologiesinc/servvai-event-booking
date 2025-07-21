"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_BookingsPage_jsx"],{

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

/***/ "./src/Components/Controls/ButtonGroupConnected.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/ButtonGroupConnected.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ButtonGroupConnected = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "button-group-connected",
    children: props.children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroupConnected);

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

/***/ "./src/Components/Controls/ConnectedButton.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/ConnectedButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ConnectedButton = ({
  text = "",
  icon,
  selected = false,
  onAction = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    onClick: onAction,
    className: `connected-button ${selected ? "selected-button" : ""}`,
    children: text
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectedButton);

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

/***/ "./src/Components/Pages/BookingsPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/BookingsPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_FilterTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/FilterTable */ "./src/Components/Containers/FilterTable.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_ButtonGroupConnected__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/ButtonGroupConnected */ "./src/Components/Controls/ButtonGroupConnected.jsx");
/* harmony import */ var _Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/ConnectedButton */ "./src/Components/Controls/ConnectedButton.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/WalletIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowDownOnSquareStackIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);






















const BookingsPage = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [headings, setHeadings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    label: "Order ID",
    value: "order",
    visible: true
  }, {
    label: "Order Date/Time",
    value: "date",
    visible: true
  }, {
    label: "Registrant",
    value: "registrant",
    visible: true
  }, {
    label: "Event Title/Location",
    value: "title",
    visible: true
  }, {
    label: "Occurrence",
    value: "occurrence",
    visible: true
  }, {
    label: "Paid",
    value: "paid",
    visible: true
  }, {
    label: "Status",
    value: "status",
    visible: true
  }]);
  const providers = ["offline", "zoom"];
  const [selectedOrder, setSelectedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [customizeDropdown, setCustomizeDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [bookings, setBookings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedInterval, setSelectedTimeInterval] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const [activeDropdown, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: null,
    endDate: null
  });
  const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    from: null,
    to: null
  });
  const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [filterDropdown, setFilterDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedProvider, setSelectedProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    offline: true,
    zoom: true
  });
  const [showBulkAction, setShowBulkActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const firstFetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const getPostId = variant => {
    if (variant.length > 4) {
      return {
        id: variant.slice(0, 3),
        occurrence: variant.slice(3)
      };
    } else {
      return {
        id: variant.slice(0, 3),
        occurrence: null
      };
    }
  };
  const handleOrderSelect = ID => {
    let newOrders = [...selectedOrder];
    if (selectedOrder.includes(ID)) {
      newOrders = newOrders.filter(order => order !== ID);
      setSelectedOrder(newOrders);
    } else {
      newOrders.push(ID);
      setSelectedOrder(newOrders);
    }
  };
  const handleSelectAll = () => {
    if (!bookings || bookings.bookings.length === 0) return;
    let newOrders = [];
    if (selectedOrder.length === bookings.bookings.length) {
      setSelectedOrder([]);
      return;
    }
    bookings.bookings.forEach(booking => {
      newOrders.push(booking.id);
    });
    setSelectedOrder(newOrders);
  };
  const resendConfirmations = async ({
    id,
    occurrence
  }) => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/event/${id}/registrants/resend`;
    if (occurrence) {
      url += `?occurrence_id=${occurrence}`;
    }
    const refundBookingResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(url, {
      method: "POST",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(error => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Failed to resend emails");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Emails successfully resent");
    }
    setActiveDropdown(null);
    setLoading(false);
  };
  const refundBooking = async id => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/booking/${id}/refund`;
    const refundBookingResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(url, {
      method: "POST",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(error => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Failed to refund booking");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Booking successfully refunded");
    }
    setActiveDropdown(null);
    setLoading(false);
  };
  const cancelBookings = async id => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/booking/${id}/cancel`;
    const refundBookingResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(url, {
      method: "POST",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(error => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Failed to cancel booking");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Booking successfully cancelled");
    }
    setActiveDropdown(null);
    setLoading(false);
  };
  const setActive = id => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else setActiveDropdown(id);
  };
  const fetchBookings = async ({
    page = 1
  } = {}) => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/bookings";
    let params = [];
    const endDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()();
    let startDate = null;
    if (dates.startDate === null) {
      if (selectedInterval === "12" || firstFetch.current) {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(endDate).subtract(12, "months");
      } else if (selectedInterval === "30") {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(endDate).subtract(30, "days");
      } else if (selectedInterval === "7") {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(endDate).subtract(7, "days");
      }
      if (!firstFetch.current && startDate) {
        params.push(`from_datetime=${startDate.format("YYYY-MM-DD HH:mm:ss")}`);
        params.push(`to_datetime=${endDate.format("YYYY-MM-DD HH:mm:ss")}`);
      }
    } else if (dates.startDate && dates.endDate) {
      const start = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(dates.startDate);
      const end = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(dates.endDate);
      params.push(`from_datetime=${start.format("YYYY-MM-DD HH:mm:ss")}`);
      params.push(`to_datetime=${end.format("YYYY-MM-DD HH:mm:ss")}`);
    }
    if (searchString.length > 0) {
      params.push(`search=${encodeURIComponent(searchString)}`);
    }
    if (price.from) {
      params.push(`from_price=${price.from}`);
    }
    if (price.to) {
      params.push(`to_price=${price.to}`);
    }

    // Validate selected event types
    if (!selectedProvider.offline && !selectedProvider.zoom) {
      setLoading(false);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Please select at least one event type to apply the filter.");
      return;
    }

    // Handle provider filter
    if (selectedProvider.offline !== selectedProvider.zoom) {
      const provider = selectedProvider.offline ? "offline" : "zoom";
      params.push(`event_provider=${provider}`);
    }

    // Pagination
    params.push(`page=${page}`, `page_size=10`);
    try {
      const response = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(`${url}?${params.join("&")}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Servv was unable to fetch bookings.");
    }
    setLoading(false);
    return {
      bookings: bookings.bookings,
      page: bookings.page_number
    };
  };
  const onFiltering = async () => {
    await fetchBookings();
  };
  const changeFilterDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchBookings();
  }, [dates, selectedInterval]);
  const handleChangeTimeInterval = async newVal => {
    setSelectedTimeInterval(newVal);
    // await fetchBookings(newVal);
  };

  // useEffect(() => {
  //   fetchBookings();
  // }, []);

  const renderHeadings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("th", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onChange: () => handleSelectAll(),
          checked: bookings && bookings.bookings && selectedOrder.length === bookings.bookings.length
        })
      }), headings.map(heading => {
        if (heading.visible) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("th", {
          children: heading.label
        });
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("th", {})]
    });
  };
  const isRefundAvailable = () => {
    let selectedBookings = bookings.bookings.map(booking => selectedOrder.indexOf(booking.id) >= 0);
    if (selectedBookings.length > 0) {
      return selectedBookings.filter(booking => booking.price > 0).length > 0;
    } else return false;
  };
  const renderRows = () => {
    return bookings.bookings.map(row => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("tr", {
        className: "table-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__["default"], {
            checked: selectedOrder.indexOf(row.id) >= 0,
            size: 2,
            onChange: () => handleOrderSelect(row.id)
          })
        }), headings.map(heading => {
          if (heading.visible) {
            const start_date = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(row.start_datetime).tz(row.timezone);
            const order_date = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(row.created_datetime).tz(row.timezone);
            if (heading.value === "order") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("span", {
                  className: "font-semibold text-sm",
                  children: ["#", row.id]
                })
              });
            }
            if (heading.value === "date") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  className: "flex flex-col",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                    className: "text-sm font-semibold",
                    children: order_date.format("MMM DD YYYY")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                    className: "text-xs font-regular",
                    children: order_date.format("HH:mm a")
                  })]
                })
              });
            }
            if (heading.value === "registrant") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: row.email
              });
            }
            if (heading.value === "title") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                  className: "font-semibold text-sm",
                  children: row.product_name.length > 24 ? row.product_name.slice(0, 24) + "..." : row.product_name
                })
              });
            }
            if (heading.value === "occurrence") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
                  className: "flex flex-col",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                    className: "text-sm font-semibold",
                    children: start_date.format("MMM DD YYYY")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                    className: "text-xs font-regular",
                    children: start_date.format("HH:mm a")
                  })]
                })
              });
            }
            if (heading.value === "paid") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: Number.parseFloat(row.price) > 0 ? Number.parseFloat(row.price) : "Free"
              });
            }
            if (heading.value === "status") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: row.active_registrants === 0 ? "Canceled" : row.reunded_quantity >= row.quantity ? "Refunded" : "Paid",
                  color: row.active_registrants === 0 ? "error" : row.reunded_quantity >= row.quantity ? "warning" : "success",
                  size: "small",
                  align: "center",
                  type: "pill-colour"
                })
              });
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("td", {
          className: "filter-table-dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("button", {
            onClick: () => setActive(row.id),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: "dropdown-icon"
            })
          }), activeDropdown === row.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: "filter-table-dropdown",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("span", {
              className: "dropdown-header",
              children: [`#${row.id}`, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                className: "dropdown-description",
                children: row.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
              className: "dropdown-actions",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => resendConfirmations(getPostId(row.variant_id)),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_22__["default"], {
                    className: "dropdown-icon"
                  }), "Resend confirmation"]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
              className: "dropdown-actions border-t w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: [row.price > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => refundBooking(row.id),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_23__["default"], {
                    className: "dropdown-icon"
                  }), "Issue refund"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => cancelBookings(row.id),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    className: "dropdown-icon"
                  }), "Cancel booking"]
                })]
              })
            })]
          })]
        })]
      });
    });
  };
  const onChange = newValue => {
    setSearchString(newValue);
  };
  const handleEnterButton = event => {
    if (event.key === "Enter") {
      fetchBookings();
    }
  };
  const customizeHeading = heading => {
    let newHeadings = [...headings];
    let selectedHeading = headings.map(heading => heading.value).indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
  };
  const renderHeadingsCustomization = () => {
    return headings.map(heading => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__["default"], {
        label: heading.label,
        name: heading.label,
        checked: heading.visible,
        onChange: () => customizeHeading(heading.value)
      });
    });
  };
  const handlePriceChange = (newVal, attribute) => {
    const newPrice = {
      ...price
    };
    let newPriceValue = newVal.replace(".", ",");
    // let newPriceValue = newVal;
    // console.log(Number.parseFloat(newVal), newVal);
    if (attribute === "from") {
      newPrice.from = Number.parseFloat(newPriceValue);
    } else {
      newPrice.to = Number.parseFloat(newPriceValue);
    }
    setPrice({
      ...newPrice
    });
  };
  const handleSelectProvider = provider => {
    let newProvidersSelection = {
      ...selectedProvider
    };
    if (provider === "offline") {
      newProvidersSelection.offline = !newProvidersSelection.offline;
    } else {
      newProvidersSelection.zoom = !newProvidersSelection.zoom;
    }
    setSelectedProvider({
      ...newProvidersSelection
    });
  };
  const renderFilteringWithFilters = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          value: price.from,
          placeholder: "Price from",
          onChange: val => handlePriceChange(val, "from"),
          maxLength: 6,
          width: "w-8",
          align: "left",
          type: "number",
          step: "any"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          value: price.to,
          placeholder: "Price to",
          onChange: val => handlePriceChange(val, "to"),
          maxLength: 6,
          width: "w-8",
          align: "left",
          type: "number",
          step: "any"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__["default"], {
          label: "Event",
          name: "offline",
          checked: selectedProvider.offline,
          onChange: () => handleSelectProvider("offline")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_18__["default"], {
          label: "Zoom meeting",
          name: "zoom",
          checked: selectedProvider.zoom,
          onChange: () => handleSelectProvider("zoom")
        })]
      })
    });
  };
  const handleGetPrevPage = () => {
    fetchBookings({
      page: bookings.page_number - 1
    });
  };
  const handleGetNextPage = () => {
    fetchBookings({
      page: bookings.page_number + 1
    });
  };
  const resetFilters = () => {
    setDates({
      startDate: null,
      endDate: null
    });
    setSearchString("");
    setSelectedProvider({
      offline: true,
      zoom: true
    });
    setPrice({
      from: null,
      to: null
    });
    // setSelectedTimeInterval("12");
    firstFetch.current = true;
  };
  const performBulkAction = async actionType => {
    if (!selectedOrder || selectedOrder.length === 0) return;
    setLoading(true);
    let successCount = 0;
    let failureCount = 0;
    for (const variant of selectedOrder) {
      let id = null;
      let occurrence = null;
      const variantId = bookings.bookings.find(booking => booking.id === variant);
      if (variantId) {
        ({
          id,
          occurrence
        } = getPostId(variantId.variant_id));
      }
      let url = "";
      let successMessage = "";
      let errorMessage = "";
      switch (actionType) {
        case "resend":
          url = `/wp-json/servv-plugin/v1/event/${id}/registrants/resend`;
          if (occurrence) url += `?occurrence_id=${occurrence}`;
          successMessage = "Emails resent successfully.";
          errorMessage = "Some emails failed to resend.";
          break;
        case "refund":
          url = `/wp-json/servv-plugin/v1/booking/${variant}/refund`;
          successMessage = "Bookings refunded successfully.";
          errorMessage = "Some bookings failed to refund.";
          break;
        case "cancel":
          url = `/wp-json/servv-plugin/v1/booking/${variant}/cancel`;
          successMessage = "Bookings cancelled successfully.";
          errorMessage = "Some bookings failed to cancel.";
          break;
        default:
          (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Unknown action type.");
          setLoading(false);
          return;
      }
      try {
        const res = await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(url, {
          method: "POST",
          headers: {
            "X-WP-Nonce": servvData.nonce
          }
        });
        if (res.status === 200) {
          successCount++;
        } else {
          failureCount++;
        }
      } catch (error) {
        failureCount++;
      }
    }
    if (successCount > 0 && failureCount === 0) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("All actions completed successfully.");
    } else if (successCount > 0 && failureCount > 0) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(`${successCount} succeeded, ${failureCount} failed.`);
    } else {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("All actions failed.");
    }
    setActiveDropdown(null);
    setShowBulkActions(false);
    setLoading(false);
  };
  const handleExport = async () => {
    let allBookings = [];
    for (let i = 1; i < bookings.page_count + 1; i++) {
      const {
        bookings,
        page
      } = await fetchBookings({
        page: i
      });
      allBookings = allBookings.concat(bookings);
    }
    console.log(allBookings);
    exportToCSV(allBookings);
  };
  function exportToCSV(data, filename = "export.csv") {
    if (!data || data.length === 0) return;
    const selectedFields = ["id", "created_datetime", "product_name", "variant_name", "start_datetime", "timezone", "price", "quantity", "refunded_quantity", "active_registrants", "additional_registrants"];
    const headerMap = {
      id: "Booking ID",
      created_datetime: "Created At",
      product_name: "Product Name",
      variant_name: "Variant",
      start_datetime: "Start Time",
      timezone: "Timezone",
      price: "Price",
      quantity: "Quantity",
      refunded_quantity: "Refunded",
      active_registrants: "Active Registrants",
      additional_registrants: "Additional Registrants"
    };
    const rows = data.map(item => {
      const row = {};
      for (const field of selectedFields) {
        if (field === "additional_registrants") {
          if (Array.isArray(item.additional_registrants)) {
            row[field] = item.additional_registrants.map(r => `${r.first_name || ""} ${r.last_name || ""} (${r.email || ""})`).join(" | ");
          } else {
            row[field] = "";
          }
        } else {
          var _item$field;
          row[field] = (_item$field = item[field]) !== null && _item$field !== void 0 ? _item$field : "";
        }
      }
      return row;
    });
    const headers = selectedFields.map(field => headerMap[field]);
    const csvRows = [headers.join(",")];
    for (const row of rows) {
      const line = selectedFields.map(field => {
        const val = row[field];
        const escaped = ("" + val).replace(/"/g, '""');
        return `"${escaped}"`;
      }).join(",");
      csvRows.push(line);
    }
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
  const renderBulkActions = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
      className: "filter-table-dropdown ml-6 mt-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: "dropdown-actions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
            className: "dropdown-action",
            onClick: () => performBulkAction("resend"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_22__["default"], {
              className: "dropdown-icon"
            }), "Resend confirmations"]
          }), isRefundAvailable() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
            className: "dropdown-action",
            onClick: () => performBulkAction("refund"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_23__["default"], {
              className: "dropdown-icon"
            }), "Refund bookings"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
            className: "dropdown-action",
            onClick: () => performBulkAction("cancel"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
              className: "dropdown-icon"
            }), "Cancel bookings"]
          })]
        })
      })
    });
  };
  const renderBookingsHeader = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "card-heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
          children: "Your bookings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: `${bookings?.bookings?.length || 0} item${bookings && bookings.bookings.length > 1 ? "s" : ""}`,
          color: "secondary",
          size: "small",
          align: "center"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: "card-description",
        children: (searchString.length > 0 || dates.startDate || dates.endDate || !selectedProvider.offline || !selectedProvider.zoom || price.from || price.to) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("a", {
          className: "card-header-description-link",
          onClick: () => resetFilters(),
          children: "Clear filters"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "left",
        gap: 4,
        cardsLayout: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          value: searchString,
          placeholder: "Enter search string",
          onChange: onChange,
          handleKeyPress: handleEnterButton,
          fullWidth: true,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: dates,
          placeholder: "Select dates",
          inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white",
          onChange: newValue => setDates(newValue)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
          activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
            text: "Filters",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            onAction: () => changeFilterDropdown()
          }),
          status: filterDropdown,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
            gap: 4,
            children: [renderFilteringWithFilters(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
              text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                className: "text-center",
                children: "Apply"
              }),
              type: "primary",
              icon: null,
              onAction: () => {
                onFiltering();
                setFilterDropdown(false);
              },
              justify: "justify-center"
            })]
          })
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gap: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("h1", {
            className: "text-display-sm font-semibold mt-6",
            children: "Bookings"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
            className: "page-header-description",
            children: "View and manage all your event bookings in one place for seamless scheduling and attendee tracking"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
          gap: 2,
          align: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
            activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
              text: "Customize",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
                className: "button-icon"
              }),
              type: "secondary",
              onAction: () => {
                setCustomizeDropdown(!customizeDropdown);
              }
            }),
            status: customizeDropdown,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("ul", {
              children: renderHeadingsCustomization()
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
            text: "Export",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            disabled: !bookings || bookings.bookings.length === 0,
            onAction: () => {
              handleExport();
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
          gap: 4,
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Controls_ButtonGroupConnected__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
              text: "All time",
              selected: selectedInterval === "all",
              onAction: () => handleChangeTimeInterval("all")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
              text: "12 month",
              selected: selectedInterval === "12",
              onAction: () => handleChangeTimeInterval("12")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
              text: "30 days",
              selected: selectedInterval === "30",
              onAction: () => handleChangeTimeInterval("30")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
              text: "7 days",
              selected: selectedInterval === "7",
              onAction: () => handleChangeTimeInterval("7")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [renderBookingsHeader(), bookings && bookings.bookings.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
              headings: renderHeadings(),
              rows: renderRows()
            })
          }), selectedOrder.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: "filter-table-dropdown-container py-xl px-2 text-gray-600 font-regular justify-start border-b first:font-medium first:text-gray-900 md:text-sm flex flex-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("button", {
              onClick: () => setShowBulkActions(!showBulkAction),
              className: "ml-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "dropdown-icon"
              })
            }), showBulkAction && renderBulkActions()]
          }), bookings.page_count > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
            hasPrev: bookings.page_number > 1,
            hasNext: bookings.page_number < bookings.page_count,
            onPrev: () => handleGetPrevPage(),
            onNext: () => handleGetNextPage()
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingsPage);

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

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowDownOnSquareStackIcon.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowDownOnSquareStackIcon.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowDownOnSquareStackIcon({
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
    d: "M7 1a.75.75 0 0 1 .75.75V6h-1.5V1.75A.75.75 0 0 1 7 1ZM6.25 6v2.94L5.03 7.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L7.75 8.94V6H10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.25Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.268 14A2 2 0 0 0 6 15h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-1.732V11a3 3 0 0 1-3 3H4.268Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownOnSquareStackIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/PaperAirplaneIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/PaperAirplaneIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PaperAirplaneIcon({
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
    d: "M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaperAirplaneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/WalletIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/WalletIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function WalletIcon({
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
    d: "M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM3.5 5A1.5 1.5 0 0 0 2 6.5v.401A2.986 2.986 0 0 1 3.5 6.5h9c.546 0 1.059.146 1.5.401V6.5A1.5 1.5 0 0 0 12.5 5h-9ZM8 10a2 2 0 0 0 1.938-1.505c.068-.268.286-.495.562-.495h2A1.5 1.5 0 0 1 14 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-3A1.5 1.5 0 0 1 3.5 8h2c.276 0 .494.227.562.495A2 2 0 0 0 8 10Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(WalletIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_BookingsPage_jsx.js.map?ver=8a64c713ecab0e899b02