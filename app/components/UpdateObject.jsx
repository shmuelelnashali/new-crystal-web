import React, { useRef, useState } from "react";
import Image from "next/image";

export default function UpdateEmployee({
  data,
  setUpdateMode,
  handleChange,
  toggleUpdateInput,
  setToggleUpdateInput,
  ifEmpty,
}) {
  
  //STATE FOR OPTION
  const [selectOption, setSelectOption] = useState(null);
  const [editedObject, setEditedObject] = useState(data);
  const optionsMap = {
    solder: ["אזרח", "חייל"],
    department: ["רכבים", "משקים והמטות"],
    branch: ["נגמש", "טנקים"],
    mador: ["נסא", "אמת"],
    hescem: ["40", "1"],
  };

  //THE FORMAT DATE
  const formatDate = (dateString) => {
   console.log(dateString);
    const [year, month, day] = dateString.split("/");

    return `${day}-${month}-${year}`;
  };

  //OPEN THE OPTION
  const handleOpen = (key) => {
    setSelectOption(key);
    setToggleUpdateInput(!toggleUpdateInput);
  };

  //CHECK IF THE START DATE BIGGER THEN END DATE
  const handleDateChange = (e, id, key) => {
    if (key === "start") {
      const endDate = formatDate(data.end);
      const newStartDate = e.target.value;
      if (newStartDate > endDate) {
        alert("תאריך התחלה לא יכול להיות גדול מתאריך סיום");
        return;
      }
    } else if (key === "end") {
      const startDate = formatDate(data.start);
      const newEndDate = e.target.value;
      if (newEndDate < startDate) {
        alert("תאריך סיום לא יכול להיות קטן מתאריך התחלה");
        return;
      }
    }
    handleChange(e, id, key);
  };

  
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const handleIconClickFrom = () => {
    if (dateFromRef.current) {
      dateFromRef.current.showPicker();
    }
  };

  const handleIconClickTo = () => {
    if (dateToRef.current) {
      dateToRef.current.showPicker();
    }
  };
  const ref=(key)=>{
    if(key==="activity_start"){
      return dateFromRef
    }
    if(key==="activity_end"){
      return dateToRef
    }

  }

  return (
    <>
      {Object.entries(editedObject).map(([key, value], i) => (
        // <div className="w-full p-2">
        //   <input
        //     className="w-[80%] text-center rounded-full  border border-1 border-blue_color"
        //     type={
        //       key=== "activity_start"||key === "activity_end" ?"date":
        //       "text"}
        //     value={value}
        //   />
        // </div> 
         <div key={value} className="relative py-2">
            {key==="activity_start"||key === "activity_end"?
            <span>
              <input
              ref={ref(key)}
                className="h-full truncate w-full  text-center border rounded-full border-blue_color  "
                type={"date"}
                value={formatDate(value)} 
                
              />
              { key=== "activity_start"  &&
                <Image
                src="/calender.svg" 
                alt="calendar icon"
                width={19}
                height={19}
                className="absolute left-1.5 top-1/2  transform -translate-y-1/2 cursor-pointer text-blue_color"
                onClick={handleIconClickFrom}/>}

              { key === "activity_end" &&
                <Image
                src="/calender.svg" 
                alt="calendar icon"
                width={19}
                height={19}
                className="absolute left-1.5 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                onClick={handleIconClickTo}/>}</span>
              : 
               <input
              ref={dateFromRef}
                className="h-full  w-full text-center border rounded-full border-blue_color  "
                type={"text"}
                value={value} 
                
              />



           
            }
            
           {/* { key=== "activity_start"  &&
              <Image
              src="/calender.svg" 
              alt="calendar icon"
              width={19}
              height={19}
              className=" left-1.5 top-0  transform -translate-y-1/2 cursor-pointer text-blue_color"
              onClick={handleIconClickFrom}/>}
            { key === "activity_end" &&
              <Image
              src="/calender.svg" 
              alt="calendar icon"
              width={19}
              height={19}
              className=" left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
              onClick={handleIconClickTo}/>} */}
              </div>
        // <div
        
        //   key={key}
        //   className={`relative py-3 ${optionsMap[key] ? "flex " : ""} `}
        // >
        //   {console.log(key)}
        //   <div
        //   className=" w-full flex item-center text-center"
        //     onClick={(e) => {

        //       // setUpdateMode(null);

        //       handleOpen(key);
        //     }}
        //   >
        //     <input

        //     onClick={(e)=>{
        //       e.stopPropagation(); // Stop event propagation
        //       handleOpen(key);

        //      }}

        //       onChange={(e) => {
        //         handleDateChange(e, data.id, key);
        //       }}
        //       className={` border max-w-full rounded-full md:truncate  pr-2 pl-4 border-blue_color

        //       ${"FOR EMPLOYEES PAGE"}
        //       ${key === "start" || key === "end" ? "pl-1 pr-3 " : "" }
        //       ${optionsMap[key] ? "cursor-pointer" : "" }

        //       ${"FOR AGREEMENTS PAGE"}
        //       ${key === "id" || key=== "enterTime" || key=== "exitTime" || key=== "overTimeLimit" || key=== "hoursAmount" || key=== "breakType"
        //       ? "w-[66.666667%] m-auto text-center" : "text-center"}
        //       `}

        //       type={key === "start" || key === "end" ? "date" : "text"}
        //       value={
        //         key === "start" || key === "end" ?  formatDate(value) : value
        //       }
        //     />

        //     {optionsMap[key] && (
        //       <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        //         <Image
        //           src={"/optionArrow.svg"}
        //           width={7}
        //           height={7}
        //           alt="arrow"
        //         />
        //       </div>
        //     )}
        //   </div>

        //   {ifEmpty && value === "" && (
        //     <div className="absolute text-red-600 text-sm font-medium mr-5">
        //       שדה זה חסר
        //     </div>
        //   )}

        //   {toggleUpdateInput && optionsMap[key] && selectOption === key && (
        //     <div className="absolute inset-y-7 w-full z-20 mt-1 border  rounded ">
        //       <ul className="flex flex-col  p-1  bg-white rounded shadowForDrop">
        //         {optionsMap[key].map((option, index) => (
        //           <li
        //             className="  w-full cursor-pointer py-2 px-4  rounded  text-blue_color  hover:bg-blue_color hover:text-white"
        //             onClick={(e) => {
        //               handleOpen(key);
        //               setSelectOption(null);
        //               handleChange({ target: { value: option } }, data.id, key);
        //             }}
        //             key={index}
        //           >
        //             {option}
        //           </li>
        //         ))}
        //       </ul>
        //     </div>
        //   )}
        // </div>
      ))}
    </>
  );
}
