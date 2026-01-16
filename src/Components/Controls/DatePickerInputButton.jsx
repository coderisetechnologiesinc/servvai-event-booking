import Datepicker from "react-tailwindcss-datepicker";

const DatePickerButton = ({ value, onChange, label = "Select dates" }) => {
  return (
    <div className="datepicker-root">
      <div className="datepicker-button">
        <svg
          className="datepicker-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 2v4M16 2v4M3 10h18"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>

        <span className="datepicker-label">{label}</span>
      </div>

      <div className="datepicker-overlay">
        <Datepicker
          value={value}
          onChange={onChange}
          asSingle
          useRange={false}
          inputClassName="datepicker-overlay-input"
        />
      </div>
    </div>
  );
};

export default DatePickerButton;
