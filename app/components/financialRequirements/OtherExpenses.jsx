import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function OtherExpenses() {
  const [rowData, setRowData] = useState({
    resourceName: "",
    requiredResource: "0",
    dailyHours: "0",
    totalCost: "0.00",
    details: "",
  });

  const headersAndInputs = [
    { header: "שם משאב", key: "resourceName", placeholder: "יש לבחור" },
    { header: "כמות משאב נדרשת", key: "requiredResource", placeholder: "0" },
    { header: "שעות ביממה", key: "dailyHours", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "0.00", sum: true },
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
