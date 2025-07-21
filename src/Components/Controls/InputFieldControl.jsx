import React, { Fragment } from "react";

const InputFieldControl = ({
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  onChange = () => {},
  handleKeyPress = () => {},
  maxLength = "",
  minValue = "",
  maxValue = "",
  fullWidth = false,
  align = "center",
  image = null,
  suffix = "",
  width = null,
  prefix = "",
  prefixWidth = "w-12",
  step = null,
}) => {
  return (
    <Fragment>
      {!image && prefix === "" && (
        <div className="flex relative group justify-center items-center w-full">
          <input
            type={type}
            className={`input-control section-description text-${align} ${
              align === "right" ? "pr-1" : ""
            } ${fullWidth || width ? "w-full" : ""}`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            onChange={(e) => onChange(e.target.value)}
            min={minValue}
            max={maxValue}
            onKeyDown={handleKeyPress}
            step={step}
          />
          {suffix && (
            <span className="absolute text-gray-500 right-0 pr-8">
              {suffix}
            </span>
          )}
        </div>
      )}

      {!image && prefix !== "" && (
        <div className="flex w-full rounded-lg border border-gray-300 overflow-hidden text-md shadow-sm h-9">
          <div className="flex items-center justify-center bg-gray-50 text-gray-600 text-md w-12 border-r border-gray-300">
            $
          </div>
          <input
            type="text"
            inputMode="decimal"
            pattern="^\d+(\.\d{0,2})?$"
            className="w-full px-4 text-gray-800 placeholder-gray-400 text-md focus:outline-none bg-white [appearance:textfield]"
            placeholder="0.00"
            value={value}
            onChange={(e) => {
              let val = e.target.value.replace(/[^\d.]/g, "");

              if (val.includes(".")) {
                const [int, dec] = val.split(".");
                val = `${int}.${dec.slice(0, 2)}`;
              }

              if (val.startsWith("00")) val = "0";
              else if (val.startsWith("0") && val[1] !== ".")
                val = val.slice(1);

              onChange(val);
            }}
          />
        </div>
      )}

      {image && (
        <div className="flex relative group justify-center items-center w-full">
          <span className="flex absolute left-0 bg-transparent rounded text-base text-gray-600 p-2">
            <div
              className="size-6"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "24px",
                height: "24px",
              }}
            ></div>
          </span>
          <input
            type={type}
            className={`input-control section-description description-image text-${align} ${
              align === "right" ? "pr-1 pl-8" : ""
            } ${fullWidth ? "w-full" : ""}`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            size={maxLength}
            onChange={(e) => onChange(e.target.value)}
            min={minValue}
            max={maxValue}
          />
        </div>
      )}
    </Fragment>
  );
};

export default InputFieldControl;
