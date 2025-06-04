// "use client";
// import React, { useState } from "react";
// import MissionTable from "../missions/MissionTable";
// import { MoveDown, MoveUp } from "lucide-react";
// import Image from "next/image";
// import Search from "../ui/Search";
// import { formatDate } from "@/app/util/dateFormat";

// export default function Table({ data , headTable, headers, }) {
//   console.log(headTable, "ddd");

//     // העמוד שממיינים אותו ולאיזה כיון
//     const [columnToSortOn, setColumnToSortOn] = useState({
//       index: null,
//       direction: "desc",
//     });
  
//     const dateFieldMapping = {
//       "ת.פתיחה": "Opening_date",
//       "ת.סגירה": "Closing_date"
//     };
  
//     // מיון כל עמודה
//     const sortedData = () => {
//        // אם אין עמודה למיון, נחזיר את המידע המקורי
//     if (columnToSortOn?.index === null) {
//       return data;
//     }
  
//     const columnKey = headTable[columnToSortOn?.index];
//     const columnConfig = headers[columnKey];
  
//     // בדיקה שיש קונפיגורציה תקינה
//     if (!columnConfig || !columnConfig.field) {
//       console.warn(`Missing column configuration for: ${columnKey}`);
//       return data;
//     }
  
//       return [...data].sort((a, b) => {
//         let valueA, valueB;
  
//         if (columnConfig.type === "date") {
//           const dateField = dateFieldMapping[columnKey];
//           valueA = formatDate(a[dateField]);
//           valueB = formatDate(b[dateField]);
          
//           // Convert to string for comparison
//           valueA = String(valueA);
//           valueB = String(valueB);
//         } else {
//           valueA = a[columnConfig.field];
//           valueB = b[columnConfig.field];
    
//           if (columnConfig.type === "number") {
//             valueA = Number(valueA);
//             valueB = Number(valueB);
            
//             // Direct number comparison
//             return columnToSortOn.direction === "desc" 
//               ? valueB - valueA 
//               : valueA - valueB;
//           }
//         }
    
//         // Convert to string for string comparison
//         valueA = String(valueA || '');
//         valueB = String(valueB || '');
    
//         return columnToSortOn.direction === "desc"
//           ? valueB.localeCompare(valueA, "he")
//           : valueA.localeCompare(valueB, "he");
//       });
//     };

//   return (

//     <div className="dirRtl w-full">
//       <div className="pb-7">
//       <div className="w-1/2">
//         <Search/>
//       </div></div>
//       <div className="w-full">
//         {" "}
//         <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
//           <div className="flex w-full bg-blue_color rounded">
//             <div className="w-[60px]"></div>
//             <div
//               className={`text-[20px] grid ${"grid-cols-7"} gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}
//             >
//               {headTable.map((head, index) => (
//                 <div
//                   key={head}
//                   className={`relative truncate flex justify-center items-center  }`}
//                 >
//                   <div className={`truncate`}>{head}</div>

//                   {
//                     <div className="mr-1 flex">
//                       <MoveDown
//                         onClick={() => {
//                           // handleClickArrows(index, "desc");
//                         }}
//                         size={15}
//                         // color={
//                         //   columnToSortOn?.index === index &&
//                         //   columnToSortOn?.direction === "asc"
//                         //     ? "gray"
//                         //     : "white"
//                         // }
//                       />
//                       <MoveUp
//                         onClick={() => {
//                           // handleClickArrows(index, "asc");
//                         }}
//                         size={15}
//                         // color={
//                         //   columnToSortOn?.index === index &&
//                         //   columnToSortOn?.direction === "desc"
//                         //     ? "gray"
//                         //     : "white"
//                         // }
//                       />
//                     </div>
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* <MissionTable data={data} headTable={headTable} /> */}
//       </div>
//       <div className=" w-full   dirRtl">
//         {data.map((mission, index) => (
//           <div
//             key={index}
//             className={`flex w-full  border-b  border-t-[#A7BFE8]/30`}
//           >
//             {console.log(mission)}
//             {/* DELETE BUTTON */}
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 deleteEmployee(mission);
//               }}
//               className={`w-[60px]  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
//             >
//               <Image src={"/trash.svg"} height="20" width="20" alt="trash" />
//             </div>

//             <div
//               className={` py-2 dirRtl grid grid-cols-7  w-full justify-around  font-normal  leading-5  text-base text-blue_color`}
//             >
//               {Object.entries(mission).map(([key, value]) => (
//                 <div key={key} className="flex w-full justify-center items-center ">
//                   {value}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
