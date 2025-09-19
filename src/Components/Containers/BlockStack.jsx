import React from "react";

const BlockStack = ({
  gap = 4,
  cardsLayout,
  action,
  disabled,
  onAction,
  className = "",
  children,
  ...rest
}) => (
  <div
    {...rest}
    onClick={onAction ? () => onAction() : undefined}
    className={`${className} flex flex-col ${gap ? `space-y-${gap}` : ""} ${cardsLayout ? "flex-[1_1_0]" : ""} ${action ? "cursor-pointer" : ""} ${disabled ? "filter grayscale" : ""}`}
  >
    {children}
  </div>
);

export default BlockStack;
