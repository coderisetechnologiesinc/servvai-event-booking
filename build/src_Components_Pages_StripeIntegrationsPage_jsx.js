"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_StripeIntegrationsPage_jsx"],{

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
  onBreadCrumbClick = () => {}
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

/***/ "./src/Components/Pages/StripeIntegrationsPage.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Pages/StripeIntegrationsPage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _utilities_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/stripe */ "./src/utilities/stripe.js");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _utilities_currencies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/currencies */ "./src/utilities/currencies.js");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















const StripeIntegrationsPage = props => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connectedAccounts, setConnectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [connectedAccountsFetched, setConnectedAccountsFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connectUrl, setConnectUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const storeSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_14__.useServvStore)(s => s.settings);
  const fetchAccount = async () => {
    const account = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getStripeAccount)(servvData.nonce);
    if (account && account.id) {
      setAccount(account);
    }
    setAccountFetched(true);
    const settings = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getStripeSettings)(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  const handleConnectExistingAccount = async account_id => {
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getStripeConnectURL)(servvData.nonce, account_id);
    if (url) {
      const returnURL = encodeURIComponent(window.location.origin);
      const connectURL = encodeURIComponent(url.auth_url);
      setLoading(false);
      open(`${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${connectURL}&wordpress_return_url=${returnURL}`, "_top");
    }
  };
  const connectNewAccount = async () => {
    const connectUrl = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getStripeConnectURL)(servvData.nonce);
    const returnURL = encodeURIComponent(window.location.origin);
    const connectURL = encodeURIComponent(connectUrl.auth_url);
    open(`${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${encodeURIComponent(connectURL)}&wordpress_return_url=${returnURL}`, "_top");
  };
  const renderExistingAccounts = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "flex flex-col gap-1",
      children: connectedAccounts.map(account => {
        const accountText = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "flex flex-row justify-start items-center gap-2",
          children: [account.account_id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: account.account_id,
            align: "start",
            color: "success"
          }), account.email && account.email.trim().length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: account.email,
            align: "start",
            color: "success"
          }), account.name && account.name.trim.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: account.name,
            align: "start",
            color: "brand"
          })]
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "w-full flex flex-row gap-2 border border-gray-25 shadow-sm rounded-lg p-2",
          onClick: () => {
            handleConnectExistingAccount(account.account_id);
          },
          children: accountText
        });
      })
    });
  };
  const handleGetConnectURL = async () => {
    setLoading(true);
    const existingAccounts = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getDisconnectedStripeAccounts)(servvData.nonce);
    // const url = await getStripeConnectURL(servvData.nonce);
    // setConnectUrl(url.auth_url);
    setLoading(false);
    if (existingAccounts.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
    } else {
      setLoading(true);
      const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.getStripeConnectURL)(servvData.nonce);
      setConnectUrl(url.auth_url);
      if (url) open(`${servvData.shopify_app}/stripe/connect?wordpress_url=${encodeURIComponent(url.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
    }
  };
  const handleRemoveAccount = async () => {
    setLoading(true);
    const res = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.disconnectStripeAccount)(servvData.nonce);
    if (res === 200) {
      setAccount(null);
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAccount();
  }, []);
  const badge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "flex flex-row gap-2 items-center",
    children: [account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: account ? "Connected" : "Not connected",
      icon: ""
    }), account && !account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: "Connection is not completed",
      icon: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
      children: account ? account.email : "Please connect your account"
    })]
  });
  const handleSelectChange = currency => {
    const newCurrency = currency.split(" - ")[0];
    setSelectedCurrency(newCurrency);
  };
  const currencySelect = () => {
    let currencies = [];
    if (_utilities_currencies__WEBPACK_IMPORTED_MODULE_10__.currenciesList) {
      currencies = _utilities_currencies__WEBPACK_IMPORTED_MODULE_10__.currenciesList.map(currency => {
        let sequence = currency.symbol;
        return currency.abbreviation + " - " + he__WEBPACK_IMPORTED_MODULE_12___default().decode(sequence);
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: currencies,
      selected: currencies.filter(currency => currency.indexOf(selectedCurrency) >= 0)[0],
      onSelectChange: handleSelectChange
    });
  };
  const handleCurrencySave = async () => {
    if (selectedCurrency) {
      setLoading(true);
      await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_8__.updateStripeSettings)(servvData.nonce, selectedCurrency);
      setLoading(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: loading,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "servv-dashboard-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "dashboard-title",
            children: "Stripe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "dashboard-description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
              breadcrumbs: [{
                label: "Integrations",
                action: () => navigate("../integrations")
              }, {
                label: "Stripe",
                action: () => {}
              }],
              onBreadCrumbClick: () => {}
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gap: 8,
          cardsLayout: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
            padding: 0,
            maxWidth: "85%",
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              className: "servv-service-image",
              style: {
                background: `linear-gradient(to bottom, transparent, #ECE4F6)`
              },
              children: account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "connected-account bg-gradient-to-b from-transparent to-black/40",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                  children: t("Account")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  text: badge(),
                  color: "gray",
                  justify: "start"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "card-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
                className: "card-section-heading",
                children: t("Stripe")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                className: "section-description",
                children: storeSettings?.is_wp_marketplace ? "Accept payments seamlessly through ServvAI, with payouts sent to your connected Stripe account." : " Accept secure payments for your events with Stripe, ensuring a seamless checkout experience for attendees"
              }), account && account.charges_enabled && currencySelect(), connectedAccountsFetched && connectedAccounts.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                  className: "servv-button-link text-gray-700",
                  children: t("Connect existing account")
                }), renderExistingAccounts()]
              }), isAccountFetched && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
                href: "#",
                className: "servv-button-link",
                onClick: connectedAccountsFetched && connectedAccounts.length > 0 ? e => {
                  e.preventDefault();
                  connectNewAccount();
                } : e => {
                  e.preventDefault();
                  handleGetConnectURL();
                },
                children: connectedAccountsFetched && connectedAccounts.length > 0 ? "Connect new account" : "Connect"
              }), isAccountFetched && account && !account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
                href: "#",
                className: "servv-button-link",
                onClick: e => {
                  e.preventDefault();
                  handleConnectExistingAccount(account.account_id);
                },
                children: t("Resume integration")
              }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
                href: "#",
                className: "servv-button-link",
                onClick: e => {
                  e.preventDefault();
                  handleRemoveAccount();
                },
                children: t("Disconnect")
              })]
            })]
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeIntegrationsPage);

