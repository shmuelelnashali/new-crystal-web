import React from "react";

export default function SelectBox({ onSelect, onDropdownClick}) {
  const options = ["מחלה", "מחלה חלקי", "מחלה ממארת בן זוג חלקי"];

  return (
    <div
   className=" absolute right-5 top-11 z-10 bg-white text-[#002A78] p-2 rounded shadow-md w-52"
    onMouseDown={onDropdownClick} 
    >
      {options.map((option, index) => (
        <div
          key={index}
          className="p-2 z-10  cursor-pointer  rounded hover:bg-[#002A78] hover:text-white "
          onClick={() =>  onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
 
