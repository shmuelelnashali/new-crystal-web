// const TableRow = ({ data }) => {
//     const [isEditing, setIsEditing] = useState(false);

//     // const getDateName = (date) => {
//     //     return datefns(date)
//     // }

//     return (
//         <div >
//             {/* <div class="flex row">
//                 <div>{getDateName(data.date_time)}</div>
//                 <div>{date.date_time}</div>
//             </div>
//             <div>3472387942</div>
//             <div>
//                 {
//                     data.entrances_exits.map(entranceExit => <EntranceExit isEditing={isEditing}/>)
//                 }
//             </div> */}

//         {console.log(data)}
//         </div>
//     )
// }
"use client";
import React, { useState } from "react";
import EntrancesExits from "./EntrancesExits";
import Btn from "./Btn";

export default function TableRow({ data, rowIndex, handelAddEntry }) {
  const [updateMode, setUpdateMode] = useState(false)
  const shouldRenderImage = data.entrances_exits.length < 3;
  return (
    <div>
      <div className="presentTable  items-center justify-center rounded-md border-b-2   text-center hover:bg-[#EBF1FA]"
   onClick={() => {
    setUpdateMode(true);
  
  }}
  
      >
        <div className=" ">{data.date_time}</div>
        <div className=" ">{data.employee_number}</div>
        <div className="  ">{data.fullName}</div>
        <div className="col-span-3">
          {data.entrances_exits.map((entrancesExits, index) => (
            <EntrancesExits
              key={index}
              entrancesExits={entrancesExits}
              rowIndex={rowIndex}
              entryExitIndex={index}
              isLast={index === data.entrances_exits.length - 1}
              shouldRenderImage={shouldRenderImage}
              handelAddEntry={handelAddEntry}
              />
            ))}
        </div>
        <div className=" ">{data.contract_id}</div>
        <div className=" ">{data.attendance_for_pay}</div>
        <div className=" ">{data.waiting_time}</div>
        <div className=" ">{data.extra_hours}</div>
        <div className=" ">{data.total_attendance_time}</div>
        <div className=" ">{data.employee_isActive}</div>
        <div className=" ">{data.event}</div>
        <div className="flex justify-center items-center">
          <Btn text={"צפה במשימות"} />
        </div>
      </div>
   {
      updateMode && (
        <div>
          <inpot>
            
          </inpot>
        </div>
      )
    }
    </div>
   
  );
}
