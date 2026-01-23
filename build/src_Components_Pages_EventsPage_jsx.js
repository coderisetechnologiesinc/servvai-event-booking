"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_EventsPage_jsx"],{

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

/***/ "./src/Components/Controls/CheckboxItem.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Controls/CheckboxItem.jsx ***!
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


const CheckboxItem = ({
  label = "",
  name,
  checked = false,
  disabled = false,
  onChange = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
    className: `checkbox-item ${disabled ? "is-disabled" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: "checkbox",
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange,
      className: "checkbox-item__input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "checkbox-item__box",
      children: checked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        className: "checkbox-item__check",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M2.5 6.5L5 9L9.5 3",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "checkbox-item__label",
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxItem);

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
  disabled = false
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
          className: `tab-button ${isActive ? "tab-button--active" : "tab-button--inactive"}`,
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
  meetingType = "offline"
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

/***/ "./src/Components/Pages/Events/useEventsLogic.js":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/Events/useEventsLogic.js ***!
  \*******************************************************/
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
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const syncAccountsAfterEvents = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncAccountsAfterEvents);
  const syncFiltersFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncFiltersFromServer);

  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isPast, setIsPast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventType, setEventType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("offline");
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
  const handleSearchSubmit = value => {
    setSearchString(value);
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: value,
      datesObj: dates,
      filtersObj: selectedFilters
    });
  };
  const handleOpenEvent = selected => {
    const {
      id,
      occurrence_id
    } = selected;
    if (occurrence_id) {
      navigate(`/events/${eventType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${eventType}/${id}`);
    }
  };
  const normalizeDate = d => {
    if (!d) return null;
    if (moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().isMoment(d)) return d;
    if (d instanceof Date) return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(d);
    return null;
  };
  const handleSetDates = dates => {
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
    setDates({
      startDate,
      endDate
    });
  };
  const applyDatePreset = dates => {
    handleSetDates(dates);
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
  };
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList[zone]
  })), []);

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
  const resetFilters = () => {
    setSearchString("");
    setDates({
      startDate: null,
      endDate: null
    });
    setSelectedFilters({});
  };
  const processFilters = () => {
    let out = "";
    Object.entries(selectedFilters).forEach(([group, ids]) => {
      const param = getFilteringParameterName(group);
      if (!param) return;
      ids.forEach(id => out += `&${param}=${id}`);
    });
    return out;
  };
  const processDates = () => {
    if (!dates.startDate || !dates.endDate) return "";
    return `&start_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(dates.startDate).format("YY-MM-DD HH:mm:ss")}` + `&end_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(dates.endDate).format("YY-MM-DD HH:mm:ss")}`;
  };
  const handleEventChange = newAttr => {
    setAttributes(prev => ({
      ...prev,
      ...newAttr
    }));
  };
  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate) return true;
    return Object.values(selectedFilters).some(arr => arr.length > 0);
  };

  // =====================================================================
  // MAIN FETCH (STABLE!)
  // =====================================================================
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
  const syncedAfterEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const getEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    type = eventType,
    is_Past = isPast,
    search = searchString,
    datesObj = dates,
    filtersObj = selectedFilters
  } = {}) => {
    if (!settings) return;
    setLoading(true);
    try {
      let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=12&page=${page}&without_occurrences=true`;
      if (!is_Past && search) url += `&search=${search}`;
      if (!is_Past && datesObj.startDate && datesObj.endDate) {
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = (res.data.meetings || []).map(m => {
        const dt = m.start_time ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone) : null;
        return {
          id: m.id,
          occurrence_id: m.occurrence_id,
          title: m.topic || "(No title)",
          post_id: m.shop_post_object_id,
          date: dt ? dt.format("MMM DD, YYYY") : null,
          time: dt ? dt.format("hh:mm a") : null,
          timezone: m.timezone,
          location: m.location || "",
          type: type === "offline" ? "Event" : "Zoom",
          recurrence: m.type === 2 && type === "offline" || m.type === 8 && type === "zoom" ? "Recurring" : "One-time",
          status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale"
        };
      });
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
  }, [settings, eventType, isPast, dates, selectedFilters]);

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (event, page = 1) => {
    if (!settings) return;
    setLoading(true);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = res.data.meetings?.map(m => {
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
  }, [settings]);
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => {
      return {
        id: event.post_id,
        occurrenceId: event.occurrence_id
      };
    });
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
      await getEventsList();
      console.log("All selected events have been deleted, and the events list has been updated.");
    } catch (error) {
      console.error("Error deleting events or updating the events list:", error);
    }
  };
  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) {
      url += `?occurrence_id=${occurrenceID}`;
    }
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
      url: url,
      method: "DELETE",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    getEventsList();
  };

  //   const initialLoadRef = useRef(false);
  const hasFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const allowFilterFetchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters
    }).then(() => {
      // enable filter effect AFTER initial load is finished
      allowFilterFetchRef.current = true;
    });
  }, [settings]);

  // 2) REFETCH ON FILTER CHANGES
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!allowFilterFetchRef.current) {
      // block early filter triggered fetch
      return;
    }
    if (!settings) return;
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters
    });
  }, [dates.startDate, dates.endDate, selectedFilters, isPast, eventType]);

  // 3) TOAST ERROR
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showError) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(showError);
  }, [showError]);

  // 4) TIMEFORMAT & TIMEZONE
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");else setTimeFormat("hh:mm a");
    let tzGuess = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find(z => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]);

  // =====================================================================
  // API EXPOSE
  // =====================================================================

  return {
    loading,
    showGuide,
    isPast,
    eventType,
    dates,
    meetingsList,
    eventOccurrencess,
    pagination,
    occurrencesPagination,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
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
    getEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () => pagination.pageNumber > 1 && getEventsList({
      page: pagination.pageNumber - 1
    }),
    handleGetNextPage: () => pagination.pageNumber < pagination.pageCount && getEventsList({
      page: pagination.pageNumber + 1
    }),
    handleGetPrevOccurrencessPage: () => occurrencesPagination.pageNumber > 1 && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber - 1),
    handleGetNextOccurrencessPage: () => occurrencesPagination.pageNumber < occurrencesPagination.pageCount && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber + 1),
    handleEventDelete,
    handleEventChange,
    handleReturnWithError: err => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    setShowGuide
  };
};

/***/ }),

/***/ "./src/Components/Pages/Events/useServvData.js":
/*!*****************************************************!*\
  !*** ./src/Components/Pages/Events/useServvData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServvData: () => (/* binding */ useServvData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);




