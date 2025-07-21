const Card = (props) => {
  return (
    <div
      className={`servv-card ${props.padding ? props.padding : "p-0"} ${
        props.align === "center" ? "mx-auto" : ""
      } ${props.background ? props.background : "bg-white"}`}
      style={{ maxWidth: props.maxWidth }}
    >
      {props.children}
    </div>
  );
};
export default Card;
