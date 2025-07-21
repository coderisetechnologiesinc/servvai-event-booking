import ButtonGroup from "../Controls/ButtonGroup";
const EventVisibility = ({ productDetails, onChange }) => {
  const eventVisibilityOptions = ["Public", "Unlisted"];

  return (
    <div className="section-container">
      <div className="section-heading">Visibility</div>
      <ButtonGroup
        title="Set event visibility"
        buttons={eventVisibilityOptions}
        active={
          !productDetails.is_hidden
            ? eventVisibilityOptions[0]
            : eventVisibilityOptions[1]
        }
        onChange={() => {
          onChange("is_hidden", !productDetails.is_hidden);
        }}
      />
    </div>
  );
};
export default EventVisibility;
