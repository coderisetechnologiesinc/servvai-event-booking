import { CalendarDaysIcon, CheckIcon } from "@heroicons/react/16/solid";
import { useState, Fragment } from "react";
const OccurrencessDropdown = ({ options, selected, onSelectChange }) => {
  const [active, setActive] = useState(false);
  const handleOptionSelect = (e, option) => {
    e.preventDefault();
    onSelectChange(option);
  };
  const renderOptions = () => {
    if (options.length > 0) {
      return (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 p-4">
          {options.map((option) => (
            <a
              key={option}
              className={`flex items-center px-2 py-1 no-underline cursor-pointer`}
              onClick={(e) => handleOptionSelect(e, option)}
            >
              {selected === option ? (
                <CheckIcon className="w-4 mr-2" />
              ) : (
                <span className="w-4 mr-2" />
              )}
              <span>{option}</span>
            </a>
          ))}
        </div>
      );
    }
  };
  return (
    <div class="relative inline-block text-left">
      <button
        id="dropdownButton"
        className="flex h-[2.25rem] px-[0.8125rem] pt-[0.46875rem] pb-[0.53125rem] justify-center items-center gap-[0.5rem]
       rounded-[0.425rem] border border-[#E5E5E5] bg-white"
        onClick={() => {
          setActive(!active);
        }}
      >
        <CalendarDaysIcon className="w-4" />
        <span>{selected}</span>
      </button>
      {active && renderOptions()}
    </div>
  );
};

export default OccurrencessDropdown;
