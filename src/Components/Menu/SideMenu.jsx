import React from "react";
import {
  ListBulletIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  Square3Stack3DIcon,
  AdjustmentsHorizontalIcon,
  WindowIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import BlockStack from "../Containers/BlockStack";
import MenuItem from "./MenuItem";

const SideBar = ({ page, onChange, collapsed }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed-sidebar" : ""}`}>
      <BlockStack gap={4}>
        <div
          className={!collapsed ? `servv-logo` : `servv-logo-collapsed`}
        ></div>
        {/* <div className="text-regular text-gray-500">Version 0.3</div> */}

        <MenuItem
          title={"Events"}
          link={"events"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <ListBulletIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />
        <MenuItem
          title={"Bookings"}
          link={"bookings"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <ClipboardDocumentCheckIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />
        <MenuItem
          title={"Filters"}
          link={"filters"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <AdjustmentsHorizontalIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />
        <MenuItem
          title={"Integrations"}
          link={"integrations"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <Square3Stack3DIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />

        <MenuItem
          title={"Notifications"}
          link={"notifications"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <EnvelopeIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />
        {/* <MenuItem
          title={"Questions"}
          link={"questions"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <QuestionMarkCircleIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        /> */}
        {/* <MenuItem
          title={"FAQs"}
          link={"faq"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <DocumentTextIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        /> */}
        <MenuItem
          title={"Analytics"}
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
          title={"Settings"}
          link={"settings"}
          onSelect={onChange}
          collapsed={collapsed}
          icon={
            <Cog6ToothIcon className="menu-icon group-hover:fill-primary-button-bg" />
          }
        />
      </BlockStack>
    </div>
  );
};

export default SideBar;
