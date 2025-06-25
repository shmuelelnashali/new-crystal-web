import React from "react";
import RowDisplay from "./RowDisplay";
import { useFieldArray } from "react-hook-form";

export default function OtherExpenses({ register, control, errors }) {
  const headersAndInputs = [
    { header: "שם משאב", key: "resourceName", placeholder: "יש לבחור" },
    { header: "כמות משאב נדרשת", key: "requiredResource", placeholder: "0" },
    { header: "שעות ביממה", key: "dailyHours", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "0.00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];
  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherExpenses",
  });
  return (
    <RowDisplay
      register={register}
      title={"otherExpenses"}
      headers={headersAndInputs}
      control={control}
      fields={fields}
      append={append}
      remove={remove}
      errors={errors}
    />
  );
}
