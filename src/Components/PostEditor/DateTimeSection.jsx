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
import apiFetch from "@wordpress/api-fetch";
import { toast } from "react-toastify";
const DateTimeSection = ({
  eventDetails,
  onChange,
  settings,
  occurrenceId,
  adminSection,
  setToast,
}) => {
  const [isAiLoading, setIsAILoading] = useState(false);
  const { startTime, duration, timezone, recurrence } = eventDetails;

  const time =
    startTime !== null
      ? typeof startTime === "string"
        ? moment(startTime)
        : startTime
      : moment();

  const [isDateChanged, setDateChanged] = useState(!!startTime);
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const endTime = time
    ? moment(time).add(duration, "minutes")
    : moment().add(duration, "minutes");
  const timezoneOptions = timezones.map((timezone) => timezone.zone);

  const [userTimezone, setUserTimezone] = useState("US/Pacific");
  const updateTimezone = (settings) => {
    let defaultTimezone = null;

    if (!settings) return;

    if (settings.settings?.admin_dashboard) {
      const adminSettings = settings.settings.admin_dashboard;
      defaultTimezone = adminSettings.default_timezone || moment.tz.guess();
    } else {
      defaultTimezone = moment.tz.guess();
    }

    let findTimezone = timezones.filter((t) => t.zone === defaultTimezone);

    if (findTimezone.length > 0) {
      setUserTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment.tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;

      let availableTimezone = timezones.filter(
        (t) => t.gmt === formattedOffset
      );

      if (availableTimezone.length > 0) {
        setUserTimezone(availableTimezone[0]);
      }
    }
  };
  useEffect(() => {
    updateTimezone(settings);
  }, [settings]);

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
    setIsAILoading(true);
    const { createBlock } = wp.blocks;
    const { dispatch, select } = wp.data;
    const url = "/wp-json/servv-plugin/v1/event/data/generate";

    try {
      const response = await axios
        .post(
          url,
          { title: eventDetails.title },
          {
            headers: {
              "X-WP-Nonce": servvData.nonce,
            },
          }
        )
        .catch((error) => {
          toast(
            error.message
              ? error.message
              : "AI generation could not be completed. Please try again."
          );
        });

      const { description, image, tags } = response.data;

      // 1. Insert Description Block
      if (description && description.length > 0) {
        const descriptionBlock = createBlock("core/paragraph", {
          content: description,
        });
        dispatch("core/block-editor").insertBlocks(descriptionBlock);
      }
      setIsAILoading(false);
      if (image) {
        const blob = b64toBlob(image, "image/png");
        const file = new File([blob], "featured-image.png", {
          type: "image/png",
        });

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", "Featured Image");
        if (eventDetails?.title) {
          formData.append("alt_text", eventDetails.title);
        }

        try {
          // Upload to WP Media Library
          const uploadResponse = await apiFetch({
            path: "/wp/v2/media",
            method: "POST",
            body: formData,
            headers: {
              "X-WP-Nonce": servvData.nonce, // provided by wp_localize_script
            },
          });

          if (uploadResponse?.id) {
            // Assign uploaded image as Featured Image
            dispatch("core/editor").editPost({
              featured_media: uploadResponse.id,
            });
          }
        } catch (imgErr) {
          console.error("Failed to upload featured image:", imgErr);
        }
      }
      // 3. Create and Assign Tags
      if (Array.isArray(tags)) {
        const tagIds = [];

        for (const tagRaw of tags) {
          const tagName = tagRaw.replace(/^#/, "").trim();
          if (!tagName) continue;

          let tag = select("core").getEntityRecords("taxonomy", "post_tag", {
            search: tagName,
            per_page: 1,
          });

          if (!tag) {
            const results = await apiFetch({
              path: `/wp/v2/tags?search=${encodeURIComponent(tagName)}`,
            });
            tag = results.length ? results[0] : null;
          }

          if (!tag) {
            tag = await apiFetch({
              path: "/wp/v2/tags",
              method: "POST",
              data: { name: tagName },
            });
          }

          if (tag && tag.id) {
            tagIds.push(tag.id);
          }
        }

        if (tagIds.length > 0) {
          dispatch("core/editor").editPost({ tags: tagIds });
        }
      }
    } catch (error) {
      setIsAILoading(false);
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      const fallbackContent = error.response
        ? error.response.data
        : error.message;

      const fallbackBlock = wp.blocks.createBlock("core/paragraph", {
        content: fallbackContent,
      });
      wp.data.dispatch("core/block-editor").insertBlocks(fallbackBlock);
    }
  };

  // Helper: base64 → Blob
  function b64toBlob(b64Data, contentType = "", sliceSize = 512) {
    // Remove "data:image/...;base64," if present
    const cleaned = b64Data.includes(",") ? b64Data.split(",")[1] : b64Data;

    // Remove any whitespace or line breaks
    const safeBase64 = cleaned.replace(/\s/g, "");

    const byteCharacters = atob(safeBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  return (
    <div className="section-container">
      <div className="flex flex-row justify-between">
        <div className="section-heading">Date and time *</div>
        {!adminSection && (
          <AIButton onClick={fetchDescription} loading={isAiLoading} />
        )}
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
      <div className="flex flex-row gap-5 justify-between items-end max-sm:flex-col">
        <DatePickerControl
          date={time}
          onChange={handleDateChange}
          variant="button"
          adminSection={adminSection}
        />
        <div className="flex flex-row gap-3 justify-between align-center max-sm:justify-start md:justify-between max-sm:w-full">
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
        label="Timezone *"
        options={timezoneOptions}
        helpText="Select a timezone"
        selected={timezone ? timezone : null}
        disabled={false}
        onSelectChange={handleTimezoneChange}
        style={{ padding: "10px" }}
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
