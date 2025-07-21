const BlockStack = (props) => {
  return (
    <div
      className={`block-stack gap-${props.gap ? props.gap : 1} ${
        props.cardsLayout ? "flex-[1_1_0]" : ""
      } ${props.action ? "cursor-pointer" : ""} ${
        props.disabled ? "filter grayscale" : ""
      }`}
      onClick={props.onAction ? () => props.onAction() : null}
    >
      {props.children}
    </div>
  );
};
export default BlockStack;
