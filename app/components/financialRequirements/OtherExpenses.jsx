import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function OtherExpenses({ register }) {
  const headersAndInputs = [
    { header: "שם משאב", key: "resourceName", placeholder: "יש לבחור" },
    { header: "כמות משאב נדרשת", key: "requiredResource", placeholder: "0" },
    { header: "שעות ביממה", key: "dailyHours", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "0.00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];

  return (
    <RowDisplay
      register={register}
      title={"otherExpenses"}
      headers={headersAndInputs}
    />
  );
}
