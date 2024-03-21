 

export default function HeaderTab({setCurrTab, currTab, tabName}) {
  return (
    <div className={` w-6/12 ${tabName === "Discussion Forum"? "sm:w-8/12" : "Market Stories" ?"sm:w-4/12" : "" }  p-9  sm:p-16  ${currTab === tabName ? "bg-[#142942]" : "bg-[#1f3a61]" } sm:bg-white text-white text-center sm:text-red-300 sm:text-3xl sm:font-bold`} onClick={()=>{
        setCurrTab(tabName)
    }}>
    <span className='sm:bg-gray-200 sm:p-3'>

     {tabName}
    </span>
     </div>
  )
}
