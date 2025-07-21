"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_IntegrationsPage_jsx"],{

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

/***/ "./src/Components/Pages/CalendarsPage.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/CalendarsPage.jsx ***!
  \************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const CalendarsPage = ({
  onPageSelect
}) => {
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getCalendarAccount = async () => {
    const getCalendarAccountResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/calendar/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getCalendarAccountResponse && getCalendarAccountResponse.status === 200) {
      if (getCalendarAccountResponse.data && getCalendarAccountResponse.data.id) setAccount(getCalendarAccountResponse.data ? getCalendarAccountResponse.data : null);
    }
    setAccountFetched(true);
  };
  const handleRemoveAccount = async () => {
    const removeCalendarAccount = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/calendar/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    setAccount(null);
  };
  const handleGetConnectURL = async () => {
    const getAuthURLResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])("/wp-json/servv-plugin/v1/calendar/url", {
      method: "GET",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      redirect: "manual"
    });
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      // console.log(window.location.origin)
      open(`${servvData.shopify_app}/calendar/connect?wordpress_url=${encodeURIComponent(getAuthURLResponse.data.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
      // open(getAuthURLResponse.data.auth_url)
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const CalendarAuthResponse = getCalendarAccount();
  }, []);
  const handleBreadCrumbsClick = () => {};
  const badge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "flex flex-row gap-2 items-start",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: account ? "Connected" : "Not connected",
      icon: "",
      align: "left",
      justify: "start"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "self-center",
      children: account ? account.google_calendar_email : "Please connect your account"
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: "Calendars"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
          breadcrumbs: [{
            label: "Integrations",
            action: () => onPageSelect("main")
          }, {
            label: "Calendar",
            action: () => {}
          }],
          onBreadCrumbClick: handleBreadCrumbsClick
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "page-header-description",
          children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 8,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          padding: 0,
          maxWidth: "65%",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "service-image",
            style: {
              background: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            },
            children: account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "connected-account bg-gradient-to-b from-transparent to-black/40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "Account"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                text: badge(),
                justify: "start",
                color: "gray"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
              className: "card-section-heading",
              children: "Google Calendar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "section-description",
              children: "Sync and manage your Google Calendar account and settings."
            }), isAccountFetched && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleGetConnectURL();
              },
              children: "Connect"
            }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleRemoveAccount();
              },
              children: "Disconnect"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarsPage);

/***/ }),

/***/ "./src/Components/Pages/EmailsPage.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Pages/EmailsPage.jsx ***!
  \*********************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const EmailsPage = ({
  onPageSelect
}) => {
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getGmailAccount = async () => {
    const getGmailAccountResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/gmail/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getGmailAccountResponse && getGmailAccountResponse.status === 200) {
      if (getGmailAccountResponse.data.email) setAccount(getGmailAccountResponse.data);
      setAccountFetched(true);
    }
  };
  const handleRemoveAccount = async () => {
    const removeGmailAccount = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/gmail/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    setAccount(null);
  };
  const handleGetConnectURL = async () => {
    const getAuthURLResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])("/wp-json/servv-plugin/v1/gmail/url", {
      method: "GET",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      redirect: "manual"
    });
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(`${servvData.shopify_app}/mail/connect?wordpress_url=${encodeURIComponent(getAuthURLResponse.data.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getGmailAccount();
  }, []);
  const badge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "flex flex-row gap-2 items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: account ? "Connected" : "Not connected",
      icon: "",
      justify: "start"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      children: account ? account.email : "Please connect your account"
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: "Emails"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
          breadcrumbs: [{
            label: "Integrations",
            action: () => onPageSelect("main")
          }, {
            label: "Calendar",
            action: () => {}
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "page-header-description",
          children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 8,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          padding: 0,
          maxWidth: "65%",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "service-image",
            style: {
              background: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            },
            children: account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "connected-account bg-gradient-to-b from-transparent to-black/40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "Account"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                text: badge(),
                justify: "start",
                color: "gray"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
              className: "card-section-heading",
              children: "Gmail"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "section-description",
              children: "Sync and manage your Google Calendar account and settings."
            }), isAccountFetched && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleGetConnectURL();
              },
              children: "Connect"
            }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleRemoveAccount();
              },
              children: "Disconnect"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailsPage);

