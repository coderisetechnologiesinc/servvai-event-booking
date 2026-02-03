"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_Dashboard_jsx"],{

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

/***/ "./src/Components/Controls/DatePickerInputButton.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Controls/DatePickerInputButton.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DatePickerButton = ({
  value,
  onChange,
  label = "Select dates"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "datepicker-root",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "datepicker-button",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        className: "datepicker-icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M8 2v4M16 2v4M3 10h18",
          stroke: "currentColor",
          strokeWidth: "1.8"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "datepicker-label",
        children: label
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "datepicker-overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
        value: value,
        onChange: onChange,
        asSingle: true,
        useRange: false,
        inputClassName: "datepicker-overlay-input"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerButton);

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
  disabled = false
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
          className: `tab-button ${isActive ? "tab-button--active" : "tab-button--inactive"}`,
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

/***/ "./src/Components/DashboardPagination.jsx":
/*!************************************************!*\
  !*** ./src/Components/DashboardPagination.jsx ***!
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


const DashboardPagination = ({
  currentPage = 1,
  totalPages,
  totalRecords,
  pageSize = 10,
  maxVisiblePages = 3,
  onPageChange
}) => {
  if (totalPages <= 1) return null;
  const centerPages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const pages = [];
    const delta = Math.floor(maxVisiblePages / 2);
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);
    if (currentPage <= delta + 1) {
      end = Math.min(totalPages - 1, maxVisiblePages + 1);
    }
    if (currentPage >= totalPages - delta) {
      start = Math.max(2, totalPages - maxVisiblePages);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);
  const showLeftEllipsis = centerPages.length > 0 && centerPages[0] > 2;
  const showRightEllipsis = centerPages.length > 0 && centerPages[centerPages.length - 1] < totalPages - 1;
  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);
  const goToPage = page => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "events-pagination-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: "events-pagination",
      role: "navigation",
      "aria-label": "Pagination",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--prev",
        disabled: currentPage === 1,
        onClick: () => goToPage(currentPage - 1),
        "aria-label": "Previous page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12.5 15L7.5 10L12.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "events-pagination__numbers",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === 1 ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(1),
          children: "1"
        }), showLeftEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), centerPages.map(page => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${page === currentPage ? "events-pagination__number--active" : ""}`,
          "aria-current": page === currentPage ? "page" : undefined,
          onClick: () => goToPage(page),
          children: page
        }, page)), showRightEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === totalPages ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(totalPages),
          children: totalPages
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--next",
        disabled: currentPage === totalPages,
        onClick: () => goToPage(currentPage + 1),
        "aria-label": "Next page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M7.5 15L12.5 10L7.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "events-pagination__info",
      children: ["Showing ", startRecord, "-", endRecord, " of ", totalRecords, " events"]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPagination);

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

/***/ "./src/Components/Pages/Dashboard.jsx":
/*!********************************************!*\
  !*** ./src/Components/Pages/Dashboard.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Events_useEventsLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events/useEventsLogic */ "./src/Components/Pages/Events/useEventsLogic.js");
/* harmony import */ var _Events_EventCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Events/EventCard */ "./src/Components/Pages/Events/EventCard.jsx");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/PlusIcon.js");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_DatePickerInputButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/DatePickerInputButton */ "./src/Components/Controls/DatePickerInputButton.jsx");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/CheckboxControl */ "./src/Components/Controls/CheckboxControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Containers/CollapsibleSection */ "./src/Components/Containers/CollapsibleSection.jsx");
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _DashboardPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../DashboardPagination */ "./src/Components/DashboardPagination.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















