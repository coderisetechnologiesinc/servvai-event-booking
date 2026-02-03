import React from "react";

const StepBlock = ({ title, description, children }) => {
  return (
    <div className="step__content_block">
      <span className="step__content_title">{title}</span>

      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      {children}
    </div>
  );
};

export default StepBlock;
