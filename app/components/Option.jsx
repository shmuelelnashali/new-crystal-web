import React, { useState } from 'react'
import Image from "next/image";
export default function Option({data, handelDate,activityDay}) {
  const [toogle, setTogele]=useState(false)

  return (
    <div className=" w-full   ">
        <div onClick={()=>{setTogele(!toogle)}}  className="w-full  flex items-center text-lg font-normal border-[1px] min-h-[34px] border-[#002A78]  rounded-full relative">
  <p className='pr-3'>{activityDay}</p>
  <Image
      className="absolute transform -translate-y-1/2 left-3 top-1/2 "
      
      src="downArrow.svg"
      width={10}
      height={6}
    />
   
   
    {toogle &&
    <div className='  shadowForDrop w-full p-1 top-[110%] rounded-xl absolute bg-white z-30'>
    {data.map((v,i)=>
    <div 
    key={i}
    onClick={()=>handelDate(v,"day")}
     className='cursor-pointer px-4 w-full md:truncate  py-1 rounded hover:bg-[#002A78] hover:text-white text-[#002A78]' >
    {v}
    </div>
    )}
    </div>}
    </div>
 
  </div>
  )
}
