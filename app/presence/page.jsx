"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReadObject from "../components/ReadObject";
import UpdateObject from "../components/UpdateObject";
import Search from "../components/Search";
import Btn from "../components/Btn";
import PopupMissin from "../components/PopupMissin";

const arr = [
  {
    date: "20/20/1998",
    employeeNumber: "1234",
    fullName: "Aharon",
    activityCode: "מחלה",
    entry: ["08:00"],
    exit: ["17:00"],
    agreementCode: "12",
    totalAttendance: "09:00",
    presentToSalary: "09:00",
    waitingHours: "07:00",
    overtime: "03:00",
    absenceToSalary: "01:00",

    status: "פעיל",
  },
  {
    date: "20/20/1998",
    employeeNumber: "1234",
    fullName: "Aharon westheim",
    activityCode: "מחלה",
    entry: ["08:00"],
    exit: ["17:00"],
    agreementCode: "12",
    totalAttendance: "09:00",
    presentToSalary: "09:00",
    waitingHours: "07:00",
    overtime: "03:00",
    absenceToSalary: "01:00",

    status: "פעיל",
  },
  {
    date: "20/20/1998",
    employeeNumber: "1234",
    fullName: "Aharon westheim",
    activityCode: "מחלה",
    entry: ["08:00"," 09:00"],
    exit:[ "17:00","12:00","17:00","12:00"],
    agreementCode: "12",
    totalAttendance: "09:00",
    presentToSalary: "09:00",
    waitingHours: "07:00",
    overtime: "03:00",
    absenceToSalary: "01:00",

    status: "פעיל",
  },
];

export default function Page() {
  const headers = [
    "תאריך",
    "מספר עובד",
    "שם מלא",
    "קוד פעילות",
    "כניסה",
    "יציאה",
    "קוד הסכם",
    "סהכ נוכח",
    "נוכח לשכר",
    "ש. המתנה",
    "ש. נוספות",
    "היעדרות לשכר",
    "סטטוס",
    "משימות",
  ];

  const [data, setData] = useState(arr);
  const [updateMode, setUpdateMode] = useState(null);
  const [attendanceData, setattendanceData] = useState({});

  return (<>
    {/* <PopupMissin/> */}

    <div className="w-full   ">
        <div className="h-20 w-full flex justify-center m-2">
        <Search
        />
      </div>
      <div className="bg-[#F7F9FD] rounded-lg p-1">
      <div className="presentTable items-center justify-around text-white bg-[#002A78] py-2 rounded-md">
        {headers.map((header, index) => (
          <div className=" flex justify-center items-center" key={index}>
            {header}
          </div>
        ))}
      </div>

      <div className="rounded-md ">
        {data.map((rowData, rowIndex) => (
          <div
            key={rowIndex}
            onClick={() => setUpdateMode(rowIndex)}
            className="w-full  justify-around items-center   border-b-[1px] hover:bg-[#EBF1FA] hover:rounded-lg"
          >
            <div className=" presentTable items-center">
              {updateMode === rowIndex ? (
                Object.entries(rowData).map(([key, value], i) => (
                  <div  key={key} className={`py-3 flex justify-center ${key==="entry"|| key=== "exit" ?"bg-[#EFF3FB]":""}`}>
                    {key==="entry"|| key=== "exit" || key=== "waitingHours"?
                    <input type="text" placeholder={value} className="w-4/5 rounded-full  text-right pr-2 border  border-[#002A78]" />: 
                    <span>{value}</span>}
                    
                 </div>
                ))
              ) : (
                <ReadObject data={rowData} />
              )}
              <div className="flex justify-center items-center">
                <Btn text={"צפה במשימות"}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
}