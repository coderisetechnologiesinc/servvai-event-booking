const RadioControl = ({ label = "", value = "", name = "", checked = false, onChange = () => { } }) => {
    return (
        <div className="input-container-row items-center">
            <input
                type="radio"
                className="input-control radio-control"
                name={name}
                checked={checked}
                onChange={() => onChange()}
            />
            <label htmlFor={name} className="section-description text-gray-700">
                {label}
            </label>
        </div>
    );
};

export default RadioControl;
