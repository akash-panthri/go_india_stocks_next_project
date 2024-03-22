 

import { HiUser } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
export default function SidePanelHead() {
  return (
    <div className="h-[7.5%] border-b  flex flex-row items-center justify-between">
        <div className="flex flex-row w-2/4 justify-between mx-2">
          <HiUser className='text-2xl sm:text-base rounded-full' />
          <span>Hello User</span>
        </div>
        <span className="font-bold px-5 text-3xl">
          <GoBell />
        </span>
      </div>
  )
}
