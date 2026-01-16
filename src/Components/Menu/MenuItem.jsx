import React from "react";
import InlineStack from "../Containers/InlineStack";

const MenuItem = ({ title, link, onSelect, collapsed, icon }) => {
  return (
    <button
      className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100"
      onClick={() => onSelect(link)}
    >
      <InlineStack gap={2} className="items-center">
        {icon}
        {!collapsed && <span className="menu-item">{title}</span>}
      </InlineStack>
    </button>
  );
};

export default MenuItem;
