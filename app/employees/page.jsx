"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateDelete from "../components/EmployeeFilter";
import Image from "next/image";
import ReadObject from "../components/ReadObject";
import UpdateObject from "../components/UpdateObject";
import EmployeeFilter from "../components/EmployeeFilter";
import PopupDelete from "../components/PopupDelete";
import Search from "../components/Search";

export default function Employees() {
  const user = [
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      start: "15/03/2023",
      end: "20/04/2023",
    },
    {
      id: 2345678,
      firstName: "Jane",
      lastName: "Smith",
      solder: "חייל",
      department: "אגף הפצת רכבים",
      branch: "טנקים",
      mador: "טנקים משופצים",
      hescem: 60,
      start: "10/04/2023",
      end: "20/05/2023",
    },
    {
      id: 3456789,
      firstName: "David",
      lastName: "Johnson",
      solder: "חייל",
      department: "אגף כלכלי",
      branch: "אגף כללי",
      mador: "חשמל ותקשורת",
      hescem: 55,
      start: "05/05/2023",
      end: "25/06/2023",
    },
    {
      id: 4567890,
      firstName: "Emily",
      lastName: "Brown",
      solder: "אזרח",
      department: "אגף טיפול",
      branch: "אגף טיפול",
      mador: "אגף טיפול",
      hescem: 45,
      start: "01/06/2023",
      end: "30/06/2023",
    },
    {
      id: 5678901,
      firstName: "Michael",
      lastName: "Wilson",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנקים",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 6789012,
      firstName: "Sarah",
      lastName: "Martinez",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 7890123,
      firstName: "Matthew",
      lastName: "Taylor",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 8901234,
      firstName: "Emma",
      lastName: "Anderson",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 9012345,
      firstName: "Daniel",
      lastName: "Thomas",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1239567,
      firstName: "Olivia",
      lastName: "Jackson",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1206567,
      firstName: "Noah",
      lastName: "White",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1291567,
      firstName: "Ava",
      lastName: "Harris",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1200567,
      firstName: "William",
      lastName: "King",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 9934567,
      firstName: "Sophia",
      lastName: "Evans",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1234997,
      firstName: "James",
      lastName: "Baker",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1237767,
      firstName: "Isabella",
      lastName: "Green",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1211567,
      firstName: "Alexander",
      lastName: "Lee",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1209567,
      firstName: "Mia",
      lastName: "Clark",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1230267,
      firstName: "Benjamin",
      lastName: "Hall",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1234500,
      firstName: "Charlotte",
      lastName: "Young",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1234599,
      firstName: "Jacob",
      lastName: "Lopez",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1234598,
      firstName: "Amelia",
      lastName: "Wright",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1234578,
      firstName: "Ethan",
      lastName: "Perez",
      solder: "חייל",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
    },
    {
      id: 1239277,
      firstName: "Evelyn",
      lastName: "Lewis",
      solder: "אזרח",
      department: "אגף רכבים",
      branch: "טנk",
      mador: "אחסנה",
      hescem: 70,
      start: "01/07/2023",
      end: "30/07/2023",
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

  //ADD EMPLOYEE OBJECT
  const optionsEmployee = {
    solder: ["אזרח", "חייל"],
    department: ["רכבים", "משקים והמטות"],
    branch: ["נגמש", "טנקים"],
    mador: ["נסא", "אמת"],
    hescem: ["40", "1"],
  };

  //ADD NEW ROW TO ADD EMPLOYEE
  const addEmployee = () => {
    // IF THE ROW OPEN THE BUTTON NOT WORK
    if (updateMode !== null) {
      return;
    }

    const newEmployee = {
      id: "0000000",
      firstName: "",
      lastName: "",
      solder: optionsEmployee.solder[0],
      department: optionsEmployee.department[0],
      branch: optionsEmployee.branch[0],
      mador: optionsEmployee.mador[0],
      hescem: optionsEmployee.hescem[0],
      start: "",
      end: "",
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
    "מספר עובד",
    "שם פרטי",
    "שם משפחה",
    "חייל/ אזרח",
    "מחלקה/ יחידה",
    "ענף",
    "מדור",
    "סוג הסכם",
    "תחילת פעילות",
    "סיום פעילות",
  ];
  const filterArray = [
    { מחלקה: ["משקים והמטות", "נסא"] },
    { ענף: ["רכבים", "טנקים"] },
    { מדור: ["אמת", "נמה"] },
    { פעיל: ["פעיל", "לא פעיל"] },
  ];

  const addEmployeeImage = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="h-[72%] relative ">
      <div className="h-16 w- full flex justify-center m-2">
        <Search
          addNew={addEmployee}
          textBtn={" הוסף עובד"}
          updateMode={updateMode}
          addImage={addEmployeeImage}
        />
      </div>
      {/* THE FILTER */}
      <div
        onClick={() => {
          setUpdateMode(null);
        }}
        className="flex  w-full mb-5 gap-3 justify-center items-center top-[263px] text-[#002A78] font-normal text-[20px] m-2"
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

      {/* THE TABLE */}
      <div
        dir="ltr"
        className=" h-full   border overflow-y-auto  border-[#F7F9FD]"
      >
        {/* ראש הטבלה */}
        <div dir="rtl" className="w-full  ">
          <div className="flex sticky top-0 z-10">
            <div
              onClick={() => {
                checkIfEmpty(employees);
              }}
              className="flex w-full bg-[#002A78] rounded "
            >
              <div className="w-[30px]"></div>
              <div className="text-[24px] grid grid-cols-10 gap-3 w-full font-semibold leading-6 py-3  text-center items-center text-[#FFFFFF] ">
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
                  className={`flex w-full gap-2 border-b bg-[#EFF3FB] border-t
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
                    className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
                  >
                    <Image
                    
                      src={"/trash.svg"}
                      height="30"
                      width="30"
                      alt="trash"
                    />
                  </div>
                  <div className="w-full  ">
                    <div className={`grid grid-cols-10  w-full justify-between gap-3 py-3 font-normal text-[20px] leading-5 text-[#002A78]`}
                    >
                      {updateMode === index ? (
                        //RENDER TO UPDATE MOOD
                        <UpdateObject 
                         
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
                        <ReadObject
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
          headerText={`העברת עובד למצב "לא פעיל"`}
          messageText={"האם אתה בטוח שאתה רוצה להקפיא את העובד"}
          btnText={"המשך"}
        />
      )}
    </div>
  );
}
