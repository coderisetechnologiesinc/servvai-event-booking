import React, { useEffect, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import {
  CalendarIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/16/solid";
import moment from "moment";

const DatePicker = ({
  date = null,
  onChange = () => {},
  label = "Select a Date",
  variant = "button",
  instance = "main",
}) => {
  // console.log('Datepicker', date)
  const [show, setShow] = useState(false);
  const handleClose = (state) => {
    setShow(state);
  };

  const options = {
    title: "Select a Date",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white dark:bg-white",
      todayBtn: "",
      clearBtn: "bg-white dark:bg-white",
      icons: "text-black bg-white size-fit dark:text-black",
      text: "text-black gap-2 dark:text-black rounded-full",
      disabledText: "bg-gray-100 rounded-full hover:bg-gray-200",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => (
        <span>
          <ArrowLeftIcon className="size-5" />
        </span>
      ),
      next: () => (
        <span>
          <ArrowRightIcon className="size-5" />
        </span>
      ),
    },
    datepickerClassNames: instance,
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: instance,
    inputIdProp: instance,
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={onChange}
        show={show}
        setShow={handleClose}
      >
        <div className=" ">
          <div className={variant === "button" ? "" : "hidden"}>
            <button
              className="flex flex-row gap-2 items-center p-2 rounded-lg border-solid border border-gray-300 bg-white text-gray-900 text-sm"
              onClick={() => {
                setShow(true);
              }}
            >
              <CalendarIcon className="size-6" /> {label}
            </button>
          </div>
          {variant !== "button" && (
            <div className="input-container-col">
              <label className="section-description">{t("End date by")}</label>
              <div className="input-control-with-icon-container">
                <input
                  type="text"
                  className="input-control-with-icon text-md"
                  placeholder="Select Date"
                  value={moment(date).format("DD-MM-YYYY")}
                  onFocus={() => setShow(true)}
                  readOnly
                />
                <CalendarDateRangeIcon className="input-control-icon-left" />
              </div>
            </div>
          )}
        </div>
      </Datepicker>
    </div>
  );
};
export default DatePicker;
