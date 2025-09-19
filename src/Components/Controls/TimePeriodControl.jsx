import React, { useEffect } from "react";
import moment from "moment";
const TimePeriodControl = ({ time, disabled = false, onChange = () => {} }) => {
  // useEffect(() => {
  // }, [time]);

  return (
    <button
      onClick={() => onChange(time ? moment(time).format("a") : "am")}
      className="period-control section-description font-regular leading-none"
      disabled={disabled}
    >
      {time ? moment(time).format("a") : "am"}
    </button>
  );
};
export default TimePeriodControl;
