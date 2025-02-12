import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function OvertimeAndWaiting() {
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
      headers={headersAndInputs}
      inputs={rowData} // Pass the data object
      onInputChange={handleInputChange} // Handle updates
    />
  );
}
