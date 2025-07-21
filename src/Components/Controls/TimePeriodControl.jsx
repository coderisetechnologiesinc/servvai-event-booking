import React, { useEffect } from "react";
import moment from "moment";
const TimePeriodControl = ({ time, disabled = false, onChange = () => {} }) => {
  // useEffect(() => {
  // }, [time]);
  return (
    <button
      onClick={() => onChange(moment(time).get("hour") > 12 ? "pm" : "am")}
      className="period-control section-description font-regular leading-none"
      disabled={disabled}
    >
      {time ? (moment(time).get("hour") > 12 ? "pm" : "am") : "am"}
    </button>
  );
};
export default TimePeriodControl;
