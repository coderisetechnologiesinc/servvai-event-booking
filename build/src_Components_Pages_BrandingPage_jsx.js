"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_BrandingPage_jsx"],{

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

/***/ "./src/Components/CustomLinksModal.jsx":
/*!*********************************************!*\
  !*** ./src/Components/CustomLinksModal.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _SortableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortableRow */ "./src/Components/SortableRow.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const CustomLinksModal = ({
  links,
  setLinks
}) => {
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  /* ✅ Drag reorder */
  const onDragEnd = ({
    active,
    over
  }) => {
    if (!over || active.id === over.id) return;
    setLinks(items => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.arrayMove)(items, oldIndex, newIndex);
    });
  };

  /* ✅ Remove */
  const removeLink = id => {
    setLinks(prev => prev.filter(l => l.id !== id));
  };

  /* ✅ Edit */
  const editLink = id => {
    const item = links.find(l => l.id === id);
    if (!item) return;
    setText(item.text);
    setUrl(item.url);
    removeLink(id);
  };

  /* ✅ Add */
  const addLink = () => {
    if (!text || !url) return;
    setLinks(prev => [...prev, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      text,
      url
    }]);
    setText("");
    setUrl("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.closestCenter,
      onDragEnd: onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableContext, {
        items: links.map(l => l.id),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.verticalListSortingStrategy,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          children: links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SortableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: link.id,
            title: link.text,
            subtitle: link.url,
            onEdit: () => editLink(link.id),
            onRemove: () => removeLink(link.id)
          }, link.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "border-t pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          placeholder: "Link title",
          value: text,
          onChange: setText,
          align: "left",
          maxLength: "23"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          placeholder: "https://example.com",
          value: url,
          onChange: setUrl,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          onClick: addLink,
          disabled: !text || !url,
          className: "p-2 rounded-lg bg-[#7a5af8] text-white disabled:opacity-50",
          children: "Add"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLinksModal);

/***/ }),

/***/ "./src/Components/ImageUploadField.jsx":
/*!*********************************************!*\
  !*** ./src/Components/ImageUploadField.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _UploadBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadBars */ "./src/Components/UploadBars.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ImageUploadField = ({
  id,
  label,
  buttonText,
  uploading,
  preview,
  onFileSelect,
  // ✅ renamed
  shape = "square"
}) => {
  const handleInputChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (typeof onFileSelect !== "function") {
      console.error("❌ onFileSelect must be a function!", onFileSelect);
      return;
    }
    onFileSelect(file);

    // ✅ allow selecting same file again
    e.target.value = "";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex flex-col gap-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "font-medium text-sm",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      id: id,
      type: "file",
      accept: "image/*",
      hidden: true,
      onChange: handleInputChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: uploading ? "Uploading..." : buttonText,
      type: "secondary",
      disabled: uploading,
      className: "w-[170px]",
      onAction: () => document.getElementById(id)?.click()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_2__["default"], {
      visible: uploading
    }), preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: preview,
      alt: "Preview",
      className: shape === "circle" ? "w-[120px] h-[120px] rounded-full object-cover border self-center" : "h-[150px] rounded-lg object-cover border w-full"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUploadField);

/***/ }),