const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return {
      "X-WP-Nonce": servvData.nonce
    };
  }
  return {};
};
const useServvData = () => {
  const {
    filtersList: storeFilters
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_1__.useServvStore)();

  /**
   * SETTINGS
   */
  const fetchSettings = async ({
    adminSection,
    settingsData
  }) => {
    let getSettingsResponse;
    if (!adminSection) {
      try {
        getSettingsResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
          headers: getNonceHeaders()
        });
      } catch (e) {
        const err = new Error("Settings fetch failed");
        err.original = e;
        err.status = e?.response?.status;
        throw err;
      }
    } else {
      getSettingsResponse = {
        status: 200,
        data: settingsData
      };
    }
    if (getSettingsResponse && getSettingsResponse.status === 200) {
      const data = getSettingsResponse.data;
      return {
        ...data,
        settings: {
          ...data.settings,
          admin_dashboard: data?.settings?.admin_dashboard ? JSON.parse(data.settings.admin_dashboard) : {}
        }
      };
    }
    return null;
  };
  const fetchCalendarAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/calendar/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchZoomAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchStripeAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchGmailAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/gmail/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchFiltersByType = async type => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/wp-json/servv-plugin/v1/filters/${type}`, {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };
  const fetchAllFilters = async ({
    filtersProp,
    settings
  }) => {
    if (filtersProp) {
      return filtersProp;
    }
    if (storeFilters && Object.keys(storeFilters).length > 0) {
      return storeFilters;
    }
    const result = {};
    result.locations = await fetchFiltersByType("locations");
    result.languages = await fetchFiltersByType("languages");
    result.categories = await fetchFiltersByType("categories");
    if (settings && settings.current_plan?.id !== 1) {
      result.members = await fetchFiltersByType("members");
    }
    return result;
  };
  const fetchEventTickets = async ({
    postId,
    occurrenceId
  }) => {
    let reqURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      reqURL += `?occurrence_id=${occurrenceId}`;
    }
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(reqURL, {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };
  const fetchEventData = async ({
    postIDProp,
    occurrenceId,
    adminSection
  }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = postIDProp ? postIDProp : urlParams.get("post");
    let postStatus = "admin";
    if (!adminSection) {
      const {
        getEditedPostAttribute
      } = wp.data.select("core/editor");
      postStatus = getEditedPostAttribute("status");
    }
    if (!postId) {
      return {
        postId: null,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError: null
      };
    }
    let url = `/servv-plugin/v1/event/${postId}`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = null;
    let notFoundError = null;
    if (postStatus === "publish" || postStatus === "admin") {
      try {
        res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
          path: url
        });
      } catch (e) {
        notFoundError = e;
      }
    }
    if (!res || res.code === 404) {
      return {
        postId,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError
      };
    }
    let startTime = null;
    if (res.meeting.provider === "offline") {
      if (res.meeting.providers_type === 1 || res.meeting.providers_type === 2 && occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 2 && !occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      }
    }
    if (res.meeting.provider === "zoom") {
      if (res.meeting.providers_type === 2 || res.meeting.providers_type === 8 && occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 8 && !occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      }
    }
    const hasRecurrenceTab = !!(res.meeting.recurrence && !occurrenceId);
    let eventRecurrence = null;
    if (res.meeting.recurrence && res.meeting.recurrence.type) {
      eventRecurrence = res.meeting.recurrence;
    }
    const attributes = {
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
    if (res.tickets) {
      attributes.tickets = res.tickets;
    }
    if (!res.product.current_quantity) {
      delete attributes.product.current_quantity;
    }
    return {
      postId,
      status: postStatus,
      attributes,
      hasRecurrenceTab,
      notFoundError
    };
  };

  /**
   * REGISTRANTS
   */
  const fetchEventRegistrants = async ({
    postID,
    page = 1,
    occurrenceId
  }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=10&page=${page}`;
    if (occurrenceId) {
      url += `&occurrence_id=${occurrenceId}`;
    }
    let res = null;
    try {
      res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: url
      });
    } catch (e) {
      return {
        registrants: [],
        pagination: {
          pageNumber: 1,
          pageCount: 1
        }
      };
    }
    if (!res) {
      return {
        registrants: [],
        pagination: {
          pageNumber: 1,
          pageCount: 1
        }
      };
    }
    const registrantsForShow = res.registrants?.map(registrant => {
      if (!registrant) return null;
      return {
        id: registrant.id,
        firstName: registrant.first_name,
        lastName: registrant.last_name,
        email: registrant.email
      };
    }).filter(Boolean) || [];
    return {
      registrants: registrantsForShow,
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count
      }
    };
  };
  const deleteRegistrant = async ({
    postID,
    registrantID
  }) => {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE"
    });
  };
  const resendRegistrantNotification = async ({
    postID,
    registrantID,
    occurrenceId
  }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: url,
      method: "POST"
    });
  };
  const resendAllNotifications = async ({
    postID,
    occurrenceId
  }) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url,
      method: "POST",
      headers: getNonceHeaders()
    });
    return res;
  };
  return {
    fetchSettings,
    fetchCalendarAccount,
    fetchZoomAccount,
    fetchStripeAccount,
    fetchGmailAccount,
    fetchFiltersByType,
    fetchAllFilters,
    fetchEventTickets,
    fetchEventData,
    fetchEventRegistrants,
    deleteRegistrant,
    resendRegistrantNotification,
    resendAllNotifications
  };
};

/***/ }),

/***/ "./src/Components/Pages/EventsPage.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Pages/EventsPage.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events_useEventsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events/useEventsLogic */ "./src/Components/Pages/Events/useEventsLogic.js");
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
/* harmony import */ var _SingleEventPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SingleEventPage */ "./src/Components/Pages/SingleEventPage.jsx");
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Containers/CollapsibleSection */ "./src/Components/Containers/CollapsibleSection.jsx");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var _Controls_ConfirmationModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Controls/ConfirmationModal */ "./src/Components/Controls/ConfirmationModal.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/AdjustmentsVerticalIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/Bars4Icon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PencilSquareIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js");
/* harmony import */ var _Guideline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Guideline */ "./src/Components/Pages/Guideline.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);





