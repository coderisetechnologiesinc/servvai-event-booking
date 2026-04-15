import { useEffect, useState } from "react";
import PageContent from "../Containers/PageContent";
import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import BreadCrumbs from "../Menu/BreadCrumbs";
import { useNavigate } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import NewInputControl from "../Controls/NewInputControl";
import { useServvStore } from "../../store/useServvStore";
import { saveSettings } from "../../utilities/settings";
const GoogleAnalyticsPage = ({ onPageSelect = () => {} }) => {
  const settings = useServvStore((s) => s.settings);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const navigate = useNavigate();
  const [GAIdFetched, setGAIdFetched] = useState(null);
  const [storedGAId, setStoredGAId] = useState("");
  const [GAId, setGAId] = useState("G-");
  const handleSaveGAId = async () => {
    let newSettings = { ...settings };
    let widgetSettings = JSON.parse(settings.settings.widget_style_settings);
    widgetSettings.google_analytics_id = GAId;
    newSettings.settings = {
      ...newSettings.settings,
      widget_style_settings: JSON.stringify(widgetSettings),
    };
    await saveSettings(newSettings);
    await fetchSettings();
  };
  useEffect(() => {
    if (settings && settings?.settings?.widget_style_settings) {
      let widgetSettings = JSON.parse(settings.settings.widget_style_settings);
      if (widgetSettings.google_analytics_id) {
        setGAId(widgetSettings.google_analytics_id);
        setStoredGAId(widgetSettings.google_analytics_id);
        setGAIdFetched(true);
      }
    }
  }, [settings]);
  const badge = () => (
    <div className="flex items-center gap-3 w-full">
      <Badge
        background="gray"
        text={
          storedGAId && storedGAId.length > 2 ? "Connected" : "Not connected"
        }
        justify="start"
      />

      <div className="flex-1 w-full">
        <NewInputControl
          value={GAId}
          onChange={(val) => setGAId(val)}
          placeholder="G-XXXXXXXXXX"
          label=""
          helpText=""
          style={{ height: 36, width: "100%" }}
        />
      </div>
    </div>
  );
  const handleBreadCrumbsClick = () => {};
  return (
    <PageWrapper withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">Google Analytics</h1>
            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={[
                  {
                    label: "Integrations",
                    action: () => navigate("../integrations"),
                  },
                  { label: "Google Analytics", action: () => {} },
                ]}
                onBreadCrumbClick={handleBreadCrumbsClick}
              />
            </div>
            {/* <p className="page-header-description">
            {t(
              "Sync your event schedules effortlessly with Google Calendar or\r\n            Outlook to keep everyone informed."
            )}
          </p> */}
          </div>
        </div>
        <PageContent>
          <InlineStack gap={8} cardsLayout={true}>
            <Card padding={0} maxWidth="85%" align="center">
              <div
                className="servv-service-image"
                style={{
                  background: `linear-gradient(to bottom, transparent, #ECE4F6)`,
                }}
              >
                {
                  <div className="connected-account bg-gradient-to-b from-transparent to-black/40">
                    <span>Google Analytics Id</span>
                    {badge()}
                  </div>
                }
              </div>
              <div className="card-content">
                <h2 className="card-section-heading">Google Analytics</h2>
                <p className="section-description">
                  Connect Google Analytics to track visits, clicks, and
                  conversions in one place.
                  {/* {t(
                  "Sync and manage your Google Calendar account and settings."
                )}(*/}
                </p>
                {
                  <a
                    href="#"
                    className="servv-button-link"
                    onClick={(e) => {
                      e.preventDefault();

                      handleSaveGAId();
                    }}
                  >
                    Save
                  </a>
                }
              </div>
            </Card>
          </InlineStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};
export default GoogleAnalyticsPage;
