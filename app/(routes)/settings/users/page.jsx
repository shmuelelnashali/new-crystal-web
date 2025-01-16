import SettingsSearch from "@/app/components/settings/SettingsSearch";
import TabieSettings from "@/app/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  // const formatData = (data) => {
  //   const employees = Array.isArray(data) ? data : [data];
  //   const employeeArray = employees
  //     .filter(() =>employee.role !== null)
  //     .map((employee) => ({
  //       employeeToShow: {
  //         employee_number: employee.employee_number,
  //         first_name: employee.first_name,
  //         surname: employee.surname,
  //         solider_civilian:
  //           employee.solider_civilian == "0"
  //             ? "אזרח"
  //             : employee.solider_civilian == "1" && "חייל",
  //         department_id: employee.department_id && employee.department_name,
  //         branch_id: employee.branch_id && employee.branch_name,
  //         section_id: employee.section_id && employee.section_name,
  //         contract_id: employee.contract_id && employee.contract.code,
  //         activity_start: employee.activity_start,
  //         activity_end: employee.activity_end,
  //         mail: employee.mail,
  //       },
  //       updateEmployeeMood: {
  //         employee_number: employee.employee_number,
  //         first_name: employee.first_name,
  //         surname: employee.surname,
  //         solider_civilian:
  //           employee.solider_civilian == "0"
  //             ? "אזרח"
  //             : employee.solider_civilian == "1" && "חייל",
  //         department_id: employee.department_name && employee.department_id,
  //         branch_id: employee.branch_name && employee.branch_id,
  //         section_id: employee.section_name && employee.section_id,
  //         contract_id: employee.contract.code && employee.contract_id,
  //         activity_start: employee.activity_start,
  //         activity_end: employee.activity_end,
  //         mail: employee.mail,
  //       },
  //       hiddenEmployeeData: {
  //         id: employee.id,
  //         is_active: employee.is_active,
  //         employee_number: employee.employee_number,
  //         first_name: employee.first_name,
  //         surname: employee.surname,
  //       },
  //     }));
  //   setAllEmployees(employeeArray);
  //   setEmployees(employeeArray);
  // };
  // const fetchEmployees = async () => {
  //   try {
  //     const response = await axios.get("/employees");
  //     const data = response.data;
  //     formatData(data);
  //   } catch (error) {
  //     console.error("error fetching employees: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEmployees();
  // }, []);
  const headers = ["#", "שם מלא", "מספר אישי", "הרשאות", ,];
  const AddFormFields = [
    {
      name: "prievt_namber",
      label: "מספר אישי",
      placeholder: "מספר אישי",
      value: null,
      require: true,
    },
    {
      name: "full_name",
      label: "שם מלא",
      placeholder: "שם מלא",
      value: null,
      require: true,
    },

    {
      name: "permissions",
      label: "הרשאות",
      placeholder: " הרשאות",
      value: null,
      require: true,
      type: "option",
    },

    {
      name: "Department",
      label: " מחלקות",
      placeholder: "מחלקות ",
      value: null,
      require: true,
      type: "option",
    },
    {
      name: "branch",
      label: "ענפים",
      placeholder: "ענף",
      value: null,
      require: true,
      type: "option",
    },
    {
      name: "section",
      label: " מדורים",
      placeholder: " מדורים",
      value: null,
      require: true,
      type: "option",
    },
  ];

  const users = [
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול משתמשים במערכת </div>
          <SettingsSearch fields={AddFormFields} />
        </div>

        <TabieSettings data={users} headers={headers} />
      </div>
    </>
  );
}
