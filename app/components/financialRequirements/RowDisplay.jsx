// import React from "react";
// import Image from "next/image";

// export default function InputRow({ inputs, headers, deleteRow }) {

//   return (
//     <div className={`grid grid-cols-${headers.length + 1} pr-3`}>
//       {headers.map((header, key) => (

//         <div
//         key={key}
//         className={`${
//           header.header === "פירוט" ? "col-span-2" : ""
//         } pl-2 pr-0 py-2`}
//         >
//           {header.header === "פירוט" ? (
//             <div className="flex gap-2">

//               <textarea
//                 className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none w-full h-[26px] text-[#002A78]  focus:bg-[#EBEEF5] rounded-lg pr-2"
//                 value={inputs[key]} // Bind value of textarea to inputs array
//                 onChange={handelChange}
//               />
//               <button onClick={deleteRow}>
//                 {" "}
//                 {/* Delete button */}
//                 <Image src="./x.svg" alt="x" width={15} height={15} />
//               </button>
//             </div>
//           ) : (
//             <input
//               type="text"
//               placeholder={inputs[key]} // Set placeholder for input
//               value={inputs[key]} // Bind value of input to inputs array
//               className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none  focus:bg-[#EBEEF5] text-[#002A78] focus:placeholder-[#002A78] shadow-input w-full rounded-lg pr-2"
//               onChange={handelChange}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import InputRow from "./InputRow";

export default function RowDisplay({ headers, inputs, onInputChange }) {
  return (
    <div>
      <InputRow
        headers={headers}
        inputs={inputs} // Pass data object for the row
        onInputChange={onInputChange} // Handle updates in parent
      />
    </div>
  );
}

