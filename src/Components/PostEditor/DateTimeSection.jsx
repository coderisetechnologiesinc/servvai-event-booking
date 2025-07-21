import React, { useEffect, useState } from "react";
// Components
// import DatePicker from "./DatePicker";
import SelectControl from "../Controls/SelectControl";
import TimeInputControl from "../Controls/TimeInputControl";
import RecurringSection from "../Controls/RecurringSection";
// Icons
import { ChevronDownIcon } from "@heroicons/react/16/solid";
// Utilities
import timezones from "../../utilities/timezones";
import axios from "axios";
import moment from "moment";
// import { toast } from "react-toastify";
import DatePickerControl from "./DatePickerControl";
import AIButton from "./AIButton";
const DateTimeSection = ({
  eventDetails,
  onChange,
  settings,
  occurrenceId,
  adminSection,
  setToast,
}) => {
  const { startTime, duration, timezone, recurrence } = eventDetails;
  const time = startTime !== null ? moment(startTime) : moment();
  const [isDateChanged, setDateChanged] = useState(!!startTime);
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const endTime = time
    ? moment(time).add(duration, "minutes")
    : moment().add(duration, "minutes");
  const timezoneOptions = timezones.map((timezone) => timezone.zone);

  const userTimezone = timezones.filter(
    (timezone) =>
      timezone.zone === Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  useEffect(() => {
    if (
      settings &&
      !settings.timezone &&
      userTimezone.length > 0 &&
      eventDetails &&
      eventDetails.timezone &&
      timezone.length === 0
    ) {
      onChange("timezone", userTimezone[0].zone);
    }
  }, []);
  useEffect(() => {
    if (
      settings &&
      settings.settings &&
      settings.settings.admin_dashboard &&
      settings.settings.admin_dashboard.default_timezone
    ) {
      onChange("timezone", settings.settings.admin_dashboard.default_timezone);
    }
  }, [settings]);

  const handleTimezoneChange = (value) => {
    let currentSelectedTimezone = timezones.filter(
      (timezone) => timezone.zone === value
    );
    if (currentSelectedTimezone.length > 0) {
      onChange("timezone", currentSelectedTimezone[0].zone);
    }
  };

  const handleDateChange = (val) => {
    const currentTime = moment(time);
    const newVal = moment(val);
    if (val) {
      newVal.set({
        hour: currentTime.get("hour"),
        minute: currentTime.get("minute"),
        second: currentTime.get("second"),
      });
      onChange("startTime", newVal.format("YYYY-MM-DDTHH:mm:ss"));
    }
  };

  const handleStartTimeChange = (val) => {
    const newTime = moment(val);
    onChange("startTime", newTime.format("YYYY-MM-DDTHH:mm:ss"));
  };

  const handleEndTimeChange = (val) => {
    onChange("duration", moment(val).diff(moment(time), "minutes"));
  };

  const handleRecurrenceChange = (val) => {
    // console.log(val);
    onChange("recurrence", val);
  };

  const handleTimeFormatChange = () => {
    if (!settings) return;
    else if (
      settings &&
      settings.settings &&
      settings.settings.time_format_24_hours
    ) {
      // console.log(settings.settings.time_format_24_hours);
      setTimeFormat("HH:mm");
    }
  };
  useEffect(() => {
    handleTimeFormatChange();
  }, [settings]);

  const iconRight = <ChevronDownIcon className="input-control-icon-right" />;

  const fetchDescription = async () => {
    if (adminSection) return;
    if (eventDetails.title.length === 0) {
      setToast("Please enter a title to use this feature.");
      return;
    }
    const { createBlock } = wp.blocks;
    const { dispatch } = wp.data;
    let url = "https://ai-api.servv.ai/generate-description";

    // let prompt = `Write a compelling event description for this information specific to the store provided.
    //               Title: ${eventDetails.title}
    //               Date time: ${eventDetails.startTime} timezone: ${eventDetails.timezone}
    //               Put location and date time in separate lines at the end.`;
    await axios
      .post(
        url,
        {
          title: eventDetails.title,
          // model: "gpt-4o-mini",
          // messages: [
          //   {
          //     role: "user",
          //     content: prompt,
          //   },
          // ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const descriptionContent =
          response?.data?.description.length > 0
            ? response?.data?.description
            : "";

        const descriptionBlock = createBlock("core/paragraph", {
          content: descriptionContent,
        });

        // Insert block into current post
        dispatch("core/block-editor").insertBlocks(descriptionBlock);
        return response;
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        const descriptionContent = error.response
          ? error.response.data
          : error.message;

        const descriptionBlock = createBlock("core/paragraph", {
          content: descriptionContent,
        });
        dispatch("core/block-editor").insertBlocks(descriptionBlock);
      });
  };

  return (
    <div className="section-container">
      <div className="flex flex-row justify-between">
        <div className="section-heading">Date and time</div>
        {!adminSection && <AIButton onClick={fetchDescription} />}
      </div>
      {/* <DatePicker
        date={time}
        onChange={handleDateChange}
        label={
          time === null
            ? "Select a Date"
            : moment(time).format("DD - MM - YYYY")
        }
        variant="button"
        instance="main"
      /> */}
      <div className="flex flex-row gap-5 justify-between items-end">
        <DatePickerControl
          date={time}
          onChange={handleDateChange}
          variant="button"
        />
        <div className="flex flex-row gap-5 justify-between align-center">
          <TimeInputControl
            // label="Start time"
            time={time}
            onChange={handleStartTimeChange}
            minValue={0}
            maxValue={timeFormat === "hh:mm a" ? 12 : 24}
            timeFormat={timeFormat}
            align="start"
          />
          <div className="self-center">to</div>

          <TimeInputControl
            // label="End time"
            time={endTime}
            onChange={handleEndTimeChange}
            minValue={0}
            maxValue={timeFormat === "hh:mm a" ? 12 : 24}
            timeFormat={timeFormat}
            align="end"
          />
        </div>
      </div>
      <SelectControl
        label="Time zone"
        options={timezoneOptions}
        helpText="Select a timezone"
        selected={timezone ? timezone : null}
        disabled={false}
        onSelectChange={handleTimezoneChange}
      />
      {!occurrenceId && (
        <RecurringSection
          recurrence={recurrence}
          onChange={handleRecurrenceChange}
          disabled={settings && settings.current_plan.id !== 2}
        />
      )}
    </div>
  );
};
export default DateTimeSection;
