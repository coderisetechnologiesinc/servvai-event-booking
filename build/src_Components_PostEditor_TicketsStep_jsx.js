"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_PostEditor_TicketsStep_jsx"],{

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
      className: `servv-input ${error ? "servv-input--error" : ""}`,
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

/***/ "./src/Components/Controls/NewInputFieldControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewInputFieldControl.jsx ***!
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


const NewInputFieldControl = ({
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  maxLength,
  minValue,
  maxValue,
  align = "left",
  width,
  className = "",
  error = false
}) => {
  const handleChange = e => {
    let val = e.target.value;
    onChange(val);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `servv-input ${className} ${error ? "servv-input__native--error" : ""}`,
    style: {
      width: width || "384px"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "servv-input__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: type,
        className: `servv-input__native servv-input__native--${align}`,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        maxLength: maxLength,
        min: minValue,
        max: maxValue,
        onChange: handleChange,
        onBlur: onBlur,
        autoComplete: "off"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputFieldControl);

/***/ }),

/***/ "./src/Components/Controls/NewTimeInputControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/NewTimeInputControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _NewTimePeriodControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTimePeriodControl */ "./src/Components/Controls/NewTimePeriodControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const NewTimeInputControl = ({
  label,
  time,
  disabled = false,
  timeFormat = "hh:mm a",
  onChange,
  align = "start",
  validationError = false
}) => {
  const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!time) return;
    const m = moment__WEBPACK_IMPORTED_MODULE_3___default()(time);
    setHours(timeFormat === "hh:mm a" ? m.format("hh") : m.format("HH"));
    setMinutes(m.format("mm"));
    // setHasError(false);
  }, [time, timeFormat]);
  const validateTime = (h, m) => {
    if (h === "" || m === "") return false;
    const hour = Number(h);
    const minute = Number(m);
    if (Number.isNaN(hour) || Number.isNaN(minute)) return false;
    if (timeFormat === "hh:mm a") {
      if (hour < 1 || hour > 12) return false;
    } else {
      if (hour < 0 || hour > 23) return false;
    }
    if (minute < 0 || minute > 59) return false;
    return true;
  };
  const commitTime = (h, m) => {
    const isValid = validateTime(h, m);
    setHasError(!isValid);
    if (!isValid) return;
    let hour = Number(h);
    const minute = Number(m);
    const base = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    if (timeFormat === "hh:mm a") {
      const period = base.format("a");
      if (period === "pm" && hour !== 12) hour += 12;
      if (period === "am" && hour === 12) hour = 0;
    }
    const newTime = base.clone().set({
      hour,
      minute,
      second: 0
    });
    onChange(newTime);
  };
  const digitsOnly = v => v.replace(/[^\d]/g, "");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `input-container-col items-start ${align === "start" ? "grow" : "grow-0"} justify-between`,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: hours,
        onChange: v => setHours(digitsOnly(v)),
        onBlur: () => commitTime(hours, minutes),
        maxLength: 2,
        disabled: disabled,
        align: "center",
        width: "64px",
        error: hasError || validationError
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "section-description",
        children: ":"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: minutes,
        onChange: v => setMinutes(digitsOnly(v)),
        onBlur: () => commitTime(hours, minutes),
        maxLength: 2,
        disabled: disabled,
        align: "center",
        width: "64px",
        error: hasError || validationError
      }), timeFormat === "hh:mm a" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewTimePeriodControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        time: time,
        onChange: val => {
          const t = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time).clone() : moment__WEBPACK_IMPORTED_MODULE_3___default()();
          const hh = t.hour();
          if (val === "am" && hh >= 12) t.hour(hh - 12);
          if (val === "pm" && hh < 12) t.hour(hh + 12);
          onChange(t);
        },
        disabled: disabled
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTimeInputControl);

/***/ }),

/***/ "./src/Components/Controls/NewTimePeriodControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewTimePeriodControl.jsx ***!
  \**********************************************************/
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



const NewTimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {}
}) => {
  const period = time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format("a") : "am";
  const handleToggle = () => {
    onChange(period === "am" ? "pm" : "am");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    type: "button",
    className: "servv-time-period",
    onClick: handleToggle,
    disabled: disabled,
    children: period
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTimePeriodControl);

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

/***/ "./src/Components/PostEditor/DatePickerControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/PostEditor/DatePickerControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const DatePickerControl = ({
  date = null,
  onChange = () => {},
  label = "Select a Date",
  variant = "button",
  adminSection = false
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).startOf("day").toDate() : null,
    endDate: null
  });

  // useEffect(() => {
  //   const editor = document.querySelector(".block-editor__container");

  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   }
  //   editor.addEventListener("mousedown", handleClickOutside);
  //   return () => editor.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const minDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").toDate();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValue({
      startDate: date ? moment__WEBPACK_IMPORTED_MODULE_1___default()(date).startOf("day").toDate() : null,
      endDate: null
    });
  }, [date]);
  const handleDateChange = val => {
    setValue(val);
    if (val?.startDate) {
      const newDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(val.startDate);
      onChange(newDate);
    } else {
      onChange(null);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: wrapperRef,
    minDate: minDate,
    asSingle: true,
    useRange: false,
    displayFormat: "MMM DD, YYYY",
    selected: value,
    value: value,
    placeholder: value?.startDate && moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate, (moment__WEBPACK_IMPORTED_MODULE_1___default().ISO_8601), true).isValid() ? moment__WEBPACK_IMPORTED_MODULE_1___default()(value.startDate).format("MMM DD, YYYY") : "Select dates",
    inputClassName: `input-control section-description text-left w-full ${variant === "button" ? adminSection ? "max-w-full" : "max-w-[10rem]" : "w-full"} ${adminSection ? "min-w-[8rem]" : "min-w-[10rem]"} min-w-8 shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700 max-sm:w-full`,
    onChange: handleDateChange,
    show: open
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerControl);

/***/ }),

/***/ "./src/Components/PostEditor/TicketsStep.jsx":
/*!***************************************************!*\
  !*** ./src/Components/PostEditor/TicketsStep.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/RecurrenceRadioGroup */ "./src/Components/Controls/RecurrenceRadioGroup.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewTimeInputControl */ "./src/Components/Controls/NewTimeInputControl.jsx");
