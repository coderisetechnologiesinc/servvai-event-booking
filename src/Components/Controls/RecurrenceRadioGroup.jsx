import React from "react";

const RadioGroup = ({
  name,
  value,
  options = [], // [{ value, label }]
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`servv-recurrence-group ${className}`}>
      {options.map((opt) => (
        <label key={opt.value} className="servv-radio">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            disabled={disabled || opt.disabled}
          />
          <span className="servv-radio__control" />
          <span className="servv-radio__label">{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
