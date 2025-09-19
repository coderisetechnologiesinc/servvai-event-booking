import React from "react";

const PageContent = (props) => {
  const { className = "", children, ...rest } = props;
  return (
    <div {...rest} className={`page-content ${className}`}>
      {children}
    </div>
  );
};
export default PageContent;
