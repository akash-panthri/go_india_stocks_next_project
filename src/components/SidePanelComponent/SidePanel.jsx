import React from "react";
import SidePanelHead from "./SidePanelHead";
import SidePanelBody from "./SidePanelBody";

export default function SidePanel() {
  return (
    <div className="fixed  w-[60vw] sm:w-[16vw] h-screen bg-[#1f3a61] text-white text-xs sm:text-2xl">
      <SidePanelHead />
      <SidePanelBody />
      
    </div>
  );
}
