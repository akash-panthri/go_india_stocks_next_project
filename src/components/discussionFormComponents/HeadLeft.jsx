import Image from "next/image";

export default function HeadLeft({ discussionFormElement }) {
  return (
    <div className="py-2 sm:pr-1 pr:1 text-xs flex  sm:w-8/12 w-[50%] items-center">
    <div className="w-11 sm:w-40  h-full flex items-center justify-end pr-3">

      <Image
        className="rounded-full"
        width={50}
        height={50}
        src={
          "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
       
      />
    </div>
      <div className="flex flex-row items-center flex-auto pr-4">

      <div className="pr-2 sm:text-base font-semibold">{discussionFormElement.full_name}</div>
      <div className="bg-blue-600 w-max text-white my-2 px-2 py-1 rounded-full text-center ">
        Sector {discussionFormElement.sector_number}
      </div>
      </div>
    </div>
  );
}
