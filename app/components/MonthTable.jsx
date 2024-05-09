import React from 'react'
import Day from './Day'

export default function MonthTable({monthsAndDays,daysInHebrew, messinDay2,messinDay ,selectedDate ,setMessinDay,setMessinDay2}) {
  return (
    <div className="dirLtr px-5 pb-4 max-h-[85vh]  ">
    <div className=" dirRtl grid grid-cols-4">
      {/* Iterate over each month and display days */}
      {monthsAndDays.map(({ month, daysArray }, index) => (
        <div className={`rounded-lg bg-[#F4F7FC] my-5 ${ messinDay2 ?"mx-4":"mx-6"} p-3 relative`} key={month}>
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
            {daysArray.map((day, dayIndex) => (
              
              <Day
                key={day !== null ? day : null - `${dayIndex}`}
                day={day}
                month={index}
                year={selectedDate.getFullYear()}
                messinDay={messinDay}
                setMessinDay={setMessinDay}
                setMessinDay2={setMessinDay2}
                messinDay2={messinDay2}
                // chck={chck}
                // setChck={setChck}
                className=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
