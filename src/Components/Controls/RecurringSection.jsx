import React, { Fragment, useState } from "react";
import ButtonGroup from "../Controls/ButtonGroup";
import RecurringControl from "../Controls/RecurringControl";
import EndDateControl from "../Controls/EndDateControl";
const RecurringSection = ({
  recurrence,
  onChange = () => {},
  disabled = false,
}) => {
  // Button group control
  const eventTypes = ["One-time", "Recurring"];

  const handleTypeChange = (val) => {
    if (val === "Recurring") {
      onChange({
        type: 1, // Daily
        repeat_interval: 1, // 1 day, 1 week, 1 month
        // weekly_days: [], // "2,3"
        // monthly_day: 1, // 1 - 30,
        // monthly_week: 1, // 1 - 4, -1
        // monthly_week_day: 2, // 1 - 7
        end_times: 1,
        // end_date_time: new Date(),
      });
    } else onChange(null);
  };
  return (
    <Fragment>
      <ButtonGroup
        title="Recurrence"
        buttons={eventTypes}
        active={recurrence ? eventTypes[1] : eventTypes[0]}
        onChange={handleTypeChange}
        disabled={disabled}
      />
      {recurrence && (
        <RecurringControl recurrence={recurrence} onChange={onChange} />
      )}
      {recurrence && (
        <EndDateControl recurrence={recurrence} onChange={onChange} />
      )}
    </Fragment>
  );
};
export default RecurringSection;
