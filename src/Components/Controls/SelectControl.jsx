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
            <option value={option} key="value" selected={selected === option}>
              {option}
            </option>
          ))}
        </Fragment>
      );
    }
  };
  return (
    <div className="input-container-col">
      <label for="timezone" className="section-description">
        {label}
      </label>
      <div className="select-control-with-icon-container">
        <select
          name="timezone"
          id="timezone"
          className="select-control select-control-with-icon text-sm"
          value={selected}
          onChange={(e) => onSelectChange(e.target.value)}
          disabled={disabled}
        >
          {renderOptions()}
        </select>
        {iconRight !== null && iconRight}
      </div>
    </div>
  );
};
export default SelectControl;
