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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Card = props => {
  const {
    className = "",
    padding,
    align,
    background,
    maxWidth,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...rest,
    className: `servv-card ${padding || "p-0"} ${align === "center" ? "mx-auto" : ""} ${background || "bg-white"} max-md:max-w-full w-full ${maxWidth ? `md:max-w-[${maxWidth}]` : ""} ${className}`,
    children: children
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Dropdown = ({
  activator,
  status,
  children,
  onClose,
  className = "",
  dropdownClassName = "",
  ...rest
}) => {
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [dropdownStyle, setDropdownStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    minWidth: 240
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!status) return;
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [status, onClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status && dropdownRef.current) {
      const dropdown = dropdownRef.current.querySelector(".dropdown-content-fix");
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        let newStyle = {
          minWidth: 240
        };
        if (rect.right > viewportWidth) {
          newStyle.right = 0;
          newStyle.left = "auto";
        }
        if (rect.left < 0) {
          newStyle.left = 0;
          newStyle.right = "auto";
        }
        setDropdownStyle({
          ...newStyle
        });
      }
    }
  }, [status, children]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ref: dropdownRef,
    className: `relative ${className}`,
    ...rest,
    children: [activator, status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `absolute z-50 mt-2 ${dropdownClassName}`,
      style: {
        minWidth: 240,
        right: 0,
        left: "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "bg-white border border-gray-200 rounded-xl shadow-lg p-4 dropdown-content-fix",
        style: dropdownStyle,
        children: children
      })
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FilterTable = ({
  headings,
  rows,
  className = "",
  tableClassName = "",
  ...rest
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `table-container w-full ${className}`,
    ...rest,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
      className: `filter-table w-full ${tableClassName}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr", {
          className: "filter-table-headings",
          children: headings
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
        children: rows
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterTable);

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
  onAction,
  disabled = false,
  className = "",
  style = {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
    onClick: onAction,
    disabled: disabled,
    className: `
        flex items-center justify-center px-4 py-2 rounded-lg
        font-medium text-sm transition-colors duration-200
        ${type === "primary" ? "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-200" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `,
    style: {
      fontFamily: "'Inter', sans-serif",
      ...style
    },
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "mr-2",
      children: icon
    }), text]
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
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_FilterTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/FilterTable */ "./src/Components/Containers/FilterTable.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_ButtonGroupConnected__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/ButtonGroupConnected */ "./src/Components/Controls/ButtonGroupConnected.jsx");
/* harmony import */ var _Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/ConnectedButton */ "./src/Components/Controls/ConnectedButton.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/WalletIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowDownOnSquareStackIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);






// import PageContent from "../Containers/PageContent";
















const BookingsPage = ({
  settings
}) => {
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
    label: "Title",
    value: "title",
    visible: true
  }, {
    label: "Occurrence",
    value: "occurrence",
    visible: true
  }, {
    label: "Mode",
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
  const [timezone, setTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("US/Pacific");
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
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

  // --- Dropdown refs and click outside handlers ---
  const customizeDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const filterDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!customizeDropdown) return;
    const handleClickOutside = event => {
      if (customizeDropdownRef.current && !customizeDropdownRef.current.contains(event.target)) {
        setCustomizeDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [customizeDropdown]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!filterDropdown) return;
    const handleClickOutside = event => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterDropdown]);
  const getPostId = variant => {
    // console.log(variant.indexOf("0"), variant.length - 1);
    if (variant.indexOf("0") < variant.length - 1) {
      return {
        id: variant.slice(0, variant.indexOf("0")),
        occurrence: variant.slice(variant.indexOf("0"))
      };
    } else {
      return {
        id: variant.slice(0, variant.indexOf("0"))
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
    occurrence,
    registrant
  }) => {
    setLoading(true);
    const registrants = registrant.includes(",") ? registrant.split(",") : [registrant];
    try {
      for (const reg of registrants) {
        let url = `/wp-json/servv-plugin/v1/event/${id}/registrants/${reg}/resend`;
        if (occurrence) {
          url += `?occurrence_id=${occurrence}`;
        }
        await (0,axios__WEBPACK_IMPORTED_MODULE_20__["default"])(url, {
          method: "POST",
          headers: {
            "X-WP-Nonce": servvData.nonce
          }
        });
      }
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Emails successfully resent to all registrants");
    } catch (error) {
      console.error(error);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Failed to resend emails");
    } finally {
      setActiveDropdown(null);
      setLoading(false);
    }
  };
  const refundBooking = async ({
    id,
    occurrence
  }) => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/bookings/${id}/refund`;
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
    let url = `/wp-json/servv-plugin/v1/bookings/${id}/cancel`;
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
  const updateTimeFormat = settings => {
    if (!settings) return;else if (settings && settings.settings && settings.settings.time_format_24_hours) {
      setTimeFormat("HH:mm");
    }
  };
  const updateTimezone = settings => {
    let defaultTimezone = null;
    if (!settings) return;
    if (settings.settings?.admin_dashboard) {
      const adminSettings = JSON.parse(settings.settings.admin_dashboard);
      defaultTimezone = adminSettings.default_timezone || moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz.guess();
    } else {
      defaultTimezone = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz.guess();
    }
    let findTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_18__["default"].filter(t => t.zone === defaultTimezone);
    if (findTimezone.length > 0) {
      setTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;
      let availableTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_18__["default"].filter(t => t.gmt === formattedOffset);
      if (availableTimezone.length > 0) {
        setTimezone(availableTimezone[0]);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateTimeFormat(settings);
    updateTimezone(settings);
  }, [settings]);
  const getDates = (tz = timezone.zone) => {
    let datesValue = {
      startDate: null,
      endDate: null
    };
    if (dates.startDate) {
      const d = dates.startDate; // Moment object
      datesValue.startDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    if (dates.endDate) {
      const d = dates.endDate;
      datesValue.endDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    return datesValue;
  };
  const handleSetDates = dates => {
    let startDate = null;
    if (dates.startDate) startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz({
      year: dates.startDate.getFullYear(),
      month: dates.startDate.getMonth(),
      day: dates.startDate.getDate(),
      hour: 0,
      minute: 0,
      second: 0
    }, timezone.zone);
    let endDate = null;
    if (dates.endDate) endDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz({
      year: dates.endDate.getFullYear(),
      month: dates.endDate.getMonth(),
      day: dates.endDate.getDate(),
      hour: 23,
      minute: 59,
      second: 0
    }, timezone.zone);
    setDates({
      startDate: startDate ? startDate : null,
      endDate: endDate ? endDate : null
    });
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
  const renderHeadings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("th", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
                  className: "font-semibold text-sm max-sm: text-sm",
                  children: [t("#"), row.id]
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
                    children: order_date.format(timeFormat)
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
                    children: start_date.format(timeFormat)
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
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: row.active_registrants === 0 ? "Canceled" : row.reunded_quantity >= row.quantity ? "Refunded" : "Active",
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
              children: [`#${row.id}`, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
                className: "dropdown-description wrap-break-word",
                children: row.email
              })]
            }), row.active_registrants > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
              className: "dropdown-actions",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
                gap: 4,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => resendConfirmations({
                    ...getPostId(row.variant_id),
                    registrant: row.registrants_ids
                  }),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_22__["default"], {
                    className: "dropdown-icon"
                  }), t("Resend confirmation")]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
              className: "dropdown-actions border-t w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
                gap: 4,
                children: [row.price > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => refundBooking(row.id),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_23__["default"], {
                    className: "dropdown-icon"
                  }), t("Issue refund")]
                }), row.active_registrants > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => cancelBookings(row.id),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    className: "dropdown-icon"
                  }), t("Cancel booking")]
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
          value: price.from,
          placeholder: "Price from",
          onChange: val => handlePriceChange(val, "from"),
          maxLength: 6,
          width: "w-8",
          align: "left",
          type: "number",
          step: "any"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
          value: price.to,
          placeholder: "Price to",
          onChange: val => handlePriceChange(val, "to"),
          maxLength: 6,
          width: "w-8",
          align: "left",
          type: "number",
          step: "any"
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
    firstFetch.current = true;
  };
  const performBulkAction = async actionType => {
    if (!selectedOrder || selectedOrder.length === 0) return;
    setLoading(true);
    let successCount = 0;
    let failureCount = 0;
    try {
      for (const variant of selectedOrder) {
        let id = null;
        let occurrence = null;
        const variantData = bookings.bookings.find(booking => booking.id === variant);
        if (!variantData) continue;
        ({
          id,
          occurrence
        } = getPostId(variantData.variant_id));

        // Make sure registrants is an array
        const registrants = variantData.registrants_ids.includes(",") ? variantData.registrants_ids.split(",") : [variantData.registrants_ids];
        let url = "";
        let successMessage = "";
        let errorMessage = "";
        switch (actionType) {
          case "resend":
            url = `/wp-json/servv-plugin/v1/event/${id}/registrants/`;
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
            return;
        }
        if (actionType !== "resend") {
          try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_20__["default"].post(url, null, {
              headers: {
                "X-WP-Nonce": servvData.nonce
              }
            });
            if (res.status === 200) successCount++;else failureCount++;
          } catch (error) {
            console.error(error);
            failureCount++;
          }
        } else {
          try {
            const requests = registrants.map(registrant => {
              let newURL = url + registrant + "/resend";
              if (occurrence) newURL += `?occurrence_id=${occurrence}`;
              return axios__WEBPACK_IMPORTED_MODULE_20__["default"].post(newURL, null, {
                headers: {
                  "X-WP-Nonce": servvData.nonce
                }
              });
            });
            const responses = await Promise.allSettled(requests);
            let succeeded = 0;
            let failed = 0;
            responses.forEach(res => {
              if (res.status === "fulfilled" && res.value.status === 200) succeeded++;else failed++;
            });
            console.log(succeeded, registrants.length);
            if (succeeded === registrants.length) successCount++;else failureCount++;
          } catch (error) {
            console.error(error);
            failureCount++;
          }
        }
      }
      if (successCount > 0 && failureCount === 0) {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("All actions completed successfully.");
      } else if (successCount > 0 && failureCount > 0) {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(`${successCount} succeeded, ${failureCount} failed.`);
      } else {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("All actions failed.");
      }
    } finally {
      setActiveDropdown(null);
      setShowBulkActions(false);
      setLoading(false);
    }
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
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
            }), t("Refund bookings")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("button", {
            className: "dropdown-action",
            onClick: () => performBulkAction("cancel"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
              className: "dropdown-icon"
            }), t("Cancel bookings")]
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
          children: t("Bookings")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
          children: t("Clear filters")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        align: "left",
        gap: 4,
        cardsLayout: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
          value: searchString,
          placeholder: "Search by event title",
          onChange: onChange,
          handleKeyPress: handleEnterButton,
          fullWidth: true,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: getDates(),
          placeholder: "Select dates",
          inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white",
          onChange: newValue => handleSetDates(newValue)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          ref: filterDropdownRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_15__["default"], {
            activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Filters",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
                className: "button-icon"
              }),
              type: "secondary",
              onAction: () => changeFilterDropdown()
            }),
            status: filterDropdown,
            onClose: () => setFilterDropdown(false),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
              gap: 4,
              children: [renderFilteringWithFilters(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
                text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("span", {
                  className: "text-center",
                  children: t("Apply")
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
          })
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gap: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("h1", {
            className: "text-display-sm mt-6",
            children: t("Bookings")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("p", {
            className: "page-header-description",
            children: "View and manage all event bookings in one place"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
          gap: 2,
          align: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
            ref: customizeDropdownRef,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_15__["default"], {
              activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
              onClose: () => setCustomizeDropdown(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("ul", {
                children: renderHeadingsCustomization()
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
            text: "Export",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            disabled: !bookings || bookings.bookings.length === 0,
            onAction: () => {
              exportToCSV(bookings.bookings);
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
          gap: 4,
          align: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Controls_ButtonGroupConnected__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              text: "All time",
              selected: selectedInterval === "all",
              onAction: () => handleChangeTimeInterval("all")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              text: "12 month",
              selected: selectedInterval === "12",
              onAction: () => handleChangeTimeInterval("12")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              text: "30 days",
              selected: selectedInterval === "30",
              onAction: () => handleChangeTimeInterval("30")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ConnectedButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              text: "7 days",
              selected: selectedInterval === "7",
              onAction: () => handleChangeTimeInterval("7")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: [renderBookingsHeader(), bookings && bookings.bookings.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
              headings: renderHeadings(),
              rows: renderRows()
            })
          }), selectedOrder.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: "filter-table-dropdown-container py-xl px-2 text-gray-600 font-regular justify-start border-b first:font-medium first:text-gray-900 md:text-sm flex flex-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("button", {
              onClick: () => setShowBulkActions(!showBulkAction),
              className: "ml-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "dropdown-icon"
              })
            }), showBulkAction && renderBulkActions()]
          }), bookings.page_count > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
    className: "w-full relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `flex flex-col flex-1 h-full w-full pl-4 md:pl-6 lg:pl-8 pr-4 max-w-full min-w-0 overflow-visible ${props.loading ? "loading" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
        position: "bottom-right"
      }), props.children]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

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

/***/ "./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function AdjustmentsVerticalIcon({
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
    d: "M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(AdjustmentsVerticalIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ "./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function Bars4Icon({
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
    d: "M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars4Icon);
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
//# sourceMappingURL=src_Components_Pages_BookingsPage_jsx.js.map?ver=191ebdcac4fca0f060ea