import { useFieldArray } from "react-hook-form";
import RowDisplay from "./RowDisplay";

export default function PositionDays({ register, control, errors }) {
  const headersAndInputs = [
    { header: "שם", key: "name", placeholder: "יש לבחור" },
    { header: "כמות ימים נדרשת", key: "requiredDays", placeholder: "0" },
    { header: "עלות ליחידה", key: "unitCost", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "00:00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];
  const { fields, append, remove } = useFieldArray({
    control,
    name: "positionDays",
  });
  return (
    <RowDisplay
      title="positionDays"
      headers={headersAndInputs}
      register={register}
      control={control}
      fields={fields}
      append={append}
      remove={remove}
      errors={errors}
    />
  );
}
