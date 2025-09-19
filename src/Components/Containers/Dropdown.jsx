import React, { useRef, useEffect, useState } from "react";

const Dropdown = ({
  activator,
  status,
  children,
  onClose,
  className = "",
  dropdownClassName = "",
  ...rest
}) => {
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({ minWidth: 240 });

  useEffect(() => {
    if (!status) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [status, onClose]);

  useEffect(() => {
    if (status && dropdownRef.current) {
      const dropdown = dropdownRef.current.querySelector(
        ".dropdown-content-fix"
      );
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        let newStyle = { minWidth: 240 };
        if (rect.right > viewportWidth) {
          newStyle.right = 0;
          newStyle.left = "auto";
        }
        if (rect.left < 0) {
          newStyle.left = 0;
          newStyle.right = "auto";
        }
        setDropdownStyle({ ...newStyle });
      }
    }
  }, [status, children]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`} {...rest}>
      {activator}
      {status && (
        <div
          className={`absolute z-50 mt-2 ${dropdownClassName}`}
          style={{ minWidth: 240, right: 0, left: "auto" }}
        >
          <div
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 dropdown-content-fix"
            style={dropdownStyle}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
