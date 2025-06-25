import Image from 'next/image';
import React, { useRef } from 'react'
import { parse, format, isValid, parseISO } from "date-fns";


export default function InputDateEmployee({
    labelName,
    formData,
    handleInputChange,
    min,
    max
}) {
  // console.log(formData,"labelName");
  // console.log(min,"min");
  // console.log(max,"max");
  

     const dateRef = useRef(null);

  const handleDateChange = (e) => {
    const newValue = e.target.value;
    
    if (labelName === "activity_start" && max && newValue > max) {
      toast.error("תאריך התחלה לא יכול להיות אחרי תאריך סיום");
      return;
    }

    if (labelName === "activity_end" && min && newValue < min) {
      toast.error("תאריך סיום לא יכול להיות לפני תאריך התחלה");
      return;
    }

    handleInputChange(labelName, newValue);
  };
  return (
    <div className="w-full relative">
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
        className="w-full border rounded-lg px-3 py-1"
        onChange={handleDateChange}
        value={formData || ""}
        min={min}
        max={max}
        required
      />
    </div>
  )
}