/***/ }),

/***/ "./src/utilities/currencies.js":
/*!*************************************!*\
  !*** ./src/utilities/currencies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currenciesList: () => (/* binding */ currenciesList)
/* harmony export */ });
const currenciesList = [{
  currency: "Albania Lek",
  abbreviation: "ALL",
  symbol: "&#76;&#101;&#107;"
}, {
  currency: "Afghanistan Afghani",
  abbreviation: "AFN",
  symbol: "&#1547;"
}, {
  currency: "Argentina Peso",
  abbreviation: "ARS",
  symbol: "&#36;"
}, {
  currency: "Aruba Guilder",
  abbreviation: "AWG",
  symbol: "&#402;"
}, {
  currency: "Australia Dollar",
  abbreviation: "AUD",
  symbol: "&#36;"
}, {
  currency: "Azerbaijan New Manat",
  abbreviation: "AZN",
  symbol: "&#1084;&#1072;&#1085;"
}, {
  currency: "Bahamas Dollar",
  abbreviation: "BSD",
  symbol: "&#36;"
}, {
  currency: "Barbados Dollar",
  abbreviation: "BBD",
  symbol: "&#36;"
}, {
  currency: "Belarus Ruble",
  abbreviation: "BYR",
  symbol: "&#112;&#46;"
}, {
  currency: "Belize Dollar",
  abbreviation: "BZD",
  symbol: "&#66;&#90;&#36;"
}, {
  currency: "Bermuda Dollar",
  abbreviation: "BMD",
  symbol: "&#36;"
}, {
  currency: "Bolivia Boliviano",
  abbreviation: "BOB",
  symbol: "&#36;&#98;"
}, {
  currency: "Bosnia and Herzegovina Convertible Marka",
  abbreviation: "BAM",
  symbol: "&#75;&#77;"
}, {
  currency: "Botswana Pula",
  abbreviation: "BWP",
  symbol: "&#80;"
}, {
  currency: "Bulgaria Lev",
  abbreviation: "BGN",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Brazil Real",
  abbreviation: "BRL",
  symbol: "&#82;&#36;"
}, {
  currency: "Brunei Darussalam Dollar",
  abbreviation: "BND",
  symbol: "&#36;"
}, {
  currency: "Cambodia Riel",
  abbreviation: "KHR",
  symbol: "&#6107;"
}, {
  currency: "Canada Dollar",
  abbreviation: "CAD",
  symbol: "&#36;"
}, {
  currency: "Cayman Islands Dollar",
  abbreviation: "KYD",
  symbol: "&#36;"
}, {
  currency: "Chile Peso",
  abbreviation: "CLP",
  symbol: "&#36;"
}, {
  currency: "China Yuan Renminbi",
  abbreviation: "CNY",
  symbol: "&#165;"
}, {
  currency: "Colombia Peso",
  abbreviation: "COP",
  symbol: "&#36;"
}, {
  currency: "Costa Rica Colon",
  abbreviation: "CRC",
  symbol: "&#8353;"
}, {
  currency: "Croatia Kuna",
  abbreviation: "HRK",
  symbol: "&#107;&#110;"
}, {
  currency: "Cuba Peso",
  abbreviation: "CUP",
  symbol: "&#8369;"
}, {
  currency: "Czech Republic Koruna",
  abbreviation: "CZK",
  symbol: "&#75;&#269;"
}, {
  currency: "Denmark Krone",
  abbreviation: "DKK",
  symbol: "&#107;&#114;"
}, {
  currency: "Dominican Republic Peso",
  abbreviation: "DOP",
  symbol: "&#82;&#68;&#36;"
}, {
  currency: "East Caribbean Dollar",
  abbreviation: "XCD",
  symbol: "&#36;"
}, {
  currency: "Egypt Pound",
  abbreviation: "EGP",
  symbol: "&#163;"
}, {
  currency: "El Salvador Colon",
  abbreviation: "SVC",
  symbol: "&#36;"
}, {
  currency: "Estonia Kroon",
  abbreviation: "EEK",
  symbol: "&#107;&#114;"
}, {
  currency: "Euro Member Countries",
  abbreviation: "EUR",
  symbol: "&#8364;"
}, {
  currency: "Falkland Islands (Malvinas) Pound",
  abbreviation: "FKP",
  symbol: "&#163;"
}, {
  currency: "Fiji Dollar",
  abbreviation: "FJD",
  symbol: "&#36;"
}, {
  currency: "Ghana Cedis",
  abbreviation: "GHC",
  symbol: "&#162;"
}, {
  currency: "Gibraltar Pound",
  abbreviation: "GIP",
  symbol: "&#163;"
}, {
  currency: "Guatemala Quetzal",
  abbreviation: "GTQ",
  symbol: "&#81;"
}, {
  currency: "Guernsey Pound",
  abbreviation: "GGP",
  symbol: "&#163;"
}, {
  currency: "Guyana Dollar",
  abbreviation: "GYD",
  symbol: "&#36;"
}, {
  currency: "Honduras Lempira",
  abbreviation: "HNL",
  symbol: "&#76;"
}, {
  currency: "Hong Kong Dollar",
  abbreviation: "HKD",
  symbol: "&#36;"
}, {
  currency: "Hungary Forint",
  abbreviation: "HUF",
  symbol: "&#70;&#116;"
}, {
  currency: "Iceland Krona",
  abbreviation: "ISK",
  symbol: "&#107;&#114;"
}, {
  currency: "India Rupee",
  abbreviation: "INR",
  symbol: "₹"
}, {
  currency: "Indonesia Rupiah",
  abbreviation: "IDR",
  symbol: "&#82;&#112;"
}, {
  currency: "Iran Rial",
  abbreviation: "IRR",
  symbol: "&#65020;"
}, {
  currency: "Isle of Man Pound",
  abbreviation: "IMP",
  symbol: "&#163;"
}, {
  currency: "Israel Shekel",
  abbreviation: "ILS",
  symbol: "&#8362;"
}, {
  currency: "Jamaica Dollar",
  abbreviation: "JMD",
  symbol: "&#74;&#36;"
}, {
  currency: "Japan Yen",
  abbreviation: "JPY",
  symbol: "&#165;"
}, {
  currency: "Jersey Pound",
  abbreviation: "JEP",
  symbol: "&#163;"
}, {
  currency: "Kazakhstan Tenge",
  abbreviation: "KZT",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Korea (North) Won",
  abbreviation: "KPW",
  symbol: "&#8361;"
}, {
  currency: "Korea (South) Won",
  abbreviation: "KRW",
  symbol: "&#8361;"
}, {
  currency: "Kyrgyzstan Som",
  abbreviation: "KGS",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Laos Kip",
  abbreviation: "LAK",
  symbol: "&#8365;"
}, {
  currency: "Latvia Lat",
  abbreviation: "LVL",
  symbol: "&#76;&#115;"
}, {
  currency: "Lebanon Pound",
  abbreviation: "LBP",
  symbol: "&#163;"
}, {
  currency: "Liberia Dollar",
  abbreviation: "LRD",
  symbol: "&#36;"
}, {
  currency: "Lithuania Litas",
  abbreviation: "LTL",
  symbol: "&#76;&#116;"
}, {
  currency: "Macedonia Denar",
  abbreviation: "MKD",
  symbol: "&#1076;&#1077;&#1085;"
}, {
  currency: "Malaysia Ringgit",
  abbreviation: "MYR",
  symbol: "&#82;&#77;"
}, {
  currency: "Mauritius Rupee",
  abbreviation: "MUR",
  symbol: "&#8360;"
}, {
  currency: "Mexico Peso",
  abbreviation: "MXN",
  symbol: "&#36;"
}, {
  currency: "Mongolia Tughrik",
  abbreviation: "MNT",
  symbol: "&#8366;"
}, {
  currency: "Mozambique Metical",
  abbreviation: "MZN",
  symbol: "&#77;&#84;"
}, {
  currency: "Namibia Dollar",
  abbreviation: "NAD",
  symbol: "&#36;"
}, {
  currency: "Nepal Rupee",
  abbreviation: "NPR",
  symbol: "&#8360;"
}, {
  currency: "Netherlands Antilles Guilder",
  abbreviation: "ANG",
  symbol: "&#402;"
}, {
  currency: "New Zealand Dollar",
  abbreviation: "NZD",
  symbol: "&#36;"
}, {
  currency: "Nicaragua Cordoba",
  abbreviation: "NIO",
  symbol: "&#67;&#36;"
}, {
  currency: "Nigeria Naira",
  abbreviation: "NGN",
  symbol: "&#8358;"
}, {
  currency: "Korea (North) Won",
  abbreviation: "KPW",
  symbol: "&#8361;"
}, {
  currency: "Norway Krone",
  abbreviation: "NOK",
  symbol: "&#107;&#114;"
}, {
  currency: "Oman Rial",
  abbreviation: "OMR",
  symbol: "&#65020;"
}, {
  currency: "Pakistan Rupee",
  abbreviation: "PKR",
  symbol: "&#8360;"
}, {
  currency: "Panama Balboa",
  abbreviation: "PAB",
  symbol: "&#66;&#47;&#46;"
}, {
  currency: "Paraguay Guarani",
  abbreviation: "PYG",
  symbol: "&#71;&#115;"
}, {
  currency: "Peru Nuevo Sol",
  abbreviation: "PEN",
  symbol: "&#83;&#47;&#46;"
}, {
  currency: "Philippines Peso",
  abbreviation: "PHP",
  symbol: "&#8369;"
}, {
  currency: "Poland Zloty",
  abbreviation: "PLN",
  symbol: "&#122;&#322;"
}, {
  currency: "Qatar Riyal",
  abbreviation: "QAR",
  symbol: "&#65020;"
}, {
  currency: "Romania New Leu",
  abbreviation: "RON",
  symbol: "&#108;&#101;&#105;"
}, {
  currency: "Russia Ruble",
  abbreviation: "RUB",
  symbol: "&#1088;&#1091;&#1073;"
}, {
  currency: "Saint Helena Pound",
  abbreviation: "SHP",
  symbol: "&#163;"
}, {
  currency: "Saudi Arabia Riyal",
  abbreviation: "SAR",
  symbol: "&#65020;"
}, {
  currency: "Serbia Dinar",
  abbreviation: "RSD",
  symbol: "&#1044;&#1080;&#1085;&#46;"
}, {
  currency: "Seychelles Rupee",
  abbreviation: "SCR",
  symbol: "&#8360;"
}, {
  currency: "Singapore Dollar",
  abbreviation: "SGD",
  symbol: "&#36;"
}, {
  currency: "Solomon Islands Dollar",
  abbreviation: "SBD",
  symbol: "&#36;"
}, {
  currency: "Somalia Shilling",
  abbreviation: "SOS",
  symbol: "&#83;"
}, {
  currency: "South Africa Rand",
  abbreviation: "ZAR",
  symbol: "&#82;"
}, {
  currency: "Korea (South) Won",
  abbreviation: "KRW",
  symbol: "&#8361;"
}, {
  currency: "Sri Lanka Rupee",
  abbreviation: "LKR",
  symbol: "&#8360;"
}, {
  currency: "Sweden Krona",
  abbreviation: "SEK",
  symbol: "&#107;&#114;"
}, {
  currency: "Switzerland Franc",
  abbreviation: "CHF",
  symbol: "&#67;&#72;&#70;"
}, {
  currency: "Suriname Dollar",
  abbreviation: "SRD",
  symbol: "&#36;"
}, {
  currency: "Syria Pound",
  abbreviation: "SYP",
  symbol: "&#163;"
}, {
  currency: "Taiwan New Dollar",
  abbreviation: "TWD",
  symbol: "&#78;&#84;&#36;"
}, {
  currency: "Thailand Baht",
  abbreviation: "THB",
  symbol: "&#3647;"
}, {
  currency: "Trinidad and Tobago Dollar",
  abbreviation: "TTD",
  symbol: "&#84;&#84;&#36;"
}, {
  currency: "Turkey Lira",
  abbreviation: "TRY",
  symbol: "₺"
}, {
  currency: "Turkey Lira",
  abbreviation: "TRL",
  symbol: "&#8356;"
}, {
  currency: "Tuvalu Dollar",
  abbreviation: "TVD",
  symbol: "&#36;"
}, {
  currency: "Ukraine Hryvna",
  abbreviation: "UAH",
  symbol: "&#8372;"
}, {
  currency: "United Kingdom Pound",
  abbreviation: "GBP",
  symbol: "&#163;"
}, {
  currency: "United States Dollar",
  abbreviation: "USD",
  symbol: "&#36;"
}, {
  currency: "Uruguay Peso",
  abbreviation: "UYU",
  symbol: "&#36;&#85;"
}, {
  currency: "Uzbekistan Som",
  abbreviation: "UZS",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Venezuela Bolivar",
  abbreviation: "VEF",
  symbol: "&#66;&#115;"
}, {
  currency: "Viet Nam Dong",
  abbreviation: "VND",
  symbol: "&#8363;"
}, {
  currency: "Yemen Rial",
  abbreviation: "YER",
  symbol: "&#65020;"
}, {
  currency: "Zimbabwe Dollar",
  abbreviation: "ZWD",
  symbol: "&#90;&#36;"
}];

