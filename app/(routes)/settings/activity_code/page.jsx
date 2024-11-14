import SettingsSearch from "@/app/components/settings/SettingsSearch";
import SettingsTable from "@/app/components/settings/settingsTable";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = [
    "קוד פעילות",
    "שם קוד פעילות",
    "תאריך התחלה",
    "תאריך סיום",
    "קוד לביא",
  ];

 
  const activity_code = [
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      code_namber: 2,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
  ];
  return (
    <>
    <div className="h-full w-full flex flex-col ">
       <div className="flex justify-between items-center w-full pb-2">
        <div className="w-full font-bold text-4xl">ניהול קודי פעילות</div>
        <SettingsSearch/>
         </div>
        
    <SettingsTable
    data={activity_code}
    headers={headers}/>
    
    </div>
    </>
      );
}
   
