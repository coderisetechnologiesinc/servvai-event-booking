import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import SideBar from "./Components/Menu/SideMenu";
import { useEffect, useState } from "react";
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

import "quill/dist/quill.core.css";
import { getSettings } from "./utilities/settings";
import { getFilters } from "./utilities/filters";
const AdminSettingsPage = () => {
  const [selectedPage, setSelectedPage] = useState("events");
  const [resetSelectedSubpage, setResetSelectedSubPage] = useState(false);
  const [settings, setSettings] = useState(null);
  const [filtersList, setFiltersList] = useState({});
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const settingsData = await getSettings();
    if (settingsData) {
      setSettings(settingsData);
    }
  };

  const fetchFilters = async () => {
    if (servvData.servv_plugin_mode === "development") {
      const filters = await getFilters(
        settings && settings.current_plan.id ? settings.current_plan.id : 1
      );
      setFiltersList(filters);
    } else {
      const filters = getFilters(
        settings && settings.current_plan.id ? settings.current_plan.id : 1
      );
      setFiltersList(filters);
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

  return (
    <div className="page">
      {/* <ThemeProvider theme={theme}> */}
      <SideBar
        page={selectedPage}
        onChange={onPageChange}
        collapsed={collapsedMenu}
      />
      <div
        className="collapse-activator"
        onClick={() => handleCollapseMenu()}
      ></div>
      {selectedPage === "events" && (
        <React.Suspense fallback={null}>
          <EventsPage
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
            settings={settings}
            filtersList={filtersList}
            isLoading={loading}
            setIsLoading={setLoading}
          />
        </React.Suspense>
      )}
      {selectedPage === "bookings" && (
        <React.Suspense fallback={null}>
          <BookingsPage
            resetSelectedSubpage={resetSelectedSubpage}
            handleResetSubpage={handleResetSelectedSubpage}
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
      {/* </ThemeProvider> */}
    </div>
  );
};
const EventPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let eventId = urlParams.get("event");
    let occurrenceId = urlParams.get("occurrence");
  }, []);
};

domReady(() => {
  const root = createRoot(document.getElementById("servv-wrap"));
  if (servvData.page === "servvai-event-booking") {
    root.render(<AdminSettingsPage />);
  } else if (servvData.page === "events") {
    root.render(<EventPage />);
  }
});
