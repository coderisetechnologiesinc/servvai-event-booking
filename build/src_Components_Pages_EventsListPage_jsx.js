"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_EventsListPage_jsx"],{

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
  additionalType = null,
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
    } else if (color === "info") {
      return "badge-infor";
    } else if (color === "purple") {
      return "badge-purple";
    } else if (color === "blue-light") {
      return "badge-blue-light";
    } else if (color === "zoom") {
      return "badge-zoom";
    } else if (color === "neutral") {
      return "";
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
    className: `badge ${fullWidth ? "w-max" : ""} ${getSize()} ${getType()} ${getColor()} ${align === "center" ? "items-center" : "items-end"} ${justify && justify === "start" ? "justify-start" : justify} ${additionalType ? additionalType : ""} cursor-pointer
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


const Card = ({
  className = "",
  padding = "p-0",
  align,
  background = "bg-white",
  maxWidth,
  children,
  ...rest
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...rest,
    className: `
        servv-card
        ${padding}
        ${background}
        w-full
        ${align === "center" ? "mx-auto" : ""}
        ${className}
      `,
    style: {
      maxWidth: maxWidth ? maxWidth : "100%"
    },
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/Components/Containers/CollapsibleSection.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Containers/CollapsibleSection.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const CollapsibleSection = props => {
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "collapsible-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "collapsible-header",
      onClick: () => setVisible(!visible),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "collapsible-section-heading",
        children: props.sectionHeading
      }), !visible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "button-icon"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "button-icon"
      })]
    }), visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "collapsible-content",
      children: props.children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleSection);

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
  loading = false,
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
      }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: loading ? "flex flex-col flex-1 h-full w-full pl-4 md:pl-6 lg:pl-8 pr-4 max-w-full min-w-0 overflow-visible loading" : "",
          children: rows
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
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

/***/ "./src/Components/Controls/ConfirmationModal.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Controls/ConfirmationModal.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const ConfirmationModal = ({
  data
}) => {
  const {
    open = false,
    title = "Please confirm your action",
    text = "Delete selected element",
    item = null,
    onAccept = () => {},
    onCancel = () => {}
  } = data;
  if (!open) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "absolute inset-0 bg-black/40 rounded-[15px] z-50 flex items-center justify-center",
    role: "dialog",
    "aria-modal": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "bg-white rounded-lg p-4 w-11/12 max-w-[65%] max-h-[90%] overflow-y-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between items-center mb-2 relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "dashboard-title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "servv-create-form-close",
          onClick: onCancel,
          "aria-label": "Close",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "servv-create-form-close-icon"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-2 text-sm text-gray-600",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: text
        }), item && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "font-semibold text-gray-900 break-words",
          children: item
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4 flex gap-2 justify-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: onCancel,
          className: "servv_button servv_button--secondary servv_button--md",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          onClick: onAccept,
          className: "servv_button servv_button--primary servv_button--md",
          children: "Confirm"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);

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
  pageCount,
  totalItems = null,
  showingItems = null
}) => {
  const renderPaginationPages = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: totalItems && showingItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text self-center",
        children: `${showingItems} of ${totalItems}`
      })
    });
  };
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
    }), renderPaginationPages(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
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

/***/ "./src/Components/Controls/NewButtonGroup.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
  view
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "tabs-wrapper",
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section-description",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "tabs-container",
      children: buttons.map(button => {
        const isActive = active === button;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          type: "button",
          disabled: disabled,
          onClick: () => onChange(button),
          className: `tab-button ${isActive ? "tab-button--active" : "tab-button--inactive"} ${view ? "tab-compact" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "tab-button-text",
            children: button
          })
        }, button);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewButtonGroup);

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

/***/ "./src/Components/Pages/Events/useEventsLogicMerged.js":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Events/useEventsLogicMerged.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsLogic: () => (/* binding */ useEventsLogic)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");








