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

// const arr = {
//   date_time: "1978-07-28 ",
//   employee_number: "6126811",
//   fullName: "Leo Sauer",
//   entrances_exits: [
//     {
//       activity_code: 1,
//       entrance: "01:30",
//       exit: "10:30",
//     },
//     {
//       activity_code: 1,
//       entrance: "11:30",
//       exit: "13:00",
//     },
//     {
//       activity_code: 1,
//       entrance: "14:00",
//       exit: "23:00",
//     },
//   ],
//   contract_id: 3,
//   attendance_for_pay: 18.5,
//   waiting_time: 1.69,
//   extra_hours: 0.66,
//   total_attendance_time: "19:30",

//   employee_isActive: 0,
//   event: "Sunday",
// };

export default function Page() {
  const [data, setData] = useState([]);
  const [employeesName, setEmployeesName] = useState([]);
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

  const formatData = (data) => {
    console.log(data, "kkkk");

    const employees = Array.isArray(data) ? data : [data];
    const employeeArray = employees
      .filter((active) => active.employee_is_active === 1)
      .map((employee) => ({
        employeeToShow: {
          date_time: formatDatePresence(employee.date_time),
          employee_number: employee.employee_number,
          full_name: employee.full_name,
          entrances_exits: Array.isArray(employee.entrances_exits)
            ? employee.entrances_exits.map((key) => ({
                activity_code:
                  Array.isArray(key.activity_code) &&
                  key.activity_code.length > 0
                    ? key.activity_code[0].code && key.activity_code[0].name
                    : "",
                entrance: key.entrance
                  ? key.entrance.split(":").slice(0, 2).join(":")
                  : "-",
                exit: key.exit
                  ? key.exit.split(":").slice(0, 2).join(":")
                  : "-",
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
        searchEmployee: {
          full_name: employee.full_name,
        },
        hiddenEmployeeData: {
          id: employee.employee_id,
          date_time: formatDate(employee.date_time),
          date_day: formatDateToDay(employee.date_time),
        },
      }));
    setData(employeeArray);
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
  useEffect(() => {
    fetchData();
  }, []);

  const formatEmployees = (data) => {
    // console.log(data,"before");
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
    // setAllEmployees(employeeArray);
    setEmployeesName(employeeArray);
  };

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
   {popUpForMission &&  (
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
      <div className=" w-[40%] relative flex justify-center items-center ">
        <Search
          searchPopupAttendances={searchPopup}
          setSearchPopupAttendances={setSearchPopup}
          searchText={"חיפוש לפי מספר עובד/ שם עובד"}
          textBtn={"4.6.24"}
        />
      </div>
      {/* פופאפ החיפוש */}
      {searchPopup && (
        <SearchPopup
          data={employeesName}
          searchPopup={searchPopup}
          setSearchPopup={setSearchPopup}
        />
      )}
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
        />
      )}
    </div> 
    
    </>
  );
}