/***/ "./src/Components/LinkInBioModal.jsx":
/*!*******************************************!*\
  !*** ./src/Components/LinkInBioModal.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortableItem */ "./src/Components/SortableItem.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const LinkInBioModal = ({
  /* ---------------- SOCIAL ---------------- */
  instagram,
  setInstagram,
  x,
  setX,
  youtube,
  setYoutube,
  facebook,
  setFacebook,
  tiktok,
  setTikTok,
  /* ---------------- LINKS ---------------- */
  linkTextInput,
  setLinkTextInput,
  linkUrlInput,
  setLinkUrlInput,
  links,
  setLinks,
  handleLinksDragEnd,
  handleRemoveLink,
  /* ---------------- VIDEOS ---------------- */
  videoInput,
  setVideoInput,
  youtubeVideos,
  setYoutubeVideos,
  handleRemoveYoutube,
  /* ---------------- ORDER ---------------- */
  order,
  setOrder,
  responsiveBlock
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: "step__content_title",
        children: "Social media"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "text-sm text-gray-500 mb-4",
        children: "Add your main social profiles shown inside the widget"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 4,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "Instagram Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Instagram URL",
            placeholder: "https://instagram.com/yourname",
            value: instagram,
            onChange: setInstagram,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "X (Twitter) Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "X URL",
            placeholder: "https://x.com/yourname",
            value: x,
            onChange: setX,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "YouTube Channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "YouTube URL",
            placeholder: "https://youtube.com/@channel",
            value: youtube,
            onChange: setYoutube,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "Facebook Page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Facebook URL",
            placeholder: "https://facebook.com/page",
            value: facebook,
            onChange: setFacebook,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "TikTok Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "TikTok URL",
            placeholder: "https://tiktok.com/@yourname",
            value: tiktok,
            onChange: setTikTok,
            align: "left"
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkInBioModal);

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
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/SettingsCardWithModal */ "./src/Components/SettingsCardWithModal.jsx");
/* harmony import */ var _CustomLinksModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CustomLinksModal */ "./src/Components/CustomLinksModal.jsx");
/* harmony import */ var _YoutubeLinksModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../YoutubeLinksModal */ "./src/Components/YoutubeLinksModal.jsx");
/* harmony import */ var _Components_ProfileBrandingModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/ProfileBrandingModal */ "./src/Components/ProfileBrandingModal.jsx");
/* harmony import */ var _Components_LinkInBioModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/LinkInBioModal */ "./src/Components/LinkInBioModal.jsx");
/* harmony import */ var _Components_ThemeBrandingModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Components/ThemeBrandingModal */ "./src/Components/ThemeBrandingModal.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);









/* ✅ Cards */



/* ✅ Modals */




/* ✅ Icons */



