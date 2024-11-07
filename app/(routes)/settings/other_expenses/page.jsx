"use client";
import SettingsSearch from "@/app/components/settings/SettingsSearch";

import TabieSettings from "@/app/components/settings/TableSettings";
import Image from "next/image";
import React, { useState } from "react";

export default function activity() {
  const [data, setData] = useState([
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
  ]);
  const [add, setAdd] = useState();
  const headers = ["#", "שם משאב", "מחיר צבאי", 'מחיר משהב"ט', 'מחיר סיב"ט'];

  const addRow = () => {
    const row = {
      number: "",
      name: null,
      armyPrice: null,
      price1: null,
      price2: null,
    };
    setData((prev) => [row, ...prev]);
    setAdd(0);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול הוצאות אחרות</div>
          <SettingsSearch addRow={addRow} />
        </div>

        <TabieSettings data={data} headers={headers} add={add} />
      </div>
    </>
  );
}
