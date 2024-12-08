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
  filterPopUp
}) {

  // פתיחת אפשרויות לבחירה
  const [openLabel, setOpenLabel] = useState(null);
  // תפיסת הבחירה
  const [selectOption, setSelectOption] = useState({});
  // הבחירה לחיפוש
  const [formData, setFormData] = useState({});

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
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    setFormData((prev) => ({
      ...prev,
      [labelName]: option,
    }));
  };

  //   מנקה את הבחירה בלחיצה על האיקס
  const clearOption = (labelName) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: null, // Clear the selected option
    }));
    setFormData((prev) => ({
      ...prev,
      [labelName]: "", // Clear the formData value as well
    }));
  };

  const handleFilterData = () => {
    filterSearch(formData);
    closeFilter(false);
  };

  //   האפשריות שמופיעות בלחיצה
  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };

  //   אפשריות בהתאם ללחיצה
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

  // // להביא מחלקות
  // useEffect(() => {
  //   const fetchDepartments = async () => {
  //     try {
  //       const response = await axios.get(`/departments`);
  //       console.log(
  //         response.data.map((dept) => dept.name),
  //         "departments"
  //       );
  //       setDepartments(response.data.map((dept) => dept.name));
  //     } catch (error) {
  //       console.error("שגיאה בהבאת מחלקות", error);
  //       setDepartments([]);
  //     }
  //   };
  //   fetchDepartments();
  // }, []);

  // // להביא ענפים
  // useEffect(() => {
  //   const fetchBranches = async () => {
  //     try {
  //       const response = await axios.get(`/branches`);
  //       console.log(
  //         response.data.map((dept) => dept.name),
  //         "branches"
  //       );
  //       setBranches(response.data.map((dept) => dept.name));
  //     } catch (error) {
  //       console.error("שגיאה בהבאת מחלקות", error);
  //       setBranches([]);
  //     }
  //   };
  //   fetchBranches();
  // }, []);

  // // להביא קוד הסכם
  // useEffect(() => {
  //   const fetchContracts = async () => {
  //     try {
  //       const response = await axios.get(`/contracts`);
  //       console.log(
  //         response.data.map((dept) => dept.code),
  //         "contracts"
  //       );
  //       setContracts(response.data.map((dept) => dept.code));
  //     } catch (error) {
  //       console.error("שגיאה בהבאת מחלקות", error);
  //       setContracts([]);
  //     }
  //   };
  //   fetchContracts();
  // }, []);

  // // להביא מדורים
  // useEffect(() => {
  //   const fetchSections = async () => {
  //     try {
  //       const response = await axios.get(`/sections`);
  //       console.log(response.data, "sections");
  //       setSections(response.data.map((dept) => dept.name));
  //     } catch (error) {
  //       console.error("שגיאה בהבאת מחלקות", error);
  //       setSections([]);
  //     }
  //   };
  //   fetchSections();
  // }, []);

  const fetchData = async (endpoint, setState, key, errorMessage) => {
    try {
      const response = await axios.get(endpoint);
      console.log(response.data.map((item) => item[key]), endpoint);
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
  useEffect(() => {
    console.log(formData, "datalhvlvlhvl");
  }, [formData]);

  const activeFilter = () => {
    const filterDetails = Object.entries(formData)
      .map(([key, value]) => `${value}`)
      .join(", ");
  
    toast(`סינון הופעל על ${filterDetails}`, {
      icon: "🔍",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      // duration: 1000,
    });
  };
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute hover:cursor-default top-full right- mt-2  z-50  w-96 p-4 bg-white shadow-lg border border-gray-300 rounded-lg"
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
                        selectOption[labelName] || formData[labelName]
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
                      selectOption={selectOption}
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
              onClick={() => {
                closeFilter(false);
              }}
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

// const departments = ["Murazik, Leffler and Mueller", "Status", "Paying_factor"];
// const branches = ["Sipes, Rau and Medhurst", "2023", "2024"];
// const madors = ["Homenick-Ankunding", "נסא", "תקיפה", "תחמושת"];
// const agreement = [70, 214, 232, 157, 657];
