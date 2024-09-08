"use client";
import clsx from "clsx";
import TableRow from "../../components/presence/TableRow";
import { useState } from "react";

const initialData = [
  {
    date_time: "20-10-1998",
    employee_number: "3189254",
    fullName: "aharon",
    entrances_exits: [
      {
        activity_code: 1,
        entrance: "01:30",
        exit: "10:30",
      },
    ],
    contract_id: 25,
    attendance_for_pay: 10,
    waiting_time: 10,
    extra_hours: 2,
    total_attendance_time: "12",
    employee_isActive: 1,
    event: "monday",
  },
  {
    date_time: "1978-07-28",
    employee_number: "6126811",
    fullName: "Leo Sauer",
    entrances_exits: [
      {
        activity_code: 3,
        entrance: "01:30",
        exit: "10:30",
      },
    ],
    contract_id: 3,
    attendance_for_pay: 18.5,
    waiting_time: 1.69,
    extra_hours: 0.66,
    total_attendance_time: "19:30",
    employee_isActive: 0,
    event: "Sunday",
  },
];

const headers = [
  "תאריך",
  "מספר עובד",
  "שם מלא",
  "קוד פעילות",
  "כניסה",
  "יציאה",
  "קוד הסכם",
  "סהכ נוכח",
  "נוכח לשכר",
  "ש. המתנה",
  "ש. נוספות",
  "היעדרות לשכר",
  "סטטוס",
  "משימות",
];

const MAXIMUM_ENTRACNES_EXITS_ALLOWED = 3;

export default function page() {
  const [data, setData] = useState(initialData);

  const handelAddEntry = (rowIndex, newEntry) => {
    console.log(newEntry);

    if (
      Object.values(newEntry).every(
        (val) =>
          val === null ||
          val === "" ||
          newEntry.activity_code === "" ||
          (newEntry.entrance === "" && newEntry.exit === "")
      )
    ) {
      return;
    }

    setData((prevData) => {
      // Create a deep copy of the previous state to avoid direct mutation
      const updatedData = prevData.map((item, index) => {
        if (index !== rowIndex) return item;

        if (item.entrances_exits.length === MAXIMUM_ENTRACNES_EXITS_ALLOWED) {
          return item;
        }

        return {
          ...item,
          entrances_exits: [...item.entrances_exits, newEntry],
        };
      });

      console.log(updatedData);
      return updatedData;
    });
  };

  

  return (
    <div>
      <div className="presentTable items-center text-center justify-center py-2 text-white bg-[#002A78] rounded-md">
        {headers.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {data.map((item, index) => (
        <TableRow
          key={index}
          rowIndex={index}
          data={item}
          handelAddEntry={handelAddEntry}
        />
      ))}
    </div>
  );
}
