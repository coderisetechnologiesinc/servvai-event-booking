import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
const CollapsibleSection = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="collapsible-section">
      <div className="collapsible-header" onClick={() => setVisible(!visible)}>
        <span className="collapsible-section-heading">
          {props.sectionHeading}
        </span>
        {!visible ? <ChevronDownIcon
          className="button-icon"
        /> : <ChevronUpIcon className="button-icon" />}

      </div>

      {visible && <div className="collapsible-content">{props.children}</div>}
    </div>
  );
};
export default CollapsibleSection;
