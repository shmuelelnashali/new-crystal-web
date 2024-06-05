"use client";
import { useState } from "react";
import PopupDay from "../components/PopupDay";
import Exclusions from "../components/Exclusions";
import Year from "../components/Year";
import Search from "../components/Search";
import Image from "next/image";

export default function Calendar() {
  
  const [missionDay, setMissionDay] = useState(); //selected day
  const [exclusions, setExclusions] = useState(false);//open popup החרגות 

  const daysInHebrew = [
        "ראשון",
       "שני", 
       "שלישי", 
       "רביעי", 
       "חמישי", 
       "שישי", 
       "שבת"
      ];

const mission ={
  activity:"חג",
  start:"12-03-2024",
  end:"16-03-2024"
}
const chack=(date)=>{
  const  [day, month, year] = mission.start.split("-")
  const d = new Date(year, month-1, day)
  console.log(d);
  console.log(date);
  d.setHours(0, 0, 0, 0 ,0);
  date.setHours(0, 0, 0, 0 ,0);console.log(d.getTime() === date.getTime());
   if(d.getTime() === date.getTime() )
    
    {return mission}

};



  const dateToObject =(string)=>{
    if(string===null || string.includes("null")){
      setMissionDay(null)
   return
    } 
    const  [year, month, day] = string.split("-")
    const date = new Date(year, month-1, day)
    const miss=chack(date)
    const dayOfWeek = daysInHebrew [date.getDay()]
     const objectDate = {year:year, month:month.padStart(2, "0"),day:day.padStart(2, "0") ,dayOfWeek:dayOfWeek ,activity:miss}
     setMissionDay(objectDate)
     console.log (objectDate)
     
  }
  const imageAdd = (
    <Image src={"/exclusions.svg"} width={20} height={20} alt="plus" />
  );


  return (
    
    <div className="h-[90vh] pb-4 overflow-x-visible"> 
     <div className="h-11  flex justify-center ">
        <Search
        searchText={""}
        textBtn={"החרגות"}
          // addNew={handleAddingNewRow}
          // addImage={imageAdd}
          />
      </div>
      <div className={`${missionDay ? "w-4/5" : "w-full px-[5%]"} `}> 
     
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
