import React from "react";
import ReactSelect, { components } from "react-select";

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={20}
      height={20}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </components.DropdownIndicator>
);

const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  multiple = false,
  onChange = () => {},
  iconRight = null,
  style = {},
}) => {
  if (multiple) {
    const selected = Array.isArray(value) ? value.map(String) : [];
    const selectedOptions = options.filter((o) => selected.includes(o.value));

    return (
      <div className="servv-select" style={{ width: "100%" }}>
        {label && <label className="step__content_title">{label}</label>}
        <ReactSelect
          isMulti
          options={options}
          value={selectedOptions}
          onChange={(picked) => onChange((picked || []).map((o) => o.value))}
          isDisabled={disabled}
          placeholder={helpText || "Select..."}
          components={{ IndicatorSeparator: null, DropdownIndicator }}
          styles={{
            container: (base) => ({ ...base, ...style }),
            control: (base) => ({
              ...base,
              border: "1px solid #d5d7da",
              borderRadius: "8px",
              boxShadow: "0px 1px 2px rgba(10, 13, 18, 0.05)",
              paddingLeft: "12px",
              paddingRight: "10px",
              fontSize: "14px",
              "&:hover": { borderColor: "#d5d7da" },
            }),
            placeholder: (base) => ({ ...base, color: "#182230" }),
            option: (base) => ({ ...base, color: "#182230" }),
            multiValueLabel: (base) => ({ ...base, color: "#182230" }),
            input: (base) => ({ ...base, color: "#182230" }),
            dropdownIndicator: (base) => ({ ...base, padding: "0 4px" }),
          }}
        />
      </div>
    );
  }

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
