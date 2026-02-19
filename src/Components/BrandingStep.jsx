import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BrushIcon } from "../assets/icons";
import NewInputControl from "./Controls/NewInputControl";
import NewSelectControl from "./Controls/NewSelectControl";
import CheckboxControl from "./Controls/CheckboxControl";
import RadioGroup from "./Controls/RecurrenceRadioGroup";
import { useNavigate } from "react-router-dom";
import { useServvStore } from "../store/useServvStore";
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
  const bannerInputRef = useRef(null);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [bannerUploading, setBannerUploading] = useState(false);

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
     Gradient presets
  -------------------------------------------- */
  const gradientPresets = [
    {
      value: "linear-gradient(135deg, #4f46e5, #9333ea)",
      label: "Purple Blue",
    },
    {
      value: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      label: "Cyan Blue",
    },
    {
      value: "linear-gradient(135deg, #f97316, #ef4444)",
      label: "Orange Red",
    },
    {
      value: "linear-gradient(135deg, #10b981, #059669)",
      label: "Green",
    },
  ];

  /* --------------------------------------------
     Color presets
  -------------------------------------------- */
  const colorPresets = [
    "#ffffff",
    "#f3f4f6",
    "#d1d5db",
    "#111827",
    "#4338ca",
    "#4f46e5",
    "#ec4899",
    "#10b981",
  ];

  /* --------------------------------------------
     Image upload helper
  -------------------------------------------- */
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
        },
      });
    }

    setAvatarUploading(false);
  };

  /* --------------------------------------------
     Banner upload
  -------------------------------------------- */
  const handleBannerChange = async (file) => {
    if (!file) return;

    setBannerUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setAttributes({
        branding: {
          ...attributes.branding,
          bannerPreview: reader.result,
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
          banner: url,
        },
      });
    }

    setBannerUploading(false);
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

  return (
    <div className="step__wrapper">
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
      <div className="step__content">
        <div className="flex flex-col gap-y-[24px]">
          {/* Business Title */}
          <div className="step__content_block">
            <span className="step__content_title">Store Name</span>

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

          {/* Description */}
          <div className="step__content_block">
            <span className="step__content_title">Description</span>

            <NewInputControl
              placeholder="Tell visitors what you offer"
              value={attributes.branding.description || ""}
              onChange={(val) =>
                setAttributes({
                  branding: {
                    ...attributes.branding,
                    description: val,
                  },
                })
              }
            />

            <p className="step__description">
              Keep it short and clear (1–2 sentences).
            </p>
          </div>

          {/* Avatar Upload */}
          <div className="step__content_block">
            <span className="step__content_title">Avatar</span>

            <input
              ref={avatarInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleAvatarChange(file);
              }}
            />

            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={() => avatarInputRef.current?.click()}
              disabled={avatarUploading}
            >
              {avatarUploading ? "Uploading..." : "Upload Avatar"}
            </button>

            {(attributes.branding.avatarPreview ||
              attributes.branding.avatar) && (
              <img
                src={
                  attributes.branding.avatarPreview ||
                  attributes.branding.avatar
                }
                alt="Avatar preview"
                className="w-[120px] h-[120px] rounded-full border object-cover mt-3 mx-auto"
              />
            )}

            <p className="step__description">
              Recommended size: 400×400px. PNG or JPG.
            </p>
          </div>

          {/* Banner Upload */}
          <div className="step__content_block">
            <span className="step__content_title">Banner Image</span>

            <input
              ref={bannerInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleBannerChange(file);
              }}
            />

            <button
              type="button"
              className="servv_button servv_button--secondary"
              onClick={() => bannerInputRef.current?.click()}
              disabled={bannerUploading}
            >
              {bannerUploading ? "Uploading..." : "Upload Banner"}
            </button>

            {(attributes.branding.bannerPreview ||
              attributes.branding.banner) && (
              <img
                src={
                  attributes.branding.bannerPreview ||
                  attributes.branding.banner
                }
                alt="Banner preview"
                className="w-full h-[120px] rounded-xl border object-cover mt-3"
              />
            )}

            <p className="step__description">
              Recommended size: 1920×1080px. JPG or PNG.
            </p>
          </div>

          {/* Background Type */}
          <div className="step__content_block">
            <span className="step__content_title">Background Type</span>

            <RadioGroup
              name="background-type"
              value={attributes.branding.backgroundType || "color"}
              options={[
                { value: "color", label: "Solid Color" },
                { value: "gradient", label: "Gradient" },
              ]}
              onChange={(val) =>
                setAttributes({
                  branding: {
                    ...attributes.branding,
                    backgroundType: val,
                  },
                })
              }
            />
          </div>

          {/* Background Color (if solid) */}
          {attributes.branding.backgroundType === "color" && (
            <div className="step__content_block">
              <span className="step__content_title">Background Color</span>

              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={attributes.branding.backgroundColor || "#ffffff"}
                  onChange={(e) =>
                    setAttributes({
                      branding: {
                        ...attributes.branding,
                        backgroundColor: e.target.value,
                      },
                    })
                  }
                  className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                />

                <NewInputControl
                  placeholder="#ffffff"
                  value={attributes.branding.backgroundColor || "#ffffff"}
                  onChange={(val) =>
                    setAttributes({
                      branding: {
                        ...attributes.branding,
                        backgroundColor: val,
                      },
                    })
                  }
                />
              </div>

              {/* Color Presets */}
              <div className="flex gap-2 flex-wrap mt-3">
                {colorPresets.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() =>
                      setAttributes({
                        branding: {
                          ...attributes.branding,
                          backgroundColor: color,
                        },
                      })
                    }
                    className="w-9 h-9 rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Background Gradient (if gradient) */}
          {attributes.branding.backgroundType === "gradient" && (
            <div className="step__content_block">
              <span className="step__content_title">Background Gradient</span>

              <NewSelectControl
                value={
                  attributes.branding.backgroundGradient ||
                  gradientPresets[0].value
                }
                options={gradientPresets}
                helpText="Select gradient preset"
                style={{ width: "100%" }}
                onChange={(val) =>
                  setAttributes({
                    branding: {
                      ...attributes.branding,
                      backgroundGradient: val,
                    },
                  })
                }
                iconRight={<ChevronDownIcon />}
              />

              {/* Gradient Preview */}
              <div
                className="h-[80px] rounded-xl border border-gray-200 mt-3"
                style={{
                  background:
                    attributes.branding.backgroundGradient ||
                    gradientPresets[0].value,
                }}
              />
            </div>
          )}

          {/* Text Color */}
          <div className="step__content_block">
            <span className="step__content_title">Text Color</span>

            <div className="flex items-center gap-3">
              <input
                type="color"
                value={attributes.branding.textColor || "#000000"}
                onChange={(e) =>
                  setAttributes({
                    branding: {
                      ...attributes.branding,
                      textColor: e.target.value,
                    },
                  })
                }
                className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
              />

              <NewInputControl
                placeholder="#000000"
                value={attributes.branding.textColor || "#000000"}
                onChange={(val) =>
                  setAttributes({
                    branding: {
                      ...attributes.branding,
                      textColor: val,
                    },
                  })
                }
              />
            </div>

            <p className="step__description">
              Choose a color that contrasts well with your background.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="servv_actions mt-auto">
          {/* <button
            type="button"
            className="servv_button servv_button--secondary"
            onClick={goToPreviousStep}
            disabled={loading}
          >
            Previous
          </button> */}
          <button
            type="button"
            className="servv_button servv_button--secondary"
            onClick={handleContinue}
            disabled={loading}
          >
            {loading ? "Saving..." : "I'll do this later"}
          </button>

          {!brandingCompleted && (
            <button
              type="button"
              className="servv_button servv_button--primary"
              onClick={handleContinue}
              disabled={loading || !attributes.branding.title?.trim()}
            >
              {loading ? "Saving..." : "Continue"}
            </button>
          )}

          {/* {brandingCompleted && (
            <button
              type="button"
              className="servv_button servv_button--primary"
              onClick={() => {
                const siteUrl =
                  servvData?.siteUrl ||
                  servvData?.site_url ||
                  servvData?.home_url ||
                  window.location.origin;

                window.location.href = siteUrl;
              }}
              disabled={
                loading ||
                avatarUploading ||
                bannerUploading ||
                !attributes.branding.title?.trim()
              }
            >
              {avatarUploading || bannerUploading
                ? "Uploading..."
                : loading
                ? "Loading..."
                : "View site"}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BrandingStep;
