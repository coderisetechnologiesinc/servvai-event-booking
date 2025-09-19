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
    const hh = selectedTime.hour();

    if (timeFormat === "hh:mm a") {
      return selectedTime.format("hh");
    } else {
      return hh;
    }
  };
  const getMinutes = () => {
    const selectedTime = time ? moment(time) : moment();
    return selectedTime.get("minute");
  };

  const onHoursChange = (val) => {
    const newTime = moment(time);
    let currentVal = Number.parseInt(val);

    if (timeFormat === "hh:mm a") {
      if (currentVal < 1) currentVal = 1;
      if (currentVal > 12) currentVal = 12;

      const isPM = newTime.format("A") === "PM";

      if (isPM && currentVal !== 12) {
        currentVal += 12;
      } else if (!isPM && currentVal === 12) {
        currentVal = 0;
      }
    } else {
      if (currentVal < 0) currentVal = 0;
      if (currentVal > 23) currentVal = 23;
    }

    newTime.set("hour", currentVal);
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
    const currentDate = time ? moment(time).date() : moment().date();

    const hh = newTime.hour();
    let newTimeValue = val;
    if (val === "am" && hh < 12) {
      newTimeValue = hh - 12;
    } else if (val === "pm" && hh >= 12) {
      newTimeValue = hh + 12;
    }

    if (newTimeValue > -24 || newTimeValue < 0) {
      newTime.hour(newTimeValue);
      newTime.set({ date: currentDate });
    } else {
      newTime.hour(newTimeValue);
    }
    onChange(newTime);
  };
  return (
    <div
      className={`input-container-col items-start ${
        align === "start" ? "grow" : "grow-0"
      } justify-between md:grow-0`}
    >
      <div className="section-description">{label}</div>
      <div className="input-container-row items-center">
        <InputFieldControl
          value={String(getHours()).padStart(2, "0")}
          onChange={onHoursChange}
          maxLength={2}
          type="number"
          minValue={timeFormat === "hh:mm a" ? 1 : 0}
          maxValue={timeFormat === "hh:mm a" ? 12 : 23}
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