// export const getCurrencySymbol = (currencyCode) => {
//   const name = currencyCode.toLowerCase().trim();

//   let currencySymbol = name;

//   currenciesList.map((country) => {
//     const countryArray = country.currency.split(" ");
//     const currencyName = countryArray.pop().toLowerCase().trim();
//     const currencyAbbr = country.abbreviation.toLowerCase();
//     const countryName = countryArray.join(" ").toLowerCase().trim();

//     if (
//       name === currencyName ||
//       name === countryName ||
//       name === currencyAbbr
//     ) {
//       currencySymbol = country.symbol;
//     }
//   });
//   return currencySymbol;
// };

/***/ }),

/***/ "./src/utilities/stripe.js":
/*!*********************************!*\
  !*** ./src/utilities/stripe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmStripe: () => (/* binding */ confirmStripe),
/* harmony export */   disconnectStripeAccount: () => (/* binding */ disconnectStripeAccount),
/* harmony export */   getDisconnectedStripeAccounts: () => (/* binding */ getDisconnectedStripeAccounts),
/* harmony export */   getStripeAccount: () => (/* binding */ getStripeAccount),
/* harmony export */   getStripeConnectURL: () => (/* binding */ getStripeConnectURL),
/* harmony export */   getStripeSettings: () => (/* binding */ getStripeSettings),
/* harmony export */   updateStripeSettings: () => (/* binding */ updateStripeSettings)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const getStripeSettings = async authToken => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe settings:", error);
    return null;
  }
};
const getStripeAccount = async authToken => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe account:", error);
    return null;
  }
};
const getStripeConnectURL = async (authToken, accountId = null) => {
  try {
    let url = "/wp-json/servv-plugin/v1/stripe/url";
    if (accountId) {
      url += `?account_id=${accountId}`;
    }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: url,
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};
const confirmStripe = async authToken => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/confirm",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};
const disconnectStripeAccount = async authToken => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.status;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};
const getDisconnectedStripeAccounts = async authToken => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account/disconnected",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};
const updateStripeSettings = async (authToken, currency) => {
  try {
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: {
        "X-WP-Nonce": authToken
      },
      data: {
        currency: currency
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};

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

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_StripeIntegrationsPage_jsx.js.map?ver=e6efd27f063aafa83f4a