"use client";
import { useState } from "react";
import PopupDay from "../components/PopupDay";
import Exclusions from "../components/Exclusions";
import Year from "../components/Year";
import Search from "../components/Search";
import Image from "next/image";
import { clsx } from "clsx";

export default function Calendar() {
  
  const [missionDay, setMissionDay] = useState(); //selected day
  const [exclusions, setExclusions] = useState(false);//open popup החרגות 
  const [eventDate, setEventDate] = useState({})
  const daysInHebrew = [
        "ראשון",
       "שני", 
       "שלישי", 
       "רביעי", 
       "חמישי", 
       "שישי", 
       "שבת"
      ];

const activityDate ={
  event:"חג",
  beginning_date:"12-03-2024",
  end_date:"16-03-2024"
}

const chack=(date)=>{

  const  [day, month, year] = activityDate.beginning_date.split("-")
  const d = new Date(year, month-1, day)
  d.setHours(0, 0, 0, 0 ,0);
  date.setHours(0, 0, 0, 0 ,0);
  console.log("activity",d.getTime() === date.getTime());
   if(d.getTime() === date.getTime() )
    {return activityDate}

};

  const dateToObject =(string)=>{

    if(string===null || string.includes("null")){
      setMissionDay(null)
   return
    } 
    const  [year, month, day] = string.split("-")
    const date = new Date(year, month-1, day)
    const dayOfWeek = daysInHebrew [date.getDay()]
     const objectDate = {year:year, month:month.padStart(2, "0"),day:day.padStart(2, "0") ,dayOfWeek:dayOfWeek ,activity:chack(date)}

     setMissionDay(objectDate)
     setEventDate({  
      beginning_date :`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
      end_date:`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
      activityDay:dayOfWeek
    })
   
  }


  const imageAdd = (
    <Image src={"/exclusions_white.svg"} width={20} height={20} alt="" />
  );
  const openExclusion =()=>{
      setExclusions(!exclusions)
  }


  return (
    
    <div className="h-[89%]  overflow-y-hidden"> 
     
      <div className={`${missionDay ? "w-4/5 pr-3 transition-width" : " w-full px-[5%]"} `}> 
     <div className="h-11  flex justify-center ">
        <Search
        searchText={""}
        textBtn={"החרגות"}
          addNew={openExclusion}
          addImage={imageAdd}
          missionDay={missionDay}
          />
      </div>
     <Year
        missionDay={missionDay}
        setMissionDay={dateToObject}
        />


    {missionDay && 
    
      <PopupDay

        missionDay={missionDay}
        setMissionDay={dateToObject}
        setExclusions={setExclusions}
        eventDate={eventDate}
        setEventDate={setEventDate}
     />} 
      </div>
      
       
       {exclusions && (
        <Exclusions
          // selectedOption={selectedOption}
          // setSelectedOption={setSelectedOption}
          eventDate={eventDate}
          setEventDate={setEventDate}
         openExclusion={openExclusion}/>
      )}
    
    </div>
  );
}



    
   
//   );
// }
