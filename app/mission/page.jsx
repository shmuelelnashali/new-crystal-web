
"use client"
import Search from "../components/Search";
import Image from "next/image";
import { useState } from "react";
import Table from "../components/Table";
import EmployeeFilter from "../components/EmployeeFilter";

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
  const [updateMode, setUpdateMode] = useState(null);
  const headers = [
    " מספר משימה",
    " שם משימה",
    " מחלקה/יחידה ",
    " ענף",
    "מדור ",
    "תאריך התחלה",
    " תאריך סיום ",
  ];
  const filterArray = [
    { מחלקה: ["משקים והמטות", "נסא"] },
    { ענף: ["רכבים", "טנקים"] },
    { מדור: ["אמת", "נמה"] },
    { פעיל: ["פעיל", "לא פעיל"] },
  ];
  const add = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );
  return (

    <div className="h-[90vh] px-3 ">
      <div className=" w-full flex justify-center item">
        <Search className="" 
        textBtn={"הוסף משימה"}
      
          addImage={add}
          />
      </div>
      <div
        onClick={() => {
          setUpdateMode(null);
        }}
        className="flex p-4  w-full  gap-3 justify-center items-center top-[263px] text-[#002A78] font-normal text-[20px] "
      >
        סנן לפי:
        {filterArray.map((filterObject) =>
          Object.entries(filterObject).map(([labelKey, dataArray]) => (
            <EmployeeFilter
              key={labelKey}
              dataArray={dataArray}
              label={labelKey}
            />
          ))
        )}
      </div>
     
      
      <Table
        data={data}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        headTable={headers}
        // handleChange={handleChange}
        // toggleUpdateInput={toggleUpdateInput}
        // setToggleUpdateInput={setToggleUpdateInput}
        // checkIfEmpty={checkIfEmpty}
        // ifEmpty={ifEmpty}
        // deleteEmployee={deleteEmployee}
      />  </div>

  );

}
   
       

      {/* <PopupMissin/> */}
  




