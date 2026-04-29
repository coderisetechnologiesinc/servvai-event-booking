"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_CreateEvent_BrandingStep_jsx"],{

/***/ "./src/Components/Controls/NewInputControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.jsx ***!
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


const NewInputControl = ({
  label = "",
  value = "",
  placeholder = "",
  helpText = "",
  disabled = false,
  onChange = () => {},
  textarea = false,
  style = {},
  error,
  maxValue
}) => {
  const InputTag = textarea ? "textarea" : "input";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "servv_input",
    style: {
      width: "100%"
    },
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      className: "step__content_title",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `servv-input ${textarea ? "textarea" : "input"} ${error ? "servv-input--error" : ""}`,
      style: style,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "servv-input__content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputTag, {
          className: "servv-input__native",
          value: value,
          placeholder: placeholder || helpText,
          disabled: disabled,
          onChange: e => onChange(e.target.value),
          rows: textarea ? 4 : undefined,
          max: maxValue ? Number.parseFloat(maxValue) : undefined
        })
      })
    }), error && typeof error === "string" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "servv-input__error-text",
      children: error
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputControl);

/***/ }),

/***/ "./src/Components/Controls/RecurrenceRadioGroup.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/RecurrenceRadioGroup.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const RadioGroup = ({
  name,
  value,
  options = [],
  // [{ value, label }]
  onChange,
  disabled = false,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `servv-recurrence-group ${className}`,
    children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      className: "servv-radio",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "radio",
        name: name,
        value: opt.value,
        checked: value === opt.value,
        onChange: () => onChange(opt.value),
        disabled: disabled || opt.disabled
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-radio__control"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-radio__label",
        children: opt.label
      })]
    }, opt.value))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);

/***/ }),

/***/ "./src/Components/CreateEvent/BrandingStep.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/CreateEvent/BrandingStep.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/media */ "./src/utilities/media.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/RecurrenceRadioGroup */ "./src/Components/Controls/RecurrenceRadioGroup.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const VISIBILITY_OPTIONS = [{
  value: true,
  label: "On"
}, {
  value: false,
  label: "Off"
}];
const EMAIL_NOTIFICATION_OPTIONS = [{
  value: false,
  label: "On"
}, {
  value: true,
  label: "Off"
}];
const BrandingStep = ({
  attributes,
  setAttributes,
  settings,
  changeStep,
  handleFormSubmit,
  isNew = false,
  calendarConnected
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const {
    google_calendar,
    disable_emails
  } = attributes.notifications || {};
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    topic,
    agenda
  } = attributes.meeting;
  const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const resolveImagePreview = value => {
    if (!value) return "";
    if (value.startsWith("data:image")) return value;
    if (value.startsWith("http") || value.startsWith("/")) return value;
    return `data:image/jpeg;base64,${value}`;
  };
  const [imagePreview, setImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(resolveImagePreview(attributes?.image_content));
  const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setImagePreview(resolveImagePreview(attributes?.image_content));
  }, [attributes?.image_content]);
  const updateField = (key, value) => {
    if (warning === true && key === "topic") {
      setWarning(false);
    }
    if (key === "google_calendar" || key === "disable_emails") {
      setAttributes({
        notifications: {
          ...attributes.notifications,
          [key]: value
        }
      });
    } else {
      setAttributes({
        meeting: {
          ...attributes.meeting,
          [key]: value
        }
      });
    }
  };

  // const uploadImageToMediaLibrary = async (file) => {
  //   try {
  //     return await uploadMedia(file);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Image upload failed");
  //     return null;
  //   }
  // };
  const compressImage = dataUrl => new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let {
        width,
        height
      } = img;
      const MAX_DIM = 1200;
      if (width > MAX_DIM || height > MAX_DIM) {
        const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      const b64Bytes = url => Math.ceil((url.length - url.indexOf(",") - 1) * 3 / 4);
      let lo = 0.05,
        hi = 0.9,
        best = canvas.toDataURL("image/jpeg", 0.7);
      for (let i = 0; i < 10; i++) {
        const mid = (lo + hi) / 2;
        const out = canvas.toDataURL("image/jpeg", mid);
        const size = b64Bytes(out);
        best = out;
        if (size > 100 * 1024) hi = mid;else if (size < 50 * 1024) lo = mid;else break;
      }
      resolve(best);
    };
    img.src = dataUrl;
  });
  const handleImageChange = file => {
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      let dataUrl = reader.result;
      if (file.size > 100 * 1024) {
        dataUrl = await compressImage(dataUrl);
      }
      setImagePreview(dataUrl);
      setAttributes({
        image_content: dataUrl
      });
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__header step__header--centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.BrushIcon, {
        className: "step__header_icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__heading step__heading--centered",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
          className: "step__header_title",
          children: "Event details"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "step__description",
          children: "Add event information and image"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "step__content_title",
          children: "Title"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"]
        // label="Title"
        , {
          placeholder: "Enter a title",
          value: topic,
          onChange: val => updateField("topic", val),
          error: warning
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "step__content_title",
          children: "Description"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"]
        // label="Subtitle"
        , {
          placeholder: "Enter description",
          textarea: true,
          value: agenda,
          onChange: val => updateField("agenda", val)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "step__content_title",
          children: "Image"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
          ref: fileInputRef,
          type: "file",
          accept: "image/*",
          style: {
            display: "none"
          },
          onChange: e => handleImageChange(e.target.files[0])
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "servv_upload",
          onClick: () => fileInputRef.current?.click(),
          style: {
            cursor: "pointer"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "servv_upload__icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.UploadIcon, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "servv_upload__text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "servv_upload__action",
              children: uploading ? "Uploading..." : "Click to upload"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "servv_upload__support",
            children: "Supports PNG and JPG files up to 5 MB."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "servv_upload__support",
            children: "Recommended aspect ratio is 16:11"
          })]
        }), imagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: imagePreview,
          alt: "Preview",
          className: `mt-3 w-full max-h-[180px] object-cover rounded-lg ${uploading ? "opacity-60" : "opacity-100"}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "step__content_delimeter"
      }), calendarConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "step__content_title",
          children: "Calendar"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "Calendar",
          value: calendarConnected ? google_calendar : false,
          options: VISIBILITY_OPTIONS,
          onChange: val => updateField("google_calendar", val),
          disabled: !calendarConnected
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "servv_actions",
        children: [!isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--secondary",
          onClick: () => handleFormSubmit(true),
          children: "Save and Exit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--secondary",
          onClick: () => {
            const from = location.state?.from;
            const allowed = ["/dashboard", "/events"];
            const canGoBack = from && allowed.some(path => from.includes(path));
            canGoBack ? navigate(-1) : navigate("/events");
          },
          children: "Previous"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: () => {
            if (attributes?.meeting?.topic?.length > 0) {
              changeStep("date");
            } else {
              setWarning(true);
              react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.warning("Please enter the title");
            }
          },
          children: "Continue"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingStep);

/***/ }),

/***/ "./src/utilities/media.js":
/*!********************************!*\
  !*** ./src/utilities/media.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadMedia: () => (/* binding */ uploadMedia)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const uploadMedia = async file => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wp-json/wp/v2/media", formData, {
    headers: {
      "X-WP-Nonce": servvData.nonce
    },
    timeout: 30000
  });
  return response.data.source_url;
};

/***/ })

}]);
//# sourceMappingURL=src_Components_CreateEvent_BrandingStep_jsx.js.map?ver=90b7fa9bc16c1f8151bc