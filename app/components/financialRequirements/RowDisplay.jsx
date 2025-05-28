import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function RowDisplay({
  title,
  headers,
  register,
  control,
  fields,
  append,
  remove,
  grid,
  errors,
}) {
  return (
    <div>
      <div className="bg-white  m-3 border border-[#002A78]/30 flex flex-col gap-2">
        <div
          className={`bg-blue_color p-2 pr-5 text-white grid ${
            grid ? "grid-cols-8" : "grid-cols-6"
          }`}
        >
          {headers.map((head, index) => (
            <div key={`${head.name},${index}`}>{head.header}</div>
          ))}
          {/* <div>פעולות</div> */}
        </div>

        {Array.isArray(fields) &&
          fields.map((field, rowIndex) => (
            <div
              key={field.id}
              className={`grid items-center ${
                grid ? "grid-cols-8" : "grid-cols-6"
              }`}
            >
              {console.log(field)}
              {headers.map((head, colIndex) => (
                <div key={colIndex} className="">
                  <input
                    {...register(`${title}[${rowIndex}].${head.key}`, {
                      required: `${head.header} is required`,
                    })}
                    defaultValue={field[head.key]}
                    type="text"
                    className="border w-full"
                  />
                  {errors?.[title]?.[rowIndex]?.[head.key] && (
                    <p className="text-red-500 text-sm">
                      {errors[title][rowIndex][head.key].message}
                    </p>
                  )}
                </div>
              ))}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => remove(rowIndex)}
                  className="text-red-500"
                >
                  {/* <FaTrash /> */}
                </button>
              </div>
            </div>
          ))}
      </div>
      <button
        type="button"
        onClick={() =>
          append(Object.fromEntries(headers.map((h) => [h.key, ""])))
        }
        className=" w-fit px-3 py-1.5 rounded-full text-white mt-2 bg-blue_color "
      >
        שורה חדשה
      </button>
    </div>
    // <div>
    //   <div className="bg-white p-2 flex flex-col">
    //     <div
    //       className={`  bg-blue_color text-white grid ${
    //         grid ? "grid-cols-8" : "grid-cols-6"
    //       }`}
    //     >
    //       {headers.map((head, index) => (
    //         <div key={`${head.name},${index}`}>{head.header}</div>
    //       ))}
    //     </div>
    //     <div className={`grid ${grid ? "grid-cols-8" : "grid-cols-6"}`}>
    //       {headers.map((head, index) => (
    //         <div key={index}>
    //           <input
    //             {...register(`${title}.${head.key}`, {
    //               required: `${head.header} is required`,
    //             })}
    //             type="text"
    //             className=" border w-full"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //     <div></div>
    //   </div>
    // </div>
  );
}

// // import React from "react";
// import Image from "next/image";

// // export default function InputRow({ inputs, headers, deleteRow }) {

// //   return (
// //     <div className={`grid grid-cols-${headers.length + 1} pr-3`}>
// //       {headers.map((header, key) => (

// //         <div
// //         key={key}
// //         className={`${
// //           header.header === "פירוט" ? "col-span-2" : ""
// //         } pl-2 pr-0 py-2`}
// //         >
// //           {header.header === "פירוט" ? (
// //             <div className="flex gap-2">

// //               <textarea
// //                 className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none w-full h-[26px] text-[#002A78]  focus:bg-[#EBEEF5] rounded-lg pr-2"
// //                 value={inputs[key]} // Bind value of textarea to inputs array
// //                 onChange={handelChange}
// //               />
// //               <button onClick={deleteRow}>
// //                 {" "}
// //                 {/* Delete button */}
// //                 <Image src="./x.svg" alt="x" width={15} height={15} />
// //               </button>
// //             </div>
// //           ) : (
// //             <input
// //               type="text"
// //               placeholder={inputs[key]} // Set placeholder for input
// //               value={inputs[key]} // Bind value of input to inputs array
// //               className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none  focus:bg-[#EBEEF5] text-[#002A78] focus:placeholder-[#002A78] shadow-input w-full rounded-lg pr-2"
// //               onChange={handelChange}
// //             />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// import React from "react";
// // import InputRow from " ./InputRow";

// export default function RowDisplay({ headers, inputs, onInputChange }) {
//   return (
//     <div>

//     </div>
//   // <div>
//   //       {/* ... rest of your code ... */}

//   //       {headers.map((row, rowIndex) => (
//   //         <div
//   //           className={`grid grid-cols-${headers.length + 1} pr-3`}
//   //           key={rowIndex}
//   //         >
//   //           {/* ... render input fields ... */}
//   //           {row.map((fields, index) => (
//   //             <div
//   //               key={index}
//   //               className={`${
//   //                 fields.header === "פירוט" ? "col-span-2" : ""
//   //               } pl-2 pr-0 py-2 bg-blue_color`}
//   //             >
//   //               <div className="">{fields.header}</div>
//   //               {fields.header === "פירוט" ? (
//   //                 <div className="flex gap-2">
//   //                   <textarea
//   //                     className="border border-[#002A7842]  focus:border-[#8497BE] focus:bg-[#8497BE] focus:outline-none w-full h-[26px] text-[#002A78]   rounded-lg pr-2"
//   //                     onChange={(e) => handleChange(fields.key, e.target.value)}
//   //                     value={row.value} // Bind to row.value
//   //                   />
//   //                   <button onClick={() => deleteRow(rowIndex)}>
//   //                     <Image src="./x.svg" alt="x" width={15} height={15} />
//   //                   </button>
//   //                 </div>
//   //               ) : (
//   //                 <input
//   //                   type="text"
//   //                   placeholder={fields.placeholder}
//   //                   value={row.value} // Bind to row.value
//   //                   className="border border-[#002A7842] focus:border-[#8497BE] focus:outline-none  focus:bg-[#8497BE] text-[#002A78] focus:placeholder-[#002A78] shadow-input w-full rounded-lg pr-2"
//   //                   onChange={(e) => handleChange(fields.key, e.target.value)}
//   //                 />
//   //               )}
//   //             </div>
//   //           ))}
//   //         </div>
//   //       ))}
//   //       <div
//   //         className={`grid grid-cols-${headers.length + 1} Class
//   // Properties
//   // justify-items-start mr-6 font-smibold`}
//   //       >
//   //         {headers.map((header, index) => {
//   //           let content = null;

//   //           if (header.header === "שם ענף") {
//   //             content = 'סה"כ שעות המתנה';
//   //           } else if (index === 0) {
//   //             content = 'סה"כ';
//   //           } else if (
//   //             [
//   //               "עלות כוללת",
//   //               "כמות ימים נדרשת",
//   //               "כמות שעות נדרשת",
//   //               'סה"כ',
//   //             ].includes(header.header)
//   //           ) {
//   //             content = header.placeholder;
//   //           }

//   //           return <div key={index}>{content}</div>;
//   //         })}
//   //       </div>

//   //       {/* Add New Row Button */}
//   //       <div className="flex justify-end">
//   //         <button
//   //           className="text-white bg-blue_color rounded-full px-5 py-1"
//   //           onClick={addNewRow}
//   //         >
//   //           שורה חדשה
//   //         </button>
//   //       </div>
//   //</div>
//     );
//     // <div>
//     //   {/* <InputRow
//     //     headers={headers}
//     //     inputs={inputs} // Pass data object for the row
//     //     onInputChange={onInputChange} // Handle updates in parent
//     //   /> */}
//     // </div>
//     // );
// }
