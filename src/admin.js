import "./bootstrap-i18n.js";
import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import React, { useEffect, Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

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

import { initI18n, translateAll, t } from "./utilities/textResolver.js";
window.t = t;
initI18n("en_US");
import { useServvStore } from "./store/useServvStore";

import "quill/dist/quill.core.css";

import ValidationScreen from "./Components/Pages/ValidationScreen.jsx";
const CreateFilterPage = React.lazy(() =>
  import("./Components/Pages/CreateFilterPage.jsx")
);
const FiltersListPage = React.lazy(() =>
  import("./Components/Pages/FiltersListPage.jsx")
);

const SingleEventPageRouterShell = React.lazy(() =>
  import("./Components/Pages/SingleEventPageRouterShell.jsx")
);

const ZoomPage = React.lazy(() => import("./Components/Pages/ZoomPage.jsx"));
const ZoomSettingsPage = React.lazy(() =>
  import("./Components/Pages/ZoomSettingsPage.jsx")
);
const StripeIntegrationsPage = React.lazy(() =>
  import("./Components/Pages/StripeIntegrationsPage.jsx")
);
const EmailsPage = React.lazy(() =>
  import("./Components/Pages/EmailsPage.jsx")
);
const CalendarsPage = React.lazy(() =>
  import("./Components/Pages/CalendarsPage.jsx")
);

const AppRouter = ({ restAPIAvailable }) => {
  const { fetchSettings, settings } = useServvStore();

  useEffect(() => {
    fetchSettings();
  }, []);

  // VALIDATION HANDLING
  if (!restAPIAvailable) {
    return <ValidationScreen message="REST API not accessible." />;
  }

  if (servvData.install_status === "failed") {
    return (
      <ValidationScreen message="⚠️ Activation failed." troubleshoot={true} />
    );
  }

  if (
    servvData.install_status !== "ok" &&
    servvData.install_status !== "failed"
  ) {
    return <ValidationScreen message="Installation in progress..." />;
  }

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="events" replace />} />
          <Route path="events" element={<EventsPage />} />
          <Route
            path="events/:type/:id"
            element={<SingleEventPageRouterShell />}
          />
          <Route
            path="events/:type/:id/occ/:occurrenceId"
            element={<SingleEventPageRouterShell />}
          />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="integrations/zoom" element={<ZoomPage />} />
          <Route
            path="integrations/zoom/settings"
            element={<ZoomSettingsPage />}
          />
          <Route path="integrations/gmail" element={<EmailsPage />} />
          <Route path="integrations/calendars" element={<CalendarsPage />} />
          <Route
            path="integrations/stripe"
            element={<StripeIntegrationsPage />}
          />
          <Route path="event" element={<EventDetails />} />
          <Route path="filters" element={<FiltersPage />} />
          <Route path="filters/list/:type" element={<FiltersListPage />} />
          <Route path="filters/new/:type" element={<CreateFilterPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="notifications" element={<EmailTemplates />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

const EventPage = () => (
  <div className="servv-page">
    <Suspense fallback={<div>Loading event...</div>}>
      <EventDetails />
    </Suspense>
  </div>
);

domReady(() => {
  const rootEl = document.getElementById("servv-wrap");
  const root = createRoot(rootEl);

  async function init() {
    let restAPIAvailable = true;

    try {
      const res = await fetch(window.location.origin + "/wp-json/");
      restAPIAvailable = res.ok;
    } catch {
      restAPIAvailable = false;
    }

    root.render(
      <HashRouter>
        {servvData.page === "servvai-event-booking" ? (
          <AppRouter restAPIAvailable={restAPIAvailable} />
        ) : servvData.page === "events" ? (
          <EventPage />
        ) : null}
      </HashRouter>
    );

    setTimeout(() => translateAll(), 0);
  }

  init();
});