const BrandingPage = () => {
  const {
    settings
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore)();

  /* ======================================================
     STATE
  ====================================================== */

  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /* Profile */
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [hideAvatar, setHideAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [uploadedUrl, setUploadedUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [avatarPreview, setAvatarPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [uploadedBannerUrl, setUploadedBannerUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [bannerImagePreview, setBannerImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [bannerUploading, setBannerUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /* Link In Bio */
  const [instagram, setInstagram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [tiktok, setTikTok] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [youtube, setYoutube] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [facebook, setFacebook] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [youtubeVideos, setYoutubeVideos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["events", "links", "videos"]);

  /* Theme */
  const [bgType, setBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color");
  const [backgroundColor, setBackgroundColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [backgroundOpacity, setBackgroundOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [backgroundGradient, setBackgroundGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #4f46e5, #9333ea)");
  const [backgroundImagePreview, setBackgroundImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [bgUploading, setBgUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#121633");
  const [textOpacity, setTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
  const [widgetBgType, setWidgetBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color");
  const [widgetBgColor, setWidgetBgColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [widgetBgGradient, setWidgetBgGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #ffffff, #f3f4f6)");
  const responsiveBlock = "w-full min-w-0";

  /* ======================================================
     LOAD SETTINGS
  ====================================================== */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _w$pw_background_opac, _w$pw_text_opacity;
    if (!settings?.settings?.widget_style_settings) return;
    let w = settings.settings.widget_style_settings;
    if (typeof w === "string") {
      try {
        w = JSON.parse(w);
      } catch {
        return;
      }
    }

    /* Profile */
    setTitle(w.pw_title || "");
    setDescription(w.pw_description || "");
    setAddress(w.pw_address || "");
    setEmail(w.pw_email || "");
    setHideAvatar(w.pw_hide_avatar || false);
    setUploadedUrl(w.pw_avatar || null);
    setAvatarPreview(w.pw_avatar || "");
    setUploadedBannerUrl(w.pw_banner_image || null);
    setBannerImagePreview(w.pw_banner_image || "");

    /* Social */
    setInstagram(w.pw_instagram || "");
    setTikTok(w.pw_tiktok || "");
    setYoutube(w.pw_youtube || "");
    setX(w.pw_x || "");
    setFacebook(w.pw_facebook || "");
    setLinks(Array.isArray(w.pw_links) ? w.pw_links : []);
    setYoutubeVideos(Array.isArray(w.pw_youtube_videos) ? w.pw_youtube_videos : []);
    setOrder(Array.isArray(w.pw_content_order) ? w.pw_content_order : ["events", "links", "videos"]);

    /* Theme */
    setBgType(w.pw_bg_type || "color");
    setBackgroundColor(w.pw_background_color || "#ffffff");
    setBackgroundOpacity((_w$pw_background_opac = w.pw_background_opacity) !== null && _w$pw_background_opac !== void 0 ? _w$pw_background_opac : 1);
    setBackgroundGradient(w.pw_background_gradient || backgroundGradient);
    setTextColor(w.pw_text_color || "#121633");
    setTextOpacity((_w$pw_text_opacity = w.pw_text_opacity) !== null && _w$pw_text_opacity !== void 0 ? _w$pw_text_opacity : 0.5);
    setWidgetBgType(w.pw_widget_bg_type || "color");
    setWidgetBgColor(w.pw_widget_bg_color || "#ffffff");
    setWidgetBgGradient(w.pw_widget_bg_gradient || widgetBgGradient);
  }, [settings]);

  /* ======================================================
     UPLOAD HELPERS (✅ Missing Methods Restored)
  ====================================================== */

  const handleUploadError = error => {
    setTimeout(() => {
      if (!error?.response) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Network error. Check your internet connection.");
        return;
      }
      const {
        status,
        data
      } = error.response;
      if (status === 413) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("File is too large for the server.");
        return;
      }
      if (data?.code === "rest_upload_unknown_error") {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Upload failed on server. Please contact site administrator.");
        return;
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(data?.message || "Upload failed.");
    }, 0);
  };
  const uploadImageToMediaLibrary = async file => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].post("/wp-json/wp/v2/media", formData, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        timeout: 30000
      });
      return res.data.source_url;
    } catch (error) {
      handleUploadError(error);
      return null;
    }
  };

  /* ---------------- Avatar Upload ---------------- */

  const handleAvatarChange = async file => {
    if (!file) return;
    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setUploadedUrl(url);
    }
    setAvatarUploading(false);
  };

  /* ---------------- Banner Upload ---------------- */

  const handleBannerChange = async file => {
    if (!file) return;
    setBannerUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBannerImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload banner image
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setUploadedBannerUrl(url);
    }
    setBannerUploading(false);
  };

  /* ---------------- Background Upload ---------------- */

  const handleBackgroundImageChange = async file => {
    if (!file) return;
    setBgUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBackgroundImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload image
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      // If later you want to persist pw_background_image, add state:
      // setBackgroundImage(url);
      console.log("Background uploaded:", url);
    }
    setBgUploading(false);
  };

  /* ======================================================
     SAVE SETTINGS
  ====================================================== */

  const saveSettings = async () => {
    setLoading(true);
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
      pw_hide_avatar: hideAvatar,
      pw_avatar: uploadedUrl,
      pw_banner_image: uploadedBannerUrl,
      pw_instagram: instagram,
      pw_tiktok: tiktok,
      pw_youtube: youtube,
      pw_x: x,
      pw_facebook: facebook,
      pw_links: links,
      pw_youtube_videos: youtubeVideos,
      pw_content_order: order,
      pw_bg_type: bgType,
      pw_background_color: backgroundColor,
      pw_background_opacity: backgroundOpacity,
      pw_background_gradient: backgroundGradient,
      pw_text_color: textColor,
      pw_text_opacity: textOpacity,
      pw_widget_bg_type: widgetBgType,
      pw_widget_bg_color: widgetBgColor,
      pw_widget_bg_gradient: widgetBgGradient
    };
    try {
      await axios__WEBPACK_IMPORTED_MODULE_15__["default"].put("/wp-json/servv-plugin/v1/shop/settings", {
        ...settings,
        settings: {
          ...settings.settings,
          widget_style_settings: JSON.stringify(newWidgetSettings)
        }
      }, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("Settings saved successfully.");
    } catch (err) {
      console.error(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Save failed.");
    }
    setLoading(false);
  };

  /* ======================================================
   ✅ STATUS TEXT HELPERS
  ====================================================== */

  const hasProfileInfo = title.trim() || description.trim() || address.trim() || email.trim() || uploadedUrl || uploadedBannerUrl;
  const hasSocialInfo = instagram.trim() || tiktok.trim() || youtube.trim() || x.trim() || facebook.trim();
  const hasCustomLinks = links.length > 0;
  const hasYoutubeVideos = youtubeVideos.length > 0;
  const hasThemeInfo = bgType !== "color" || backgroundColor !== "#ffffff" || widgetBgColor !== "#ffffff";
  const profileStatus = hasProfileInfo ? "Profile configured" : "No profile details set";
  const linkBioStatus = hasSocialInfo ? "Links configured" : "No links added yet";
  const themeStatus = hasThemeInfo ? "Theme customized" : "Using default theme";
  const customLinksStatus = hasCustomLinks ? `${links.length} link${links.length > 1 ? "s" : ""} added` : "No custom links yet";
  const youtubeStatus = hasYoutubeVideos ? `${youtubeVideos.length} video${youtubeVideos.length > 1 ? "s" : ""} added` : "No videos added yet";

  /* ======================================================
     UI
  ====================================================== */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: loading,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1", {
            className: "dashboard-title",
            children: "Branding"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "dashboard-description",
            children: "Customize your widget branding and store details"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Save",
          type: "primary",
          disabled: loading,
          onAction: saveSettings
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pt-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_13__.Profile,
            title: "Profile",
            statusText: profileStatus,
            description: "Business name, avatar and widget header branding.",
            buttonText: "Edit profile",
            footerActions: (() => {
              const fileRef = React.useRef(null);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                  ref: fileRef,
                  type: "file",
                  accept: "image/*",
                  hidden: true,
                  onChange: e => {
                    const file = e.target.files?.[0];
                    // console.log(file);
                    if (file) handleAvatarChange(file);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                  type: "button",
                  onClick: () => fileRef.current?.click(),
                  disabled: avatarUploading,
                  className: "px-5 py-2 bg-[#7A5AF8] text-white rounded-lg",
                  children: "Upload Avatar"
                })]
              });
            })(),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_ProfileBrandingModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: title,
              setTitle: setTitle,
              description: description,
              setDescription: setDescription,
              address: address,
              setAddress: setAddress,
              email: email,
              setEmail: setEmail,
              hideAvatar: hideAvatar,
              avatarUploading: avatarUploading,
              setHideAvatar: setHideAvatar,
              avatarPreview: avatarPreview
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"],
            title: "Link in Bio",
            description: "Social links, custom URLs, YouTube blocks and content order.",
            buttonText: "Edit links",
            statusText: linkBioStatus,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_LinkInBioModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
              instagram: instagram,
              setInstagram: setInstagram,
              tiktok: tiktok,
              setTikTok: setTikTok,
              youtube: youtube,
              setYoutube: setYoutube,
              x: x,
              setX: setX,
              facebook: facebook,
              setFacebook: setFacebook,
              links: links,
              setLinks: setLinks,
              youtubeVideos: youtubeVideos,
              setYoutubeVideos: setYoutubeVideos,
              order: order,
              setOrder: setOrder
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"],
            title: "Theme",
            description: "Colors, gradients, background and widget styling.",
            buttonText: "Edit theme",
            statusText: themeStatus,
            footerActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
              type: "button",
              disabled: bannerUploading,
              onClick: () => document.getElementById("themeBannerUploadInput")?.click(),
              className: "px-5 py-2 bg-[#7A5AF8] text-white rounded-lg hover:bg-[#6941C6] font-semibold text-sm disabled:opacity-50",
              children: bannerUploading ? "Uploading..." : "Upload Banner"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_ThemeBrandingModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
              bgType: bgType,
              setBgType: setBgType,
              backgroundColor: backgroundColor,
              setBackgroundColor: setBackgroundColor,
              backgroundOpacity: backgroundOpacity,
              setBackgroundOpacity: setBackgroundOpacity,
              backgroundGradient: backgroundGradient,
              setBackgroundGradient: setBackgroundGradient,
              backgroundImagePreview: backgroundImagePreview,
              setBackgroundImagePreview: setBackgroundImagePreview,
              bgUploading: bgUploading,
              textColor: textColor,
              setTextColor: setTextColor,
              textOpacity: textOpacity,
              setTextOpacity: setTextOpacity,
              widgetBgType: widgetBgType,
              setWidgetBgType: setWidgetBgType,
              widgetBgColor: widgetBgColor,
              setWidgetBgColor: setWidgetBgColor,
              widgetBgGradient: widgetBgGradient,
              setWidgetBgGradient: setWidgetBgGradient,
              responsiveBlock: responsiveBlock,
              bannerImagePreview: bannerImagePreview,
              bannerUploading: bannerUploading,
              handleBannerChange: handleBannerChange,
              hideAvatar: hideAvatar,
              setHideAvatar: setHideAvatar,
              avatarUploading: setAvatarUploading,
              avatarPreview: setAvatarPreview,
              handleAvatarChange: handleAvatarChange,
              order: order,
              setOrder: setOrder
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"],
            title: "Custom Links",
            statusText: customLinksStatus,
            description: "External links shown in your widget.",
            buttonText: "Edit links",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_CustomLinksModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
              links: links,
              setLinks: setLinks
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Components_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_13__.Youtube,
            title: "YouTube Videos",
            description: "Add video blocks inside widget.",
            statusText: youtubeStatus,
            buttonText: "Edit videos",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_YoutubeLinksModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
              youtubeVideos: youtubeVideos,
              setYoutubeVideos: setYoutubeVideos
            })
          })]
        })
      })]
    })
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

