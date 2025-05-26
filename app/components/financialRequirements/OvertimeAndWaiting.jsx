import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function OvertimeAndWaiting({ register }) {
  const [rowData, setRowData] = useState({
    branchName: "",
    resourceName: "",
    dailyHours: "0",
    days: "0",
    people: "0",
    total: "0.00",
    details: "",
  });

  const headersAndInputs = [
    { header: "שם ענף", key: "branchName", placeholder: "יש לבחור" },
    { header: "שם משאב", key: "resourceName", placeholder: "יש לבחור" },
    { header: "שעות ביממה", key: "dailyHours", placeholder: "0" },
    { header: "ימים", key: "days", placeholder: "0" },
    { header: "אנשים", key: "people", placeholder: "0" },
    { header: 'סה"כ', key: "total", placeholder: "0.00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];

  const handleInputChange = (updatedRow) => {
    setRowData(updatedRow);
  };

  return (
    <RowDisplay
    grid={"8"}
      register={register}
      title={"overtimeAndWaiting"}
      headers={headersAndInputs}
    />
  );
}
