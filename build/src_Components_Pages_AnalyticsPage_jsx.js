"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_AnalyticsPage_jsx"],{

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

/***/ "./src/Components/Containers/TabsComponent.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Containers/TabsComponent.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TabsComponent = ({
  tabsList,
  selected,
  handleSelectChange,
  fullWidth
}) => {
  const renderTabs = () => {
    return tabsList.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      style: {
        flex: "0 0 auto",
        minWidth: 120
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: () => handleSelectChange(tab.value),
        className: `tab-element ${selected === tab.value ? "tab-active" : ""}`,
        style: {
          minWidth: 120,
          whiteSpace: "nowrap",
          flex: "0 0 auto"
        },
        children: tab.label
      })
    }, tab.value));
  };

  // Responsive scroll for mobile
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "tabs-group-container",
    style: {
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      width: "100%",
      marginBottom: 16
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: "flex flex-row servv-tabs",
      style: {
        flexWrap: "nowrap",
        minWidth: "100%",
        width: "max-content",
        marginBottom: 0
      },
      children: renderTabs()
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsComponent);

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
  iconLeft = null,
  style = {} // <-- Add style prop
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
        }, option))]
      });
    }
  };
  // Responsive style for mobile
  const responsiveStyle = {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
    ...style
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "input-container-col",
    style: {
      width: "100%"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: "timezone",
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "select-control-with-icon-container",
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
        name: "timezone",
        id: "timezone-select",
        className: "select-control select-control-with-icon text-sm p-4",
        value: selected,
        onChange: e => onSelectChange(e.target.value),
        disabled: disabled,
        style: responsiveStyle,
        children: renderOptions()
      }), iconRight !== null && iconRight]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControl);

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

/***/ "./src/Components/Pages/AnalyticsPage.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/AnalyticsPage.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/TabsComponent */ "./src/Components/Containers/TabsComponent.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_SelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/SelectControl */ "./src/Components/Controls/SelectControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var reaviz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reaviz */ "./node_modules/reaviz/dist/index.js");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _widget_servicesShared_currencies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../widget/servicesShared/currencies */ "./widget/servicesShared/currencies.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
