/***/ "./src/Components/ProfileBrandingModal.jsx":
/*!*************************************************!*\
  !*** ./src/Components/ProfileBrandingModal.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _StepBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepBlock */ "./src/Components/StepBlock.jsx");
/* harmony import */ var _ImageUploadField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUploadField */ "./src/Components/ImageUploadField.jsx");
/* harmony import */ var _UploadBars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UploadBars */ "./src/Components/UploadBars.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const ProfileBrandingModal = ({
  /* ---------------- BUSINESS DETAILS ---------------- */
  title,
  setTitle,
  description,
  setDescription,
  address,
  setAddress,
  email,
  setEmail,
  /* ---------------- AVATAR ---------------- */
  hideAvatar,
  setHideAvatar,
  avatarUploading,
  avatarPreview,
  handleAvatarChange,
  responsiveBlock
}) => {
  // console.log(avatarUploading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Business details",
      description: "Update your title, description, and contact information",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Business title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            placeholder: "Enter business title",
            value: title,
            onChange: setTitle,
            align: "left",
            maxLength: "30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "This will appear at the top of your widget."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Short description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            placeholder: "Tell visitors what you offer",
            value: description,
            onChange: setDescription,
            align: "left",
            maxLength: "70"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Keep it short and clear (1\u20132 sentences)."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Business address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            placeholder: "Business address",
            value: address,
            onChange: setAddress,
            align: "left",
            maxLength: "30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Optional \u2014 shown only if you provide one."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Contact email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            placeholder: "example@email.com",
            value: email,
            onChange: setEmail,
            align: "left",
            type: "email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Used for customer inquiries."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Avatar",
      description: "Upload a profile image shown in your widget header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "text-sm font-medium text-gray-800",
            children: "Hide avatar"
          }),
          checked: hideAvatar,
          onChange: () => setHideAvatar(!hideAvatar)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_6__["default"], {
          visible: avatarUploading
        }), avatarPreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: avatarPreview,
          alt: "Preview",
          className: "w-[120px] h-[120px] rounded-full border object-cover self-center"
        }), !hideAvatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-xs text-gray-500"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileBrandingModal);

