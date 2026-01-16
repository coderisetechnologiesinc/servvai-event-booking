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
}) => {
  const InputTag = textarea ? "textarea" : "input";

  return (
    <div className="servv_input" style={{ width: "100%" }}>
      {label && <label className="step__content_title">{label}</label>}

      <div
        className={`servv_input__control ${
          disabled ? "servv_input--disabled" : ""
        }`}
        style={style}
      >
        <InputTag
          className="servv_input__native"
          value={value}
          placeholder={placeholder || helpText}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          rows={textarea ? 4 : undefined}
        />
      </div>
    </div>
  );
};

export default NewInputControl;
