import React, { useState } from "react";
import RowDisplay from "./RowDisplay";
import { useFieldArray } from "react-hook-form";

export default function WorkingHours({ register, control, errors }) {
  const headersAndInputs = [
    { header: "שם מדור ", key: "Mname", placeholder: "יש לבחור" },
    { header: " שלב בניסוי", key: "requiredHours", placeholder: "0" },
    { header: "שעות ביממה", key: "unitCost", placeholder: "0" },
    { header: "ימים", key: "unitCost", placeholder: "0" },
    { header: "אנשים ", key: "unitCost", placeholder: "0" },
    { header: "כמות שעות נדרשת ", key: "unitCost", placeholder: "0" },
    { header: " עלות ליחידה ", key: "unitCost", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "00:00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workingHours",
  });

  return (
    <RowDisplay
      register={register}
      title={"workingHours"}
      headers={headersAndInputs}
      control={control}
      fields={fields}
      append={append}
      remove={remove}
      errors={errors}
      grid={10}
    />
  );
}
