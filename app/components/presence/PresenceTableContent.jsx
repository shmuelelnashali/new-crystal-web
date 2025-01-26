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

  // מכיל את הערכים שבתוך האינפוטים שמשתנים
  const [rawInputs, setRawInputs] = useState({});

  // קוד פעילות כניסה ויציאה חדשים
  // const [newEntries, setNewEntries] = useState({});
  // const [editingRowIndex, setEditingRowIndex] = useState(null);

  // const [updateMode, setUpdateMode] = useState(false);

  // const [popUpForMission, setPopUpForMission] = useState(false);
  // השורה שנלחצה
  const [activeEditRow, setActiveEditRow] = useState(null);
  // הקוד פעילות שנלחץ בשורה
  const [activeEntryIndex, setActiveEntryIndex] = useState(null);

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

  // האינפוט של השעות
  const handleTimeChange = (entryId, field, e) => {
    let inputValue = e.target.value;
    //HH/MM/SS פונקצייה שעושה מבנה של
    const formattedValue = timeStructure(inputValue);

    if (formattedValue !== null) {
      handleChange(entryId, field, formattedValue);
    }
  };

  // שינוי קוד פעילות
  const handleCodeSelect = (rowIndex, entryIndex, code) => {
    const updatedData = [...fake];
    if (updatedData[rowIndex]?.entrances_exits?.[entryIndex]) {
      updatedData[rowIndex].entrances_exits[entryIndex].activity_code = code;
    }
    setFake(updatedData);
    setIsOpen(false);
  };

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

  // בודק מתי יש נוכחות
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
        if (attendanceData) {
          return attendanceData;
        }
        
        // אם אין נוכחות 
        return {
          date_with_no_attendance: day,
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
      });
  };

  useEffect(() => {
    const attendanceArray = buildAttendanceArray(year, month);
    // console.log(attendanceArray);
    setFake(attendanceArray);
  }, [year, month]);

  const handleRowClick = (rowIndex) => {
    setActiveEditRow(rowIndex);
  };

  // console.log(fake, "fake");

  return (
    <div className="h-full bg-[#F7F9FD]  dirLtr overflow-y-auto">
      {fake.map((rowValue, rowIndex) => (
        <div
          // onClick={() => handleRowClick(rowIndex)}
          key={`row-${rowIndex}-${
            rowValue.date_time || rowValue.date_with_no_attendance
          }`}
          className="flex-col  presentTable dirRtl justify-center items-center hover:bg-[#e1e8f3] hover:rounded-lg border-b border-b-[#A7BFE8]/30 transition-transform duration-200 ease-in-out"
        >
          {Object.entries(rowValue).map(
            ([keyForAll, valueForAll]) =>
              keyForAll !== "employee_id" &&
              keyForAll !== "id" &&
              (keyForAll === "date_with_no_attendance" ||
              keyForAll === "date_time" ? (
                <div
                  className="flex gap-1"
                  key={`date-${rowIndex}-${keyForAll}`}
                >
                  <div className="bg-blue_color text-white text-sm rounded-full flex items-center justify-center  w-5 h-5">
                    א'{" "}
                  </div>
                  {keyForAll === "date_time"
                    ? valueForAll
                        .split("-")
                        .reverse()
                        .slice(0, 2)
                        .map(padZero)
                        .join("/")
                    : valueForAll.split("/").slice(0, 2).join("/")}
                </div>
              ) : // אם זה כניסה ויציאה
              keyForAll === "entrances_exits" ? (
                <EntriesSection
                  key={`entries-${rowIndex}`}
                  handleRowClick={handleRowClick}
                  entries={valueForAll}
                  rowIndex={rowIndex}
                  editingRowIndex={activeEditRow}
                  rawInputs={rawInputs}
                  setRawInputs={setRawInputs}
                  onAddEntry={addEntrancesExitsEntry}
                  onDeleteEntry={deleteLastEntry}
                  handleChange={handleChange}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  fake={fake}
                  setFake={setFake}
                  setActiveEntryIndex={setActiveEntryIndex}
                />
              ) : keyForAll === "waiting_time" && activeEditRow == rowIndex ? (
                <div
                  key={`waiting-${rowIndex}`}
                  className="h-full  flex items-center justify-center truncate"
                >
                  <input
                    className="rounded-full outline-none border border-blue_color w-[70%] text-center   flex items-center justify-center"
                    type="text"
                    value={
                      typeof valueForAll === "string" &&
                      valueForAll.includes(":")
                        ? valueForAll.split(":").slice(0, 2).join(":")
                        : valueForAll
                    }
                    onChange={(e) => handleTimeChange(rowIndex, keyForAll, e)}
                  />
                </div>
              ) : (
                // כל השאר
                <div
                  className="py-2 w-full flex items-center justify-center truncate"
                  key={`${keyForAll}-${rowIndex}`}
                >
                  <div className="truncate">
                    {typeof valueForAll === "string" &&
                    valueForAll.includes(":")
                      ? valueForAll.split(":").slice(0, 2).join(":")
                      : valueForAll === 0
                      ? "-"
                      : valueForAll}
                  </div>
                </div>
              ))
          )}
          {isOpen && activeEditRow == rowIndex && (
            <ToggleCode
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onChange={(code) =>
                handleCodeSelect(rowIndex, activeEntryIndex, code)
              }
              // setRawInputs={setRawInputs}
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
            >
              צפה במשימות
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