// import ButtonGroupConnected from "../Controls/ButtonGroupConnected";
// import ConnectedButton from "../Controls/ConnectedButton";





















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
  timezone
}) => {
  const [filterDropdown, setFilterDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const filterDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [localSearch, setLocalSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(search);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  const handleEnterButton = e => {
    if (e.key === "Enter") {
      handleSearchSubmit(localSearch);
    }
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
  const changeFilterDropdown = () => setFilterDropdown(!filterDropdown);
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
      children: [view !== "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
        children: [" ", t("Event Occurrences")]
      }), eventsCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: `${eventsCount} ${"event"}${eventsCount > 1 ? "s" : ""}`,
        color: "secondary",
        size: "small",
        align: "center"
      }), view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
        className: "pagination-control ml-auto",
        onClick: () => backToEventsList(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_15__["default"], {
          value: localSearch,
          placeholder: t("Enter search string"),
          onChange: setLocalSearch,
          handleKeyPress: handleEnterButton,
          fullWidth: true,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_17__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: getDates(),
          placeholder: t("Select dates"),
          inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white",
          onChange: newValue => setDates(newValue)
        }), !isFiltersEmpty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
          activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: t("Filters"),
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__["default"], {
              className: "button-icon"
            }),
            type: "secondary",
            onAction: changeFilterDropdown
          }),
          status: filterDropdown,
          onClose: () => setFilterDropdown(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
            gap: 4,
            children: [Object.keys(filtersList).map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
              sectionHeading: filter.charAt(0).toUpperCase() + filter.substring(1),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
                gap: 2,
                children: filtersList[filter].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
const EventsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  redirect = () => {}
}) => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.filtersList);
  const zoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.zoomAccount);
  const gmailAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.gmailAccount);
  const stripeAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.stripeAccount);
  const calendarAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.calendarAccount);
  const fetchZoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.fetchZoomAccount);
  const fetchStripeAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.fetchStripeAccount);
  const fetchGmailAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_22__.useServvStore)(s => s.fetchGmailAccount);
  const {
    loading,
    showGuide,
    isPast,
    eventType,
    dates,
    meetingsList,
    eventOccurrencess,
    pagination,
    occurrencesPagination,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    handleIsPastChange,
    handleTypeChange,
    handleSetDates,
    handleSearchChange,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    getEventsList,
    getEventOccurrencess,
    handleGetPrevPage,
    handleGetNextPage,
    handleGetPrevOccurrencessPage,
    handleGetNextOccurrencessPage,
    handleEventChange,
    handleEventDelete,
    handleOpenEvent,
    handleSearchSubmit,
    handleReturnWithError,
    resetSubpageSelection,
    setShowGuide
  } = (0,_Events_useEventsLogic__WEBPACK_IMPORTED_MODULE_1__.useEventsLogic)(settings, filtersList, zoomAccount);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    const planId = settings.current_plan?.id;
    if (planId === 2 && zoomAccount === null) {
      fetchZoomAccount();
    }
  }, [settings]);
  const [headings, setHeadings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
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
    visible: true
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
    visible: true
  }]);
  const [selectedAll, setSelectedAll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [active, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showCustomizeModal, setShowCustomizeModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showFiltersModal, setShowFiltersModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showDateModal, setShowDateModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showSearchModal, setShowSearchModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showMobileSearch, setShowMobileSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmationModalData, setConfirmationModalData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const dropdownRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active === null) return;
    const handleClickOutside = event => {
      try {
        const ref = dropdownRefs.current;
        if (active && ref && !ref.contains(event.target)) {
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
  const customizeHeading = heading => {
    let newHeadings = [...headings];
    let selectedHeading = headings.map(h => h.value).indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
  };
  const renderHeadingsCustomization = () => {
    return headings.map(heading => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: heading.label,
        name: heading.label,
        checked: heading.visible,
        onChange: () => customizeHeading(heading.value)
      }, heading.value);
    });
  };
  const selectAll = () => {
    setSelectedAll(!selectedAll);
  };
  const handleSelectEvent = selected => {
    let newSelection = [...selectedEvents];
    const isSelected = newSelection.filter(event => {
      if (event.id === selected.id && (event.occurrence_id && selected.occurrence_id && event.occurrence_id === selected.occurrence_id || !event.occurrence_id)) return true;else return false;
    });
    if (isSelected.length > 0) {
      newSelection = newSelection.filter(event => {
        if (!(event.id === selected.id && (event.occurrence_id && selected.occurrence_id && event.occurrence_id === selected.occurrence_id || !event.occurrence_id))) {
          return {
            ...event
          };
        }
        return false;
      });
    } else {
      newSelection.push(selected);
    }
    setSelectedEvents(newSelection);
  };
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => {
      return {
        id: event.post_id,
        occurrenceId: event.occurrence_id
      };
    });
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
      await getEventsList();
    } catch (error) {}
  };
  const renderHeadings = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onClick: () => selectAll()
        })
      }), headings.map(heading => {
        if (heading.visible) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {
          children: heading.label
        }, heading.value);
        return null;
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("th", {})]
    });
  };
  const renderRows = events => {
    return events.map(row => {
      const key = row.id + (row.occurrence_id || "");
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("tr", {
        className: "table-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
            checked: selectedAll || selectedEvents.filter(event => {
              if (event.id === row.id && event.occurrence_id === row.occurrence_id) return true;else return false;
            }).length > 0,
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
              text: row[heading.value],
              type: "badge",
              color: "gray",
              size: "small",
              align: "center"
            })
          }, heading.value);
          if (heading.label === "Recurrence") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
              text: row[heading.value],
              type: "badge",
              color: row[heading.value] === "Recurring" ? "brand" : "gray",
              size: "small",
              align: "center"
            })
          }, heading.value);
          if (heading.label === "Status") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
              text: row[heading.value],
              type: "pill-colour",
              color: row[heading.value] === "Past" ? "blue" : row[heading.value] === "Unlisted" ? "warning" : "success",
              size: "small",
              align: "center"
            })
          }, heading.value);
          if (heading.label === "Date" && !row[heading.value]) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: "Schedule",
                onAction: () => {
                  setView("occurrences");
                  getEventOccurrencess(row.post_id);
                },
                size: "small",
                align: "center"
              })
            }, heading.value);
          }
          if (heading.label === "Date" && row[heading.value]) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: row[heading.value]
              })
            }, heading.value);
          }
          if (heading.label === "Time" && row[heading.value]) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: `${moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()(row[heading.value], "hh:mm a").format(timeFormat)}${!settings?.settings?.hide_time_zone ? " " + moment_timezone__WEBPACK_IMPORTED_MODULE_10___default().tz(row.timezone).format("z").toString() : ""}`,
                size: "small",
                align: "center",
                justify: "center"
              })
            }, heading.value);
          }
          if (heading.label === "Time" && !row[heading.value]) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
                text: "View times",
                onAction: () => {
                  setView("occurrences");
                  getEventOccurrencess(row.post_id);
                },
                align: "center",
                justify: "center",
                size: "small"
              })
            }, heading.value);
          }
          if (heading.label === "Title") {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("a", {
                className: "filter-table-link",
                onClick: e => {
                  e.preventDefault();
                  handleOpenEvent({
                    id: row.post_id,
                    occurrence_id: row.occurrence_id
                  });
                },
                children: row[heading.value]
              })
            }, heading.value);
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("td", {
            children: row[heading.value]
          }, heading.value);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("td", {
          className: "filter-table-dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            onClick: () => setActiveDropdown(!row.occurrence_id ? row.id : row.occurrence_id),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_27__["default"], {
              className: "dropdown-icon"
            })
          }), (!row.occurrence_id && active === row.id || row.occurrence_id && row.occurrence_id === active) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
            className: "filter-table-dropdown absolute right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-lg p-4 mt-2 min-w-[220px]",
            ref: dropdownRefs,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
              className: "dropdown-header",
              children: [`${row.title}`, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
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
                      occurrence_id: row.occurrence_id
                    });
                    // setSelectedOccurrence(row.occurrence_id);
                    // setSelectedEvent(row.post_id);
                    setActiveDropdown(null);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
                    className: "dropdown-icon"
                  }), "Occurrence details"]
                }), row.recurrence === "Recurring" && view !== "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => {
                    setView("occurrences");
                    getEventOccurrencess(row.post_id);
                    setActiveDropdown(null);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
                    className: "dropdown-icon"
                  }), "View occurrences"]
                }), view === "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => {
                    handleOpenEvent({
                      id: row.post_id
                    });
                    setActiveDropdown(null);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
                    className: "dropdown-icon"
                  }), "Event details"]
                }), view === "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => {
                    setConfirmationModalData({
                      open: true,
                      text: "Delete selected event",
                      onAccept: () => {
                        handleEventDelete(row.post_id);
                        setConfirmationModalData({
                          open: false,
                          onAccept: () => {},
                          item: null,
                          text: ""
                        });
                      },
                      item: row.title,
                      onCancel: () => setConfirmationModalData({
                        open: false,
                        onAccept: () => {},
                        item: null,
                        text: ""
                      })
                    });
                    setActiveDropdown(null);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
                    className: "dropdown-icon-critical"
                  }), t("Delete event")]
                }), row.occurrence_id && view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("button", {
                  className: "dropdown-action",
                  onClick: () => {
                    setConfirmationModalData({
                      open: true,
                      text: "Delete selected occurrence of this event",
                      onAccept: () => {
                        handleEventDelete(row.post_id, row.occurrence_id);
                        setConfirmationModalData({
                          open: false,
                          onAccept: () => {},
                          item: null,
                          text: ""
                        });
                      },
                      item: row.title,
                      onCancel: () => setConfirmationModalData({
                        open: false,
                        onAccept: () => {},
                        item: null,
                        text: ""
                      })
                    });
                    setActiveDropdown(null);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
                    className: "dropdown-icon-critical"
                  }), t("Delete occurrence")]
                })]
              })
            })]
          })]
        })]
      }, key);
    });
  };
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
      title: "Show details",
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
  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");else react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!selectedEvent && showGuide && (!zoomAccount || zoomAccount && !zoomAccount.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Guideline__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
            className: "dashboard-heading",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h1", {
              className: "dashboard-title",
              children: "Events"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("p", {
              className: "dashboard-description"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "header-line"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "md:hidden px-4 pt-4 pb-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: t("Events")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                  "aria-label": t("Customize"),
                  title: t("Customize"),
                  className: "p-2 rounded-full bg-white shadow",
                  onClick: () => setShowCustomizeModal(true),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    className: "w-5 h-5"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                  "aria-label": t("Create Event"),
                  title: t("Create Event"),
                  className: "p-2 rounded-full bg-purple-600 text-white shadow",
                  onClick: () => open("post-new.php?servv_plugin=true", "_top"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
                    className: "w-5 h-5"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "events-actions",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: "events-actions-bar",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
                gap: 4,
                align: "left",
                className: "mt-4 justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
                  className: "flex flex row gap-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    buttons: [t("Upcoming"), "Previous"],
                    active: isPast ? t("Previous") : t("Upcoming"),
                    onChange: label => {
                      handleIsPastChange(label === t("Past"));
                    }
                  }), settings?.current_plan?.id !== 1 && zoomAccount !== null && zoomAccount !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    buttons: [t("Events"), "Zoom"],
                    active: eventType === "offline" ? t("Events") : "Zoom",
                    onChange: label => {
                      handleTypeChange(label === "Zoom" ? "zoom" : "offline");
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
                  className: "flex gap-3 justify-self-end",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                    className: "flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition",
                    onClick: () => setShowCustomizeModal(true),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_26__["default"], {
                      className: "w-5 h-5"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    type: "primary",
                    size: "md",
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
                      className: "w-5 h-5"
                    }),
                    text: t("Create event"),
                    onAction: handleCreateNewEvent
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-full max-w-none px-0 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "md:hidden flex items-center px-4 pt-4 pb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                "aria-label": t("Search"),
                title: t("Search"),
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
                  title: t("Pick date"),
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
                  title: t("Filters"),
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
                placeholder: t("Enter search"),
                value: searchString,
                autoFocus: true,
                onChange: e => handleSearchChange(e.target.value),
                onKeyDown: e => e.key === "Enter" && getEventsList()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
                className: "w-full bg-purple-600 text-white rounded py-2",
                onClick: () => getEventsList(),
                children: t("Search")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(EventsCardHeader, {
              eventsCount: view === "events" ? meetingsList.length : eventOccurrencess.length,
              view: view,
              backToEventsList: () => setView("events"),
              search: searchString,
              onChange: handleSearchChange,
              filtersList: filtersList,
              onFiltering: getEventsList,
              handleSearchSubmit: handleSearchSubmit,
              selectedFilters: selectedFilters,
              handleFilterSelect: handleFilterSelect,
              dates: dates,
              setDates: handleSetDates,
              isFiltersApplied: isFiltersApplied(),
              resetFilters: resetFilters,
              isPast: isPast,
              timezone: timezone
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
              className: "hidden md:block w-full",
              children: [view === "events" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
                headings: renderHeadings(),
                rows: renderRows(meetingsList),
                loading: loading
              }), view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Containers_FilterTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
                headings: renderHeadings(),
                rows: renderRows(eventOccurrencess),
                loading: loading
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: "mobile-cards-container",
              children: renderMobileCards(view === "events" ? meetingsList : eventOccurrencess)
            }), view === "events" && pagination.pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
              hasPrev: pagination.pageNumber > 1,
              hasNext: pagination.pageNumber < pagination.pageCount,
              onPrev: () => handleGetPrevPage(),
              onNext: () => handleGetNextPage()
            }), view === "occurrences" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
              hasPrev: occurrencesPagination.pageNumber > 1,
              hasNext: occurrencesPagination.pageNumber < occurrencesPagination.pageCount,
              onPrev: () => handleGetPrevOccurrencessPage(),
              onNext: () => handleGetNextOccurrencessPage()
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
                className: "servv-create-form-close ",
                onClick: () => setShowCustomizeModal(false),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_20__.CloseIcon, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_ConfirmationModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
          data: confirmationModalData
        })]
      })
    }), selectedEvent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SingleEventPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      postID: selectedEvent,
      occurrenceId: selectedOccurrence,
      adminSection: true,
      returnWithError: handleReturnWithError,
      setSelectedEvent: setSelectedEvent,
      filters: filtersList,
      settings: settings
    }), showSearchModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
      className: "fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: "bg-white rounded-lg p-4 w-11/12 max-w-sm search-modal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex justify-between items-center mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
            className: "font-semibold text-lg",
            children: t("Search Events")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            onClick: () => setShowSearchModal(false),
            "aria-label": "Close",
            children: t("×")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("input", {
          type: "text",
          className: "w-full border border-gray-300 rounded px-3 py-2",
          placeholder: t("Enter search"),
          value: searchString,
          onChange: e => handleSearchChange(e.target.value),
          onKeyDown: e => e.key === "Enter" && getEventsList()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
          className: "mt-3 w-full bg-purple-600 text-white rounded py-2",
          onClick: () => {
            getEventsList();
            setShowSearchModal(false);
          },
          children: t("Search")
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
          }), filtersList[filter].map(filterToSelect => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
            label: filterToSelect.name,
            checked: selectedFilters[filter] && selectedFilters[filter].includes(filterToSelect.id),
            onChange: () => handleFilterSelect(filter, filterToSelect.id),
            font: "text-sm",
            color: "text-gray-700"
          }, filterToSelect.id))]
        }, filter) : null), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: "flex gap-2 mt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "flex-1 py-2 px-4 bg-gray-100 rounded-lg text-gray-700",
            onClick: resetFilters,
            children: t("Reset")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
            className: "flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg",
            onClick: () => {
              getEventsList();
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_17__["default"], {
          displayFormat: "MMM DD, YYYY",
          value: getDatesForModal(),
          inputClassName: "w-full border border-gray-300 rounded px-3 py-2",
          onChange: handleSetDates
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("button", {
          className: "mt-3 w-full bg-purple-600 text-white rounded py-2",
          onClick: () => {
            getEventsList();
            setShowDateModal(false);
          },
          children: t("Apply")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsPage);

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
        children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/Components/Pages/SingleEventPage.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Pages/SingleEventPage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _PostEditor_EventDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PostEditor/EventDetails */ "./src/Components/PostEditor/EventDetails.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilities_tickets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/tickets */ "./src/utilities/tickets.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const SingleEventPage = ({
  attributes,
  setAttributes,
  postID = null,
  type = "offline",
  occurrenceId = null,
  adminSection = true,
  returnWithError = () => {},
  setSelectedEvent = () => {},
  filters = null,
  settings = null
}) => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const handleEventUpdate = async () => {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    let data = {
      meeting: {
        topic: attributes.meeting.title,
        start_time: attributes.meeting.startTime,
        duration: attributes.meeting.duration,
        agenda: "",
        timezone: attributes.meeting.timezone,
        type: 1,
        recurrence: attributes.meeting.recurrence
      },
      product: {
        price: attributes.product.price,
        quantity: attributes.product.quantity
      },
      notifications: {
        google_calendar: attributes.notifications.google_calendar,
        disable_emails: attributes.notifications.disable_emails
      },
      appointment: {
        is_appointment: false,
        slot_duration: 15
      },
      types: {
        ...attributes.types
      },
      custom_fields: {
        custom_field_1_name: "",
        custom_field_1_value: "",
        custom_field_2_name: "",
        custom_field_2_value: ""
      },
      tickets: attributes.tickets,
      registrants: attributes.registrants.filter(reg => reg.status)
    };
    setLoading(true);
    const res = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].patch(requestURL, data, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    await updateTickets();
    setLoading(false);
    setSelectedEvent(null);
  };
  const updateTickets = async () => {
    if (!attributes.tickets || attributes.tickets.length === 0) return;
    const ticketsToCreate = attributes.tickets.filter(ticket => !ticket.id);
    console.log(ticketsToCreate);
    const ticketsToUpdate = attributes.tickets.filter(ticket => ticket.id);
    if (ticketsToCreate.length === 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_7__.createTicket)({
        postId: postID,
        token: servvData.nonce,
        ticket: ticketsToCreate[0],
        occurrenceId: occurrenceId
      });
    } else if (ticketsToCreate.length > 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_7__.multipleTicketsCreate)({
        postId: postID,
        token: servvData.nonce,
        tickets: ticketsToCreate,
        occurrenceId: occurrenceId
      });
    }
    if (ticketsToUpdate.length === 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_7__.updateTicket)({
        postId: postID,
        token: servvData.nonce,
        ticket: ticketsToUpdate[0],
        occurrenceId: occurrenceId
      });
    } else if (ticketsToUpdate.length > 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_7__.multipleTicketsUpdate)({
        postId: postID,
        token: servvData.nonce,
        tickets: ticketsToUpdate,
        occurrenceId: occurrenceId
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "servv-app max-w-[1080px] mx-auto h-full min-h-screen w-[65%] [@media(max-width:1110px)]:w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: -1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
            className: "text-display-sm mt-6",
            children: occurrenceId ? "Occurrence Details" : "Event Details"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
            gap: 2,
            align: "right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
              text: "Cancel"
              // icon={<ArrowUturnLeftIcon className="button-icon" />}
              ,
              type: "secondary",
              onAction: () => setSelectedEvent(null)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
              text: "Save"
              // icon={<InboxArrowDownIcon className="primary button-icon" />}
              ,
              type: "primary",
              onAction: () => handleEventUpdate()
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PostEditor_EventDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attributes: attributes,
          setAttributes: setAttributes,
          postID: postID,
          occurrenceId: occurrenceId,
          adminSection: adminSection,
          handleSetLoading: setLoading,
          returnWithError: returnWithError,
          filters: filters,
          settingsData: settings
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleEventPage);

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
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).startOf("day").toDate() : null,
    endDate: null
  });

  // useEffect(() => {
  //   const editor = document.querySelector(".block-editor__container");

  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   }
  //   editor.addEventListener("mousedown", handleClickOutside);
  //   return () => editor.removeEventListener("mousedown", handleClickOutside);
  // }, []);

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
    ref: wrapperRef,
    minDate: minDate,
    asSingle: true,
    useRange: false,
    displayFormat: "MMM DD, YYYY",
    selected: value,
    value: value,
    placeholder: value?.startDate && moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate, (moment__WEBPACK_IMPORTED_MODULE_1___default().ISO_8601), true).isValid() ? moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate).format("MMM DD, YYYY") : "Select dates",
    inputClassName: `input-control section-description text-left w-full ${variant === "button" ? adminSection ? "max-w-full" : "max-w-[10rem]" : "w-full"} ${adminSection ? "min-w-[8rem]" : "min-w-[10rem]"} min-w-8 shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700 max-sm:w-full`,
    onChange: handleDateChange,
    show: open
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
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
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
  const {
    startTime,
    duration,
    timezone,
    recurrence
  } = eventDetails;
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  const [userTimezone, setUserTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("US/Pacific");
  const [isAiLoading, setIsAILoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const timezones = Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_4__.timezonesList).map(zone => {
    return {
      id: zone,
      name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__.timezonesList[zone]
    };
  });
  const time = startTime !== null ? typeof startTime === "string" ? moment__WEBPACK_IMPORTED_MODULE_5___default()(startTime) : startTime : moment__WEBPACK_IMPORTED_MODULE_5___default()();
  const endTime = time ? moment__WEBPACK_IMPORTED_MODULE_5___default()(time).add(duration, "minutes") : moment__WEBPACK_IMPORTED_MODULE_5___default()().add(duration, "minutes");
  const updateTimezone = settings => {
    let defaultTimezone = null;
    if (!settings) return;
    if (settings.settings?.admin_dashboard) {
      const adminSettings = settings.settings.admin_dashboard;
      defaultTimezone = adminSettings.default_timezone || moment__WEBPACK_IMPORTED_MODULE_5___default().tz.guess();
    } else {
      defaultTimezone = moment__WEBPACK_IMPORTED_MODULE_5___default().tz.guess();
    }
    let findTimezone = timezones.filter(t => t.id === defaultTimezone);
    if (findTimezone.length > 0) {
      setUserTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment__WEBPACK_IMPORTED_MODULE_5___default().tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;
      // console.log(timezoneOffset, formattedOffset);
      let availableTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].filter(t => t.gmt === formattedOffset);
      if (availableTimezone.length > 0) {
        let zone = availableTimezone[0];
        let newTimezone = timezones.filter(t => t.id === zone.zone);
        // console.log(newTimezone.length, newTimezone[0].id);
        if (newTimezone.length > 0) setUserTimezone(newTimezone[0]);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateTimezone(settings);
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (startTime === null) {
      handleDateChange(time);
    }
  }, [startTime]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings && settings.settings && settings.settings.admin_dashboard && !settings.settings.admin_dashboard.default_timezone && eventDetails && (!eventDetails.timezone || timezone.length === 0)) {
      if (userTimezone) onChange("timezone", userTimezone.id);else onChange("timezone", userTimezone);
    }
  }, [userTimezone]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_timezone) {
      const zone = settings.settings.admin_dashboard.default_timezone;
      const defaultZone = timezones.find(t => t.id === zone);
      if (defaultZone) {
        onChange("timezone", defaultZone.id);
      } else {
        const findTimezone = _utilities_timezones__WEBPACK_IMPORTED_MODULE_4__["default"].find(t => t.zone === zone);
        if (findTimezone) {
          const existingTimezone = timezones.find(t => t.name === findTimezone.name);
          if (existingTimezone) {
            onChange("timezone", existingTimezone.id);
          }
        }
      }
    }
  }, [settings]);
  const handleTimezoneChange = value => {
    let currentSelectedTimezone = timezones.findIndex(timezone => timezone.name === value);
    // let currentSelectedTimezone = timezones.filter(
    //   (timezone) => timezone.zone === value
    // );
    if (currentSelectedTimezone >= 0) {
      onChange("timezone", timezones[currentSelectedTimezone].id);
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
      const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].post(url, {
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
      className: `flex flex-row gap-5 justify-between items-end ${!adminSection ? "[@media(max-width:735px)]:flex-col [@media(max-width:735px)]:items-start [@media(max-width:735px)]:w-full" : "[@media(max-width:1385px)]:flex-col [@media(max-width:1385px)]:items-start [@media(max-width:1385px)]:w-full"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        date: time,
        onChange: handleDateChange,
        variant: "button",
        adminSection: adminSection
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: `flex flex-row gap-3 justify-between items-center max-sm:justify-start ${!adminSection ? "[@media(max-width:735px)]:justify-between [@media(max-width:735px)]:w-full" : "[@media(max-width:1385px)]:justify-between [@media(max-width:1385px)]:w-full"}`,
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
      options: timezones.map(t => t.name),
      helpText: "Select a timezone",
      selected: timezone && timezones.findIndex(t => t.id === timezone) >= 0 ? timezones[timezones.findIndex(t => t.id === timezone)].name : null,
      disabled: false,
      onSelectChange: handleTimezoneChange,
      style: {
        padding: "10px"
      }
    }), !occurrenceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_RecurringSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      recurrence: recurrence,
      onChange: handleRecurrenceChange,
      disabled: settings && settings.current_plan.id === 1
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
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Pages_Events_useServvData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Pages/Events/useServvData */ "./src/Components/Pages/Events/useServvData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);

















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
  var _attributes$tickets;
  const {
    fetchSettings,
    fetchCalendarAccount,
    fetchZoomAccount,
    fetchStripeAccount,
    fetchGmailAccount,
    fetchAllFilters,
    fetchEventTickets,
    fetchEventData,
    fetchEventRegistrants,
    deleteRegistrant,
    resendRegistrantNotification,
    resendAllNotifications
  } = (0,_Pages_Events_useServvData__WEBPACK_IMPORTED_MODULE_14__.useServvData)();
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
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const setToastMessage = val => {
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)(val, {
      autoClose: 5000
    });
  };
  const getAccountsInfo = async () => {
    setLoading(true);
    const isPro = settings?.current_plan?.id === 2 || settings?.current_plan?.id === 3;
    const {
      stripeAccount,
      zoomAccount,
      googleCalendar,
      mailAccount
    } = _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.getState();
    if (stripeAccount) setStripeAccount(stripeAccount);
    if (zoomAccount) setZoomAccount(zoomAccount);
    if (googleCalendar) setGoogleCalendar(googleCalendar);
    if (mailAccount) setConnectedMailAccount(mailAccount);
    setCalendarAccountFetched(!!googleCalendar);
    setMailAccountFetched(!!mailAccount);
    try {
      if (!isPro) {
        fetchCalendarAccount().then(res => {
          setGoogleCalendar(res);
          _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.setState({
            googleCalendar: res
          });
          setCalendarAccountFetched(true);
        });
      } else {
        fetchStripeAccount().then(res => {
          setStripeAccount(res);
          _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.setState({
            stripeAccount: res
          });
        });
        fetchZoomAccount().then(res => {
          setZoomAccount(res);
          _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.setState({
            zoomAccount: res
          });
        });
        fetchCalendarAccount().then(res => {
          setGoogleCalendar(res);
          _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.setState({
            googleCalendar: res
          });
          setCalendarAccountFetched(true);
        });
        fetchGmailAccount().then(res => {
          setConnectedMailAccount(res);
          _store_useServvStore__WEBPACK_IMPORTED_MODULE_13__.useServvStore.setState({
            mailAccount: res
          });
          setMailAccountFetched(true);
        });
      }
    } catch (e) {
      console.error("Accounts info error", e);
    }
    setLoading(false);
  };
  const handleNextRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber + 1);
  };
  const handlePrevRegistrantsPage = async () => {
    getEventRegistrants(registrantsPagination.pageNumber - 1);
  };
  const getSettings = async () => {
    try {
      const data = await fetchSettings({
        adminSection,
        settingsData
      });
      if (data) {
        setSettings(data);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (e.status === 401) setActivationError(true);
    }
  };
  const getFilters = async () => {
    setLoading(true);
    try {
      const allFilters = await fetchAllFilters({
        filtersProp: filters,
        settings
      });
      setFiltersList(allFilters);
    } catch (e) {
      console.error("Error fetching filters:", e);
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
  const getEventData = async () => {
    const {
      postId: resolvedPostId,
      status: postStatus,
      attributes: newAttributes,
      hasRecurrenceTab,
      notFoundError
    } = await fetchEventData({
      postIDProp: postID,
      occurrenceId,
      adminSection
    });
    if (notFoundError && adminSection && notFoundError.message === "Post doesn't exist") {
      returnWithError(notFoundError.message);
      return null;
    }
    if (resolvedPostId) {
      setPostId(resolvedPostId);
    }
    if (!adminSection) {
      setStatus(postStatus);
    }
    if (hasRecurrenceTab) {
      setTabsList([{
        label: "Details",
        value: 0
      }, {
        label: "Settings",
        value: 1
      }]);
    } else if (!adminSection) {
      setTabsList([{
        label: "Details",
        value: 0
      }, {
        label: "Settings",
        value: 1
      }]);
    }
    if (newAttributes) {
      setAttributes(newAttributes);
    }
    return resolvedPostId;
  };
  const [registrantsPagination, setRegistrantsPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const getEventRegistrants = async (page = 1, id = null) => {
    setLoading(true);
    const post = id || postID;
    try {
      const {
        registrants: fetchedRegs,
        pagination
      } = await fetchEventRegistrants({
        postID: post,
        page,
        occurrenceId
      });
      let registrantsForEdit = registrants.filter(reg => reg.status);
      let registrantsForShow = fetchedRegs.concat(registrantsForEdit);
      setRegistrants(registrantsForShow || []);
      setRegistrantsPagination(pagination);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const handleDeleteMultipleRegistrants = async selectedRegistrants => {
    const results = [];
    for (const id of selectedRegistrants) {
      try {
        const value = await deleteRegistrant({
          postID,
          registrantID: id
        });
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
  const removeRegistrant = async registrantID => {
    setLoading(true);
    let res = await deleteRegistrant({
      postID,
      registrantID
    });
    setLoading(false);
    if (res) {
      getEventRegistrants();
    }
  };
  const getEventFullInfo = async () => {
    setLoading(true);
    const id = await getEventData();
    await getFilters();
    await getAccountsInfo();
    if (id && adminSection) {
      await getEventRegistrants(1, id);
      if (adminSection && settings && settings.current_plan.id === 2) {
        const tickets = await fetchEventTickets({
          postId: id,
          occurrenceId
        });
        setAttributes({
          tickets
        });
      }
    }
    setLoading(false);
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
  const tickets = [...((_attributes$tickets = attributes?.tickets) !== null && _attributes$tickets !== void 0 ? _attributes$tickets : [])];
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
  const handleRegistrantsChange = registrant => {
    let currentRegistrants = registrants;
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
      } else {
        if (meeting.recurrence) {
          meeting.eventType = 2;
        } else meeting.eventType = 1;
      }
    }
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
    const types = {
      ...attributes.types
    };
    if (value === null || Array.isArray(value) && value.length === 0) {
      types[field] = undefined;
    } else {
      types[field] = value;
    }
    setAttributes({
      types
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
  const handleResendNotifications = async registrantsList => {
    for (const id of registrantsList) {
      try {
        await resendRegistrantNotification({
          postID,
          registrantID: id,
          occurrenceId
        });
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Email notifications are successfully resent", {
          autoClose: 5000
        });
      } catch (error) {
        console.error(`Failed to resend notification to registrant ${id}:`, error);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)(`Failed to resend notification to registrant ${registrants.filter(reg => reg.id === id)[0]?.email}:`, {
          autoClose: 5000
        });
      }
    }
  };
  const handleResendNotificationsToAll = async () => {
    try {
      const res = await resendAllNotifications({
        postID,
        occurrenceId
      });
      if (res && res.status === 200) {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Email notifications have been resent.");
      }
    } catch (e) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Servv was unable to resend notifications. Please try again.");
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
  const [emptyFilters, setEmptyFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isFiltersEmpty = !filtersList || filtersList && filtersList.categories && filtersList.categories.length === 0 && filtersList && filtersList.members && filtersList.members.length === 0 && filtersList && filtersList.languages && filtersList.languages.length === 0;
    if (isFiltersEmpty) {
      setEmptyFilters(true);
    }
  }, [filtersList]);
  const isBillingPlanRestriction = occurrenceId || settings?.current_plan.id !== 2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      children: loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: `${loading ? "loading" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {
        position: "bottom-right"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tabsList: tabsList,
        selected: selectedTab,
        handleSelectChange: handleSelectChange
      }), selectedTab === 0 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_DateTimeSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
          eventDetails: eventDetails,
          occurrenceId: occurrenceId,
          onChange: handleEventChange,
          settings: settings,
          adminSection: adminSection,
          setToast: setToastMessage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_LocationSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TicketsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
          adminSection: adminSection,
          tickets: tickets,
          eventDetails: eventDetails,
          onTicketsChange: handleTicketsChange,
          productDetails: productDetails,
          id: postId,
          handleDetailsChange: handleProductChange,
          settings: settings,
          postId: postId,
          disabled: settings?.current_plan.id !== 2 && settings?.current_plan.id !== 3,
          handleSetLoading: handleSetLoading,
          stripeAccount: stripeAccount,
          occurrenceId: occurrenceId,
          status: status
        }), emptyFilters !== undefined && emptyFilters === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FiltersSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
          types: types,
          onChange: handleTypesChange,
          filtersList: filtersList
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_CustomFieldsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
          customFields: customFields,
          onChange: handleCustomFieldsChange,
          meetingType: eventDetails && eventDetails.location ? eventDetails.location : settings && settings.settings.admin_dashboard.default_event_type ? settings.settings.admin_dashboard.default_event_type : "offline"
        })]
      }), selectedTab === 1 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_EventVisibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
          productDetails: productDetails,
          onChange: handleProductChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_NotificationsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          notifications: notifications,
          onChange: handleNotificationsChange,
          googleCalendar: googleCalendar,
          connectedMailAccount: connectedMailAccount,
          calendarAccountFetched: calendarAccountFetched,
          mailAccountFetched: mailAccountFetched
        })]
      }), selectedTab === 2 && adminSection && postId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_RegistrantsSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        disabled: settings?.current_plan.id !== 2 && settings?.current_plan.id !== 3
      }), selectedTab === 0 && !activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "section-container border-b-2 border-gray-200",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "section-description text-brand-600",
          children: "* Indicates a required field"
        })
      })]
    }), activationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "section-container border-b-2 border-gray-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "section-description text-brand-600",
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
/* harmony import */ var _SelectDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectDropdown */ "./src/Components/PostEditor/SelectDropdown.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

