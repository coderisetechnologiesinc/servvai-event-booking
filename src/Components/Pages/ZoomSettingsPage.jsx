import { Fragment, useEffect, useState } from "react";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import PageContent from "../Containers/PageContent";
import AnnotatedSection from "../Containers/AnnotatedSection";
import RadioControl from "../Controls/RadioControl";
import InputFieldControl from "../Controls/InputFieldControl";
import CheckboxControl from "../Controls/CheckboxControl";
import InlineStack from "../Containers/InlineStack";
import PageActionButton from "../Controls/PageActionButton";
import BreadCrumbs from "../Menu/BreadCrumbs";
import PageWrapper from "./PageWrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ZoomSettingsPage = () => {
  const navigate = useNavigate();
  const [zoomSettings, setZoomSettings] = useState({
    use_pmi: false,
    waiting_room: true,
    host_video: false,
    join_before_host: false,
    mute_upon_entry: false,
    participant_video: false,
    auto_recording: "none",
    audio: "voip",
  });
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const updateZoomSettings = async () => {
    const newSettings = { ...settings };
    const adminDashboardSettings = { ...settings.admin_dashboard };
    adminDashboardSettings.zoom_meeting_default_settings = zoomSettings;
    // newSettings.settings.admin_dashboard = ""
    newSettings.settings.admin_dashboard = JSON.stringify(
      adminDashboardSettings,
    );
    const updateZoomSettingsResponse = await axios.put(
      "/wp-json/servv-plugin/v1/shop/settings",
      newSettings,
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
  };

  const handleSettingsChange = (field, value) => {
    let newSettings = { ...zoomSettings };
    newSettings[field] = value;
    setZoomSettings(newSettings);
  };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      if (getZoomAccountResponse.data.email)
        setAccount(getZoomAccountResponse.data);

      setAccountFetched(true);
    }
  };
  const getZoomSettings = async () => {
    const shopInfo = await axios.get("/wp-json/servv-plugin/v1/shop/info", {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (shopInfo && shopInfo.status === 200 && shopInfo.data.settings) {
      setSettings(shopInfo.data);
      if (shopInfo.data.settings.admin_dashboard.length > 0) {
        const adminSettings = JSON.parse(
          shopInfo.data.settings.admin_dashboard,
        );
        if (adminSettings.zoom_meeting_default_settings)
          setZoomSettings(adminSettings.zoom_meeting_default_settings);
      }
    }
  };
  const getInfo = async () => {
    await getZoomSettings();
    await getZoomAccount();
  };
  useEffect(() => {
    getInfo();
  }, []);
  const responsiveBlockStack = "w-full min-w-0";
  return (
    <PageWrapper loading={loading} withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + breadcrumbs + description */}
          <div className="dashboard-heading">
            <h1 className="dashboard-title mt-6">{t("Zoom Settings")}</h1>
            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={[
                  {
                    label: "Integrations",
                    action: () => navigate("../../integrations"),
                  },
                  {
                    label: "Zoom",
                    action: () => navigate("../integrations/zoom"),
                  },
                  {
                    label: "Zoom Settings",
                    action: () => {},
                  },
                ]}
              />
            </div>

            {/* <p className="dashboard-description">
              {t("Connect and manage your Zoom account and settings.")}
            </p> */}
          </div>

          {/* RIGHT: actions */}
          <div className="dashboard-actions">
            <PageActionButton
              text={t("Save")}
              type="primary"
              onAction={updateZoomSettings}
            />
          </div>
        </div>

        {/* <div className="header-line" /> */}

        <PageContent>
          <BlockStack
            gap={8}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <h1 className="text-lg font-semibold border-b pb-4">
              {t("Account")}
            </h1>
            <AnnotatedSection
              title="Account details"
              description="Account email & name."
            >
              <BlockStack gap={4}>
                <InputFieldControl
                  value={isAccountFetched ? account.email : ""}
                  fullWidth={true}
                  type="text"
                  align="right"
                  disabled={true}
                  maxLength={30}
                  image={isAccountFetched ? account.photo : null}
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Account name"
              description="Set a default time zone."
            >
              <BlockStack gap={4}>
                <InputFieldControl
                  value={isAccountFetched ? account.full_name : ""}
                  fullWidth={false}
                  type="text"
                  align="right"
                  disabled={true}
                  maxLength={30}
                />
              </BlockStack>
            </AnnotatedSection>
            <h1 className="text-lg font-semibold border-b pb-4">
              {t("Zoom settings")}
            </h1>
            <AnnotatedSection title="Meeting ID" description="Set a meeting ID">
              <BlockStack gap={4}>
                <RadioControl
                  label="Generate automatically"
                  name="meeting_id"
                  checked={!zoomSettings.use_pmi}
                  onChange={() => handleSettingsChange("use_pmi", false)}
                />
                <RadioControl
                  label="Personal meeting ID"
                  name="meeting_id"
                  checked={zoomSettings.use_pmi}
                  onChange={() => handleSettingsChange("use_pmi", true)}
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Video"
              description="Show/hide host and guest video"
            >
              <BlockStack gap={4}>
                <CheckboxControl
                  label="Host video"
                  name="host_video"
                  checked={zoomSettings.host_video}
                  onChange={() =>
                    handleSettingsChange("host_video", !zoomSettings.host_video)
                  }
                />
                <CheckboxControl
                  label="Guest video"
                  name="guest_video"
                  checked={zoomSettings.participant_video}
                  onChange={() =>
                    handleSettingsChange(
                      "participant_video",
                      !zoomSettings.participant_video,
                    )
                  }
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Audio"
              description="Set default audio settings"
            >
              <BlockStack gap={4}>
                <RadioControl
                  label="Telephone"
                  name="audio"
                  checked={zoomSettings.audio === "telephony"}
                  onChange={() => handleSettingsChange("audio", "telephony")}
                />
                <RadioControl
                  label="Computer audio"
                  name="audio"
                  checked={zoomSettings.audio === "voip"}
                  onChange={() => handleSettingsChange("audio", "voip")}
                />
                <RadioControl
                  label="Both"
                  name="audio"
                  checked={zoomSettings.audio === "both"}
                  onChange={() => handleSettingsChange("audio", "both")}
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Enable Join Before Host"
              description="Enable or disabled join before host"
            >
              <BlockStack gap={4}>
                <RadioControl
                  label="Yes"
                  name="join_before_host"
                  checked={zoomSettings.join_before_host}
                  onChange={() =>
                    handleSettingsChange("join_before_host", true)
                  }
                />
                <RadioControl
                  label="No"
                  name="join_before_host"
                  checked={!zoomSettings.join_before_host}
                  onChange={() =>
                    handleSettingsChange("join_before_host", false)
                  }
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Enable Waiting Room"
              description="Enable or disabled waiting room"
            >
              <BlockStack gap={4}>
                <RadioControl
                  label="Yes"
                  name="waiting_room"
                  checked={zoomSettings.waiting_room}
                  onChange={() => handleSettingsChange("waiting_room", true)}
                />
                <RadioControl
                  label="No"
                  name="waiting_room"
                  checked={!zoomSettings.waiting_room}
                  onChange={() => handleSettingsChange("waiting_room", false)}
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Automatically record meeting"
              description="Record meeting on local computer"
            >
              <BlockStack gap={4}>
                <RadioControl
                  label="Yes"
                  name="auto_recording"
                  checked={zoomSettings.auto_recording === "local"}
                  onChange={() =>
                    handleSettingsChange("auto_recording", "local")
                  }
                />
                <RadioControl
                  label="No"
                  name="auto_recording"
                  checked={zoomSettings.auto_recording === "none"}
                  onChange={() =>
                    handleSettingsChange("auto_recording", "none")
                  }
                />
              </BlockStack>
            </AnnotatedSection>
          </BlockStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};

export default ZoomSettingsPage;