/***/ }),

/***/ "./src/Components/Pages/IntegrationsPage.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Pages/IntegrationsPage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowUpRightIcon.js");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _CalendarsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarsPage */ "./src/Components/Pages/CalendarsPage.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EmailsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmailsPage */ "./src/Components/Pages/EmailsPage.jsx");
/* harmony import */ var _ZoomPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ZoomPage */ "./src/Components/Pages/ZoomPage.jsx");
/* harmony import */ var _ZoomSettingsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ZoomSettingsPage */ "./src/Components/Pages/ZoomSettingsPage.jsx");
/* harmony import */ var _StripeIntegrationsPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StripeIntegrationsPage */ "./src/Components/Pages/StripeIntegrationsPage.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const IntegrationsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  settings
}) => {
  const [selectedPage, setSelectedPage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("main");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const handleSelectPage = page => {
    setSelectedPage(page);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (resetSelectedSubpage) {
      setSelectedPage("main");
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    const parsedUrl = new URL(window.location);
    const params = new URLSearchParams(parsedUrl.search);
    const section = params.get("section");
    if (section && section === "stripe-integration") {
      setSelectedPage("stripe");
      window.history.pushState({}, "", window.location.origin + "/wp-admin/admin.php?page=servvai-event-booking");
    }
  }, []);
  const isFeatureAvailable = settings?.current_plan?.id === 2;
  // const isFeatureAvailable = true;
  // console.log(isFeatureAvailable);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loading: loading,
    children: [selectedPage === "main" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
            className: "text-display-sm font-semibold mt-6",
            children: "Integrations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "page-header-description",
            children: "Connect and manage your integrations to enhance your event management."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
              gap: 2,
              cardsLayout: true,
              action: true,
              onAction: () => handleSelectPage("calendars"),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "card-image",
                style: {
                  background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://www.onecalendar.nl/images/onecalendar.jpg"}")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
                href: "",
                className: "servv-button-link",
                onClick: e => e.preventDefault(),
                children: "Calendar Integration"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                justify: "space",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                  className: "card-section-heading",
                  children: "Calendars"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: "size-6"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "section-description",
                children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  text: "Google Calendar",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png",
                  type: "pill-outline",
                  size: "medium"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
              gap: 2,
              action: true,
              cardsLayout: true,
              onAction: isFeatureAvailable ? () => handleSelectPage("gmail") : () => {},
              disabled: !isFeatureAvailable,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "card-image",
                style: {
                  background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
                href: "",
                className: "servv-button-link",
                onClick: e => e.preventDefault(),
                children: "Email Integration"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                justify: "space",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                  className: "card-section-heading",
                  children: "Emails"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: "size-6"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "section-description",
                children: "Automate communications using Google Mail and Microsoft Outlook, ensuring timely updates for your events."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  text: "Gmail",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png",
                  type: "pill-outline",
                  size: "medium"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 8,
            cardsLayout: true,
            children: [settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
              gap: 2,
              cardsLayout: true,
              onAction: isFeatureAvailable ? () => handleSelectPage("zoom") : () => {},
              disabled: !isFeatureAvailable,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "card-image",
                style: {
                  background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
                href: "",
                className: "servv-button-link",
                onClick: e => e.preventDefault(),
                children: "Zoom Integration"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                justify: "space",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                  className: "card-section-heading",
                  children: "Video Conferencing"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: "size-6"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "section-description",
                children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  text: "Zoom",
                  image: "https://cdn.worldvectorlogo.com/logos/zoom-app.svg",
                  type: "pill-outline",
                  size: "medium",
                  align: "center"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
              action: true,
              gap: 2,
              cardsLayout: true,
              disabled: !isFeatureAvailable,
              onAction: isFeatureAvailable ? () => handleSelectPage("stripe") : () => {},
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "card-image",
                style: {
                  background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
                href: "",
                className: "servv-button-link",
                onClick: e => e.preventDefault(),
                children: "Stripe integration"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                justify: "space",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                  className: "card-section-heading",
                  children: "Stripe"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: "size-6"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "section-description"
                // style={{
                //   maxWidth:
                //     settings && settings.current_plan
                //       ? "calc(33% - 1rem)"
                //       : "calc(50% - 1rem)",
                // }}
                ,
                children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                align: "left",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  text: "Stripe",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
                  type: "pill-outline",
                  size: "medium"
                })
              })]
            })]
          })]
        })
      })]
    }), selectedPage === "calendars" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CalendarsPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onPageSelect: handleSelectPage
    }), selectedPage === "gmail" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_EmailsPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onPageSelect: handleSelectPage
    }), selectedPage === "stripe" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StripeIntegrationsPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      loading: loading,
      setLoading: setLoading,
      onPageSelect: setSelectedPage
    }), selectedPage === "zoom" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ZoomPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onPageSelect: setSelectedPage
    }), selectedPage === "settings" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ZoomSettingsPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onPageSelect: handleSelectPage
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationsPage);

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
/* harmony import */ var _utilities_stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/stripe */ "./src/utilities/stripe.js");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _utilities_currencies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/currencies */ "./src/utilities/currencies.js");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/InboxArrowDownIcon.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const StripeIntegrationsPage = props => {
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connectedAccounts, setConnectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [connectedAccountsFetched, setConnectedAccountsFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connectUrl, setConnectUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchAccount = async () => {
    const account = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getStripeAccount)(servvData.nonce);
    if (account && account.id) {
      setAccount(account);
    }
    setAccountFetched(true);
    const settings = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getStripeSettings)(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  const handleConnectExistingAccount = async account_id => {
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getStripeConnectURL)(servvData.nonce, account_id);
    if (url) {
      const returnURL = encodeURIComponent(window.location.origin);
      const connectURL = encodeURIComponent(url.auth_url);
      props.setLoading(false);
      open(`${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${connectURL}&wordpress_return_url=${returnURL}`, "_top");
    }
  };
  const connectNewAccount = async () => {
    const connectUrl = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getStripeConnectURL)(servvData.nonce);
    const returnURL = encodeURIComponent(window.location.origin);
    const connectURL = encodeURIComponent(connectUrl.auth_url);
    open(`${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${encodeURIComponent(connectURL)}&wordpress_return_url=${returnURL}`, "_top");
  };
  const renderExistingAccounts = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "flex flex-col",
      children: connectedAccounts.map(account => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: account.id,
          align: "start",
          color: "gray",
          onAction: () => {
            handleConnectExistingAccount(account.account_id);
          }
        });
      })
    });
  };
  const handleGetConnectURL = async () => {
    props.setLoading(true);
    const existingAccounts = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getDisconnectedStripeAccounts)(servvData.nonce);
    // const url = await getStripeConnectURL(servvData.nonce);
    // setConnectUrl(url.auth_url);
    props.setLoading(false);
    if (existingAccounts.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
    } else {
      props.setLoading(true);
      const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.getStripeConnectURL)(servvData.nonce);
      setConnectUrl(url.auth_url);
      if (url) open(`${servvData.shopify_app}/stripe/connect?wordpress_url=${encodeURIComponent(url.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
    }
  };
  const handleRemoveAccount = async () => {
    props.setLoading(true);
    const res = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.disconnectStripeAccount)(servvData.nonce);
    if (res === 200) {
      setAccount(null);
    }
    props.setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAccount();
  }, []);
  const badge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "flex flex-row gap-2 items-center",
    children: [account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: account ? "Connected" : "Not connected",
      icon: ""
    }), account && !account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: "Connection is not completed",
      icon: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      children: account ? account.email : "Please connect your account"
    })]
  });
  const handleSelectChange = currency => {
    const newCurrency = currency.split(" - ")[0];
    setSelectedCurrency(newCurrency);
  };
  const currencySelect = () => {
    let currencies = [];
    if (_utilities_currencies__WEBPACK_IMPORTED_MODULE_9__.currenciesList) {
      currencies = _utilities_currencies__WEBPACK_IMPORTED_MODULE_9__.currenciesList.map(currency => {
        let sequence = currency.symbol;
        return currency.abbreviation + " - " + he__WEBPACK_IMPORTED_MODULE_11___default().decode(sequence);
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
      options: currencies,
      selected: currencies.filter(currency => currency.indexOf(selectedCurrency) >= 0)[0],
      onSelectChange: handleSelectChange
    });
  };
  const handleCurrencySave = async () => {
    if (selectedCurrency) {
      props.setLoading(true);
      await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_7__.updateStripeSettings)(servvData.nonce, selectedCurrency);
      props.setLoading(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: "Stripe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "page-header-description",
          children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 2,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: "Save",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "button-icon"
          }),
          type: "primary",
          onAction: () => handleCurrencySave()
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 8,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          padding: 0,
          maxWidth: "65%",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "service-image",
            style: {
              background: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://www.onecalendar.nl/images/onecalendar.jpg")`
            },
            children: account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "connected-account bg-gradient-to-b from-transparent to-black/40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                children: "Account"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                text: badge(),
                color: "gray",
                justify: "start"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
              className: "card-section-heading",
              children: "Stripe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
              className: "section-description",
              children: "Sync and manage your Google Calendar account and settings."
            }), account && account.charges_enabled && currencySelect(), connectedAccountsFetched && connectedAccounts.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "servv-button-link text-gray-700",
                children: "Connect existing account"
              }), renderExistingAccounts()]
            }), isAccountFetched && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
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
            }), isAccountFetched && account && !account.charges_enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleConnectExistingAccount(account.account_id);
              },
              children: "Resume integration"
            }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleRemoveAccount();
              },
              children: "Disconnect"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeIntegrationsPage);

