const RecurrenceTypeRadio = ({ label, checked, onChange }) => {
  return (
    <label className="servv-radio">
      <input type="radio" checked={checked} onChange={onChange} />
      <span className="servv-radio__control" />
      <span className="servv-radio__label">{label}</span>
    </label>
  );
};
export default RecurrenceTypeRadio;
