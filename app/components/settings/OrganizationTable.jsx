"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Organization from "./Organization";

export default function OrganizationTable({ data, headers }) {
  const [openDepartment, setOpenDepartment] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  // Toggle organization departments
  const handleAccordion = (index) => {
    if (selectedOrganization !== index) {
      setSelectedOrganization(index);
        setOpenDepartment(null); // Reset department when selecting a new organization
        setOpenBranch(null); // Reset mador when selecting a new organization
    } else {
      setSelectedOrganization(null); // Close all if clicked again
    }
  };

  // Toggle departments within an organization
  const handleDepartmentToggle = (index) => {
    setOpenDepartment(openDepartment === index ? null : index);

    if (openDepartment !== index) {
      setOpenDepartment(index);
        setOpenBranch(null); // Reset mador when selecting a new department
    } else {
      setOpenDepartment(null); // Close all if clicked again
    }
  };

  // Toggle mador within a department
  const handleBranchToggle = (index) => {
    if (openBranch !== index) {
      setOpenBranch(index);
    } else {
      setOpenBranch(null); // Close all if clicked again
    }
  };

  return (
    <div>
      <div className="flex-1 flex flex-col overflow-hidden rounded-lg">
        <div className="px-2 dirLtr h-full rounded-2xl overflow-auto">
          <div className="dirRtl bg-[#F7F9FD] rounded-lg">
            <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#F7F9FD] w-full">
              <div className="grid grid-cols-9 sticky top-0 rounded-lg p-2 bg-blue_color justify-center">
                {headers.map((header) => (
                  <div
                    key={header}
                    className="text-center truncate font-semibold text-xl"
                  >
                    {header}
                  </div>
                ))}
                <div className="text-center text-xl font-semibold col-end-10">
                  פעולות
                </div>
              </div>
            </div>
            <div className="flex flex-col  text-base">
              <Organization
                data={data}
                selectedOrganization={selectedOrganization}
                handleAccordion={handleAccordion}
                openDepartment={openDepartment}
                handleDepartmentToggle={handleDepartmentToggle}
                openBranch={openBranch}
                handleBranchToggle={handleBranchToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import TableRow from "./TableRow";
// import { Pencil } from "lucide-react";

// export default function OrganizationTable({ data, headers, page }) {
//   const [updateRow, setUpdateRow] = useState();
//   const [row, setRow] = useState();
//   const [open, setOpen] = useState();
//   const handelAcordion = (index) => {
//     if (row !== index) {
//       setOpen(data[index].departments), setRow(index);
//     }
//     if (row === index) {
//       setOpen(null);
//       setRow(null)
//     }
//   };

//   return (
//     <div>
//       <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
//         <div className=" px-2  dirLtr h-full rounded-2xl overflow-auto">
//           <div className=" dirRtl bg-[#EFF3FB] rounded-lg ">
//             <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
//               <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
//                 {headers.map((header, index) => (
//                   <div
//                     key={header}
//                     className=" text-center  truncate font-semibold text-xl"
//                   >
//                     {header}
//                   </div>
//                 ))}
//                 <div className="text-center text-xl font-semibold col-end-10">
//                   פעולות
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col px-2  text-base ">
//               {data.map((object, rowIndex) => (
//                 //
//                 <div
//                   key={rowIndex}
//                   className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5"
//                 >
//                   {/* <TableRow object={object} rowIndex={rowIndex} row={rowIndex} open={open}/> */}
//                   {Object.entries(object).map(
//                     ([code_key, code_value], index) => (
//                       <div key={code_key}>
//                         {code_key !== "departments" && code_value}
//                       </div>
//                     )
//                   )}
//                   <div
//                     onClick={() => {
//                       handelAcordion(rowIndex);
//                     }}
//                     className=" col-end-9 flex justify-end pl-3"
//                   >
//                     <Image
//                       src={"/downArrow.svg"}
//                       width={12}
//                       height={15}
//                       alt={"downArrow"}
//                     />
//                   </div>
//                   <div className="flex  carsor justify-around col-end-10 ">
//                     <div
//                       className={`bg-blue_color border items-center border-blue_color gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
//                       onClick={() => {
//                         setUpdateRow(rowIndex);
//                         console.log(updateRow);
//                       }}
//                     >
//                       <Pencil strokeWidth={1.5} size={15} />
//                       {/* <Image
//                         src={"/editing.svg"}
//                         width={15}
//                         height={16}
//                         alt={"uu"}
//                       /> */}

//                       <p>עריכת שורה</p>
//                     </div>
//                     <Image src={"/bit.svg"} width={15} height={16} alt={"uu"} />
//                   </div>
//                   {open &&
//                     rowIndex === row &&<div className="flex ">
//                    { open.map((arr ,index)=>

//                     Object.entries(arr).map(
//                       ([code_key, code_value], index) => (
//                         <div key={code_key}>
//                           {code_key !== "madors" && code_value}
//                         </div>
//                       )
//                     ))}</div>}
//                 </div>
//               ))}
//             </div>
//             {console.log(open, "aaa", row)}
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Parent = () => {
//     isEditing;

//     if (isEditing) {
//         EditTest aa
//     } else {
//         Test aa
//     }
// }
// const Test = () => {}

// const EditTest = () => {}

    // const list = () => { 
    //     isEditing;
    //     if (isEditing) <div></div>
    //     else <input></input>
    // }
