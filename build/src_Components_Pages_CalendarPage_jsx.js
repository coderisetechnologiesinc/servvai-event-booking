"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_CalendarPage_jsx"],{

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

/***/ "./src/Components/Containers/CollapsibleSection.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Containers/CollapsibleSection.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const CollapsibleSection = props => {
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "collapsible-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "collapsible-header",
      onClick: () => setVisible(!visible),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "collapsible-section-heading",
        children: props.sectionHeading
      }), !visible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "button-icon"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "button-icon"
      })]
    }), visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "collapsible-content",
      children: props.children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleSection);

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

/***/ "./src/Components/Controls/NewButtonGroup.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
  view
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "tabs-wrapper",
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section-description",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "tabs-container",
      children: buttons.map(button => {
        const isActive = active === button;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          type: "button",
          disabled: disabled,
          onClick: () => onChange(button),
          className: `tab-button ${isActive ? "tab-button--active" : "tab-button--inactive"} ${view ? "tab-compact" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "tab-button-text",
            children: button
          })
        }, button);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewButtonGroup);

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

/***/ "./src/Components/Pages/CalendarPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/CalendarPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/CollapsibleSection */ "./src/Components/Containers/CollapsibleSection.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Events/useEventsLogicMerged */ "./src/Components/Pages/Events/useEventsLogicMerged.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















const PERIOD_LABELS = ["Month", "Week", "Day"];
const EVENT_COLORS = [{
  bg: "rgba(240,237,255,1)",
  text: "rgba(100,70,200,1)"
}, {
  bg: "rgba(232,244,255,1)",
  text: "rgba(50,120,220,1)"
}, {
  bg: "rgba(255,243,224,1)",
  text: "rgba(200,130,30,1)"
}, {
  bg: "rgba(232,245,233,1)",
  text: "rgba(50,160,80,1)"
}];
const getEventColor = event => {
  const isOneTime = event.recurrence === "One-time";
  if (event.type === "Event") return isOneTime ? EVENT_COLORS[0] : EVENT_COLORS[1];
  return isOneTime ? EVENT_COLORS[2] : EVENT_COLORS[3];
};
const EventsCalendarPage = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_11__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_11__.useServvStore)(s => s.filtersList);
  const zoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_11__.useServvStore)(s => s.zoomAccount);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useLocation)();
  const {
    mergedList,
    mergedLoading,
    handleSetDates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied
  } = (0,_Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_12__.useEventsLogic)(settings, filtersList, zoomAccount);
  const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  const [activePeriod, setActivePeriod] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => window.innerWidth < 768 ? 2 : 0);
  const [activePopover, setActivePopover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [popoverEvent, setPopoverEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [popoverPos, setPopoverPos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const popoverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [queryValue, setQueryValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [filtersOpen, setFiltersOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getPeriodRange = (date, period) => {
    switch (period) {
      case 1:
        return {
          start: date.clone().startOf("week"),
          end: date.clone().endOf("week")
        };
      case 2:
        return {
          start: date.clone().startOf("day"),
          end: date.clone().endOf("day")
        };
      default:
        return {
          start: date.clone().startOf("month").startOf("week"),
          end: date.clone().endOf("month").endOf("week")
        };
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const initialPeriod = window.innerWidth < 768 ? 2 : 0;
    const {
      start,
      end
    } = getPeriodRange(moment__WEBPACK_IMPORTED_MODULE_1___default()(), initialPeriod);
    handleSetDates({
      startDate: start,
      endDate: end
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      start,
      end
    } = getPeriodRange(currentDate, activePeriod);
    handleSetDates({
      startDate: start,
      endDate: end
    });
  }, [currentDate, activePeriod]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!activePopover) return;
    const handleClickOutside = e => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
        setPopoverEvent(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopover]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setActivePeriod(2);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const navigatePeriod = dir => {
    const d = currentDate.clone();
    const unit = activePeriod === 0 ? "month" : activePeriod === 1 ? "week" : "day";
    dir > 0 ? d.add(1, unit) : d.subtract(1, unit);
    setCurrentDate(d);
  };
  const getTitle = () => {
    if (activePeriod === 2) return currentDate.format("DD MMM YYYY");
    if (activePeriod === 1) {
      return `${currentDate.clone().startOf("week").format("DD MMM")} – ${currentDate.clone().endOf("week").format("DD MMM YYYY")}`;
    }
    return currentDate.format("MMMM YYYY");
  };
  const filteredEvents = mergedList.filter(event => queryValue ? event.title?.toLowerCase().includes(queryValue.toLowerCase()) : true);
  const groupEventsByDate = evts => evts.reduce((acc, event) => {
    const key = moment__WEBPACK_IMPORTED_MODULE_1___default()(event._sortKey).format("YYYY-MM-DD");
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {});
  const getVisibleDays = () => {
    if (activePeriod === 1) {
      const start = currentDate.clone().startOf("week");
      return Array.from({
        length: 7
      }).map((_, i) => {
        const date = start.clone().add(i, "day");
        return {
          date,
          isCurrentMonth: true,
          isToday: date.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), "day")
        };
      });
    }
    if (activePeriod === 2) {
      return [{
        date: currentDate.clone(),
        isCurrentMonth: true,
        isToday: currentDate.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), "day")
      }];
    }
    const year = currentDate.year();
    const month = currentDate.month();
    const start = moment__WEBPACK_IMPORTED_MODULE_1___default()([year, month]).startOf("month").startOf("week");
    const end = moment__WEBPACK_IMPORTED_MODULE_1___default()([year, month]).endOf("month").endOf("week");
    const days = [];
    let d = start.clone();
    while (d.isSameOrBefore(end, "day")) {
      days.push({
        date: d.clone(),
        isCurrentMonth: d.month() === month,
        isToday: d.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), "day")
      });
      d.add(1, "day");
    }
    return days;
  };
  const getMeetingURL = postId => {
    fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => open(post.link, "_blank")).catch(e => console.error(e));
  };
  const handleOpenEvent = meeting => {
    const pathType = meeting.type === "Zoom" ? "zoom" : "offline";
    let url = `/events/${pathType}/${meeting.id}`;
    if (meeting.occurrence_id) url += `?occurrence_id=${meeting.occurrence_id}`;
    if (meeting.registrants_view && !meeting.occurrence_id) url += `?registrants=true`;else if (meeting.registrants_view && meeting.occurrence_id) url += `&registrants=true`;
    navigate(url, {
      state: {
        from: location.pathname
      }
    });
  };
  const handleEventClick = (e, event) => {
    var _event$occurrence_id;
    const id = (_event$occurrence_id = event.occurrence_id) !== null && _event$occurrence_id !== void 0 ? _event$occurrence_id : event.id;
    if (activePopover === id) {
      setActivePopover(null);
      setPopoverEvent(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPos({
      x: Math.min(rect.left, window.innerWidth - 320),
      y: rect.bottom + 4
    });
    setActivePopover(id);
    setPopoverEvent(event);
  };
  const renderDayEvents = dayEvents => {
    if (mergedLoading) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "animate-pulse space-y-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "h-4 bg-gray-100 rounded"
        })
      });
    }
    if (activePeriod === 2 && dayEvents.length === 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-xs text-gray-400 text-center py-6",
        children: "No events for this date"
      });
    }
    return dayEvents.map(event => {
      var _event$occurrence_id2;
      const id = (_event$occurrence_id2 = event.occurrence_id) !== null && _event$occurrence_id2 !== void 0 ? _event$occurrence_id2 : event.id;
      const color = getEventColor(event);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "cal-event-badge text-[10px] md:text-xs",
        style: {
          background: color.bg,
          color: color.text
        },
        onClick: e => handleEventClick(e, event),
        title: event.title,
        children: event.title
      }, id);
    });
  };
  const renderCalendar = () => {
    const days = getVisibleDays();
    const eventsByDate = groupEventsByDate(filteredEvents);
    const weekdays = moment__WEBPACK_IMPORTED_MODULE_1___default().weekdaysShort();
    const isDay = activePeriod === 2;
    const isMonth = activePeriod === 0;
    const columns = isDay ? 1 : 7;
    const cellHeight = isMonth ? "80px" : "400px";
    const scrollHeight = isMonth ? "75px" : "395px";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "cal-grid",
      style: {
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      },
      children: [!isDay && weekdays.map(day => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "cal-weekday-cell",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "cal-weekday-label text-[10px] md:text-xs",
          children: day
        })
      }, day)), days.map(({
        date,
        isCurrentMonth,
        isToday
      }) => {
        const dayKey = date.format("YYYY-MM-DD");
        const dayEvents = eventsByDate[dayKey] || [];
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "cal-day-cell",
          style: {
            minHeight: cellHeight,
            opacity: isMonth && !isCurrentMonth ? 0.4 : 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: `cal-day-number${isToday ? " cal-day-number--today" : ""}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
              className: "cal-day-num-text text-[10px] md:text-xs",
              style: {
                fontWeight: isToday ? 600 : 400
              },
              children: date.date()
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "cal-day-scroll",
            style: {
              maxHeight: scrollHeight
            },
            children: renderDayEvents(dayEvents)
          })]
        }, dayKey);
      })]
    });
  };
  const renderEventPopover = () => {
    if (!activePopover || !popoverEvent) return null;
    const event = popoverEvent;
    const isOneTime = event.recurrence === "One-time";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      ref: popoverRef,
      className: "cal-popover bg-white border border-gray-200 rounded-xl shadow-lg p-4",
      style: {
        top: popoverPos.y,
        left: popoverPos.x
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex justify-between items-start mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "font-semibold text-sm cursor-pointer hover:text-purple-600 leading-snug pr-2",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id
          }),
          children: event.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          onClick: () => {
            setActivePopover(null);
            setPopoverEvent(null);
          },
          className: "text-gray-400 hover:text-gray-600 flex-shrink-0 text-base leading-none",
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "text-xs text-gray-500 mb-3 flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
            d: "M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5S14.5 11.59 14.5 8 11.59 1.5 8 1.5zm.5 7H5.5V7h2V4.5h1V8.5z",
            fill: "currentColor"
          })
        }), event.time]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "mb-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: `inline-flex items-center text-xs px-2 py-1 rounded-full font-medium ${isOneTime ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`,
          children: event.recurrence
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          className: "event-action-btn view",
          title: "View event",
          onClick: () => getMeetingURL(event.post_id),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "event-action-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          className: "event-action-btn edit",
          title: "View registrants",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id,
            registrants_view: true
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"], {
            className: "event-action-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          className: "event-action-btn edit",
          title: "Edit event",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "event-action-icon"
          })
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    withBackground: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "dashboard-card cal-card rounded-md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "servv-dashboard-header main-dashboard cal-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "dashboard-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h1", {
            className: "dashboard-title",
            children: "Events Calendar"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "header-line cal-divider"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "cal-controls",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "cal-search-wrap w-full md:w-auto order-2 md:order-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            placeholder: "Search events...",
            value: queryValue,
            onChange: setQueryValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "cal-nav order-1 md:order-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
            type: "button",
            className: "cal-nav-btn",
            onClick: () => navigatePeriod(-1),
            children: "\u2039"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
            className: "cal-nav-title",
            children: getTitle()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
            type: "button",
            className: "cal-nav-btn",
            onClick: () => navigatePeriod(1),
            children: "\u203A"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "cal-right-group justify-between md:justify-start order-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              buttons: PERIOD_LABELS,
              active: PERIOD_LABELS[activePeriod],
              onChange: label => setActivePeriod(PERIOD_LABELS.indexOf(label))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "servv-dahboard-dropdown",
            activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
              type: "button",
              className: "filter-button",
              onClick: () => setFiltersOpen(p => !p),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 17 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "filter-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("path", {
                  d: "M3.33594 5.83502H13.3359M0.835938 0.835022H15.8359M5.83594 10.835H10.8359",
                  stroke: "currentColor",
                  strokeWidth: "1.67",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                children: "Filters"
              })]
            }),
            status: filtersOpen,
            onClose: () => setFiltersOpen(false),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
              gap: 4,
              children: [Object.keys(filtersList).map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
                sectionHeading: filter.charAt(0).toUpperCase() + filter.slice(1),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  gap: 2,
                  children: filtersList[filter].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    label: item.name,
                    checked: selectedFilters[filter]?.includes(item.id) || false,
                    onChange: () => handleFilterSelect(filter, item.id),
                    font: "text-sm",
                    color: "text-gray-600"
                  }, item.id))
                })
              }, filter)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
                text: "Apply",
                type: "primary",
                justify: "justify-center",
                onAction: () => setFiltersOpen(false)
              }), isFiltersApplied() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
                text: "Clear filters",
                type: "secondary",
                justify: "justify-center",
                onAction: () => {
                  resetFilters();
                  setFiltersOpen(false);
                }
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isLoading: mergedLoading,
        children: renderCalendar()
      })]
    }), renderEventPopover()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsCalendarPage);

