import SettingsSearch from "@/app/components/settings/SettingsSearch";

import TabieSettings from "@/app/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function agreements() {
  const headers = [
    "קוד הסכם",
    " שם הסכם",
    "שעת כניסה ",
    "שעת יציאה",
    "מגבלת שעות נוספות",
    "כמות שעות",
    "הפסקה",
  ];
  
  

 
  const agreement = [
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
      ac: "חג",
      actty: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    
  ];
  return (
    <>
    <div className="h-full w-full flex flex-col ">
       <div className="flex justify-between items-center w-full pb-2">
        <div className="w-full font-bold text-4xl">ניהול קודי פעילות</div>
        <SettingsSearch/>
         </div>
        
    <TabieSettings
    data={agreement}
    headers={headers}/>
    
    </div>
    </>
      );
}