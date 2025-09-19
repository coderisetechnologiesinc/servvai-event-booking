import React from "react";

const PageHeader = (props) => {
  const { className = "", bottomLine, children, ...rest } = props;
  return (
    <div
      {...rest}
      className={`page-header ${bottomLine ? "border-b pb-4" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
export default PageHeader;
