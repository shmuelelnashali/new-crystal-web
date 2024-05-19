'use client'
import React, { useState } from 'react'
import Day from './Day'
import Year from './Year';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';

export default function MonthTable({month, daysInMonth,indexMonth, selectedDate, missionDay ,setMissionDay}) {
    
  const daysInHebrew = [
    "ראשון",
   "שני", 
   "שלישי", 
   "רביעי", 
   "חמישי", 
   "שישי", 
   "שבת"
  ];
 
  return (
        <div className={`rounded-lg bg-[#F4F7FC] my-5 ${ missionDay ?"mx-4":"mx-6"} p-3 relative`} key={month}>
          {/* Move month header outside the border */}
          <div className="absolute inset-x-1/3 text-xl font-semibold -top-4 w-1/3 border rounded-full text-center text-white bg-[#002A78]">
            {month}
          </div>
          <ul className="grid grid-cols-7">
            {daysInHebrew.map((day) => (
              <li
                className=" py-1 text-[#002A78]/68 text-sm font-bold text-opacity-60 flex justify-center items-center"
                key={day}
              >
                {day}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-7 gap-1 pt-3 pb-5 h-full  font-medium text-xl text-[#002A78]/68 justify-center items-center w-full text-center">
            {daysInMonth.map((day, dayIndex) => (
              <div key={dayIndex}>
              <Day
              day={day}
              month={indexMonth}
              year={selectedDate}
              setMissionDay={setMissionDay}
              missionDay={missionDay}

            />
          </div>
            ))}
          </div>
        </div>
     
 
  )
}

