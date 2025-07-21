import { useState } from "react";
import Badge from "../Containers/Badge";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";

const SelectDropdown = ({ title, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={`${title}-select`}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {title}
      </label>
      <div
        className="border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex flex-row text-sm">
          {selected && typeof selected !== "number" && selected.length > 0 ? (
            selected.map((selected) => (
              <Badge
                text={
                  options.filter((option) => option.id === selected)[0].name
                }
                icon={
                  <FiberManualRecordIcon
                    style={{ width: "10px", fill: "#17B26A" }}
                  />
                }
                iconAfter={
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(selected);
                    }}
                  >
                    <CloseIcon style={{ width: "10px" }} />
                  </div>
                }
                color="gray"
                type="badge-pill-outline"
                size="small"
                align="center"
              />
            ))
          ) : selected && typeof selected === "number" ? (
            <Badge
              text={options.filter((option) => option.id === selected)[0].name}
              icon={
                <FiberManualRecordIcon
                  style={{ width: "10px", fill: "#17B26A" }}
                />
              }
              iconAfter={
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(selected);
                  }}
                >
                  <CloseIcon style={{ width: "10px" }} />
                </div>
              }
              color="gray"
              type="badge-pill-outline"
              size="small"
              align="center"
            />
          ) : (
            "Select an option"
          )}
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="w-full p-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleSelect(option.id)}
            >
              <div className="w-full">
                <Badge
                  text={option.name}
                  icon={
                    <FiberManualRecordIcon
                      style={{ width: "10px", fill: "#17B26A" }}
                    />
                  }
                  color="gray"
                  type="badge-pill-outline"
                  size="small"
                  fullWidth={true}
                  align="center"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDropdown;
