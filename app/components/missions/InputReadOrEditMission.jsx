import React, { useState } from "react";
import InputEditMission from "./InputEditMission";
import { format, parseISO } from "date-fns";
import { formatDate } from "@/app/util/dateFormat";

export default function InputReadOrEditMission({ clickToEdit, formData, setFormData, label, labelName }) {
  // const formatDate = (dateStr) => {
  //   if (!dateStr || !dateStr.includes("-")) return dateStr;
  //   try {
  //     return format(parseISO(dateStr), "dd/MM/yyyy");
  //   } catch (error) {
  //     console.error("Invalid date format:", error);
  //     return dateStr;
  //   }
  // };

  return (
    <>
      {!clickToEdit ? (
        <div className="w-full border bg-[#EBEEF5] rounded-lg px-3 py-1">
          {labelName.includes("date") 
            ? formatDate(formData[labelName])
            : labelName === "Sections"
            ? (
              <div className="flex gap-2 flex-wrap">
                {Array.isArray(formData[labelName]) 
                  ? formData[labelName].map((section, index) => (
                    <span key={index} className="bg-blue_color text-white px-2 py-1 rounded">
                      {section}
                    </span>
                  ))
                  : formData[labelName]
                }
              </div>
            )
            : formData[labelName]
          }
        </div>
      ) : (
        <InputEditMission
          formData={formData}
          setFormData={setFormData}
          label={label}
          labelName={labelName}
        />
      )}
    </>
  );
}
