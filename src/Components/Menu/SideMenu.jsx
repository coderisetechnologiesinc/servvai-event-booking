import React from "react";
import {
  ListBulletIcon,
  Cog6ToothIcon,
  Square3Stack3DIcon,
  AdjustmentsHorizontalIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

const SideBar = ({ page, onChange, collapsed, onToggle }) => {
  const navigate = useNavigate();

  const handleSelect = (link) => {
    if (typeof onChange === "function") {
      onChange(link);
    }

    navigate(`/${link}`);
  };

  return (
    <div
      className={`sidebar ${collapsed ? "collapsed-sidebar" : ""}`}
      aria-expanded={!collapsed}
    >
      {!collapsed && onToggle && (
        <button
          onClick={onToggle}
          className="md:hidden absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 z-10"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}

      <div className="flex flex-col gap-[24px]">
        <div
          className={!collapsed ? `servv-logo-png` : `servv-logo-collapsed`}
        />

        <div className="flex flex-col gap-2">
          <MenuItem
            title={typeof t === "function" ? t("Events") : "Events"}
            link="events"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <ListBulletIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Bookings") : "Bookings"}
            link="bookings"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <ClipboardDocumentCheckIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Filters") : "Filters"}
            link="filters"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <AdjustmentsHorizontalIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Integrations") : "Integrations"}
            link="integrations"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <Square3Stack3DIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={"Notifications"}
            link="notifications"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <EnvelopeIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Analytics") : "Analytics"}
            link="analytics"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <ChartBarIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Settings") : "Settings"}
            link="settings"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <Cog6ToothIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={"Support"}
            link="support"
            onSelect={handleSelect}
            collapsed={collapsed}
            icon={
              <QuestionMarkCircleIcon className="menu-icon fill-gray-700 group-hover:fill-primary-button-bg" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