/***/ }),

/***/ "./src/Components/SettingsCardWithModal.jsx":
/*!**************************************************!*\
  !*** ./src/Components/SettingsCardWithModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const SettingsCardWithModal = ({
  icon = _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__["default"],
  title = "Profile",
  description = "Your profile details including specialization and location.",
  buttonText = "Edit information",
  statusText = "Information available",
  status = "available",
  // "available" | "unavailable"
  children,
  // modal body
  footerActions = null
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const Icon = icon;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col justify-center items-center p-4 gap-3 w-full min-w-[330px] bg-white border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex flex-col items-start gap-3 w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex justify-between items-center w-full h-16",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "relative w-16 h-16 flex items-center justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                className: "w-full h-full text-[#6941C6] z-10"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex flex-col gap-1 w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "font-bold text-lg leading-7 text-[#181D27]",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "text-base leading-6 text-[#717680]",
            children: description
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "w-full h-px bg-[#E6E6EB]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-between items-center w-full h-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          onClick: () => setOpen(true),
          className: "flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "w-5 h-5 text-[#414651]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "text-sm font-semibold text-[#414651]",
            children: buttonText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex items-center gap-1",
          children: status === "available" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "w-5 h-5 text-[#039855]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-sm text-[#039855]",
              children: statusText
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-5 h-5 text-[#717680]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-sm text-[#717680]",
              children: "Not configured"
            })]
          })
        })]
      })]
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-xl shadow-lg flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => setOpen(false),
          className: "absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[#D5D7DA] bg-white hover:bg-gray-50 shadow-md z-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-5 h-5 text-[#414651]"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "text-center p-8 pb-4 flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
            className: "text-xl font-semibold text-[#181D27]",
            children: ["Edit ", title]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "text-base text-[#717680] mt-1",
            children: "Update your information below"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex-1 overflow-y-auto px-8 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex flex-col gap-4",
            children: children
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex justify-between items-center gap-3 p-8 pt-4 border-t border-gray-200 flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: footerActions
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            onClick: () => setOpen(false),
            className: "px-5 py-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 font-semibold text-sm",
            children: "Close"
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsCardWithModal);

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

/***/ "./src/Components/SortableRow.jsx":
/*!****************************************!*\
  !*** ./src/Components/SortableRow.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortableItem */ "./src/Components/SortableItem.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SortableRow = ({
  id,
  title,
  subtitle,
  onEdit,
  onRemove
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center justify-between gap-3 w-full p-3 border rounded-lg bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col truncate flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "font-medium text-gray-900 truncate max-w-[300px]",
          children: title
        }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-sm text-gray-500 truncate max-w-[300px]",
          children: subtitle
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: onEdit,
          className: "p-2 rounded-lg hover:bg-gray-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-5 h-5 text-gray-600"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: onRemove,
          className: "p-2 rounded-lg hover:bg-red-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-5 h-5 text-red-500"
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortableRow);

