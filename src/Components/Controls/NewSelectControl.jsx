import React from "react";

const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  onChange = () => {},
  iconRight = null,
  style = {},
}) => {
  return (
    <div className="servv-select" style={{ width: "100%" }}>
      {label && <label className="step__content_title">{label}</label>}

      <div
        className={`servv-select__control ${
          disabled ? "servv-select--disabled" : ""
        }`}
        style={style}
      >
        <select
          className="servv-select__native"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {helpText && (
            <option value="" disabled>
              {helpText}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {iconRight && <span className="servv-select__icon">{iconRight}</span>}
      </div>
    </div>
  );
};

export default NewSelectControl;
