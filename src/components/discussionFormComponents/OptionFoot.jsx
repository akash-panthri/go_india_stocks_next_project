"use client";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";

export default function OptionFoot({ discussionFormElement }) {
  const [liked, setliked] = useState(false);
  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "m"; 
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number.toString(); 
    }
  }
 
  return (
    <div className="flex justify-between mx-3 sm:mx-40 px-4 sm:px-4">
      <span className="flex justify-evenly flex-row ">
      <span className="sm:text-3xl text-base font-normal sm:font-semibold sm:mr-3 mr-1 select-none" onClick={() => {
            
              setliked((prev) => {
                return !prev;
              });
            }}>
      {liked ? (
          <FaHeart
            
            className=" 
              text-red-500
            "
          />
        ) : (
          <FaRegHeart  />
        )}
      </span>
        
        {formatNumber(discussionFormElement.likes_count)}
      </span>
      <span className="flex justify-evenly flex-row">
        <FaRegEye className="sm:text-3xl text-base font-normal sm:font-semibold sm:mx-3 mr-1" />
        {formatNumber(discussionFormElement.view_count)}
      </span>
      <span className="flex justify-evenly flex-row">
        <BiComment className="sm:text-3xl text-base font-normal sm:font-semibold sm:mx-3 mr-1" />
        {formatNumber(discussionFormElement.comments_count)}
      </span>
      <span className="flex justify-evenly flex-row items-center">
        <MdOutlineShare className="sm:text-3xl text-base font-normal sm:font-semibold sm:mx-3 mr-1" />
        Share
      </span>
    </div>
  );
}
