import React, { useState } from 'react'
import Image from "next/image";
export default function Option({data, handel,activityDay,toogle, setTogele}) {
  

  return (
    <div className=" w-full   ">
        <div onClick={(e)=>{e.preventDefault()
        setTogele(!toogle)
        
      console.log(toogle);}}  
        className="w-full  flex items-center text-lg font-normal border-[1px] min-h-[32px] border-blue_color  rounded-full relative">
    <p className='pr-3'> {activityDay} </p>

    <Image
      className="absolute transform -translate-y-1/2 left-3 top-1/2 "
      src="downArrow.svg"
      width={10}
      height={6}
    />
   
   
    {toogle &&
    <div className='shadowForDrop w-full p-1 top-[110%] rounded-xl absolute bg-white z-30'>
      {data.map((v,i)=>
    <div 
        key={i}
        onClick={()=>handel(v,"day")}
         className='cursor-pointer px-4 w-full md:truncate  py-1 rounded hover:bg-blue_color hover:text-white text-blue_color' >
        {v}
        </div>
    )}
    </div>
    }

    </div>
 
  </div>
  )
}
