import Image from "next/image";
import React, { useState } from "react";
import InputDateEmployee from "./InputDateEmployee";
import InputEmployee from "./InputEmployee";
import axios from "@/app/lib/axios";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

export default function AddNewEmployee({
  setAddNewEmployee,
  setEmployees,
  fetchEmployees,
}) {
  const [formData, setFormData] = useState({});

  //   // useEffect(() => {
  //   const postMission = async (newMission) => {
  //     try {
  //       const response = await axios.post(
  //         `http://127.0.0.1:8000/api/employees/`,
  //         newMission
  //       );
  //       setFormData((prev) => [response.data, ...prev]);
  //     } catch (error) {
  //       console.error("שגיאה ביצירת המשימה", error);
  //     }
  //   };
  //   //   postMission();
  //   // }, []);

  const onSubmit = async () => {
    const formatDate = (date) =>
      date ? format(new Date(date), "yyyy-MM-dd") : null;

    const newEmployee = {
      employee_number: formData?.employee_number?.toString(),
      first_name: formData?.first_name?.trim(),
      surname: formData?.surname?.trim(),
      solider_civilian:
        formData?.solider_civilian == "אזרח"
          ? "0"
          : formData?.solider_civilian == "חייל" && "1",
      department_id: Number(formData?.department_id),
      branch_id: Number(formData?.branch_id),
      section_id: Number(formData?.section_id),
      contract_id: Number(formData?.contract_id),
      activity_start: formatDate(formData?.activity_start),
      activity_end: formatDate(formData?.activity_end),
      mail: formData?.mail,
    };
    console.log(newEmployee, "the new");

    //  api בקשת
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/employees/`,
        newEmployee
      );
      //   setEmployees((prev) => [...prev,newEmployee ]);
      toast.success(response.data.message);
      setAddNewEmployee(false);
      fetchEmployees();
    } catch (error) {
      if (error.response?.data) {
        const { message, errors } = error.response.data;
        // שגיאות
        // let errorDetails = `${message}\n`;
        let errorDetails = ``;
        if (errors) {
          errorDetails += Object.entries(errors)
            .map(([field, messages]) => `${messages.join(", ")}`)
            .join("\n");
        }

        // ההודעה עם השגיאות
        toast.error(`שגיאה ביצירת המשימה\n${errorDetails}`);
        return;
      }
      console.error(
        "שגיאה ביצירת המשימה",
        error.response?.data || error.message
      );
    }
  };

  const handleInputChange = (labelName, value) => {
    setFormData((prev) => ({
      ...prev,
      [labelName]: value,
    }));
    console.log(formData);
  };

  const cancelAdding = () =>
    toast("בחרת לא להוסיף עובד", {
      icon: "👌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 1000,
    });

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg p-5 w-3/4 ">
        <div className=" p-4 relative flex items-center justify-center">
          <div
            className="absolute top-0 left-0 hover:cursor-pointer"
            onClick={() => {
              setAddNewEmployee(false), cancelAdding();
            }}
          >
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>

          <div className="text-xl truncate tracking-wide py-1 font-medium px-5 mb-4 flex justify-center items-center text-white bg-[#002A78] text-center rounded-full">
            הוספת עובד
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
                  formData={formData[labelName]}
                  handleInputChange={handleInputChange}
                  min={
                    labelName === "activity_end"
                      ? formData["activity_start"]
                      : null
                  }
                  max={
                    labelName === "activity_start"
                      ? formData["activity_end"]
                      : null
                  }
                />
              ) : (
                <InputEmployee
                  labelName={labelName}
                  label={label}
                  handleInputChange={handleInputChange}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <div
            onClick={() => {
              setAddNewEmployee(false), cancelAdding();
            }}
            className="border hover:cursor-pointer border-[#002A78] ml-3 rounded-2xl px-3 p-1"
          >
            ביטול
          </div>
          <div
            onClick={onSubmit}
            className="flex hover:cursor-pointer bg-[#002A78] gap-2 pl-4 px-2 text-white rounded-2xl p-1"
          >
            <Image src={"/addEmployee.svg"} width={20} height={20} alt="add" />
            <div>הוסף עובד</div>
          </div>
        </div>
      </div>
    </div>
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