// import ButtonGroup from "../Controls/ButtonGroup";

// import CustomDropdown from "../Controls/CustomDropdown";
// import SelectControl from "../Controls/SelectControl";

const FiltersSection = ({
  types = {},
  filtersList = [],
  onChange = () => {}
}) => {
  const filtersTabs = ["Your filters", "Create new"];
  const [activeDropdownId, setActiveDropdownId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "section-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "section-heading",
        children: t("Filters")
      }), filtersList.categories && filtersList.categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "category",
        title: "Category",
        options: filtersList.categories,
        selected: types.category_id || null,
        onSelect: handleSelectCategory,
        activeId: activeDropdownId,
        setActiveId: setActiveDropdownId
      }), filtersList.languages && filtersList.languages.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "language",
        title: "Language",
        options: filtersList.languages,
        selected: types.language_id || null,
        onSelect: handleSelectLanguage,
        activeId: activeDropdownId,
        setActiveId: setActiveDropdownId
      }), filtersList.members && filtersList.members.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "members",
        title: "Members",
        options: filtersList.members,
        selected: types.members || [],
        onSelect: handleSelectMember,
        multi: true,
        activeId: activeDropdownId,
        setActiveId: setActiveDropdownId
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
  const [activeDropdownId, setActiveDropdownId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const eventTypes = ["In-person", "Online or Hybrid"];
  const handleLocationChange = newVal => {
    if (newVal === eventTypes[0]) {
      onChange("location", "offline");
      handleCustomFieldChange("custom_field_1_name", "Access details");
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
    onChange("location", type ? "zoom" : "offline");
    handleCustomFieldChange("custom_field_1_name", "Link");
    handleCustomFieldChange("custom_field_1_value", "");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((location === "zoom" || location === "online") && !custom_field_1_name) {
      handleCustomFieldChange("custom_field_1_name", "Link");
    }
  }, [disabled, location, customFields]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (location === "online" && (disabled || !zoomAccount || !zoomAccount.id)) {
      handleLocationChange(eventTypes[0]);
    }
  }, [disabled, location, zoomAccount]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "section-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-heading",
      children: "Venue & access"
    }), filtersList.locations && filtersList.locations.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "location-filter",
      title: "Location",
      options: filtersList.locations,
      selected: types.location_id || null,
      onSelect: handleSelectLocation,
      activeId: activeDropdownId,
      setActiveId: setActiveDropdownId
    }), onlineType && zoomAccount && zoomAccount.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "input-container-col w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "zoom-account",
        title: "Select Zoom account",
        options: [{
          name: zoomAccount.email,
          id: zoomAccount.id
        }],
        selected: zoomAccount.id || null,
        onSelect: () => {},
        activeId: activeDropdownId,
        setActiveId: setActiveDropdownId
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
              children: "Maximum quantity for free plan is 100"
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
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "registrant group",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
      gap: 2,
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        checked: selected,
        onChange: () => onSelect(id)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col gap-[6px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          className: "whitespace-nowrap",
          children: [firstName, " ", lastName]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "text-gray-600 truncate max-w-[220px]",
          children: email
        })]
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
        type: "button",
        className: "servv_button servv_button--danger servv_button--sm ml-auto opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto",
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
    if (registrants.length > 0) return registrants.map(registrant => {
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
    });else return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      children: "This event doesn't have any registrants yet"
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