const useEventsLogic = (settings, filtersList, zoomAccount) => {
  const PAGE_SIZE = 10;
  const isZoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.zoomConnected);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const syncAccountsAfterEvents = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncAccountsAfterEvents);
  const syncFiltersFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncFiltersFromServer);
  const setDatePreset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(1);
  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isPast, setIsPast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventType, setEventType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const [dateSelected, setDateSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: null,
    endDate: null
  });
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedFilters, setSelectedFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [meetingsList, setMeetingsList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [eventOccurrencess, setEventOccurrencess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [occurrencesPagination, setOccurrencesPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mergedList, setMergedList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [mergedPagination, setMergedPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [mergedLoading, setMergedLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("events");
  const [selectedEvent, setSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedOccurrence, setSelectedOccurrence] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    meeting: {},
    product: {},
    notifications: {},
    tickets: []
  });
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  const [timezone, setTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("US/Pacific");
  const [showError, setShowError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // =====================================================================
  // HELPERS
  // =====================================================================

  const getFilteringParameterName = type => {
    switch (type) {
      case "locations":
        return "location_id";
      case "languages":
        return "language_id";
      case "categories":
        return "category_id";
      case "members":
        return "member_id";
      default:
        return null;
    }
  };
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList[zone]
  })), []);
  const normalizeDate = d => {
    if (!d) return null;
    if (moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().isMoment(d)) return d;
    if (d instanceof Date) return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(d);
    return null;
  };
  const resetFilters = () => {
    setSearchString("");
    setDates({
      startDate: null,
      endDate: null
    });
    setSelectedFilters({});
  };
  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate && dateSelected) return true;
    return Object.values(selectedFilters).some(arr => arr.length > 0);
  };
  const handleFilterSelect = (filter, id) => {
    setSelectedFilters(prev => {
      const updated = {
        ...prev
      };
      if (!updated[filter]) {
        updated[filter] = [id];
      } else if (updated[filter].includes(id)) {
        updated[filter] = updated[filter].filter(i => i !== id);
      } else {
        updated[filter].push(id);
      }
      return updated;
    });
  };
  const handleEventChange = newAttr => {
    setAttributes(prev => ({
      ...prev,
      ...newAttr
    }));
  };

  // =====================================================================
  // DATE HELPERS
  // =====================================================================

  const handleSetDates = (dates, isDefault) => {
    const start = normalizeDate(dates.startDate);
    const end = normalizeDate(dates.endDate);
    const startDate = start ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz({
      year: start.year(),
      month: start.month(),
      day: start.date(),
      hour: 0,
      minute: 0,
      second: 0
    }, timezone.id) : null;
    const endDate = end ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz({
      year: end.year(),
      month: end.month(),
      day: end.date(),
      hour: 23,
      minute: 59,
      second: 0
    }, timezone.id) : null;
    if ((startDate || endDate) && setDatePreset.current > 1) {
      setDateSelected(true);
    } else if (!startDate && !endDate) {
      setDateSelected(false);
    }
    setDates({
      startDate,
      endDate
    });
  };
  const applyDatePreset = dates => {
    handleSetDates(dates);
    setDatePreset.current = 2;
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    }
  };

  // =====================================================================
  // SEARCH
  // =====================================================================

  const handleSearchSubmit = value => {
    setSearchString(value);
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    }
  };

  // =====================================================================
  // NAVIGATION
  // =====================================================================

  const handleOpenEvent = selected => {
    const {
      id,
      occurrence_id,
      type
    } = selected;
    const pathType = type === "Zoom" ? "zoom" : eventType === "all" ? "offline" : eventType;
    if (occurrence_id) {
      navigate(`/events/${pathType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${pathType}/${id}`);
    }
  };

  // =====================================================================
  // URL BUILDER
  // =====================================================================

  const buildEventsUrl = ({
    type,
    page,
    pageSize = PAGE_SIZE,
    is_Past,
    search,
    datesObj,
    filtersObj
  }) => {
    let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=${pageSize}&page=${page}&without_occurrences=true`;
    if (!is_Past && search) url += `&search=${search}`;
    if (!is_Past && datesObj?.startDate && datesObj?.endDate) {
      url += `&start_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(datesObj.startDate).format("YY-MM-DD HH:mm:ss")}` + `&end_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(datesObj.endDate).format("YY-MM-DD HH:mm:ss")}`;
    }
    if (!is_Past && filtersObj) {
      Object.entries(filtersObj).forEach(([group, ids]) => {
        const param = getFilteringParameterName(group);
        if (!param) return;
        ids.forEach(id => url += `&${param}=${id}`);
      });
    }
    if (is_Past) url += `&is_past=1`;
    return url;
  };

  // =====================================================================
  // ROW MAPPER
  // =====================================================================

  const mapEventRows = (meetings, type, is_Past) => (meetings || []).map(m => {
    const dt = m.start_time ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone) : null;
    return {
      id: m.id,
      occurrence_id: m.occurrence_id,
      title: m.topic || "(No title)",
      post_id: m.shop_post_object_id,
      date: dt ? dt.format("MMM DD, YYYY") : null,
      time: dt ? dt.format("hh:mm a") : null,
      _sortKey: dt ? dt.valueOf() : 0,
      timezone: m.timezone,
      location: m.location || "",
      type: type === "offline" ? "Event" : "Zoom",
      recurrence: m.type === 2 && type === "offline" || m.type === 8 && type === "zoom" ? "Recurring" : "One-time",
      status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale"
    };
  });

  // =====================================================================
  // MAIN FETCH — SINGLE TYPE (offline | zoom)
  // =====================================================================

  const syncedAfterEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  stateRef.current = {
    eventType,
    isPast,
    searchString,
    dates,
    selectedFilters,
    settings,
    isZoomConnected
  };
  const getEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    type,
    is_Past,
    search,
    datesObj,
    filtersObj
  } = {}) => {
    var _type, _is_Past, _search, _datesObj, _filtersObj;
    const s = stateRef.current;
    type = (_type = type) !== null && _type !== void 0 ? _type : s.eventType;
    is_Past = (_is_Past = is_Past) !== null && _is_Past !== void 0 ? _is_Past : s.isPast;
    search = (_search = search) !== null && _search !== void 0 ? _search : s.searchString;
    datesObj = (_datesObj = datesObj) !== null && _datesObj !== void 0 ? _datesObj : s.dates;
    filtersObj = (_filtersObj = filtersObj) !== null && _filtersObj !== void 0 ? _filtersObj : s.selectedFilters;
    if (!s.settings) return;
    setLoading(true);
    try {
      const url = buildEventsUrl({
        type,
        page,
        is_Past,
        search,
        datesObj,
        filtersObj
      });
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = mapEventRows(res.data.meetings, type, is_Past);
      setMeetingsList(rows);
      setFirstFetchDone(true);
      setPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching events");
    } finally {
      setFirstFetchDone(true);
      setLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // MERGED FETCH — offline always, zoom only if isZoomConnected
  // =====================================================================

  const getMergedEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    is_Past,
    search,
    datesObj,
    filtersObj
  } = {}) => {
    var _is_Past2, _search2, _datesObj2, _filtersObj2;
    const s = stateRef.current;
    is_Past = (_is_Past2 = is_Past) !== null && _is_Past2 !== void 0 ? _is_Past2 : s.isPast;
    search = (_search2 = search) !== null && _search2 !== void 0 ? _search2 : s.searchString;
    datesObj = (_datesObj2 = datesObj) !== null && _datesObj2 !== void 0 ? _datesObj2 : s.dates;
    filtersObj = (_filtersObj2 = filtersObj) !== null && _filtersObj2 !== void 0 ? _filtersObj2 : s.selectedFilters;
    if (!s.settings) return;
    setMergedLoading(true);
    const headers = {
      "X-WP-Nonce": servvData.nonce
    };
    const ITEMS_PER_TYPE = 5;
    const TARGET = PAGE_SIZE; // 10 total

    try {
      var _offlineRes$data$meet, _zoomRes$data$meeting, _offlineRes$data$tota, _zoomRes$data$total_r;
      // ── STEP 1: fetch from both endpoints ─────────────────────────────────
      // if zoom not connected, fetch full TARGET from offline right away
      const offlinePageSize = s.isZoomConnected ? ITEMS_PER_TYPE : TARGET;
      const [offlineRes, zoomRes] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
        type: "offline",
        page,
        pageSize: offlinePageSize,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }), s.isZoomConnected ? axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
        type: "zoom",
        page,
        pageSize: ITEMS_PER_TYPE,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }) : Promise.resolve(null)]);
      let offlineMeetings = (_offlineRes$data$meet = offlineRes.data.meetings) !== null && _offlineRes$data$meet !== void 0 ? _offlineRes$data$meet : [];
      let zoomMeetings = zoomRes ? (_zoomRes$data$meeting = zoomRes.data.meetings) !== null && _zoomRes$data$meeting !== void 0 ? _zoomRes$data$meeting : [] : [];
      const offlineTotal = (_offlineRes$data$tota = offlineRes.data.total_records) !== null && _offlineRes$data$tota !== void 0 ? _offlineRes$data$tota : 0;
      const zoomTotal = zoomRes ? (_zoomRes$data$total_r = zoomRes.data.total_records) !== null && _zoomRes$data$total_r !== void 0 ? _zoomRes$data$total_r : 0 : 0;

      // ── STEP 2: balance — only needed when zoom is connected ───────────────
      if (s.isZoomConnected) {
        const offlineGot = offlineMeetings.length;
        const zoomGot = zoomMeetings.length;
        const deficit = TARGET - (offlineGot + zoomGot);
        if (deficit > 0) {
          if (offlineGot < ITEMS_PER_TYPE && zoomGot >= ITEMS_PER_TYPE) {
            var _extraZoomRes$data$me;
            // offline ran short, top up from zoom
            const extraZoomRes = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
              type: "zoom",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            zoomMeetings = (_extraZoomRes$data$me = extraZoomRes.data.meetings) !== null && _extraZoomRes$data$me !== void 0 ? _extraZoomRes$data$me : [];
          } else if (zoomGot < ITEMS_PER_TYPE && offlineGot >= ITEMS_PER_TYPE) {
            var _extraOfflineRes$data;
            // zoom ran short, top up from offline
            const extraOfflineRes = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
              type: "offline",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            offlineMeetings = (_extraOfflineRes$data = extraOfflineRes.data.meetings) !== null && _extraOfflineRes$data !== void 0 ? _extraOfflineRes$data : [];
          }
        }
      }

      // ── STEP 3: map, merge, sort ───────────────────────────────────────────
      const allOffline = mapEventRows(offlineMeetings, "offline", is_Past);
      const allZoom = mapEventRows(zoomMeetings, "zoom", is_Past);
      const merged = [...allOffline, ...allZoom].sort((a, b) => is_Past ? b._sortKey - a._sortKey : a._sortKey - b._sortKey);

      // ── STEP 4: pagination — based on server totals ────────────────────────
      const totalItems = offlineTotal + zoomTotal;
      const totalPages = Math.max(1, Math.ceil(totalItems / TARGET));
      const safePage = Math.min(Math.max(1, page), totalPages);
      setMergedList(merged);
      setMergedPagination({
        pageNumber: safePage,
        pageCount: totalPages,
        totalItems
      });
      setFirstFetchDone(true);
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching merged events");
    } finally {
      setMergedLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, []);

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (event, page = 1) => {
    const s = stateRef.current;
    if (!s.settings) return;
    setLoading(true);
    try {
      var _res$data$meetings;
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = ((_res$data$meetings = res.data.meetings) !== null && _res$data$meetings !== void 0 ? _res$data$meetings : []).map(m => {
        const dt = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone);
        return {
          id: m.id,
          occurrence_id: m.occurrence_id,
          title: m.topic || "(No title)",
          post_id: m.shop_post_object_id,
          timezone: m.timezone,
          date: dt.format("MMM DD, YYYY"),
          time: dt.format("hh:mm a"),
          location: m.location || "",
          type: eventType === "offline" ? "Event" : "Zoom",
          recurrence: m.type === 2 && eventType === "offline" ? "One-time" : "Recurring",
          status: isPast ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
          tickets: "0/0"
        };
      });
      setEventOccurrencess(rows || []);
      setSelectedEventForOccurrences(event);
      setView("occurrences");
      setOccurrencesPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching occurrences.");
    } finally {
      setLoading(false);
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // DELETE
  // =====================================================================

  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) url += `?occurrence_id=${occurrenceID}`;
    await (0,axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
      url,
      method: "DELETE",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (occurrenceID) {
      setEventOccurrencess(prev => prev.filter(o => o.occurrence_id !== occurrenceID));
      if (selectedEventForOccurrences) {
        var _occurrencesPaginatio;
        await getEventOccurrencess(selectedEventForOccurrences, (_occurrencesPaginatio = occurrencesPagination.pageNumber) !== null && _occurrencesPaginatio !== void 0 ? _occurrencesPaginatio : 1);
      }
    } else {
      if (eventType === "all") getMergedEventsList();else getEventsList();
    }
  };
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => ({
      id: event.post_id,
      occurrenceId: event.occurrence_id
    }));
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // =====================================================================
  // EFFECTS
  // =====================================================================

  const lastFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shouldFetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _s$dates$startDate$va, _s$dates$endDate$valu;
    const s = stateRef.current;
    if (!s.settings) return false;
    const next = {
      eventType: s.eventType,
      isPast: s.isPast,
      startDate: (_s$dates$startDate$va = s.dates.startDate?.valueOf()) !== null && _s$dates$startDate$va !== void 0 ? _s$dates$startDate$va : null,
      endDate: (_s$dates$endDate$valu = s.dates.endDate?.valueOf()) !== null && _s$dates$endDate$valu !== void 0 ? _s$dates$endDate$valu : null,
      filters: JSON.stringify(s.selectedFilters),
      isZoomConnected: s.isZoomConnected // re-fetch if zoom connection changes
    };
    const prev = lastFetchedRef.current;
    if (prev && prev.eventType === next.eventType && prev.isPast === next.isPast && prev.startDate === next.startDate && prev.endDate === next.endDate && prev.filters === next.filters && prev.isZoomConnected === next.isZoomConnected) return false;
    lastFetchedRef.current = next;
    return true;
  }, []);
  const doFetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const s = stateRef.current;
    if (s.eventType === "all") {
      getMergedEventsList({
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters
      });
    } else {
      getEventsList({
        type: s.eventType,
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters
      });
    }
  }, [getMergedEventsList, getEventsList]);

  // 1) INITIAL LOAD
  const initialLoadDoneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings || initialLoadDoneRef.current) return;
    initialLoadDoneRef.current = true;
    shouldFetch();
    doFetch();
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // 2) FILTER / TYPE / ZOOM CONNECTION CHANGES
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!initialLoadDoneRef.current) return;
    if (!shouldFetch()) return;
    doFetch();
  }, [isPast, eventType, dates.startDate?.valueOf(), dates.endDate?.valueOf(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(selectedFilters), isZoomConnected // re-fetch when zoom connects/disconnects
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  // 3) TOAST ERRORS
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showError) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(showError);
  }, [showError]);

  // 4) TIME FORMAT & TIMEZONE — runs once
  const settingsAppliedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings || settingsAppliedRef.current) return;
    settingsAppliedRef.current = true;
    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");else setTimeFormat("hh:mm a");
    let tzGuess = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find(z => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // =====================================================================
  // EXPOSE
  // =====================================================================

  return {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    handleIsPastChange: () => setIsPast(p => !p),
    handleTypeChange: t => setEventType(t),
    handleSetDates,
    applyDatePreset,
    handleSearchChange: setSearchString,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError: err => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () => pagination.pageNumber > 1 && getEventsList({
      page: pagination.pageNumber - 1
    }),
    handleGetNextPage: () => pagination.pageNumber < pagination.pageCount && getEventsList({
      page: pagination.pageNumber + 1
    }),
    handleGetPrevMergedPage: () => mergedPagination.pageNumber > 1 && getMergedEventsList({
      page: mergedPagination.pageNumber - 1
    }),
    handleGetNextMergedPage: () => mergedPagination.pageNumber < mergedPagination.pageCount && getMergedEventsList({
      page: mergedPagination.pageNumber + 1
    }),
    handleGetPrevOccurrencessPage: () => occurrencesPagination.pageNumber > 1 && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber - 1),
    handleGetNextOccurrencessPage: () => occurrencesPagination.pageNumber < occurrencesPagination.pageCount && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber + 1),
    handleEventDelete,
    handleMultipleEventsDelete,
    selectedEvents,
    setSelectedEvents,
    dateSelected
  };
};

/***/ }),

/***/ "./src/Components/Pages/EventsListPage.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Pages/EventsListPage.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events/useEventsLogicMerged */ "./src/Components/Pages/Events/useEventsLogicMerged.js");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/FilterTable */ "./src/Components/Containers/FilterTable.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Containers/CollapsibleSection */ "./src/Components/Containers/CollapsibleSection.jsx");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var _Controls_ConfirmationModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Controls/ConfirmationModal */ "./src/Components/Controls/ConfirmationModal.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PencilSquareIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js");
/* harmony import */ var _Guideline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Guideline */ "./src/Components/Pages/Guideline.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);


























// =====================================================================
// CARD HEADER
// =====================================================================

const EventsCardHeader = ({
  eventsCount,
  view,
  backToEventsList,
  search,
  onChange,
  onFiltering,
  filtersList,
  selectedFilters,
  handleFilterSelect,
  dates,
  setDates,
  isFiltersApplied,
  resetFilters,
  isPast,
  handleSearchSubmit,
  timezone,
  typeButtons,
  activeTypeLabel,
  handleTypeLabel
}) => {
  const [filterDropdown, setFilterDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const filterDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [localSearch, setLocalSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(search);
  const handleEnterButton = e => {
    if (e.key === "Enter") handleSearchSubmit(localSearch);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLocalSearch(search);
  }, [search]);
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
  const isFiltersEmpty = Object.values(filtersList).every(value => Array.isArray(value) && value.length === 0);
  const changeFilterDropdown = () => setFilterDropdown(p => !p);
  const getDates = () => {
    let out = {
      startDate: null,
      endDate: null
    };
    if (dates.startDate) {
      const d = dates.startDate;
      out.startDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    if (dates.endDate) {
      const d = dates.endDate;
      out.endDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    return out;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: "card-header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "card-heading",
      children: [view !== "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        children: t("Event Occurrences")
      }), view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
        className: "pagination-control ml-auto",
        onClick: backToEventsList,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
          className: "pagination-control-icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
          className: "pagination-control-text",
          children: t("Back to events view")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "card-description",
      children: [dates.startDate && dates.endDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
        children: [t("You are viewing events between"), " ", moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()(dates.startDate).format("MMM DD, YYYY"), " -", " ", moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()(dates.endDate).format("MMM DD, YYYY")]
      }), isFiltersApplied && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("a", {
        className: "card-header-description-link",
        onClick: resetFilters,
        children: t("Clear filters")
      })]
    }), !isPast && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "hidden md:flex",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        align: "left",
        gap: 4,
        cardsLayout: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
          value: localSearch,
          placeholder: "Search events by name",
          onChange: setLocalSearch,
          handleKeyPress: handleEnterButton,
          fullWidth: true,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: getDates(),
          placeholder: t("Select dates"),
          inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white",
          onChange: newValue => setDates(newValue)
        }), !isFiltersEmpty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
          activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: t("Filters"),
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            onAction: changeFilterDropdown
          }),
          status: filterDropdown,
          onClose: () => setFilterDropdown(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
            gap: 4,
            children: [typeButtons && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              view: "compact",
              buttons: typeButtons,
              active: activeTypeLabel,
              onChange: handleTypeLabel
            }), Object.keys(filtersList).map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
              sectionHeading: filter.charAt(0).toUpperCase() + filter.substring(1),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
                gap: 2,
                children: filtersList[filter].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  label: item.name,
                  checked: selectedFilters[filter]?.includes(item.id) || false,
                  onChange: () => handleFilterSelect(filter, item.id),
                  font: "text-sm",
                  color: "text-gray-500"
                }, item.id))
              })
            }, filter)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
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
        })]
      })
    })]
  });
};

// =====================================================================
// HEADINGS STORAGE HELPERS (module-level, no re-creation on render)
// =====================================================================

const HEADINGS_STORAGE_KEY = "servv_events_headings";
const defaultHeadings = [{
  label: t("Title"),
  value: "title",
  visible: true
}, {
  label: t("Date"),
  value: "date",
  visible: true
}, {
  label: t("Time"),
  value: "time",
  visible: true
}, {
  label: t("Location"),
  value: "location",
  visible: false
}, {
  label: t("Type"),
  value: "type",
  visible: true
}, {
  label: t("Recurrence"),
  value: "recurrence",
  visible: true
}, {
  label: t("Status"),
  value: "status",
  visible: false
}];

// Reads saved visibility map from localStorage and merges with defaults.
// Any column added in the future will fall back to its default visibility.
const loadHeadings = () => {
  try {
    const saved = localStorage.getItem(HEADINGS_STORAGE_KEY);
    if (!saved) return defaultHeadings;
    const savedMap = JSON.parse(saved); // { [value]: boolean }
    return defaultHeadings.map(h => h.value in savedMap ? {
      ...h,
      visible: savedMap[h.value]
    } : h);
  } catch {
    return defaultHeadings;
  }
};

// Persists only the visibility map (not labels) so it stays small and
// doesn't break if labels are later translated differently.
const saveHeadings = updated => {
  try {
    const savedMap = Object.fromEntries(updated.map(h => [h.value, h.visible]));
    localStorage.setItem(HEADINGS_STORAGE_KEY, JSON.stringify(savedMap));
  } catch {}
};

// =====================================================================
// MAIN PAGE
// =====================================================================

const EventsListPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  redirect = () => {}
}) => {
  var _ref, _ref2;
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_21__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_21__.useServvStore)(s => s.filtersList);
  const zoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_21__.useServvStore)(s => s.zoomAccount);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_21__.useServvStore)(s => s.zoomConnected);
  const fetchZoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_21__.useServvStore)(s => s.fetchZoomAccount);
  const {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    handleIsPastChange,
    handleTypeChange,
    handleSetDates,
    applyDatePreset,
    handleSearchChange,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError,
    resetSubpageSelection,
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage,
    handleGetNextPage,
    handleGetPrevMergedPage,
    handleGetNextMergedPage,
    handleGetPrevOccurrencessPage,
    handleGetNextOccurrencessPage,
    handleEventDelete
  } = (0,_Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_1__.useEventsLogic)(settings, filtersList, zoomAccount);

  // ── derive active list / pagination / loading ──
  const isMerged = eventType === "all";
  const activeList = (_ref = isMerged ? mergedList : view === "events" ? meetingsList : eventOccurrencess) !== null && _ref !== void 0 ? _ref : [];
  const activePagination = (_ref2 = view === "occurrences" ? occurrencesPagination : isMerged ? mergedPagination : pagination) !== null && _ref2 !== void 0 ? _ref2 : {};
  const activeLoading = isMerged ? mergedLoading : loading;
  const [showBulkAction, setShowBulkAction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleGetPrev = view === "occurrences" ? handleGetPrevOccurrencessPage : isMerged ? handleGetPrevMergedPage : handleGetPrevPage;
  const handleGetNext = view === "occurrences" ? handleGetNextOccurrencessPage : isMerged ? handleGetNextMergedPage : handleGetNextPage;
  const triggerSearch = () => {
    if (isMerged) getMergedEventsList();else getEventsList();
  };

  // ── local ui state ──

  // Lazy initializer reads from localStorage once on mount
  const [headings, setHeadings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(loadHeadings);
  const [selectedAll, setSelectedAll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [active, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showCustomizeModal, setShowCustomizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showFiltersModal, setShowFiltersModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showDateModal, setShowDateModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showMobileSearch, setShowMobileSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmationModalData, setConfirmationModalData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const dropdownRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();

  // ── effects ──
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    const planId = settings.current_plan?.id;
    if (planId === 2 && zoomConnected === null) fetchZoomAccount();
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active === null) return;
    const handleClickOutside = event => {
      try {
        if (event.target.closest(".filter-table-dropdown-container button")) return;
        if (active && dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
          setActiveDropdown(null);
        }
      } catch (e) {}
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resetSelectedSubpage) {
      resetSubpageSelection();
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage, resetSubpageSelection, handleResetSubpage]);

  // ── column customization ──
  const customizeHeading = value => {
    const newHeadings = headings.map(h => h.value === value ? {
      ...h,
      visible: !h.visible
    } : h);
    setHeadings(newHeadings);
    saveHeadings(newHeadings); // persist immediately on every toggle
  };
  const renderBulkActions = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
    className: "filter-table-dropdown left-5 top-9 ml-6 mt-6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "dropdown-actions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gap: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
          className: "dropdown-action",
          onClick: () => performBulkAction("delete"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__["default"], {
            className: "dropdown-icon-critical"
          }), "Delete (", selectedEvents.length, ")"]
        })
      })
    })
  });
  const renderHeadingsCustomization = () => headings.map(heading => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: heading.label,
    name: heading.label,
    checked: heading.visible,
    onChange: () => customizeHeading(heading.value)
  }, heading.value));

  // ── row selection ──
  const handleSelectEvent = selected => {
    let newSelection = [...selectedEvents];
    const isSelected = newSelection.filter(event => event.id === selected.id && (event.occurrence_id && selected.occurrence_id && event.occurrence_id === selected.occurrence_id || !event.occurrence_id));
    if (isSelected.length > 0) {
      newSelection = newSelection.filter(event => !(event.id === selected.id && (event.occurrence_id && selected.occurrence_id && event.occurrence_id === selected.occurrence_id || !event.occurrence_id)));
    } else {
      newSelection.push(selected);
    }
    setSelectedEvents(newSelection);
  };
  const handleMultipleEventsDelete = async () => {
    try {
      await Promise.all(selectedEvents.map(({
        post_id,
        occurrence_id
      }) => handleEventDelete(post_id, occurrence_id)));
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // ── confirmation modal ──
  const openConfirmDelete = (text, onAccept, item) => {
    setShowBulkAction(false);
    setConfirmationModalData({
      open: true,
      text,
      item,
      onAccept: () => {
        onAccept();
        setConfirmationModalData({
          open: false,
          onAccept: () => {},
          item: null,
          text: ""
        });
      },
      onCancel: () => setConfirmationModalData({
        open: false,
        onAccept: () => {},
        item: null,
        text: ""
      })
    });
  };

  // ── table renderers ──
  const renderHeadings = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: () => setSelectedAll(p => !p)
      })
    }), headings.map(heading => heading.visible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {
      children: heading.label
    }, heading.value) : null), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {})]
  });
  const renderRows = events => events.map(row => {
    const key = row.id + (row.occurrence_id || "");
    const isDropdownOpen = !row.occurrence_id && active === row.id || row.occurrence_id && row.occurrence_id === active;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("tr", {
      className: "table-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
          checked: selectedAll || selectedEvents.some(event => event.id === row.id && event.occurrence_id === row.occurrence_id),
          size: 2,
          onChange: () => handleSelectEvent({
            id: row.id,
            occurrence_id: row.occurrence_id,
            post_id: row.post_id
          })
        })
      }), headings.map(heading => {
        if (!heading.visible) return null;
        if (heading.label === "Type") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: view === "events" ? row[heading.value] : "Occurrence",
            type: "badge",
            color: row[heading.value] === "Event" ? "" : "zoom",
            size: "small",
            align: "center",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Recurrence") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: row[heading.value],
            type: "badge",
            color: row[heading.value] === "Recurring" ? "brand" : "",
            size: "small",
            align: "center",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Status") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: row[heading.value],
            type: "pill-colour",
            color: row[heading.value] === "Past" ? "blue" : row[heading.value] === "Unlisted" ? "warning" : "success",
            size: "small",
            align: "center",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Date" && !row[heading.value]) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: "Schedule",
            onAction: () => {
              setView("occurrences");
              getEventOccurrencess(row.post_id);
            },
            size: "small",
            align: "center",
            color: "brand",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Date" && row[heading.value]) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: row[heading.value],
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Time" && row[heading.value]) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: `${moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()(row[heading.value], "hh:mm a").format(timeFormat)}${!settings?.settings?.hide_time_zone ? " " + moment_timezone__WEBPACK_IMPORTED_MODULE_10___default().tz(row.timezone).format("z").toString() : ""}`,
            size: "small",
            align: "center",
            justify: "center",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Time" && !row[heading.value]) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: "View times",
            onAction: () => {
              setView("occurrences");
              getEventOccurrencess(row.post_id);
            },
            align: "center",
            justify: "center",
            size: "small",
            color: "brand",
            additionalType: "badge-short"
          })
        }, heading.value);
        if (heading.label === "Title") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("a", {
            className: "filter-table-link",
            onClick: e => {
              e.preventDefault();
              handleOpenEvent({
                id: row.post_id,
                occurrence_id: row.occurrence_id,
                type: row.type
              });
            },
            children: row[heading.value]
          })
        }, heading.value);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: row[heading.value]
        }, heading.value);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("td", {
        className: "filter-table-dropdown-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
          onClick: () => {
            const dropdownId = row.occurrence_id || row.id;
            setActiveDropdown(prev => prev === dropdownId ? null : dropdownId);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
            className: "dropdown-icon"
          })
        }), isDropdownOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "filter-table-dropdown absolute right-0 top-8 z-50 bg-white border border-gray-200 rounded-xl shadow-lg p-4 mt-2 min-w-[220px]",
          ref: dropdownRefs,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
            className: "dropdown-header",
            children: [row.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
              className: "dropdown-description flex flex-row",
              children: row.date
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "dropdown-actions",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
              gap: 4,
              children: [row.occurrence_id && row.time && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                className: "dropdown-action",
                onClick: () => {
                  handleOpenEvent({
                    id: row.post_id,
                    occurrence_id: row.occurrence_id,
                    type: row.type
                  });
                  setActiveDropdown(null);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
                  className: "dropdown-icon"
                }), "Occurrence details"]
              }), row.recurrence === "Recurring" && view !== "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                className: "dropdown-action",
                onClick: () => {
                  setView("occurrences");
                  getEventOccurrencess(row.post_id);
                  setActiveDropdown(null);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
                  className: "dropdown-icon"
                }), "View occurrences"]
              }), view === "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                className: "dropdown-action",
                onClick: () => {
                  handleOpenEvent({
                    id: row.post_id,
                    type: row.type
                  });
                  setActiveDropdown(null);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
                  className: "dropdown-icon"
                }), "Event details"]
              }), view === "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                className: "dropdown-action",
                onClick: () => {
                  openConfirmDelete("Delete selected event", () => handleEventDelete(row.post_id), row.title);
                  setActiveDropdown(null);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__["default"], {
                  className: "dropdown-icon-critical"
                }), t("Delete event")]
              }), row.occurrence_id && view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                className: "dropdown-action",
                onClick: () => {
                  openConfirmDelete("Delete selected occurrence of this event", () => handleEventDelete(row.post_id, row.occurrence_id), row.title);
                  setActiveDropdown(null);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__["default"], {
                  className: "dropdown-icon-critical"
                }), t("Delete occurrence")]
              })]
            })
          })]
        })]
      })]
    }, key);
  });
  const performBulkAction = async actionType => {
    if (!selectedEvents.length) return;
    if (actionType === "delete") {
      const itemLabel = selectedEvents.length === 1 ? "event" : "events";
      const hasOccurrences = selectedEvents.some(e => e.occurrence_id);
      const deleteLabel = hasOccurrences ? "events/occurrences" : itemLabel;
      openConfirmDelete(`Delete ${selectedEvents.length} selected ${deleteLabel}`, async () => {
        try {
          await Promise.all(selectedEvents.map(({
            post_id,
            occurrence_id
          }) => handleEventDelete(post_id, occurrence_id !== null && occurrence_id !== void 0 ? occurrence_id : null)));
          react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.success(`${selectedEvents.length} ${deleteLabel} deleted successfully.`);
          setSelectedEvents([]);
          setSelectedAll(false);
          setShowBulkAction(false);
          triggerSearch();
        } catch (error) {
          console.error("Bulk delete error:", error);
          react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error("Some items could not be deleted. Please try again.");
        }
      }, `${selectedEvents.length} selected ${deleteLabel}`);
    }
  };
  const renderMobileCards = events => events.map(row => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: "mobile-event-row flex items-center justify-between px-4 py-3 mb-3 bg-white rounded-xl shadow-sm",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "mobile-event-title font-semibold text-base text-gray-900",
        children: row.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "mobile-event-date text-sm text-purple-700",
        children: row.date
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
      className: "mobile-event-actions ml-2 p-2 rounded-full hover:bg-gray-100",
      "aria-label": "Show event details",
      onClick: () => setActiveDropdown(row.occurrence_id || row.id),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("circle", {
          cx: "5",
          cy: "12",
          r: "2",
          fill: "#7c3aed"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "2",
          fill: "#7c3aed"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("circle", {
          cx: "19",
          cy: "12",
          r: "2",
          fill: "#7c3aed"
        })]
      })
    })]
  }, row.id + (row.occurrence_id || "")));
  const getDatesForModal = () => {
    let datesValue = {
      startDate: null,
      endDate: null
    };
    if (dates.startDate) {
      const d = dates.startDate;
      datesValue.startDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    if (dates.endDate) {
      const d = dates.endDate;
      datesValue.endDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    return datesValue;
  };
  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");else react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };
  const typeButtons = zoomConnected && settings.current_plan && settings?.current_plan?.id !== 1 ? [t("Events"), "Zoom", t("All")] : null;
  const activeTypeLabel = eventType === "offline" ? t("Events") : eventType === "zoom" ? "Zoom" : t("All");
  const handleTypeLabel = label => {
    if (label === "Zoom") handleTypeChange("zoom");else if (label === t("All")) handleTypeChange("all");else handleTypeChange("offline");
  };

  // ── render ──
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!selectedEvent && showGuide && (!zoomAccount || !zoomAccount.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Guideline__WEBPACK_IMPORTED_MODULE_20__["default"], {
      showGuide: setShowGuide,
      redirect: redirect
    }), !selectedEvent && (!showGuide || zoomAccount && zoomAccount.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      loading: false,
      withBackground: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: "dashboard-card relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "servv-dashboard-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
            className: "dashboard-heading flex flex-row justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h1", {
              className: "dashboard-title",
              children: "Events"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "flex flex-row gap-3 justify-self-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                className: "flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition",
                onClick: () => setShowCustomizeModal(true),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
                  className: "w-5 h-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                type: "primary whitespace-nowrap text-[12px] md:text-[16px]",
                size: "md",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
                  className: "w-5 h-5"
                }),
                text: t("Create event"),
                onAction: handleCreateNewEvent
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "header-line"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "events-actions w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: "events-actions-bar w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
                className: "flex flex-row justify-between items-center w-full gap-4 flex-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
                  className: "flex flex-row gap-3 justify-between sm:justify-start flex-wrap w-full",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    buttons: [t("Upcoming"), "Past"],
                    active: isPast ? "Past" : t("Upcoming"),
                    onChange: label => handleIsPastChange(label === "Past")
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-full max-w-none px-0 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "md:hidden flex items-center px-4 pt-4 pb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                "aria-label": t("Search"),
                className: `p-2 rounded-full bg-white shadow ${showMobileSearch ? "ring-2 ring-purple-400" : ""}`,
                onClick: () => setShowMobileSearch(prev => !prev),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("svg", {
                  width: "22",
                  height: "22",
                  fill: "none",
                  viewBox: "0 0 22 22",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("circle", {
                    cx: "10",
                    cy: "10",
                    r: "7",
                    stroke: "#7c3aed",
                    strokeWidth: "2"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("path", {
                    d: "M16 16l4 4",
                    stroke: "#7c3aed",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
                className: "flex-1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
                className: "flex gap-2 pr-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                  "aria-label": t("Date"),
                  className: "p-2 rounded-full bg-white shadow",
                  onClick: () => setShowDateModal(true),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("svg", {
                    width: "22",
                    height: "22",
                    fill: "none",
                    viewBox: "0 0 22 22",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("rect", {
                      x: "3",
                      y: "5",
                      width: "16",
                      height: "14",
                      rx: "2",
                      stroke: "#7c3aed",
                      strokeWidth: "2"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("path", {
                      d: "M7 3v4M15 3v4",
                      stroke: "#7c3aed",
                      strokeWidth: "2"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                  "aria-label": t("Filters"),
                  className: "p-2 rounded-full bg-white shadow",
                  onClick: () => setShowFiltersModal(true),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("svg", {
                    width: "22",
                    height: "22",
                    fill: "none",
                    viewBox: "0 0 22 22",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("path", {
                      d: "M3 5h16M6 10h10M9 15h4",
                      stroke: "#7c3aed",
                      strokeWidth: "2",
                      strokeLinecap: "round"
                    })
                  })
                })]
              })]
            }), showMobileSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "md:hidden px-4 pb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("input", {
                type: "text",
                className: "w-full border border-gray-300 rounded px-3 py-2 mb-2",
                placeholder: "Search events by name",
                value: searchString,
                autoFocus: true,
                onChange: e => handleSearchChange(e.target.value),
                onKeyDown: e => e.key === "Enter" && triggerSearch()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                className: "w-full bg-purple-600 text-white rounded py-2",
                onClick: triggerSearch,
                children: t("Search")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(EventsCardHeader, {
              eventsCount: activeList.length,
              view: view,
              backToEventsList: () => setView("events"),
              search: searchString,
              onChange: handleSearchChange,
              filtersList: filtersList,
              onFiltering: triggerSearch,
              handleSearchSubmit: handleSearchSubmit,
              selectedFilters: selectedFilters,
              handleFilterSelect: handleFilterSelect,
              dates: dates,
              setDates: handleSetDates,
              isFiltersApplied: isFiltersApplied(),
              resetFilters: resetFilters,
              isPast: isPast,
              timezone: timezone,
              typeButtons: typeButtons,
              activeTypeLabel: activeTypeLabel,
              handleTypeLabel: handleTypeLabel
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "hidden md:block w-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_22__["default"], {
                isLoading: activeLoading,
                customStyling: "h-[50vh]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  tableClassName: "events-table",
                  headings: renderHeadings(),
                  rows: renderRows(view === "occurrences" ? eventOccurrencess !== null && eventOccurrencess !== void 0 ? eventOccurrencess : [] : activeList)
                })
              }), selectedEvents.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
                className: "filter-table-dropdown-container py-xl px-2 text-gray-600 font-regular justify-start border-b first:font-medium first:text-gray-900 md:text-sm flex flex-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                  onClick: () => setShowBulkAction(!showBulkAction),
                  className: `mr-auto flex flex-row items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
                                ${showBulkAction ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
                    className: "w-4 h-4"
                  }), "Bulk actions"]
                }), showBulkAction && renderBulkActions()]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: "mobile-cards-container",
              children: renderMobileCards(view === "occurrences" ? eventOccurrencess !== null && eventOccurrencess !== void 0 ? eventOccurrencess : [] : activeList)
            }), activePagination.pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
              hasPrev: activePagination.pageNumber > 1,
              hasNext: activePagination.pageNumber < activePagination.pageCount,
              totalItems: activePagination.totalItems,
              showingItems: mergedList.length,
              onPrev: handleGetPrev,
              onNext: handleGetNext
            })]
          })]
        }), showCustomizeModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: "absolute inset-0 bg-black/40 rounded-[15px] z-50 flex items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
            className: "bg-white rounded-lg p-4 w-11/12 max-w-[65%] max-h-[90%] overflow-y-auto customize-modal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "flex justify-between items-center mb-2 relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
                className: "dashboard-title",
                children: "Customize Columns"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
                className: "servv-create-form-close",
                onClick: () => setShowCustomizeModal(false),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_19__.CloseIcon, {
                  className: "servv-create-form-close-icon top-0"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("ul", {
              className: "flex flex-col gap-1 customize-list",
              children: renderHeadingsCustomization()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
              className: "mt-3 w-full new-event-button",
              onClick: () => setShowCustomizeModal(false),
              children: "Submit"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_ConfirmationModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
          data: confirmationModalData
        })]
      })
    }), showFiltersModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: "bg-white rounded-lg p-4 w-11/12 max-w-sm max-h-[90vh] overflow-y-auto filters-modal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex justify-between items-center mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
            className: "font-semibold mb-1",
            children: t("Filters")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            onClick: () => setShowFiltersModal(false),
            "aria-label": "Close",
            children: t("×")
          })]
        }), Object.keys(filtersList).map(filter => filtersList[filter].length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "font-semibold mb-1",
            children: filter.charAt(0).toUpperCase() + filter.slice(1)
          }), filtersList[filter].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
            label: item.name,
            checked: selectedFilters[filter]?.includes(item.id) || false,
            onChange: () => handleFilterSelect(filter, item.id),
            font: "text-sm",
            color: "text-gray-700"
          }, item.id))]
        }, filter) : null), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex gap-2 mt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700",
            onClick: resetFilters,
            children: t("Reset")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg",
            onClick: () => {
              triggerSearch();
              setShowFiltersModal(false);
            },
            children: t("Apply")
          })]
        })]
      })
    }), showDateModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: "bg-white rounded-lg p-4 w-11/12 max-w-sm date-modal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex justify-between items-center mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
            className: "font-semibold text-lg",
            children: t("Select Dates")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            onClick: () => setShowDateModal(false),
            "aria-label": "Close",
            children: t("×")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: getDatesForModal(),
          inputClassName: "w-full border border-gray-300 rounded px-3 py-2",
          onChange: handleSetDates
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
          className: "mt-3 w-full bg-purple-600 text-white rounded py-2",
          onClick: () => {
            triggerSearch();
            setShowDateModal(false);
          },
          children: t("Apply")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListPage);

