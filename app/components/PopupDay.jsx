import Image from "next/image";
import React, { useState } from "react";
import Events from "./Events";
import Btn from "./Btn";


export default function PopupDay({missionDay, setMissionDay ,setExclusions}){ 
 
 
  const {year, month, day ,dayOfWeek} = missionDay
  const [events, setEvents] = useState(false);
  const mission = () => {
    setMissionDay(null)
  };

  return (
    <div className="border  flex  border-r-[#002A78] w-1/5  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full p-2 z-40">
      <div className="flex flex-col h-[90vh] ">

        <div className="">
          <div onClick={mission} className="">
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>
          <div className="flex justify-center items-center">
            <Image src="/logo.svg" width={220} height={54} alt="" />
          </div>
        </div>

        <div className="w-full ">
          <div className=" flex justify-center items-center mt-3 font-bold text-2xl">
            {dayOfWeek}
          </div>
          <div className="flex justify-center items-center text-xl">

          {day}/{month}/{year}
          </div>

          <div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full  text-center text-white bg-[#002A78]">
              סוג פעילות
            </h2>
          </div>
        </div>

        <div className=" h-full w-full">
               <Events
               events={events}
                setEvents={setEvents}
               missionDay={missionDay}
               setMissionDay={setMissionDay}/>
        
        </div>
      </div>
      <div className="flex justify-center gap-4 ">
     <button className="flex gap-2 items-center px-3 py-2 rounded-full border-[1px]  border-[#002A78]">
      <Image src="/exclusions.svg" width={20} height={20} alt="" />
      <p>החרגות</p>

     </button>

     <button onClick={()=> setEvents(1)} className="bg-[#002A78] flex gap-2 items-center text-white px-3 py-2 rounded-full">
     <Image 
     src="/addEmployee.svg" 
     width={20} 
     height={20} 
     alt="" />
      <p>הוסף אירוע</p>

     </button>
     {/* <button onClick={()=> setEvents(true)} className="bg-[#002A78] flex gap-2 items-center text-white px-3 py-2 rounded-full">

      <p>שמור</p>

     </button> */}
     {/* <button onClick={()=> setEvents(true)} className="bg-[#002A78] flex gap-2 items-center text-white px-3 py-2 rounded-full">
     <Image 
     src="/edit.svg" 
     width={20} 
     height={20} 
     alt="" />
      <p>ערוך</p>

     </button> */}
          
            </div>
      
    </div>
  );
}



