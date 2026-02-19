import React, { useState } from "react";
import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AnimatedModal from "../Components/AnimatedModal";
import Datepicker from "react-tailwindcss-datepicker";
import CalendarInline from "./CalendarInline";

const DatePickerWithMobileModal = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-1 grow">
      {/* Desktop: show normal Datepicker, hidden on mobile */}
      <div className="hidden sm:block">
        <Datepicker
          displayFormat={"MMM DD, YYYY"}
          value={value}
          placeholder="Select dates"
          inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 min-w-[150px] bg-white"
          onChange={onChange}
        />
      </div>

      {/* Mobile: show calendar icon button */}
      <button
        onClick={() => setOpen(true)}
        className="flex sm:hidden items-center justify-center px-2.5 py-2.5 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50"
      >
        <CalendarDaysIcon className="w-5 h-5 text-[#414651]" />
      </button>

      {/* Mobile Modal */}
      <AnimatedModal open={open} onClose={() => setOpen(false)}>
        {({ close }) => (
          <div className="relative w-full max-w-[380px] bg-white rounded-xl shadow-lg flex flex-col">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border bg-white hover:bg-gray-50 shadow-md"
            >
              <XMarkIcon className="w-5 h-5 text-[#414651]" />
            </button>

            {/* Header */}
            <div className="text-center p-6 pb-2">
              <h2 className="text-xl font-semibold text-[#181D27]">
                Select Date
              </h2>
            </div>

            {/* Calendar */}
            <div className="px-4 py-2 flex justify-center">
              <CalendarInline
                value={
                  dates.startDate
                    ? new Date(dates.startDate.valueOf())
                    : undefined
                }
                onChange={(date) => {
                  if (!date) return; // guard for deselect
                  handleSetDates({ startDate: date, endDate: date });
                  close();
                }}
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-6 pt-2 border-t border-gray-200">
              <button
                onClick={close}
                className="px-5 py-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 font-semibold text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </AnimatedModal>
    </div>
  );
};

export default DatePickerWithMobileModal;
