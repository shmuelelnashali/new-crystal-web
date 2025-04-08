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
import { useAuthContext } from "@/app/hooks/AuthContext";

export default function Page() {
  const { user } = useAuthContext();
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
  const [employeeAttendance, setEmployeeAttendance] = useState(
    user?.employee_number
  );
  // אירועים
  const [events, setEvents] = useState([]);
  const [eventExist, setEventExist] = useState([]);

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
    // console.log(data, "data");

    // בודק אם המספר עובד דומה למה שבחרתי
    const def = employeesName
      .map((employee) => employee.employeeDefault)
      .filter((em) => em.employee_number === employeeAttendance);

    const employeeData = def.length > 0 ? def[0] : {};

    // console.log(employeeData, "employeeData");

    // במקרה שיש עובד בלי נוכחות בכלל
    const defaultAttendance = {
      alwaysDetail: {
        employee_id: employeeData.employee_id,
        employee_number: employeeData.employee_number,
        full_name: `${employeeData.first_name || ""} ${
          employeeData.surname || ""
        }`.trim(),
        contract_code: employeeData.contract_code,
        employee_is_active: employeeData.employee_is_active,
        entrance: "00:00:00",
        exit: "00:00:00",
      },
    };
    // console.log(defaultAttendance, "fefa");

    const attendance = Array.isArray(data) ? data : [data];
    const matchingAttendance = attendance.filter(
      (match) => match.employee_number === employeeAttendance
    );

    const attendanceArray =
      matchingAttendance.length > 0
        ? matchingAttendance.map((employee) => ({
            attendanceToShow: {
              id: employee.id,
              employee_id: employee.employee_id,
              date_time: employee.date_time,
              employee_number: employee.employee_number,
              full_name: employee.full_name,
              entrances_exits: Array.isArray(employee.entrances_exits)
                ? employee.entrances_exits.map((key) => ({
                    activity_code: key.activity_code || "-",
                    entrance: key.entrance || "-",
                    exit: key.exit || "-",
                  }))
                : [],
              contract_code: employee.contract_code,
              total_attendance_time: employee.total_attendance_time,
              attendance_for_pay: employee.attendance_for_pay,
              waiting_time: employee.waiting_time,
              extra_hours: employee.extra_hours,
              event: employee.event,
              absence_to_pay: employee.absence_to_pay,
            },
            searchAttendanceToShow: {
              full_name: employee.full_name,
            },
            alwaysDetail: {
              employee_id: employee.employee_id,
              employee_number: employee.employee_number,
              full_name: employee.full_name,
              contract_code: employee.contract_code,
              entrance: "00:00:00",
              exit: "00:00:00",
            },
            hiddenAttendanceData: {
              employee_id: employee.employee_id,
              date_time: formatDate(employee.date_time),
              date_day: formatDateToDay(employee.date_time),
            },
          }))
        : [defaultAttendance];

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
    // console.log(data, "data");

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
        employeeDefault: {
          employee_id: employee.id,
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          contract_code: employee.contract.code,
          employee_is_active: employee.is_active == "1" ? "פעיל" : "לא פעיל",
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

  //
  // בדיקת האירועים
  //

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
        const formattedDate = `${year}-${monthFormat}-${dayFormat}`;
        return formattedDate;
      }),
    ];

    return allDates;
  };

  // מביא את הימים
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  useEffect(() => {
    const eventsMatch = generateDaysArray(year, month);
    setEvents(eventsMatch);
    setEventExist([]);
  }, [year, month]);

  const fetchEvents = async () => {
    try {
      const validDates = events.filter((date) => date !== null);

      if (validDates.length === 0) {
        console.log("No valid dates to query");
        return;
      }

      const eventPromises = validDates.map(async (eventDate) => {
        try {
          const response = await axios.get(`/events/${eventDate}`);
          const data = response.data;
          if (data && data.length > 0) {
            const matchingEvents = data.filter(
              (event) => event.beginning_date === eventDate
            );
            if (matchingEvents.length > 0) {
              return matchingEvents;
            }
          }
          return [];
        } catch (error) {
          console.error(`Error fetching events for ${eventDate}:`, error);
          return [];
        }
      });

      const results = await Promise.all(eventPromises);
      const flattenedEvents = results.flat();
      setEventExist(flattenedEvents);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, [events]);

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
        <div className="border w-[20%]   flex  border-r-blue_color  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full  z-50">
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
            eventExist={eventExist}
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
