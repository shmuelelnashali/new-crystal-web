import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function InputEmployee({
  labelName,
  label,
  formData,
  handleInputChange,
  toggle,
  setToggle,
}) {
  const getThe_ADFS = [
    "first_name",
    "surname",
    "solider_civilian",
    "branch_id",
    "department_id",
  ];
  return (
    <div className="relative w-full">
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
        value={formData||''}
        onChange={(e) => {
          //   setInputValue(e.target.value);
          handleInputChange(labelName, e.target.value);
        }}
        className={clsx(
          `w-full border  
      [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[#99AAC9]
       rounded-lg px-3 py-1 `,
          {
            "cursor-pointer": labelName === "solider_civilian",
          }
        )}
        required
        readOnly={labelName === "solider_civilian"}
        onClick={() => {
          if (labelName === "solider_civilian") {
            setToggle(!toggle);
          }
        }}
      />
      {labelName === "solider_civilian" && (
        <Image
          src="/downArrow.svg"
          width={10}
          height={10}
          alt="arrow"
          className="absolute  left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      )}
      {toggle && labelName === "solider_civilian" && (
        <div className="absolute w-full top-9 px-0.5 py-1 z-10 bg-white border border-gray-300 rounded shadow-lg">
          <div
            onClick={() => {
              handleInputChange(labelName, "חייל"), setToggle(false);
            }}
            className="hover:bg-blue_color rounded-lg pr-2 py-2 text-lg hover:text-white cursor-pointer "
          >
            חייל
          </div>
          <div
            onClick={() => {
              handleInputChange(labelName, "אזרח"), setToggle(false);
            }}
            className="hover:bg-blue_color rounded-lg pr-2 py-2 text-lg hover:text-white cursor-pointer "
          >
            אזרח
          </div>
        </div>
      )}
    </div>
  );
}
