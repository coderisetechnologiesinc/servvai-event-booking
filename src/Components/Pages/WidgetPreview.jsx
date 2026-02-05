import { useEffect, useState, useRef } from "react";

/**
 * ✅ Servv Platform Widget Preview (Vue Widget in React)
 */
export default function WidgetPreview({ settings }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const mountRef = useRef(false);

  useEffect(() => {
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
      assets_url: "/wp-content/plugins/servv-wpse/widget/dist/",
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
          const hasContent =
            mountEl.children.length > 0 ||
            mountEl.__vue_app__ !== undefined ||
            mountEl.innerHTML.trim().length > 0;

          if (hasContent) {
            console.log("✅ Widget auto-mounted successfully!");
            setLoaded(true);
            mountRef.current = true;
          } else {
            console.warn(
              "⚠️ Widget loaded but not mounted. Trying manual mount...",
            );

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

  return (
    <div className="p-6 bg-gray-50 border rounded-xl space-y-4">
      <h2 className="text-lg font-semibold">
        Servv Widget Preview (React Admin)
      </h2>

      {/* ======================================================
          ✅ Hidden WordPress DOM Inputs
      ====================================================== */}

      <div style={{ display: "none" }}>
        <input id="servv_calendar_customer_id" defaultValue="" readOnly />
        <input id="servv_calendar_customer_email" defaultValue="" readOnly />
        <input
          id="servv_calendar_customer_first_name"
          defaultValue=""
          readOnly
        />
        <input
          id="servv_calendar_customer_last_name"
          defaultValue=""
          readOnly
        />
        <input
          id="servv_calendar_shop_domain"
          defaultValue="demo-shop.myshopify.com"
          readOnly
        />
        <input
          id="servv_calendar_signature"
          defaultValue="demo-signature"
          readOnly
        />
        <input
          id="servv_calendar_default_filter_params"
          defaultValue=""
          readOnly
        />
      </div>

      {/* ======================================================
          ✅ CRITICAL: Mount element MUST exist before useEffect runs
      ====================================================== */}

      <div
        id="servv-platform-widget"
        className="min-h-[500px] bg-white border rounded-xl shadow-sm"
      />

      {/* ======================================================
          ✅ Status Messages
      ====================================================== */}

      {!loaded && !error && (
        <p className="text-sm text-gray-500 text-center">
          Loading widget preview...
        </p>
      )}

      {loaded && (
        <p className="text-sm text-green-600 text-center">
          ✅ Widget loaded successfully
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600 text-center font-medium">{error}</p>
      )}
    </div>
  );
}
