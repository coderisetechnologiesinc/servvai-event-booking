import { useEffect, useState } from "react";

import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageActionButton from "../Controls/PageActionButton";
import BlockStack from "../Containers/BlockStack";

import { useServvStore } from "../../store/useServvStore";
import axios from "axios";
import { toast } from "react-toastify";

/* ✅ Cards */
import SettingsCardWithModal from "../../Components/SettingsCardWithModal";
import CustomLinksModal from "../CustomLinksModal";
import YoutubeLinksModal from "../YoutubeLinksModal";
/* ✅ Modals */
import ProfileBrandingModal from "../../Components/ProfileBrandingModal";
import LinkInBioModal from "../../Components/LinkInBioModal";
import ThemeBrandingModal from "../../Components/ThemeBrandingModal";

/* ✅ Icons */
import { LinkIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

import { Profile, Youtube, Link } from "../../assets/icons";

const BrandingPage = () => {
  const { settings } = useServvStore();

  /* ======================================================
     STATE
  ====================================================== */

  const [loading, setLoading] = useState(false);

  /* Profile */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [hideAvatar, setHideAvatar] = useState(false);

  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarUploading, setAvatarUploading] = useState(false);

  const [uploadedBannerUrl, setUploadedBannerUrl] = useState(null);
  const [bannerImagePreview, setBannerImagePreview] = useState("");
  const [bannerUploading, setBannerUploading] = useState(false);

  /* Link In Bio */
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTikTok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [x, setX] = useState("");
  const [facebook, setFacebook] = useState("");

  const [links, setLinks] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [order, setOrder] = useState(["events", "links", "videos"]);

  /* Theme */
  const [bgType, setBgType] = useState("color");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const [backgroundGradient, setBackgroundGradient] = useState(
    "linear-gradient(135deg, #4f46e5, #9333ea)",
  );

  const [backgroundImagePreview, setBackgroundImagePreview] = useState("");
  const [bgUploading, setBgUploading] = useState(false);

  const [textColor, setTextColor] = useState("#121633");
  const [textOpacity, setTextOpacity] = useState(0.5);

  const [widgetBgType, setWidgetBgType] = useState("color");
  const [widgetBgColor, setWidgetBgColor] = useState("#ffffff");
  const [widgetBgGradient, setWidgetBgGradient] = useState(
    "linear-gradient(135deg, #ffffff, #f3f4f6)",
  );

  const responsiveBlock = "w-full min-w-0";

  /* ======================================================
     LOAD SETTINGS
  ====================================================== */

  useEffect(() => {
    if (!settings?.settings?.widget_style_settings) return;

    let w = settings.settings.widget_style_settings;

    if (typeof w === "string") {
      try {
        w = JSON.parse(w);
      } catch {
        return;
      }
    }

    /* Profile */
    setTitle(w.pw_title || "");
    setDescription(w.pw_description || "");
    setAddress(w.pw_address || "");
    setEmail(w.pw_email || "");
    setHideAvatar(w.pw_hide_avatar || false);

    setUploadedUrl(w.pw_avatar || null);
    setAvatarPreview(w.pw_avatar || "");

    setUploadedBannerUrl(w.pw_banner_image || null);
    setBannerImagePreview(w.pw_banner_image || "");

    /* Social */
    setInstagram(w.pw_instagram || "");
    setTikTok(w.pw_tiktok || "");
    setYoutube(w.pw_youtube || "");
    setX(w.pw_x || "");
    setFacebook(w.pw_facebook || "");

    setLinks(Array.isArray(w.pw_links) ? w.pw_links : []);
    setYoutubeVideos(
      Array.isArray(w.pw_youtube_videos) ? w.pw_youtube_videos : [],
    );

    setOrder(
      Array.isArray(w.pw_content_order)
        ? w.pw_content_order
        : ["events", "links", "videos"],
    );

    /* Theme */
    setBgType(w.pw_bg_type || "color");
    setBackgroundColor(w.pw_background_color || "#ffffff");
    setBackgroundOpacity(w.pw_background_opacity ?? 1);

    setBackgroundGradient(w.pw_background_gradient || backgroundGradient);

    setTextColor(w.pw_text_color || "#121633");
    setTextOpacity(w.pw_text_opacity ?? 0.5);

    setWidgetBgType(w.pw_widget_bg_type || "color");
    setWidgetBgColor(w.pw_widget_bg_color || "#ffffff");
    setWidgetBgGradient(w.pw_widget_bg_gradient || widgetBgGradient);
  }, [settings]);

  /* ======================================================
     UPLOAD HELPERS (✅ Missing Methods Restored)
  ====================================================== */

  const handleUploadError = (error) => {
    setTimeout(() => {
      if (!error?.response) {
        toast.error("Network error. Check your internet connection.");
        return;
      }

      const { status, data } = error.response;

      if (status === 413) {
        toast.error("File is too large for the server.");
        return;
      }

      if (data?.code === "rest_upload_unknown_error") {
        toast.error(
          "Upload failed on server. Please contact site administrator.",
        );
        return;
      }

      toast.error(data?.message || "Upload failed.");
    }, 0);
  };

  const uploadImageToMediaLibrary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/wp-json/wp/v2/media", formData, {
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        timeout: 30000,
      });

      return res.data.source_url;
    } catch (error) {
      handleUploadError(error);
      return null;
    }
  };

  /* ---------------- Avatar Upload ---------------- */

  const handleAvatarChange = async (file) => {
    if (!file) return;

    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);

    if (url) {
      setUploadedUrl(url);
    }

    setAvatarUploading(false);
  };

  /* ---------------- Banner Upload ---------------- */

  const handleBannerChange = async (file) => {
    if (!file) return;

    setBannerUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBannerImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload banner image
    const url = await uploadImageToMediaLibrary(file);

    if (url) {
      setUploadedBannerUrl(url);
    }

    setBannerUploading(false);
  };

  /* ---------------- Background Upload ---------------- */

  const handleBackgroundImageChange = async (file) => {
    if (!file) return;

    setBgUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBackgroundImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload image
    const url = await uploadImageToMediaLibrary(file);

    if (url) {
      // If later you want to persist pw_background_image, add state:
      // setBackgroundImage(url);
      console.log("Background uploaded:", url);
    }

    setBgUploading(false);
  };

  /* ======================================================
     SAVE SETTINGS
  ====================================================== */

  const saveSettings = async () => {
    setLoading(true);

    let oldWidgetSettings = {};
    try {
      oldWidgetSettings = JSON.parse(
        settings.settings.widget_style_settings || "{}",
      );
    } catch {}

    const newWidgetSettings = {
      ...oldWidgetSettings,

      pw_title: title,
      pw_description: description,
      pw_address: address,
      pw_email: email,

      pw_hide_avatar: hideAvatar,
      pw_avatar: uploadedUrl,
      pw_banner_image: uploadedBannerUrl,

      pw_instagram: instagram,
      pw_tiktok: tiktok,
      pw_youtube: youtube,
      pw_x: x,
      pw_facebook: facebook,

      pw_links: links,
      pw_youtube_videos: youtubeVideos,
      pw_content_order: order,

      pw_bg_type: bgType,
      pw_background_color: backgroundColor,
      pw_background_opacity: backgroundOpacity,
      pw_background_gradient: backgroundGradient,

      pw_text_color: textColor,
      pw_text_opacity: textOpacity,

      pw_widget_bg_type: widgetBgType,
      pw_widget_bg_color: widgetBgColor,
      pw_widget_bg_gradient: widgetBgGradient,
    };

    try {
      await axios.put(
        "/wp-json/servv-plugin/v1/shop/settings",
        {
          ...settings,
          settings: {
            ...settings.settings,
            widget_style_settings: JSON.stringify(newWidgetSettings),
          },
        },
        { headers: { "X-WP-Nonce": servvData.nonce } },
      );

      toast("Settings saved successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Save failed.");
    }

    setLoading(false);
  };

  /* ======================================================
   ✅ STATUS TEXT HELPERS
====================================================== */

  const hasProfileInfo =
    title.trim() ||
    description.trim() ||
    address.trim() ||
    email.trim() ||
    uploadedUrl ||
    uploadedBannerUrl;

  const hasSocialInfo =
    instagram.trim() ||
    tiktok.trim() ||
    youtube.trim() ||
    x.trim() ||
    facebook.trim();

  const hasCustomLinks = links.length > 0;
  const hasYoutubeVideos = youtubeVideos.length > 0;

  const hasThemeInfo =
    bgType !== "color" ||
    backgroundColor !== "#ffffff" ||
    widgetBgColor !== "#ffffff";

  const profileStatus = hasProfileInfo
    ? "Profile configured"
    : "No profile details set";

  const linkBioStatus = hasSocialInfo
    ? "Links configured"
    : "No links added yet";

  const themeStatus = hasThemeInfo ? "Theme customized" : "Using default theme";

  const customLinksStatus = hasCustomLinks
    ? `${links.length} link${links.length > 1 ? "s" : ""} added`
    : "No custom links yet";

  const youtubeStatus = hasYoutubeVideos
    ? `${youtubeVideos.length} video${
        youtubeVideos.length > 1 ? "s" : ""
      } added`
    : "No videos added yet";

  /* ======================================================
     UI
  ====================================================== */

  return (
    <PageWrapper loading={loading} withBackground={true}>
      <div className="dashboard-card">
        {/* HEADER */}
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">Branding</h1>
            <p className="dashboard-description">
              Customize your widget branding and store details
            </p>
          </div>

          <PageActionButton
            text="Save"
            type="primary"
            disabled={loading}
            onAction={saveSettings}
          />
        </div>

        <div className="header-line" />

        {/* CARDS */}
        <PageContent className="pt-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6">
            {/* ✅ Profile */}
            <SettingsCardWithModal
              icon={Profile}
              title="Profile"
              statusText={profileStatus}
              description="Business name, avatar and widget header branding."
              buttonText="Edit profile"
              footerActions={(() => {
                const fileRef = React.useRef(null);

                return (
                  <>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        // console.log(file);
                        if (file) handleAvatarChange(file);
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      disabled={avatarUploading}
                      className="px-5 py-2 bg-[#7A5AF8] text-white rounded-lg"
                    >
                      Upload Avatar
                    </button>
                  </>
                );
              })()}
            >
              <ProfileBrandingModal
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                address={address}
                setAddress={setAddress}
                email={email}
                setEmail={setEmail}
                hideAvatar={hideAvatar}
                avatarUploading={avatarUploading}
                setHideAvatar={setHideAvatar}
                avatarPreview={avatarPreview}
              />
            </SettingsCardWithModal>

            {/* ✅ Link in Bio */}
            <SettingsCardWithModal
              icon={LinkIcon}
              title="Link in Bio"
              description="Social links, custom URLs, YouTube blocks and content order."
              buttonText="Edit links"
              statusText={linkBioStatus}
            >
              <LinkInBioModal
                instagram={instagram}
                setInstagram={setInstagram}
                tiktok={tiktok}
                setTikTok={setTikTok}
                youtube={youtube}
                setYoutube={setYoutube}
                x={x}
                setX={setX}
                facebook={facebook}
                setFacebook={setFacebook}
                links={links}
                setLinks={setLinks}
                youtubeVideos={youtubeVideos}
                setYoutubeVideos={setYoutubeVideos}
                order={order}
                setOrder={setOrder}
              />
            </SettingsCardWithModal>

            {/* ✅ Theme */}
            <SettingsCardWithModal
              icon={PaintBrushIcon}
              title="Theme"
              description="Colors, gradients, background and widget styling."
              buttonText="Edit theme"
              statusText={themeStatus}
              footerActions={
                <button
                  type="button"
                  disabled={bannerUploading}
                  onClick={() =>
                    document.getElementById("themeBannerUploadInput")?.click()
                  }
                  className="px-5 py-2 bg-[#7A5AF8] text-white rounded-lg hover:bg-[#6941C6]
                 font-semibold text-sm disabled:opacity-50"
                >
                  {bannerUploading ? "Uploading..." : "Upload Banner"}
                </button>
              }
            >
              <ThemeBrandingModal
                bgType={bgType}
                setBgType={setBgType}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                backgroundOpacity={backgroundOpacity}
                setBackgroundOpacity={setBackgroundOpacity}
                backgroundGradient={backgroundGradient}
                setBackgroundGradient={setBackgroundGradient}
                backgroundImagePreview={backgroundImagePreview}
                setBackgroundImagePreview={setBackgroundImagePreview}
                bgUploading={bgUploading}
                textColor={textColor}
                setTextColor={setTextColor}
                textOpacity={textOpacity}
                setTextOpacity={setTextOpacity}
                widgetBgType={widgetBgType}
                setWidgetBgType={setWidgetBgType}
                widgetBgColor={widgetBgColor}
                setWidgetBgColor={setWidgetBgColor}
                widgetBgGradient={widgetBgGradient}
                setWidgetBgGradient={setWidgetBgGradient}
                responsiveBlock={responsiveBlock}
                bannerImagePreview={bannerImagePreview}
                bannerUploading={bannerUploading}
                handleBannerChange={handleBannerChange}
                hideAvatar={hideAvatar}
                setHideAvatar={setHideAvatar}
                avatarUploading={setAvatarUploading}
                avatarPreview={setAvatarPreview}
                handleAvatarChange={handleAvatarChange}
                order={order}
                setOrder={setOrder}
              />
            </SettingsCardWithModal>
            {/* ✅ Custom Links Card */}
            <SettingsCardWithModal
              icon={LinkIcon}
              title="Custom Links"
              statusText={customLinksStatus}
              description="External links shown in your widget."
              buttonText="Edit links"
            >
              <CustomLinksModal links={links} setLinks={setLinks} />
            </SettingsCardWithModal>

            {/* ✅ YouTube Videos Card */}
            <SettingsCardWithModal
              icon={Youtube}
              title="YouTube Videos"
              description="Add video blocks inside widget."
              statusText={youtubeStatus}
              buttonText="Edit videos"
            >
              <YoutubeLinksModal
                youtubeVideos={youtubeVideos}
                setYoutubeVideos={setYoutubeVideos}
              />
            </SettingsCardWithModal>
          </div>
        </PageContent>
      </div>
    </PageWrapper>
  );
};

export default BrandingPage;
