import React from "react";
import NewRequirement from "../../components/financialRequirements/NewRequirement";
import Table from "@/app/components/financialRequirements/Table";
export default function page() {
  const headers = [
    "מספר משימה",
    "שם ניסוי",
    "שם ניסוי נושא",
    "מדור",
    "לקוח",
    "סטטוס מטפל",
    "סטטוס",
  ];
  const data = [
    {
      task_number: "9988776655",
      experiment_name: "ניסוי מתקדם",
      officer_name: "רס”ן רועי פרץ",
      department: "מדור חדשנות",
      handler: "רועי פרץ",
      active: true,
      task_status: "חדשה",
    },
    {
      task_number: "4455667788",
      experiment_name: "ניסוי טכנולוגי",
      officer_name: "סרן יעקב רז",
      department: "מדור פיתוח",
      handler: "יעקב רז",
      active: false,
      task_status: "מבוטלת",
    },
    {
      task_number: "5566778899",
      experiment_name: "ניסוי עמידות",
      officer_name: "רנ”ג משה שמש",
      department: "מדור לוגיסטיקה",
      handler: "משה שמש",
      active: true,
      task_status: "עודכנה משימה",
    },
    {
      task_number: "1122334455",
      experiment_name: "ניסוי אלקטרוני",
      officer_name: "רס”ן אבי לוי",
      department: "מדור מערכות",
      handler: "אבי לוי",
      active: false,
      task_status: "נדחתה רמ”ד",
    },
    {
      task_number: "9876543210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל דוד כהן",
      department: "מדור הנדסה",
      handler: "דוד כהן",
      active: true,
      task_status: "ממתין לאישור גמ”ש",
    },
    {
      task_number: "1234567890",
      experiment_name: "שם ניסוי 1",
      officer_name: "רנ”ג ישראל ישראלי",
      department: "מדור מדור ממדור",
      handler: "ישראל ישראלי",
      active: true,
      task_status: "נפתחה משימה",
    },
  ];
  // console.log(headers);

  return (
    <div className="px-10  py-2 h-full dirLtr overflow-y-auto">
      {/* <Table data={data} headTable={headers} /> */}

      <NewRequirement />
    </div>
  );
}
