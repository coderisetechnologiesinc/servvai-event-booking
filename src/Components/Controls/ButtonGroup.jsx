import React from "react";
const ButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => { },
  disabled = false
}) => {
  return (
    <div className="input-container-row justify-between">
      <div className="input-container-col grow">
        {title.length > 0 && <div className="section-description">{title}</div>}
        <div className="button-group-container">
          {buttons.map((button) => (
            <button
              className={`button-group-button${active == button ? "-active" : ""
                } section-description`}
              data-value={button}
              disabled={disabled}
              onClick={(e) => {
                onChange(e.target.dataset.value);
              }}
              key={button}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ButtonGroup;
