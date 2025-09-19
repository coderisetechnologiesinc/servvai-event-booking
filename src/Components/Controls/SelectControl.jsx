import React, { Fragment } from "react";
const SelectControl = ({
  label = "",
  options = [],
  helpText = "",
  selected = null,
  disabled = false,
  onSelectChange = () => {},
  iconRight = null,
  iconLeft = null,
  style = {}, // <-- Add style prop
}) => {
  const renderOptions = () => {
    if (options.length > 0) {
      return (
        <Fragment>
          {helpText.length > 0 && (
            <option value="" key="" disabled selected={!selected}>
              {helpText}
            </option>
          )}
          {options.map((option) => (
            <option value={option} key={option} selected={selected === option}>
              {option}
            </option>
          ))}
        </Fragment>
      );
    }
  };
  // Responsive style for mobile
  const responsiveStyle = {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
    ...style,
  };
  return (
    <div className="input-container-col" style={{ width: "100%" }}>
      <label htmlFor="timezone" className="section-description">
        {label}
      </label>
      <div
        className="select-control-with-icon-container"
        style={{ width: "100%" }}
      >
        <select
          name="timezone"
          id="timezone-select"
          className="select-control select-control-with-icon text-sm p-4"
          value={selected}
          onChange={(e) => onSelectChange(e.target.value)}
          disabled={disabled}
          style={responsiveStyle}
        >
          {renderOptions()}
        </select>
        {iconRight !== null && iconRight}
      </div>
    </div>
  );
};
export default SelectControl;
