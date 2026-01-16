"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Layout_ScrollManager_jsx"],{

/***/ "./src/Components/Layout/ScrollManager.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Layout/ScrollManager.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");


const ScrollManager = () => {
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
    }
  }, [pathname]);
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollManager);

/***/ })

}]);
//# sourceMappingURL=src_Components_Layout_ScrollManager_jsx.js.map?ver=6d399514175f2e2782b3