"use client";

import { FaCaretRight, FaCaretLeft } from "react-icons/fa";


import SidePanel from "@/components/SidePanelComponent/SidePanel";
import DiscussionForm from "@/components/discussionFormComponents/DiscussionFormContainer";
import MarketStories from "@/components/marketStoriesComponents/MarketStoriesContainer";
import { useState ,createContext } from "react";
import HeaderTab from "@/components/HeaderTab";




export const Maincontext = createContext();
export default function Home() {
  const tabArray = ["Discussion Forum","Market Stories"]
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [currTab, setCurrTab] = useState("Discussion Forum")

  const mainContextValue = {
    showSidePanel
  };

  return (
    <Maincontext.Provider value={mainContextValue}>
    <main className="">
      {showSidePanel && <SidePanel />}
      <div
        className={`h-[10vh] w-[20px] fixed top-[45%]  bg-[#1f3a61] text-white flex items-center ${
          showSidePanel ? "sm:left-[16vw] left-[60vw]" : "left-0"
        }`}
        onClick={() => {
          setShowSidePanel((prev) => {
            return !prev;
          });
        }}
      >
        {showSidePanel ? <FaCaretLeft /> : <FaCaretRight />}
      </div>
      <div className={`sm:flex max-h-screen flex-col ${showSidePanel ? "sm:w-[calc(84vw_-_22px)] sm:ml-[16vw]":"sm:w-[calc(100vw_-_22px)]"}  `}>

        <div className="w-full flex flex-row">

        {
          tabArray.map(tabname=>{
            
            return <HeaderTab key={tabname} tabName={tabname} currTab={currTab} setCurrTab={setCurrTab} />
          })
        }

        </div>
        <div className="w-full flex flex-row">

        <DiscussionForm tabName="Discussion Forum" currTab={currTab} />
        <MarketStories tabName="Market Stories" currTab={currTab} />
        </div>
      </div>
    </main>
    </Maincontext.Provider>
  );
}
