"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_BrandingPage_jsx"],{

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

/***/ "./src/Components/Pages/BrandingPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/BrandingPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/TabsComponent */ "./src/Components/Containers/TabsComponent.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _UploadBars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UploadBars */ "./src/Components/UploadBars.jsx");
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SortableItem */ "./src/Components/SortableItem.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MinusCircleIcon.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);




















const BrandingPage = () => {
  const {
    settings,
    fetchSettings
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore)();
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [instagram, setInstagram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [tiktok, setTikTok] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [avatarPreview, setAvatarPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [uploadedUrl, setUploadedUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [bgType, setBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color"); // gradient | image | color
  const [backgroundColor, setBackgroundColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [backgroundOpacity, setBackgroundOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [widgetBgType, setWidgetBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color");
  const [widgetBgColor, setWidgetBgColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [widgetBgGradient, setWidgetBgGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #ffffff, #f3f4f6)");
  const [backgroundImage, setBackgroundImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [backgroundImagePreview, setBackgroundImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [backgroundGradient, setBackgroundGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #4f46e5, #9333ea)");
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [bgUploading, setBgUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#121633");
  const [textOpacity, setTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const tabsList = [{
    label: "General",
    value: 0
  }, {
    label: "Social media and links",
    value: 1
  }, {
    label: "Widget",
    value: 2
  }];

  // Links and sortable
  const [linkTextInput, setLinkTextInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [linkUrlInput, setLinkUrlInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const handleLinksDragEnd = event => {
    const {
      active,
      over
    } = event;
    if (!over || active.id === over.id) return;
    setLinks(items => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.arrayMove)(items, oldIndex, newIndex);
    });
  };
  const [youtubeVideos, setYoutubeVideos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [videoInput, setVideoInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["events", "links", "videos"]);

  // --------------------------------------------------------------------

  const responsiveBlock = "w-full min-w-0";

  // -------------------------- Load settings into form --------------------------
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _w$pw_background_opac;
    if (!settings?.settings?.widget_style_settings) return;
    let w = settings.settings.widget_style_settings;
    if (typeof w === "string") {
      try {
        w = JSON.parse(w);
      } catch (e) {
        console.warn("Failed to parse widget_style_settings", e);
        return;
      }
    }

    /* -------- BASIC INFO -------- */
    setTitle(w.pw_title || "");
    setDescription(w.pw_description || "");
    setAddress(w.pw_address || "");
    setEmail(w.pw_email || "");
    setInstagram(w.pw_instagram || "");
    setTikTok(w.pw_tiktok || "");

    /* -------- AVATAR -------- */
    setUploadedUrl(w.pw_avatar || null);
    setAvatarPreview(w.pw_avatar || "");

    /* -------- PAGE BACKGROUND -------- */
    setBgType(w.pw_bg_type || "color");
    setBackgroundColor(w.pw_background_color || "#ffffff");
    setBackgroundOpacity((_w$pw_background_opac = w.pw_background_opacity) !== null && _w$pw_background_opac !== void 0 ? _w$pw_background_opac : 1);
    setBackgroundGradient(w.pw_background_gradient || "linear-gradient(135deg, #4f46e5, #9333ea)");
    setBackgroundImage(w.pw_background_image || null);
    setBackgroundImagePreview(w.pw_background_image || "");

    /* -------- TEXT -------- */
    setTextColor(w.pw_text_color || "#121633");
    setTextOpacity(typeof w.pw_text_opacity === "number" ? w.pw_text_opacity : 0.5);

    /* -------- WIDGET BACKGROUND -------- */
    setWidgetBgType(w.pw_widget_bg_type || "color");
    setWidgetBgColor(w.pw_widget_bg_color || "#ffffff");
    setWidgetBgGradient(w.pw_widget_bg_gradient || "linear-gradient(135deg, #ffffff, #f3f4f6)");

    /* ======================================================
     NEW: LINKS
     ====================================================== */
    setLinks(Array.isArray(w.pw_links) ? w.pw_links : []);

    /* ======================================================
     NEW: YOUTUBE VIDEOS
     ====================================================== */
    setYoutubeVideos(Array.isArray(w.pw_youtube_videos) ? w.pw_youtube_videos : []);

    /* ======================================================
     NEW: CONTENT ORDER
     ====================================================== */
    const defaultOrder = ["events", "links", "videos"];
    setOrder(Array.isArray(w.pw_content_order) && w.pw_content_order.length === 3 ? w.pw_content_order : defaultOrder);
  }, [settings]);

  // ------------------------------ Upload Avatar ------------------------------
  const handleUploadError = error => {
    setTimeout(() => {
      if (!error?.response) {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Network error. Check your internet connection.");
        return;
      }
      const {
        status,
        data
      } = error.response;
      if (status === 413) {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("File is too large for the server.");
        return;
      }
      if (data?.code === "rest_upload_unknown_error") {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Upload failed on server. Please contact site administrator.");
        return;
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(data?.message || "Upload failed.");
    }, 0);
  };
  const uploadImageToMediaLibrary = async file => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_17__["default"].post("/wp-json/wp/v2/media", formData, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        timeout: 30000
      });
      return res.data.source_url;
    } catch (error) {
      handleUploadError(error);
      react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(error?.message || "Upload failed.");
      return null;
    }
  };
  const handleBackgroundImageChange = async file => {
    if (!file) return;
    setBgUploading(true);
    const reader = new FileReader();
    reader.onload = () => setBackgroundImagePreview(reader.result);
    reader.readAsDataURL(file);
    const url = await uploadImageToMediaLibrary(file);
    if (url) setBackgroundImage(url);
    setBgUploading(false);
  };
  const handleAvatarChange = async file => {
    if (!file) return;
    setAvatarUploading(true);
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);
    const url = await uploadImageToMediaLibrary(file);
    if (url) setUploadedUrl(url);
    setAvatarUploading(false);
  };
  const handleRemoveLink = id => {
    setLinks(prev => prev.filter(l => l.id !== id));
  };
  const handleRemoveYoutube = id => {
    setYoutubeVideos(prev => prev.filter(v => v.id !== id));
  };

  // ------------------------------ Save Settings ------------------------------
  const saveSettings = async () => {
    setLoading(true);
    if (avatarUploading || bgUploading) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Please wait until upload is finished");
      setLoading(false);
      return;
    }
    let oldWidgetSettings = {};
    try {
      oldWidgetSettings = JSON.parse(settings.settings.widget_style_settings || "{}");
    } catch {}
    const newWidgetSettings = {
      ...oldWidgetSettings,
      pw_title: title,
      pw_description: description,
      pw_address: address,
      pw_email: email,
      pw_avatar: uploadedUrl,
      pw_instagram: instagram,
      pw_tiktok: tiktok,
      pw_bg_type: bgType,
      pw_background_color: backgroundColor,
      pw_background_opacity: backgroundOpacity,
      pw_background_image: backgroundImage,
      pw_background_gradient: backgroundGradient,
      pw_widget_bg_type: widgetBgType,
      pw_widget_bg_color: widgetBgType === "color" ? widgetBgColor : null,
      pw_widget_bg_gradient: widgetBgType === "gradient" ? widgetBgGradient : null,
      pw_text_color: textColor,
      pw_text_opacity: textOpacity,
      pw_links: links,
      pw_youtube_videos: youtubeVideos,
      pw_content_order: order
    };
    const adminDashboard = typeof settings.settings.admin_dashboard === "string" ? settings.settings.admin_dashboard : JSON.stringify(settings.settings.admin_dashboard);
    const payload = {
      ...settings,
      settings: {
        ...settings.settings,
        admin_dashboard: adminDashboard,
        widget_style_settings: JSON.stringify(newWidgetSettings)
      }
    };
    try {
      const res = await (0,axios__WEBPACK_IMPORTED_MODULE_17__["default"])({
        method: "PUT",
        url: "/wp-json/servv-plugin/v1/shop/settings",
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: payload
      });
      if (res.status === 200) {
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast)("Settings saved successfully.");
        _store_useServvStore__WEBPACK_IMPORTED_MODULE_10__.useServvStore.setState(state => ({
          settings: {
            ...state.settings,
            settings: {
              ...state.settings.settings,
              widget_style_settings: JSON.stringify(newWidgetSettings)
            }
          }
        }));

        // fetchSettings();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: loading,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h1", {
          className: "text-display-sm mt-6",
          children: "Branding"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
          className: "page-header-description",
          children: "Customize your widget branding and business details"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
        gap: 2,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "Save",
          type: "primary",
          disabled: loading || avatarUploading || bgUploading,
          onAction: saveSettings
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "w-full min-w-0 overflow-x-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            tabsList: tabsList,
            selected: selectedTab,
            handleSelectChange: setSelectedTab,
            fullWidth: true
          })
        }), selectedTab === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Business details",
            description: "Your title, description and contact information",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 4,
              className: responsiveBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "Title",
                placeholder: "Enter business title",
                value: title,
                type: "text",
                align: "left",
                onChange: setTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "Description",
                placeholder: "Short description",
                value: description,
                type: "text",
                align: "left",
                onChange: setDescription
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "Address",
                placeholder: "Business address",
                value: address,
                type: "text",
                align: "left",
                onChange: setAddress
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "Email",
                placeholder: "Contact email",
                value: email,
                type: "email",
                align: "left",
                onChange: setEmail
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Avatar",
            description: "Upload an image shown in your widget header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 4,
              className: responsiveBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                id: "avatarUploadInput",
                type: "file",
                accept: "image/*",
                style: {
                  display: "none"
                },
                onChange: e => handleAvatarChange(e.target.files[0])
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                text: avatarUploading ? "Uploading..." : "Upload Avatar",
                type: "secondary",
                disabled: avatarUploading,
                onAction: () => document.getElementById("avatarUploadInput").click()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_12__["default"], {
                visible: avatarUploading
              }), avatarPreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
                src: avatarPreview,
                alt: "Avatar preview",
                style: {
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginTop: 12
                }
              })]
            })
          })]
        }), selectedTab === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Social media",
            description: "Links shown inside your embedded widget",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 4,
              className: responsiveBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "Instagram URL",
                placeholder: "https://instagram.com/yourprofile",
                value: instagram,
                type: "text",
                align: "left",
                onChange: setInstagram
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                label: "TikTok URL",
                placeholder: "https://tiktok.com/@yourprofile",
                value: tiktok,
                type: "text",
                align: "left",
                onChange: setTikTok
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Links",
            description: "Custom external links",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 3,
              className: "w-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                gap: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  placeholder: "Link text (e.g. Our Services)",
                  value: linkTextInput,
                  onChange: setLinkTextInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  placeholder: "https://example.com",
                  value: linkUrlInput,
                  onChange: setLinkUrlInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                  type: "button",
                  className: "icon-button-purple",
                  disabled: !linkTextInput || !linkUrlInput,
                  onClick: () => {
                    if (!linkTextInput || !linkUrlInput) return;
                    setLinks(prev => [...prev, {
                      id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])(),
                      text: linkTextInput,
                      url: linkUrlInput
                    }]);
                    setLinkTextInput("");
                    setLinkUrlInput("");
                  },
                  "aria-label": "Add link",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    className: "icon-purple"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.DndContext, {
                collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.closestCenter,
                onDragEnd: handleLinksDragEnd,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.SortableContext, {
                  items: links.map(l => l.id),
                  strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.verticalListSortingStrategy,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    gap: 2,
                    children: links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
                      id: link.id,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                        className: "flex items-center gap-2 w-full",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                          className: "flex flex-col truncate flex-1",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                            className: "font-medium truncate",
                            children: link.text
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                            className: "text-sm text-muted truncate",
                            children: link.url
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                          type: "button",
                          className: "icon-button-danger",
                          onClick: e => {
                            e.stopPropagation();
                            handleRemoveLink(link.id);
                          },
                          "aria-label": "Remove link",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {
                            className: "icon-danger"
                          })
                        })]
                      })
                    }, link.id))
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "YouTube",
            description: "YouTube video links",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 3,
              className: "w-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                gap: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  placeholder: "https://youtube.com/watch?v=...",
                  value: videoInput,
                  onChange: setVideoInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                  type: "button",
                  className: "icon-button-purple mr-0",
                  disabled: !videoInput,
                  onClick: () => {
                    if (!videoInput) return;
                    setYoutubeVideos(prev => [...prev, {
                      id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])(),
                      url: videoInput
                    }]);
                    setVideoInput("");
                  },
                  "aria-label": "Add video",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    className: "icon-purple"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.DndContext, {
                collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.closestCenter,
                onDragEnd: e => {
                  const {
                    active,
                    over
                  } = e;
                  if (!over || active.id === over.id) return;
                  setYoutubeVideos(items => {
                    const oldIndex = items.findIndex(i => i.id === active.id);
                    const newIndex = items.findIndex(i => i.id === over.id);
                    return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.arrayMove)(items, oldIndex, newIndex);
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.SortableContext, {
                  items: youtubeVideos.map(v => v.id),
                  strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.verticalListSortingStrategy,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    gap: 2,
                    children: youtubeVideos.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
                      id: v.id,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                        className: "flex items-center gap-2 w-full",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                          className: "truncate flex-1",
                          children: v.url
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                          type: "button",
                          className: "icon-button-purple",
                          onClick: e => {
                            e.stopPropagation();
                            handleRemoveYoutube(v.id);
                          },
                          "aria-label": "Remove video",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {
                            className: "icon-danger"
                          })
                        })]
                      })
                    }, v.id))
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "box-border flex flex-col items-start p-4 gap-6 w-full bg-[#FAFAFA] border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
              title: "Order",
              description: "Order of content blocks in widget",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.DndContext, {
                collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_14__.closestCenter,
                onDragEnd: e => {
                  const {
                    active,
                    over
                  } = e;
                  if (!over || active.id === over.id) return;
                  setOrder(items => {
                    const oldIndex = items.indexOf(active.id);
                    const newIndex = items.indexOf(over.id);
                    return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.arrayMove)(items, oldIndex, newIndex);
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.SortableContext, {
                  items: order,
                  strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_15__.verticalListSortingStrategy,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    gap: 2,
                    className: "w-full",
                    children: order.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
                      id: item,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                        className: "capitalize font-medium",
                        children: item
                      })
                    }, item))
                  })
                })
              })
            })
          })]
        }), selectedTab === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Background",
            description: "Customize widget background appearance",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 6,
              className: responsiveBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("label", {
                  className: "font-semibold",
                  children: "Background Type"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  style: {
                    display: "flex",
                    gap: 8
                  },
                  children: [{
                    key: "color",
                    label: "Color"
                  }, {
                    key: "gradient",
                    label: "Gradient"
                  }, {
                    key: "image",
                    label: "Image"
                  }].map(item => {
                    const active = bgType === item.key;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                      type: "button",
                      onClick: () => setBgType(item.key),
                      style: {
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: active ? "2px solid #4f46e5" : "1px solid #ccc",
                        background: active ? "#eef2ff" : "#fff",
                        color: "#111827",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.15s ease"
                      },
                      children: item.label
                    }, item.key);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("label", {
                  className: "font-semibold",
                  children: "Text Color"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                    type: "color",
                    value: textColor,
                    onChange: e => setTextColor(e.target.value),
                    style: {
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      border: "1px solid #ccc"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    label: "Hex Color",
                    value: textColor,
                    align: "left",
                    onChange: setTextColor,
                    placeholder: "#121633",
                    style: {
                      flex: 1
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("label", {
                    className: "font-semibold",
                    children: ["Opacity: ", Math.round(textOpacity * 100), "%"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: textOpacity,
                    onChange: e => setTextOpacity(parseFloat(e.target.value)),
                    style: {
                      width: "100%"
                    }
                  })]
                })]
              }), bgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                    type: "color",
                    value: backgroundColor,
                    onChange: e => setBackgroundColor(e.target.value),
                    style: {
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      border: "1px solid #ccc"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    label: "Hex Color",
                    value: backgroundColor,
                    align: "left",
                    onChange: setBackgroundColor,
                    placeholder: "#ffffff",
                    style: {
                      flex: 1
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("label", {
                    className: "font-semibold",
                    children: ["Opacity: ", Math.round(backgroundOpacity * 100), "%"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: backgroundOpacity,
                    onChange: e => setBackgroundOpacity(parseFloat(e.target.value)),
                    style: {
                      width: "100%"
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  style: {
                    display: "flex",
                    gap: 10
                  },
                  children: ["#ffffff", "#f3f4f6", "#d1d5db", "#111827", "#4338ca", "#4f46e5", "#ec4899", "#10b981"].map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                    style: {
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: c,
                      border: "1px solid #ccc",
                      cursor: "pointer"
                    },
                    onClick: () => setBackgroundColor(c)
                  }, c))
                })]
              }), bgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("label", {
                  className: "font-semibold",
                  children: "Gradient Presets"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  style: {
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap"
                  },
                  children: ["linear-gradient(135deg, #4f46e5, #9333ea)", "linear-gradient(135deg, #06b6d4, #3b82f6)", "linear-gradient(135deg, #f97316, #ef4444)", "linear-gradient(135deg, #10b981, #059669)"].map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                    onClick: () => setBackgroundGradient(g),
                    style: {
                      width: 120,
                      height: 50,
                      borderRadius: 8,
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      background: g
                    }
                  }, g))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  label: "Custom Gradient",
                  value: backgroundGradient,
                  align: "left",
                  onChange: setBackgroundGradient,
                  placeholder: "linear-gradient(...)"
                })]
              }), bgType === "image" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 4,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                  id: "backgroundUploadInput",
                  type: "file",
                  accept: "image/*",
                  style: {
                    display: "none"
                  },
                  onChange: e => handleBackgroundImageChange(e.target.files[0])
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  text: bgUploading ? "Uploading..." : "Upload Background Image",
                  type: "secondary",
                  disabled: bgUploading,
                  onAction: () => document.getElementById("backgroundUploadInput").click()
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  visible: bgUploading
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                style: {
                  width: "100%",
                  height: 100,
                  borderRadius: 12,
                  border: "1px solid #ddd",
                  marginTop: 14,
                  background: bgType === "color" ? backgroundColor : bgType === "gradient" ? backgroundGradient : `url(${backgroundImagePreview}) center/cover`,
                  opacity: bgType === "color" ? backgroundOpacity : 1
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Widget background",
            description: "Background of the widget container (not the page)",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
              gap: 6,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                gap: 2,
                children: ["color", "gradient"].map(type => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
                  type: "button",
                  onClick: () => setWidgetBgType(type),
                  style: {
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: widgetBgType === type ? "2px solid #4f46e5" : "1px solid #d1d5db",
                    background: widgetBgType === type ? "#eef2ff" : "#fff",
                    fontWeight: 500,
                    cursor: "pointer"
                  },
                  children: type === "color" ? "Color" : "Gradient"
                }, type))
              }), widgetBgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                gap: 3,
                align: "center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
                  type: "color",
                  value: widgetBgColor,
                  onChange: e => setWidgetBgColor(e.target.value),
                  style: {
                    width: 48,
                    height: 48
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  label: "Hex",
                  value: widgetBgColor,
                  onChange: setWidgetBgColor
                })]
              }), widgetBgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  label: "Gradient",
                  value: widgetBgGradient,
                  onChange: setWidgetBgGradient
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                  style: {
                    height: 48,
                    borderRadius: 10,
                    background: widgetBgGradient,
                    border: "1px solid #ddd"
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                style: {
                  height: 90,
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                  background: widgetBgType === "color" ? widgetBgColor : widgetBgGradient
                }
              })]
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingPage);

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

/***/ "./src/Components/SortableItem.jsx":
/*!*****************************************!*\
  !*** ./src/Components/SortableItem.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SortableItem = ({
  id,
  children
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__.useSortable)({
    id
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_1__.CSS.Transform.toString(transform),
    transition
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: setNodeRef,
    style: style,
    ...attributes,
    className: "w-full",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center gap-3 p-3 bg-white border rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        ...listeners,
        className: "cursor-grab text-gray-400 select-none",
        children: "\u2630"
      }), children]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortableItem);

/***/ }),

/***/ "./src/Components/UploadBars.jsx":
/*!***************************************!*\
  !*** ./src/Components/UploadBars.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UploadBars = ({
  visible
}) => {
  if (!visible) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "upload-bars",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadBars);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_BrandingPage_jsx.js.map?ver=20f5f5185a575d2dd422