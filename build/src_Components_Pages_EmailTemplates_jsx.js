"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_EmailTemplates_jsx"],{

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
          className: `button-group-button${active == button ? "-active" : ""} section-description`,
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

/***/ "./src/Components/Controls/Editor.jsx":
/*!********************************************!*\
  !*** ./src/Components/Controls/Editor.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill */ "./node_modules/quill/quill.js");
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_modules_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/modules/clipboard */ "./node_modules/quill/modules/clipboard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const Editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  readOnly,
  defaultValue,
  onTextChange,
  onSelectionChange,
  onChange,
  disabled
}, ref) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);
  const getDecoratedTplText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => {
    if (!text) return "";
    const replaceRegex = new RegExp(/\n\s*|\n+/gm);
    return text.replace(replaceRegex, "").replace(/<b>/gi, "<strong>").replace(/<\/b>/gi, "</strong>").replace(/<p>\s*<\/p>/gi, "<p> </p>").replace(/>\s+</g, "><").replace(/<p>\s+/g, "<p>").replace(/\s+<\/p>/g, "</p>").replace(/(<br\s*\/?>\s*){2}/gi, "</p><p></p><p>");
  }, []);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onTextChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onTextChange);
  const onSelectionChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onSelectionChange);
  const onChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange);
  const [initailValue, setInitialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getDecoratedTplText(defaultValue) || "");
  quill__WEBPACK_IMPORTED_MODULE_2__["default"].register({
    "modules/toolbar": quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    "modules/clipboard": quill_modules_clipboard__WEBPACK_IMPORTED_MODULE_8__["default"],
    "themes/snow": quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__["default"],
    "formats/bold": quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__["default"],
    "formats/italic": quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__["default"],
    "formats/header": quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"]
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    onTextChangeRef.current = onTextChange;
    onChangeRef.current = onChange;
    onSelectionChangeRef.current = onSelectionChange;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref.current?.clipboard) {
      ref.current?.clipboard.dangerouslyPasteHTML(defaultValue, "api");
    }
  }, [defaultValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(container.ownerDocument.createElement("div"));
    const options = {
      debug: "error",
      theme: "snow"
    };
    const quill = new quill__WEBPACK_IMPORTED_MODULE_2__["default"](editorContainer, options);
    ref.current = quill;
    if (defaultValue) {
      quill.clipboard.dangerouslyPasteHTML(defaultValue, "api");
    }
    quill.on(quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
      const newText = getDecoratedTplText(quill.getSemanticHTML());
      if (args[2] === "api") {
        setInitialValue(newText);
      }
      if (args[2] === "user") {
        onChange(newText, newText.localeCompare(initailValue));
      }
    });
    quill.on(quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });
    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref, initailValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    ref: containerRef
  });
});
Editor.displayName = "Editor";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./src/Components/Controls/HTMLEditor.jsx":
/*!************************************************!*\
  !*** ./src/Components/Controls/HTMLEditor.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _TextAreaControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAreaControl */ "./src/Components/Controls/TextAreaControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const HTMLEditor = ({
  value,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextAreaControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: value,
      onChange: onChange
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLEditor);

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

/***/ "./src/Components/Controls/TextAreaControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/TextAreaControl.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const TextAreaControl = ({
  value,
  onChange
}) => {
  const getDecoratedTplText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rawTplText => {
    if (!rawTplText || rawTplText.length === 0) return rawTplText;
    const replaceRegex = new RegExp(/\n\s*|\n+/gm);
    return rawTplText.replace(replaceRegex, "").replace(/<p><br\/><\/p>/g, "<br/>").replace(/<p><br><\/p>/g, "<br/>").replace(/<br>/g, "<br/>");
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
    rows: "8",
    resize: false,
    value: getDecoratedTplText(value),
    onChange: e => onChange(e.target.value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAreaControl);

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

/***/ "./src/Components/Pages/EmailTemplates.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Pages/EmailTemplates.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Controls_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/Editor */ "./src/Components/Controls/Editor.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/ButtonGroup */ "./src/Components/Controls/ButtonGroup.jsx");
/* harmony import */ var _Controls_HTMLEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/HTMLEditor */ "./src/Components/Controls/HTMLEditor.jsx");
/* harmony import */ var _Containers_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Containers/Card */ "./src/Components/Containers/Card.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);

















