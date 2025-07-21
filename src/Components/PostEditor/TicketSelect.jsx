import React, { Fragment } from "react";
const TicketsSelect = ({
  options = [],
  helpText = "",
  selected = null,
  disabled = false,
  onSelectChange = () => {},
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
            <option
              value={option}
              key="value"
              selected={selected.includes(key)}
            >
              {option.content}
            </option>
          ))}
        </Fragment>
      );
    }
  };
  return (
    <div className="input-container-col">
      <label for="timezone" className="section-description">
        Ticket
      </label>
      <div className="select-control-with-icon-container">
        <select
          name="timezone"
          id="timezone"
          className="select-control select-control-with-icon text-sm"
          value={options}
          onChange={(e) => onSelectChange(e.target.value)}
          disabled={disabled}
        >
          {renderOptions()}
        </select>
      </div>
    </div>
  );
};
export default TicketsSelect;
