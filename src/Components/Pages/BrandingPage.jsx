import { Fragment, useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";
import PageHeader from "../Containers/PageHeader";
import PageContent from "../Containers/PageContent";
import PageActionButton from "../Controls/PageActionButton";
import AnnotatedSection from "../Containers/AnnotatedSection";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import InputFieldControl from "../Controls/InputFieldControl";
import TabsComponent from "../Containers/TabsComponent";
import { useServvStore } from "../../store/useServvStore";
import axios from "axios";
import { toast } from "react-toastify";
import UploadBars from "../UploadBars";
import SortableItem from "../SortableItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
const BrandingPage = () => {
  const { settings, fetchSettings } = useServvStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTikTok] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bgType, setBgType] = useState("color"); // gradient | image | color
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [widgetBgType, setWidgetBgType] = useState("color");
  const [widgetBgColor, setWidgetBgColor] = useState("#ffffff");
  const [widgetBgGradient, setWidgetBgGradient] = useState(
    "linear-gradient(135deg, #ffffff, #f3f4f6)",
  );
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundImagePreview, setBackgroundImagePreview] = useState("");
  const [backgroundGradient, setBackgroundGradient] = useState(
    "linear-gradient(135deg, #4f46e5, #9333ea)",
  );
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [bgUploading, setBgUploading] = useState(false);
  const [textColor, setTextColor] = useState("#121633");
  const [textOpacity, setTextOpacity] = useState(0.5);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabsList = [
    { label: "General", value: 0 },
    { label: "Social media and links", value: 1 },
    { label: "Widget", value: 2 },
  ];

  // Links and sortable
  const [linkTextInput, setLinkTextInput] = useState("");
  const [linkUrlInput, setLinkUrlInput] = useState("");

  const [links, setLinks] = useState([]);

  const handleLinksDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setLinks((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [videoInput, setVideoInput] = useState("");
  const [order, setOrder] = useState(["events", "links", "videos"]);

  // --------------------------------------------------------------------

  const responsiveBlock = "w-full min-w-0";

  // -------------------------- Load settings into form --------------------------
  useEffect(() => {
    if (!settings?.settings?.widget_style_settings) return;

    let w = settings.settings.widget_style_settings;
    if (typeof w === "string") {
      try {
        w = JSON.parse(w);
      } catch (e) {
        console.warn("Failed to parse widget_style_settings", e);
        return;
      }
    }

    /* -------- BASIC INFO -------- */
    setTitle(w.pw_title || "");
    setDescription(w.pw_description || "");
    setAddress(w.pw_address || "");
    setEmail(w.pw_email || "");
    setInstagram(w.pw_instagram || "");
    setTikTok(w.pw_tiktok || "");

    /* -------- AVATAR -------- */
    setUploadedUrl(w.pw_avatar || null);
    setAvatarPreview(w.pw_avatar || "");

    /* -------- PAGE BACKGROUND -------- */
    setBgType(w.pw_bg_type || "color");
    setBackgroundColor(w.pw_background_color || "#ffffff");
    setBackgroundOpacity(w.pw_background_opacity ?? 1);
    setBackgroundGradient(
      w.pw_background_gradient || "linear-gradient(135deg, #4f46e5, #9333ea)",
    );
    setBackgroundImage(w.pw_background_image || null);
    setBackgroundImagePreview(w.pw_background_image || "");

    /* -------- TEXT -------- */
    setTextColor(w.pw_text_color || "#121633");
    setTextOpacity(
      typeof w.pw_text_opacity === "number" ? w.pw_text_opacity : 0.5,
    );

    /* -------- WIDGET BACKGROUND -------- */
    setWidgetBgType(w.pw_widget_bg_type || "color");
    setWidgetBgColor(w.pw_widget_bg_color || "#ffffff");
    setWidgetBgGradient(
      w.pw_widget_bg_gradient || "linear-gradient(135deg, #ffffff, #f3f4f6)",
    );

    /* ======================================================
     NEW: LINKS
     ====================================================== */
    setLinks(Array.isArray(w.pw_links) ? w.pw_links : []);

    /* ======================================================
     NEW: YOUTUBE VIDEOS
     ====================================================== */
    setYoutubeVideos(
      Array.isArray(w.pw_youtube_videos) ? w.pw_youtube_videos : [],
    );

    /* ======================================================
     NEW: CONTENT ORDER
     ====================================================== */
    const defaultOrder = ["events", "links", "videos"];

    setOrder(
      Array.isArray(w.pw_content_order) && w.pw_content_order.length === 3
        ? w.pw_content_order
        : defaultOrder,
    );
  }, [settings]);

  // ------------------------------ Upload Avatar ------------------------------
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
      toast.error(error?.message || "Upload failed.");
      return null;
    }
  };

  const handleBackgroundImageChange = async (file) => {
    if (!file) return;

    setBgUploading(true);

    const reader = new FileReader();
    reader.onload = () => setBackgroundImagePreview(reader.result);
    reader.readAsDataURL(file);

    const url = await uploadImageToMediaLibrary(file);
    if (url) setBackgroundImage(url);

    setBgUploading(false);
  };

  const handleAvatarChange = async (file) => {
    if (!file) return;

    setAvatarUploading(true);

    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);

    const url = await uploadImageToMediaLibrary(file);
    if (url) setUploadedUrl(url);

    setAvatarUploading(false);
  };

  const handleRemoveLink = (id) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  const handleRemoveYoutube = (id) => {
    setYoutubeVideos((prev) => prev.filter((v) => v.id !== id));
  };

  // ------------------------------ Save Settings ------------------------------
  const saveSettings = async () => {
    setLoading(true);
    if (avatarUploading || bgUploading) {
      toast("Please wait until upload is finished");
      setLoading(false);
      return;
    }
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
      pw_avatar: uploadedUrl,
      pw_instagram: instagram,
      pw_tiktok: tiktok,
      pw_bg_type: bgType,
      pw_background_color: backgroundColor,
      pw_background_opacity: backgroundOpacity,
      pw_background_image: backgroundImage,
      pw_background_gradient: backgroundGradient,
      pw_widget_bg_type: widgetBgType,
      pw_widget_bg_color: widgetBgType === "color" ? widgetBgColor : null,
      pw_widget_bg_gradient:
        widgetBgType === "gradient" ? widgetBgGradient : null,
      pw_text_color: textColor,
      pw_text_opacity: textOpacity,
      pw_links: links,
      pw_youtube_videos: youtubeVideos,
      pw_content_order: order,
    };

    const adminDashboard =
      typeof settings.settings.admin_dashboard === "string"
        ? settings.settings.admin_dashboard
        : JSON.stringify(settings.settings.admin_dashboard);

    const payload = {
      ...settings,
      settings: {
        ...settings.settings,
        admin_dashboard: adminDashboard,
        widget_style_settings: JSON.stringify(newWidgetSettings),
      },
    };

    try {
      const res = await axios({
        method: "PUT",
        url: "/wp-json/servv-plugin/v1/shop/settings",
        headers: { "X-WP-Nonce": servvData.nonce },
        data: payload,
      });

      if (res.status === 200) {
        toast("Settings saved successfully.");
        useServvStore.setState((state) => ({
          settings: {
            ...state.settings,
            settings: {
              ...state.settings.settings,
              widget_style_settings: JSON.stringify(newWidgetSettings),
            },
          },
        }));

        // fetchSettings();
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <PageWrapper loading={loading} withBackground={true}>
      {/* ----------------------- PAGE HEADER ----------------------- */}
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + description */}
          <div className="dashboard-heading">
            <h1 className="dashboard-title">Branding</h1>
            <p className="dashboard-description">
              Customize your widget branding and business details
            </p>
          </div>

          {/* RIGHT: actions */}
          <div className="dashboard-actions hidden md:flex items-center gap-2">
            <PageActionButton
              text="Save"
              type="primary"
              disabled={loading || avatarUploading || bgUploading}
              onAction={saveSettings}
            />
          </div>
        </div>

        <div className="header-line" />

        {/* page content goes here */}

        {/* ----------------------- PAGE CONTENT ----------------------- */}
        <PageContent className="py-0 my-0">
          <BlockStack gap={8} cardsLayout={true} className={responsiveBlock}>
            <div className="w-full min-w-0 overflow-x-auto">
              <TabsComponent
                tabsList={tabsList}
                selected={selectedTab}
                handleSelectChange={setSelectedTab}
                fullWidth={true}
              />
            </div>
            {/* ----------------------- BUSINESS DETAILS ----------------------- */}
            {selectedTab === 0 && (
              <Fragment>
                <AnnotatedSection
                  title="Business details"
                  description="Your title, description and contact information"
                >
                  <BlockStack gap={4} className={responsiveBlock}>
                    <InputFieldControl
                      label="Title"
                      placeholder="Enter business title"
                      value={title}
                      type="text"
                      align="left"
                      onChange={setTitle}
                    />

                    <InputFieldControl
                      label="Description"
                      placeholder="Short description"
                      value={description}
                      type="text"
                      align="left"
                      onChange={setDescription}
                    />

                    <InputFieldControl
                      label="Address"
                      placeholder="Business address"
                      value={address}
                      type="text"
                      align="left"
                      onChange={setAddress}
                    />

                    <InputFieldControl
                      label="Email"
                      placeholder="Contact email"
                      value={email}
                      type="email"
                      align="left"
                      onChange={setEmail}
                    />
                  </BlockStack>
                </AnnotatedSection>

                <AnnotatedSection
                  title="Avatar"
                  description="Upload an image shown in your widget header"
                >
                  <BlockStack gap={4} className={responsiveBlock}>
                    {/* Hidden file input */}
                    <input
                      id="avatarUploadInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleAvatarChange(e.target.files[0])}
                    />

                    {/* Button that opens the file picker */}
                    <PageActionButton
                      text={avatarUploading ? "Uploading..." : "Upload Avatar"}
                      type="secondary"
                      disabled={avatarUploading}
                      onAction={() =>
                        document.getElementById("avatarUploadInput").click()
                      }
                    />

                    <UploadBars visible={avatarUploading} />

                    {/* Image preview */}
                    {avatarPreview && (
                      <img
                        src={avatarPreview}
                        alt="Avatar preview"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginTop: 12,
                        }}
                      />
                    )}
                  </BlockStack>
                </AnnotatedSection>
              </Fragment>
            )}

            {/* ----------------------- SOCIAL LINKS ----------------------- */}
            {selectedTab === 1 && (
              <Fragment>
                <AnnotatedSection
                  title="Social media"
                  description="Links shown inside your embedded widget"
                >
                  <BlockStack gap={4} className={responsiveBlock}>
                    <InputFieldControl
                      label="Instagram URL"
                      placeholder="https://instagram.com/yourprofile"
                      value={instagram}
                      type="text"
                      align="left"
                      onChange={setInstagram}
                    />

                    <InputFieldControl
                      label="TikTok URL"
                      placeholder="https://tiktok.com/@yourprofile"
                      value={tiktok}
                      type="text"
                      align="left"
                      onChange={setTikTok}
                    />
                  </BlockStack>
                </AnnotatedSection>
                <AnnotatedSection
                  title="Links"
                  description="Custom external links"
                >
                  <BlockStack gap={3} className="w-full">
                    <InlineStack gap={2}>
                      <InputFieldControl
                        placeholder="Link text (e.g. Our Services)"
                        value={linkTextInput}
                        onChange={setLinkTextInput}
                      />

                      <InputFieldControl
                        placeholder="https://example.com"
                        value={linkUrlInput}
                        onChange={setLinkUrlInput}
                      />

                      <button
                        type="button"
                        className="icon-button-purple"
                        disabled={!linkTextInput || !linkUrlInput}
                        onClick={() => {
                          if (!linkTextInput || !linkUrlInput) return;

                          setLinks((prev) => [
                            ...prev,
                            {
                              id: uuidv4(),
                              text: linkTextInput,
                              url: linkUrlInput,
                            },
                          ]);

                          setLinkTextInput("");
                          setLinkUrlInput("");
                        }}
                        aria-label="Add link"
                      >
                        <PlusCircleIcon className="icon-purple" />
                      </button>
                    </InlineStack>

                    <DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={handleLinksDragEnd}
                    >
                      <SortableContext
                        items={links.map((l) => l.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        <BlockStack gap={2}>
                          {links.map((link) => (
                            <SortableItem key={link.id} id={link.id}>
                              <div className="flex items-center gap-2 w-full">
                                <div className="flex flex-col truncate flex-1">
                                  <span className="font-medium truncate">
                                    {link.text}
                                  </span>
                                  <span className="text-sm text-muted truncate">
                                    {link.url}
                                  </span>
                                </div>

                                <button
                                  type="button"
                                  className="icon-button-danger"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveLink(link.id);
                                  }}
                                  aria-label="Remove link"
                                >
                                  <MinusCircleIcon className="icon-danger" />
                                </button>
                              </div>
                            </SortableItem>
                          ))}
                        </BlockStack>
                      </SortableContext>
                    </DndContext>
                  </BlockStack>
                </AnnotatedSection>
                <AnnotatedSection
                  title="YouTube"
                  description="YouTube video links"
                >
                  <BlockStack gap={3} className="w-full">
                    <InlineStack gap={2}>
                      <InputFieldControl
                        placeholder="https://youtube.com/watch?v=..."
                        value={videoInput}
                        onChange={setVideoInput}
                      />
                      <button
                        type="button"
                        className="icon-button-purple mr-0"
                        disabled={!videoInput}
                        onClick={() => {
                          if (!videoInput) return;
                          setYoutubeVideos((prev) => [
                            ...prev,
                            { id: uuidv4(), url: videoInput },
                          ]);
                          setVideoInput("");
                        }}
                        aria-label="Add video"
                      >
                        <PlusCircleIcon className="icon-purple" />
                      </button>
                    </InlineStack>

                    <DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={(e) => {
                        const { active, over } = e;
                        if (!over || active.id === over.id) return;

                        setYoutubeVideos((items) => {
                          const oldIndex = items.findIndex(
                            (i) => i.id === active.id,
                          );
                          const newIndex = items.findIndex(
                            (i) => i.id === over.id,
                          );
                          return arrayMove(items, oldIndex, newIndex);
                        });
                      }}
                    >
                      <SortableContext
                        items={youtubeVideos.map((v) => v.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        <BlockStack gap={2}>
                          {youtubeVideos.map((v) => (
                            <SortableItem key={v.id} id={v.id}>
                              <div className="flex items-center gap-2 w-full">
                                <span className="truncate flex-1">{v.url}</span>

                                <button
                                  type="button"
                                  className="icon-button-purple"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveYoutube(v.id);
                                  }}
                                  aria-label="Remove video"
                                >
                                  <MinusCircleIcon className="icon-danger" />
                                </button>
                              </div>
                            </SortableItem>
                          ))}
                        </BlockStack>
                      </SortableContext>
                    </DndContext>
                  </BlockStack>
                </AnnotatedSection>
                <div className="box-border flex flex-col items-start p-4 gap-6 w-full bg-[#FAFAFA] border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl">
                  {/* sections here */}

                  <AnnotatedSection
                    title="Order"
                    description="Order of content blocks in widget"
                  >
                    <DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={(e) => {
                        const { active, over } = e;
                        if (!over || active.id === over.id) return;

                        setOrder((items) => {
                          const oldIndex = items.indexOf(active.id);
                          const newIndex = items.indexOf(over.id);
                          return arrayMove(items, oldIndex, newIndex);
                        });
                      }}
                    >
                      <SortableContext
                        items={order}
                        strategy={verticalListSortingStrategy}
                      >
                        <BlockStack gap={2} className="w-full">
                          {order.map((item) => (
                            <SortableItem key={item} id={item}>
                              <span className="capitalize font-medium">
                                {item}
                              </span>
                            </SortableItem>
                          ))}
                        </BlockStack>
                      </SortableContext>
                    </DndContext>
                  </AnnotatedSection>
                </div>
              </Fragment>
            )}
            {/* ----------------------- BACKGROUND SECTION ----------------------- */}
            {selectedTab === 2 && (
              <Fragment>
                <AnnotatedSection
                  title="Background"
                  description="Customize widget background appearance"
                >
                  <BlockStack gap={6} className={responsiveBlock}>
                    {/* BACKGROUND TYPE SELECTOR */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <label className="font-semibold">Background Type</label>

                      <div style={{ display: "flex", gap: 8 }}>
                        {[
                          { key: "color", label: "Color" },
                          { key: "gradient", label: "Gradient" },
                          { key: "image", label: "Image" },
                        ].map((item) => {
                          const active = bgType === item.key;

                          return (
                            <button
                              key={item.key}
                              type="button"
                              onClick={() => setBgType(item.key)}
                              style={{
                                padding: "10px 14px",
                                borderRadius: 8,
                                border: active
                                  ? "2px solid #4f46e5"
                                  : "1px solid #ccc",
                                background: active ? "#eef2ff" : "#fff",
                                color: "#111827",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "all 0.15s ease",
                              }}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ------------------ TEXT COLOR ------------------ */}
                    <BlockStack gap={4}>
                      <label className="font-semibold">Text Color</label>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 8,
                            border: "1px solid #ccc",
                          }}
                        />

                        <InputFieldControl
                          label="Hex Color"
                          value={textColor}
                          align="left"
                          onChange={setTextColor}
                          placeholder="#121633"
                          style={{ flex: 1 }}
                        />
                      </div>

                      {/* Opacity */}
                      <div>
                        <label className="font-semibold">
                          Opacity: {Math.round(textOpacity * 100)}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={textOpacity}
                          onChange={(e) =>
                            setTextOpacity(parseFloat(e.target.value))
                          }
                          style={{ width: "100%" }}
                        />
                      </div>
                    </BlockStack>

                    {/* ------------------ COLOR PICKER ------------------ */}
                    {bgType === "color" && (
                      <BlockStack gap={4}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <input
                            type="color"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 8,
                              border: "1px solid #ccc",
                            }}
                          />

                          <InputFieldControl
                            label="Hex Color"
                            value={backgroundColor}
                            align="left"
                            onChange={setBackgroundColor}
                            placeholder="#ffffff"
                            style={{ flex: 1 }}
                          />
                        </div>

                        {/* OPACITY SLIDER */}
                        <div>
                          <label className="font-semibold">
                            Opacity: {Math.round(backgroundOpacity * 100)}%
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={backgroundOpacity}
                            onChange={(e) =>
                              setBackgroundOpacity(parseFloat(e.target.value))
                            }
                            style={{ width: "100%" }}
                          />
                        </div>

                        {/* COLOR PRESETS */}
                        <div style={{ display: "flex", gap: 10 }}>
                          {[
                            "#ffffff",
                            "#f3f4f6",
                            "#d1d5db",
                            "#111827",
                            "#4338ca",
                            "#4f46e5",
                            "#ec4899",
                            "#10b981",
                          ].map((c) => (
                            <div
                              key={c}
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 8,
                                backgroundColor: c,
                                border: "1px solid #ccc",
                                cursor: "pointer",
                              }}
                              onClick={() => setBackgroundColor(c)}
                            />
                          ))}
                        </div>
                      </BlockStack>
                    )}

                    {/* ------------------ GRADIENT PICKER ------------------ */}
                    {bgType === "gradient" && (
                      <BlockStack gap={4}>
                        <label className="font-semibold">
                          Gradient Presets
                        </label>

                        <div
                          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
                        >
                          {[
                            "linear-gradient(135deg, #4f46e5, #9333ea)",
                            "linear-gradient(135deg, #06b6d4, #3b82f6)",
                            "linear-gradient(135deg, #f97316, #ef4444)",
                            "linear-gradient(135deg, #10b981, #059669)",
                          ].map((g) => (
                            <div
                              key={g}
                              onClick={() => setBackgroundGradient(g)}
                              style={{
                                width: 120,
                                height: 50,
                                borderRadius: 8,
                                cursor: "pointer",
                                border: "1px solid #ccc",
                                background: g,
                              }}
                            />
                          ))}
                        </div>

                        <InputFieldControl
                          label="Custom Gradient"
                          value={backgroundGradient}
                          align="left"
                          onChange={setBackgroundGradient}
                          placeholder="linear-gradient(...)"
                        />
                      </BlockStack>
                    )}

                    {/* ------------------ IMAGE BACKGROUND ------------------ */}
                    {bgType === "image" && (
                      <BlockStack gap={4}>
                        <input
                          id="backgroundUploadInput"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            handleBackgroundImageChange(e.target.files[0])
                          }
                        />

                        <PageActionButton
                          text={
                            bgUploading
                              ? "Uploading..."
                              : "Upload Background Image"
                          }
                          type="secondary"
                          disabled={bgUploading}
                          onAction={() =>
                            document
                              .getElementById("backgroundUploadInput")
                              .click()
                          }
                        />

                        <UploadBars visible={bgUploading} />

                        {/* {backgroundImagePreview && (
                    <img
                      src={backgroundImagePreview}
                      alt="Background preview"
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        marginTop: 10,
                        opacity: bgUploading ? 0.6 : 1,
                      }}
                    />
                  )} */}
                      </BlockStack>
                    )}

                    {/* ------------------ LIVE PREVIEW ------------------ */}
                    <div
                      style={{
                        width: "100%",
                        height: 100,
                        borderRadius: 12,
                        border: "1px solid #ddd",
                        marginTop: 14,
                        background:
                          bgType === "color"
                            ? backgroundColor
                            : bgType === "gradient"
                            ? backgroundGradient
                            : `url(${backgroundImagePreview}) center/cover`,
                        opacity: bgType === "color" ? backgroundOpacity : 1,
                      }}
                    ></div>
                  </BlockStack>
                </AnnotatedSection>
                <AnnotatedSection
                  title="Widget background"
                  description="Background of the widget container (not the page)"
                >
                  <BlockStack gap={6}>
                    {/* TYPE */}
                    <InlineStack gap={2}>
                      {["color", "gradient"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setWidgetBgType(type)}
                          style={{
                            padding: "8px 14px",
                            borderRadius: 8,
                            border:
                              widgetBgType === type
                                ? "2px solid #4f46e5"
                                : "1px solid #d1d5db",
                            background:
                              widgetBgType === type ? "#eef2ff" : "#fff",
                            fontWeight: 500,
                            cursor: "pointer",
                          }}
                        >
                          {type === "color" ? "Color" : "Gradient"}
                        </button>
                      ))}
                    </InlineStack>

                    {/* COLOR */}
                    {widgetBgType === "color" && (
                      <InlineStack gap={3} align="center">
                        <input
                          type="color"
                          value={widgetBgColor}
                          onChange={(e) => setWidgetBgColor(e.target.value)}
                          style={{ width: 48, height: 48 }}
                        />

                        <InputFieldControl
                          label="Hex"
                          value={widgetBgColor}
                          onChange={setWidgetBgColor}
                        />
                      </InlineStack>
                    )}

                    {/* GRADIENT */}
                    {widgetBgType === "gradient" && (
                      <BlockStack gap={3}>
                        <InputFieldControl
                          label="Gradient"
                          value={widgetBgGradient}
                          onChange={setWidgetBgGradient}
                        />

                        <div
                          style={{
                            height: 48,
                            borderRadius: 10,
                            background: widgetBgGradient,
                            border: "1px solid #ddd",
                          }}
                        />
                      </BlockStack>
                    )}

                    {/* PREVIEW */}
                    <div
                      style={{
                        height: 90,
                        borderRadius: 14,
                        border: "1px solid #e5e7eb",
                        background:
                          widgetBgType === "color"
                            ? widgetBgColor
                            : widgetBgGradient,
                      }}
                    />
                  </BlockStack>
                </AnnotatedSection>
              </Fragment>
            )}
          </BlockStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};

export default BrandingPage;
