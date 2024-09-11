import SettingsSideBar from "@/app/components/settings/SettingsSideBar";

import React from "react";

export default function SettingsLayout({ children }) {
  return (
    <div className="h-full w-full px-4 py-1 overflow-hidden ">
      <div className="w-full h-full  gap-6 flex ">
        <SettingsSideBar />

        {children}
      </div>
    </div>
  );
}
