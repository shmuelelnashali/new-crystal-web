"use client";
import React, { useEffect, useRef, useState } from "react";
import Search from "../../components/ui/Search";
import axios from "@/app/lib/axios";
import PresenceTable from "@/app/components/presence/PresenceTable";
import {
  formatDate,
  formatDatePresence,
  formatDateToDay,
} from "@/app/util/dateFormat";
import Image from "next/image";
import SearchPopup from "@/app/components/presence/SearchPopup";
import PopupForMissions from "@/app/components/presence/PopupForMissions";
import PopupDelete from "@/app/components/PopupDelete";
import { Toaster } from "react-hot-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Page() {
  const [data, setData] = useState([]);
  const [employeesName, setEmployeesName] = useState([]);
  const [employeesFilter, setEmployeesFilter] = useState([]);
  const [searchPopup, setSearchPopup] = useState(false);
  // פופאפ למחיקת משימה
  const [popupDelete, setPopupDelete] = useState(false);
  // מחיקת משימה
  const [deleteMission, setDeleteMission] = useState(null);
  // השורה של הנוכחות
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  // הפופאפ של המשימות
  const [popUpForMission, setPopUpForMission] = useState(false);
  // המידע של
  const [nameAndDateForRow, setNameAndDateForRow] = useState({});
  // חיפוש נוכחות של עובד מסוים
  const [employeeAttendance, setEmployeeAttendance] = useState(null);

  // התאריכים של הנוכחות
  const [selectedDate, setSelectedDate] = useState(new Date());
  // לעבור לחודש הבא
  const goToNextMonth = () => {
    const nextYear = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1
    );
    setSelectedDate(nextYear);
  };
  // לחזור לחודש הקודם
  const goToPrevMonth = () => {
    const nextYear = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1
    );
    setSelectedDate(nextYear);
  };
  // מוסיף 0
  const padZero = (num) => String(num).padStart(2, "0");
  const formatInSearch = () => {
    return `${padZero(
      selectedDate.getMonth() + 1
    )}/${selectedDate.getFullYear()}`;
  };

  const formatData = (data) => {
    // console.log(data, "kkkk");

    const attendance = Array.isArray(data) ? data : [data];
    const attendanceArray = attendance
      .filter((active) => {
        return (
          active.employee_is_active === 1 &&
          active.employee_number === "1111111"
        );
        // employeeAttendance;
      })
      .map((employee) => ({
        attendanceToShow: {
          id: employee.id,
          employee_id: employee.employee_id,
          date_time: employee.date_time,
          employee_number: employee.employee_number,
          full_name: employee.full_name,
          entrances_exits: Array.isArray(employee.entrances_exits)
            ? employee.entrances_exits.map((key) => ({
                activity_code: key.activity_code ? key.activity_code : "-",
                entrance: key.entrance ? key.entrance : "-",
                exit: key.exit ? key.exit : "-",
              }))
            : [],
          contract_code: employee.contract_code,
          total_attendance_time: employee.total_attendance_time,
          attendance_for_pay: employee.attendance_for_pay,
          waiting_time: employee.waiting_time,
          extra_hours: employee.extra_hours,
          absence_to_pay: employee.absence_to_pay,
          employee_is_active:
            employee.employee_is_active == "1" ? "פעיל" : "לא פעיל",
        },
        searchAttendanceToShow: {
          full_name: employee.full_name,
        },
        alwaysDetail: {
          employee_id: employee.employee_id,
          employee_number: employee.employee_number,
          full_name: employee.full_name,
          contract_code: employee.contract_code,
          employee_is_active:
            employee.employee_is_active == "1" ? "פעיל" : "לא פעיל",
          entrance: "00:00:00",
          exit: "00:00:00",
        },
        hiddenAttendanceData: {
          employee_id: employee.employee_id,
          date_time: formatDate(employee.date_time),
          date_day: formatDateToDay(employee.date_time),
        },
      }));

    setData(attendanceArray);
    // console.log(attendanceArray, "arr");
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`/attendances`);
      const data = response.data;
      formatData(data);
    } catch (error) {
      console.error(error);
    }
  };
  // כשיש חיפוש על נוכחות של עובד מסוים
  useEffect(() => {
    // if(employeeAttendance){
    fetchData();
    // }
  }, [employeeAttendance]);
  // פורמט כדי להציג עובדים
  const formatEmployees = (data) => {
    const employees = Array.isArray(data) ? data : [data];
    const employeeArray = employees
      .filter((active) => active.is_active === 1)
      .map((employee) => ({
        employeeToShow: {
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          role: employee.role,
          section_name: employee.section_name,
        },
      }));
    // מחזיק את כל העובדים
    setEmployeesName(employeeArray);
    // מסנן את העובדים
    setEmployeesFilter(employeeArray);
  };
  // להביא את העובדים כדי לחפש עובד מסוים
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`/employees`);
      const data = response.data;
      formatEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  const deleteMissionById = async (mission) => {
    try {
      setDeleteMission(mission);
      setPopupDelete(true);
    } catch (error) {
      console.error("error delete mission: ", error);
    }
  };
  return (
    <>
      {popUpForMission && (
        <div className="border w-[24%]   flex  border-r-blue_color  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full  z-40">
          <PopupForMissions
            nameAndDateForRow={nameAndDateForRow}
            popUpForMission={popUpForMission}
            setPopUpForMission={setPopUpForMission}
            deleteMissionById={deleteMissionById}
          />
        </div>
      )}
      <div className="h-full  flex flex-col overflow-hidden">
        {/* סרגל החיפוש */}
        <div className="flex  w-full justify-center mx-4">
          <div className=" w-1/2 relative flex justify-center items-center ">
            <Search
              searchPopupAttendances={searchPopup}
              setSearchPopupAttendances={setSearchPopup}
              searchEmployees={employeesFilter}
              setEmployees={setEmployeesName}
              searchText={"חיפוש לפי מספר עובד/ שם עובד"}
              textBtn={formatInSearch()}
              leftArrow={<ArrowLeft size={20} />}
              rightArrow={<ArrowRight size={20} />}
              goToNextMonth={goToNextMonth}
              goToPrevMonth={goToPrevMonth}
            />
            {/* פופאפ החיפוש */}
            {searchPopup && (
              <SearchPopup
                data={employeesName}
                searchPopup={searchPopup}
                setSearchPopup={setSearchPopup}
                employeeAttendance={employeeAttendance}
                setEmployeeAttendance={setEmployeeAttendance}
              />
            )}
          </div>
        </div>
        <div className="overflow-y-auto dirLtr mt-5 ">
          {/* הטבלה */}
          <PresenceTable
            popUpForMission={popUpForMission}
            setPopUpForMission={setPopUpForMission}
            editingRowIndex={editingRowIndex}
            setEditingRowIndex={setEditingRowIndex}
            data={data}
            setData={setData}
            nameAndDateForRow={nameAndDateForRow}
            setNameAndDateForRow={setNameAndDateForRow}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        {popupDelete && (
          <PopupDelete
            popUpState={popupDelete}
            showPopup={setPopupDelete}
            objectToDelete={deleteMission}
            nameAndDateForRow={nameAndDateForRow}
            headerText={`מחיקת משימה`}
            messageText={"האם אתה בטוח שאתה רוצה למחוק את משימה"}
            btnText={"מחק"}
            urlPage={`/attendanceMissions`}
          />
        )}
      </div>
      <Toaster position="top-center" />
    </>
  );
}
