import React from 'react'
import Image from "next/image";
export default function Option() {
  return (
    <div className=" w-full relative  ">
        <div  className="w-full  relative">
    <input
      type="text"
      className="w-full h-full p-2 bg-[#EFF3FB] border rounded-full "
      placeholder=""
    /></div>
    <Image
      className="absolute top-30 "
      src="MagnifyingGlass.svg"
      width={20}
      height={20}
    />
    {/* <div>
    gggggr
    </div>
    <div>
    ggggg
    </div>
    <div>
    ggggg
    </div>
    <div>
    ggggg
    </div> */}
  </div>
  )
}
