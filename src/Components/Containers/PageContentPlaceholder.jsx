import React from "react";

const PageContentPlaceholder = (props) => {
  const { className = "", icon, title, description, children, ...rest } = props;
  return (
    <div {...rest} className={`page-content-placeholder ${className}`}>
      {icon && icon}
      {title && <h4 className="page-conetent-placeholder-title">{title}</h4>}
      {description && (
        <p className="page-conetent-placeholder-description">
          {description}
        </p>
      )}
      <div className="page-conetent-placeholder-actions">{children}</div>
    </div>
  );
};
export default PageContentPlaceholder;
