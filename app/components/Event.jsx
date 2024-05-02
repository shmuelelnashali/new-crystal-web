import React from 'react'

export default function Event(props) {
    const {chck, setChck,exclusions, setExclusions,dayOfWeek2,messinDay,setAddEvent,addEvent,setSelectedOption,selectedOption} = props
    let { day, month, year,dayOfWeek } = messinDay;

    const handleExclusions=()=>{
        setExclusions(true)
    }
    const chcking=()=>{
        setChck(false)
        setAddEvent(true)
    }
  return (
    <div className='flex flex-col items-center h-full'>
    {/* <div className='flex-col flex justify-center items-center '> */}
  <div className='w-full h-[75vh]'>
       <div className=' flex justify-center items-center mt-3 font-bold text-2xl'>
               יום {dayOfWeek2} 
       </div>
       <div className='flex justify-center items-center text-xl'>
           {day}/{month}/{year}
       </div>
    
       <div className='flex justify-center items-center p-2'>
       <h2 className=" w-4/5 p-2 border rounded-full  text-center text-white bg-[#002A78]">
       סוג פעילות
           </h2>
       </div>
       <div className='border bg-[#E4EBF8] flex justify-center items-center rounded-md h-8'> {selectedOption}</div>
   </div>
 
   {/* </div> */}
   <div className='flex justify-center items-end h-[15vh] '>
      
       <div className='flex justify-center items-center  '>
          
            <div onClick={chcking} className="mb-3 px-4 py-2  border rounded-full  text-center  text-white bg-[#002A78]">
                <div className=' flex justify-between items-center gap-2'>
                   <div className=''>  
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0517 3.73913L15.4575 2.33246C15.7506 2.0394 16.148 1.87476 16.5625 1.87476C16.977 1.87476 17.3744 2.0394 17.6675 2.33246C17.9606 2.62553 18.1252 3.02301 18.1252 3.43746C18.1252 3.85192 17.9606 4.2494 17.6675 4.54246L8.81833 13.3916C8.37777 13.8319 7.83447 14.1556 7.2375 14.3333L5 15L5.66667 12.7625C5.8444 12.1655 6.16803 11.6222 6.60833 11.1816L14.0517 3.73913ZM14.0517 3.73913L16.25 5.93746M15 11.6666V15.625C15 16.1222 14.8025 16.5992 14.4508 16.9508C14.0992 17.3024 13.6223 17.5 13.125 17.5H4.375C3.87772 17.5 3.40081 17.3024 3.04917 16.9508C2.69754 16.5992 2.5 16.1222 2.5 15.625V6.87496C2.5 6.37768 2.69754 5.90077 3.04917 5.54914C3.40081 5.19751 3.87772 4.99996 4.375 4.99996H8.33333" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>

                   </div>
                     <div  className=''> ערוך</div> 
                </div>
           </div>
       </div>
   </div>
 </div>

  )
}
