import React from "react";

export default function SelectBox({ onSelect }) {
  const options = ["מחלה", "מחלה חלקי", "מחלה ממארת בן זוג חלקי"];

  return (
    <div className=" absolute right-5 top-11 z-10 bg-white text-[#002A78] p-2 rounded shadow-md w-52">
      {options.map((option, index) => (
        <div
          key={index}
          className="p-2 z-10  cursor-pointer  rounded hover:bg-[#002A78] hover:text-white "
          onClick={(e) => {
            e.stopPropagation()
            onSelect(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

// {showSelectBox === entryIndex && (
//   <div className="absolute top-8 z-10">
//     <SelectBox
//       onSelect={(option) =>
//         handleSelect(option, entryIndex)
//       }
//     />
//   </div>
// )}
