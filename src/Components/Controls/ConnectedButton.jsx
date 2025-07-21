const ConnectedButton = ({
  text = "",
  icon,
  selected = false,
  onAction = () => {},
}) => {
  return (
    <button
      onClick={onAction}
      className={`connected-button ${selected ? "selected-button" : ""}`}
    >
      {text}
    </button>
  );
};
export default ConnectedButton;
