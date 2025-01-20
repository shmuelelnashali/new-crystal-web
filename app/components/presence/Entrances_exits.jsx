import Image from "next/image";
import React, { useState } from "react";
import ToggleCode from "./ToggleCode";

export default function Entrances_exits({
  val,
  key,
  index,
  editRowIndex,
  setEditRowIndex,
  handleInputChange,
}) {
  //   console.log(val, "val");
  //   const [editRowIndex, setEditRowIndex] = useState(null);

  const [toggleCode, setToggleCode] = useState(false);

  return (
    <>
      {val.map((entry, index) => (
        <div key={index} className="group relative w-full col-span-3 flex ">
          {Object.entries(entry).map(([k, v], index) => (
            <div
              className={`w-full flex items-center justify-center ${
                k !== "activity_code" && " bg-[#A7BFE826]/15"
              }`}
              key={k}
            >
              {v}
            </div>
          ))}
          <Image
            src="/plus.svg"
            width={22}
            height={22}
            alt="Add Entry"
            className="absolute top-2 left-2 hidden group-hover:block"
          />
        </div>
      ))}
    </>
  );
}
// {val.map((entry, i) => (
//      <div> {entry}</div>
// //   <div
// //     onClick={() => setEditRowIndex(index)}
// //     key={i}
// //     className={`flex  justify-between items-center  w-full  `}
// //   >
// //     {editRowIndex === index ? (
// //       <>
// //         {/* Input for activity_code */}
// //         <div
// //           onClick={() => setToggleCode(!toggleCode)}
// //           className=" w-full flex justify-center text-center"
// //         >
// //             <div className="relative w-[80%]">
// //               <input
// //             readOnly
// //             className="w-full relative text-center border hover:cursor-pointer border-blue_color outline-none rounded-full "
// //             value={entry.activity_code || "-"}
// //             onChange={(e) =>

// //                 handleInputChange(index, i, "activity_code", e.target.value)
// //             }
// //           />
// //           {/* Image inside the input on the left */}
// //           <Image
// //             src="/downArrow.svg"
// //             width={10}
// //             height={10}
// //             alt="down arrow"
// //             className="absolute left-2 top-1/2 transform -translate-y-1/2"
// //           />  {toggleCode &&(
// //             <ToggleCode
// //             toggleCode={toggleCode} 
// //             setToggleCode={setToggleCode}
// //             />
// //         )}
// //             </div>

// //         </div>

// //         <div className="bg-[#d9e4f7] h-full w-full flex justify-center">
// //           {/* Input for entrance */}
// //           <input
// //             type="text"
// //             className="w-[80%] text-center border border-blue_color outline-none rounded-full"
// //             value={entry.entrance || ""}
// //             onChange={(e) =>
// //                 handleInputChange(index, i, "entrance", e.target.value)
// //             }
// //           />
// //         </div>
// //         <div className="bg-[#d9e4f7] h-full w-full flex justify-center">
// //           {/* Input for exit */}
// //           <input
// //             type="text"
// //             className="w-[80%] text-center border border-blue_color outline-none rounded-full"
// //             value={entry.exit || ""}
// //             onChange={(e) =>
// //               onUpdate && onUpdate(index, i, "exit", e.target.value)
// //             }
// //           />
// //         </div>
// //       </>
// //     ) : (
// //       <>
// //         {/* Display fields when not in updateMode */}
// //         <div className="w-full h-full flex items-center justify-center">
// //           {entry.activity_code || ""}
// //         </div>
// //         <div className="w-full h-full flex items-center justify-center bg-[#d9e4f7]">
// //           {entry.entrance || "-"}
// //         </div>
// //         <div className="w-full h-full flex items-center justify-center bg-[#d9e4f7]">
// //           {entry.exit || "-"}
// //         </div>
// //       </>
// //     )}

// //   </div>
// // ))}
