"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmployeeFilter from "../../components/EmployeeFilter";
import PopupDelete from "../../components/PopupDelete";
import Search from "../../components/ui/Search";
import Table from "../../components/Table";
import axios from "@/app/lib/Axios";

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
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
    {
      id: 1238367,
      firstName: "John",
      lastName: "Doe",
      solder: "חייל",
      department: "משאבים אנושיים",
      branch: "טנקים",
      mador: "מדור ציוד נייד",
      hescem: 40,
      activity_start: "2024-07-14",
      activity_end: "2024-07-14",
    },
  ];

  //FOR CONTAIN THE EMPLOYEES
  const [employees, setEmployees] = useState([]);

  //SHOW THE FREEZE POP UP
  const [showConfirmation, setShowConfirmation] = useState(false);
 
 c
  //ON CLICK FOR UPDATE INPUTS
  const [updateMode, setUpdateMode] = useState(null);

  //ALERT IF FIELD EMPTY
  const [ifEmpty, setIfEmpty] = useState(false);

  //THE TOGGLE FOR SOME OF THE INPUTS
  const [toggleUpdateInput, setToggleUpdateInput] = useState(false);

  {
    /*FETCH THE DATA */
  }

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
  //
  {
    /*UPDATE IN DB*/
  }
  const formatDate = (dateString) => {
    console.log(dateString);
    const [day, month, year] = dateString.split("-");
    return `${year}/${month}/${day}`;
  };


  const formtData = (data) => {
    const employeeArray = [];
    data.map((employee, index) => {
      employeeArray.push({
        employee_number: employee.employee_number,
        firstName: employee.first_name,
        lastName: employee.surname,
        solider_civilian:
          employee.solider_civilian == "0"
            ? "אזרח"
            : employee.solider_civilian == "1" && "חייל",
        department: employee.department_name,
        branch: employee.branch_name,
        mador: employee.section_name,
        contract: employee.contract.code,
        activity_start: formatDate(employee.activity_start),
        activity_end: formatDate(employee.activity_end),
      });
    });
    setEmployees(employeeArray);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/employees");
        console.log(response.data);
        formtData(response.data ?? []);
        // console.log(employees);
      } catch (error) {
        console.error("error fetching employees: ", error);
        throw error;
      } finally {
        // setLoading(false);
      }
    }
    fetchData();
  }, []);

  const formtDepartmentData = (data) => {
    const formatted = data.reduce((acc, company) => {
      acc[company.name] = company.branches.map((branch) => {
        return { [branch.name]: branch.sections || [] };
      });
      return acc;
    }, {});

    console.log(formatted);
  };

  useEffect(() => {
    async function fetchDropdownData() {
      try {
        const response = await axios.get(
          "departments?appendBranches=true&appendSections=true"
        );
        formtDepartmentData(response.data ?? []);
      } catch (error) {
        console.error("error fetching employees: ", error);
        throw error;
      } finally {
      }
    }
    fetchDropdownData();
  }, []);

  const checkIfValueIsEmpty = () => {
    if (updateMode !== null) {
      const selectedItem = updateMode;

      for (const [key, value] of Object.entries(employees[selectedItem])) {
        if (value === "") {
          setIfEmpty(true);
          return true;
        }
      }
    }
  };

  const handleAddingNewRow = () => {
    !checkIfValueIsEmpty() && addEmployee();
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
    setEmployees((prev) => {
      const addNew = [newEmployee, ...prev];
      return addNew;
    });
    setUpdateMode(0);
    setIfEmpty(false);
  };

  {
    /*DELETE  EMPLOYEES*/
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
    "חייל / אזרח",
    "מחלקה / יחידה",
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

  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="flex flex-col gap-y-4 h-full">
      <div className="flex justify-center">
        <Search
          addNew={handleAddingNewRow}
          textBtn={" הוסף עובד"}
          updateMode={updateMode}
          addImage={imageAdd}
          searchText={"חיפוש לפי מספר עובד / שם עובד"}
        />
      </div>
      <div className="flex p-4   w-full gap-3 justify-center items-center text-blue_color font-normal text-[20px]">
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
      <div className=" dirLtr overflow-y-auto rounded-xl">
        <div className=" h-full ">
          <Table
            data={employees}
            updateMode={updateMode}
            setUpdateMode={setUpdateMode}
            handleChange={handleChange}
            toggleUpdateInput={toggleUpdateInput}
            setToggleUpdateInput={setToggleUpdateInput}
            ifEmpty={ifEmpty}
            changeTheRowToEdit={checkIfValueIsEmpty}
            //         changeTheRowToEdit={changeTheRowToEdit}
            headTable={headTable}
            deleteEmployee={deleteEmployee}
          />
        </div>
      </div>
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
