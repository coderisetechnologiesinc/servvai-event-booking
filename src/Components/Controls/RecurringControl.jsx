import React, { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import SelectControl from "./SelectControl";
import ButtonGroup from "../Controls/ButtonGroup";
import InlineStack from "../Containers/InlineStack";
import BlockStack from "../Containers/BlockStack";
import CheckboxControl from "./CheckboxControl";
const RecurringControl = ({ recurrence, onChange }) => {
  const {
    type,
    repeat_interval,
    weekly_days,
    monthly_day,
    monthly_week,
    monthly_week_day,
  } = recurrence;

  useEffect(() => {
    if (recurrence.monthly_week_day) {
      setMonthlyType(false);
    }
  }, [recurrence]);
  // const [recurrenceType, setRecurrenceType] = useState("day");
  const [monthlyType, setMonthlyType] = useState(true); //true day_of_month | false day_of week
  const monthlyTypes = ["Occurs of days of month", "Occurs on day of week"];
  const handleRecurrenceTypeChange = (val) => {
    let recurrenceSettings = { ...recurrence };
    if (val === 1) {
      delete recurrenceSettings.weekly_days;
      delete recurrenceSettings.monthly_day;
      delete recurrenceSettings.monthly_week;
      delete recurrenceSettings.monthly_week_day;
    } else if (val === 2) {
      delete recurrenceSettings.monthly_day;
      delete recurrenceSettings.monthly_week;
      delete recurrenceSettings.monthly_week_day;
    } else if (val === 3) {
      delete recurrenceSettings.weekly_days;
    }
    console.log(recurrenceSettings);
    onChange({ ...recurrenceSettings, type: val });
  };
  const handleMonthlyTypeChange = (val) => {
    if (val === "Occurs of days of month") setMonthlyType(true);
    else setMonthlyType(false);
  };
  const dailyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 day");
    for (let i = 2; i < 15; i++) {
      repeatOpts.push(`${i} days`);
    }
    return repeatOpts;
  };

  const weeklyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 week");
    for (let i = 2; i < 15; i++) {
      repeatOpts.push(`${i} weeks`);
    }
    return repeatOpts;
  };

  const monthlyRepeatOptions = () => {
    let repeatOpts = [];
    repeatOpts.push("1 month");
    for (let i = 2; i < 4; i++) {
      repeatOpts.push(`${i} months`);
    }
    return repeatOpts;
  };
  const monthlyDayRepeatOptions = () => {
    let repeatOpts = [];
    for (let i = 1; i < 32; i++) {
      repeatOpts.push(i);
    }
    return repeatOpts;
  };
  const monthlyWeekRepeatOptions = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Last",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderOptions = () => {
    const recurrenceOptions = ["day", "week", "month"];
    return recurrenceOptions.map((interval) => {
      return (
        <div className="input-container-row items-center">
          <input
            type="radio"
            className="input-control radio-control"
            name="recurrence-select"
            id={interval}
            checked={type === recurrenceOptions.indexOf(interval) + 1}
            onChange={() =>
              handleRecurrenceTypeChange(
                recurrenceOptions.indexOf(interval) + 1
              )
            }
          />
          <label htmlFor="daily" className="section-description">
            {interval === "day"
              ? "Daily"
              : String(interval).charAt(0).toUpperCase() +
                String(interval).slice(1) +
                "ly"}
          </label>
        </div>
      );
    });
  };
  const handleWeeklyDaysChange = (index, checked) => {
    let newWeeklyDays = weekly_days || [];
    if (checked) {
      newWeeklyDays = weekly_days.filter((item) => item !== index);
    } else {
      newWeeklyDays.push(index);
    }
    onChange({ ...recurrence, weekly_days: newWeeklyDays });
  };

  const renderWeeklyOptions = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
      (day, index) => {
        const checked = weekly_days && weekly_days.includes(index + 1);
        return (
          <div className="flex items-center gap-2">
            <CheckboxControl
              type="checkbox"
              checked={checked}
              onChange={() => handleWeeklyDaysChange(index + 1, checked)}
            />
            <label className="ml-2 section-description">{day}</label>
          </div>
        );
      }
    );
  };

  const handleRepeatIntervalChange = (val) => {
    onChange({
      ...recurrence,
      repeat_interval: Number.parseInt(val.split(" ")[0]),
    });
  };

  const handleMonthlyDayChange = (val) => {
    onChange({ ...recurrence, monthly_day: Number.parseInt(val) });
  };

  const handleMonthlyWeekChange = (val) => {
    onChange({
      ...recurrence,
      monthly_week: monthlyWeekRepeatOptions.indexOf(val) + 1,
    });
  };

  const handleMonthlyWeekDayChange = (val) => {
    onChange({ ...recurrence, monthly_week_day: days.indexOf(val) + 1 });
  };

  const iconRight = <ChevronDownIcon className="input-control-icon-right" />;
  return (
    <Fragment>
      <fieldset className="input-container-col">
        <BlockStack gap={4}>
          <legend className="section-description">
            Select type of recurrence
          </legend>
          <div className="input-container-row justify-start gap-40">
            {renderOptions()}
          </div>
        </BlockStack>
      </fieldset>
      <BlockStack gap={8} cardsLayout={true}>
        {type === 1 && (
          <SelectControl
            label="Repeat every"
            options={dailyRepeatOptions()}
            selected={
              repeat_interval === 1 ? "1 day" : `${repeat_interval} days`
            }
            onSelectChange={handleRepeatIntervalChange}
          />
        )}

        {type === 2 && (
          <BlockStack gap={4} cardsLayout={true}>
            <SelectControl
              label="Repeat every"
              options={weeklyRepeatOptions()}
              selected={
                repeat_interval === 1 ? "1 week" : `${repeat_interval} weeks`
              }
              onSelectChange={handleRepeatIntervalChange}
            />
            <p>Occurs on</p>
            <div className="grid grid-cols-2">{renderWeeklyOptions()}</div>
          </BlockStack>
        )}
        {type === 3 && (
          <BlockStack gap={4} cardsLayout={true}>
            <SelectControl
              label="Repeat every"
              options={monthlyRepeatOptions()}
              selected={
                repeat_interval === 1 || repeat_interval > 3
                  ? "1 month"
                  : `${repeat_interval} months`
              }
              onSelectChange={handleRepeatIntervalChange}
            />
            <ButtonGroup
              title="Event recurrence"
              buttons={monthlyTypes}
              active={
                monthlyType
                  ? "Occurs of days of month"
                  : "Occurs on day of week"
              }
              onChange={handleMonthlyTypeChange}
            />
            {monthlyType && (
              <div className="input-container-col gap-4">
                <SelectControl
                  label=""
                  options={monthlyDayRepeatOptions()}
                  selected={monthly_day}
                  onSelectChange={handleMonthlyDayChange}
                />
              </div>
            )}
            {!monthlyType && (
              <BlockStack gap={4} cardsLayout={true}>
                <InlineStack gap={2}>
                  <SelectControl
                    label=""
                    options={monthlyWeekRepeatOptions}
                    selected={
                      monthly_week
                        ? monthlyWeekRepeatOptions[monthly_week - 1]
                        : monthlyWeekRepeatOptions[0]
                    }
                    onSelectChange={handleMonthlyWeekChange}
                  />
                  <SelectControl
                    label=""
                    options={days}
                    selected={
                      monthly_week_day ? days[monthly_week_day - 1] : days[0]
                    }
                    onSelectChange={handleMonthlyWeekDayChange}
                  />
                </InlineStack>
              </BlockStack>
            )}
          </BlockStack>
        )}
      </BlockStack>
    </Fragment>
  );
};
export default RecurringControl;
