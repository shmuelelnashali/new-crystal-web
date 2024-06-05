

export default function Day ({setMissionDay ,missionDay ,day, month, year  })  {
 
  const today = new Date();
  const date = new Date(year, month, day);
  

const dateComparisonResult = ()=>{ 
  today.setHours(0, 0, 0, 0 ,0);
  date.setHours(0, 0, 0, 0 ,0);
  return today.getTime() === date.getTime() && day !== null 
};
const selectedDate = ()=>{ 
  if(missionDay){
    
  const {year, month, day } = missionDay
  const selectedDay = new Date(year, month-1, day) 
  selectedDay.setHours(0, 0, 0, 0 ,0);
  date.setHours(0, 0, 0, 0 ,0);
  return date.getTime() === selectedDay.getTime() }
};


  

  const handleColor= ()=>{
    const colors = [
      "bg-[#E12C83]",
      "bg-[#85D188]",
      "bg-[#6190E8]",
      "bg-[#6461E8]",
      "bg-[#E8CA61]",
    ];


    const random = Math.floor(Math.random()*colors.length)
    return colors[random]
  }

  const isActivReport =  dateComparisonResult()


  return (
    
      <div
        onClick={()=>{  setMissionDay(`${year}-${month+1}-${day}`)}}
          className={`h-full w-full rounded-xl flex items-center flex-col justify-center
          ${
            dateComparisonResult() || selectedDate()  ?  "bg-[#cccccc]/50 w-9 h-9" :" "
        } ${day !== null ? "hover:bg-[#bbbbbb]/20" : ""}`}  
      >
        {day}
      {/*  אם קיים משימה ביום הזה אז הדיב יפעל ואיז אקטיב רפורט יהיה טרו*/}
  <div className={` w-1 h-1 rounded-full  flex  ${day !== null && isActivReport && missionDay!=null ? handleColor() : "e"} `}>

  </div>
      </div>
   
  );
};












