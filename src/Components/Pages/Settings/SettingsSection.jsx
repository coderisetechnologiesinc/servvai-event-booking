// components/Settings/SettingsSection.jsx
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PageActionButton from "../../Controls/PageActionButton";

const SettingsSection = ({
  icon: Icon,
  title = "General Settings",
  description = "Configure your general settings",
  statusText = "Settings configured",
  status = "available", // "available" | "unavailable"
  children,
  onSave,
  onCancel,
  onView, // callback for View button
  direct = false, // if true, shows View button instead of Edit settings
  showActions = true,
  sectionId,
  activeSection,
  setActiveSection,
}) => {
  const isEditing = activeSection === sectionId;
  const [mode, setMode] = useState("card");
  const handleSave = () => {
    if (onSave) onSave();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();

    setMode("closing");

    setTimeout(() => {
      setMode("card");
    }, 250);
    setTimeout(() => {
      setActiveSection(null);
    }, 248);
  };

  if (mode === "card" && !isEditing) {
    // CARD VIEW
    return (
      <div className="settings-slide h-full">
        <div className="settings-card h-full">
          <div className="flex flex-col justify-center items-center p-4 gap-3 w-full min-w-[330px] bg-white border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl h-full flex-1">
            {/* TOP PART */}
            <div className="flex flex-col items-start gap-3 w-full">
              {/* ICON ROW */}
              <div className="flex justify-between items-center w-full h-16">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg" />
                  <div className="absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]" />
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
                <p className="text-base leading-6 text-[#717680]">
                  {description}
                </p>
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="w-full h-px bg-[#E6E6EB]" />

            {/* BOTTOM */}
            <div className="flex justify-between items-center w-full h-10">
              {/* Button - View (if direct) or Edit settings (if not direct) */}
              {direct && onView ? (
                <button
                  onClick={onView}
                  className="flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <span className="text-sm font-semibold text-[#414651]">
                    View
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMode("editing");
                    setActiveSection(sectionId);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <span className="text-sm font-semibold text-[#414651]">
                    Edit
                  </span>
                </button>
              )}

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
                    <span className="text-sm text-[#717680]">
                      Not configured
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // EDIT VIEW
  return (
    <div
      className={`settings-slide ${
        mode === "closing" ? "settings-edit-exit" : "settings-edit-enter"
      }`}
    >
      <div className="w-full">
        {/* Header with Back Button */}
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 mb-4 text-[#414651] hover:text-[#6941C6]"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Back to Settings</span>
            </button>
            <h1 className="dashboard-title">{title}</h1>
            <p className="dashboard-description mt-4">{description}</p>
          </div>

          {/* Action Buttons */}
          {showActions && (
            <div className="dashboard-actions mb-2 md:mb-0 md:flex flex-row items-center gap-2">
              {/* <PageActionButton
                text="Cancel"
                type="secondary"
                onAction={handleCancel}
              /> */}
              <PageActionButton
                text="Save"
                type="primary"
                onAction={handleSave}
              />
            </div>
          )}
        </div>

        <div className="header-line" />

        {/* Content */}
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default SettingsSection;
