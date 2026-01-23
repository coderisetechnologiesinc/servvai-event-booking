import React from "react";

const NewInputControl = ({
  label = "",
  value = "",
  placeholder = "",
  helpText = "",
  disabled = false,
  onChange = () => {},
  textarea = false,
  style = {},
  error,
}) => {
  const InputTag = textarea ? "textarea" : "input";

  return (
    <div className="servv_input" style={{ width: "100%" }}>
      {label && <label className="step__content_title">{label}</label>}

      <div
        className={`servv-input ${error ? "servv-input--error" : ""}`}
        style={style}
      >
        <div className="servv-input__content">
          <InputTag
            className="servv-input__native"
            value={value}
            placeholder={placeholder || helpText}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            rows={textarea ? 4 : undefined}
          />
        </div>
      </div>

      {error && typeof error === "string" && (
        <div className="servv-input__error-text">{error}</div>
      )}
    </div>
  );
};

export default NewInputControl;
