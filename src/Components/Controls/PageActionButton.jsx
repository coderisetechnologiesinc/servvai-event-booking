import React from "react";
const PageActionButton = ({
  text,
  icon,
  type,
  onAction,
  disabled = false,
  className = "",
  style = {},
}) => {
  return (
    <button
      onClick={onAction}
      disabled={disabled}
      className={`
        flex items-center justify-center px-4 py-2 rounded-lg
        font-medium text-sm transition-colors duration-200
        ${
          type === "primary"
            ? "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-200"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      style={{ fontFamily: "'Inter', sans-serif", ...style }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default PageActionButton;
