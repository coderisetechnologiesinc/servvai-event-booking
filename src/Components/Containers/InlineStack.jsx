const InlineStack = (props) => {
  return (
    <div
      className={`inline-stack ${
        !props.forceAlign
          ? props.align && props.align !== "right"
            ? "w-full grow"
            : props.align !== "left"
            ? "justify-end"
            : "justify-start grow"
          : props.forceAlign
      } gap-${props.gap || 0} ${
        props.cardsLayout ? "flex-[1_1_0] items-baseline" : ""
      } ${props.justify === "space" ? "justify-between" : ""}`}
    >
      {props.children}
    </div>
  );
};
export default InlineStack;