const AnalyticsPage = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [totalRevenue, setTotalRevenue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [filteredByDateRevenue, setFilteredByDateRevenue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [registrants, setRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [registrantsTotal, setTotalRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const tabsList = [{
    label: "Total Revenue",
    value: 0
  }, {
    label: "Total Registrants",
    value: 1
  }, {
    label: "Events",
    value: 2
  }, {
    label: "Filters",
    value: 3
  }];
  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isMonthSelected, setIsMonthSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventsStatistic, setEventsStatistic] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [filtersStatistic, setFiltersStatistic] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [filtersStatisticFilteredByDate, setFiltersStatisticFilteredByDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [revenueDates, setRevenueDates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startDate: null,
    endDate: null
  });

  // Tab change handler
  const handleSelectTabChange = val => {
    setSelectedTab(val);
    if (val === 1 && !registrantsTotal) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchTotalRegistrants();
    }
    if (val === 2 && !eventsStatistic) {
      fetchEventsAnalytics();
    }
    if (val === 3 && !filtersStatistic) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchFiltersStatistic();
    }
  };

  // Settings fetch
  const getSettings = async () => {
    setLoading(true);
    try {
      const resp = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (resp.status === 200) {
        setSettings(resp.data);
      }
    } catch (e) {
      console.error("Failed to fetch settings", e);
    }
    setLoading(false);
  };

  // Total revenue fetch (fixed logic)
  const fetchTotalRevenue = async (from = null, to = null) => {
    setLoading(true);
    try {
      let url = "/wp-json/servv-plugin/v1/analytics/revenue";
      if (from && to) {
        url += `?from=${from}&to=${to}`;
      }
      const revenue = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (revenue && revenue.data) {
        if (!from && !to) {
          setTotalRevenue(revenue.data.total || 0);
        } else {
          setFilteredByDateRevenue(revenue.data.total || 0);
        }
      }
    } catch (e) {
      console.error("Error fetching revenue", e);
    }
    setLoading(false);
  };

  // Registrants fetch
  const fetchTotalRegistrants = async (month = null) => {
    setLoading(true);
    try {
      let url = "/wp-json/servv-plugin/v1/analytics/registrants";
      if (isMonthSelected || month) {
        url += `?date_year=${selectedYear}&date_month=${monthOptions.indexOf(selectedMonth)}`;
      }
      const resp = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (resp && resp.data) {
        if (!isMonthSelected && !month) {
          setTotalRegistrants(resp.data);
        } else {
          setRegistrants(resp.data);
        }
      }
    } catch (e) {
      console.error("Error fetching registrants", e);
    }
    setLoading(false);
  };

  // Month/year toggle for registrants/filters
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMonthSelected) {
      if (selectedTab === 1) fetchTotalRegistrants(true);
      if (selectedTab === 3) fetchFiltersStatistic(true);
    }
  }, [isMonthSelected, selectedMonth, selectedYear]);

  // Registrants total
  const getRegistrantsTotal = () => {
    let total = {
      unique: 0,
      total: 0
    };
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      total = Object.values(dataSource).reduce((acc, curr) => {
        acc.unique += curr.unique;
        acc.total += curr.total;
        return acc;
      }, {
        unique: 0,
        total: 0
      });
    }
    return total;
  };

  // Registrants diagram data
  const getDataForRegistrants = () => {
    let dataForDiagram = [];
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      dataForDiagram = [{
        key: "Events",
        data: [{
          key: "Unique",
          data: dataSource?.offline?.unique || 0
        }, {
          key: "Total",
          data: dataSource?.offline?.total || 0
        }]
      }, {
        key: "Zoom Events",
        data: [{
          key: "Unique",
          data: dataSource?.online_zoom?.unique || 0
        }, {
          key: "Total",
          data: dataSource?.online_zoom?.total || 0
        }]
      }];
    }
    return dataForDiagram;
  };

  // Filters analytics fetch (from your provided code)
  const fetchFiltersStatistic = async month => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/analytics/types";
    if (isMonthSelected || month) {
      url += `?date_year=${selectedYear}&date_month=${monthOptions.indexOf(selectedMonth)}`;
    }
    const types = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get(url, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(error => console.log(error));
    if (types) {
      if (!isMonthSelected && !month) setFiltersStatistic(types.data);else setFiltersStatisticFilteredByDate(types.data);
      setLoading(false);
      return types;
    }
    setLoading(false);
    return null;
  };

  // Events analytics fetch
  const fetchEventsAnalytics = async () => {
    setLoading(true);
    let statistic = eventsStatistic ? {
      ...eventsStatistic
    } : {};
    try {
      const resp1 = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/wp-json/servv-plugin/v1/analytics/happened", {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (resp1 && resp1.data) {
        statistic = {
          ...statistic,
          happened: resp1.data
        };
      }
      const resp2 = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/wp-json/servv-plugin/v1/analytics/cancelled", {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (resp2 && resp2.data) {
        statistic = {
          ...statistic,
          cancelled: resp2.data
        };
      }
      const resp3 = await axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/wp-json/servv-plugin/v1/analytics/active", {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      if (resp3 && resp3.data) {
        statistic = {
          ...statistic,
          active: resp3.data
        };
      }
      setEventsStatistic(statistic);
    } catch (e) {
      console.error("Error fetching events analytics", e);
    }
    setLoading(false);
  };

  // Event counts
  const getActiveEvents = () => {
    return eventsStatistic?.active ? eventsStatistic.active.offline + eventsStatistic.active.online_zoom : 0;
  };
  const getHappenedEvents = () => {
    return eventsStatistic?.happened ? eventsStatistic.happened.offline + eventsStatistic.happened.online_zoom : 0;
  };
  const getCanceledEvents = () => {
    return eventsStatistic?.cancelled ? eventsStatistic.cancelled.offline + eventsStatistic.cancelled.online_zoom : 0;
  };

  // Month/year select handlers
  const handleMonthSelect = val => {
    if (val === "") return;
    setSelectedMonth(val);
    if (selectedYear === "") {
      setSelectedYear(new Date().getFullYear());
    }
  };
  const handleYearSelect = val => {
    if (val === "") return;
    setSelectedYear(val);
    if (selectedMonth === "") {
      setSelectedMonth(monthOptions[1]);
    }
  };

  // Pie chart helpers for filter analytics
  const getCategoriesData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const categoryNames = filtersData.offline.categories.map(cat => cat.name);
    const categoriesStatistic = categoryNames.map(categoryName => {
      const offlineCategory = filtersData.offline.categories.find(cat => cat.name === categoryName);
      const onlineCategory = filtersData.online_zoom.categories.find(cat => cat.name === categoryName);
      return {
        key: categoryName,
        data: (offlineCategory?.value || 0) + (onlineCategory?.value || 0)
      };
    });
    if (categoriesStatistic.filter(cat => cat.data > 0).length > 0) return categoriesStatistic;else return null;
  };
  const getLanguagesData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const languageNames = filtersData.offline.languages.map(lang => lang.name);
    const languagesStatistic = languageNames.map(languageName => {
      const offlineLang = filtersData.offline.languages.find(lang => lang.name === languageName);
      const onlineLang = filtersData.online_zoom.languages.find(lang => lang.name === languageName);
      return {
        key: languageName,
        data: (offlineLang?.value || 0) + (onlineLang?.value || 0)
      };
    });
    return languagesStatistic.some(lang => lang.data > 0) ? languagesStatistic : null;
  };
  const getMembersData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const memberNames = filtersData.offline.members.map(mem => mem.name);
    const membersStatistic = memberNames.map(memberName => {
      const offlineMem = filtersData.offline.members.find(mem => mem.name === memberName);
      const onlineMem = filtersData.online_zoom.members.find(mem => mem.name === memberName);
      return {
        key: memberName,
        data: (offlineMem?.value || 0) + (onlineMem?.value || 0)
      };
    });
    return membersStatistic.some(mem => mem.data > 0) ? membersStatistic : null;
  };
  const getLocationsData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const locationNames = filtersData.offline.locations.map(loc => loc.name);
    const locationsStatistic = locationNames.map(locationName => {
      const offlineLoc = filtersData.offline.locations.find(loc => loc.name === locationName);
      const onlineLoc = filtersData.online_zoom.locations.find(loc => loc.name === locationName);
      return {
        key: locationName,
        data: (offlineLoc?.value || 0) + (onlineLoc?.value || 0)
      };
    });
    return locationsStatistic.some(loc => loc.data > 0) ? locationsStatistic : null;
  };

  // Pie chart block
  const renderPieBlock = (title, data) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 min-w-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
        className: "font-semibold text-gray-700 text-lg border-b pb-2",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "w-full h-64 md:h-80 lg:h-96 min-w-0",
        children: data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.PieChart, {
          id: title.toLowerCase(),
          height: "100%",
          data: data,
          series: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.PieArcSeries, {
            colorScheme: ["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("p", {
          className: "text-gray-500",
          children: [t("No data available for"), title.toLowerCase(), t(".")]
        })
      })]
    });
  };

  // Filters analytics rendering
  const renderFiltersStatistic = () => {
    const membersData = getMembersData();
    const locationsData = getLocationsData();
    const languagesData = getLanguagesData();
    const categoriesData = getCategoriesData();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "flex flex-col md:flex-row flex-wrap gap-8 w-full min-w-0",
        children: [categoriesData && renderPieBlock(t("Categories"), categoriesData), locationsData && renderPieBlock(t("Locations"), locationsData), languagesData && renderPieBlock(t("Languages"), languagesData), membersData && renderPieBlock(t("Members"), membersData)]
      }), !membersData && !locationsData && !languagesData && !categoriesData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "flex flex-col items-center justify-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            children: t("You don’t have Filter Statistics yet.")
          })
        })
      })]
    });
  };

  // Revenue datepicker effect
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (revenueDates.startDate && revenueDates.endDate) {
      fetchTotalRevenue(moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.startDate).format("YYYY-MM-DD"), moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.endDate).format("YYYY-MM-DD"));
    }
  }, [revenueDates]);

  // Initial load
  const getData = async () => {
    await fetchTotalRevenue();
    await getSettings();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getData();
  }, []);
  const monthOptions = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const yearOptions = ["", 2025, 2026, 2027];
  const {
    unique,
    total
  } = getRegistrantsTotal();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: loading,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1", {
          className: "text-display-sm mt-6",
          children: t("Analytics")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
          className: "page-header-description",
          children: "Access analytics for your revenue, registrants, events, and filters"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
        gap: 8,
        cardsLayout: true,
        className: "w-full min-w-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "w-full min-w-0 overflow-x-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
            tabsList: tabsList,
            selected: selectedTab,
            handleSelectChange: handleSelectTabChange,
            fullWidth: true
          })
        }), selectedTab === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 8,
          className: "w-full min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "flex flex-col md:flex-row justify-end items-end min-w-0 w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "w-full md:w-72",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
                displayFormat: "MMM DD, YYYY",
                value: revenueDates,
                placeholder: "Select Dates",
                inputClassName: "input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white",
                onChange: newValue => setRevenueDates(newValue)
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "flex flex-col items-center justify-start",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                className: "font-semibold text-brand-700 text-display-md",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.Count, {
                  from: 0,
                  to: !revenueDates.startDate ? totalRevenue || 0 : filteredByDateRevenue || 0,
                  className: "font-semibold text-brand-700 text-display-md"
                })
              }), totalRevenue === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
                children: t("You haven’t made any Sales yet.")
              })]
            })
          })]
        }), selectedTab === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 8,
          className: "w-full min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
            gap: 4,
            className: "flex-col sm:flex-row w-full items-start min-w-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "w-full sm:w-48",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                options: monthOptions,
                selected: selectedMonth,
                onSelectChange: val => {
                  handleMonthSelect(val);
                  setIsMonthSelected(true);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "w-full sm:w-48",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                options: yearOptions,
                selected: selectedYear,
                onSelectChange: val => {
                  handleYearSelect(val);
                  setIsMonthSelected(true);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
              text: "Reset",
              icon: null,
              type: "primary",
              className: "p-3 self-center w-full sm:w-auto",
              onAction: () => {
                setIsMonthSelected(false);
                setSelectedMonth("");
                setSelectedYear("");
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("h2", {
              className: "font-semibold text-brand-700 text-3xl",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.Count, {
                from: 0,
                to: unique + total,
                className: "font-semibold"
              }), ` Registrants`]
            }), unique + total === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
              className: "text-gray-500 mt-2",
              children: t("You don’t have any Registrants yet.")
            })]
          })]
        }), selectedTab === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: eventsStatistic ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-4 min-w-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                className: "font-semibold text-brand-700 text-lg",
                children: t("Active Events")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.Count, {
                from: 0,
                to: getActiveEvents(),
                className: "font-semibold text-brand-700 text-3xl"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                className: "font-semibold text-brand-700 text-lg",
                children: t("Events Happened")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.Count, {
                from: 0,
                to: getHappenedEvents(),
                className: "font-semibold text-brand-700 text-3xl"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                className: "font-semibold text-brand-700 text-lg",
                children: t("Events Cancelled")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_9__.Count, {
                from: 0,
                to: getCanceledEvents(),
                className: "font-semibold text-brand-700 text-3xl"
              })]
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "w-full h-64 flex items-center justify-center text-gray-500 min-w-0",
            children: t("No event analytics to display.")
          })
        }), selectedTab === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 8,
          className: "w-full min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_6__["default"], {
            gap: 4,
            className: "flex-col sm:flex-row w-full min-w-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "w-full sm:w-48",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                options: monthOptions,
                selected: selectedMonth,
                onSelectChange: val => {
                  handleMonthSelect(val);
                  setIsMonthSelected(true);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "w-full sm:w-48",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_SelectControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                options: yearOptions,
                selected: selectedYear,
                onSelectChange: val => {
                  handleYearSelect(val);
                  setIsMonthSelected(true);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
              text: "Reset",
              icon: null,
              type: "primary",
              className: "p-[0.75rem] self-end w-full sm:w-auto",
              onAction: () => {
                setIsMonthSelected(false);
                setSelectedMonth("");
                setSelectedYear("");
              }
            })]
          }), filtersStatistic && renderFiltersStatistic()]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyticsPage);

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

