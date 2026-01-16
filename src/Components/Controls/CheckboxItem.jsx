import React from "react";

const CheckboxItem = ({
  label = "",
  name,
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <label className={`checkbox-item ${disabled ? "is-disabled" : ""}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="checkbox-item__input"
      />

      <span className="checkbox-item__box">
        {checked && (
          <svg
            className="checkbox-item__check"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6.5L5 9L9.5 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      <span className="checkbox-item__label">{label}</span>
    </label>
  );
};

export default CheckboxItem;
