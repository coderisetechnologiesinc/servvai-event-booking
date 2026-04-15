import React from "react";

const FilterFormSection = ({
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
}) => {
  return (
    <div
      className={`
        filter-form-section
        grid
        grid-cols-1
        md:grid-cols-[220px_1fr]
        lg:grid-cols-[260px_1fr]
        gap-4 md:gap-8
        ${className}
      `}
    >
      {/* Left column (title + description) */}
      <div className="filter-form-section-header">
        <h3
          className={`text-sm font-semibold text-gray-900 mb-1 ${titleClassName}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </h3>

        {description && (
          <p
            className="text-sm text-gray-600 leading-relaxed hidden md:block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Right column (content) */}
      <div
        className={`
          filter-form-section-content
          w-full
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterFormSection;
