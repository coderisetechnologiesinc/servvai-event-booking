import React from "react";

const AnnotatedSection = ({
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
}) => {
  return (
    <div
      className={`annotated-section flex flex-col md:flex-row gap-4 md:gap-8 items-start ${className}`}
    >
      {/* Title and Description - Full width on mobile, left column on desktop */}
      <div className="annotated-section-header flex-shrink-0 w-full md:w-32 lg:w-64">
        <h3
          className={`text-sm font-semibold text-gray-900 mb-1 ${titleClassName}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-sm text-gray-600 hidden md:block leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Content - Full width on mobile, right column on desktop */}
      <div
        className={`annotated-section-content flex-1 w-full ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnnotatedSection;
