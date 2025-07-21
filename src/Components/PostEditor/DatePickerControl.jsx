import { useState, useEffect } from "react";
import moment from "moment";
import Datepicker from "react-tailwindcss-datepicker";
const DatePickerControl = ({
  date = null,
  onChange = () => {},
  label = "Select a Date",
  variant = "button",
}) => {
  const [value, setValue] = useState({
    startDate: date ? moment(date).toDate() : null,
    endDate: null,
  });

  const minDate = moment().toDate();

  useEffect(() => {
    setValue({
      startDate: date ? moment(date).toDate() : null,
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
      inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white placeholder-gray-700"
      onChange={handleDateChange}
    />
  );
};
export default DatePickerControl;
