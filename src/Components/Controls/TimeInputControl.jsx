import React, { useEffect } from "react";
import InputFieldControl from "./InputFieldControl";
import TimePeriodControl from "./TimePeriodControl";
import moment from "moment";
const TimeInputControl = ({
  label,
  time,
  disabled,
  timeFormat,
  onChange,
  align = "start",
}) => {
  useEffect(() => {
    if (time === null) {
      const newTime = moment();
      onChange(newTime);
    }
  }, []);
  const getHours = () => {
    const selectedTime = time ? moment(time) : moment();
    const hh = selectedTime.get("hour");
    if (hh > 12 && timeFormat === "hh:mm a") return hh % 12;
    else return hh;
  };
  const getMinutes = () => {
    const selectedTime = time ? moment(time) : moment();
    return selectedTime.get("minute");
  };

  const onHoursChange = (val) => {
    let currentVal = val;
    if (currentVal.length > 2) {
      if (currentVal[0] !== "0") currentVal = currentVal.slice(0, 2);
      else currentVal = currentVal.slice(1, 3);
    }
    if (Number.parseInt(currentVal) > 12 && timeFormat === "hh:mm a") {
      currentVal = 12;
    } else if (Number.parseInt(currentVal) > 24 && timeFormat === "hh:mm a") {
      currentVal = 24;
    }

    const newTime = moment(time);
    newTime.set("hour", Number.parseInt(val ? currentVal : 0));
    onChange(newTime);
  };
  const onMinutesChange = (val) => {
    let currentVal = val;
    if (currentVal.length > 2) {
      if (currentVal[0] !== "0") currentVal = currentVal.slice(0, 2);
      else currentVal = currentVal.slice(1, 3);
    }
    if (Number.parseInt(currentVal) > 59) {
      currentVal = 0;
    }
    const newTime = time ? moment(time).clone() : moment();

    newTime.set("minute", Number.parseInt(currentVal || 0));

    onChange(newTime);
  };
  const onPeriodChange = (val) => {
    const newTime = time ? moment(time) : moment();
    // console.log(newTime);

    const hh = time.get("hour");
    if (val === "am") {
      newTime.set("hour", hh + 12);
    } else {
      newTime.set("hour", hh - 12);
    }
    onChange(newTime);
  };
  return (
    <div
      className={`input-container-col items-start ${
        align === "start" ? "grow" : "grow-0"
      } justify-between`}
    >
      <div className="section-description">{label}</div>
      <div className="input-container-row items-center">
        <InputFieldControl
          value={String(getHours()).padStart(2, "0")}
          onChange={(val) => onHoursChange(val)}
          maxLength={2}
          type="number"
          minValue={0}
          maxValue={timeFormat === "hh:mm a" ? 12 : 24}
          disabled={disabled}
        />
        <span className="section-description">:</span>
        <InputFieldControl
          value={String(getMinutes()).padStart(2, "0")}
          onChange={(val) => onMinutesChange(val)}
          maxLength={2}
          type="number"
          minValue={0}
          maxValue={60}
          disabled={disabled}
        />
        {timeFormat === "hh:mm a" && (
          <TimePeriodControl
            time={time}
            onChange={onPeriodChange}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};
export default TimeInputControl;
