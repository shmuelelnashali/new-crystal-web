import { useEffect, useState } from "react";
import Image from "next/image";
import { EntriesSection } from "./EntriesSection";
import PopupForMissions from "./PopupForMissions";
import ToggleCode from "./ToggleCode";
import { timeStructure } from "@/app/util/dateFormat";
import axios from "@/app/lib/axios";
import toast from "react-hot-toast";

export default function PresenceTableContent({
  data,
  setData,
  editingRowIndex,
  setEditingRowIndex,
  popUpForMission,
  setPopUpForMission,
  nameAndDateForRow,
  setNameAndDateForRow,
  selectedDate,
  setSelectedDate,
}) {
  const [formData, setFormData] = useState({});
  // const [newEntries, setNewEntries] = useState({});
  // const [editingRowIndex, setEditingRowIndex] = useState(null);
  // const [popUpForMission, setPopUpForMission] = useState(false);
  // const [attendanceToUpdate, setAttendanceToUpdate] = useState([]);

  // DB-הנוכחות שקיימת ב
  const [attendanceToShow, setAttendanceToShow] = useState([]);
  // המידע של העובד אם אין נוכחות
  const [alwaysDetail, setAlwaysDetail] = useState([]);
  // DB-עושה טבלה אם אין נוכחות ב
  const [realFakeData, setRealFakeData] = useState([]);
  // מכיל את הערכים שבתוך האינפוטים שמשתנים
  const [rawInputs, setRawInputs] = useState({});
  // שינוי השעות והקוד פעילות בנוכחות
  const [changes, setChanges] = useState({});
  // השורה שנלחצה
  const [activeEditRow, setActiveEditRow] = useState(null);
  // הקוד פעילות שנלחץ בשורה
  const [activeEntryIndex, setActiveEntryIndex] = useState(null);
  // מיקום המשימה שלחצתי כדי לערוך
  const [getIndex, setGetIndex] = useState(null);
  // לפתוח את המשימות
  const [isOpen, setIsOpen] = useState(false);
  // האם יש משימה היום או לא
  const [isMissions, setIsMissions] = useState(false);

  // מביא את הנוכחות שקיימת
  const myData = (data) => {
    const show = data.map((item) => item.attendanceToShow);
    setAttendanceToShow(show);
    // אם אין נוכחות
    if (data.length > 0) {
      setAlwaysDetail(data[0].alwaysDetail);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      myData(data);
    }
  }, [data]);

  // מוסיף כניסה ויציאה
  const addEntrancesExitsEntry = (rowIndex) => {
    const updatedData = [...realFakeData];

    const currentEntries = updatedData[rowIndex].entrances_exits;

    if (updatedData[rowIndex].date_with_no_attendance) return;
    if (currentEntries.length < 3) {
      const newEntryIndex = currentEntries.length;
      const newEntry = {
        activity_code: "-",
        entrance: "00:00",
        exit: "00:00",
      };

      updatedData[rowIndex].entrances_exits.push(newEntry);
      setRealFakeData(updatedData);
      setActiveEntryIndex(newEntryIndex);
    }
  };

  // מוחק כניסה ויציאה
  const deleteLastEntry = (rowIndex, entryIndex) => {
    const updatedData = [...realFakeData];
    const entries = updatedData[rowIndex].entrances_exits;

    entries.splice(entryIndex, 1);

    setRealFakeData(updatedData);
  };

  const handleChange = (rowIndex, fieldName, value, entryIndex) => {
    console.log(value, "value");

    const updatedData = [...realFakeData];
    if (fieldName === "activity_code") {
      const targetIndex =
        typeof entryIndex === "number" ? entryIndex : activeEntryIndex || 0;
      updatedData[rowIndex].entrances_exits[targetIndex].activity_code = {
        code: value.code,
        name: value.name,
      };
    } else {
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [fieldName]: value,
      };
    }
    console.log(updatedData, "update");

    setRealFakeData(updatedData);
    setChanges({
      // (prev) => ({
      // ...prev,
      // [rowIndex]: {
      // ...prev[rowIndex],

      employee_id: updatedData[rowIndex].employee_id,
      attendance_index: getIndex,
      entrances_exits: updatedData[rowIndex].entrances_exits.map((key) => ({
        activity_code: key.activity_code ? key.activity_code?.code : "-",
        entrance: key.entrance ? key.entrance : "-",
        exit: key.exit ? key.exit : "-",
      })),
      date_time:
        updatedData[rowIndex].date_time ||
        updatedData[rowIndex].date_with_no_attendance,
      waiting_time: Number(updatedData[rowIndex].waiting_time),
      // },
    });
    setIsOpen(false);
  };
  // console.log(changes, "changes");

  // שינוי קוד פעילות
  // const handleCodeSelect = (rowIndex, entryIndex, codeData) => {
  //   console.log(codeData,"code");

  //   const updatedData = [...realFakeData];
  //   if (updatedData[rowIndex]?.entrances_exits?.[entryIndex]) {
  //     updatedData[rowIndex].entrances_exits[entryIndex].activity_code.name = codeData.name

  //     setChanges((prev) => ({
  //       ...prev,
  //       // [rowIndex]: {
  //       ...prev[rowIndex],
  //       employee_id: updatedData[rowIndex].employee_id,
  //       attendance_index: getIndex,
  //       entrances_exits: updatedData[rowIndex].entrances_exits.map(
  //         (key, i) => ({
  //           activity_code: i === entryIndex ? key.activity_code?.code : 0, // Use the code value for database
  //           entrance: key.entrance ? key.entrance : "-",
  //           exit: key.exit ? key.exit : "-",
  //         })
  //       ),
  //       date_time:
  //         updatedData[rowIndex].date_time ||
  //         updatedData[rowIndex].date_with_no_attendance,
  //       waiting_time: Number(updatedData[rowIndex].waiting_time),
  //       // },
  //     }));
  //   }

  //   setRealFakeData(updatedData);
  //   setIsOpen(false);
  // };

  // להביא את המשימות לפי נוכחות יומית
  // const fetchMissions = async () => {
  //   // console.log(nameAndDateForRow.id);

  //   if (!nameAndDateForRow?.id) {
  //     return;
  //   }
  //   try {
  //     const response = await axios.get(
  //       `/attendanceMissions/getByAttendaceId/${nameAndDateForRow?.id}`
  //     );
  //     const data = response.data;
  //     console.log(data, "data");

  //     setIsMissions(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMissions();
  // }, []);

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
        const dayFormat = padZero(i + 1);
        const monthFormat = padZero(month + 1);
        const formattedDate = `${dayFormat}/${monthFormat}/${year}`;
        return formattedDate;
      }),
    ];

    return allDates;
  };

  // מביא את הימים
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  // בודק מתי יש נוכחות
  const compareDate = (day) => {
    const date = `${year}-${padZero(month + 1)}-${padZero(day)}`;
    const attendance = attendanceToShow.find((data) => data.date_time === date);
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
        const [days, months, years] = day.split("/");
        const dates = `${years}-${months}-${days}`;
        // אם אין נוכחות
        return {
          date_with_no_attendance: dates,
          employee_id: alwaysDetail.employee_id,
          employee_number: alwaysDetail.employee_number,
          full_name: alwaysDetail.full_name,
          entrances_exits: [
            {
              activity_code: 0,
              entrance: alwaysDetail.entrance,
              exit: alwaysDetail.exit,
            },
          ],
          contract_code: alwaysDetail.contract_code,
          total_attendance_time: 0,
          attendance_for_pay: 0,
          waiting_time: 0,
          extra_hours: 0,
          absence_to_pay: 0,
          employee_is_active: alwaysDetail.employee_is_active,
        };
      });
  };

  useEffect(() => {
    const attendanceArray = buildAttendanceArray(year, month);
    setRealFakeData(attendanceArray);
  }, [year, month, attendanceToShow, alwaysDetail]);

  // עןשה אינפוטים על השורה ועידכון
  const handleRowClick = async (rowIndex, e) => {
    e.stopPropagation();

    if (changes && changes.attendance_index === getIndex) {
      const { attendance_index, ...attendance } = changes;

      // Preserve the original activity codes or use the new ones
      // const updatedAttendance = {
      //   ...attendance,
      //   entrances_exits: attendance.entrances_exits.map((entry, index) => ({
      //     ...entry,
      //     activity_code:
      //       realFakeData[rowIndex].entrances_exits[index].activity_code_value ||
      //       (typeof entry.activity_code === "string"
      //         ? realFakeData[rowIndex].entrances_exits[index].activity_code
      //         : entry.activity_code),
      //   })),
      // };

      try {
        console.log(attendance, "attendance");

        const response = await axios.post(`/attendances`, attendance);
        toast.success(response.data.message);
        setChanges(null);
      } catch (error) {
        if (error.response?.data) {
          console.log(error.response.data);

          let errorDetails = "";

          if (
            error.response.data.errors &&
            typeof error.response.data.errors === "object"
          ) {
            Object.entries(error.response.data.errors).forEach(
              ([key, messages]) => {
                if (Array.isArray(messages)) {
                  errorDetails += messages.join("\n") + "\n";
                } else if (typeof messages === "object") {
                  // Handle nested error objects (like entrances_exits.0.exit)
                  Object.entries(messages).forEach(([subKey, subMessages]) => {
                    if (Array.isArray(subMessages)) {
                      errorDetails += subMessages.join("\n") + "\n";
                    }
                  });
                }
              }
            );
          }
          toast.error(`שגיאה בעידכון המשימה\n${errorDetails.trim()}`);
          return;
        }
        console.error(
          "שגיאה בעידכון המשימה",
          error.response?.data || error.message
        );

        return;
      }
    }

    setActiveEditRow(activeEditRow === rowIndex ? null : rowIndex);
  };

  return (
    <div className="h-full bg-[#F7F9FD]  dirLtr overflow-y-auto">
      {realFakeData.map((rowValue, rowIndex) => (
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
                  className="flex gap-1 pr-7"
                  key={`date-${rowIndex}-${keyForAll}`}
                >
                  <div className="bg-blue_color text-white text-sm rounded-full flex items-center justify-center  w-5 h-5">
                    א'{" "}
                  </div>
                  {keyForAll === "date_time" ||
                  keyForAll === "date_with_no_attendance"
                    ? valueForAll
                        .split("-")
                        .reverse()
                        .slice(0, 2)
                        .map(padZero)
                        .join("/")
                    : "-"}
                </div>
              ) : // אם זה כניסה ויציאה
              keyForAll === "entrances_exits" ? (
                <div key={`entries-${rowIndex}`} className="col-span-3">
                  <EntriesSection
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
                    setActiveEntryIndex={setActiveEntryIndex}
                  />
                  {isOpen && activeEditRow == rowIndex && (
                    <ToggleCode
                      isOpen={isOpen}
                      onClose={() => setIsOpen(false)}
                      // onChange={(code) =>
                      //   handleCodeSelect(rowIndex, activeEntryIndex, code)

                      // }
                      handleChange={handleChange}
                      rowIndex={rowIndex}
                    />
                  )}
                </div>
              ) : // שעות המתנה
              keyForAll === "waiting_time" ? (
                <div
                  onClick={(e) => {
                    // setActiveEditRow(rowIndex);
                    handleRowClick(rowIndex, e);
                  }}
                  key={`waiting-${rowIndex}`}
                  className="h-full flex items-center justify-center truncate"
                >
                  {activeEditRow === rowIndex ? (
                    <input
                    className="rounded-full outline-none border border-blue_color w-[70%] text-center flex items-center justify-center"
                    type="text"
                    value={valueForAll}
                    onChange={(e) => {
                      let inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  
                      if (inputValue.length > 2) {
                        inputValue = inputValue.slice(0, -2) + "." + inputValue.slice(-2); // Insert "." before last two digits
                      }
                      if(inputValue.length > 5){
                        return
                      }
                      if (/^\d*(\.\d{0,2})?$/.test(inputValue)) {
                        handleChange(rowIndex, keyForAll, inputValue);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  
                  ) : (
                    <div className="truncate">
                      {valueForAll === 0 ? "-" : valueForAll}
                    </div>
                  )}
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
