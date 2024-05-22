"use client";
import { useState } from "react";
import PopupDay from "../components/PopupDay";
import Exclusions from "../components/Exclusions";
import Year from "../components/Year";

export default function Calendar() {
  
  const [missionDay, setMissionDay] = useState(); //selected day
  const [exclusions, setExclusions] = useState(false);//open popup החרגות 


  const dateToObject =(string)=>{
    if(string===null || string.includes("null")){
      setMissionDay(null)
   return
    } 
    const  [year, month, day ] = string.split("-")
    const date = new Date(year, month, day)
    const mission = Number(day)<=10
    const dayOfWeek = date.getDay()
    console.log (mission)
     const objectDate = {year:year, month:month.padStart(2, "0"),day:day.padStart(2, "0") ,dayOfWeek:dayOfWeek ,activity:mission}
     setMissionDay(objectDate)
     
  }
  // console.log(dateToObject("2024-5-16"))

  return (
    <div className="flex ">
      <div className={` ${missionDay ? "w-4/5" : "w-full px-[5%]"} `}>
     <Year
        missionDay={missionDay}
        setMissionDay={dateToObject}
        />

    {missionDay && 
      <PopupDay
        missionDay={missionDay}
        setMissionDay={dateToObject}
        setExclusions={setExclusions}
     />} 
      </div>
    
    </div>
  );
}



//       {exclusions && (
//         <Exclusions
//           // selectedOption={selectedOption}
//           // setSelectedOption={setSelectedOption}
//           exclusions={exclusions}
//           setExclusions={setExclusions}
//         />
//       )}
//     </div>
//   );
// }
