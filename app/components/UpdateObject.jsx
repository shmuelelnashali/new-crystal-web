import React, { useRef, useState } from "react";
import Image from "next/image";
import InputDateEmployee from "./employees/InputDateEmployee";
import InputEmployee from "./employees/InputEmployee";
import axios from "../lib/axios";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

export default function UpdateEmployee({
  hiddenEmployeeData,
  setUpdateEmployee,
  updateEmployeeMood,
}) {
  const [formData, setFormData] = useState({
    hiddenEmployeeData: hiddenEmployeeData,
    updateEmployeeMood: updateEmployeeMood,
  });
  // console.log(formData, "eeee");

  const handleInputChange = (labelName, value) => {
    setFormData((prev) => ({
      ...prev,
      updateEmployeeMood: {
        ...prev.updateEmployeeMood,
        [labelName]: value,
      },
    }));
    console.log(formData);
  };

// השדות שנכנסים לעידכון עובד
  const updateEmployee = async () => {
    const formatDate = (date) =>
      date ? format(new Date(date), "yyyy-MM-dd") : null;

    const newEmployee = {
      employee_number: formData.updateEmployeeMood?.employee_number?.toString(),
      first_name: formData.updateEmployeeMood?.first_name?.trim(),
      surname: formData.updateEmployeeMood?.surname?.trim(),
      solider_civilian:
        formData.updateEmployeeMood?.solider_civilian == "אזרח"
          ? "0"
          : formData.updateEmployeeMood?.solider_civilian == "חייל" && "1",
      department_id: Number(formData.updateEmployeeMood?.department_id),
      branch_id: Number(formData.updateEmployeeMood?.branch_id),
      section_id: Number(formData.updateEmployeeMood?.section_id),
      contract_id: Number(formData.updateEmployeeMood?.contract_id),
      activity_start: formatDate(formData.updateEmployeeMood?.activity_start),
      activity_end: formatDate(formData.updateEmployeeMood?.activity_end),
      mail: formData.updateEmployeeMood?.mail,
    };
    // console.log(newEmployee, "the new");

    // אם שדות חסרים
    if (
      Object.values(newEmployee).some(
        (value) => value === null || value === undefined || value === ""
      )
    ) {
      toast.error("חלק מהשדות חסרים");
      return;
    }
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/employees/`,
        newEmployee
      );
      // התראה שעבר בהצלחה
      toast.success(response.data.message);
      setUpdateEmployee(false);
    } catch (error) {
      console.error("שגיאה בעידכון", error);
      // מראה את השגיאה
      toast.error(error.response?.data?.message ||
        "אירעה שגיאה בעת ניסיון לעדכן את העובד");
    }
  };

  // אם בחרת שלא לעדכן עובד
  const cancelUpdate = ()=> toast('בחרת לא לעדכן עובד',
    {
      icon: '👌',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      duration: 1000,
    }
  );

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
        <div className="bg-white rounded-lg p-5 w-3/4 ">
          <div className=" p-4 relative flex items-center justify-center">
            <div
              className="absolute top-0 left-0 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(), setUpdateEmployee(null), cancelUpdate();
              }}
            >
              <Image src={"/x.svg"} width={15} height={15} alt="x" />
            </div>

            <div className="text-xl truncate tracking-wide py-1 font-medium px-5 mb-4 flex justify-center items-center text-white bg-[#002A78] text-center rounded-full">
              עריכת עובד
            </div>
          </div>
          <div className=" grid grid-cols-3 px-5 gap-5">
            {labels.map(({ label, labelName }, index) => (
              <div key={index} className="mb-4 relative">
                <div className="block text-[#002A78] truncate font-bold">
                  {label}
                </div>
                {labelName.includes("activity") ? (
                  <InputDateEmployee
                    labelName={labelName}
                    formData={formData.updateEmployeeMood[labelName]}
                    handleInputChange={handleInputChange}
                    min={
                      labelName === "activity_end"
                        ? formData.updateEmployeeMood["activity_start"]
                        : null
                    }
                    max={
                      labelName === "activity_start"
                        ? formData.updateEmployeeMood["activity_end"]
                        : null
                    }
                  />
                ) : (
                  <InputEmployee
                    labelName={labelName}
                    label={label}
                    formData={formData.updateEmployeeMood[labelName]}
                    handleInputChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <div
              onClick={(e) => {
                e.stopPropagation(), setUpdateEmployee(null), cancelUpdate()
              }}
              className="border hover:cursor-pointer border-[#002A78] ml-3 rounded-2xl px-3 p-1"
            >
              ביטול
            </div>
            <div
              onClick={updateEmployee}
              className="flex hover:cursor-pointer bg-[#002A78] gap-2 pl-4 px-2 text-white rounded-2xl p-1"
            >
              <Image src={"/edit.svg"} width={15} height={15} alt="edit" />
              <div>עריכת עובד</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const labels = [
  { label: "מספר עובד", labelName: "employee_number" },
  { label: "שם פרטי", labelName: "first_name" },
  { label: "שם משפחה", labelName: "surname" },
  { label: "חייל/אזרח", labelName: "solider_civilian" },
  { label: "תאריך התחלה", labelName: "activity_start" },
  { label: "תאריך סיום", labelName: "activity_end" },
  { label: "ענף", labelName: "branch_id" },
  { label: "מחלקה", labelName: "department_id" },
  { label: "מדור", labelName: "section_id" },
  { label: "סוג הסכם", labelName: "contract_id" },
  { label: "מייל", labelName: "mail" },
];
