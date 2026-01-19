import React from "react";

const Card = ({
  className = "",
  padding = "p-0",
  align,
  background = "bg-white",
  maxWidth,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`
        servv-card
        ${padding}
        ${background}
        w-full
        ${align === "center" ? "mx-auto" : ""}
        ${className}
      `}
      style={{
        maxWidth: maxWidth ? maxWidth : "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
