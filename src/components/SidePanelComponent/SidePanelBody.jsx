import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import data from '../../../data/sidePanelElement.json'
export default function SidePanelBody() {
   
  return (
    <>
     
        <button
          type="button"
          class="flex items-center w-full my-5 px-2  text-white transition duration-75 rounded-lg bg-[#142942] 
          active:bg-[#142942] hover:bg-[#0b1c30] text-xs sm:text-2xl"
         
        >
          <BiCommentDetail className="text-2xl" />
          <span class="flex-1 m-3  text-left rtl:text-right whitespace-nowrap">
            Discussion Forum
          </span>
          <GoTriangleDown className="text-2xl" />
        </button>
      
      <div className=" h-[3.5%] flex flex-row px-2 align-center my-7">
      <AiFillDollarCircle className="text-2xl" />
      <span className="mx-3 ">Market Stories</span>
      </div>

      {data?.map(item=> {
        return (

      <div key={item.id} className="mx-11 my-7">{item.elem}</div>
      )}
      )}
     
    </>
  );
}
