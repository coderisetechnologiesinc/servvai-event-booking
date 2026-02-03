import React, { useState } from "react";
import {
  Cog6ToothIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const SettingsCardWithModal = ({
  icon = Cog6ToothIcon,
  title = "Profile",
  description = "Your profile details including specialization and location.",
  buttonText = "Edit information",
  statusText = "Information available",
  status = "available", // "available" | "unavailable"
  children, // modal body
  footerActions = null,
}) => {
  const [open, setOpen] = useState(false);

  const Icon = icon;

  return (
    <>
      {/* ✅ CARD */}
      <div className="flex flex-col justify-center items-center p-4 gap-3 w-full min-w-[330px] bg-white border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl">
        {/* TOP PART */}
        <div className="flex flex-col items-start gap-3 w-full">
          {/* ICON ROW */}
          <div className="flex justify-between items-center w-full h-16">
            {/* Icon box */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg" />
              <div className="absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]" />

              {/* inner circle */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20">
                <Icon className="w-full h-full text-[#6941C6] z-10" />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-1 w-full">
            <h3 className="font-bold text-lg leading-7 text-[#181D27]">
              {title}
            </h3>

            <p className="text-base leading-6 text-[#717680]">{description}</p>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-[#E6E6EB]" />

        {/* BOTTOM */}
        <div className="flex justify-between items-center w-full h-10">
          {/* Edit button */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Cog6ToothIcon className="w-5 h-5 text-[#414651]" />
            <span className="text-sm font-semibold text-[#414651]">
              {buttonText}
            </span>
          </button>

          {/* Status */}
          <div className="flex items-center gap-1">
            {status === "available" ? (
              <>
                <CheckIcon className="w-5 h-5 text-[#039855]" />
                <span className="text-sm text-[#039855]">{statusText}</span>
              </>
            ) : (
              <>
                <XMarkIcon className="w-5 h-5 text-[#717680]" />
                <span className="text-sm text-[#717680]">Not configured</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-xl shadow-lg flex flex-col">
            {/* Close button - Fixed position */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[#D5D7DA] bg-white hover:bg-gray-50 shadow-md z-10"
            >
              <XMarkIcon className="w-5 h-5 text-[#414651]" />
            </button>

            {/* Modal header - Fixed */}
            <div className="text-center p-8 pb-4 flex-shrink-0">
              <h2 className="text-xl font-semibold text-[#181D27]">
                Edit {title}
              </h2>
              <p className="text-base text-[#717680] mt-1">
                Update your information below
              </p>
            </div>

            {/* ✅ Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-8 py-4">
              <div className="flex flex-col gap-4">{children}</div>
            </div>

            {/* Actions - Fixed at bottom */}
            {/* Actions - Fixed at bottom */}
            <div className="flex justify-between items-center gap-3 p-8 pt-4 border-t border-gray-200 flex-shrink-0">
              {/* ✅ Left side custom actions (Upload etc) */}
              <div>{footerActions}</div>

              {/* ✅ Right side default close */}
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsCardWithModal;
