import Image from "next/image";
import React from "react";

export default function TableRow({object, rowIndex,updateRow, setUpdateRow,row, setRow,open, setOpen}) { 
   
  return (
    // <div
    //   key={rowIndex}
    //   className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5"
    // >
    <>
    
      {Object.entries(object).map(([code_key, code_value], index) => (
        <div key={code_key}>
          {/* { console.log(code_key)} */}
          {code_key !== "departments" && code_value}
          {/* {code_key} */}
        </div>
      ))}
      </>
)}