/***/ }),

/***/ "./src/Components/Pages/ZoomPage.jsx":
/*!*******************************************!*\
  !*** ./src/Components/Pages/ZoomPage.jsx ***!
  \*******************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const ZoomPage = props => {
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
  const handleRemoveAccount = async () => {
    const removeZoomAccount = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    setAccount(null);
  };
  const handleGetConnectURL = async () => {
    const getAuthURLResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_9__["default"])("/wp-json/servv-plugin/v1/zoom/url", {
      method: "GET",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      redirect: "manual"
    });
    if (getAuthURLResponse && getAuthURLResponse.status === 200) {
      open(`${servvData.shopify_app}/zoom/connect?wordpress_url=${encodeURIComponent(getAuthURLResponse.data.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
      // open(getAuthURLResponse.data.auth_url)
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getZoomAccount();
  }, []);
  const badge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "flex flex-row gap-2 items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      background: "gray",
      text: account ? "Connected" : "Not connected",
      icon: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      children: account ? account.email : "Please connect your account"
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: "Video Conferencing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
          breadcrumbs: [{
            label: "Integrations",
            action: () => props.onPageSelect("main")
          }, {
            label: "Calendar",
            action: () => {}
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "page-header-description",
          children: "Sync your event schedules effortlessly with Google Calendar or Outlook to keep everyone informed."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gap: 8,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          padding: 0,
          maxWidth: "65%",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "service-image",
            style: {
              background: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            },
            children: account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "connected-account bg-gradient-to-b from-transparent to-black/40",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "Account"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                text: badge(),
                justify: "start",
                color: "gray"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
              className: "card-section-heading",
              children: "Zoom"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "section-description",
              children: "Sync and manage your Google Calendar account and settings."
            }), isAccountFetched && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleGetConnectURL();
              },
              children: "Connect"
            }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                handleRemoveAccount();
              },
              children: "Disconnect"
            }), isAccountFetched && account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "#",
              className: "servv-button-link",
              onClick: e => {
                e.preventDefault();
                props.onPageSelect("settings");
              },
              children: "Manage"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomPage);

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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/RadioControl */ "./src/Components/Controls/RadioControl.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const ZoomSettingsPage = () => {
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
    const updateZoomSettingsResponse = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].put("/wp-json/servv-plugin/v1/shop/settings", newSettings, {
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
    const getZoomAccountResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_12__["default"])({
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
    const shopInfo = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: "/servv-plugin/v1/shop/info"
    });
    if (shopInfo && shopInfo.settings) {
      setSettings(shopInfo);
      if (shopInfo.settings.admin_dashboard.length > 0) {
        const adminSettings = JSON.parse(shopInfo.settings.admin_dashboard);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      bottomLine: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
          className: "text-display-sm font-semibold mt-6",
          children: "Zoom Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "page-header-description",
          children: "Connect and manage your Zoom account and settings."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 2,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: "Save",
          icon: null,
          type: "primary",
          onAction: updateZoomSettings
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 8,
        cardsLayout: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
          className: "text-lg font-semibold border-b pb-4",
          children: "Account"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Account details",
          description: "Account email & name.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              value: isAccountFetched ? account.email : "",
              fullWidth: true,
              type: "text",
              align: "right",
              disabled: true,
              maxLength: 30,
              image: isAccountFetched ? account.photo : null
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Account name",
          description: "Set a default time zone.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              value: isAccountFetched ? account.full_name : "",
              fullWidth: false,
              type: "text",
              align: "right",
              disabled: true,
              maxLength: 30
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
          className: "text-lg font-semibold border-b pb-4",
          children: "Zoom settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Meeting ID",
          description: "Set a meeting ID",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Generate automatically",
              name: "meeting_id",
              checked: !zoomSettings.use_pmi,
              onChange: () => handleSettingsChange("use_pmi", false)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Personal meeting ID",
              name: "meeting_id",
              checked: zoomSettings.use_pmi,
              onChange: () => handleSettingsChange("use_pmi", true)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Video",
          description: "Show/hide host and guest video",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Host video",
              name: "host_video",
              checked: zoomSettings.host_video,
              onChange: () => handleSettingsChange("host_video", !zoomSettings.host_video)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Guest video",
              name: "guest_video",
              checked: zoomSettings.participant_video,
              onChange: () => handleSettingsChange("participant_video", !zoomSettings.participant_video)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Audio",
          description: "Set default audio settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Telephone",
              name: "audio",
              checked: zoomSettings.audio === "telephony",
              onChange: () => handleSettingsChange("audio", "telephony")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Computer audio",
              name: "audio",
              checked: zoomSettings.audio === "voip",
              onChange: () => handleSettingsChange("audio", "voip")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Both",
              name: "audio",
              checked: zoomSettings.audio === "both",
              onChange: () => handleSettingsChange("audio", "both")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Enable Join Before Host",
          description: "Enable or disabled join before host",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Yes",
              name: "join_before_host",
              checked: zoomSettings.join_before_host,
              onChange: () => handleSettingsChange("join_before_host", true)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "No",
              name: "join_before_host",
              checked: !zoomSettings.join_before_host,
              onChange: () => handleSettingsChange("join_before_host", false)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Enable Waiting Room",
          description: "Enable or disabled waiting room",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Yes",
              name: "waiting_room",
              checked: zoomSettings.waiting_room,
              onChange: () => handleSettingsChange("waiting_room", true)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "No",
              name: "waiting_room",
              checked: !zoomSettings.waiting_room,
              onChange: () => handleSettingsChange("waiting_room", false)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Automatically record meeting",
          description: "Record meeting on local computer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "Yes",
              name: "auto_recording",
              checked: zoomSettings.auto_recording === "local",
              onChange: () => handleSettingsChange("auto_recording", "local")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_RadioControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowUpRightIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowUpRightIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowUpRightIcon({
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
    d: "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowUpRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_IntegrationsPage_jsx.js.map?ver=acd63c1af55578cb13d8