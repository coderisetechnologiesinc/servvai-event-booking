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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Controls/RecurrenceRadioGroup */ "./src/Components/Controls/RecurrenceRadioGroup.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












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
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const avatarInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const bannerInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.fetchSettings);
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [bannerUploading, setBannerUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
     Gradient presets
  -------------------------------------------- */
  const gradientPresets = [{
    value: "linear-gradient(135deg, #4f46e5, #9333ea)",
    label: "Purple Blue"
  }, {
    value: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    label: "Cyan Blue"
  }, {
    value: "linear-gradient(135deg, #f97316, #ef4444)",
    label: "Orange Red"
  }, {
    value: "linear-gradient(135deg, #10b981, #059669)",
    label: "Green"
  }];

  /* --------------------------------------------
     Color presets
  -------------------------------------------- */
  const colorPresets = ["#ffffff", "#f3f4f6", "#d1d5db", "#111827", "#4338ca", "#4f46e5", "#ec4899", "#10b981"];

  /* --------------------------------------------
     Image upload helper
  -------------------------------------------- */
  const uploadImageToMediaLibrary = async file => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_10__["default"].post("/wp-json/wp/v2/media", formData, {
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
          avatar: url
        }
      });
    }
    setAvatarUploading(false);
  };

  /* --------------------------------------------
     Banner upload
  -------------------------------------------- */
  const handleBannerChange = async file => {
    if (!file) return;
    setBannerUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setAttributes({
        branding: {
          ...attributes.branding,
          bannerPreview: reader.result
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
          banner: url
        }
      });
    }
    setBannerUploading(false);
  };

  /* --------------------------------------------
     Submit
  -------------------------------------------- */
  const handleContinue = () => {
    if (!attributes.branding.title?.trim()) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Please enter a business title");
      return;
    }
    onSave(attributes.branding);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.BrushIcon, {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
          className: "step__header_title",
          children: "Event details"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "step__description",
          children: "Personalize your widget appearance and profile information."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex flex-col gap-y-[24px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Business Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            placeholder: "Enter your business name",
            value: attributes.branding.title || "",
            onChange: val => setAttributes({
              branding: {
                ...attributes.branding,
                title: val
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "step__description",
            children: "This will appear at the top of your widget."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            placeholder: "Tell visitors what you offer",
            value: attributes.branding.description || "",
            onChange: val => setAttributes({
              branding: {
                ...attributes.branding,
                description: val
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "step__description",
            children: "Keep it short and clear (1\u20132 sentences)."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Avatar"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            ref: avatarInputRef,
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => {
              const file = e.target.files?.[0];
              if (file) handleAvatarChange(file);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--secondary",
            onClick: () => avatarInputRef.current?.click(),
            disabled: avatarUploading,
            children: avatarUploading ? "Uploading..." : "Upload Avatar"
          }), (attributes.branding.avatarPreview || attributes.branding.avatar) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: attributes.branding.avatarPreview || attributes.branding.avatar,
            alt: "Avatar preview",
            className: "w-[120px] h-[120px] rounded-full border object-cover mt-3 mx-auto"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "step__description",
            children: "Recommended size: 400\xD7400px. PNG or JPG."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Banner Image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            ref: bannerInputRef,
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => {
              const file = e.target.files?.[0];
              if (file) handleBannerChange(file);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--secondary",
            onClick: () => bannerInputRef.current?.click(),
            disabled: bannerUploading,
            children: bannerUploading ? "Uploading..." : "Upload Banner"
          }), (attributes.branding.bannerPreview || attributes.branding.banner) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: attributes.branding.bannerPreview || attributes.branding.banner,
            alt: "Banner preview",
            className: "w-full h-[120px] rounded-xl border object-cover mt-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "step__description",
            children: "Recommended size: 1920\xD71080px. JPG or PNG."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Background Type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "background-type",
            value: attributes.branding.backgroundType || "color",
            options: [{
              value: "color",
              label: "Solid Color"
            }, {
              value: "gradient",
              label: "Gradient"
            }],
            onChange: val => setAttributes({
              branding: {
                ...attributes.branding,
                backgroundType: val
              }
            })
          })]
        }), attributes.branding.backgroundType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Background Color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "color",
              value: attributes.branding.backgroundColor || "#ffffff",
              onChange: e => setAttributes({
                branding: {
                  ...attributes.branding,
                  backgroundColor: e.target.value
                }
              }),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "#ffffff",
              value: attributes.branding.backgroundColor || "#ffffff",
              onChange: val => setAttributes({
                branding: {
                  ...attributes.branding,
                  backgroundColor: val
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex gap-2 flex-wrap mt-3",
            children: colorPresets.map(color => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
              type: "button",
              onClick: () => setAttributes({
                branding: {
                  ...attributes.branding,
                  backgroundColor: color
                }
              }),
              className: "w-9 h-9 rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform",
              style: {
                backgroundColor: color
              }
            }, color))
          })]
        }), attributes.branding.backgroundType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Background Gradient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: attributes.branding.backgroundGradient || gradientPresets[0].value,
            options: gradientPresets,
            helpText: "Select gradient preset",
            style: {
              width: "100%"
            },
            onChange: val => setAttributes({
              branding: {
                ...attributes.branding,
                backgroundGradient: val
              }
            }),
            iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "h-[80px] rounded-xl border border-gray-200 mt-3",
            style: {
              background: attributes.branding.backgroundGradient || gradientPresets[0].value
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "step__content_title",
            children: "Text Color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "color",
              value: attributes.branding.textColor || "#000000",
              onChange: e => setAttributes({
                branding: {
                  ...attributes.branding,
                  textColor: e.target.value
                }
              }),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              placeholder: "#000000",
              value: attributes.branding.textColor || "#000000",
              onChange: val => setAttributes({
                branding: {
                  ...attributes.branding,
                  textColor: val
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: "step__description",
            children: "Choose a color that contrasts well with your background."
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "servv_actions mt-auto",
        children: [!brandingCompleted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: handleContinue,
          disabled: loading || !attributes.branding.title?.trim(),
          children: loading ? "Saving..." : "Complete Setup"
        }), brandingCompleted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: () => {
            const siteUrl = servvData?.siteUrl || servvData?.site_url || servvData?.home_url || window.location.origin;
            window.location.href = siteUrl;
          },
          disabled: loading || avatarUploading || bannerUploading || !attributes.branding.title?.trim(),
          children: avatarUploading || bannerUploading ? "Uploading..." : loading ? "Loading..." : "View site"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingStep);

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
  error
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
          rows: textarea ? 4 : undefined
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

/***/ "./src/Components/Controls/NewSelectControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.jsx ***!
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


const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  onChange = () => {},
  iconRight = null,
  style = {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "servv-select",
    style: {
      width: "100%"
    },
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      className: "step__content_title",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `servv-select__control ${disabled ? "servv-select--disabled" : ""}`,
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
        className: "servv-select__native",
        value: value,
        onChange: e => onChange(e.target.value),
        disabled: disabled,
        children: [helpText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          disabled: true,
          children: helpText
        }), options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))]
      }), iconRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "servv-select__icon",
        children: iconRight
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSelectControl);

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
        disabled: disabled
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

/***/ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_BrandingStep_jsx.js.map?ver=1c785b6354cc21b95aa6