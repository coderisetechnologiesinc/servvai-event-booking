import "./bootstrap-i18n.js";
import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import React, { useRef, useEffect, Suspense, useState } from "react";
import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Layout from "./Components/Layout/Layout.jsx";
import "./Components/Layout/Layout.css";

const EventsPage = React.lazy(() => import("./Components/Pages/EventsPage"));
const IntegrationsPage = React.lazy(() =>
  import("./Components/Pages/IntegrationsPage"),
);
const EventDetails = React.lazy(() =>
  import("./Components/PostEditor/EventDetails"),
);
const SettingsPage = React.lazy(() =>
  import("./Components/Pages/SettingsPage"),
);
const FiltersPage = React.lazy(() => import("./Components/Pages/FiltersPage"));
const EmailTemplates = React.lazy(() =>
  import("./Components/Pages/EmailTemplates"),
);
const AnalyticsPage = React.lazy(() =>
  import("./Components/Pages/AnalyticsPage"),
);
const BookingsPage = React.lazy(() =>
  import("./Components/Pages/BookingsPage"),
);
const SupportPage = React.lazy(() => import("./Components/Pages/SupportPage"));
const BrandingPage = React.lazy(() =>
  import("./Components/Pages/BrandingPage.jsx"),
);
const ScrollManager = React.lazy(() =>
  import("./Components/Layout/ScrollManager.jsx"),
);
import { initI18n, translateAll, t } from "./utilities/textResolver.js";
window.t = t;
initI18n("en_US");
import { useServvStore } from "./store/useServvStore";

import "quill/dist/quill.core.css";

import ValidationScreen from "./Components/Pages/ValidationScreen.jsx";
const CreateEventForm = React.lazy(() =>
  import("./Components/Pages/CreateEventForm.jsx"),
);
const Dashboard = React.lazy(() => import("./Components/Pages/Dashboard.jsx"));
const CreateFilterPage = React.lazy(() =>
  import("./Components/Pages/CreateFilterPage.jsx"),
);
const FiltersListPage = React.lazy(() =>
  import("./Components/Pages/FiltersListPage.jsx"),
);

const SingleEventPageRouterShell = React.lazy(() =>
  import("./Components/Pages/SingleEventPageRouterShell.jsx"),
);

const ZoomPage = React.lazy(() => import("./Components/Pages/ZoomPage.jsx"));
const ZoomSettingsPage = React.lazy(() =>
  import("./Components/Pages/ZoomSettingsPage.jsx"),
);
const StripeIntegrationsPage = React.lazy(() =>
  import("./Components/Pages/StripeIntegrationsPage.jsx"),
);
const EmailsPage = React.lazy(() =>
  import("./Components/Pages/EmailsPage.jsx"),
);
const CalendarsPage = React.lazy(() =>
  import("./Components/Pages/CalendarsPage.jsx"),
);
const OnboardingFlow = React.lazy(() =>
  import("./Components/Pages/OnboardingFlow.jsx"),
);
const LayoutWrapper = () => (
  <Layout>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </Layout>
);

const AppRouter = ({ restAPIAvailable }) => {
  const { fetchSettings } = useServvStore();
  const [statusChecked, setStatusChecked] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetchSettings();

    intervalRef.current = setInterval(async () => {
      if (servvData.install_status !== "ok") {
        let settings = await fetchSettings();

        if (servvData.install_status === "ok" || settings?.id) {
          setStatusChecked(true);
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        if (servvData.install_status === "failed") {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!restAPIAvailable) {
    return <ValidationScreen message="REST API not accessible." />;
  }

  if (servvData.install_status === "failed") {
    return <ValidationScreen message="⚠️ Activation failed." troubleshoot />;
  }

  if (
    servvData.install_status !== "ok" &&
    servvData.install_status !== "failed" &&
    !statusChecked
  ) {
    return <ValidationScreen message="Installation in progress..." />;
  }

  return (
    <Suspense fallback={null}>
      <ScrollManager />
      <Routes>
        <Route path="events/new" element={<CreateEventForm />} />
        <Route path="events/offline/:id" element={<CreateEventForm />} />
        <Route path="events/zoom/:id" element={<CreateEventForm />} />
        <Route path="onboarding" element={<OnboardingFlow />} />

        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<EventsPage />} />
          {/* <Route
            path="events/:type/:id"
            element={<SingleEventPageRouterShell />}
          /> */}
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="filters" element={<FiltersPage />} />
          <Route path="filters/list/:type" element={<FiltersListPage />} />
          <Route path="filters/new/:type" element={<CreateFilterPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route
            path="integrations/stripe"
            element={<StripeIntegrationsPage />}
          />
          <Route path="integrations/gmail" element={<EmailsPage />} />
          <Route path="integrations/calendars" element={<CalendarsPage />} />
          <Route path="integrations/zoom" element={<ZoomPage />} />
          <Route
            path="integrations/zoom/settings"
            element={<ZoomSettingsPage />}
          />
          <Route path="notifications" element={<EmailTemplates />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="branding" element={<BrandingPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Suspense>
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
      </HashRouter>,
    );

    setTimeout(() => translateAll(), 0);
  }

  init();
});
