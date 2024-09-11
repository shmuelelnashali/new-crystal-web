import SettingsSearch from "@/app/components/settings/SettingsSearch";
import TabieSettings from "@/app/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = ["#", "שם מלא", "מספר אישי", "הרשאות", ,];

  const activity_code = [
    {
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
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
          <div className="w-full font-bold text-4xl">עמדות במערכת</div>
          <SettingsSearch />
        </div>

        <TabieSettings data={activity_code} headers={headers} />
      </div>
    </>
  );
}