/* harmony import */ var _DatePickerControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DatePickerControl */ "./src/Components/PostEditor/DatePickerControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const TicketsStep = ({
  attributes,
  setAttributes,
  changeStep,
  stripeConnected,
  isNew,
  settings
}) => {
  var _activeTicket$quantit, _activeTicket$price;
  const {
    quantity = 100,
    availability = "open" // "open" | "scheduled"
  } = attributes || {};
  const MIN_QTY = 1;
  const [MAX_QTY, SET_MAX_QTY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(settings.free_registrants_limit || 15);
  const [defaultQty, setDefaultQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const [defaultPrice, setDefaultPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const isFreePlanRestricted = !stripeConnected || settings?.current_plan?.id === 1;
  const AVAILABILITY_OPTIONS = [{
    value: "open",
    label: "Open"
  }, {
    value: "scheduled",
    label: "Sales Start & End"
  }];
  const TIYCKET_TYPES = [{
    value: "free",
    label: "Free"
  }, {
    value: "paid",
    label: "Paid"
  }, {
    value: "donation",
    label: "Donation"
  }];
  const tickets = attributes?.tickets || [];
  const timezone = attributes?.meeting?.timezone || "UTC";
  const updateTickets = next => {
    const updated = next.map(ticket => {
      if (ticket.action === "remove") return ticket;
      if (ticket.event_id) {
        return {
          ...ticket,
          action: ticket.action || "update"
        };
      }
      return ticket;
    });
    setAttributes({
      tickets: updated
    });
  };
  const updateTicket = (id, patch) => {
    updateTickets(tickets.map(t => t.id === id ? {
      ...t,
      ...patch
    } : t));
  };
  const getTimeFromISO = iso => {
    if (!iso) return "";
    return moment__WEBPACK_IMPORTED_MODULE_6___default()(iso).tz(timezone).format("HH:mm");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const visibleFreeTickets = tickets.filter(t => t.action !== "remove" && t.type === "free");
    const usedFreeQuantity = visibleFreeTickets.reduce((sum, ticket) => sum + Number(ticket.quantity || 0), 0);
    const remaining = Math.max(0, (settings.free_registrants_limit || 15) - usedFreeQuantity);
    SET_MAX_QTY(remaining);
  }, [tickets, settings.free_registrants_limit]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings?.settings?.admin_dashboard) {
      let adminSettings = JSON.parse(settings.settings.admin_dashboard);
      let defaultQtyFromSettings = Number.parseInt(adminSettings.default_quantity) || 1;
      setDefaultQty(defaultQtyFromSettings);
      let defaultPriceFromSettings = Number.parseFloat(adminSettings.default_price) || 1;
      setDefaultPrice(defaultPriceFromSettings);
    }
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isFreePlanRestricted) return;
    if (!tickets.length) {
      setAttributes({
        tickets: [{
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
          type: "free",
          title: "Standard",
          quantity: defaultQty,
          availability: "open"
        }]
      });
    }
  }, [isFreePlanRestricted]);
  const setTimeToISO = (iso, time) => {
    const base = iso ? moment__WEBPACK_IMPORTED_MODULE_6___default()(iso).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_6___default()().tz(timezone);
    let hour, minute;
    if (typeof time === "string") {
      [hour, minute] = time.split(":").map(Number);
    } else if (typeof time === "object" && time !== null) {
      ({
        hour,
        minute
      } = time);
      if (time.period === "PM" && hour < 12) hour += 12;
      if (time.period === "AM" && hour === 12) hour = 0;
    } else {
      console.warn("Unsupported time format:", time);
      return base.toISOString();
    }
    base.set({
      hour,
      minute,
      second: 0
    });
    return base.toISOString();
  };
  const getSaleStartDate = () => {
    if (!activeTicket?.start_datetime) {
      return {
        date: null,
        label: "Select date"
      };
    }
    return {
      date: activeTicket.start_datetime.split("T")[0],
      label: activeTicket.start_datetime.split("T")[0]
    };
  };
  const getSaleEndDate = () => {
    if (!activeTicket?.end_datetime) {
      return {
        date: null,
        label: "Select date"
      };
    }
    return {
      date: activeTicket.end_datetime.split("T")[0],
      label: activeTicket.end_datetime.split("T")[0]
    };
  };
  const getSaleStartTime = () => {
    return activeTicket?.start_datetime ? moment__WEBPACK_IMPORTED_MODULE_6___default()(activeTicket.start_datetime).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_6___default()().tz(timezone);
  };
  const getSaleEndTime = () => {
    return activeTicket?.end_datetime ? moment__WEBPACK_IMPORTED_MODULE_6___default()(activeTicket.end_datetime).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_6___default()().add(1, "hour").tz(timezone);
  };
  const handleSaleStartDateChange = date => {
    const base = activeTicket?.start_datetime ? moment__WEBPACK_IMPORTED_MODULE_6___default()(activeTicket.start_datetime).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_6___default()().tz(timezone);
    const selected = moment__WEBPACK_IMPORTED_MODULE_6___default()(date).tz(timezone);
    base.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date()
    });
    updateTicket(activeTicketId, {
      start_datetime: base.toISOString()
    });
  };
  const handleSaleEndDateChange = date => {
    const base = activeTicket?.end_datetime ? moment__WEBPACK_IMPORTED_MODULE_6___default()(activeTicket.end_datetime).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_6___default()().add(1, "day").tz(timezone);
    const selected = moment__WEBPACK_IMPORTED_MODULE_6___default()(date).tz(timezone);
    base.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date()
    });
    updateTicket(activeTicketId, {
      end_datetime: base.toISOString()
    });
  };
  const handleSaleStartTimeChange = momentObj => {
    if (!momentObj) return;
    updateTicket(activeTicketId, {
      start_datetime: momentObj.toISOString()
    });
  };
  const handleSaleEndTimeChange = momentObj => {
    if (!momentObj) return;
    updateTicket(activeTicketId, {
      end_datetime: momentObj.toISOString()
    });
  };
  const [activeTicketId, setActiveTicketId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tickets[0]?.id || null);
  const visibleTickets = tickets.filter(t => t.action !== "remove");
  const removeTicket = id => {
    const ticketIndex = tickets.findIndex(t => t.id === id);
    if (ticketIndex === -1) return;
    const ticket = tickets[ticketIndex];
    if (ticket.event_id) {
      const updatedTickets = [...tickets];
      updatedTickets[ticketIndex] = {
        ...ticket,
        action: "remove"
      };
      updateTickets(updatedTickets);
      setActiveTicketId(null);
    } else {
      updateTickets(tickets.filter(t => t.id !== id));
      setActiveTicketId(null);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!activeTicketId && tickets.length) {
      setActiveTicketId(tickets[0].id);
    }
  }, [tickets]);
  const activeTicket = visibleTickets.find(t => t.id === activeTicketId);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!activeTicket && visibleTickets.length) {
      setActiveTicketId(visibleTickets[0].id);
    }
    if (!visibleTickets.length) {
      setActiveTicketId(null);
    }
  }, [visibleTickets, activeTicket]);
  const qty = (_activeTicket$quantit = activeTicket?.quantity) !== null && _activeTicket$quantit !== void 0 ? _activeTicket$quantit : MIN_QTY;
  const isFreeTicket = activeTicket?.type === "free";
  const activeFreeQty = isFreeTicket && typeof activeTicket?.quantity === "number" ? activeTicket.quantity : 0;
  const MAX_TICKET_QTY = isFreeTicket ? activeFreeQty + MAX_QTY : 500;
  const freeQuotaExcludingActive = (() => {
    if (!activeTicket) return MAX_QTY;
    if (activeTicket.type !== "free") {
      // active ticket was not consuming free quota
      return MAX_QTY;
    }

    // active ticket WAS consuming free quota → add it back
    return MAX_QTY + Number(activeTicket.quantity || 0);
  })();
  const addTicket = () => {
    const remainingFreeQuota = MAX_QTY;
    const initialQty = remainingFreeQuota > 0 ? Math.min(defaultQty, remainingFreeQuota) : 0;
    const newTicket = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open"
    };
    updateTickets([...tickets, newTicket]);
    setActiveTicketId(newTicket.id);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "step__wrapper servv_tickets",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.TicketIcon, {
        className: "step__header_icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
          className: "step__header_title",
          children: "Ticket Types"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "step__description",
          children: "Set up ticket categories and total quantity"
        })]
      }), !isNew && attributes.meeting?.occurrences && attributes.meeting?.occurrences?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "step__description",
        children: "This is a recurring event. To see tickets for a specific date, please view that occurrence."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
        type: "button",
        className: "servv_ticket_add",
        onClick: addTicket,
        disabled: isFreePlanRestricted,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: "Add ticket"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "step__content_block",
        children: tickets.filter(t => t.action !== "remove").map(ticket => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `servv_ticket_card ${activeTicketId === ticket.id ? "servv_ticket_card--active" : ""}`,
          onClick: () => setActiveTicketId(ticket.id),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "servv_ticket_card__title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              children: [ticket.title || "Untitled", " (", ticket.type, ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "servv_ticket_card__remove",
              onClick: e => {
                e.stopPropagation();
                removeTicket(ticket.id);
              },
              disabled: isFreePlanRestricted,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "servv_ticket_card__count",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
              children: ticket.quantity
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              children: ticket.quantity > 1 ? "tickets" : "ticket"
            })]
          })]
        }, ticket.id))
      }), tickets.length > 0 && activeTicketId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [stripeConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: "ticket-type",
            value: stripeConnected ? activeTicket?.type || "free" : "free",
            options: TIYCKET_TYPES,
            disabled: !stripeConnected,
            onChange: val => {
              const prevType = activeTicket?.type;
              const prevQty = Number(activeTicket?.quantity || MIN_QTY);
              let nextQty = prevQty;
              let nextPrice = activeTicket?.price;
              if (val === "free") {
                nextQty = Math.min(prevQty, freeQuotaExcludingActive);
                nextPrice = undefined;
              }
              if (prevType === "free" && val !== "free") {
                nextQty = Math.min(prevQty, 500);
              }
              if (val === "paid") {
                const currentPrice = Number(activeTicket?.price);
                if (!currentPrice || currentPrice <= 0) {
                  nextPrice = String(defaultPrice);
                }
              }
              nextQty = Math.max(MIN_QTY, nextQty);
              const patch = {
                type: val,
                quantity: nextQty
              };
              if (val === "paid" || val === "donation") {
                var _nextPrice;
                patch.price = (_nextPrice = nextPrice) !== null && _nextPrice !== void 0 ? _nextPrice : "";
              }
              updateTicket(activeTicketId, patch);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            placeholder: "Enter title",
            value: activeTicket?.title || "",
            onChange: val => updateTicket(activeTicketId, {
              title: val
            })
          })]
        }), activeTicket?.type === "paid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Price"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "text",
            inputMode: "decimal",
            placeholder: "Enter price",
            value: (_activeTicket$price = activeTicket?.price) !== null && _activeTicket$price !== void 0 ? _activeTicket$price : "",
            onChange: val => {
              // allow empty
              if (val === "") {
                updateTicket(activeTicketId, {
                  price: ""
                });
                return;
              }

              // allow numbers + 2 decimals
              if (!/^\d+(\.\d{0,2})?$/.test(val)) return;
              updateTicket(activeTicketId, {
                price: val
              });
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "servv_ticket_quantity",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
            className: "step__content_title",
            children: "Quantity"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "servv_ticket_quantity__input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              onClick: () => {
                if (qty > MIN_QTY) {
                  updateTicket(activeTicketId, {
                    quantity: qty - 1
                  });
                }
              },
              disabled: qty <= MIN_QTY,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
              type: "text",
              inputMode: "numeric",
              pattern: "[0-9]*",
              className: "servv_ticket_quantity__field",
              placeholder: "Enter a quantity",
              value: qty === "" ? "" : String(qty),
              onChange: e => {
                const raw = e.target.value;
                if (raw === "") {
                  updateTicket(activeTicketId, {
                    quantity: ""
                  });
                  return;
                }
                if (!/^\d+$/.test(raw)) return;
                const num = Number(raw);
                if (num >= MIN_QTY && num <= MAX_TICKET_QTY) {
                  updateTicket(activeTicketId, {
                    quantity: num
                  });
                }
              },
              onBlur: () => {
                // normalize empty → MIN_QTY
                if (activeTicket.quantity === "") {
                  updateTicket(activeTicketId, {
                    quantity: MIN_QTY
                  });
                }
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              onClick: () => {
                if (qty < MAX_TICKET_QTY) {
                  updateTicket(activeTicketId, {
                    quantity: qty + 1
                  });
                }
              },
              disabled: qty >= MAX_TICKET_QTY,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {})
            })]
          }), isFreeTicket && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
            className: "servv_ticket_quantity__hint",
            children: ["You have ", MAX_QTY, " free tickets remaining for your plan."]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "step__content_title",
            children: "Availability"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_RecurrenceRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: "ticket-availability",
            value: activeTicket?.availability || "open",
            options: AVAILABILITY_OPTIONS,
            onChange: val => updateTicket(activeTicketId, {
              availability: val,
              ...(val === "open" ? {
                start_datetime: undefined,
                end_datetime: undefined
              } : {})
            }),
            disabled: settings?.current_plan?.id === 1
          })]
        }), activeTicket?.availability === "scheduled" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "servv_ticket_sales_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "servv_datetime_row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "servv_datetime_col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "step__content_title",
                children: "Start date"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                variant: "field",
                label: getSaleStartDate().label,
                date: getSaleStartDate().date,
                onChange: handleSaleStartDateChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "servv_datetime_col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "step__content_title",
                children: "Start time"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                time: activeTicket?.start_datetime,
                onChange: handleSaleStartTimeChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "servv_datetime_row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "servv_datetime_col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "step__content_title",
                children: "End date"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DatePickerControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                variant: "field",
                label: getSaleEndDate().label,
                date: getSaleEndDate().date,
                onChange: handleSaleEndDateChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "servv_datetime_col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "step__content_title",
                children: "End time"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                time: activeTicket?.end_datetime,
                onChange: handleSaleEndTimeChange
              })]
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "servv_actions mt-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        type: "button",
        className: "servv_button servv_button--secondary",
        onClick: () => changeStep("venue"),
        children: "Previous"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        type: "button",
        className: "servv_button servv_button--primary",
        onClick: () => changeStep("filters"),
        children: "Continue"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketsStep);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ })

}]);
//# sourceMappingURL=src_Components_PostEditor_TicketsStep_jsx.js.map?ver=73bcf3aa76ee373ab55b