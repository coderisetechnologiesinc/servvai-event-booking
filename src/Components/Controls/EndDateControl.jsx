import React, { useState } from "react";
import SelectControl from "./SelectControl";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import DatePickerControl from "../PostEditor/DatePickerControl";
import moment from "moment";
import BlockStack from "../Containers/BlockStack";

const EndDateControl = ({ recurrence, onChange, meetingType = "offline" }) => {
  const { end_times, end_date_time } = recurrence;
  const [selected, setSelected] = useState(!end_times ? "date" : "number");

  const handleSelectChange = (val) => {
    setSelected(val);
  };

  const endDate = end_date_time
    ? moment(end_date_time).format("YYYY-MM-DDTHH:mm:ss")
    : moment().format("YYYY-MM-DDTHH:mm:ss");

  // --- ENFORCE LIMITS ---
  // For Zoom: max 60 occurrences, for in-person: up to 12 months
  const isZoom = meetingType === "zoom";
  const maxOccurrences = isZoom ? 60 : 365; // 365 is a safe upper bound for in-person
  const maxMonths = 12;

  // Generate options for occurrences
  const numbersOptions = () => {
    let numberOpt = [];
    for (let i = 1; i <= maxOccurrences; i++) {
      numberOpt.push(i);
    }
    return numberOpt;
  };

  // Clamp end date for in-person to 12 months from now
  const minDate = moment().toDate();
  const maxDate = isZoom ? null : moment().add(maxMonths, "months").toDate();

  const handleEndTimesChange = (val) => {
    let newVal = parseInt(val, 10);
    if (isZoom && newVal > 60) newVal = 60;
    onChange({ ...recurrence, end_times: newVal, end_date_time: undefined });
  };

  const handleEndDateTimeChange = (val) => {
    let dateVal = val;
    if (!isZoom && maxDate && moment(val).isAfter(maxDate)) {
      dateVal = moment(maxDate).format("YYYY-MM-DDTHH:mm:ss");
    }
    onChange({ ...recurrence, end_date_time: dateVal, end_times: undefined });
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
                {t("End date by")}
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => handleSelectChange("number")}
                className={`tab-element ${
                  selected === "number" ? "tab-active" : ""
                }`}
              >
                {t("End date after")}
              </button>
            </li>
          </ul>
        </div>
        {selected === "date" && (
          <DatePickerControl
            date={endDate}
            onChange={handleEndDateTimeChange}
            variant="field"
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
        {selected === "number" && (
          <SelectControl
            options={numbersOptions()}
            selected={end_times}
            onSelectChange={handleEndTimesChange}
            helpText={
              isZoom
                ? "Max 60 occurrences for Zoom meetings"
                : "Up to 12 months for in-person events"
            }
            style={{ padding: "10px" }}
          />
        )}
        {isZoom && (
          <div className="text-xs text-gray-600 mt-2">
            {t(
              "Recurring meetings expire 365 days after the last occurrence of the series. You can schedule up to 60 occurrences into the future."
            )}
          </div>
        )}
      </BlockStack>
    </div>
  );
};
export default EndDateControl;
