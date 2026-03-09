"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_BrandingStep_jsx"],{

/***/ "./src/Components/BrandingStep.jsx":
/*!*****************************************!*\
  !*** ./src/Components/BrandingStep.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const BrandingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  brandingCompleted,
  settings,
  onSave,
  loading
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const avatarInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore)(s => s.fetchSettings);
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const pickValue = (current, incoming, fallback = undefined) => {
    if (current !== undefined && current !== null && current !== "") {
      return current;
    }
    if (incoming !== undefined && incoming !== null && incoming !== "") {
      return incoming;
    }
    return fallback;
  };
  const didInitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didInitRef.current) return;
    if (!settings?.settings?.widget_style_settings) return;
    didInitRef.current = true;
    let existing = {};
    try {
      existing = typeof settings.settings.widget_style_settings === "string" ? JSON.parse(settings.settings.widget_style_settings) : settings.settings.widget_style_settings || {};
    } catch (e) {
      console.warn("Invalid widget_style_settings JSON", e);
    }
    setAttributes({
      branding: {
        ...attributes.branding,
        title: pickValue(attributes.branding?.title, existing.pw_title, ""),
        description: pickValue(attributes.branding?.description, existing.pw_description, ""),
        avatar: pickValue(attributes.branding?.avatar, existing.pw_avatar, null),
        avatarPreview: pickValue(attributes.branding?.avatarPreview, existing.pw_avatar, null),
        banner: pickValue(attributes.branding?.banner, existing.pw_banner_image, null),
        bannerPreview: pickValue(attributes.branding?.bannerPreview, existing.pw_banner_image, null),
        backgroundType: pickValue(attributes.branding?.backgroundType, existing.pw_bg_type, "color"),
        backgroundColor: pickValue(attributes.branding?.backgroundColor, existing.pw_background_color, "#ffffff"),
        backgroundGradient: pickValue(attributes.branding?.backgroundGradient, existing.pw_background_gradient, "linear-gradient(135deg, #4f46e5, #9333ea)"),
        textColor: pickValue(attributes.branding?.textColor, existing.pw_text_color, "#000000"),
        _initialized: true
      }
    });
  }, [settings]);

  /* --------------------------------------------
     Image upload helper
  -------------------------------------------- */
  const uploadImageToMediaLibrary = async file => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].post("/wp-json/wp/v2/media", formData, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        timeout: 30000
      });
      return res.data.source_url;
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Upload failed. Please try again.");
      return null;
    }
  };

  /* --------------------------------------------
     Avatar upload
  -------------------------------------------- */
  const handleAvatarChange = async file => {
    if (!file) return;
    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatarPreview: reader.result
        }
      });
    };
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatar: url,
          avatarPreview: url
        }
      });
    }
    setAvatarUploading(false);
  };

  /* --------------------------------------------
     Submit
  -------------------------------------------- */
  const handleContinue = () => {
    if (!attributes.branding.title?.trim()) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Please enter a store name");
      return;
    }
    onSave(attributes.branding);
    goToNextStep();
  };
  const avatarSrc = attributes.branding.avatarPreview || attributes.branding.avatar;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "step__wrapper w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.BrushIcon, {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
          className: "step__header_title",
          children: "Branding"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "step__description",
          children: "Personalize your widget appearance and profile information."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "step__content w-full max-w-[640px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "flex-1 flex flex-col",
          style: {
            padding: "24px",
            gap: "32px",
            borderRadius: "16px",
            border: "1px solid #E6EBE7",
            boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "step__content_title flex flex-row items-center",
              children: ["Store Name", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "ml-1 text-brand-700",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "Enter your store name",
              value: attributes.branding.title || "",
              onChange: val => setAttributes({
                branding: {
                  ...attributes.branding,
                  title: val
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "step__description",
              children: "This will appear at the top of your widget."
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "step__content_title",
              children: "Logo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              ref: avatarInputRef,
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              onChange: e => {
                const file = e.target.files?.[0];
                if (file) handleAvatarChange(file);
              }
            }), avatarSrc ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: avatarSrc,
                alt: "Avatar preview",
                className: "w-[96px] h-[96px] rounded-full border object-cover",
                style: {
                  opacity: avatarUploading ? 0.6 : 1
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: "servv_upload__action",
                  onClick: () => avatarInputRef.current?.click(),
                  disabled: avatarUploading,
                  children: avatarUploading ? "Uploading..." : "Change"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: "flex items-center gap-1 text-[13px] font-semibold text-red-500 cursor-pointer bg-none border-none",
                  style: {
                    background: "none",
                    border: "none"
                  },
                  onClick: () => setAttributes({
                    branding: {
                      ...attributes.branding,
                      avatar: "",
                      avatarPreview: ""
                    }
                  }),
                  disabled: avatarUploading,
                  children: "Remove"
                })]
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "servv_upload",
              onClick: () => avatarInputRef.current?.click(),
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
                  children: avatarUploading ? "Uploading..." : "Click to upload"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "servv_upload__support",
                children: "PNG or JPG up to 5MB."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "servv_upload__support",
                children: "Recommended size: 400\xD7400px."
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "servv_actions mt-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: handleContinue,
          disabled: loading || !attributes.branding.title?.trim(),
          children: loading ? "Saving..." : "Continue"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingStep);

/***/ }),

/***/ "./src/Components/Containers/InteractiveCard.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/InteractiveCard.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InteractiveCard = ({
  isPremium = false,
  background,
  onClick,
  subtitle,
  title,
  text,
  action,
  footer,
  children,
  style,
  className = "",
  selected = false
}) => {
  const computedBg = background !== null && background !== void 0 ? background : isPremium ? "#462986" : "#FFFFFF";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `relative flex flex-col rounded-2xl border p-6 flex-1 ${className}${onClick ? " cursor-pointer" : ""}`,
    style: {
      background: computedBg,
      border: selected ? "2px solid #7A5AF8" : "1px solid #E6EBE7",
      boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
      ...style
    },
    onClick: onClick,
    children: [selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-3 right-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.CheckMark, {})
    }), (subtitle || title || text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col items-center gap-2 text-center",
      children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: subtitle
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: title
      }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: text
      })]
    }), children, action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-auto pt-6",
      children: action
    }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 text-center",
      children: footer
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveCard);

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=src_Components_BrandingStep_jsx.js.map?ver=8ab53a666dc0c76b72dc