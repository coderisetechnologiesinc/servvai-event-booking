import React from "react";
import moment from "moment";

const NewTimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {},
}) => {
  const period = time ? moment(time).format("a") : "am";

  const handleToggle = () => {
    onChange(period === "am" ? "pm" : "am");
  };

  return (
    <button
      type="button"
      className="servv-time-period"
      onClick={handleToggle}
      disabled={disabled}
    >
      {period}
    </button>
  );
};

export default NewTimePeriodControl;