/***/ }),

/***/ "./src/Components/Pages/Events/useEventsLogicMerged.js":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Events/useEventsLogicMerged.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsLogic: () => (/* binding */ useEventsLogic)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");








const useEventsLogic = (settings, filtersList, zoomAccount) => {
  const PAGE_SIZE = 10;
  const isZoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.zoomConnected);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const syncAccountsAfterEvents = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncAccountsAfterEvents);
  const syncFiltersFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncFiltersFromServer);
  const setDatePreset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(1);
  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isPast, setIsPast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventType, setEventType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const [dateSelected, setDateSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: null,
    endDate: null
  });
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedFilters, setSelectedFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [meetingsList, setMeetingsList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [eventOccurrencess, setEventOccurrencess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [occurrencesPagination, setOccurrencesPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mergedList, setMergedList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [mergedPagination, setMergedPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [mergedLoading, setMergedLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("events");
  const [selectedEvent, setSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedOccurrence, setSelectedOccurrence] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    meeting: {},
    product: {},
    notifications: {},
    tickets: []
  });
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hh:mm a");
  const [timezone, setTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("US/Pacific");
  const [showError, setShowError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // =====================================================================
  // HELPERS
  // =====================================================================

  const getFilteringParameterName = type => {
    switch (type) {
      case "locations":
        return "location_id";
      case "languages":
        return "language_id";
      case "categories":
        return "category_id";
      case "members":
        return "member_id";
      default:
        return null;
    }
  };
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList[zone]
  })), []);
  const normalizeDate = d => {
    if (!d) return null;
    if (moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().isMoment(d)) return d;
    if (d instanceof Date) return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(d);
    return null;
  };
  const resetFilters = () => {
    setSearchString("");
    setDates({
      startDate: null,
      endDate: null
    });
    setSelectedFilters({});
  };
  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate && dateSelected) return true;
    return Object.values(selectedFilters).some(arr => arr.length > 0);
  };
  const handleFilterSelect = (filter, id) => {
    setSelectedFilters(prev => {
      const updated = {
        ...prev
      };
      if (!updated[filter]) {
        updated[filter] = [id];
      } else if (updated[filter].includes(id)) {
        updated[filter] = updated[filter].filter(i => i !== id);
      } else {
        updated[filter].push(id);
      }
      return updated;
    });
  };
  const handleEventChange = newAttr => {
    setAttributes(prev => ({
      ...prev,
      ...newAttr
    }));
  };

  // =====================================================================
  // DATE HELPERS
  // =====================================================================

  const handleSetDates = (dates, isDefault) => {
    const start = normalizeDate(dates.startDate);
    const end = normalizeDate(dates.endDate);
    const startDate = start ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz({
      year: start.year(),
      month: start.month(),
      day: start.date(),
      hour: 0,
      minute: 0,
      second: 0
    }, timezone.id) : null;
    const endDate = end ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz({
      year: end.year(),
      month: end.month(),
      day: end.date(),
      hour: 23,
      minute: 59,
      second: 0
    }, timezone.id) : null;
    if ((startDate || endDate) && setDatePreset.current > 1) {
      setDateSelected(true);
    } else if (!startDate && !endDate) {
      setDateSelected(false);
    }
    setDates({
      startDate,
      endDate
    });
  };
  const applyDatePreset = dates => {
    handleSetDates(dates);
    setDatePreset.current = 2;
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    }
  };

  // =====================================================================
  // SEARCH
  // =====================================================================

  const handleSearchSubmit = value => {
    setSearchString(value);
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    }
  };

  // =====================================================================
  // NAVIGATION
  // =====================================================================

  const handleOpenEvent = selected => {
    const {
      id,
      occurrence_id,
      type
    } = selected;
    const pathType = type === "Zoom" ? "zoom" : eventType === "all" ? "offline" : eventType;
    if (occurrence_id) {
      navigate(`/events/${pathType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${pathType}/${id}`);
    }
  };

  // =====================================================================
  // URL BUILDER
  // =====================================================================

  const buildEventsUrl = ({
    type,
    page,
    pageSize = PAGE_SIZE,
    is_Past,
    search,
    datesObj,
    filtersObj
  }) => {
    let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=${pageSize}&page=${page}&without_occurrences=true`;
    if (!is_Past && search) url += `&search=${search}`;
    if (!is_Past && datesObj?.startDate && datesObj?.endDate) {
      url += `&start_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(datesObj.startDate).format("YY-MM-DD HH:mm:ss")}` + `&end_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(datesObj.endDate).format("YY-MM-DD HH:mm:ss")}`;
    }
    if (!is_Past && filtersObj) {
      Object.entries(filtersObj).forEach(([group, ids]) => {
        const param = getFilteringParameterName(group);
        if (!param) return;
        ids.forEach(id => url += `&${param}=${id}`);
      });
    }
    if (is_Past) url += `&is_past=1`;
    return url;
  };

  // =====================================================================
  // ROW MAPPER
  // =====================================================================

  const mapEventRows = (meetings, type, is_Past) => (meetings || []).map(m => {
    const dt = m.start_time ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone) : null;
    return {
      id: m.id,
      occurrence_id: m.occurrence_id,
      title: m.topic || "(No title)",
      post_id: m.shop_post_object_id,
      date: dt ? dt.format("MMM DD, YYYY") : null,
      time: dt ? dt.format("hh:mm a") : null,
      _sortKey: dt ? dt.valueOf() : 0,
      timezone: m.timezone,
      location: m.location || "",
      type: type === "offline" ? "Event" : "Zoom",
      recurrence: m.type === 2 && type === "offline" || m.type === 8 && type === "zoom" ? "Recurring" : "One-time",
      status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale"
    };
  });

  // =====================================================================
  // MAIN FETCH — SINGLE TYPE (offline | zoom)
  // =====================================================================

  const syncedAfterEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  stateRef.current = {
    eventType,
    isPast,
    searchString,
    dates,
    selectedFilters,
    settings,
    isZoomConnected
  };
  const getEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    type,
    is_Past,
    search,
    datesObj,
    filtersObj
  } = {}) => {
    var _type, _is_Past, _search, _datesObj, _filtersObj;
    const s = stateRef.current;
    type = (_type = type) !== null && _type !== void 0 ? _type : s.eventType;
    is_Past = (_is_Past = is_Past) !== null && _is_Past !== void 0 ? _is_Past : s.isPast;
    search = (_search = search) !== null && _search !== void 0 ? _search : s.searchString;
    datesObj = (_datesObj = datesObj) !== null && _datesObj !== void 0 ? _datesObj : s.dates;
    filtersObj = (_filtersObj = filtersObj) !== null && _filtersObj !== void 0 ? _filtersObj : s.selectedFilters;
    if (!s.settings) return;
    setLoading(true);
    try {
      const url = buildEventsUrl({
        type,
        page,
        is_Past,
        search,
        datesObj,
        filtersObj
      });
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = mapEventRows(res.data.meetings, type, is_Past);
      setMeetingsList(rows);
      setFirstFetchDone(true);
      setPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching events");
    } finally {
      setFirstFetchDone(true);
      setLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // MERGED FETCH — offline always, zoom only if isZoomConnected
  // =====================================================================

  const getMergedEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    is_Past,
    search,
    datesObj,
    filtersObj
  } = {}) => {
    var _is_Past2, _search2, _datesObj2, _filtersObj2;
    const s = stateRef.current;
    is_Past = (_is_Past2 = is_Past) !== null && _is_Past2 !== void 0 ? _is_Past2 : s.isPast;
    search = (_search2 = search) !== null && _search2 !== void 0 ? _search2 : s.searchString;
    datesObj = (_datesObj2 = datesObj) !== null && _datesObj2 !== void 0 ? _datesObj2 : s.dates;
    filtersObj = (_filtersObj2 = filtersObj) !== null && _filtersObj2 !== void 0 ? _filtersObj2 : s.selectedFilters;
    if (!s.settings) return;
    setMergedLoading(true);
    const headers = {
      "X-WP-Nonce": servvData.nonce
    };
    const ITEMS_PER_TYPE = 5;
    const TARGET = PAGE_SIZE; // 10 total

    try {
      var _offlineRes$data$meet, _zoomRes$data$meeting, _offlineRes$data$tota, _zoomRes$data$total_r;
      // ── STEP 1: fetch from both endpoints ─────────────────────────────────
      // if zoom not connected, fetch full TARGET from offline right away
      const offlinePageSize = s.isZoomConnected ? ITEMS_PER_TYPE : TARGET;
      const [offlineRes, zoomRes] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
        type: "offline",
        page,
        pageSize: offlinePageSize,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }), s.isZoomConnected ? axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
        type: "zoom",
        page,
        pageSize: ITEMS_PER_TYPE,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }) : Promise.resolve(null)]);
      let offlineMeetings = (_offlineRes$data$meet = offlineRes.data.meetings) !== null && _offlineRes$data$meet !== void 0 ? _offlineRes$data$meet : [];
      let zoomMeetings = zoomRes ? (_zoomRes$data$meeting = zoomRes.data.meetings) !== null && _zoomRes$data$meeting !== void 0 ? _zoomRes$data$meeting : [] : [];
      const offlineTotal = (_offlineRes$data$tota = offlineRes.data.total_records) !== null && _offlineRes$data$tota !== void 0 ? _offlineRes$data$tota : 0;
      const zoomTotal = zoomRes ? (_zoomRes$data$total_r = zoomRes.data.total_records) !== null && _zoomRes$data$total_r !== void 0 ? _zoomRes$data$total_r : 0 : 0;

      // ── STEP 2: balance — only needed when zoom is connected ───────────────
      if (s.isZoomConnected) {
        const offlineGot = offlineMeetings.length;
        const zoomGot = zoomMeetings.length;
        const deficit = TARGET - (offlineGot + zoomGot);
        if (deficit > 0) {
          if (offlineGot < ITEMS_PER_TYPE && zoomGot >= ITEMS_PER_TYPE) {
            var _extraZoomRes$data$me;
            // offline ran short, top up from zoom
            const extraZoomRes = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
              type: "zoom",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            zoomMeetings = (_extraZoomRes$data$me = extraZoomRes.data.meetings) !== null && _extraZoomRes$data$me !== void 0 ? _extraZoomRes$data$me : [];
          } else if (zoomGot < ITEMS_PER_TYPE && offlineGot >= ITEMS_PER_TYPE) {
            var _extraOfflineRes$data;
            // zoom ran short, top up from offline
            const extraOfflineRes = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(buildEventsUrl({
              type: "offline",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            offlineMeetings = (_extraOfflineRes$data = extraOfflineRes.data.meetings) !== null && _extraOfflineRes$data !== void 0 ? _extraOfflineRes$data : [];
          }
        }
      }

      // ── STEP 3: map, merge, sort ───────────────────────────────────────────
      const allOffline = mapEventRows(offlineMeetings, "offline", is_Past);
      const allZoom = mapEventRows(zoomMeetings, "zoom", is_Past);
      const merged = [...allOffline, ...allZoom].sort((a, b) => is_Past ? b._sortKey - a._sortKey : a._sortKey - b._sortKey);

      // ── STEP 4: pagination — based on server totals ────────────────────────
      const totalItems = offlineTotal + zoomTotal;
      const totalPages = Math.max(1, Math.ceil(totalItems / TARGET));
      const safePage = Math.min(Math.max(1, page), totalPages);
      setMergedList(merged);
      setMergedPagination({
        pageNumber: safePage,
        pageCount: totalPages,
        totalItems
      });
      setFirstFetchDone(true);
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching merged events");
    } finally {
      setMergedLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, []);

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (event, page = 1) => {
    const s = stateRef.current;
    if (!s.settings) return;
    setLoading(true);
    try {
      var _res$data$meetings;
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = ((_res$data$meetings = res.data.meetings) !== null && _res$data$meetings !== void 0 ? _res$data$meetings : []).map(m => {
        const dt = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone);
        return {
          id: m.id,
          occurrence_id: m.occurrence_id,
          title: m.topic || "(No title)",
          post_id: m.shop_post_object_id,
          timezone: m.timezone,
          date: dt.format("MMM DD, YYYY"),
          time: dt.format("hh:mm a"),
          location: m.location || "",
          type: eventType === "offline" ? "Event" : "Zoom",
          recurrence: m.type === 2 && eventType === "offline" ? "One-time" : "Recurring",
          status: isPast ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
          tickets: "0/0"
        };
      });
      setEventOccurrencess(rows || []);
      setSelectedEventForOccurrences(event);
      setView("occurrences");
      setOccurrencesPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Error fetching occurrences.");
    } finally {
      setLoading(false);
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // DELETE
  // =====================================================================

  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) url += `?occurrence_id=${occurrenceID}`;
    await (0,axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
      url,
      method: "DELETE",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (occurrenceID) {
      setEventOccurrencess(prev => prev.filter(o => o.occurrence_id !== occurrenceID));
      if (selectedEventForOccurrences) {
        var _occurrencesPaginatio;
        await getEventOccurrencess(selectedEventForOccurrences, (_occurrencesPaginatio = occurrencesPagination.pageNumber) !== null && _occurrencesPaginatio !== void 0 ? _occurrencesPaginatio : 1);
      }
    } else {
      if (eventType === "all") getMergedEventsList();else getEventsList();
    }
  };
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => ({
      id: event.post_id,
      occurrenceId: event.occurrence_id
    }));
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // =====================================================================
  // EFFECTS
  // =====================================================================

  const lastFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shouldFetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _s$dates$startDate$va, _s$dates$endDate$valu;
    const s = stateRef.current;
    if (!s.settings) return false;
    const next = {
      eventType: s.eventType,
      isPast: s.isPast,
      startDate: (_s$dates$startDate$va = s.dates.startDate?.valueOf()) !== null && _s$dates$startDate$va !== void 0 ? _s$dates$startDate$va : null,
      endDate: (_s$dates$endDate$valu = s.dates.endDate?.valueOf()) !== null && _s$dates$endDate$valu !== void 0 ? _s$dates$endDate$valu : null,
      filters: JSON.stringify(s.selectedFilters),
      isZoomConnected: s.isZoomConnected // re-fetch if zoom connection changes
    };
    const prev = lastFetchedRef.current;
    if (prev && prev.eventType === next.eventType && prev.isPast === next.isPast && prev.startDate === next.startDate && prev.endDate === next.endDate && prev.filters === next.filters && prev.isZoomConnected === next.isZoomConnected) return false;
    lastFetchedRef.current = next;
    return true;
  }, []);
  const doFetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const s = stateRef.current;
    if (s.eventType === "all") {
      getMergedEventsList({
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters
      });
    } else {
      getEventsList({
        type: s.eventType,
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters
      });
    }
  }, [getMergedEventsList, getEventsList]);

  // 1) INITIAL LOAD
  const initialLoadDoneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings || initialLoadDoneRef.current) return;
    initialLoadDoneRef.current = true;
    shouldFetch();
    doFetch();
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // 2) FILTER / TYPE / ZOOM CONNECTION CHANGES
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!initialLoadDoneRef.current) return;
    if (!shouldFetch()) return;
    doFetch();
  }, [isPast, eventType, dates.startDate?.valueOf(), dates.endDate?.valueOf(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(selectedFilters), isZoomConnected // re-fetch when zoom connects/disconnects
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  // 3) TOAST ERRORS
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showError) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(showError);
  }, [showError]);

  // 4) TIME FORMAT & TIMEZONE — runs once
  const settingsAppliedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings || settingsAppliedRef.current) return;
    settingsAppliedRef.current = true;
    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");else setTimeFormat("hh:mm a");
    let tzGuess = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find(z => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // =====================================================================
  // EXPOSE
  // =====================================================================

  return {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    handleIsPastChange: () => setIsPast(p => !p),
    handleTypeChange: t => setEventType(t),
    handleSetDates,
    applyDatePreset,
    handleSearchChange: setSearchString,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError: err => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () => pagination.pageNumber > 1 && getEventsList({
      page: pagination.pageNumber - 1
    }),
    handleGetNextPage: () => pagination.pageNumber < pagination.pageCount && getEventsList({
      page: pagination.pageNumber + 1
    }),
    handleGetPrevMergedPage: () => mergedPagination.pageNumber > 1 && getMergedEventsList({
      page: mergedPagination.pageNumber - 1
    }),
    handleGetNextMergedPage: () => mergedPagination.pageNumber < mergedPagination.pageCount && getMergedEventsList({
      page: mergedPagination.pageNumber + 1
    }),
    handleGetPrevOccurrencessPage: () => occurrencesPagination.pageNumber > 1 && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber - 1),
    handleGetNextOccurrencessPage: () => occurrencesPagination.pageNumber < occurrencesPagination.pageCount && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber + 1),
    handleEventDelete,
    handleMultipleEventsDelete,
    selectedEvents,
    setSelectedEvents,
    dateSelected
  };
};

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
        children: props.loading && !props.withoutSpinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SpinnerLoader = ({
  isLoading,
  children,
  customStyling
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: isLoading ? "blur-sm pointer-events-none" : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `absolute inset-0 flex items-center justify-center ${customStyling}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

