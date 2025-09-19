import "./bootstrap-i18n.js";
import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import SideBar from "./Components/Menu/SideMenu";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./Components/LanguageSwitcher.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import "./Components/Layout/Layout.css";
const EventsPage = React.lazy(() => import("./Components/Pages/EventsPage"));
const IntegrationsPage = React.lazy(() =>
  import("./Components/Pages/IntegrationsPage")
);
const EventDetails = React.lazy(() =>
  import("./Components/PostEditor/EventDetails")
);
const SettingsPage = React.lazy(() =>
  import("./Components/Pages/SettingsPage")
);
const FiltersPage = React.lazy(() => import("./Components/Pages/FiltersPage"));
const EmailTemplates = React.lazy(() =>
  import("./Components/Pages/EmailTemplates")
);
const AnalyticsPage = React.lazy(() =>
  import("./Components/Pages/AnalyticsPage")
);
const BookingsPage = React.lazy(() =>
  import("./Components/Pages/BookingsPage")
);
const SupportPage = React.lazy(() => import("./Components/Pages/SupportPage"));

// ————————————— i18n SETUP ——————————————
// Immediately after you import your resolver…
import { initI18n, translateAll, t } from "./utilities/textResolver.js";

// Expose `t` into the global/window scope:
window.t = t;

// Then your existing init call...
initI18n("en_US");

import "quill/dist/quill.core.css";
import { getSettings } from "./utilities/settings";
import { getFilters } from "./utilities/filters";
import { toast, ToastContainer } from "react-toastify";
import ValidationScreen from "./Components/Pages/ValidationScreen.jsx";
const AdminSettingsPage = ({ settingsData }) => {
  const [selectedPage, setSelectedPage] = useState("events");
  const [resetSelectedSubpage, setResetSelectedSubPage] = useState(false);
  const [settings, setSettings] = useState(null);
  const [filtersList, setFiltersList] = useState({});
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const onPageChange = (page) => {
    if (selectedPage !== page) setSelectedPage(page);
    else {
      setSelectedPage(page);
      setResetSelectedSubPage(true);
    }
  };

  const handleResetSelectedSubpage = () => {
    setResetSelectedSubPage(false);
  };

  const handleCollapseMenu = () => {
    setCollapsedMenu(!collapsedMenu);
  };

  const fetchSettings = async () => {
    setLoading(true);
    const settingsData = await getSettings();

    if (settingsData && !settingsData.errorCode) {
      setSettings(settingsData);
    } else if (settingsData.error) {
      setErrorMessage(
        "We're facing an issue loading the settings. Please reactivate the plugin."
      );

      setLoading(false);
    }
    // setLoading(false);
  };

  const fetchFilters = async () => {
    setLoading(true);
    if (servvData.servv_plugin_mode === "development") {
      const filters = await getFilters(
        settings && settings.current_plan && settings.current_plan.id
          ? settings.current_plan.id
          : 1
      );
      setFiltersList(filters);

      setLoading(false);
    } else {
      const filters = await getFilters(
        settings && settings.current_plan && settings.current_plan.id
          ? settings.current_plan.id
          : 1
      );
      if (filters) {
        setFiltersList(filters);
      }

      setLoading(false);
    }
  };

  const getPluginData = async () => {
    setLoading(true);
    if (servvData.servv_plugin_mode === "development") {
      await fetchSettings();
    } else {
      fetchSettings();
    }
  };

  useEffect(() => {
    if (settings) {
      fetchFilters();
    }
  }, [settings]);
  useEffect(() => {
    const parsedUrl = new URL(window.location);
    const params = new URLSearchParams(parsedUrl.search);
    const section = params.get("section");

    if (section && section === "stripe-integration") {
      setSelectedPage("integrations");
    } else {
      getPluginData();
    }
  }, []);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    setResetSelectedSubPage(true);
  };

  return (
    // <div className="min-width">
    <Layout selectedPage={selectedPage} onPageChange={handlePageChange}>
      {selectedPage === "events" && (
        <React.Suspense fallback={null}>
          <EventsPage
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
            settings={settings}
            filtersList={filtersList}
            isLoading={loading}
            setIsLoading={setLoading}
            globalError={errorMessage}
          />
        </React.Suspense>
      )}
      {selectedPage === "bookings" && (
        <React.Suspense fallback={null}>
          <BookingsPage
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
            settings={settings}
          />
        </React.Suspense>
      )}
      {selectedPage === "integrations" && (
        <React.Suspense fallback={null}>
          <IntegrationsPage
            settings={settings}
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
          />
        </React.Suspense>
      )}
      {selectedPage === "event" && (
        <React.Suspense fallback={null}>
          <EventDetails />
        </React.Suspense>
      )}
      {selectedPage === "filters" && (
        <React.Suspense fallback={null}>
          <FiltersPage
            settings={settings}
            filtersList={filtersList}
            getFilters={fetchFilters}
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
          />
        </React.Suspense>
      )}
      {selectedPage === "settings" && (
        <React.Suspense fallback={null}>
          <SettingsPage />
        </React.Suspense>
      )}
      {selectedPage === "notifications" && (
        <React.Suspense fallback={null}>
          <EmailTemplates settings={settings} />
        </React.Suspense>
      )}
      {selectedPage === "analytics" && (
        <React.Suspense fallback={null}>
          <AnalyticsPage settings={settings} />
        </React.Suspense>
      )}
      {selectedPage === "support" && (
        <React.Suspense fallback={null}>
          <SupportPage settings={settings} />
        </React.Suspense>
      )}
    </Layout>
  );
};
const EventPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let eventId = urlParams.get("event");
    let occurrenceId = urlParams.get("occurrence");
  }, []);
  return (
    <div className="servv-page">
      <React.Suspense fallback={<div>Loading event...</div>}>
        <EventDetails />
      </React.Suspense>
    </div>
  );
};

domReady(() => {
  const rootEl = document.getElementById("servv-wrap");
  const root = createRoot(rootEl);

  async function init() {
    let restAPIAvailable = true;

    try {
      const res = await fetch(window.location.origin + "/wp-json/");
      if (!res.ok) {
        restAPIAvailable = false;
      } else {
        console.log("REST API accessible");
      }
    } catch (err) {
      restAPIAvailable = false;
      console.error("REST API error:", err);
    }

    function renderComponent() {
      let component;

      if (servvData.page === "servvai-event-booking") {
        if (!restAPIAvailable) {
          component = (
            <ValidationScreen message="We couldn't complete the installation of Servv AI Event Booking because the WordPress REST API (/wp-json/) is not accessible. Please enable it to allow the plugin to work properly." />
          );
        } else if (servvData.install_status === "failed") {
          component = (
            <ValidationScreen message="Activation failed. Please contact the Servv support team." />
          );
        } else if (
          servvData.install_status !== "ok" &&
          servvData.install_status !== "failed"
        ) {
          component = (
            <ValidationScreen message="Please wait. The installation is in progress" />
          );

          setTimeout(() => {
            if (
              servvData.install_status !== "ok" &&
              servvData.install_status !== "failed"
            ) {
              if (restAPIAvailable) window.location.reload();
            }
          }, 5000);
        } else {
          component = <AdminSettingsPage />;
        }
      } else if (servvData.page === "events") {
        component = <EventPage />;
      }

      root.render(<div>{component}</div>);
    }

    renderComponent();

    setTimeout(() => {
      translateAll();
    }, 0);
  }

  init();
});
