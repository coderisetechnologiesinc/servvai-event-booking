import React from "react";

const PageActionButton = ({
  text,
  icon,
  type = "primary", // primary | secondary | danger
  size = "md", // md | sm
  onAction,
  disabled = false,
  className = "",
  style = {},
  hidden,
}) => {
  const baseClass = "servv_button";
  const typeClass = `servv_button--${type}`;
  const sizeClass = size === "sm" ? "servv_button--sm" : "servv_button--md";

  return (
    <button
      type="button"
      onClick={onAction}
      disabled={disabled}
      className={`${baseClass} ${typeClass} ${sizeClass} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={style}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {text}
    </button>
  );
};

export default PageActionButton;