const SelectDropdown = ({
  title,
  options,
  selected,
  onSelect,
  multi = false,
  id,
  activeId,
  setActiveId
}) => {
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = activeId === id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) return;
    const handleClickOutside = e => {
      console.log("doc pointerdown", e.target);
      if (!dropdownRef.current) return;
      const path = e.composedPath ? e.composedPath() : [];
      const clickedInside = path.length > 0 ? path.includes(dropdownRef.current) : dropdownRef.current.contains(e.target);
      if (!clickedInside) {
        setActiveId(null);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside, true);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside, true);
    };
  }, [isOpen, setActiveId]);
  const handleMultiSelect = optionId => {
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    if (newSelected.includes(optionId)) {
      newSelected = newSelected.filter(id => id !== optionId);
    } else {
      newSelected.push(optionId);
    }
    onSelect(newSelected);
    setActiveId(null);
  };
  const handleSingleSelect = optionId => {
    onSelect(optionId);
    setActiveId(null);
  };
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
      onClick: () => setActiveId(isOpen ? null : id),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "flex flex-row text-sm flex-wrap gap-1",
        children: multi && Array.isArray(selected) && selected.length > 0 ? selected.map(selectedId => {
          const option = options.find(opt => opt.id === selectedId);
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
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "fixed inset-0 z-10",
        onClick: () => setActiveId(null)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto",
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
              children: "\u2713"
            })]
          })
        }, index))
      })]
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
      delete currentTickets[selectedTicket].start_datetime;
      delete currentTickets[selectedTicket].end_datetime;
    }
    if (type === 1) {
      const base = getEventBaseTime();
      currentTickets[selectedTicket].start_datetime = base.toISOString();
      currentTickets[selectedTicket].end_datetime = base.toISOString();
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
  const getEventBaseTime = () => moment__WEBPACK_IMPORTED_MODULE_9___default()(attributes?.meeting?.startTime || eventDetails.startTime).tz(eventDetails.timezone);
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
    const current = currentTickets[selectedTicket].start_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].start_datetime).tz(eventDetails.timezone) : getEventBaseTime();
    const selected = moment__WEBPACK_IMPORTED_MODULE_9___default()(date).tz(eventDetails.timezone);
    current.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date()
    });
    currentTickets[selectedTicket].start_datetime = current.toISOString();
    onTicketsChange(currentTickets);
  };
  const handleSaleEndDateChange = date => {
    const currentTickets = [...tickets];
    const current = currentTickets[selectedTicket].end_datetime ? moment__WEBPACK_IMPORTED_MODULE_9___default()(currentTickets[selectedTicket].end_datetime).tz(eventDetails.timezone) : getEventBaseTime();
    const selected = moment__WEBPACK_IMPORTED_MODULE_9___default()(date).tz(eventDetails.timezone);
    current.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date()
    });
    currentTickets[selectedTicket].end_datetime = current.toISOString();
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
    const start = tickets[selectedTicket]?.start_datetime;
    const end = tickets[selectedTicket]?.end_datetime;
    if (!start || !end) return false;
    return moment__WEBPACK_IMPORTED_MODULE_9___default()(start).isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_9___default()(end));
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
        }), (tickets?.length === 0 || tickets?.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          className: `flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${disabled ? "filter grayscale" : ""}`,
          onClick: handleTicketAdd,
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "w-4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "text-[16px]",
            children: t("Create new ticket")
          })]
        }), tickets?.length > 0 && renderTickets(), tickets?.length > 0 && selectedTicket !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("fieldset", {
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
              className: "section-description text-brand-600",
              children: "Note: To create paid and donation tickets, you need to connect your Stripe account."
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
                children: "Done"
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
//# sourceMappingURL=src_Components_Pages_EventsPage_jsx.js.map?ver=9e622e746bf2b5e7fe21