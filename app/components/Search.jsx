'use client'

import clsx from "clsx";

export default function Search({textBtn, addNew, addImage, bg, searchText,missionDay }) {
  return (
    <div className={clsx("w-1/2  flex  h-10 border border-white relative rounded-full items-center ",
    {" bg-gradient-to-r from-[#002A78] via-[#002A78] to-[#EFF3FB]":!missionDay})}>
     

      <input className={clsx("rounded-full outline-none h-full placeholder:text-[#002A78] w-full bg-[#EFF3FB]" ,
      {"bg-white border":bg},
       {"w-[85%]":!missionDay}  )}
     
      placeholder={searchText}
      />

      {!missionDay &&<button 
      onClick={(e)=>
        {e.stopPropagation(),
          addNew()
        }}
      className="w-[20%] flex justify-center gap-2 items-center   left-0 text-gray-100 font-normal  text-[20px] ">
        <div>{textBtn}</div>
        <div>{addImage}</div>
      </button>}
    </div>
  );
}
