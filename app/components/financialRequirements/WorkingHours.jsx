import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function WorkingHours() {
  const [rowData, setRowData] = useState({
    name: "",
    requiredHours: "0",
    unitCost: "0",
    totalCost: "00:00",
    details: "",
  });

  const headersAndInputs = [
    { header: "שם", key: "name", placeholder: "יש לבחור" },
    { header: "כמות שעות נדרשת", key: "requiredHours", placeholder: "0" },
    { header: "עלות ליחידה", key: "unitCost", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "00:00", sum: true },
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
