"use client";
import { useState } from "react";
import React from 'react'
import MonthTable from "./MonthTable";
import FilterByYear from "./FilterByYear";

export default function Year({missionDay ,setMissionDay}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const monthsInHebrew = [
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר",
      ];
      
   
        // Function to get days in month
  const getDaysInMonth = (year, month) =>  new Date(year, month + 1, 0).getDate();

  // Function to generate array of days in month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayEmptySlots = Array.from(
      { length: firstDayOfMonth },
      () => null
    );
    const daysArray = [
      ...firstDayEmptySlots,
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    return daysArray;
  };
      const monthsAndDays = monthsInHebrew.map((month, index) => {
        const daysInMonth = generateDaysArray(selectedDate.getFullYear(), index);
        
        return {
          month,
          daysInMonth
        };
      });
     
  return (
    <div className="  text-[#002A78] flex-1 w-full flex flex-col justify-between ">
      <div className="h-11 p-2">
        <FilterByYear 
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}/>
        </div>

<div className="dirLtr px-5  max-h-[80vh] overflow-y-auto">
    <div className="dirRtl grid grid-cols-4 ">
      {/* Iterate over each month and display days */}
      {monthsAndDays.map(({ month, daysInMonth }, index) => (

        <MonthTable 
        key={index}
        missionDay={missionDay}
        setMissionDay={setMissionDay}
        month={month} 
        daysInMonth={daysInMonth} 
        indexMonth={index} 
        selectedDate={selectedDate.getFullYear()}/>
     
      ))}
    </div>
  </div>
    </div>
   
   
  
  )
}
