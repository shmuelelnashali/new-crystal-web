"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmployeeFilter from "../../components/employees/EmployeeFilter";
import PopupDelete from "../../components/PopupDelete";
import Search from "../../components/ui/Search";
import Table from "../../components/Table";

import PopupFilterEmployees from "@/app/components/employees/PopupFilterEmployees";
import { parse, isEqual, isWithinInterval, parseISO } from "date-fns";

import axios from "@/app/lib/axios";
import AddNewEmployee from "@/app/components/employees/AddNewEmployee";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import Tables from "@/app/components/missions/Tables";

// import axios from "axios";

export default function Employees() {
  //עובדים
  const [employees, setEmployees] = useState([]);
  // עובדים בשביל הסינון
  const [allEmployees, setAllEmployees] = useState([]);

  // פופאפ לסינון
  const [filterPopUp, setFilterPopUp] = useState(false);

  // הסינונים שהוא מקבל
  const [filterData, setFilterData] = useState(null);

  // הוספת עובד חדש
  const [addNewEmployee, setAddNewEmployee] = useState(false);

  // מחיקת עובד
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  //פופאפ למחיקה
  const [showConfirmation, setShowConfirmation] = useState(false);

  // מביא את כל העובדים גם הלא פעילים
  const [showAllEmployees, setShowAllEmployees] = useState(false);

  // הבחירה לחיפוש
  const [formData, setFormData] = useState({});

  // להראות את כל העובדים או את הסינון
  const showEmployeesOrFilter = filterData
    ? employees.filter((employee) => {
        let matches = true;

        // ממיר סטרינג מתאריך המשימה לאובייקט כדי לבדוק אותו
        const employeeOpeningDate = employee.employeeToShow.activity_start
          ? parseISO(employee.employeeToShow.activity_start)
          : null;

        const employeeClosingDate = employee.employeeToShow.activity_end
          ? parseISO(employee.employeeToShow.activity_end)
          : null;

        // ממיר סטרינג מתאריך הפילטר לאובייקט כדי לבדוק אותו
        const filterOpeningDate = filterData?.activity_start
          ? parse(filterData.activity_start, "yyyy-MM-dd", new Date())
          : null;
        const filterClosingDate = filterData?.activity_end
          ? parse(filterData.activity_end, "yyyy-MM-dd", new Date())
          : null;

        // פילטר רק על תאריך פתיחה
        if (filterOpeningDate && !filterClosingDate) {
          if (!isEqual(employeeOpeningDate, filterOpeningDate)) {
            matches = false;
          }
        }

        // פילטר רק על תאריך סגירה
        if (filterClosingDate && !filterOpeningDate) {
          if (!isEqual(employeeClosingDate, filterClosingDate)) {
            matches = false;
          }
        }

        // פילטר על התאריכים
        if (filterOpeningDate && filterClosingDate) {
          const isInRange =
            isWithinInterval(employeeOpeningDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            }) &&
            isWithinInterval(employeeClosingDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            });

          if (!isInRange) {
            matches = false;
          }
        }

        // פילטר מחלקה
        if (
          filterData?.department_id &&
          !employee.employeeToShow.department_id
            ?.toLowerCase()
            .includes(filterData.department_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר ענף
        if (
          filterData?.branch_id &&
          !employee.employeeToShow.branch_id
            ?.toLowerCase()
            .includes(filterData.branch_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר מדור
        if (
          filterData?.section_id &&
          !employee.employeeToShow.section_id
            ?.toLowerCase()
            .includes(filterData.section_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר הסכם
        if (
          filterData?.contract_id &&
          employee.employeeToShow.contract_id !== filterData.contract_id
        ) {
          matches = false;
        }

        console.log(filterData, "filter data");
        return matches;
      })
    : employees;

    // פורמט המערך כדי להציג רק פרטים מסוימים
  const formatData = (data) => {
    const employees = Array.isArray(data) ? data : [data];
    const employeeArray = employees
      .filter((active) => (showAllEmployees ? true : active.is_active === 1))
      .map((employee) => ({
        // מה שרואים בטבלה
        employeeToShow: {
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          solider_civilian:
            employee.solider_civilian == "0"
              ? "אזרח"
              : employee.solider_civilian == "1" && "חייל",
          department_id: employee.department_id && employee.department_name,
          branch_id: employee.branch_id && employee.branch_name,
          section_id: employee.section_id && employee.section_name,
          contract_id: employee.contract_id && employee.contract.code,
          activity_start: employee.activity_start,
          activity_end: employee.activity_end,
          mail: employee.mail,
        },
        // השדות שמתעדכנים
        updateEmployeeMood: {
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          solider_civilian:
            employee.solider_civilian == "0"
              ? "אזרח"
              : employee.solider_civilian == "1" && "חייל",
          department_id: employee.department_name && employee.department_id,
          branch_id: employee.branch_name && employee.branch_id,
          section_id: employee.section_name && employee.section_id,
          contract_id: employee.contract.code && employee.contract_id,
          activity_start: employee.activity_start,
          activity_end: employee.activity_end,
          mail: employee.mail,
        },
        hiddenEmployeeData: {
          id: employee.id,
          is_active: employee.is_active,
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
        },
      }));
      // כל העובדים
    setAllEmployees(employeeArray);
    // הסינון
    setEmployees(employeeArray);
  };

  // להביא עובדים
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/employees");
      const data = response.data;
      console.log(data, "data from employees");
      formatData(data);
    } catch (error) {
      console.error("error fetching employees: ", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [showAllEmployees]);

  // להציג את כל העובדים או רק את הקיימים
  const handleShowAllEmployees = () => {
    setShowAllEmployees(!showAllEmployees);
    setFilterData(null);
  };

  // console.log(employees,"כל העובדים");

  // const formatDepartmentData = (data) => {
  //   const formatted = data.reduce((acc, company) => {
  //     acc[company.name] = company.branches.map((branch) => {
  //       return { [branch.name]: branch.sections || [] };
  //     });
  //     return acc;
  //   }, {});

  //   // console.log(formatted);
  // };

  // פופאפ לעובד חדש
  const handleAddingNewEmployee = () => {
    setAddNewEmployee(true);
  };

  {
    /*מחיקת עובד*/
  }
  const deleteEmployeeById = async (employee) => {
    try {
      setDeleteEmployee(employee);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete employee: ", error);
    }
  };

  {
    /*ראש הטבלה*/
  }

  const headers = {
  "מספר עובד": {
    field: "employee_number",
    type: "string",
  },
  "שם פרטי": {
    field: "first_name",
    type: "string",
  },
  "שם משפחה": {
    field: "surname",
    type: "string",
  },
  "חייל / אזרח": {
    field: "solider_civilian",
    type: "string",
  },
  "מחלקה / יחידה": {
    field: "department_id",
    type: "string",
  },
  "ענף": {
    field: "branch_id",
    type: "string",
  },
  "מדור": {
    field: "section_id",
    type: "string",
  },
  "סוג הסכם": {
    field: "contract_id",
    type: "string",
  },
  "תחילת פעילות": {
    field: "activity_start",
    type: "date",
  },
  "סיום פעילות": {
    field: "activity_end",
    type: "date",
  },
  "מייל": {
    field: "mail",
    type: "string",
  },
};

  const handlePopUpFilter = () => {
    setFilterPopUp(!filterPopUp);
  };

  // מסנן את העובדים לפי בחירה
  const filterSearch = (data) => {
    setFilterData(data);
  };

  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="w-full flex flex-col gap-y-4 h-full">
      <div className="flex  w-full justify-between mx-4">
        <div className="w-1/2">
          <Search
            searchItems={allEmployees}
            setItems={setEmployees}
            formatData={formatData}
            addNew={handleAddingNewEmployee}
            textBtn={" הוסף עובד"}
            addImage={imageAdd}
            searchText={"חיפוש לפי מספר עובד / שם עובד"}
          />
        </div>
        <div className="flex gap-3">
          <div
            onClick={handleShowAllEmployees}
            className={clsx(
              `flex px-4 text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full`,
              {}
            )}
          >
            <div>
              {showAllEmployees ? "לחיצה תציג רק את הפעילים" : "לחיצה תציג את כל העובדים"}
            </div>
          </div>
          <div
            onClick={handlePopUpFilter}
            className="ml-5 relative  flex text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full"
          >
            <div className="px-4 flex gap-2  truncate">
              <Image
                src={"/filter.svg"}
                width={15}
                height={15}
                alt="download"
              />
              <div>סינון</div>
            </div>

            {filterPopUp && (
              <PopupFilterEmployees
                setFilterPopUp={setFilterPopUp}
                filterPopUp={filterPopUp}
                filterSearch={filterSearch}
                closeFilter={setFilterPopUp}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </div>
        </div>
      </div>

      <div className=" dirLtr  rounded-xl">
        <div className=" h-full ">
          <Tables
          data={showEmployeesOrFilter}
          afterUpdate={fetchEmployees}
          headTable={Object.keys(headers)}
          headers={headers}
          deleteRowObj={deleteEmployeeById}
          />
          {/* <Table
            data={showEmployeesOrFilter}
            headTable={headTable}
            deleteEmployeeById={deleteEmployeeById}
          /> */}
        </div>
        <Toaster position="top-center" />
      </div>
      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={deleteEmployee}
          showPopup={setShowConfirmation}
          headerText={`העברת עובד למצב "לא פעיל"`}
          messageText={"האם אתה בטוח שאתה רוצה להקפיא את העובד"}
          btnText={"המשך"}
          urlPage={`/employees`}
        />
      )}

      {addNewEmployee && (
        <AddNewEmployee
          setAddNewEmployee={setAddNewEmployee}
          setEmployees={setEmployees}
          fetchEmployees={fetchEmployees}
        />
      )}
    </div>
  );
}
