import Image from "next/image";
import React from "react";

export default function MarketStoriesOption({marketStoriesElement}) {
  return (
    <div className="py-3 mb-24 h-[27vh]">
      <div className="sm:px-28 px-3">
        <Image
          src={
            "https://images.unsplash.com/photo-1559247352-15706a531ef9?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          // layout="responsive"
          width={2060}
          height={1030}
        />
      </div>
      <div className="py-5 sm:w-3/5 w-[91%] sm:mx-28 mx-3 text-xs sm:px-7 px-3 h-7/12 flex item-center flex-col border">
        <span className="font-semibold">{marketStoriesElement.story_title}</span>
        <p>
         {marketStoriesElement.story_detail}
        </p>
      </div>
    </div>
  );
}
