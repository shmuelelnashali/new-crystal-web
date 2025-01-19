import { useEffect, useState } from "react";
import Image from "next/image";
import { EntriesSection } from "./EntriesSection";
import PopupForMissions from "./PopupForMissions";
import ToggleCode from "./ToggleCode";
import { timeStructure } from "@/app/util/dateFormat";

export default function PresenceTableContent({
  data,
  setData,
  editingRowIndex,
  setEditingRowIndex,
  popUpForMission,
  setPopUpForMission,
  nameAndDateForRow,
  setNameAndDateForRow,
}) {
  const [fake, setFake] = useState([]);
  // console.log(data, "data");

  // קוד פעילות כניסה ויציאה חדשים
  // const [newEntries, setNewEntries] = useState({});
  // const [editingRowIndex, setEditingRowIndex] = useState(null);

  // const [updateMode, setUpdateMode] = useState(false);

  // const [popUpForMission, setPopUpForMission] = useState(false);
  const [activeEditRow, setActiveEditRow] = useState(null);
  // const [formData, setFormData] = useState({});
  // const [row, setRow] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // הימים בחודש
  const [selectedDate, setSelectedDate] = useState(new Date());

  // מוסיף כניסה ויציאה
  const addEntrancesExitsEntry = (rowIndex) => {
    const updatedData = [...fake];

    const currentEntries = updatedData[rowIndex].entrances_exits;

    if (updatedData[rowIndex].date_with_no_attendance) return;
    if (currentEntries.length < 3) {
      const newEntry = {
        activity_code: "-",
        entrance: "00:00",
        exit: "00:00",
      };

      updatedData[rowIndex].entrances_exits.push(newEntry);
      setFake(updatedData);
    }
  };
  // מוחק כניסה ויציאה
  const deleteLastEntry = (rowIndex, entryIndex) => {
    const updatedData = [...fake];
    const entries = updatedData[rowIndex].entrances_exits;

    entries.splice(entryIndex, 1);

    setFake(updatedData);
  };

  const handleChange = (rowIndex, fieldName, value) => {
    const updatedData = [...fake];
    updatedData[rowIndex] = {
      ...updatedData[rowIndex],
      [fieldName]: value,
    };
    setFake(updatedData);
  };

  const handleTimeChange = (entryId, field, e) => {
    let inputValue = e.target.value;
    //HH/MM/SS פונקצייה שעושה מבנה של
    const formattedValue = timeStructure(inputValue);

    if (formattedValue !== null) {
      handleChange(entryId, field, formattedValue);
    }
  };

  // const handleEntryChange = (entryIndex, entryKey, value, rowIndex) => {
  //   // console.log(entryIndex, entryKey, value,"entryIndex, entryKey, value");
    
  //   const updatedEntries = fake[rowIndex];
  //   updatedEntries[entryIndex] = {
  //     ...updatedEntries[entryIndex],
  //     [entryKey]: value,
  //   };

  //   // שולח את המידע החדש
  //   handleChange(rowIndex, "entrances_exits", updatedEntries);
  //   // console.log(updatedEntries,"after ");
  // };

  // בלחיצה על הכפתור נפתח משימות לאותו יום
  const handleButtonClick = (e, valueForTheRow) => {
    e.stopPropagation();
    setNameAndDateForRow(valueForTheRow);    
    setPopUpForMission(true);
  };


  // להוסיף 0 אם אין מספר לתאריך
  const padZero = (num) => String(num).padStart(2, "0");

  // לקבל את הימים בחודש
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  // עושה את הימים בחודש
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayEmptySlots = Array.from(
      { length: firstDayOfMonth },
      () => null
    );
    const allDates = [
      ...firstDayEmptySlots,
      ...Array.from({ length: daysInMonth }, (_, i) => {
        const day = padZero(i + 1);
        const formattedDate = `${day}/${padZero(month + 1)}/${year}`;
        return formattedDate;
      }),
    ];

    return allDates;
  };

  // מביא את הימים
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const employeeData = [
    {
      id: 1,
      employee_id: 1,
      date_time: "2025-01-01",
      employee_number: 1111111,
      full_name: "רועי סחייק",
      entrances_exits: [
        {
          activity_code: 3,
          entrance: "09:00:00",
          exit: "15:00:00",
        },
      ],
      contract_code: 657,
      total_attendance_time: 1,
      attendance_for_pay: 0,
      waiting_time: 0,
      extra_hours: 0,
      absence_to_pay: 0,
      employee_is_active: 1,
    },
    {
      id: 2,
      employee_id: 1,
      date_time: "2025-01-02",
      employee_number: 1111111,
      full_name: "רועי סחייק",
      entrances_exits: [
        {
          activity_code: 3,
          entrance: "09:00:00",
          exit: "15:00:00",
        },
      ],
      contract_code: 657,
      total_attendance_time: 1,
      attendance_for_pay: 0,
      waiting_time: 0,
      extra_hours: 0,
      absence_to_pay: 0,
      employee_is_active: 1,
    },
    {
      id: 3,
      employee_id: 1,
      date_time: "2025-01-03",
      employee_number: 1111111,
      full_name: "רועי סחייק",
      entrances_exits: [
        {
          activity_code: 3,
          entrance: "09:00:00",
          exit: "15:00:00",
        },
      ],
      contract_code: 657,
      total_attendance_time: 1,
      attendance_for_pay: 0,
      waiting_time: 0,
      extra_hours: 0,
      absence_to_pay: 0,
      employee_is_active: 1,
    },
    {
      id: 4,
      employee_id: 1,
      date_time: "2025-01-04",
      employee_number: 1111111,
      full_name: "רועי סחייק",
      entrances_exits: [
        {
          activity_code: 3,
          entrance: "09:00:00",
          exit: "15:00:00",
        },
      ],
      contract_code: 657,
      total_attendance_time: 1,
      attendance_for_pay: 0,
      waiting_time: 0,
      extra_hours: 0,
      absence_to_pay: 0,
      employee_is_active: 1,
    },
    {
      id: 5,
      employee_id: 1,
      date_time: "2025-01-09",
      employee_number: 1111111,
      full_name: "רועי סחייק",
      entrances_exits: [
        {
          activity_code: 3,
          entrance: "09:00:00",
          exit: "15:00:00",
        },
      ],
      contract_code: 657,
      total_attendance_time: 1,
      attendance_for_pay: 0,
      waiting_time: 0,
      extra_hours: 0,
      absence_to_pay: 0,
      employee_is_active: 1,
    },
  ];
  //   const employeeData = data.filter((emp)=>emp.hiddenEmployeeData.id === 1)
  //   const employeeToShowData = employeeData.map((emp) => emp.employeeToShow);

  // console.log(employeeToShowData, "eee");

  const empl = {
    id: 1,
    employee_number: 1111111,
    full_name: "רועי סחייק",
    contract_code: 657,
    entrance: "00:00:00",
    exit: "00:00:00",
  };
  const a = {
    id: null,
    employee_id: empl.id,
    employee_number: empl.employee_number,
    full_name: empl.full_name,
    entrances_exits: [
      {
        activity_code: 3,
        entrance: empl.entrance.slice(0, 5),
        exit: empl.exit.slice(0, 5),
      },
    ],
    contract_code: empl.contract_code,
    total_attendance_time: 1,
    attendance_for_pay: 0,
    waiting_time: 0,
    extra_hours: 0,
    absence_to_pay: 0,
    employee_is_active: 1,
  };

  const compareDate = (day) => {
    const date = `${year}-${padZero(month + 1)}-${padZero(day)}`;
    const attendance = employeeData.find((data) => data.date_time === date);
    return attendance || null;
  };

  // בונה את טבלת כל הימים בחודש
  const buildAttendanceArray = (year, month) => {
    const days = generateDaysArray(year, month);
    return days
      .filter((day) => day !== null)
      .map((day, i) => {
        const attendanceData = compareDate(day.split("/")[0]);
        return attendanceData || { date_with_no_attendance: day, ...a };
      });
  };
  useEffect(() => {
    const attendanceArray = buildAttendanceArray(year, month);
    setFake(attendanceArray);
  }, [year,month]);

  const handleRowClick = (rowIndex) => {
    setActiveEditRow(rowIndex);
  };

  // console.log(fake, "fake");

  return (
    <div className="h-full bg-[#F7F9FD]  dirLtr overflow-y-auto">
      {fake.map((rowValue, rowIndex) => (
        <div
          // onClick={() => handleRowClick(rowIndex)}
          key={`row-${rowIndex}-${rowValue.date_time || rowValue.date_with_no_attendance}`}
          className="flex-col  presentTable dirRtl justify-center items-center hover:bg-[#e1e8f3] hover:rounded-lg border-b border-b-[#A7BFE8]/30 transition-transform duration-200 ease-in-out"
        >
          {Object.entries(rowValue).map(
            ([keyForAll, valueForAll]) =>
              keyForAll !== "employee_id" &&
              keyForAll !== "id" &&
              (keyForAll === "date_with_no_attendance" || keyForAll === "date_time" ? (
                <div className="flex gap-1" key={`date-${rowIndex}-${keyForAll}`}>
                  <div className="bg-blue_color text-white text-sm rounded-full flex items-center justify-center  w-5 h-5">
                    א'{" "}
                  </div>
                  {keyForAll === "date_time" ? 
                    valueForAll.split("-").reverse().slice(0, 2).map(padZero).join("/") :
                    valueForAll.split("/").slice(0, 2).join("/")
                  } 
                </div>
              ) : // אם זה כניסה ויציאה
              keyForAll === "entrances_exits" ? (
                <EntriesSection
                  key={`entries-${rowIndex}`}
                  handleRowClick={handleRowClick}
                  entries={valueForAll}
                  rowIndex={rowIndex}
                  editingRowIndex={activeEditRow}
                  // handleEntryChange={handleEntryChange}
                  onAddEntry={addEntrancesExitsEntry}
                  onDeleteEntry={deleteLastEntry}
                  handleChange={handleChange}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              ) : keyForAll === "waiting_time" && activeEditRow == rowIndex ? (
                <div
                key={`waiting-${rowIndex}`}
                  className="h-full  flex items-center justify-center truncate"
                >
                  <input
                    className="rounded-full outline-none border border-blue_color w-[70%] text-center   flex items-center justify-center"
                    type="text"
                    value={typeof valueForAll === "string" && valueForAll.includes(":")
                      ? valueForAll.split(":").slice(0, 2).join(":")
                      : valueForAll}
                    onChange={(e) =>
                      handleTimeChange(rowIndex, keyForAll, e)
                    }
                  />
                </div>
              ) : (
                // כל השאר
                <div
                  className="py-2 w-full flex items-center justify-center truncate"
                  key={`${keyForAll}-${rowIndex}`}
                >
                  <div className="truncate">
                    {typeof valueForAll === "string" && valueForAll.includes(":")
                      ? valueForAll.split(":").slice(0, 2).join(":")
                      : valueForAll === 0 ? "-" : valueForAll}
                  </div>
                </div>
              ))
          )}
          
          {isOpen && activeEditRow == rowIndex && (
            <ToggleCode
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onChange={(value) =>
                handleChange(entryIndex, entryKey, value)
              }
              // onSelect={handleCodeSelect}
            />
          )}
          <div className="pl-1">
            <button
              onClick={(e) => handleButtonClick(e, rowValue)}
              className={` px-3 rounded-full whitespace-nowrap ${
                rowValue.date_time != null
                  ? "bg-blue_color text-white cursor-pointer"
                  : "bg-gray-400 text-white cursor-pointer"
              }`}
              // disabled={rowValue.date_time === null}
            >
              צפה במשימות
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// import Image from "next/image";
// import React, { useState } from "react";
// import Entrances_exits from "./Entrances_exits";

// export default function PresenceTableContent({ data, setData }) {
//   const [updateMode, setUpdateMode] = useState(false);
//   const [editRowIndex, setEditRowIndex] = useState({});
//   const [attendanceData, setAttendanceData] = useState({});
//   const [addInput, setAddInput] = useState(false);

//   const [newEntries, setNewEntries] = useState({});
//   // console.log(data, "fff");

//   const handleInputChange = (key, value, rowIndex) => {
//     const updatedData = [...data];
//     updatedData[rowIndex].employeeToShow[key] = value;
//     setData(updatedData);
//   };

//   const addEntrancesExitsEntry = (rowIndex) => {
//     // setaddInput(true)
//     const updatedData = [...data];

//     const currentEntries = updatedData[rowIndex].employeeToShow.entrances_exits;
//     if ((newEntries[rowIndex] || 0) < 3) {
//       const newEntry = {
//         activity_code: "",
//         entrance: "00:00",
//         exit: "00:00",
//       };
//       currentEntries.push(newEntry);

//       setNewEntries((prev) => ({
//         ...prev,
//         [rowIndex]: (prev[rowIndex] || 0) + 1, // Count of newly added rows per index
//       }));
//     }
//   };

//   const deleteLastEntry = (rowIndex) => {
//     const updatedData = [...data];
//     const entries = updatedData[rowIndex].employeeToShow.entrances_exits;

//     if (entries.length > 0 && newEntries[rowIndex] > 0) {
//       entries.pop(); // Remove the last entry
//       setData(updatedData);

//       // Update newEntries state
//       setNewEntries((prev) => ({
//         ...prev,
//         [rowIndex]: prev[rowIndex] - 1, // Decrement count
//       }));
//     }
//   };

//   return (
//     <div>
//       {data.map((rowValue, rowIndex) => (
//         <div
//           key={rowIndex}
//           className={`flex-col justify-center items-center  hover:bg-[#e1e8f3] hover:rounded-lg border-b border-b-[#A7BFE8]/30 transition-transform duration-200 ease-in-out`}
//         >
//           <div key={rowIndex} className="presentTable truncate ">
//             {Object.entries(rowValue.employeeToShow).map(
//               ([keyForAll, valueForAll]) =>
//                 // אם זה קוד פעילות כניסה ויציאה או ש.המתנה
//                 keyForAll === "entrances_exits" ? (
//                   // <Entrances_exits val={val} key={index} />
//                   valueForAll.map((entry, entryIndex) => (
//                     <div
//                       key={entryIndex}
//                       className="group relative w-full col-span-3 flex truncate"
//                     >
//                       {Object.entries(entry).map(([entryKey, entryValue], index) => (
//                         <div
//                           className={`w-full flex items-center justify-center truncate ${
//                             entryKey !== "activity_code" && " bg-[#A7BFE826]/15"
//                           }`}
//                           key={entryKey}
//                         >
//                           {entryValue}
//                         </div>
//                       ))}
//                       {entryIndex === valueForAll.length - 1 &&
//                         (newEntries[rowIndex] || 0) < 3 && (
//                           <Image
//                             src="/plus.svg"
//                             width={20}
//                             height={20}
//                             alt="Add Entry"
//                             onClick={() => addEntrancesExitsEntry(rowIndex)}
//                             className="absolute top-2.5 left-2 hover:cursor-pointer hidden group-hover:block"
//                           />
//                         )}
//                       {entryIndex >=
//                         valueForAll.length - (newEntries[rowIndex] || 0) && (
//                         <Image
//                           src="/redX.svg"
//                           width={20}
//                           height={20}
//                           alt="Add Entry"
//                           onClick={() => deleteLastEntry(rowIndex)}
//                           className="absolute top-2.5 right-2 hover:cursor-pointer justify-center hidden group-hover:block"
//                         />
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   // אם זה כל השאר
//                   <div
//                     className="py-2 w-full text-center truncate"
//                     key={keyForAll}
//                   >
//                     {valueForAll}
//                   </div>
//                 )
//             )}
//             <div className="flex text-sm justify-center items-center">
//               <button className="bg-blue_color py-1 text-white px-3 rounded-full whitespace-nowrap ">
//                 צפה במשימות
//               </button>
//             </div>{" "}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

//       <div
//         key={key}
//         className={`flex w-full gap-2 truncate justify-center items-center  `}
//       >
//         {key === "date_time" && (
//           <div className="bg-blue_color text-white rounded-full flex items-center justify-center w-5 h-5">
//              א'
//           </div>
//         )}
//         {/* אם זה קוד פעילות כניסה ויציאה או ש.המתנה */}
//         {key === "entrances_exits"  ? (
//         <div className={` relative group  h-full col-span-3  flex`}>

//           {/* <Entrances_exits
//           handleInputChange={handleInputChange}
//             editRowIndex={editRowIndex}
//             setEditRowIndex={setEditRowIndex}
//             val={val}
//             index={index}
//           /> */}

//   <Image
//   src="/plus.svg"
//   width={22}
//   height={22}
//   alt="Add Entry"
//  className="absolute top-2 left-2 hidden group-hover:block"
//   // Add onClick logic if necessary
// />  </div>

//       ) : editRowIndex===index && key === "waiting_time"  ? (
//         <input
//           type="text"
//           value={val}
//           onChange={(e) =>
//             handleInputChange(key, e.target.value, index)
//           }
//           className="text-center border border-blue_color outline-none rounded-full w-full"
//         />
//       ) : (
//         <div className="py-2">{val}</div>
//       )}
//     </div>
