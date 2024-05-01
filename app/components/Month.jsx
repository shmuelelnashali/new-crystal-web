"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight} from "lucide-react";
import Day from "../components/Day";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [messinDay, setMessinDay] = useState({});
  console.log(selectedDate);
  // Function to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate array of days in month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayEmptySlots = Array.from({ length: firstDayOfMonth }, () => null);
    const daysArray = [
      ...firstDayEmptySlots,
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    
    return daysArray;
  };

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
  
  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];

  // Generate array of objects for each month containing days
  const monthsAndDays = monthsInHebrew.map((month, index) => {
    const daysArray = generateDaysArray(selectedDate.getFullYear(), index);
    return {
      month,
      daysArray
    };
  });
  const goToPreviousYear = () => {
    const previousYear = new Date(selectedDate.getFullYear() - 1, selectedDate.getMonth());
    setSelectedDate(previousYear);
  };

  const goToNextYear = () => {
    const nextYear = new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth());
    setSelectedDate(nextYear);
  };
  return (
    <div className="text-[#002A78] flex-1 h-[85%] w-full flex flex-col justify-between ">
    <div className="px-5 pb-4  overflow-y-auto ">
      <div className="flex justify-center ">
        <div className="border w-min p-[1px] rounded-full  text-white bg-[#002A78] flex justify-center items-center">
          <button onClick={goToPreviousYear}>
          <ArrowRight />
          </button>
              <p className="border  bg-white font-bold text-[#002A78]  rounded-full px-16">{selectedDate.getFullYear()}</p>
          <button onClick={goToNextYear}>
          <ArrowLeft />
          </button>
        </div>
      </div>
        <div className="grid grid-cols-4">
          {/* Iterate over each month and display days */}
          {monthsAndDays.map(({ month, daysArray},index) => (
            <div className="border bg-[#F4F7FC] m-4 relative" key={month}>
              {/* Move month header outside the border */}
              <h2 className="absolute inset-x-1/3 -top-4 w-1/3 border rounded-full text-center text-white bg-[#002A78]">
                {month}
              </h2>
              <ul className="grid grid-cols-7">
                {daysInHebrew.map((day) => (
                  <li
                    className="text-[#002A78] mt-3 text-opacity-60 flex justify-center items-center"
                    key={day}
                  >
                    {day}
                  </li>
                ))}
              </ul>
            <ul className="grid grid-cols-7    justify-center items-center w-full  text-center">
              {daysArray.map((day, dayIndex) => (
                <Day
                  key={day !== null ? day : null-`${dayIndex}`}
                  day={day}
                  month={index}
                  year={selectedDate.getFullYear()}
                  messinDay={messinDay}
                  setMessinDay={setMessinDay}
                  className=""
                />
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
