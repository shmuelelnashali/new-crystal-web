"use client";
import axios from "@/app/lib/axios";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search({
  textBtn,
  addNew,
  addImage,
  bg,
  searchText,
  missionDay,
  searchItems,
  setItems,
  searchPopupAttendances,
  setSearchPopupAttendances,
  rightArrow,
  leftArrow,
  goToNextMonth,
  goToPrevMonth,
}) {
  // console.log("searchEmployees", searchEmployees);

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase(); // Convert query to lowercase for case-insensitive comparison
    setQuery(searchQuery);
    // if (searchQuery.trim()) {
    // חיפוש על העובדים לפי שם/מספר
    const filteredEmployees = searchItems.filter((item) => {
      if (item.task_number) {
       return item.task_number.toString().trim().startsWith(searchQuery);
      }
      if (item.Mission_number) {
       return item.Mission_number.toString().trim().startsWith(searchQuery);
      }
      if (item.employeeToShow) {
        const employeeNumber = item.employeeToShow.employee_number
          ?.toString()
          .trim();
        const employeeName = item.employeeToShow.first_name
          ?.trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return (
          (employeeName && employeeName.startsWith(searchQuery)) ||
          (employeeNumber && employeeNumber.startsWith(searchQuery))
        );
      }
    });
    setItems(filteredEmployees);
    // } else {
    //   setEmployees(searchEmployees); // מחזיר חזרה את העובדים
    // }
  };
  const handleInputClick = () => {
    if (setSearchPopupAttendances && setSearchPopupAttendances) {
      setSearchPopupAttendances(!searchPopupAttendances);
    }
  };
  const handleBtn = () => {
    if (addNew) {
      addNew();
    }
  };
  return (
    <div
      className={clsx(
        "w-full justify-center  flex  h-10 border border-white relative rounded-full items-center ",
        {
          " bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]":
            !missionDay,
        }
      )}
    >
      <input
        onClick={handleInputClick}
        className={clsx(
          "rounded-full pr-2 outline-none hover:cursor-pointer h-full placeholder:text-blue_color w-full bg-[#EFF3FB]",
          { "bg-white border": bg },
          { "w-[85%]": !missionDay }
        )}
        value={query}
        onChange={handleSearch}
        //  onInput={handleSearch}
        placeholder={searchText}
      />
      {!missionDay && (
        <button
          onClick={(e) => {
            e.stopPropagation(), handleBtn();
          }}
          className="w-[20%] flex justify-center gap-1 items-center  whitespace-nowrap  left-0 text-gray-100 font-normal  text-base "
        >
          <div onClick={goToPrevMonth}>{rightArrow}</div>
          <div className="truncate">{textBtn}</div>
          <div onClick={goToNextMonth}>{leftArrow}</div>
          <div>{addImage}</div>
        </button>
      )}
    </div>
  );
}
