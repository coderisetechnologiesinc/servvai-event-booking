import React, { useState } from "react";
import SelectControl from "./SelectControl";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
// import DatePicker from "../PostEditor/DatePicker";
import DatePickerControl from "../PostEditor/DatePickerControl";
import moment from "moment";
import BlockStack from "../Containers/BlockStack";
const EndDateControl = ({ recurrence, onChange }) => {
  const { end_times, end_date_time } = recurrence;
  const [selected, setSelected] = useState(!end_times ? "date" : "number");
  const handleSelectChange = (val) => {
    setSelected(val);
  };

  const endDate = end_date_time
    ? moment(end_date_time).format("YYYY-MM-DDTHH:mm:ss")
    : moment().format("YYYY-MM-DDTHH:mm:ss");
  const handleEndTimesChange = (val) => {
    const newRecurrenceSettings = { ...recurrence };
    delete newRecurrenceSettings.end_date_time;
    newRecurrenceSettings.end_times = val;
    onChange(newRecurrenceSettings);
  };

  const handleEndDateTimeChange = (val) => {
    const newRecurrenceSettings = { ...recurrence };
    delete newRecurrenceSettings.end_times;
    newRecurrenceSettings.end_date_time = val;
    onChange(newRecurrenceSettings);
  };

  const numbersOptions = () => {
    let numberOpt = [];
    for (let i = 0; i < 60; i++) {
      numberOpt.push(i);
    }
    return numberOpt;
  };

  const iconRight = <ChevronDownIcon className="input-control-icon-right" />;
  return (
    <div className="input-container-col">
      <BlockStack gap={4}>
        <div className="tabs-group-container">
          <ul className="flex flex-row">
            <li className="me-2">
              <button
                onClick={() => handleSelectChange("date")}
                className={`tab-element ${
                  selected === "date" ? "tab-active" : ""
                }`}
              >
                End date by
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => handleSelectChange("number")}
                className={`tab-element ${
                  selected === "number" ? "tab-active" : ""
                }`}
              >
                End date after
              </button>
            </li>
          </ul>
        </div>
        {selected === "date" && (
          // <DatePicker
          //   date={endDate}
          //   onChange={handleEndDateTimeChange}
          //   label={!endDate ? "Select a Date" : endDate}
          //   variant="field"
          //   instance="endDate"
          // />
          <DatePickerControl
            date={endDate}
            onChange={handleEndDateTimeChange}
            variant="field"
          />
        )}
        {selected === "number" && (
          <SelectControl
            options={numbersOptions()}
            selected={end_times}
            onSelectChange={handleEndTimesChange}
          />
        )}
      </BlockStack>
    </div>
  );
};
export default EndDateControl;