const Dashboard = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.filtersList);
  const zoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.zoomAccount);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(s => s.zoomConnected);
  const {
    meetingsList,
    getEventsList,
    // handleOpenEvent,
    handleIsPastChange,
    handleSearchChange,
    handleSetDates,
    applyDatePreset,
    isPast,
    dates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    loading,
    firstFetchDone,
    pagination,
    handleGetPrevPage,
    handleGetNextPage
  } = (0,_Events_useEventsLogic__WEBPACK_IMPORTED_MODULE_3__.useEventsLogic)(settings, filtersList, zoomAccount);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const [filtersOpen, setFiltersOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const widgetStyleSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!settings?.settings?.widget_style_settings) return {};
    try {
      return JSON.parse(settings.settings.widget_style_settings) || {};
    } catch {
      return {};
    }
  }, [settings?.settings?.widget_style_settings]);
  const {
    pw_title,
    pw_address,
    pw_avatar,
    pw_email
  } = widgetStyleSettings;
  const handleOpenEvent = meeting => {
    let url = `/events/${"offline"}/${meeting.id}`;
    if (meeting.occcurrence_id) {
      url += `?occurrence_id=${meeting.occcurrence_id}`;
    }
    navigate(url);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (firstFetchDone && meetingsList.length === 0 && !zoomConnected) {
      navigate("/events/new");
    }
  }, [firstFetchDone, zoomConnected]);
  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");else react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.warn("Please activate Gutenberg Blocks to use the Servv plugin.");
  };
  const renderEventsCards = () => {
    if (meetingsList.length > 0) return meetingsList.map(meeting => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Events_EventCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meeting: meeting,
      handleOpenEvent: handleOpenEvent
    }));
  };
  const TIME_RANGES = {
    upcoming: "upcoming",
    today: "today",
    week: "week"
  };
  const [timeRange, setTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TIME_RANGES.upcoming);
  const eventTypes = [{
    label: "Upcoming",
    value: TIME_RANGES.upcoming
  }, {
    label: "Today",
    value: TIME_RANGES.today
  }, {
    label: "This week",
    value: TIME_RANGES.week
  }];
  const getDates = () => {
    let out = {
      startDate: null,
      endDate: null
    };
    const fallback = new Date();
    if (dates.startDate) {
      const d = dates.startDate;
      out.startDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    if (dates.endDate) {
      const d = dates.endDate;
      out.endDate = new Date(d.year(), d.month(), d.date(), d.hour(), d.minute(), d.second());
    }
    return {
      startDate: out.startDate ? out.startDate : fallback,
      endDate: out.endDate ? dates.endDate : fallback
    };
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const now = moment();
    if (timeRange === TIME_RANGES.today) {
      applyDatePreset({
        startDate: now.clone().startOf("day"),
        endDate: now.clone().endOf("day")
      });
    }
    if (timeRange === TIME_RANGES.week) {
      applyDatePreset({
        startDate: now.clone().startOf("week"),
        endDate: now.clone().endOf("week")
      });
    }
    if (timeRange === TIME_RANGES.upcoming) {
      applyDatePreset({
        startDate: now,
        endDate: null
      });
    }
  }, [timeRange]);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const params = new URLSearchParams(location.search);
    const createStatus = params.get("created");
    if (createStatus === "success") {
      react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Event successfully created");
      params.delete("created");
      navigate({
        pathname: location.pathname,
        search: params.toString()
      }, {
        replace: true
      });
    }
  }, [location.search]);
  const renderEventsActions = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "events-actions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "events-actions-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h1", {
          className: "events-actions-title",
          children: ["All events ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "event-count"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "events-actions-panel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "view-mode",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
              buttons: eventTypes.map(e => e.label),
              active: eventTypes.find(e => e.value === timeRange)?.label,
              onChange: label => {
                const selected = eventTypes.find(e => e.label === label);
                setTimeRange(selected.value);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "events-filters",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_DatePickerInputButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              value: getDates(),
              onChange: handleSetDates,
              label: "Select date",
              asSingle: true,
              useRange: false,
              displayFormat: "MMM DD, YYYY",
              minDate: new Date(),
              disabled: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "servv-dahboard-dropdown",
              activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("button", {
                type: "button",
                className: "filter-button",
                onClick: () => setFiltersOpen(p => !p),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 17 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "filter-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("path", {
                    d: "M3.33594 5.83502H13.3359M0.835938 0.835022H15.8359M5.83594 10.835H10.8359",
                    stroke: "currentColor",
                    strokeWidth: "1.67",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                  children: t("Filters")
                })]
              }),
              status: filtersOpen,
              onClose: () => setFiltersOpen(false),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
                gap: 4,
                children: [Object.keys(filtersList).map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_CollapsibleSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  sectionHeading: filter.charAt(0).toUpperCase() + filter.slice(1),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    gap: 2,
                    children: filtersList[filter].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_CheckboxControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      label: item.name,
                      checked: selectedFilters[filter]?.includes(item.id) || false,
                      onChange: () => handleFilterSelect(filter, item.id),
                      font: "text-sm",
                      color: "text-gray-600"
                    }, item.id))
                  })
                }, filter)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: t("Apply"),
                  type: "primary",
                  justify: "justify-center",
                  onAction: () => {
                    setFiltersOpen(false);
                  }
                }), isFiltersApplied() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: t("Clear filters"),
                  type: "secondary",
                  justify: "justify-center",
                  onAction: () => {
                    resetFilters();
                    setFiltersOpen(false);
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("button", {
              className: "new-event-button",
              onClick: () => handleCreateNewEvent(),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_17__["default"], {
                className: "w-5 h-5 mr-2"
              }), t("Create event")]
            })]
          })]
        })]
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    withBackground: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "servv-dashboard-header main-dashboard",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "dashboard-title",
            children: `Welcome${pw_title ? ", " + pw_title : ""}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "dashboard-description",
            children: "Create, sell, and manage paid events, bookings, and customers from one revenue platform"
          })]
        }), pw_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "dashbaord-profile",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
            className: "profile-image",
            src: pw_avatar,
            alt: "Profile image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "profile-description",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              className: "profile-name",
              children: pw_title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              className: "profile-email",
              children: pw_email
            }), !settings?.is_wp_is_wp_marketplace && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              className: "profile-link",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
                className: "view-widget",
                href: servvData.homepage,
                children: "View homepage"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "header-line"
      }), renderEventsActions(), !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: firstFetchDone && meetingsList.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "dashboard-empty-state",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "dashboard-empty-state-title",
            children: "You don't have any events yet"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "dashboard-events",
            children: renderEventsCards()
          }), meetingsList.length > 0 && pagination.pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_DashboardPagination__WEBPACK_IMPORTED_MODULE_13__["default"], {
            currentPage: pagination.pageNumber,
            totalPages: pagination.pageCount,
            totalRecords: pagination.total || meetingsList.length,
            pageSize: 10,
            onPageChange: page => getEventsList({
              page
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "flex flex-1 items-center justify-center",
      children: (loading && !firstFetchDone || loading) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/Components/Pages/Events/EventCard.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Pages/Events/EventCard.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventsLogic */ "./src/Components/Pages/Events/useEventsLogic.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const PLACEHOLDER_IMAGE = `${window.servvData.pluginUrl}public/assets/images/placeholder.png`;
const WP_API_BASE = "/wp-json/wp/v2/posts";
const imageCache = new Map();
const EventCard = ({
  meeting,
  handleOpenEvent
}) => {
  const postId = meeting?.post_id;
  // console.log(meeting);
  const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imageCache.get(postId) || PLACEHOLDER_IMAGE);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!postId) return;
    if (imageCache.has(postId)) {
      const cached = imageCache.get(postId);
      setImageSrc(prev => prev === cached ? prev : cached);
      return;
    }
    const controller = new AbortController();
    fetch(`${WP_API_BASE}/${postId}?_embed`, {
      signal: controller.signal
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    }).then(post => {
      const url = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || PLACEHOLDER_IMAGE;
      imageCache.set(postId, url);
      setImageSrc(prev => prev === url ? prev : url);
    }).catch(() => {
      if (!controller.signal.aborted) {
        imageCache.set(postId, PLACEHOLDER_IMAGE);
      }
    });
    return () => controller.abort();
  }, [postId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "event-card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "event-image-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "event-image-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: imageSrc,
          alt: meeting?.title || "Event image",
          className: "event-image",
          loading: "lazy",
          onClick: () => {
            handleOpenEvent({
              id: meeting.post_id,
              occurrence_id: meeting.occurrence_id
            });
          },
          onError: e => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "event-description",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
        className: "event-title",
        children: meeting.title
      }), meeting.date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "event-datetime",
        children: [meeting.date, " | ", meeting.time, " | ", meeting.timezone]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "event-datetime",
        children: "Recurring event"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "event-badges",
      children: [!meeting.is_hidden ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "servv-event-badge badge-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "On sale"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "servv-event-badge badge-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "Unlisted"
        })
      }), meeting.recurrence !== "Recurring" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "servv-event-badge badge-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "One-time"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "servv-event-badge badge-brand",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "Recurring"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCard);

/***/ }),

/***/ "./src/Components/Pages/Events/useEventsLogic.js":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/Events/useEventsLogic.js ***!
  \*******************************************************/
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
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const syncAccountsAfterEvents = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncAccountsAfterEvents);
  const syncFiltersFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.syncFiltersFromServer);

  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isPast, setIsPast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventType, setEventType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("offline");
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
  const handleSearchSubmit = value => {
    setSearchString(value);
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: value,
      datesObj: dates,
      filtersObj: selectedFilters
    });
  };
  const handleOpenEvent = selected => {
    const {
      id,
      occurrence_id
    } = selected;
    if (occurrence_id) {
      navigate(`/events/${eventType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${eventType}/${id}`);
    }
  };
  const normalizeDate = d => {
    if (!d) return null;
    if (moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().isMoment(d)) return d;
    if (d instanceof Date) return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(d);
    return null;
  };
  const handleSetDates = dates => {
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
    setDates({
      startDate,
      endDate
    });
  };
  const applyDatePreset = dates => {
    handleSetDates(dates);
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
  };
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_3__.timezonesList[zone]
  })), []);

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
  const resetFilters = () => {
    setSearchString("");
    setDates({
      startDate: null,
      endDate: null
    });
    setSelectedFilters({});
  };
  const processFilters = () => {
    let out = "";
    Object.entries(selectedFilters).forEach(([group, ids]) => {
      const param = getFilteringParameterName(group);
      if (!param) return;
      ids.forEach(id => out += `&${param}=${id}`);
    });
    return out;
  };
  const processDates = () => {
    if (!dates.startDate || !dates.endDate) return "";
    return `&start_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(dates.startDate).format("YY-MM-DD HH:mm:ss")}` + `&end_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(dates.endDate).format("YY-MM-DD HH:mm:ss")}`;
  };
  const handleEventChange = newAttr => {
    setAttributes(prev => ({
      ...prev,
      ...newAttr
    }));
  };
  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate) return true;
    return Object.values(selectedFilters).some(arr => arr.length > 0);
  };

  // =====================================================================
  // MAIN FETCH (STABLE!)
  // =====================================================================
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
  const syncedAfterEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const getEventsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({
    page = 1,
    type = eventType,
    is_Past = isPast,
    search = searchString,
    datesObj = dates,
    filtersObj = selectedFilters
  } = {}) => {
    if (!settings) return;
    setLoading(true);
    try {
      let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=12&page=${page}&without_occurrences=true`;
      if (!is_Past && search) url += `&search=${search}`;
      if (!is_Past && datesObj.startDate && datesObj.endDate) {
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = (res.data.meetings || []).map(m => {
        const dt = m.start_time ? moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(m.start_time, m.timezone) : null;
        return {
          id: m.id,
          occurrence_id: m.occurrence_id,
          title: m.topic || "(No title)",
          post_id: m.shop_post_object_id,
          date: dt ? dt.format("MMM DD, YYYY") : null,
          time: dt ? dt.format("hh:mm a") : null,
          timezone: m.timezone,
          location: m.location || "",
          type: type === "offline" ? "Event" : "Zoom",
          recurrence: m.type === 2 && type === "offline" || m.type === 8 && type === "zoom" ? "Recurring" : "One-time",
          status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale"
        };
      });
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
  }, [settings, eventType, isPast, dates, selectedFilters]);

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (event, page = 1) => {
    if (!settings) return;
    setLoading(true);
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = res.data.meetings?.map(m => {
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
  }, [settings]);
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => {
      return {
        id: event.post_id,
        occurrenceId: event.occurrence_id
      };
    });
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
      await getEventsList();
      console.log("All selected events have been deleted, and the events list has been updated.");
    } catch (error) {
      console.error("Error deleting events or updating the events list:", error);
    }
  };
  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) {
      url += `?occurrence_id=${occurrenceID}`;
    }
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
      url: url,
      method: "DELETE",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    getEventsList();
  };

  //   const initialLoadRef = useRef(false);
  const hasFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const allowFilterFetchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters
    }).then(() => {
      // enable filter effect AFTER initial load is finished
      allowFilterFetchRef.current = true;
    });
  }, [settings]);

  // 2) REFETCH ON FILTER CHANGES
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!allowFilterFetchRef.current) {
      // block early filter triggered fetch
      return;
    }
    if (!settings) return;
    getEventsList({
      type: eventType,
      is_Past: isPast,
      search: searchString,
      datesObj: dates,
      filtersObj: selectedFilters
    });
  }, [dates.startDate, dates.endDate, selectedFilters, isPast, eventType]);

  // 3) TOAST ERROR
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showError) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(showError);
  }, [showError]);

  // 4) TIMEFORMAT & TIMEZONE
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings) return;
    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");else setTimeFormat("hh:mm a");
    let tzGuess = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find(z => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]);

  // =====================================================================
  // API EXPOSE
  // =====================================================================

  return {
    loading,
    showGuide,
    isPast,
    eventType,
    dates,
    meetingsList,
    eventOccurrencess,
    pagination,
    occurrencesPagination,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
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
    getEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () => pagination.pageNumber > 1 && getEventsList({
      page: pagination.pageNumber - 1
    }),
    handleGetNextPage: () => pagination.pageNumber < pagination.pageCount && getEventsList({
      page: pagination.pageNumber + 1
    }),
    handleGetPrevOccurrencessPage: () => occurrencesPagination.pageNumber > 1 && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber - 1),
    handleGetNextOccurrencessPage: () => occurrencesPagination.pageNumber < occurrencesPagination.pageCount && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber + 1),
    handleEventDelete,
    handleEventChange,
    handleReturnWithError: err => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    setShowGuide
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

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_Dashboard_jsx.js.map?ver=b77b0a6cdbaab0e93948