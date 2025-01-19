import React from 'react'

export default function InputEmployee({
    labelName,
    label,
    formData,
    handleInputChange
}) {    

  const getThe_ADFS = ["first_name", "surname", "solider_civilian", "branch_id", "department_id", ]
  return (
    <input
    // type={numbersOnly.includes(labelName) ? "number" : "text"}
    // placeholder={
    //   !valueToEdit
    //     ?
    //      labelName === "Mission_name" ||
    //       labelName === "Mission_number" ||
    //       labelName === "Ktzin_nosse_name"
    //       ? label
    //       : empty.includes(labelName)
    //       ? "-"
    //       : ""
    //     : ""
    // }
    value={formData}
    onChange={(e) => {
    //   setInputValue(e.target.value);
      handleInputChange(labelName, e.target.value);
    }}
    className={`w-full border  
      [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[#99AAC9]
       rounded-lg px-3 py-1 ${getThe_ADFS.includes(labelName)&&"bg-[#EBEEF5] border-[#002A7870]"}`}
    required
    // readOnly={labelName === "createdBy"}
  />
  )
}