/***/ }),

/***/ "./src/Components/StepBlock.jsx":
/*!**************************************!*\
  !*** ./src/Components/StepBlock.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StepBlock = ({
  title,
  description,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "step__content_block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "step__content_title",
      children: title
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-500 mb-4",
      children: description
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepBlock);

/***/ }),

/***/ "./src/Components/ThemeBrandingModal.jsx":
/*!***********************************************!*\
  !*** ./src/Components/ThemeBrandingModal.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _UploadBars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UploadBars */ "./src/Components/UploadBars.jsx");
/* harmony import */ var _StepBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StepBlock */ "./src/Components/StepBlock.jsx");
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortableItem */ "./src/Components/SortableItem.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const ThemeBrandingModal = ({
  /* ---------------- PAGE BACKGROUND ---------------- */
  bgType,
  setBgType,
  backgroundColor,
  setBackgroundColor,
  backgroundOpacity,
  setBackgroundOpacity,
  backgroundGradient,
  setBackgroundGradient,
  backgroundImagePreview,
  handleBackgroundImageChange,
  bgUploading,
  /* ---------------- TEXT ---------------- */
  textColor,
  setTextColor,
  textOpacity,
  setTextOpacity,
  /* ---------------- WIDGET BACKGROUND ---------------- */
  widgetBgType,
  setWidgetBgType,
  widgetBgColor,
  setWidgetBgColor,
  widgetBgGradient,
  setWidgetBgGradient,
  /* ---------------- IMAGES ---------------- */
  bannerUploading,
  bannerImagePreview,
  handleBannerChange,
  responsiveBlock,
  order,
  setOrder
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Page background",
      description: "Customize the main background behind your widget",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [{
              key: "color",
              label: "Color"
            }, {
              key: "gradient",
              label: "Gradient"
            }, {
              key: "image",
              label: "Image"
            }].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBgType(item.key),
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${bgType === item.key ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`,
              children: item.label
            }, item.key))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Choose how your page background appears."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget text color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: textColor,
              onChange: e => setTextColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "#111827",
              value: textColor,
              onChange: setTextColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              className: "text-sm font-medium text-gray-700 mb-1",
              children: ["Text opacity: ", Math.round(textOpacity * 100), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: textOpacity,
              onChange: e => setTextOpacity(parseFloat(e.target.value)),
              className: "w-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Adjust the color and opacity of widget text."
          })]
        }), bgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: backgroundColor,
              onChange: e => setBackgroundColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "#ffffff",
              value: backgroundColor,
              onChange: setBackgroundColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              className: "text-sm font-medium text-gray-700 mb-1",
              children: ["Background opacity: ", Math.round(backgroundOpacity * 100), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: backgroundOpacity,
              onChange: e => setBackgroundOpacity(parseFloat(e.target.value)),
              className: "w-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex gap-2 flex-wrap mt-2",
            children: ["#ffffff", "#f3f4f6", "#d1d5db", "#111827", "#4338ca", "#4f46e5", "#ec4899", "#10b981"].map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBackgroundColor(c),
              className: "w-9 h-9 rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform",
              style: {
                backgroundColor: c
              }
            }, c))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Select a solid color or use the color picker."
          })]
        }), bgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Gradient preset"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex gap-3 flex-wrap",
            children: ["linear-gradient(135deg,#4f46e5,#9333ea)", "linear-gradient(135deg,#06b6d4,#3b82f6)", "linear-gradient(135deg,#f97316,#ef4444)", "linear-gradient(135deg,#10b981,#059669)"].map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBackgroundGradient(g),
              className: "w-[120px] h-[50px] rounded-lg border border-gray-300 hover:scale-105 transition-transform cursor-pointer",
              style: {
                background: g
              }
            }, g))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
              className: "text-sm font-medium text-gray-800 mb-1",
              children: "Custom gradient"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "linear-gradient(...)",
              value: backgroundGradient,
              onChange: setBackgroundGradient
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Choose a preset or enter a custom CSS gradient."
          })]
        }), bgType === "image" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            id: "backgroundUploadInput",
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => handleBackgroundImageChange(e.target.files[0])
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: bgUploading ? "Uploading..." : "Upload background",
            type: "secondary",
            disabled: bgUploading,
            className: "w-[200px]",
            onAction: () => document.getElementById("backgroundUploadInput").click()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_5__["default"], {
            visible: bgUploading
          }), backgroundImagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: backgroundImagePreview,
            alt: "Background preview",
            className: "mt-3 w-full max-w-[280px] h-[120px] rounded-xl border object-cover self-center"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Recommended size: 1920\xD71080px or higher. JPG or PNG."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Live preview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "w-full h-[110px] rounded-xl border border-gray-200",
            style: {
              background: bgType === "color" ? backgroundColor : bgType === "gradient" ? backgroundGradient : `url(${backgroundImagePreview}) center/cover`,
              opacity: bgType === "color" ? backgroundOpacity : 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Preview of your selected background."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Widget container background",
      description: "Background color/gradient for the widget content area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: ["color", "gradient"].map(type => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setWidgetBgType(type),
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${widgetBgType === type ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`,
              children: type === "color" ? "Color" : "Gradient"
            }, type))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Style the widget container background."
          })]
        }), widgetBgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget background color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: widgetBgColor,
              onChange: e => setWidgetBgColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "#ffffff",
              value: widgetBgColor,
              onChange: setWidgetBgColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Solid color for the widget container."
          })]
        }), widgetBgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget background gradient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            placeholder: "linear-gradient(...)",
            value: widgetBgGradient,
            onChange: setWidgetBgGradient
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Enter a CSS gradient value."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget preview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "h-[80px] rounded-xl border border-gray-200",
            style: {
              background: widgetBgType === "color" ? widgetBgColor : widgetBgGradient
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Preview of your widget background."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
        className: "step__content_title",
        children: "Order"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: "text-sm text-gray-500 mb-4",
        children: "Drag and reorder widget sections"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__.DndContext, {
        collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__.closestCenter,
        onDragEnd: e => {
          const {
            active,
            over
          } = e;
          if (!over || active.id === over.id) return;
          setOrder(items => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);
            return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.arrayMove)(items, oldIndex, newIndex);
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.SortableContext, {
          items: order,
          strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.verticalListSortingStrategy,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 2,
            children: order.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: item,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "capitalize font-medium",
                children: item
              })
            }, item))
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Card background",
      description: "Upload a banner image for the widget header area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Banner image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            id: "themeBannerUploadInput",
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => handleBannerChange(e.target.files?.[0])
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_5__["default"], {
            visible: bannerUploading
          }), bannerImagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: bannerImagePreview,
            alt: "Banner preview",
            className: "mt-3 w-full h-[120px] rounded-xl border object-cover"
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeBrandingModal);

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

