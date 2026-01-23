import React, { useEffect, useState } from "react";
import NewInputFieldControl from "./NewInputFieldControl";
import NewTimePeriodControl from "./NewTimePeriodControl";
import moment from "moment";

const NewTimeInputControl = ({
  label,
  time,
  disabled = false,
  timeFormat = "hh:mm a",
  onChange,
  align = "start",
  validationError = false,
}) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!time) return;

    const m = moment(time);
    setHours(timeFormat === "hh:mm a" ? m.format("hh") : m.format("HH"));
    setMinutes(m.format("mm"));
    // setHasError(false);
  }, [time, timeFormat]);
  const validateTime = (h, m) => {
    if (h === "" || m === "") return false;

    const hour = Number(h);
    const minute = Number(m);

    if (Number.isNaN(hour) || Number.isNaN(minute)) return false;

    if (timeFormat === "hh:mm a") {
      if (hour < 1 || hour > 12) return false;
    } else {
      if (hour < 0 || hour > 23) return false;
    }

    if (minute < 0 || minute > 59) return false;

    return true;
  };

  const commitTime = (h, m) => {
    const isValid = validateTime(h, m);
    setHasError(!isValid);

    if (!isValid) return;

    let hour = Number(h);
    const minute = Number(m);

    const base = time ? moment(time) : moment();

    if (timeFormat === "hh:mm a") {
      const period = base.format("a");

      if (period === "pm" && hour !== 12) hour += 12;
      if (period === "am" && hour === 12) hour = 0;
    }

    const newTime = base.clone().set({
      hour,
      minute,
      second: 0,
    });

    onChange(newTime);
  };

  const digitsOnly = (v) => v.replace(/[^\d]/g, "");

  return (
    <div
      className={`input-container-col items-start ${
        align === "start" ? "grow" : "grow-0"
      } justify-between`}
    >
      {label && <div className="section-description">{label}</div>}

      <div className="input-container-row items-center">
        <NewInputFieldControl
          value={hours}
          onChange={(v) => setHours(digitsOnly(v))}
          onBlur={() => commitTime(hours, minutes)}
          maxLength={2}
          disabled={disabled}
          align="center"
          width="64px"
          error={hasError || validationError}
        />

        <span className="section-description">:</span>

        <NewInputFieldControl
          value={minutes}
          onChange={(v) => setMinutes(digitsOnly(v))}
          onBlur={() => commitTime(hours, minutes)}
          maxLength={2}
          disabled={disabled}
          align="center"
          width="64px"
          error={hasError || validationError}
        />

        {timeFormat === "hh:mm a" && (
          <NewTimePeriodControl
            time={time}
            onChange={(val) => {
              const t = time ? moment(time).clone() : moment();
              const hh = t.hour();
              if (val === "am" && hh >= 12) t.hour(hh - 12);
              if (val === "pm" && hh < 12) t.hour(hh + 12);
              onChange(t);
            }}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

export default NewTimeInputControl;
