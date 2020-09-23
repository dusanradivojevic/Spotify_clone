import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, fontSize, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon fontSize={fontSize} />
      <h5>{title}</h5>
    </div>
  );
}

export default SidebarOption;