/***/ }),

/***/ "./src/utilities/timezones.js":
/*!************************************!*\
  !*** ./src/utilities/timezones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   timezonesList: () => (/* binding */ timezonesList)
/* harmony export */ });
const timezones = [{
  zone: "Pacific/Midway",
  gmt: "(GMT-11:00)",
  name: "Midway Island"
}, {
  zone: "US/Samoa",
  gmt: "(GMT-11:00)",
  name: "Samoa"
}, {
  zone: "US/Hawaii",
  gmt: "(GMT-10:00)",
  name: "Hawaii"
}, {
  zone: "US/Alaska",
  gmt: "(GMT-09:00)",
  name: "Alaska"
}, {
  zone: "US/Pacific",
  gmt: "(GMT-08:00)",
  name: "Pacific Time (US and Canada)"
}, {
  zone: "America/Tijuana",
  gmt: "(GMT-08:00)",
  name: "Tijuana"
}, {
  zone: "US/Arizona",
  gmt: "(GMT-07:00)",
  name: "Arizona"
}, {
  zone: "US/Mountain",
  gmt: "(GMT-07:00)",
  name: "Mountain Time (US and Canada)"
}, {
  zone: "America/Chihuahua",
  gmt: "(GMT-07:00)",
  name: "Chihuahua"
}, {
  zone: "America/Mazatlan",
  gmt: "(GMT-07:00)",
  name: "Mazatlan"
}, {
  zone: "America/Mexico_City",
  gmt: "(GMT-06:00)",
  name: "Mexico City"
}, {
  zone: "America/Monterrey",
  gmt: "(GMT-06:00)",
  name: "Monterrey"
}, {
  zone: "Canada/Saskatchewan",
  gmt: "(GMT-06:00)",
  name: "Saskatchewan"
}, {
  zone: "US/Central",
  gmt: "(GMT-06:00)",
  name: "Central Time (US and Canada)"
}, {
  zone: "US/Eastern",
  gmt: "(GMT-05:00)",
  name: "Eastern Time (US and Canada)"
}, {
  zone: "US/East-Indiana",
  gmt: "(GMT-05:00)",
  name: "Indiana (East)"
}, {
  zone: "America/Bogota",
  gmt: "(GMT-05:00)",
  name: "Bogota"
}, {
  zone: "America/Lima",
  gmt: "(GMT-05:00)",
  name: "Lima"
}, {
  zone: "America/Caracas",
  gmt: "(GMT-04:30)",
  name: "Caracas"
}, {
  zone: "Canada/Atlantic",
  gmt: "(GMT-04:00)",
  name: "Atlantic Time (Canada)"
}, {
  zone: "America/La_Paz",
  gmt: "(GMT-04:00)",
  name: "La_Paz"
}, {
  zone: "America/Santiago",
  gmt: "(GMT-04:00)",
  name: "Santiago"
}, {
  zone: "Canada/Newfoundland",
  gmt: "(GMT-03:30)",
  name: "Newfoundland"
}, {
  zone: "America/Buenos_Aires",
  gmt: "(GMT-03:00)",
  name: "Buenos Aires"
}, {
  zone: "Greenland",
  gmt: "(GMT-03:00)",
  name: "Greenland"
}, {
  zone: "Atlantic/Stanley",
  gmt: "(GMT-02:00)",
  name: "Stanley"
}, {
  zone: "Atlantic/Azores",
  gmt: "(GMT-01:00)",
  name: "Azores"
}, {
  zone: "Atlantic/Cape_Verde",
  gmt: "(GMT-01:00)",
  name: "Cape Verde Is."
}, {
  zone: "Africa/Casablanca",
  gmt: "(GMT)",
  name: "Casablanca"
}, {
  zone: "Europe/Dublin",
  gmt: "(GMT)",
  name: "Dublin"
}, {
  zone: "Europe/Lisbon",
  gmt: "(GMT)",
  name: "Libson"
}, {
  zone: "Europe/London",
  gmt: "(GMT)",
  name: "London"
}, {
  zone: "Africa/Monrovia",
  gmt: "(GMT)",
  name: "Monrovia"
}, {
  zone: "Europe/Amsterdam",
  gmt: "(GMT+01:00)",
  name: "Amsterdam"
}, {
  zone: "Europe/Belgrade",
  gmt: "(GMT+01:00)",
  name: "Belgrade"
}, {
  zone: "Europe/Berlin",
  gmt: "(GMT+01:00)",
  name: "Berlin"
}, {
  zone: "Europe/Bratislava",
  gmt: "(GMT+01:00)",
  name: "Bratislava"
}, {
  zone: "Europe/Brussels",
  gmt: "(GMT+01:00)",
  name: "Brussels"
}, {
  zone: "Europe/Budapest",
  gmt: "(GMT+01:00)",
  name: "Budapest"
}, {
  zone: "Europe/Copenhagen",
  gmt: "(GMT+01:00)",
  name: "Copenhagen"
}, {
  zone: "Europe/Ljubljana",
  gmt: "(GMT+01:00)",
  name: "Ljubljana"
}, {
  zone: "Europe/Madrid",
  gmt: "(GMT+01:00)",
  name: "Madrid"
}, {
  zone: "Europe/Paris",
  gmt: "(GMT+01:00)",
  name: "Paris"
}, {
  zone: "Europe/Prague",
  gmt: "(GMT+01:00)",
  name: "Prague"
}, {
  zone: "Europe/Rome",
  gmt: "(GMT+01:00)",
  name: "Rome"
}, {
  zone: "Europe/Sarajevo",
  gmt: "(GMT+01:00)",
  name: "Sarajevo"
}, {
  zone: "Europe/Skopje",
  gmt: "(GMT+01:00)",
  name: "Skopje"
}, {
  zone: "Europe/Stockholm",
  gmt: "(GMT+01:00)",
  name: "Stockholm"
}, {
  zone: "Europe/Vienna",
  gmt: "(GMT+01:00)",
  name: "Vienna"
}, {
  zone: "Europe/Warsaw",
  gmt: "(GMT+01:00)",
  name: "Warsaw"
}, {
  zone: "Europe/Zagreb",
  gmt: "(GMT+01:00)",
  name: "Zagreb"
}, {
  zone: "Europe/Athens",
  gmt: "(GMT+02:00)",
  name: "Athens"
}, {
  zone: "Europe/Bucharest",
  gmt: "(GMT+02:00)",
  name: "Bucharest"
}, {
  zone: "Africa/Cairo",
  gmt: "(GMT+02:00)",
  name: "Cairo"
}, {
  zone: "Africa/Harare",
  gmt: "(GMT+02:00)",
  name: "Harere"
}, {
  zone: "Europe/Helsinki",
  gmt: "(GMT+02:00)",
  name: "Helsinki"
}, {
  zone: "Europe/Istanbul",
  gmt: "(GMT+02:00)",
  name: "Istanbul"
}, {
  zone: "Asia/Jerusalem",
  gmt: "(GMT+02:00)",
  name: "Jerusalem"
}, {
  zone: "Europe/Kiev",
  gmt: "(GMT+02:00)",
  name: "Kiev"
}, {
  zone: "Europe/Minsk",
  gmt: "(GMT+02:00)",
  name: "Minsk"
}, {
  zone: "Europe/Riga",
  gmt: "(GMT+02:00)",
  name: "Riga"
}, {
  zone: "Europe/Sofia",
  gmt: "(GMT+02:00)",
  name: "Sofia"
}, {
  zone: "Europe/Tallinn",
  gmt: "(GMT+02:00)",
  name: "Tallinn"
}, {
  zone: "Europe/Vilnius",
  gmt: "(GMT+02:00)",
  name: "Vilnius"
}, {
  zone: "Asia/Baghdad",
  gmt: "(GMT+03:00)",
  name: "Baghdad"
}, {
  zone: "Asia/Kuwait",
  gmt: "(GMT+03:00)",
  name: "Kuwait"
}, {
  zone: "Africa/Nairobi",
  gmt: "(GMT+03:00)",
  name: "Nairobi"
}, {
  zone: "Asia/Riyadh",
  gmt: "(GMT+03:00)",
  name: "Riyadh"
}, {
  zone: "Asia/Tehran",
  gmt: "(GMT+03:30)",
  name: "Tehran"
}, {
  zone: "Europe/Moscow",
  gmt: "(GMT+04:00)",
  name: "Moscow"
}, {
  zone: "Asia/Baku",
  gmt: "(GMT+04:00)",
  name: "Baku"
}, {
  zone: "Europe/Volgograd",
  gmt: "(GMT+04:00)",
  name: "Volgograd"
}, {
  zone: "Asia/Muscat",
  gmt: "(GMT+04:00)",
  name: "Muscat"
}, {
  zone: "Asia/Tbilisi",
  gmt: "(GMT+04:00)",
  name: "Tbilisi"
}, {
  zone: "Asia/Yerevan",
  gmt: "(GMT+04:00)",
  name: "Yerevan"
}, {
  zone: "Asia/Kabul",
  gmt: "(GMT+04:30)",
  name: "Kabul"
}, {
  zone: "Asia/Karachi",
  gmt: "(GMT+05:00)",
  name: "Karachi"
}, {
  zone: "Asia/Tashkent",
  gmt: "(GMT+05:00)",
  name: "Tashkent"
}, {
  zone: "Asia/Kolkata",
  gmt: "(GMT+05:30)",
  name: "Kolkata"
}, {
  zone: "Asia/Kathmandu",
  gmt: "(GMT+05:45)",
  name: "Kathmandu"
}, {
  zone: "Asia/Yekaterinburg",
  gmt: "(GMT+06:00)",
  name: "Yekaterinburg"
}, {
  zone: "Asia/Almaty",
  gmt: "(GMT+06:00)",
  name: "Almaty"
}, {
  zone: "Asia/Dhaka",
  gmt: "(GMT+06:00)",
  name: "Dhaka"
}, {
  zone: "Asia/Novosibirsk",
  gmt: "(GMT+07:00)",
  name: "Novosibirsk"
}, {
  zone: "Asia/Bangkok",
  gmt: "(GMT+07:00)",
  name: "Bangkok"
}, {
  zone: "Asia/Jakarta",
  gmt: "(GMT+07:00)",
  name: "Jakarta"
}, {
  zone: "Asia/Krasnoyarsk",
  gmt: "(GMT+08:00)",
  name: "Krasnoyarsk"
}, {
  zone: "Asia/Chongqing",
  gmt: "(GMT+08:00)",
  name: "Chongqing"
}, {
  zone: "Asia/Hong_Kong",
  gmt: "(GMT+08:00)",
  name: "Hong Kong"
}, {
  zone: "Asia/Kuala_Lumpur",
  gmt: "(GMT+08:00)",
  name: "Kuala Lumpur"
}, {
  zone: "Australia/Perth",
  gmt: "(GMT+08:00)",
  name: "Perth"
}, {
  zone: "Asia/Singapore",
  gmt: "(GMT+08:00)",
  name: "Singapore"
}, {
  zone: "Asia/Taipei",
  gmt: "(GMT+08:00)",
  name: "Taipei"
}, {
  zone: "Asia/Ulaanbaatar",
  gmt: "(GMT+08:00)",
  name: "Ulaan Bataar"
}, {
  zone: "Asia/Urumqi",
  gmt: "(GMT+08:00)",
  name: "Urumqi"
}, {
  zone: "Asia/Irkutsk",
  gmt: "(GMT+09:00)",
  name: "Irkutsk"
}, {
  zone: "Asia/Seoul",
  gmt: "(GMT+09:00)",
  name: "Seoul"
}, {
  zone: "Asia/Tokyo",
  gmt: "(GMT+09:00)",
  name: "Tokyo"
}, {
  zone: "Australia/Adelaide",
  gmt: "(GMT+09:30)",
  name: "Adelaide"
}, {
  zone: "Australia/Darwin",
  gmt: "(GMT+09:30)",
  name: "Darwin"
}, {
  zone: "Asia/Yakutsk",
  gmt: "(GMT+10:00)",
  name: "Yakutsk"
}, {
  zone: "Australia/Brisbane",
  gmt: "(GMT+10:00)",
  name: "Brisbane"
}, {
  zone: "Australia/Canberra",
  gmt: "(GMT+10:00)",
  name: "Canberra"
}, {
  zone: "Pacific/Guam",
  gmt: "(GMT+10:00)",
  name: "Guam"
}, {
  zone: "Australia/Hobart",
  gmt: "(GMT+10:00)",
  name: "Hobart"
}, {
  zone: "Australia/Melbourne",
  gmt: "(GMT+10:00)",
  name: "Melbourne"
}, {
  zone: "Pacific/Port_Moresby",
  gmt: "(GMT+10:00)",
  name: "Port Moresby"
}, {
  zone: "Australia/Sydney",
  gmt: "(GMT+10:00)",
  name: "Sydney"
}, {
  zone: "Asia/Vladivostok",
  gmt: "(GMT+11:00)",
  name: "Vladivostok"
}, {
  zone: "Asia/Magadan",
  gmt: "(GMT+12:00)",
  name: "Magadan"
}, {
  zone: "Pacific/Auckland",
  gmt: "(GMT+12:00)",
  name: "Auckland"
}, {
  zone: "Pacific/Fiji",
  gmt: "(GMT+12:00)",
  name: "Fiji"
}];
const timezonesList = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Pago_Pago": "Pago Pago",
  "Pacific/Honolulu": "Hawaii",
  "America/Anchorage": "Alaska",
  "America/Vancouver": "Vancouver",
  "America/Los_Angeles": "Pacific Time (US and Canada)",
  "America/Tijuana": "Tijuana",
  "America/Edmonton": "Edmonton",
  "America/Denver": "Mountain Time (US and Canada)",
  "America/Phoenix": "Arizona",
  "America/Mazatlan": "Mazatlan",
  "America/Winnipeg": "Winnipeg",
  "America/Regina": "Saskatchewan",
  "America/Chicago": "Central Time (US and Canada)",
  "America/Mexico_City": "Mexico City",
  "America/Guatemala": "Guatemala",
  "America/El_Salvador": "El Salvador",
  "America/Managua": "Managua",
  "America/Costa_Rica": "Costa Rica",
  "America/Montreal": "Montreal",
  "America/New_York": "Eastern Time (US and Canada)",
  "America/Indianapolis": "Indiana (East)",
  "America/Panama": "Panama",
  "America/Bogota": "Bogota",
  "America/Lima": "Lima",
  "America/Halifax": "Halifax",
  "America/Puerto_Rico": "Puerto Rico",
  "America/Caracas": "Caracas",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Montevideo": "Montevideo",
  "America/Araguaina": "Brasilia",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Sao_Paulo": "Sao Paulo",
  "Atlantic/Azores": "Azores",
  "Canada/Atlantic": "Atlantic Time (Canada)",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  UTC: "Universal Time UTC",
  "Etc/Greenwich": "Greenwich Mean Time",
  "Europe/Belgrade": "Belgrade, Bratislava, Ljubljana",
  CET: "Sarajevo, Skopje, Zagreb",
  "Atlantic/Reykjavik": "Reykjavik",
  "Europe/Dublin": "Dublin",
  "Europe/London": "London",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca",
  "Africa/Nouakchott": "Nouakchott",
  "Europe/Oslo": "Oslo",
  "Europe/Copenhagen": "Copenhagen",
  "Europe/Brussels": "Brussels",
  "Europe/Berlin": "Amsterdam, Berlin, Rome, Stockholm, Vienna",
  "Europe/Helsinki": "Helsinki",
  "Europe/Amsterdam": "Amsterdam",
  "Europe/Rome": "Rome",
  "Europe/Stockholm": "Stockholm",
  "Europe/Vienna": "Vienna",
  "Europe/Luxembourg": "Luxembourg",
  "Europe/Paris": "Paris",
  "Europe/Zurich": "Zurich",
  "Europe/Madrid": "Madrid",
  "Africa/Bangui": "West Central Africa",
  "Africa/Algiers": "Algiers",
  "Africa/Tunis": "Tunis",
  "Africa/Harare": "Harare, Pretoria",
  "Africa/Nairobi": "Nairobi",
  "Europe/Warsaw": "Warsaw",
  "Europe/Prague": "Prague Bratislava",
  "Europe/Budapest": "Budapest",
  "Europe/Sofia": "Sofia",
  "Europe/Istanbul": "Istanbul",
  "Europe/Athens": "Athens",
  "Europe/Bucharest": "Bucharest",
  "Asia/Nicosia": "Nicosia",
  "Asia/Beirut": "Beirut",
  "Asia/Damascus": "Damascus",
  "Asia/Jerusalem": "Jerusalem",
  "Asia/Amman": "Amman",
  "Africa/Tripoli": "Tripoli",
  "Africa/Cairo": "Cairo",
  "Africa/Johannesburg": "Johannesburg",
  "Europe/Moscow": "Moscow",
  "Asia/Baghdad": "Baghdad",
  "Asia/Kuwait": "Kuwait",
  "Asia/Riyadh": "Riyadh",
  "Asia/Bahrain": "Bahrain",
  "Asia/Qatar": "Qatar",
  "Asia/Aden": "Aden",
  "Asia/Tehran": "Tehran",
  "Africa/Khartoum": "Khartoum",
  "Africa/Djibouti": "Djibouti",
  "Africa/Mogadishu": "Mogadishu",
  "Asia/Dubai": "Dubai",
  "Asia/Muscat": "Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Yekaterinburg",
  "Asia/Tashkent": "Islamabad, Karachi, Tashkent",
  "Asia/Calcutta": "India",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Novosibirsk": "Novosibirsk",
  "Asia/Almaty": "Almaty",
  "Asia/Dacca": "Dacca",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Bangkok": "Bangkok",
  "Asia/Saigon": "Vietnam",
  "Asia/Jakarta": "Jakarta",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Shanghai": "Beijing, Shanghai",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Taipei": "Taipei",
  "Asia/Kuala_Lumpur": "Kuala Lumpur",
  "Asia/Singapore": "Singapore",
  "Australia/Perth": "Perth",
  "Asia/Yakutsk": "Yakutsk",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Port_Moresby": "Guam, Port Moresby",
  "Australia/Brisbane": "Brisbane",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Hobart": "Hobart",
  "Asia/Magadan": "Magadan",
  SST: "Solomon Islands",
  "Pacific/Noumea": "New Caledonia",
  "Asia/Kamchatka": "Kamchatka",
  "Pacific/Fiji": "Fiji Islands, Marshall Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Asia/Kolkata": "Mumbai, Kolkata, New Delhi",
  "Europe/Kiev": "Kiev",
  "America/Tegucigalpa": "Tegucigalpa",
  "Pacific/Apia": "Independent State of Samoa"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timezones);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ChevronDownIcon.js ***!
  \***********************************************************************/
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
    d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ChevronUpIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronUpIcon({
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
    d: "M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function EyeIcon({
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
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PencilSquareIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilSquareIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function UserCircleIcon({
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
    d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_CalendarPage_jsx.js.map?ver=b1f7108c7354bb10481c