/***/ }),

/***/ "./src/Components/Pages/Guideline.jsx":
/*!********************************************!*\
  !*** ./src/Components/Pages/Guideline.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const Guideline = ({
  showGuide = () => {},
  redirect = () => {}
}) => {
  const guidelineItems = [{
    id: 1,
    title: "Attend an onboarding session over Zoom",
    description: "Join our success team to get started with Servv AI. We'll walk you through how to set up your account, create events, and share insider tips to maximize engagement and bookings.",
    link: "https://servv.ai/grow-your-business-with-servv-ai/",
    linkText: "Schedule"
  }, {
    id: 2,
    title: "Watch a product demo",
    description: "See Servv AI in action. Our demo walks you through event setup, calendar management, and adding widgets to your website for seamless customer bookings.",
    link: "https://demo.servv.app/",
    linkText: "Watch Demo"
  }, {
    id: 3,
    title: "Launch your first event",
    description: "Create and publish your first event in minutes. Choose event type, add descriptions, set availability, and start accepting bookings from your customers.",
    link: "post-new.php?servv_plugin=true",
    linkText: "Create Event"
  }, {
    id: 4,
    title: "Set up filters",
    description: "Organize your events by creating custom filters such as location, language, and category. Help your visitors easily browse and find events that match their interests.",
    link: "Create Filter",
    linkText: "Create Filters"
  }, {
    id: 5,
    title: "Add Servv AI widget to your site",
    description: "Easily embed the Servv AI event booking widget on any WordPress post or page using shortcode. Showcase events directly on your website and boost engagement.",
    link: "https://support.servv.ai/getting-started/setting/widget/",
    linkText: "Add Widget"
  }];
  const renderGuidelines = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: " flex flex-col w-full gap-8 mt-4",
      children: guidelineItems.map(item => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-[max-content_1fr_150px] w-full gap-4 items-center p-8 rounded-lg shadow-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "w-10 h-10 flex items-center justify-center rounded-full bg-brand-500 text-white text-xl font-regular",
            children: item.id
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col items-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
              className: "text-xl font-semibold text-gray-700",
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-md font-regular text-gray-500",
              children: item.description
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "bg-white text-brand-700 border border-brand-300 hover:bg-brand-50 focus:ring-2 focus:ring-gray-200 text-md px-4 py-2 rounded-lg transition-colors duration-200 shrink-0 min-w-[150px]",
            onClick: () => item.id !== 4 ? open(item.link, "_blank") : redirect("filters"),
            children: item.linkText
          })]
        });
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
      gap: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            className: "text-display-sm mt-6",
            children: "Getting started"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "page-header-description",
            children: "Easily launch your first event in minutes"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex gap-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Create new event",
            type: "primary",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "w-5 h-5 mr-2"
            }),
            onAction: () => open("post-new.php?servv_plugin=true", "_top")
          })
        })]
      })
    }), renderGuidelines()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Guideline);

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

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SpinnerLoader = ({
  isLoading,
  children,
  customStyling
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: isLoading ? "blur-sm pointer-events-none" : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `absolute inset-0 flex items-center justify-center ${customStyling}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

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

/***/ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js ***!
  \***********************************************************************/
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
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronUpIcon({
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
    d: "M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/PencilSquareIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/PencilSquareIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PencilSquareIcon({
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
    d: "M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilSquareIcon);
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
//# sourceMappingURL=src_Components_Pages_EventsListPage_jsx.js.map?ver=60d8e486cafe1c0e711a