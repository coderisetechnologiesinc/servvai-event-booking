"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_PostEditor_VenueStep_jsx"],{

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

/***/ "./src/Components/PostEditor/VenueStep.jsx":
/*!*************************************************!*\
  !*** ./src/Components/PostEditor/VenueStep.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/RecurrenceRadioGroup */ "./src/Components/Controls/RecurrenceRadioGroup.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const VenueStep = ({
  attributes,
  setAttributes,
  changeStep,
  zoomConnected,
  isNew
}) => {
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.filtersList);
  const locationId = attributes?.filters?.location_id || "";
  const locationOptions = filtersList?.locations?.map(loc => ({
    value: String(loc.id),
    label: loc.name
  })) || [];
  const handleLocationChange = val => {
    setAttributes({
      filters: {
        ...(attributes.filters || {}),
        location_id: Number.parseInt(val)
      }
    });
  };
  const handleVenueChange = newVal => {
    let newEventType = 1;
    if (newVal === "offline") {
      if (attributes.meeting.recurrence) {
        newEventType = 2;
      } else {
        newEventType = 1;
      }
    } else if (newVal === "zoom") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    } else if (newVal === "hybrid") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    }
    setAttributes({
      location: newVal,
      meeting: {
        ...attributes.meeting,
        eventType: newEventType
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "step__wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MapMarkIcon, {
        className: "step__header_icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          className: "step__header_title",
          children: "Venue and Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "step__description",
          children: "Enter the event's address details"
        })]
      })]
    }), zoomConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "step__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "step__content_title",
          children: "Event type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "venue-mode",
          value: attributes.location,
          options: [{
            value: "offline",
            label: "Offline"
          }, {
            value: "zoom",
            label: "Zoom"
          }
          // { value: "hybrid", label: "Hybrid" },
          ],
          disabled: !zoomConnected || !isNew,
          onChange: handleVenueChange
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "step__content",
      children: [(attributes.location === "offline" || attributes.location === "hybrid") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "step__content_title",
          children: "Location"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          helpText: "Select location",
          value: locationId,
          options: locationOptions,
          onChange: handleLocationChange,
          iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
          style: {
            width: "100%"
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "servv_actions mt-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--secondary",
          onClick: () => changeStep("date"),
          children: "Previous"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: () => changeStep("tickets"),
          children: "Continue"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VenueStep);

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
//# sourceMappingURL=src_Components_PostEditor_VenueStep_jsx.js.map?ver=2e096865732de7292b63