const EmailTemplates = ({
  settings
}) => {
  const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedTemplate, setSelectedTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [defaultValue, setDefaultValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [range, setRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Rich text");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const quillRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const disabled = templates.length === 0 || settings.current_plan.id !== 2;
  const handleSelectTemplate = template => {
    const selected = templates.map(template => template.description).indexOf(template);
    setSelectedTemplate(templates[selected]);
    setDefaultValue(templates[selected].text);
  };
  const getEmailTemplates = async () => {
    setLoading(true);
    const emailTemplates = await axios__WEBPACK_IMPORTED_MODULE_16__["default"].get("/wp-json/servv-plugin/v1/wordpress/templates", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (emailTemplates && emailTemplates.status === 200 && emailTemplates.data) {
      if (emailTemplates.data.templates && emailTemplates.data.templates.length > 0) {
        setTemplates(emailTemplates.data.templates);
        setSelectedTemplate(emailTemplates.data.templates[0]);
        setDefaultValue(emailTemplates.data.templates[0].text);
        setLoading(false);
        return emailTemplates.data.templates;
      } else {
        setLoading(false);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)("Servv experiencing issues with loading email templates. Please try again or contact support.");
      }
    } else {
      setLoading(false);
      return [];
    }
  };
  const handleTemplateSave = async () => {
    setLoading(true);
    const templateForSave = selectedTemplate;
    const updateTemplateResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_16__["default"])({
      method: "PATCH",
      url: `/wp-json/servv-plugin/v1/wordpress/templates/${templateForSave.id}`,
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        subject: templateForSave.subject,
        text: templateForSave.text
      }
    }).catch(e => setLoading(false));
    if (updateTemplateResponse && updateTemplateResponse.status === 200) {
      await getEmailTemplates();
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)("Email template was successfully updated.");
    }
  };
  const handleTemplateTextChange = text => {
    setSelectedTemplate({
      ...selectedTemplate,
      text: text
    });
  };
  const handleTemplateSubjectChange = text => {
    setSelectedTemplate({
      ...selectedTemplate,
      subject: text
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getEmailTemplates();
  }, []);
  const renderEmailTemplates = () => {
    if (templates && !disabled) {
      return templates.map(template => template.description);
    }
  };
  const renderAvailableParameters = () => {
    if (selectedTemplate) return Object.keys(selectedTemplate.params).map(param => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "font-semibold",
          children: param
        }), " -", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          children: selectedTemplate.params[param]
        })]
      });
    });else return null;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "text-display-sm font-semibold mt-6",
            children: "Email Templates"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "page-header-description",
            children: "Easily view, create, and modify email templates to streamline your event management process."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 2,
          align: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Cancel",
            icon: null,
            type: "secondary",
            onAction: getEmailTemplates
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            text: "Save",
            icon: null,
            type: "primary",
            disabled: disabled,
            onAction: () => handleTemplateSave()
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gap: 8,
          cardsLayout: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "Template name",
            description: "Select Template",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
              label: "",
              options: renderEmailTemplates(),
              selected: selectedTemplate?.description || null,
              onSelectChange: handleSelectTemplate,
              disabled: disabled
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "Email subject",
            description: "Set an email subject.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
              value: selectedTemplate?.subject || "",
              onChange: handleTemplateSubjectChange,
              align: "left",
              width: "100%",
              disabled: disabled
            })
          }), selectedTemplate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "Available parameters",
            description: "Do not change or remove the parameters below. The server cannot fetch your event details",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
              padding: 4,
              background: "bg-gray-300",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
                gap: 2,
                children: renderAvailableParameters()
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "Edit mode",
            description: "Select template edit mode",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_ButtonGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: "Mode",
              buttons: ["Rich text", "HTML"],
              active: editMode,
              onChange: val => setEditMode(val),
              disabled: disabled
            })
          }), editMode === "Rich text" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_Editor__WEBPACK_IMPORTED_MODULE_7__["default"], {
            ref: quillRef,
            readOnly: disabled,
            defaultValue: defaultValue,
            onChange: disabled ? () => {} : val => handleTemplateTextChange(val),
            onSelectionChange: setRange,
            disabled: disabled
          }), editMode === "HTML" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_HTMLEditor__WEBPACK_IMPORTED_MODULE_11__["default"], {
            value: selectedTemplate?.text || "",
            onChange: handleTemplateTextChange,
            disabled: disabled
          }), selectedTemplate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__["default"], {
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
              className: "text-md font-semibold mt-8",
              children: "Email preview"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
              padding: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: selectedTemplate.text
                }
              })
            })]
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailTemplates);

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

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_EmailTemplates_jsx.js.map?ver=1f7b77d21defbbe20f7b