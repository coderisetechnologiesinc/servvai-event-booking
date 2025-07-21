import React from "react";
import InlineStack from "../Containers/InlineStack";

const MenuItem = (props) => {
  return (
    <a className="menu-item group" onClick={() => props.onSelect(props.link)}>
      <InlineStack gap={2}>
        {props.icon}
        <span className="menu-item-title text-md group-hover:text-primary-button-bg">
          {!props.collapsed && props.title}
        </span>
      </InlineStack>
    </a>
  );
};
export default MenuItem;
