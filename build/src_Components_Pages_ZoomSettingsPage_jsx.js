"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_ZoomSettingsPage_jsx"],{

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

/***/ "./src/Components/Controls/RadioControl.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Controls/RadioControl.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RadioControl = ({
  label = "",
  value = "",
  name = "",
  checked = false,
  onChange = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "input-container-row items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "radio",
      className: "input-control radio-control",
      name: name,
      checked: checked,
      onChange: () => onChange()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
      htmlFor: name,
      className: "section-description text-gray-700",
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioControl);

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const PageWrapper = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fixed inset-0 bg-[#F5F5F5]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "w-full relative pl-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        children: props.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `flex flex-col flex-1 h-full w-full pr-4 max-w-full min-w-0 overflow-visible ${props.loading ? "loading" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/Components/Pages/ZoomSettingsPage.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Pages/ZoomSettingsPage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/RadioControl */ "./src/Components/Controls/RadioControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const ZoomSettingsPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  const [zoomSettings, setZoomSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    use_pmi: false,
    waiting_room: true,
    host_video: false,
    join_before_host: false,
    mute_upon_entry: false,
    participant_video: false,
    auto_recording: "none",
    audio: "voip"
  });
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const updateZoomSettings = async () => {
    const newSettings = {
      ...settings
    };
    const adminDashboardSettings = {
      ...settings.admin_dashboard
    };
    adminDashboardSettings.zoom_meeting_default_settings = zoomSettings;
    // newSettings.settings.admin_dashboard = ""
    newSettings.settings.admin_dashboard = JSON.stringify(adminDashboardSettings);
    const updateZoomSettingsResponse = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].put("/wp-json/servv-plugin/v1/shop/settings", newSettings, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
  };
  const handleSettingsChange = (field, value) => {
    let newSettings = {
      ...zoomSettings
    };
    newSettings[field] = value;
    setZoomSettings(newSettings);
  };
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_14__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      if (getZoomAccountResponse.data.email) setAccount(getZoomAccountResponse.data);
      setAccountFetched(true);
    }
  };
  const getZoomSettings = async () => {
    const shopInfo = await axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (shopInfo && shopInfo.status === 200 && shopInfo.data.settings) {
      setSettings(shopInfo.data);
      if (shopInfo.data.settings.admin_dashboard.length > 0) {
        const adminSettings = JSON.parse(shopInfo.data.settings.admin_dashboard);
        if (adminSettings.zoom_meeting_default_settings) setZoomSettings(adminSettings.zoom_meeting_default_settings);
      }
    }
  };
  const getInfo = async () => {
    await getZoomSettings();
    await getZoomAccount();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getInfo();
  }, []);
  const responsiveBlockStack = "w-full min-w-0";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: loading,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      bottomLine: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-display-sm mt-6",
          children: t("Zoom Settings")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_10__["default"], {
          breadcrumbs: [{
            label: "Integrations",
            action: () => navigate("../../integrations")
          }, {
            label: "Zoom",
            action: () => navigate("../integrations/zoom")
          }, {
            label: "Zoom Settings",
            action: () => {}
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "page-header-description",
          children: t("Connect and manage your Zoom account and settings.")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_8__["default"], {
        gap: 2,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Save",
          icon: null,
          type: "primary",
          onAction: updateZoomSettings
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-lg font-semibold border-b pb-4",
          children: t("Account")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Account details",
          description: "Account email & name.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              value: isAccountFetched ? account.email : "",
              fullWidth: true,
              type: "text",
              align: "right",
              disabled: true,
              maxLength: 30,
              image: isAccountFetched ? account.photo : null
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Account name",
          description: "Set a default time zone.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              value: isAccountFetched ? account.full_name : "",
              fullWidth: false,
              type: "text",
              align: "right",
              disabled: true,
              maxLength: 30
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-lg font-semibold border-b pb-4",
          children: t("Zoom settings")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Meeting ID",
          description: "Set a meeting ID",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Generate automatically",
              name: "meeting_id",
              checked: !zoomSettings.use_pmi,
              onChange: () => handleSettingsChange("use_pmi", false)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Personal meeting ID",
              name: "meeting_id",
              checked: zoomSettings.use_pmi,
              onChange: () => handleSettingsChange("use_pmi", true)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Video",
          description: "Show/hide host and guest video",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "Host video",
              name: "host_video",
              checked: zoomSettings.host_video,
              onChange: () => handleSettingsChange("host_video", !zoomSettings.host_video)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "Guest video",
              name: "guest_video",
              checked: zoomSettings.participant_video,
              onChange: () => handleSettingsChange("participant_video", !zoomSettings.participant_video)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Audio",
          description: "Set default audio settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Telephone",
              name: "audio",
              checked: zoomSettings.audio === "telephony",
              onChange: () => handleSettingsChange("audio", "telephony")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Computer audio",
              name: "audio",
              checked: zoomSettings.audio === "voip",
              onChange: () => handleSettingsChange("audio", "voip")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Both",
              name: "audio",
              checked: zoomSettings.audio === "both",
              onChange: () => handleSettingsChange("audio", "both")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Enable Join Before Host",
          description: "Enable or disabled join before host",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Yes",
              name: "join_before_host",
              checked: zoomSettings.join_before_host,
              onChange: () => handleSettingsChange("join_before_host", true)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "No",
              name: "join_before_host",
              checked: !zoomSettings.join_before_host,
              onChange: () => handleSettingsChange("join_before_host", false)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Enable Waiting Room",
          description: "Enable or disabled waiting room",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Yes",
              name: "waiting_room",
              checked: zoomSettings.waiting_room,
              onChange: () => handleSettingsChange("waiting_room", true)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "No",
              name: "waiting_room",
              checked: !zoomSettings.waiting_room,
              onChange: () => handleSettingsChange("waiting_room", false)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Automatically record meeting",
          description: "Record meeting on local computer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Yes",
              name: "auto_recording",
              checked: zoomSettings.auto_recording === "local",
              onChange: () => handleSettingsChange("auto_recording", "local")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "No",
              name: "auto_recording",
              checked: zoomSettings.auto_recording === "none",
              onChange: () => handleSettingsChange("auto_recording", "none")
            })]
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomSettingsPage);

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
//# sourceMappingURL=src_Components_Pages_ZoomSettingsPage_jsx.js.map?ver=6702924fbf5257f3be3c