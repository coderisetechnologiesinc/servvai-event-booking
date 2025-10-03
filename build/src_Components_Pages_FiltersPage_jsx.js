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

/***/ "./src/Components/Containers/PageContentPlaceholder.jsx":
/*!**************************************************************!*\
  !*** ./src/Components/Containers/PageContentPlaceholder.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PageContentPlaceholder = props => {
  const {
    className = "",
    icon,
    title,
    description,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...rest,
    className: `page-content-placeholder ${className}`,
    children: [icon && icon, title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
      className: "page-conetent-placeholder-title",
      children: title
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "page-conetent-placeholder-description",
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "page-conetent-placeholder-actions",
      children: children
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

/***/ "./src/Components/Controls/MobileFooterActions.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/MobileFooterActions.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const MobileFooterActions = ({
  onSave,
  onCancel,
  saveText = "Save",
  cancelText = "Cancel",
  saveDisabled = false,
  saveIcon = null,
  loading = false,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 safe-area-pb",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex gap-3 w-full max-w-md mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
          text: cancelText,
          type: "secondary",
          onAction: onCancel,
          disabled: loading,
          className: `flex-1 min-h-[44px] text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${className}`,
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
          text: saveText,
          icon: saveIcon,
          type: "primary",
          onAction: onSave,
          disabled: saveDisabled || loading,
          className: `flex-1 min-h-[44px] text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-colors duration-200 ${className}`,
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "md:hidden h-20"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileFooterActions);

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
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const CreateCategoryFilterForm = ({
  category = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [categoryData, setCategoryData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(category);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      await (0,axios__WEBPACK_IMPORTED_MODULE_10__["default"])({
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
  const isFormValid = categoryData?.name && categoryData.name.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          className: "text-display-sm mt-6 text-gray-900",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: categoryData && categoryData.id ? `Category Filter "${categoryData.name}"` : "New Category"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "page-header-description text-gray-600 text-base leading-relaxed",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: [t("Edit Details for"), " ", categoryData && categoryData.id ? `${categoryData.name}` : "New Category"]
        })]
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        className: "hidden md:flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: onCancel,
          className: "font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save"
          // icon={
          //   <InboxArrowDownIcon
          //     className={`w-5 h-5 ${
          //       !isFormValid ? "text-gray-400" : "text-white"
          //     }`}
          //   />
          // }
          ,
          type: "primary",
          onAction: handleCategorySave,
          disabled: !isFormValid,
          className: "font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "pb-20 md:pb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 8,
          cardsLayout: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Category Name",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: categoryData?.name || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 100,
              onChange: val => handleCategroyChange("name", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Category Details",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: categoryData?.details || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 200,
              onChange: val => handleCategroyChange("details", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), category && category.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Order",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: categoryData.priority || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 10,
              onChange: val => handleCategroyChange("priority", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          })]
        })
      })
    }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSave: handleCategorySave,
      onCancel: onCancel,
      saveText: "Save",
      cancelText: "Cancel",
      saveDisabled: !isFormValid
      // saveIcon={
      //   <InboxArrowDownIcon
      //     className={`w-5 h-5 ${
      //       !isFormValid ? "text-gray-400" : "text-white"
      //     }`}
      //   />
      // }
      ,
      className: "font-semibold"
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
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const CreateLanguageFilterForm = ({
  language = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [languageData, setLanguageData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(language);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const isFormValid = languageData?.name && languageData.name.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          className: "text-display-sm mt-6 text-gray-900",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: languageData && languageData.id ? `Language Filter "${languageData.name}"` : "New Language"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "page-header-description text-gray-600 text-base leading-relaxed",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: [t("Edit Details for"), " ", languageData && languageData.id ? `${languageData.name}` : "New Language"]
        })]
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        className: "hidden md:flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: onCancel,
          className: "font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save"
          // icon={
          //   <InboxArrowDownIcon
          //     className={`w-5 h-5 ${
          //       !isFormValid ? "text-gray-400" : "text-white"
          //     }`}
          //   />
          // }
          ,
          type: "primary",
          onAction: handleLanguageSave,
          disabled: !isFormValid,
          className: "font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "pb-20 md:pb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 8,
          cardsLayout: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Language Name",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: languageData?.name || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 100,
              onChange: val => handleLanguageChange("name", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), languageData && languageData.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Order",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: languageData.priority || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 10,
              onChange: val => handleLanguageChange("priority", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          })]
        })
      })
    }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSave: handleLanguageSave,
      onCancel: onCancel,
      saveText: "Save",
      cancelText: "Cancel",
      saveDisabled: !isFormValid
      // saveIcon={
      //   <InboxArrowDownIcon
      //     className={`w-5 h-5 ${
      //       !isFormValid ? "text-gray-400" : "text-white"
      //     }`}
      //   />
      // }
      ,
      className: "font-semibold"
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
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/TimeInputControl */ "./src/Components/Controls/TimeInputControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const CreateLocationFilterForm = ({
  location = {},
  onCancel = () => {},
  setLoading = () => {},
  timeFormat = "hh:mm a"
}) => {
  const [locationData, setLocationData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(location);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      await (0,axios__WEBPACK_IMPORTED_MODULE_12__["default"])({
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
      const timeParts = locationData.operational_hours.split(" - ");
      if (timeParts.length > 0) {
        return moment__WEBPACK_IMPORTED_MODULE_9___default()(timeParts[0], "hh:mm a");
      }
    }
    return moment__WEBPACK_IMPORTED_MODULE_9___default()("09:00", "HH:mm");
  };
  const getEndTime = () => {
    if (locationData?.operational_hours) {
      const timeParts = locationData.operational_hours.split(" - ");
      if (timeParts.length > 1) {
        return moment__WEBPACK_IMPORTED_MODULE_9___default()(timeParts[1], "hh:mm a");
      }
    }
    return moment__WEBPACK_IMPORTED_MODULE_9___default()("17:00", "HH:mm");
  };
  const handleStartTimeChange = newVal => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let endTime;
    if (currentOperationalHours.length > 0) {
      const timeParts = currentOperationalHours.split(" - ");
      endTime = timeParts.length > 1 ? timeParts[1] : moment__WEBPACK_IMPORTED_MODULE_9___default()("17:00", "HH:mm").format("hh:mm a");
    } else {
      endTime = moment__WEBPACK_IMPORTED_MODULE_9___default()("17:00", "HH:mm").format("hh:mm a");
    }
    const startTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal).format("hh:mm a");
    const newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };
  const handleEndTimeChange = newVal => {
    const currentOperationalHours = locationData?.operational_hours || "";
    let startTime;
    if (currentOperationalHours.length > 0) {
      const timeParts = currentOperationalHours.split(" - ");
      startTime = timeParts.length > 0 ? timeParts[0] : moment__WEBPACK_IMPORTED_MODULE_9___default()("09:00", "HH:mm").format("hh:mm a");
    } else {
      startTime = moment__WEBPACK_IMPORTED_MODULE_9___default()("09:00", "HH:mm").format("hh:mm a");
    }
    const endTime = moment__WEBPACK_IMPORTED_MODULE_9___default()(newVal).format("hh:mm a");
    const newOperationalHours = `${startTime} - ${endTime}`;
    handleLocationChange("operational_hours", newOperationalHours);
  };
  const isFormValid = locationData?.name && locationData.name.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
          className: "text-display-sm mt-6 text-gray-900",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: locationData && locationData.id ? `Location Filter "${locationData.name}"` : "New Location"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
          className: "page-header-description text-gray-600 text-base leading-relaxed",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: [t("Edit Details for"), " ", locationData && locationData.id ? `${locationData.name}` : "New Location"]
        })]
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        className: "hidden md:flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: onCancel,
          className: "font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save"
          // icon={
          //   <InboxArrowDownIcon
          //     className={`w-5 h-5 ${
          //       !isFormValid ? "text-gray-400" : "text-white"
          //     }`}
          //   />
          // }
          ,
          type: "primary",
          onAction: handleLocationSave,
          disabled: !isFormValid,
          className: "font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "pb-20 md:pb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 8,
          cardsLayout: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Location Name",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: locationData?.name || "",
              fullWidth: false,
              type: "text",
              align: "left",
              maxLength: 100,
              onChange: val => handleLocationChange("name", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Location Details",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: locationData?.details || "",
              fullWidth: false,
              type: "text",
              align: "left",
              maxLength: 200,
              onChange: val => handleLocationChange("details", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Operational Hours",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "operational-hours-container",
              style: {
                width: isMobile ? "100%" : "400px"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: `time-inputs-wrapper ${isMobile ? "flex flex-col gap-4" : "flex flex-row gap-4"}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    label: "Start Time",
                    time: getStartTime(),
                    onChange: handleStartTimeChange,
                    timeFormat: timeFormat,
                    align: "start",
                    className: "font-medium"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_TimeInputControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    label: "End Time",
                    time: getEndTime(),
                    onChange: handleEndTimeChange,
                    timeFormat: timeFormat,
                    align: "end",
                    className: "font-medium"
                  })
                })]
              })
            })
          }), location && location.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Order",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: locationData.priority || "",
              fullWidth: false,
              type: "text",
              align: "left",
              maxLength: 10,
              onChange: val => handleLocationChange("priority", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          })]
        })
      })
    }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSave: handleLocationSave,
      onCancel: onCancel,
      saveText: "Save",
      cancelText: "Cancel",
      saveDisabled: !isFormValid
      // saveIcon={
      //   <InboxArrowDownIcon
      //     className={`w-5 h-5 ${
      //       !isFormValid ? "text-gray-400" : "text-white"
      //     }`}
      //   />
      // }
      ,
      className: "font-semibold"
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
/* harmony import */ var _Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/MobileFooterActions */ "./src/Components/Controls/MobileFooterActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const CreateMemberFilterForm = ({
  member = {},
  onCancel = () => {},
  setLoading = () => {}
}) => {
  const [memberData, setMemberData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(member);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(window.innerWidth < 768);

  // Track window size changes
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const isFormValid = memberData?.name && memberData.name.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          className: "text-display-sm mt-6 text-gray-900",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: memberData && memberData.id ? `Member Filter "${memberData.name}"` : "New Member"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "page-header-description text-gray-600 text-base leading-relaxed",
          style: {
            fontFamily: "'Inter', sans-serif"
          },
          children: [t("Edit Details for"), " ", memberData && memberData.id ? `${memberData.name}` : "New Member"]
        })]
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        align: "right",
        className: "hidden md:flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cancel",
          type: "secondary",
          onAction: onCancel,
          className: "font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save"
          // icon={
          //   <InboxArrowDownIcon
          //     className={`w-5 h-5 ${
          //       !isFormValid ? "text-gray-400" : "text-white"
          //     }`}
          //   />
          // }
          ,
          type: "primary",
          onAction: handleMemberSave,
          disabled: !isFormValid,
          className: "font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200",
          style: {
            fontFamily: "'Inter', sans-serif"
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "pb-20 md:pb-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
          gap: 8,
          cardsLayout: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Member Name",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: memberData?.name || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 100,
              onChange: val => handleMemberChange("name", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Member Email",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: memberData?.email || "",
              fullWidth: false,
              type: "email",
              align: "left",
              disabled: false,
              maxLength: 100,
              onChange: val => handleMemberChange("email", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Phone",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: memberData?.phone || "",
              fullWidth: false,
              type: "tel",
              align: "left",
              disabled: false,
              maxLength: 50,
              onChange: val => handleMemberChange("phone", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Description",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: memberData?.description || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 200,
              onChange: val => handleMemberChange("description", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          }), member && member.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Order",
            description: "",
            titleClassName: "font-semibold text-gray-900",
            className: "items-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: memberData?.priority || "",
              fullWidth: false,
              type: "text",
              align: "left",
              disabled: false,
              maxLength: 10,
              onChange: val => handleMemberChange("priority", val),
              width: isMobile ? "100%" : "400px",
              className: `${isMobile ? "w-full" : "w-96"} px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500`,
              style: {
                fontFamily: "'Inter', sans-serif"
              }
            })
          })]
        })
      })
    }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_MobileFooterActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSave: handleMemberSave,
      onCancel: onCancel,
      saveText: "Save",
      cancelText: "Cancel",
      saveDisabled: !isFormValid
      // saveIcon={
      //   <InboxArrowDownIcon
      //     className={`w-5 h-5 ${
      //       !isFormValid ? "text-gray-400" : "text-white"
      //     }`}
      //   />
      // }
      ,
      className: "font-semibold"
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
  handleSingleDelete,
  setLoading
}) => {
  // Improved headings logic for all filter types
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
  const renderHeadings = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        checked: selected.length === filters.length,
        onChange: () => onSelectAll()
      })
    }), headings().map(heading => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
      children: heading.label
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {})]
  });
  const renderRows = filters => filters.map(row => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tr", {
    className: "table-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        checked: selected.includes(row.id),
        onChange: () => onSelect(row.id)
      })
    }), headings().map(heading => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
      className: "max-w-[150px]",
      children: heading.value === "name" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        class: "truncate w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
          href: "#",
          className: "filter-table-link",
          onClick: e => onEdit(e, row),
          children: row[heading.value]
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        class: "truncate w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "break-all",
          children: row[heading.value]
        })
      })
    }, heading.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "flex flex-row gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "button-icon",
          onClick: () => {
            if (window.confirm(`Are you sure you want to delete this ${title.slice(0, -1).toLowerCase()}?`)) {
              onDelete(title, [row.id]);
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: "button-icon",
          onClick: e => onEdit(e, row)
        })]
      })
    })]
  }, row.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gap: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: "Delete",
          icon: null,
          type: "secondary",
          onAction: () => {
            if (selected.length > 0 && window.confirm(`Are you sure you want to delete the selected ${title.toLowerCase()}?`)) {
              onDelete(title, selected);
            }
          },
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
    }).filter(filter => filter));
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
    if (settings && settings.current_plan && settings.current_plan.id !== 2) {
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
  // useEffect(() => {
  //   console.log(filtersList);
  // }, [filtersList]);
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
            className: "text-display-sm mt-6",
            children: !selectedList ? "Filters" : selectedList
          }), breadcrumbs.length > 1 && renderBreadCrumbs(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p", {
            className: "page-header-description",
            children: "Easily view, create, and modify filters to streamline your event management process"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gap: 2,
          align: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
            activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
              text: "New filter",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: "primary button-icon"
              }),
              type: "primary",
              onAction: () => {
                !selectedList ? setCreateFirstFilterDropdown(!createFirstFilterDropdown) : handleOpenCreateFilter(selectedList);
              }
            }),
            status: createFirstFilterDropdown,
            onClose: () => setCreateFirstFilterDropdown(false) // <-- ADD THIS LINE
            ,
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
            className: "primary button-icon"
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
//# sourceMappingURL=src_Components_Pages_FiltersPage_jsx.js.map?ver=7d0e943707f0cca81333