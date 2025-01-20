// import clsx from "clsx";
// import Image from "next/image";

// export function EntryRow({
//   entry,
//   entryIndex,
//   totalEntries,
//   newEntriesCount,
//   onAdd,
//   onDelete,
//   isNewEntry,
//   editingRowIndex,
//   rowIndex,
//   handleChange,
// }) {
//   return (
//     <div
//     className="group relative w-full flex   truncate">
//       {Object.entries(entry).map(([entryKey, entryValue]) =>
//         editingRowIndex !== rowIndex ? (
//           <div
//             key={entryKey}
//             className={clsx(
//               `w-full flex items-center justify-center py-2 truncate`,
//               {
//                 "bg-[#A7BFE826]/15 ": entryKey !== "activity_code",
//                 "border-t  border-t-[#A7BFE826]/15 ":
//                   isNewEntry && entryKey !== "activity_code",
//               }
//             )}
//           >
//             {entryValue}
//           </div>
//         ) : (
//           <div
//           key={entryKey}
//             className={clsx(
//               `h-full py-2 px-3 w-full flex items-center justify-center`,
//               {
//                 "px-3 ": entryKey === "activity_code",
//                 "bg-[#A7BFE826]/15 ": entryKey !== "activity_code",
//               }
//             )}
//           >
//             <div>
//               {entryKey !== "activity_code" ? (
//                 <input
//                   className="rounded-full outline-none border border-blue_color w-full text-center  flex items-center justify-center"
//                   type="text"
//                   value={entryValue || "-"}
//                   onChange={(e) =>
//                     handleChange(rowIndex, entryKey, e.target.value)
//                   }
//                 />
//               ) : (
//                 // <div className=" bg-white hover:cursor-pointer text-right rounded-lg py-1  flex justify-between w-full items-center mt-1">
//                   <div
//                     className={`px-3  bg-white flex gap-4 border border-blue_color rounded-full justify-between relative truncate w-full`}
//                   >
//                     <div >{entryValue || '-'}</div>
//                     <Image
//                       src="/downArrow.svg"
//                       width={10}
//                       height={10}
//                       alt="arrow"
//                       className=""
//                     />
//                   </div>
//                 // </div>
//                 // <div className="relative flex ">
//                 //  <input
//                 //   className="rounded-full  outline-none border border-blue_color w-full text-center  flex items-center justify-center"
//                 //   type="text"
//                 //   value={entryValue || "-"}
//                 // />
//                 // <Image className="absolute left-2  top-1/2 transform -translate-y-1/2"
//                 // src={'/downArrow.svg'} width={10} height={10}  alt="arrow"/>
//                 // </div>
//               )}
//             </div>
//           </div>
//         )
//       )}

//       {entryIndex === totalEntries - 1 && newEntriesCount < 2 && (
//         <Image
//           src="/plus.svg"
//           width={20}
//           height={20}
//           alt="Add Entry"
//           onClick={onAdd}
//           className="absolute top-2.5 left-2 hover:cursor-pointer hidden group-hover:block"
//         />
//       )}

//       {isNewEntry && (
//         <Image
//           src="/redX.svg"
//           width={20}
//           height={20}
//           alt="Delete Entry"
//           onClick={onDelete}
//           className="absolute top-2.5 right-2 hover:cursor-pointer justify-center hidden group-hover:block"
//         />
//       )}
//     </div>
//   );
// }
