import { useState, useEffect } from "react";
import moment from "moment";
import Datepicker from "react-tailwindcss-datepicker";
const DatePickerControl = ({
  date = null,
  onChange = () => {},
  label = "Select a Date",
  variant = "button",
  adminSection = false,
}) => {
  const [value, setValue] = useState({
    startDate: date ? moment(date).startOf("day").toDate() : null,
    endDate: null,
  });

  const minDate = moment().startOf("day").toDate();

  useEffect(() => {
    setValue({
      startDate: date ? moment(date).startOf("day").toDate() : null,
      endDate: null,
    });
  }, [date]);

  const handleDateChange = (val) => {
    setValue(val);

    if (val?.startDate) {
      const newDate = moment(val.startDate);
      onChange(newDate);
    } else {
      onChange(null);
    }
  };

  return (
    <Datepicker
      minDate={minDate}
      asSingle={true}
      useRange={false}
      displayFormat={"MMM DD, YYYY"}
      selected={value}
      value={value}
      placeholder={
        value?.startDate &&
        moment(value.startDate, moment.ISO_8601, true).isValid()
          ? moment(value.startDate).format("MMM DD, YYYY")
          : "Select dates"
      }
      inputClassName={`input-control section-description text-left w-full ${
        variant === "button"
          ? adminSection
            ? "max-w-full"
            : "max-w-[160px]"
          : "w-full"
      } ${
        adminSection ? "min-w-[128px]" : "min-w-[160px]"
      } shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700 max-sm:w-full`}
      onChange={handleDateChange}
    />
  );
};
export default DatePickerControl;
