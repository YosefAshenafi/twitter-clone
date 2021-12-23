import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ active, title, Icon }) {
    return (
        <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
            <Icon />
            <h2>{title}</h2>
        </div>
    );
}

export default SidebarOptions;