/***/ "./widget/servicesShared/currencies.js":
/*!*********************************************!*\
  !*** ./widget/servicesShared/currencies.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currenciesList: () => (/* binding */ currenciesList),
/* harmony export */   getCurrencySymbol: () => (/* binding */ getCurrencySymbol)
/* harmony export */ });
const currenciesList = [{
  currency: 'Albania Lek',
  abbreviation: 'ALL',
  symbol: '&#76;&#101;&#107;'
}, {
  currency: 'Afghanistan Afghani',
  abbreviation: 'AFN',
  symbol: '&#1547;'
}, {
  currency: 'Argentina Peso',
  abbreviation: 'ARS',
  symbol: '&#36;'
}, {
  currency: 'Aruba Guilder',
  abbreviation: 'AWG',
  symbol: '&#402;'
}, {
  currency: 'Australia Dollar',
  abbreviation: 'AUD',
  symbol: '&#36;'
}, {
  currency: 'Azerbaijan New Manat',
  abbreviation: 'AZN',
  symbol: '&#1084;&#1072;&#1085;'
}, {
  currency: 'Bahamas Dollar',
  abbreviation: 'BSD',
  symbol: '&#36;'
}, {
  currency: 'Barbados Dollar',
  abbreviation: 'BBD',
  symbol: '&#36;'
}, {
  currency: 'Belarus Ruble',
  abbreviation: 'BYR',
  symbol: '&#112;&#46;'
}, {
  currency: 'Belize Dollar',
  abbreviation: 'BZD',
  symbol: '&#66;&#90;&#36;'
}, {
  currency: 'Bermuda Dollar',
  abbreviation: 'BMD',
  symbol: '&#36;'
}, {
  currency: 'Bolivia Boliviano',
  abbreviation: 'BOB',
  symbol: '&#36;&#98;'
}, {
  currency: 'Bosnia and Herzegovina Convertible Marka',
  abbreviation: 'BAM',
  symbol: '&#75;&#77;'
}, {
  currency: 'Botswana Pula',
  abbreviation: 'BWP',
  symbol: '&#80;'
}, {
  currency: 'Bulgaria Lev',
  abbreviation: 'BGN',
  symbol: '&#1083;&#1074;'
}, {
  currency: 'Brazil Real',
  abbreviation: 'BRL',
  symbol: '&#82;&#36;'
}, {
  currency: 'Brunei Darussalam Dollar',
  abbreviation: 'BND',
  symbol: '&#36;'
}, {
  currency: 'Cambodia Riel',
  abbreviation: 'KHR',
  symbol: '&#6107;'
}, {
  currency: 'Canada Dollar',
  abbreviation: 'CAD',
  symbol: '&#36;'
}, {
  currency: 'Cayman Islands Dollar',
  abbreviation: 'KYD',
  symbol: '&#36;'
}, {
  currency: 'Chile Peso',
  abbreviation: 'CLP',
  symbol: '&#36;'
}, {
  currency: 'China Yuan Renminbi',
  abbreviation: 'CNY',
  symbol: '&#165;'
}, {
  currency: 'Colombia Peso',
  abbreviation: 'COP',
  symbol: '&#36;'
}, {
  currency: 'Costa Rica Colon',
  abbreviation: 'CRC',
  symbol: '&#8353;'
}, {
  currency: 'Croatia Kuna',
  abbreviation: 'HRK',
  symbol: '&#107;&#110;'
}, {
  currency: 'Cuba Peso',
  abbreviation: 'CUP',
  symbol: '&#8369;'
}, {
  currency: 'Czech Republic Koruna',
  abbreviation: 'CZK',
  symbol: '&#75;&#269;'
}, {
  currency: 'Denmark Krone',
  abbreviation: 'DKK',
  symbol: '&#107;&#114;'
}, {
  currency: 'Dominican Republic Peso',
  abbreviation: 'DOP',
  symbol: '&#82;&#68;&#36;'
}, {
  currency: 'East Caribbean Dollar',
  abbreviation: 'XCD',
  symbol: '&#36;'
}, {
  currency: 'Egypt Pound',
  abbreviation: 'EGP',
  symbol: '&#163;'
}, {
  currency: 'El Salvador Colon',
  abbreviation: 'SVC',
  symbol: '&#36;'
}, {
  currency: 'Estonia Kroon',
  abbreviation: 'EEK',
  symbol: '&#107;&#114;'
}, {
  currency: 'Euro Member Countries',
  abbreviation: 'EUR',
  symbol: '&#8364;'
}, {
  currency: 'Falkland Islands (Malvinas) Pound',
  abbreviation: 'FKP',
  symbol: '&#163;'
}, {
  currency: 'Fiji Dollar',
  abbreviation: 'FJD',
  symbol: '&#36;'
}, {
  currency: 'Ghana Cedis',
  abbreviation: 'GHC',
  symbol: '&#162;'
}, {
  currency: 'Gibraltar Pound',
  abbreviation: 'GIP',
  symbol: '&#163;'
}, {
  currency: 'Guatemala Quetzal',
  abbreviation: 'GTQ',
  symbol: '&#81;'
}, {
  currency: 'Guernsey Pound',
  abbreviation: 'GGP',
  symbol: '&#163;'
}, {
  currency: 'Guyana Dollar',
  abbreviation: 'GYD',
  symbol: '&#36;'
}, {
  currency: 'Honduras Lempira',
  abbreviation: 'HNL',
  symbol: '&#76;'
}, {
  currency: 'Hong Kong Dollar',
  abbreviation: 'HKD',
  symbol: '&#36;'
}, {
  currency: 'Hungary Forint',
  abbreviation: 'HUF',
  symbol: '&#70;&#116;'
}, {
  currency: 'Iceland Krona',
  abbreviation: 'ISK',
  symbol: '&#107;&#114;'
}, {
  currency: 'India Rupee',
  abbreviation: 'INR',
  symbol: '₹'
}, {
  currency: 'Indonesia Rupiah',
  abbreviation: 'IDR',
  symbol: '&#82;&#112;'
}, {
  currency: 'Iran Rial',
  abbreviation: 'IRR',
  symbol: '&#65020;'
}, {
  currency: 'Isle of Man Pound',
  abbreviation: 'IMP',
  symbol: '&#163;'
}, {
  currency: 'Israel Shekel',
  abbreviation: 'ILS',
  symbol: '&#8362;'
}, {
  currency: 'Jamaica Dollar',
  abbreviation: 'JMD',
  symbol: '&#74;&#36;'
}, {
  currency: 'Japan Yen',
  abbreviation: 'JPY',
  symbol: '&#165;'
}, {
  currency: 'Jersey Pound',
  abbreviation: 'JEP',
  symbol: '&#163;'
}, {
  currency: 'Kazakhstan Tenge',
  abbreviation: 'KZT',
  symbol: '&#1083;&#1074;'
}, {
  currency: 'Korea (North) Won',
  abbreviation: 'KPW',
  symbol: '&#8361;'
}, {
  currency: 'Korea (South) Won',
  abbreviation: 'KRW',
  symbol: '&#8361;'
}, {
  currency: 'Kyrgyzstan Som',
  abbreviation: 'KGS',
  symbol: '&#1083;&#1074;'
}, {
  currency: 'Laos Kip',
  abbreviation: 'LAK',
  symbol: '&#8365;'
}, {
  currency: 'Latvia Lat',
  abbreviation: 'LVL',
  symbol: '&#76;&#115;'
}, {
  currency: 'Lebanon Pound',
  abbreviation: 'LBP',
  symbol: '&#163;'
}, {
  currency: 'Liberia Dollar',
  abbreviation: 'LRD',
  symbol: '&#36;'
}, {
  currency: 'Lithuania Litas',
  abbreviation: 'LTL',
  symbol: '&#76;&#116;'
}, {
  currency: 'Macedonia Denar',
  abbreviation: 'MKD',
  symbol: '&#1076;&#1077;&#1085;'
}, {
  currency: 'Malaysia Ringgit',
  abbreviation: 'MYR',
  symbol: '&#82;&#77;'
}, {
  currency: 'Mauritius Rupee',
  abbreviation: 'MUR',
  symbol: '&#8360;'
}, {
  currency: 'Mexico Peso',
  abbreviation: 'MXN',
  symbol: '&#36;'
}, {
  currency: 'Mongolia Tughrik',
  abbreviation: 'MNT',
  symbol: '&#8366;'
}, {
  currency: 'Mozambique Metical',
  abbreviation: 'MZN',
  symbol: '&#77;&#84;'
}, {
  currency: 'Namibia Dollar',
  abbreviation: 'NAD',
  symbol: '&#36;'
}, {
  currency: 'Nepal Rupee',
  abbreviation: 'NPR',
  symbol: '&#8360;'
}, {
  currency: 'Netherlands Antilles Guilder',
  abbreviation: 'ANG',
  symbol: '&#402;'
}, {
  currency: 'New Zealand Dollar',
  abbreviation: 'NZD',
  symbol: '&#36;'
}, {
  currency: 'Nicaragua Cordoba',
  abbreviation: 'NIO',
  symbol: '&#67;&#36;'
}, {
  currency: 'Nigeria Naira',
  abbreviation: 'NGN',
  symbol: '&#8358;'
}, {
  currency: 'Korea (North) Won',
  abbreviation: 'KPW',
  symbol: '&#8361;'
}, {
  currency: 'Norway Krone',
  abbreviation: 'NOK',
  symbol: '&#107;&#114;'
}, {
  currency: 'Oman Rial',
  abbreviation: 'OMR',
  symbol: '&#65020;'
}, {
  currency: 'Pakistan Rupee',
  abbreviation: 'PKR',
  symbol: '&#8360;'
}, {
  currency: 'Panama Balboa',
  abbreviation: 'PAB',
  symbol: '&#66;&#47;&#46;'
}, {
  currency: 'Paraguay Guarani',
  abbreviation: 'PYG',
  symbol: '&#71;&#115;'
}, {
  currency: 'Peru Nuevo Sol',
  abbreviation: 'PEN',
  symbol: '&#83;&#47;&#46;'
}, {
  currency: 'Philippines Peso',
  abbreviation: 'PHP',
  symbol: '&#8369;'
}, {
  currency: 'Poland Zloty',
  abbreviation: 'PLN',
  symbol: '&#122;&#322;'
}, {
  currency: 'Qatar Riyal',
  abbreviation: 'QAR',
  symbol: '&#65020;'
}, {
  currency: 'Romania New Leu',
  abbreviation: 'RON',
  symbol: '&#108;&#101;&#105;'
}, {
  currency: 'Russia Ruble',
  abbreviation: 'RUB',
  symbol: '&#1088;&#1091;&#1073;'
}, {
  currency: 'Saint Helena Pound',
  abbreviation: 'SHP',
  symbol: '&#163;'
}, {
  currency: 'Saudi Arabia Riyal',
  abbreviation: 'SAR',
  symbol: '&#65020;'
}, {
  currency: 'Serbia Dinar',
  abbreviation: 'RSD',
  symbol: '&#1044;&#1080;&#1085;&#46;'
}, {
  currency: 'Seychelles Rupee',
  abbreviation: 'SCR',
  symbol: '&#8360;'
}, {
  currency: 'Singapore Dollar',
  abbreviation: 'SGD',
  symbol: '&#36;'
}, {
  currency: 'Solomon Islands Dollar',
  abbreviation: 'SBD',
  symbol: '&#36;'
}, {
  currency: 'Somalia Shilling',
  abbreviation: 'SOS',
  symbol: '&#83;'
}, {
  currency: 'South Africa Rand',
  abbreviation: 'ZAR',
  symbol: '&#82;'
}, {
  currency: 'Korea (South) Won',
  abbreviation: 'KRW',
  symbol: '&#8361;'
}, {
  currency: 'Sri Lanka Rupee',
  abbreviation: 'LKR',
  symbol: '&#8360;'
}, {
  currency: 'Sweden Krona',
  abbreviation: 'SEK',
  symbol: '&#107;&#114;'
}, {
  currency: 'Switzerland Franc',
  abbreviation: 'CHF',
  symbol: '&#67;&#72;&#70;'
}, {
  currency: 'Suriname Dollar',
  abbreviation: 'SRD',
  symbol: '&#36;'
}, {
  currency: 'Syria Pound',
  abbreviation: 'SYP',
  symbol: '&#163;'
}, {
  currency: 'Taiwan New Dollar',
  abbreviation: 'TWD',
  symbol: '&#78;&#84;&#36;'
}, {
  currency: 'Thailand Baht',
  abbreviation: 'THB',
  symbol: '&#3647;'
}, {
  currency: 'Trinidad and Tobago Dollar',
  abbreviation: 'TTD',
  symbol: '&#84;&#84;&#36;'
}, {
  currency: 'Turkey Lira',
  abbreviation: 'TRY',
  symbol: '₺'
}, {
  currency: 'Turkey Lira',
  abbreviation: 'TRL',
  symbol: '&#8356;'
}, {
  currency: 'Tuvalu Dollar',
  abbreviation: 'TVD',
  symbol: '&#36;'
}, {
  currency: 'Ukraine Hryvna',
  abbreviation: 'UAH',
  symbol: '&#8372;'
}, {
  currency: 'United Kingdom Pound',
  abbreviation: 'GBP',
  symbol: '&#163;'
}, {
  currency: 'United States Dollar',
  abbreviation: 'USD',
  symbol: '&#36;'
}, {
  currency: 'Uruguay Peso',
  abbreviation: 'UYU',
  symbol: '&#36;&#85;'
}, {
  currency: 'Uzbekistan Som',
  abbreviation: 'UZS',
  symbol: '&#1083;&#1074;'
}, {
  currency: 'Venezuela Bolivar',
  abbreviation: 'VEF',
  symbol: '&#66;&#115;'
}, {
  currency: 'Viet Nam Dong',
  abbreviation: 'VND',
  symbol: '&#8363;'
}, {
  currency: 'Yemen Rial',
  abbreviation: 'YER',
  symbol: '&#65020;'
}, {
  currency: 'Zimbabwe Dollar',
  abbreviation: 'ZWD',
  symbol: '&#90;&#36;'
}];
const getCurrencySymbol = currencyCode => {
  const name = currencyCode.toLowerCase().trim();
  let currencySymbol = name;
  currenciesList.map(country => {
    const countryArray = country.currency.split(' ');
    const currencyName = countryArray.pop().toLowerCase().trim();
    const currencyAbbr = country.abbreviation.toLowerCase();
    const countryName = countryArray.join(' ').toLowerCase().trim();
    if (name === currencyName || name === countryName || name === currencyAbbr) {
      currencySymbol = country.symbol;
    }
  });
  return currencySymbol;
};

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_AnalyticsPage_jsx.js.map?ver=e93bd574c791652ae2ca