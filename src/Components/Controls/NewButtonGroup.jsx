import React from "react";

const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <div className="tabs-wrapper">
      {title && <div className="section-description">{title}</div>}

      <div className="tabs-container">
        {buttons.map((button) => {
          const isActive = active === button;

          return (
            <button
              key={button}
              type="button"
              disabled={disabled}
              onClick={() => onChange(button)}
              className={`tab-button ${
                isActive ? "tab-button--active" : "tab-button--inactive"
              }`}
            >
              <span className="tab-button-text">{button}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NewButtonGroup;
