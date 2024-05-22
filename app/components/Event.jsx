import Image from 'next/image'
import React from 'react'

export default function Event({missionDay, setMissinDay, type ,fromDate ,toDate}) {
    // const {chck, setChck,exclusions, setExclusions,dayOfWeek2,messinDay,setAddEvent,addEvent,setSelectedOption,selectedOption} = props
    const {year, month, day ,dayOfWeek} = missionDay

    // const handleExclusions=()=>{
    //     setExclusions(true)
    // }
    // const chcking=()=>{
    //     setChck(false)
    //     setAddEvent(true)
    // }
  return (
  
       <div className='w-full '>

   <div className='border bg-[#E4EBF8] flex justify-center items-center rounded-md h-8'>{type} </div>
   
   <div className=' text-lg font-normal flex p-3 justify-center gap-3 w-full'>
   <div className='p-1 px-4  border-[1px] border-[#002A78]/17 rounded-full'>{fromDate}</div>
   <Image src="leftArrow.svg" width={25} height={25} alt="r" />
   <div className='p-1 px-2 border rounded-full'>{toDate}</div>
   </div>
</div>

  )
}
