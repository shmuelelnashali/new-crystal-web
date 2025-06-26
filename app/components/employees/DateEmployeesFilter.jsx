import { da } from "date-fns/locale";
import Image from "next/image";
import React, { useRef } from "react";

export default function DateEmployeesFilter({
  labelName,
  formData,
  setFormData,
}) {
  // מביא את הלוח שנה
   const dateRef = useRef(null);

  //טיפול בשינוי תאריך
  const handleDateChange = (e) => {
    const newValue = e.target.value;
    
    if (labelName === "activity_start") {
      // בדיקה שתאריך ההתחלה לא אחרי תאריך הסיום
      if (formData.activity_end && newValue > formData.activity_end) {
        toast.error("תאריך התחלה לא יכול להיות אחרי תאריך סיום", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
    }

    if (labelName === "activity_end") {
      // בדיקה שתאריך הסיום לא לפני תאריך ההתחלה
      if (formData.activity_start && newValue < formData.activity_start) {
        toast.error("תאריך סיום לא יכול להיות לפני תאריך התחלה", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [labelName]: newValue,
    }));
  };

  // const handleIconClick = () => {
  //   if (labelName === "activity_start") {
  //     dateFromRef.current.showPicker();
  //   } else {
  //     dateToRef.current.showPicker();
  //   }
  // };

  return (
    <div className="w-full relative mt-1">
      <div className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2">
        <Image
          src="/calendar.svg"
          width={20}
          height={20}
          alt="calender"
          onClick={() => dateRef.current?.showPicker()}
        />
      </div>
      <input
        type="date"
        ref={dateRef}
        value={formData[labelName] || ""}
        min={labelName === "activity_end" ? formData.activity_start : undefined}
        max={labelName === "activity_start" ? formData.activity_end : undefined}
        className="w-full border rounded-lg px-3 py-1 text-[#002A78]"
        onChange={handleDateChange}
      />
    </div>
  );
}