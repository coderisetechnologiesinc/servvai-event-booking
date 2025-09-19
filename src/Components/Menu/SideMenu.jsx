import React from "react";
import {
  ListBulletIcon,
  Cog6ToothIcon,
  Square3Stack3DIcon,
  AdjustmentsHorizontalIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  Bars3Icon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";
import BlockStack from "../Containers/BlockStack";
import MenuItem from "./MenuItem";

// Make sure your translation function t() is in scope

const SideBar = ({ page, onChange, collapsed, onToggle }) => {
  return (
    <>
      {/* Hamburger menu removed for mobile as per request */}

      {/* Sidebar */}
      <div
        className={`sidebar ${collapsed ? "collapsed-sidebar" : ""}`}
        aria-expanded={!collapsed}
      >
        {/* Close Button for Mobile - Only visible when sidebar is open on mobile */}
        {!collapsed && onToggle && (
          <button
            onClick={onToggle}
            className="md:hidden absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 z-10"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}

        <BlockStack gap={4}>
          <div
            className={!collapsed ? `servv-logo` : `servv-logo-collapsed`}
          ></div>
          {/* <div className="text-regular text-gray-500">Version 0.3</div> */}

          <MenuItem
            title={typeof t === "function" ? t("Events") : "Events"}
            link={"events"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <ListBulletIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          <MenuItem
            title={typeof t === "function" ? t("Bookings") : "Bookings"}
            link={"bookings"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <ClipboardDocumentCheckIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          <MenuItem
            title={typeof t === "function" ? t("Filters") : "Filters"}
            link={"filters"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <AdjustmentsHorizontalIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />

          <MenuItem
            title={typeof t === "function" ? t("Integrations") : "Integrations"}
            link={"integrations"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <Square3Stack3DIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          <MenuItem
            title={
              // typeof t === "function"
              // ? t("Email notifications")
              // : "Notifications"
              "Notifications"
            }
            link={"notifications"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <EnvelopeIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          {/* Uncomment if you want to show FAQs or Questions
          <MenuItem
            title={"FAQs"}
            link={"faq"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <DocumentTextIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          */}
          <MenuItem
            title={typeof t === "function" ? t("Analytics") : "Analytics"}
            link={"analytics"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <ChartBarIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          {/* <MenuItem
            title={"Membership & plans"}
            link={"pricing"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <SparklesIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          /> */}
          <MenuItem
            title={typeof t === "function" ? t("Settings") : "Settings"}
            link={"settings"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <Cog6ToothIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
          <MenuItem
            title={"Support"}
            link={"support"}
            onSelect={onChange}
            collapsed={collapsed}
            icon={
              <QuestionMarkCircleIcon className="menu-icon group-hover:fill-primary-button-bg" />
            }
          />
        </BlockStack>
      </div>
    </>
  );
};

export default SideBar;
