import React from "react";

const NewInputFieldControl = ({
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  maxLength,
  minValue,
  maxValue,
  align = "left",
  width,
  className = "",
  error = false,
}) => {
  const handleChange = (e) => {
    let val = e.target.value;

    onChange(val);
  };

  return (
    <div
      className={`servv-input ${className} ${
        error ? "servv-input__native--error" : ""
      }`}
      style={{ width: width || "384px" }}
    >
      <div className="servv-input__content">
        <input
          type={type}
          className={`servv-input__native servv-input__native--${align}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
          onBlur={onBlur}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default NewInputFieldControl;
