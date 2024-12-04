"use client";

import axios from "@/app/lib/axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Search({
  textBtn,
  formatData,
  addNew,
  addImage,
  bg,
  searchText,
  missionDay,
  searchEmployees,
  setEmployees,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase(); // Convert query to lowercase for case-insensitive comparison
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      // חיפוש על העובדים לפי שם/מספר
      const filteredEmployees = searchEmployees.filter((employee) => {
        const employeeNumber = employee.employeeToShow.employee_number
          ?.toString()
          .trim();
        const employeeName = employee.employeeToShow.first_name
          ?.trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return (
          (employeeName && employeeName.startsWith(searchQuery)) ||
          (employeeNumber && employeeNumber.startsWith(searchQuery))
        );
      });
      setEmployees(filteredEmployees);
    } else {
      setEmployees(searchEmployees); // מחזיר חזרה את העובדים
    }
  };

  // const handleSearch = async (e) => {
  //   const searchQuery = e.target.value;
  //   setQuery(searchQuery);

  //   if (searchQuery.trim()) {
  //     try {
  //       const response = await axios.get('/employees/search', {
  //         params: { query: searchQuery },
  //       });
  //       console.log(response.data,"query");

  //       formatData(response.data); // Update employees list based on search results
  //     } catch (error) {
  //       console.error('Error fetching search results:', error.response?.data?.message || error.message);
  //     }
  //   } else {
  //     // Optionally reset the employee list when search query is empty
  //     try {
  //       const response = await axios.get('/employees');
  //       formatData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching all employees:', error);
  //     }
  //   }
  // };
  return (
    <div
      className={clsx(
        "w-1/2 justify-center flex  h-10 border border-white relative rounded-full items-center ",
        {
          " bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]":
            !missionDay,
        }
      )}
    >
      <input
        className={clsx(
          "rounded-full pr-2 outline-none h-full placeholder:text-blue_color w-full bg-[#EFF3FB]",
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
            e.stopPropagation(), addNew();
          }}
          className="w-[20%] flex justify-center gap-2 items-center   left-0 text-gray-100 font-normal  text-[20px] "
        >
          <div>{textBtn}</div>
          <div>{addImage}</div>
        </button>
      )}
    </div>
  );
}