/***/ }),

/***/ "./src/Components/YoutubeLinksModal.jsx":
/*!**********************************************!*\
  !*** ./src/Components/YoutubeLinksModal.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/InputFieldControl */ "./src/Components/Controls/InputFieldControl.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _SortableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortableRow */ "./src/Components/SortableRow.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const YoutubeLinksModal = ({
  youtubeVideos,
  setYoutubeVideos
}) => {
  const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const onDragEnd = ({
    active,
    over
  }) => {
    if (!over || active.id === over.id) return;
    setYoutubeVideos(items => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.arrayMove)(items, oldIndex, newIndex);
    });
  };
  const removeVideo = id => {
    setYoutubeVideos(prev => prev.filter(v => v.id !== id));
  };
  const editVideo = id => {
    const item = youtubeVideos.find(v => v.id === id);
    if (!item) return;
    setInput(item.url);
    removeVideo(id);
  };
  const addVideo = () => {
    if (!input) return;
    setYoutubeVideos(prev => [...prev, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      url: input
    }]);
    setInput("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.closestCenter,
      onDragEnd: onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableContext, {
        items: youtubeVideos.map(v => v.id),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.verticalListSortingStrategy,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          children: youtubeVideos.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SortableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: v.id,
            title: v.url,
            onEdit: () => editVideo(v.id),
            onRemove: () => removeVideo(v.id)
          }, v.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "border-t pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_InputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          placeholder: "Type your link here",
          value: input,
          onChange: setInput,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          onClick: addVideo,
          disabled: !input,
          className: "p-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50",
          children: "Add"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeLinksModal);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_BrandingPage_jsx.js.map?ver=22ddf591250ac3e2786e