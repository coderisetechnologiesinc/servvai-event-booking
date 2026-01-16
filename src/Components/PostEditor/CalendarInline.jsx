import { DayPicker } from "react-day-picker";

const CalendarInline = ({ value, onChange }) => {
  return (
    <div className="date-picker-menu">
      <DayPicker
        mode="single"
        selected={value}
        onSelect={onChange}
        weekStartsOn={1} // Mo → Su
        showOutsideDays
      />
    </div>
  );
};

export default CalendarInline;
