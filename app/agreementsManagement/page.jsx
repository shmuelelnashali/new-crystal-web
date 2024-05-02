"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateDelete from "../components/EmployeeFilter";
import Image from "next/image";
import UpdateEmployee from "../components/UpdateEmployee";
import ReadEmployees from "../components/ReadEmployees";
import EmployeeFilter from "../components/EmployeeFilter";
import PopupDelete from "../components/PopupDelete";
import Search from "../components/Search";

export default function agreementsManagement() {
  const user = [
    {
      id: 12,
      agreementName: "הסכם לחיילים",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 13,
      agreementName: "הסכם לחיילים",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 14,
      agreementName: "הסכם לחיילים",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 15,
      agreementName: "הסכם לאע צים4",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 16,
      agreementName: "הסכם לאע צים5",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 17,
      agreementName: "הסכם לאע צים6",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 18,
      agreementName: "הסגם לאע צים",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 19,
      agreementName: "הסכם לאע צים",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 20,
      agreementName: "הסכם לאע צים",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 21,
      agreementName: "הסכם לחיילים0",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 22,
      agreementName: "הסכם לחיילים1",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 23,
      agreementName: "הסכם לחיילים2",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 24,
      agreementName: "הסכם לחיילים3",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 25,
      agreementName: "הסכם לחיילים4",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 26,
      agreementName: "הסכם לחיילים5",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 27,
      agreementName: "הסכם לחיילים6",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 28,
      agreementName: "הסכם לחיילים7",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 29,
      agreementName: "הסכם לחיילים8",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 30,
      agreementName: "הסכם לחיילים9",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 31,
      agreementName: "הסכם לחיילים0",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 32,
      agreementName: "הסכם לחיילים1",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 33,
      agreementName: "הסכם לחיילים2",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 34,
      agreementName: "הסכם לחיילים3",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 35,
      agreementName: "הסכם לחיילים4",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 36,
      agreementName: "הסכם לחיילים5",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 37,
      agreementName: "הסכם לחיילים6",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 38,
      agreementName: "הסכם לחיילים7",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 39,
      agreementName: "הסכם לחיילים8",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 40,
      agreementName: "הסכם לחיילים9",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 41,
      agreementName: "הסכם לחיילים0",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
  ];

  const [employees, setEmployees] = useState(user);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);

  const [updateMode, setUpdateMode] = useState(null);

  const [ifEmpty, setIfEmpty] = useState(false);

  const [toggleUpdateInput, setToggleUpdateInput] = useState(false);

  {
    /*FETCH THE DATA */
  }
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users`);
      let data = response.data.users;
      setEmployees(data);

      // const hairOptions = Array.from(
      //   new Set(data.map((employee) => employee.hair))
      // );
      // setOptions(hairOptions);
    } catch (error) {
      console.error("error fetching employees: ", error);
    }
  };
  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  {
    /*MAKING THE UPDATE*/
  }
  const handleChange = (e, id, field) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, [field]: e.target.value };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
  };

  {
    /*UPDATE IN DB*/
  }
  const updateEmployee = async (id) => {
    try {
      const employee = employees.find((employee) => employee.id === id);
      if (!employee) {
        console.error("Employee not found.");
        return;
      }
      await axios.put(`https://dummyjson.com/users/${id}`, employee);
      setEmployees((prevEmployees) => {
        const updatedEmployees = prevEmployees.map((employee) => {
          if (employee.id === id) {
            return employee;
          }
          return employee;
        });
        return updatedEmployees;
      });
    } catch (error) {
      console.error("error updating employee: ", error);
    }
  };

  const checkIfEmpty = (emptyArray) => {
    let isEmpty = false;

    for (const empty of emptyArray) {
      for (const [key, value] of Object.entries(empty)) {
        if (value === "") {
          isEmpty = true;
        }
      }
      if (isEmpty) {
        break;
      }
    }
    if (isEmpty) {
      setIfEmpty(true);
    } else {
      setUpdateMode(null);
    }
  };

  //ADD NEW ROW TO ADD EMPLOYEE
  const addEmployee = () => {
    // IF THE ROW OPEN THE BUTTON NOT WORK
    if (updateMode !== null) {
      return;
    }

    const newEmployee = {
        id: "",
        agreementName: "",
        enterTime: "",
        exitTime: "",
        overTimeLimit: "",
        hoursAmount: "",
        breakType: "",
    };
    setEmployees([newEmployee, ...employees]);
    setUpdateMode(0);
  };

  {
    /*DELETE THE EMPLOYEES*/
  }
  const deleteEmployee = async (employee) => {
    try {
      setEmployeeIdToDelete(employee);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete employee: ", error);
    }
  };

  {
    /*ARRAY FOR THE HEAD OF THE TABLE*/
  }
  const headTable = [
    "קוד הסכם",
    "שם הסכם",
    "שעת כניסה",
    "שעת יציאה",
    "מגבלת שעות נוספות",
    "כמות שעות",
    "סוג הפסקה",
  ];

  const addEmployeeImage = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="h-[80%]  w-full">
      <div className="h-16   flex justify-center m-2">
        <Search
          addNew={addEmployee}
          textBtn={" הוסף הסכם חדש"}
          updateMode={updateMode}
          addImage={addEmployeeImage}
        />
      </div>

      {/* THE TABLE */}
      <div
        dir="ltr"
        className="p-1 pr-3 h-full w-4/5 m-auto border overflow-y-auto  border-[#F7F9FD]"
      >
        {/* ראש הטבלה */}
        <div dir="rtl" className="w-full">
          <div className="flex sticky top-0 z-10">
            <div
              onClick={() => {
                checkIfEmpty(employees);
              }}
              className="flex w-full bg-[#002A78] rounded "
            >
              <div className="w-[30px]"></div>
              <div className="text-[24px] grid grid-cols-7 gap-3 w-full font-semibold leading-6 py-3  text-center items-center text-[#FFFFFF] ">
                {headTable.map((head, index) => (
                  <div
                    key={head}
                    className={head === "מספר עובד" ? "pr-7" : ""}
                  >
                    {head}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* תוכן הטבלה */}
          <div className="w-full ">
            <div className="w-full ">
              {employees.map((employee, index) => (
                <div
                  onClick={() => setUpdateMode(index)}
                  key={index}
                  className={`flex w-full gap-2 border-b py-2 border-t border-[#eceef1]
                ${
                  updateMode === index
                    ? "bg-[#e8eef7]"
                    : " hover:bg-[#e8eef7] transition-transform duration-200 ease-in-out"
                }

                `}
                >
                  {/* DELETE BUTTON */}
                  <div
                    onClick={() => deleteEmployee(employee)}
                    className={` flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
                  >
                    <Image
                      src={"/trash.svg"}
                      height="30"
                      width="30"
                      alt="trash"
                    />
                  </div>
                  <div className="w-full  ">
                    <div
                      className={`grid grid-cols-7  w-full justify-between gap-3 py-3 
                    font-normal text-[20px] leading-5 text-[#002A78]`}
                    >
                      {updateMode === index ? (
                        //RENDER TO UPDATE MOOD
                        <UpdateEmployee
                          data={employee}
                          updateMode={updateMode}
                          setUpdateMode={setUpdateMode}
                          handleChange={handleChange}
                          toggleUpdateInput={toggleUpdateInput}
                          setToggleUpdateInput={setToggleUpdateInput}
                          ifEmpty={ifEmpty}
                        />
                      ) : (
                        //RENDER TO READ MOOD
                        <ReadEmployees
                          data={employee}
                          updateMode={updateMode}
                          setUpdateMode={setUpdateMode}
                          handleChange={handleChange}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEEZE EMPLOYEE */}
      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={employeeIdToDelete}
          showPopup={setShowConfirmation}
          headerText={`מחיקת הסכם`}
          messageText={"האם אתה בטוח שאתה רוצה למחוק את ההסכם  "}
          btnText={"מחק"}
        />
      )}
    </div>
  );
}
