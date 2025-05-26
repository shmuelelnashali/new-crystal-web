import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function WorkingHours({ register, handleSubmit, onSubmit }) {

  const headersAndInputs = [
    { header: "שם", key: "name", placeholder: "יש לבחור" },
    { header: "כמות שעות נדרשת", key: "requiredHours", placeholder: "0" },
    { header: "עלות ליחידה", key: "unitCost", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "00:00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];


  return (
    <RowDisplay
      register={register}
      title={"workingHours"}
      headers={headersAndInputs}
   
    />
  );
}
