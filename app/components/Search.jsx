'use client'
import React from "react";

export default function Search({textBtn, addNew, addImage, bg, searchText}) {
  return (
    <div className="w-2/5 flex relative rounded-full text  items-center">
      <input className= {`w-3/4 absolute z-10  rounded-full ${bg? "bg-white border":"bg-[#EFF3FB]"} leading-5 p-2`} 
      placeholder={searchText}
      />
       
      

      <button 
      onClick={()=>addNew()}
      className=" flex justify-center  items-center absolute gap-2 pr-[5%]  p-2 left-2 w-4/12 text-gray-100 font-normal leading-5 text-[20px] bg-[#002A78] rounded-l-full">
        <div>{textBtn}</div>
        <div>{addImage}</div>
      </button>
    </div>
  );
}
 