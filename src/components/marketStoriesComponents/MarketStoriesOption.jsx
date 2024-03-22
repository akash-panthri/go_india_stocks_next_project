import Image from "next/image";
import {useContext} from "react";
import { Maincontext } from "@/app/page";

export default function MarketStoriesOption({marketStoriesElement}) {

  const { showSidePanel } = useContext(Maincontext);
  return (
    <div className="pb-3 mb-24 sm:mx-14 sm:mr-32 h-[30vh] sm:h-[25vh] flex flex-col mt-3">
    
        <Image
        className=" mx-3 sm:mx-10"
          src={
            "https://images.unsplash.com/photo-1559247352-15706a531ef9?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={`Market story ${marketStoriesElement.id}`}
         
          width={2060}
          height={1030}
        />
      <div className={` w-[100%] ${showSidePanel ? "sm:w-[100%]":"sm:w-[100%]"} sm:mx-10 mx-3 py-5  text-xs px-3 sm:px-7  flex item-center flex-col border`}>
        <span className="font-semibold">{marketStoriesElement.story_title}</span>
        <p>
         {marketStoriesElement.story_detail}
        </p>
      </div>
    </div>
  );
}
