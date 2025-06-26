// 'use client'
// import React from 'react'
// import { useForm } from 'react-hook-form';

// export default function page() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <div className=' '>
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input  className=' border'{...register('firstName')} />
//       <input {...register('lastName', { required: true })} />
//       {errors.lastName && <p>Last name is required.</p>}
//       <input {...register('age', { pattern: /\d+/ })} />
//       {errors.age && <p>Please enter number for age.</p>}
//       <input type="submit" />
//     </form></div>
//   );
// }

  



import React from "react";
import NewRequirement from "../../components/financialRequirements/NewRequirement";
import Table from "@/app/components/financialRequirements/Table";
import toast, { Toaster } from "react-hot-toast";
// import MissionTable from "@/app/components/missions/Tables";
import Tables from "@/app/components/missions/Tables";
import FilterMission from "@/app/components/missions/FilterMission";
import { isEqual, isWithinInterval, parse, set } from "date-fns";
import Image from "next/image";
import { se } from "date-fns/locale";
import PopupDelete from "@/app/components/PopupDelete";
import Search from "@/app/components/ui/Search";
export default function page() {
  const data = [
    {
      task_number: "9988776655",
      experiment_name: "ניסוי מתקדם",
      officer_name: "רס”ן רועי פרץ",
      department: ["מדור 99", "מדור 01"],
      handler: "רועי פרץ",
      active: true,
      task_status: "חדשה",
    },
    {
      task_number: "4455667788",
      experiment_name: "ניסוי טכנולוגי",
      officer_name: "סרן יעקב רז",
      department: ["מדור 65", "מדור 98"],
      handler: "יעקב רז",
      active: false,
      task_status: "מבוטלת",
    },
    {
      task_number: "5566778899",
      experiment_name: "ניסוי עמידות",
      officer_name: "רנ”ג משה שמש",
      department: ["מדור 564", "מדור 6455"],
      handler: "משה שמש",
      active: true,
      task_status: "עודכנה משימה",
    },
    {
      task_number: "1122334455",
      experiment_name: "ניסוי אלקטרוני",
      officer_name: "רס”ן אבי לוי",
      department: ["מדור 44", "76"],
      handler: "אבי לוי",
      active: false,
      task_status: 'נדחתה רמ"ד',
    },
    {
      task_number: "9876543210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל דוד כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "דוד כהן",
      active: true,
      task_status: 'ממתין לאישור גמ"ש',
    },
    {
      task_number: "9876773210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל משה כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "משה כהן",
      active: true,
      task_status: 'ממתין לאישור רמ"ד',
    },
    {
      task_number: "9876773210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל משה כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "משה כהן",
      active: true,
      task_status: 'ממתין לאישור תו"פ',
    },
    {
      task_number: "1234567890",
      experiment_name: "שם ניסוי 1",
      officer_name: "רנ”ג ישראל ישראלי",
      department: ["מדור 3", "מדור 32"],
      handler: "ישראל ישראלי",
      active: true,
      task_status: "נפתחה משימה",
    },
  ];
  console.log(headers);

  const handlePopUpFilter = () => {
    setFilterPopUp(!filterPopUp);
  };

  // מסנן את המשימות לפי בחירה
  const filterSearch = (formData) => {
    setFilterData(formData);
  };

  const closeAndResetFilter = () => {
    setFilterPopUp(false);
    setFilterData(null);
    setFormData({});
    toast(`הסינון בוטל`, {
      icon: "✅",
      duration: 1500,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const deleteMissionById = async (mission) => {
    try {
      setDeleteMission(mission);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete mission: ", error);
    }
  };

  const imageAdd = (
      <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
    );

  return (
    <div className=" py-2 h-full dirLtr overflow-y-auto">
      {/* <Table data={data} headTable={headers} /> */}

       <NewRequirement /> 
    </div>
  );
}

const labels = [
  { label: "מדור", labelName: "department" },
  { label: "שם קצין נושא", labelName: "officer_name" },
  { label: "סטטוס", labelName: "task_status" },
];
