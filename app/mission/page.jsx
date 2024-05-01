
"use client"

import Search from "../components/Search";

import ReadEmployees from "../components/ReadEmployees";

import UpdateEmployee from "../components/UpdateEmployee";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },

  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    start: "12/03/24",
    daydate: "12/04/24",
  },

  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    StartDate: "12/03/24",
    daydate: "12/04/24",
  },
  {
    taskNumber: "12345",
    taskName: "nasa",
    department: "hatal",
    branch: "12345",
    section: "nisoim",
    start: "12/03/24",
    end: "12/04/24",
  },
];
export default function page() {
  const [updateNode, setUpdateMode] = useState(null);
  const headers = [
    " מספר משימה",
    " שם משימה",
    " מחלקה/יחידה ",
    " ענף",
    "מדור ",
    "תאריך התחלה",
    " תאריך סיום ",
  ];

  return (

    <div className="h-[90%] w-full ">
      <div className="h-14 w-full flex justify-center item">
        <Search className="" />
      </div>
      <div className="w-full flex justify-center items-center gap-x-3 mt-2 p-3 ">
        <span>סנן לפי :</span>
        <input className="border p-1 rounded-full" placeholder={"מחלקה"} />
        <input className="border p-1 rounded-full" placeholder={"ענף"} />
        <input className="border p-1 rounded-full" placeholder={"מדור"} />
      </div>
      <div dir="ltr" className="h-[95%] rounded-2xl px-2 overflow-y-auto">
        <div dir="rtl" className=" bg-[#F7F9FD] ">
        <div className="bg-[#002A78] grid grid-cols-7 p-2 text-2xl font-semibold rounded-lg fixed w-[96.5%] ">
          {headers.map((header) => (
            <div className="text-white text-center">{header}</div>
          ))}
        </div>
      <div className="h-[90%] pt-12">
        {data.map((data, index) => (
          <div className=" w-full items-center gap-x-2 flex p-2  border-b-[1px] ">
            <div>
              <Image src="/trash.svg" width={30} height={22} />
            </div>
            <div
              className="grid grid-cols-7 w-full gap-x-3 py-2 text-2xl justify-center font-normal rounded-lg"
              onClick={() => {
                setUpdateMode(index);
              }}
            >
              {updateNode === index ? (
                <UpdateEmployee data={data} />
              ) : (
                <ReadEmployees data={data} />
              )}
            </div>{" "}
          </div>
        ))}</div></div>
      </div>

      {/* <PopupMissin/> */}
    </div>
  );

}




