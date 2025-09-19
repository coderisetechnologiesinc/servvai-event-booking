import React from "react";

const InlineStack = ({
  className = "",
  forceAlign,
  align,
  gap,
  cardsLayout,
  justify,
  children,
  ...rest
}) => {
  const alignClass = !forceAlign
    ? align && align !== "right"
      ? "w-full grow"
      : align === "right"
      ? "justify-end"
      : "justify-start grow"
    : forceAlign;

  const gapClass = gap ? `gap-${gap}` : "";

  return (
    <div {...rest} className={`${className} inline-stack ${alignClass} ${gapClass} ${cardsLayout ? "flex-[1_1_0] items-baseline" : ""} ${justify === "space" ? "justify-between" : ""}`}>
      {children}
    </div>
  );
};

export default InlineStack;
