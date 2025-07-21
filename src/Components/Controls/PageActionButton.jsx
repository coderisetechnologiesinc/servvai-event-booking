import React from "react";
const PageActionButton = ({
  text,
  icon,
  type,
  customStyle,
  hidden = false,
  onAction = () => {},
  slim = false,
  justify = null,
  disabled,
}) => {
  return (
    <button
      className={`page-action-button ${type === "primary" ? "primary" : ""}${
        hidden ? "opacity-0" : ""
      } ${slim ? "px-1 py-0.5" : "p-2"} ${customStyle ? customStyle : ""} ${
        justify ? justify : ""
      }`}
      onClick={onAction}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
};
export default PageActionButton;
