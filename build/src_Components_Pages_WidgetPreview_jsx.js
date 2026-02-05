"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_WidgetPreview_jsx"],{

/***/ "./src/Components/Pages/WidgetPreview.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/WidgetPreview.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WidgetPreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * ✅ Servv Platform Widget Preview (Vue Widget in React)
 */

function WidgetPreview({
  settings
}) {
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mountRef.current) return;

    /* ======================================================
       ✅ 1. CRITICAL: Create mount element BEFORE script loads
    ====================================================== */

    // Ensure mount element exists first
    if (!document.querySelector("#servv-platform-widget")) {
      console.error("❌ Mount element must exist before script injection!");
      setError("❌ Internal error: mount element timing issue");
      return;
    }
    console.log("✅ Mount element confirmed present");

    /* ======================================================
       ✅ 2. Provide required WordPress globals
    ====================================================== */

    window.servvAjax = {
      ajax_url: "/wp-admin/admin-ajax.php",
      nonce: "demo-nonce",
      assets_url: "/wp-content/plugins/servv-wpse/widget/dist/"
    };
    window.__SERVV_SETTINGS__ = settings || {};
    console.log("✅ servvAjax injected:", window.servvAjax);
    console.log("✅ __SERVV_SETTINGS__ injected");

    /* ======================================================
       ✅ 3. Asset URLs
    ====================================================== */

    const base = "/wp-content/plugins/servv-wpse/widget/dist/";
    const scriptUrl = base + "js/servv-widget.js";
    const cssUrl = base + "css/servv-widget.css";

    /* ======================================================
       ✅ 4. Inject Widget CSS
    ====================================================== */

    if (!document.getElementById("servv-css")) {
      const link = document.createElement("link");
      link.id = "servv-css";
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);
      console.log("✅ Widget CSS injected:", cssUrl);
    }

    /* ======================================================
       ✅ 5. Inject Widget Script
    ====================================================== */

    const existingScript = document.getElementById("servv-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "servv-script";
      script.src = scriptUrl;
      script.async = false; // Synchronous loading for predictable execution

      script.onload = () => {
        console.log("✅ Widget JS loaded successfully");

        // The widget auto-mounts when script loads
        // Just verify it worked
        setTimeout(() => {
          const mountEl = document.querySelector("#servv-platform-widget");
          if (!mountEl) {
            console.error("❌ Mount element disappeared!");
            setError("❌ Mount element not found");
            return;
          }

          // Check if Vue mounted
          const hasContent = mountEl.children.length > 0 || mountEl.__vue_app__ !== undefined || mountEl.innerHTML.trim().length > 0;
          if (hasContent) {
            console.log("✅ Widget auto-mounted successfully!");
            setLoaded(true);
            mountRef.current = true;
          } else {
            console.warn("⚠️ Widget loaded but not mounted. Trying manual mount...");

            // Fallback: manually call mount function
            if (typeof window.ServvMountWidget === "function") {
              try {
                window.ServvMountWidget("#servv-platform-widget");
                console.log("✅ Manual mount successful");
                setLoaded(true);
                mountRef.current = true;
              } catch (err) {
                console.error("❌ Manual mount failed:", err);
                setError(`❌ Mount failed: ${err.message}`);
              }
            } else {
              setError("❌ Widget mount function not available");
            }
          }
        }, 300);
      };
      script.onerror = () => {
        console.error("❌ Failed loading widget script:", scriptUrl);
        setError("❌ Widget script failed to load");
      };
      document.body.appendChild(script);
      console.log("✅ Widget Script injected:", scriptUrl);
    } else {
      console.log("ℹ️ Widget script already exists");

      // Script already loaded, manually mount
      setTimeout(() => {
        const mountEl = document.querySelector("#servv-platform-widget");
        if (!mountEl) {
          setError("❌ Mount element not found");
          return;
        }

        // Check if already mounted
        const hasContent = mountEl.children.length > 0 || mountEl.__vue_app__;
        if (hasContent) {
          console.log("✅ Widget already mounted");
          setLoaded(true);
          mountRef.current = true;
        } else if (typeof window.ServvMountWidget === "function") {
          try {
            console.log("✅ Calling ServvMountWidget for re-mount");
            window.ServvMountWidget("#servv-platform-widget");
            setLoaded(true);
            mountRef.current = true;
          } catch (err) {
            console.error("❌ Mount error:", err);
            setError(`❌ Mount failed: ${err.message}`);
          }
        } else {
          setError("❌ Widget mount function not available");
        }
      }, 100);
    }

    // Cleanup
    return () => {
      const mountEl = document.querySelector("#servv-platform-widget");
      if (mountEl && mountEl.__vue_app__) {
        try {
          mountEl.__vue_app__.unmount();
          console.log("✅ Vue app unmounted");
        } catch (err) {
          console.warn("⚠️ Unmount error:", err);
        }
      }
    };
  }, [settings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "p-6 bg-gray-50 border rounded-xl space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      className: "text-lg font-semibold",
      children: "Servv Widget Preview (React Admin)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        display: "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_customer_id",
        defaultValue: "",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_customer_email",
        defaultValue: "",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_customer_first_name",
        defaultValue: "",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_customer_last_name",
        defaultValue: "",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_shop_domain",
        defaultValue: "demo-shop.myshopify.com",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_signature",
        defaultValue: "demo-signature",
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "servv_calendar_default_filter_params",
        defaultValue: "",
        readOnly: true
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      id: "servv-platform-widget",
      className: "min-h-[500px] bg-white border rounded-xl shadow-sm"
    }), !loaded && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-500 text-center",
      children: "Loading widget preview..."
    }), loaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-green-600 text-center",
      children: "\u2705 Widget loaded successfully"
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-red-600 text-center font-medium",
      children: error
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_WidgetPreview_jsx.js.map?ver=acc9977a39f8d0eb6b31