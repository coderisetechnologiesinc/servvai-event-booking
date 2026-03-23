import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { uploadMedia } from "../../utilities/media";
import { UploadIcon } from "../../assets/icons";
import { BrushIcon } from "../../assets/icons";
import NewInputControl from "../Controls/NewInputControl";
import InteractiveCard from "../Containers/InteractiveCard";
import { useNavigate } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";

const BrandingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  brandingCompleted,
  settings,
  onSave,
  loading,
}) => {
  const navigate = useNavigate();
  const avatarInputRef = useRef(null);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const pickValue = (current, incoming, fallback = undefined) => {
    if (current !== undefined && current !== null && current !== "") {
      return current;
    }

    if (incoming !== undefined && incoming !== null && incoming !== "") {
      return incoming;
    }

    return fallback;
  };

  const didInitRef = useRef(false);

  useEffect(() => {
    if (didInitRef.current) return;
    if (!settings?.settings?.widget_style_settings) return;

    didInitRef.current = true;

    let existing = {};
    try {
      existing =
        typeof settings.settings.widget_style_settings === "string"
          ? JSON.parse(settings.settings.widget_style_settings)
          : settings.settings.widget_style_settings || {};
    } catch (e) {
      console.warn("Invalid widget_style_settings JSON", e);
    }

    setAttributes({
      branding: {
        ...attributes.branding,

        title: pickValue(attributes.branding?.title, existing.pw_title, ""),

        description: pickValue(
          attributes.branding?.description,
          existing.pw_description,
          "",
        ),

        avatar: pickValue(
          attributes.branding?.avatar,
          existing.pw_avatar,
          null,
        ),

        avatarPreview: pickValue(
          attributes.branding?.avatarPreview,
          existing.pw_avatar,
          null,
        ),

        banner: pickValue(
          attributes.branding?.banner,
          existing.pw_banner_image,
          null,
        ),

        bannerPreview: pickValue(
          attributes.branding?.bannerPreview,
          existing.pw_banner_image,
          null,
        ),

        backgroundType: pickValue(
          attributes.branding?.backgroundType,
          existing.pw_bg_type,
          "color",
        ),

        backgroundColor: pickValue(
          attributes.branding?.backgroundColor,
          existing.pw_background_color,
          "#ffffff",
        ),

        backgroundGradient: pickValue(
          attributes.branding?.backgroundGradient,
          existing.pw_background_gradient,
          "linear-gradient(135deg, #4f46e5, #9333ea)",
        ),

        textColor: pickValue(
          attributes.branding?.textColor,
          existing.pw_text_color,
          "#000000",
        ),

        _initialized: true,
      },
    });
  }, [settings]);

  /* --------------------------------------------
     Image upload helper
  -------------------------------------------- */
  const uploadImageToMediaLibrary = async (file) => {
    try {
      return await uploadMedia(file);
    } catch (error) {
      toast.error("Upload failed. Please try again.");
      return null;
    }
  };

  /* --------------------------------------------
     Avatar upload
  -------------------------------------------- */
  const handleAvatarChange = async (file) => {
    if (!file) return;

    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatarPreview: reader.result,
        },
      });
    };
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);

    if (url) {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatar: url,
          avatarPreview: url,
        },
      });
    }

    setAvatarUploading(false);
  };

  /* --------------------------------------------
     Submit
  -------------------------------------------- */
  const handleContinue = () => {
    if (!attributes.branding.title?.trim()) {
      toast.error("Please enter a store name");
      return;
    }

    onSave(attributes.branding);
    goToNextStep();
  };

  const avatarSrc =
    attributes.branding.avatarPreview || attributes.branding.avatar;

  return (
    <div className="step__wrapper w-full">
      {/* Header */}
      <div className="step__header">
        <BrushIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Branding</h4>
          <p className="step__description">
            Personalize your widget appearance and profile information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content w-full max-w-[640px]">
        <div className="flex flex-col gap-4">
          {/* Store Name card */}
          <InteractiveCard
            className="flex-1 flex flex-col"
            style={{
              padding: "24px",
              gap: "32px",
              borderRadius: "16px",
              border: "1px solid #E6EBE7",
              boxShadow:
                "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
            }}
          >
            <div className="flex flex-col gap-3">
              <span className="step__content_title flex flex-row items-center">
                Store Name<span className="ml-1 text-brand-700">*</span>
              </span>
              <NewInputControl
                placeholder="Enter your store name"
                value={attributes.branding.title || ""}
                onChange={(val) =>
                  setAttributes({
                    branding: {
                      ...attributes.branding,
                      title: val,
                    },
                  })
                }
              />
              <p className="step__description">
                This will appear at the top of your widget.
              </p>
            </div>
          </InteractiveCard>

          {/* Avatar card */}
          <InteractiveCard className="flex-1">
            <div className="flex flex-col gap-3">
              <span className="step__content_title">Logo</span>

              <input
                ref={avatarInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleAvatarChange(file);
                }}
              />

              {avatarSrc ? (
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={avatarSrc}
                    alt="Avatar preview"
                    className="w-[96px] h-[96px] rounded-full border object-cover"
                    style={{ opacity: avatarUploading ? 0.6 : 1 }}
                  />
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="servv_upload__action"
                      onClick={() => avatarInputRef.current?.click()}
                      disabled={avatarUploading}
                    >
                      {avatarUploading ? "Uploading..." : "Change"}
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[13px] font-semibold text-red-500 cursor-pointer bg-none border-none"
                      style={{ background: "none", border: "none" }}
                      onClick={() =>
                        setAttributes({
                          branding: {
                            ...attributes.branding,
                            avatar: "",
                            avatarPreview: "",
                          },
                        })
                      }
                      disabled={avatarUploading}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="servv_upload"
                  onClick={() => avatarInputRef.current?.click()}
                  style={{ cursor: "pointer" }}
                >
                  <div className="servv_upload__icon">
                    <UploadIcon />
                  </div>
                  <div className="servv_upload__text">
                    <button type="button" className="servv_upload__action">
                      {avatarUploading ? "Uploading..." : "Click to upload"}
                    </button>
                  </div>
                  <div className="servv_upload__support">
                    PNG or JPG up to 5MB.
                  </div>
                  <div className="servv_upload__support">
                    Recommended size: 400×400px.
                  </div>
                </div>
              )}
            </div>
          </InteractiveCard>
        </div>

        <div className="servv_actions mt-auto">
          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={handleContinue}
            disabled={loading || !attributes.branding.title?.trim()}
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingStep;
