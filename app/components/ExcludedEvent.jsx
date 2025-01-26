import Image from 'next/image'
import React from 'react'

export default function ExcludedEvent() {
    const excluded=""
  return (

   
    <div className=' '>
         <div className="flex justify-center items-center p-2 pt-5">
            <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-[#002A78]">
             החרגות 
            </h2>
          </div>
          <div>
          <div className=' w-full border h-8 rounded-full flex  border-[#E4EBF8] '>
           
            <div className="w-7/12 h-8 items-center text-lg flex justify-center bg-[#E4EBF8] rounded-full">
            dd

            </div>
             <div className='w-5/12  text-lg flex justify-center'>
               fff
            </div>
          </div>
            <div className=' text-lg font-normal flex p-3 justify-center gap-3 w-full'>
      <div className='p-1 px-4  border-[1px] border-[#002A78]/17 rounded-full'>kkkk</div>
          <Image src="leftArrow.svg" width={25} height={25} alt="r"/>
        <div className='p-1 px-2 border rounded-full'>kkkk</div>
   </div>
          </div>
          

    </div>
  )
}
