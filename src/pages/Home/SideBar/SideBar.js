import React from "react";

function SideBar() {
  return (
    <div className="SideBar">
      <button className="ListBtn">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="menu-icon"
        >
          <g>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </g>
        </svg>
      </button>
      SideBar
    </div>
  );
}

export default SideBar;
