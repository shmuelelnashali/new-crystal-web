import React from "react";

export default function Search({textBtn, addNew, addImage}) {
  return (
    <div className="w-2/4 flex relative rounded-full text  p-1">
      <div className=" w-4/5 absolute z-10 rounded-full bg-[#EFF3FB] p-2 ">
        search
      </div>

      <button 
      onClick={()=>addNew()}
      className="  w-[23%] flex justify-around items-center absolute pr-[5%] pl-3 p-2 left-0 text-gray-100 bg-[#002A78] rounded-l-full">
        <div>{textBtn}</div>
        <div>{addImage}</div>
      </button>
    </div>
  );
}
