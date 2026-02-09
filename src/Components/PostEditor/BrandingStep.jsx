import { toast } from "react-toastify";
import { BrushIcon, UploadIcon } from "../../assets/icons";
import NewInputControl from "../Controls/NewInputControl";
import RadioGroup from "../Controls/RecurrenceRadioGroup";
import { useRef, useState, useEffect } from "react";

const VISIBILITY_OPTIONS = [
  { value: true, label: "On" },
  { value: false, label: "Off" },
];

const EMAIL_NOTIFICATION_OPTIONS = [
  { value: false, label: "On" },
  { value: true, label: "Off" },
];

const BrandingStep = ({
  attributes,
  setAttributes,
  settings,
  changeStep,
  handleFormSubmit,
  isNew = false,
  calendarConnected,
}) => {
  const { google_calendar, disable_emails } = attributes.notifications || {};
  const [warning, setWarning] = useState(false);
  const { topic, agenda } = attributes.meeting;
  const fileInputRef = useRef(null);
  const resolveImagePreview = (value) => {
    if (!value) return "";

    if (value.startsWith("data:image")) return value;
    if (value.startsWith("http") || value.startsWith("/")) return value;

    return `data:image/jpeg;base64,${value}`;
  };

  const [imagePreview, setImagePreview] = useState(
    resolveImagePreview(attributes?.image_content),
  );

  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    setImagePreview(resolveImagePreview(attributes?.image_content));
  }, [attributes?.image_content]);

  const updateField = (key, value) => {
    if (warning === true && key === "topic") {
      setWarning(false);
    }
    if (key === "google_calendar" || key === "disable_emails") {
      setAttributes({
        notifications: {
          ...attributes.notifications,
          [key]: value,
        },
      });
    } else {
      setAttributes({
        meeting: {
          ...attributes.meeting,
          [key]: value,
        },
      });
    }
  };
  const updateImage = (key, value) => {
    setAttributes({ image_content: value });
  };
  const uploadImageToMediaLibrary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/wp-json/wp/v2/media", {
        method: "POST",
        headers: {
          "X-WP-Nonce": servvData.nonce,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      return data.source_url;
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
      return null;
    }
  };
  const handleImageChange = (file) => {
    if (!file) return;

    setUploading(true);

    const reader = new FileReader();

    reader.onloadend = () => {
      const dataUrl = reader.result;
      setImagePreview(dataUrl);

      setAttributes({
        image_content: dataUrl,
      });

      setUploading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="step__wrapper">
      {/* Header */}
      <div className="step__header step__header--centered">
        <BrushIcon className="step__header_icon" />
        <div className="step__heading step__heading--centered">
          <h4 className="step__header_title">Branding</h4>
          <p className="step__description">Add event information and image</p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content">
        <div className="step__content_block">
          <span className="step__content_title">Title</span>
          {/* Title */}
          <NewInputControl
            // label="Title"
            placeholder="Enter a title"
            value={topic}
            onChange={(val) => updateField("topic", val)}
            error={warning}
          />
        </div>
        <div className="step__content_block">
          {/* Subtitle */}
          <span className="step__content_title">Description</span>
          <NewInputControl
            // label="Subtitle"
            placeholder="Enter description"
            textarea={true}
            value={agenda}
            onChange={(val) => updateField("agenda", val)}
          />
        </div>

        {/* Image upload */}
        <div className="step__content_block">
          <span className="step__content_title">Image</span>

          {/* hidden input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e.target.files[0])}
          />

          <div
            className="servv_upload"
            onClick={() => fileInputRef.current?.click()}
            style={{ cursor: "pointer" }}
          >
            <div className="servv_upload__icon">
              <UploadIcon />
            </div>

            <div className="servv_upload__text">
              <button type="button" className="servv_upload__action">
                {uploading ? "Uploading..." : "Click to upload"}
              </button>
              {/* <span className="servv_upload__hint">or drag and drop</span> */}
            </div>

            <div className="servv_upload__support">
              Supports PNG and JPG files up to 5 MB.
            </div>
            <div className="servv_upload__support">
              Recommended aspect ratio is 16:11
            </div>
          </div>

          {/* Preview */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                marginTop: 12,
                width: "100%",
                maxWidth: "384px",
                maxHeight: 180,
                objectFit: "cover",
                borderRadius: 8,
                opacity: uploading ? 0.6 : 1,
              }}
            />
          )}
        </div>

        <div className="step__content_delimeter" />

        {/* Visibility */}
        {calendarConnected && (
          <div className="step__content_block">
            <span className="step__content_title">Calendar</span>

            <RadioGroup
              name="Calendar"
              value={calendarConnected ? google_calendar : false}
              options={VISIBILITY_OPTIONS}
              onChange={(val) => updateField("google_calendar", val)}
              disabled={!calendarConnected}
            />
          </div>
        )}

        {/* Email notifications */}
        <div className="step__content_block">
          <span className="step__content_title">Email notifications</span>

          <RadioGroup
            name="email_notifications"
            value={disable_emails}
            options={EMAIL_NOTIFICATION_OPTIONS}
            onChange={() => updateField("disable_emails", !disable_emails)}
          />
        </div>
        <div className="servv_actions">
          <button
            type="button"
            className="servv_button servv_button--secondary"
            onClick={() => changeStep("venue")}
          >
            Previous
          </button>

          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={() => {
              if (attributes?.meeting?.topic?.length > 0) {
                handleFormSubmit();
              } else {
                setWarning(true);
                toast.warning("Please enter the title");
              }
            }}
          >
            {isNew ? "Create" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingStep;
