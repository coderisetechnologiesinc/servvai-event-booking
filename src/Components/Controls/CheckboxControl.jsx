const CheckboxControl = ({
  label = "",
  value = "",
  name = "",
  size = 6,
  checked = false,
  disabled,
  onChange = () => {},
  font = null,
  color = "text-gray-700",
}) => {
  return (
    <div className="input-container-row items-center">
      <input
        type="checkbox"
        className={`input-control checkbox-control size-${size} accent-brand-700`}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className={`section-description ${color} ${font ? font : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxControl;
