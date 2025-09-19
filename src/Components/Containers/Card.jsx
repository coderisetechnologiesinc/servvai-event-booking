import React from "react";

const Card = (props) => {
  const { className = "", padding, align, background, maxWidth, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={`servv-card ${padding || "p-0"} ${align === "center" ? "mx-auto" : ""} ${background || "bg-white"} max-md:max-w-full w-full ${maxWidth ? `md:max-w-[${maxWidth}]` : ""} ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
