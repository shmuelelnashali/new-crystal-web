import Image from "next/image";
import React, { useState } from "react";
import Events from "./Events";



export default function PopupDay({missionDay, setMissionDay ,setExclusions, eventDate, setEventDate}){ 
 
 
  const { dayOfWeek ,activity } = missionDay
  const [ year, month, day ] = eventDate.beginning_date.split("-")
  console.log();
  const [events, setEvents] = useState(activity??"");
 
  //   {
  //     beginning_date :`${year}-${month}-${day}`,
  //     end_date:`${year}-${month}-${day}`,
  //     activityDay:dayOfWeek
  //   })
  const mission = () => {
    setMissionDay(null)
  };

  return (
    <div className="border w-1/5 flex  border-r-[#002A78]  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full p-2 z-40">
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
             יום {dayOfWeek} 
          </div>

          <div className="flex justify-center items-center text-xl">
          {day}/{month}/{year}
          </div>
          
          <div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-[#002A78]">
              סוג פעילות
            </h2>
          </div>
        </div>

        <div className=" h-full w-full">
              <Events
              events={events}
              setEvents={setEvents}
              missionDay={missionDay}
              setMissionDay={setMissionDay}
              eventDate={eventDate}
              setEventDate={setEventDate}/>
        </div>
      </div>

      <div className="flex justify-center gap-4 ">

     <button onClick={()=>setExclusions(true)}className="flex gap-2 items-center px-3 py-2 rounded-full border-[1px]  border-[#002A78]">
      <Image src="/exclusions.svg" width={20} height={20} alt="" />
      <p>החרגות</p>

     </button>

    {!activity &&  events!== "new" && events!== "edit" && 
    <button onClick={()=> setEvents("new")} className="bg-[#002A78] flex gap-2 items-center text-white px-3 py-2 rounded-full">
     <Image 
     src="/addEmployee.svg" 
     width={20} 
     height={20} 
     alt="" />
      <p>הוסף אירוע</p>
     </button>} 


    { (events === "new" || events === "edit")  &&
    <button  className="bg-[#002A78] flex gap-2 items-center text-white px-5 py-2 rounded-full">
      <p>שמור</p>
     </button> }
     
     { activity && events!== "new" && events!== "edit"&&
     <button onClick={()=> setEvents("edit")} className="bg-[#002A78] flex gap-2 items-center text-white px-3 py-2 rounded-full">
     <Image 
     src="/edit.svg" 
     width={20} 
     height={20} 
     alt="" />
      <p>ערוך</p>

     </button> }
          
            </div>
  
    </div>
  );
}



