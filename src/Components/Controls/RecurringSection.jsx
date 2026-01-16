import React, { Fragment } from "react";
import ButtonGroup from "../Controls/ButtonGroup";
import RecurringControl from "../Controls/RecurringControl";
import EndDateControl from "../Controls/EndDateControl";
const RecurringSection = ({
  recurrence,
  onChange = () => {},
  disabled = false,
  meetingType = "offline",
}) => {
  const eventTypes = ["One-time", "Recurring"];

  const handleTypeChange = (val) => {
    if (val === "Recurring") {
      onChange({
        type: 1,
        repeat_interval: 1,
        end_times: 1,
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
        <RecurringControl
          recurrence={recurrence}
          onChange={onChange}
          meetingType={meetingType} // <-- Pass down
        />
      )}
      {recurrence && (
        <EndDateControl
          recurrence={recurrence}
          onChange={onChange}
          meetingType={meetingType} // <-- Pass down
        />
      )}
    </Fragment>
  );
};
export default RecurringSection;
