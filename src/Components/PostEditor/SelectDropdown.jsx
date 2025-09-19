import React, { useState, useRef, useEffect } from "react";
import Badge from "../Containers/Badge";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";

/**
 * @param {string} title
 * @param {Array} options [{id, name}]
 * @param {number|Array} selected
 * @param {function} onSelect
 * @param {boolean} multi
 */
const SelectDropdown = ({
  title,
  options,
  selected,
  onSelect,
  multi = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // console.log(options, selected);
  // Robust outside click handler using pointerdown and composedPath
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      const path = event.composedPath ? event.composedPath() : [];
      if (
        dropdownRef.current &&
        !path.includes(dropdownRef.current) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpen]);

  // Multi-select logic
  const handleMultiSelect = (optionId) => {
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    if (newSelected.includes(optionId)) {
      newSelected = newSelected.filter((id) => id !== optionId);
    } else {
      newSelected.push(optionId);
    }
    onSelect(newSelected);
    setIsOpen(false);
  };

  // Single-select logic
  const handleSingleSelect = (optionId) => {
    onSelect(optionId);
    setIsOpen(false);
  };

  // Remove badge for multi-select
  const handleRemoveBadge = (optionId, e) => {
    e.stopPropagation();
    let newSelected = Array.isArray(selected) ? [...selected] : [];
    newSelected = newSelected.filter((id) => id !== optionId);
    onSelect(newSelected);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label
        htmlFor={`${title}-select`}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {title}
      </label>
      <div
        className="border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer bg-white"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="flex flex-row text-sm flex-wrap gap-1">
          {multi && Array.isArray(selected) && selected.length > 0 ? (
            selected.map((selectedId) => {
              const option = options.find((opt) => opt.id === selectedId);
              // console.log("option", option);
              return (
                <Badge
                  key={selectedId}
                  text={option?.name}
                  icon={
                    <FiberManualRecordIcon
                      style={{ width: "10px", fill: "#17B26A" }}
                    />
                  }
                  iconAfter={
                    <div
                      onClick={(e) => handleRemoveBadge(selectedId, e)}
                      style={{ cursor: "pointer" }}
                    >
                      <CloseIcon style={{ width: "10px" }} />
                    </div>
                  }
                  color="gray"
                  type="badge-pill-outline"
                  size="small"
                  align="center"
                />
              );
            })
          ) : !multi && options.find((option) => option.id === selected) ? (
            <Badge
              text={options.find((option) => option.id === selected)?.name}
              icon={
                <FiberManualRecordIcon
                  style={{ width: "10px", fill: "#17B26A" }}
                />
              }
              iconAfter={
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(null);
                  }}
                  style={{ cursor: "pointer" }}
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
              className={`w-full p-2 hover:bg-gray-100 cursor-pointer flex items-center ${
                multi && selected && selected.includes(option.id)
                  ? "font-semibold text-purple-700"
                  : ""
              }`}
              onClick={() =>
                multi
                  ? handleMultiSelect(option.id)
                  : handleSingleSelect(option.id)
              }
            >
              <div className="w-full flex items-center">
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
                {multi && selected && selected.includes(option.id) && (
                  <span className="ml-auto text-xs text-purple-600">
                    {t("✓")}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDropdown;
