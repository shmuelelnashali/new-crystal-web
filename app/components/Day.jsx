import React, { useState } from "react";

export default function Day (props)   {
  const {setMessinDay, messinDay , day, month, year } = props;
  const today = new Date();
  const date = new Date(year, month, day);

  const dateComparisonResult = ()=>{ 
    today.setHours(0, 0, 0, 0 ,0);
    date.setHours(0, 0, 0, 0 ,0);
    return today.getTime() === date.getTime()
  };

  const dayOfWeek = date.getDay();
  const tasks = () => {
    if(day!==null){
  const blabla={day:day, month:month+1, year:year,dayOfWeek:dayOfWeek}

    setMessinDay(blabla)
    }
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(`data=${date}`);
    console.log(`יום בשבוע ${dayOfWeek}`);
    //לוודא למה זה לא מוגדר
  //  <Report day={day} month={month} year={year} dayOfWeek={dayOfWeek}/>
    //אני צריך לקחת מכאן את התאריך ולחפש אותו בדטה בייס ולהציג את תוכן המשימה
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
  const isActivReport = true
    return (
    <div className="w-full flex justify-center items-center">
      <li
        onClick={tasks}
        // className={`w-11 h-11 rounded-xl flex items-center justify-center ${bolian?"bg-[#ffffff]/20":''} ${
        className={`w-11 h-11  rounded-xl flex items-center justify-center ${
          dateComparisonResult() ? "bg-[#cccccc]/50 w-9 h-9" :" "
        } ${day !== null ? "hover:bg-[#bbbbbb]/20" : ""}`} style={{ flexDirection: "column" }} 
      >
        {day}
      {/*  אם קיים משימה ביום הזה אז הדיב יפעל ואיז אקטיב רפורט יהיה טרו*/}
  <div className={` w-1 h-1 rounded-full ${day !== null && isActivReport ? handleColor() : ""} `}></div>
  {/* <div className={` w-1 h-1 rounded-full ${day !== null && isActivReport ? "bg-[#E8CA61]/20" : ""} `}></div> */}
      </li>
    </div>
  );
};





//זה לפני שינויים

// import React, { useState } from "react";

// const compareDates = (todayNow, date) => {
//   todayNow = todayNow.setHours(0, 0, 0, 0);
//   date = date.setHours(0, 0, 0, 0);
//   return todayNow === date;
// };
// const Day = (props) => {
//   const {setMessinDay,messinDay, day, month, year } = props;
//   const today = new Date();
//   const date = new Date(year, month, day);
//   const dateComparisonResult = compareDates(today, date);
//   const dayOfWeek = date.getDay();
//   // const [bolian, setBolian] = useState(false);
//   const tasks = () => {
//     // console.log(bolian);
//     // setBolian(true);
//     if(day!==null){
//     const blabla={day:day, month:month+1, year:year,dayOfWeek:dayOfWeek}
//     setMessinDay(blabla)
//     }
//     console.log(day);
//     console.log(month);
//     console.log(year);
//     console.log(`data=${date}`);
//     console.log(`יום בשבוע ${dayOfWeek}`);
//     //לוודא למה זה לא מוגדר
//   //  <Report day={day} month={month} year={year} dayOfWeek={dayOfWeek}/>
//     //אני צריך לקחת מכאן את התאריך ולחפש אותו בדטה בייס ולהציג את תוכן המשימה
//   };
//   const handleColor= ()=>{
//     const colors = [
//       "bg-[#E12C83]",
//       "bg-[#85D188]",
//       "bg-[#6190E8]",
//       "bg-[#6461E8]",
//       "bg-[#E8CA61]",
//     ];
//     const random = Math.floor(Math.random()*colors.length)
//     return colors[random]
//   }
//   const isActivReport = true
//     return (
//     <div className="w-full flex justify-center items-center">
//       <li
//         onClick={tasks}
//         // className={`w-11 h-11 rounded-xl flex items-center justify-center ${bolian?"bg-[#ffffff]/20":''} ${
//         className={`w-11 h-11  rounded-xl flex items-center justify-center ${
//           dateComparisonResult ? "bg-[#cccccc]/50 w-9 h-9" : ""
//         } ${day !== null ? "hover:bg-[#bbbbbb]/20" : ""}`} style={{ flexDirection: "column" }} 
//       >
//         {day}
//       {/*  אם קיים משימה ביום הזה אז הדיב יפעל ואיז אקטיב רפורט יהיה טרו*/}
//   <div className={` w-1 h-1 rounded-full ${day !== null && isActivReport ? handleColor() : ""} `}></div>
//   {/* <div className={` w-1 h-1 rounded-full ${day !== null && isActivReport ? "bg-[#E8CA61]/20" : ""} `}></div> */}
//       </li>
//     </div>
//   );
// };

// export default Day;