import { CircleX } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import React, { useEffect, useRef, useState } from "react";
import ArrowEmployeesFilter from "./ArrowEmployeesFilter";
import DateEmployeesFilter from "./DateEmployeesFilter";
import axios from "@/app/lib/axios";

export default function PopupFilterEmployees({
  closeFilter,
  filterSearch,
  setFilterPopUp,
  filterPopUp,
formData,
setFormData,
}) {

  // פתיחת אפשרויות לבחירה
  const [openLabel, setOpenLabel] = useState(null);

  // להביא מחלקות
  const [departments, setDepartments] = useState([]);
  // להביא ענפים
  const [branches, setBranches] = useState([]);
  // להביא קודי הסכם
  const [contracts, setContracts] = useState([]);
  // להביא קודי הסכם
  const [sections, setSections] = useState([]);



  //   פותח אפשריות בחירה
  const handleOption = (labelName, option) => {
    setFormData((prev) => ({
      ...prev,
      [labelName]: option,
    }));
  };

  // מנקה את הבחירה בלחיצה על האיקס
  const clearOption = (labelName) => {   
      setFormData((prev) => {
        const updatedFormData = { ...prev };
        delete updatedFormData[labelName];
        return updatedFormData;
      });
  };

  // מנקה את כל הסינונים
  const clearAll = ()=>{
    filterSearch({})
    setFormData({})
    closeFilter(false)
    toast(`הסינון שלך בוטל`, {
      icon: "👌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 1500
    });
  }
  
  // מביא את מה שביקשת לסנן
  const handleFilterData = () => {
    filterSearch(formData);
    closeFilter(false);
  };

  // האפשריות שמופיעות בלחיצה
  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };

  // אפשריות בהתאם ללחיצה
  const getOptionsArray = (labelName) => {
    switch (labelName) {
      case "contract_id":
        return contracts;
      case "section_id":
        return sections;
      case "branch_id":
        return branches;
      case "department_id":
        return departments;
      default:
        return [];
    }
  };

  // אפשריות בהתאם ללחיצה על הסינון
  const getTheKeyToast = (key) => {
    switch (key) {
      case "contract_id":
        return "הסכם";
      case "section_id":
        return "מדור";
      case "branch_id":
        return "ענף";
      case "department_id":
        return "מחלקה";
      case "activity_start":
        return "תחילת פעילות";
      case "activity_end":
        return "סיום פעילות";
      default:
        return [];
    }
  };



  // להביא את מה שצריך לסנן
  const fetchData = async (endpoint, setState, key, errorMessage) => {
    try {
      const response = await axios.get(endpoint);
      setState(response.data.map((item) => item[key]));
    } catch (error) {
      console.error(errorMessage, error);
      setState([]);
    }
  };
  useEffect(() => {
    const fetchAllData = async () => {
      const endpoints = [
        { url: "/departments", setter: setDepartments, key: "name", error: "שגיאה בהבאת מחלקות" },
        { url: "/branches", setter: setBranches, key: "name", error: "שגיאה בהבאת ענפים" },
        { url: "/contracts", setter: setContracts, key: "code", error: "שגיאה בהבאת קוד הסכם" },
        { url: "/sections", setter: setSections, key: "name", error: "שגיאה בהבאת מדורים" },
      ];
  
      for (const { url, setter, key, error } of endpoints) {
        fetchData(url, setter, key, error);
      }
    };
  
    fetchAllData();
  }, []);



  // על מה קרה הסינון
  const activeFilter = () => {
    const filterDetails = Object.entries(formData)
      .map(([key, value]) => `${
        getTheKeyToast(key)}: ${value}`)
      .join("\n");
  
    toast(`סינון הופעל על\n${filterDetails}`, {
      icon: "🔍",
      style: {
        textAlign:"right",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute hover:cursor-default top-full right- mt-2  z-50  w-[300px] p-4 bg-white shadow-lg border border-gray-300 rounded-lg"
      >
        <div className="bg-[#EFF3FB] p-2 rounded-lg ">
          <div className="font-bold">סינונים</div>

          <div>
            {labels.map(({ label, labelName }, index) => (
              <div key={index} className="mb-3 relative">
                <div className="block text-base text-right pr-6 text-[#002A78] truncate font-bold">
                  {label}
                </div>

                <div className="relative flex items-center ">
                  <div
                    className="ml-2 hover:cursor-pointer"
                    onClick={() => clearOption(labelName)}
                  >
                    <CircleX
                      size={20}
                      color={
                        formData[labelName]
                          ? "red"
                          : "#a5a7aa"
                      }
                    />
                  </div>
                  {arrow.includes(labelName) ? (
                    <ArrowEmployeesFilter
                      toggleOptionMenu={toggleOptionMenu}
                      getOptionsArray={getOptionsArray}
                      handleOption={handleOption}
                      labelName={labelName}
                      label={label}
                      openLabel={openLabel}
                      setOpenLabel={setOpenLabel}
                      // selectOption={selectOption}
                      formData={formData}
                    />
                  ) : (
                    labelName.includes("activity") && (
                      <DateEmployeesFilter
                        labelName={labelName}
                        formData={formData}
                        setFormData={setFormData}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <div
              onClick={() => {clearAll()}}
              className="border hover:cursor-pointer border-[#002A78] rounded-full px-6 bg-white"
            >
              ביטול
            </div>
            <div
              onClick={() => {handleFilterData(), activeFilter()}}
              className="rounded-full hover:cursor-pointer bg-[#002A78] text-white px-6  font-thin"
            >
              החל סינון
            </div>
          </div>
        </div>
      </div>
      {/* סוגר את הפופאפ בלחיצה בחוץ */}
      <div
        onClick={() => filterPopUp && setFilterPopUp(false)}
        className="fixed hover:cursor-default  inset-0  "
      ></div>
    </>
  );
}

const labels = [
  { label: "מחלקה", labelName: "department_id" },
  { label: "ענף", labelName: "branch_id" },
  { label: "מדור", labelName: "section_id" },
  { label: "סוג הסכם", labelName: "contract_id" },
  { label: "תאריך תחילת פעילות", labelName: "activity_start" },
  { label: "תאריך סיום פעילות", labelName: "activity_end" },
];

const arrow = ["department_id", "branch_id", "section_id", "contract_id"];


