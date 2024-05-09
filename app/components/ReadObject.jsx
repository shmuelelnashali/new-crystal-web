import Image from "next/image";
import React from "react";

export default function ({ data, index, setUpdateMode,  }) {
  
  //GIVE THE UPDATE FORMAT DATE FOR READ MOOD
  const formatDateForRead = (dateString) => {
    if (dateString.includes("-")) {
      const newDate = dateString.split("-");
      return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
    }
    const [day, month, year] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };


  return (
    
    <>
      
    
      {Object.entries(data).map(([key, value], i) => (
        <div
          key={key}
          className={`h-full  group flex flex-col items-center justify-center overflow-hidden  relative  ${
            key === "entry" || key === "exit" ? "bg-[#EFF3FB]" : ""
          } text-center`}
        >
          {key === "entry" || key === "exit" ?
        value.map((v)=><div>{v}</div>)
         :key === "start" || key === "end" ? formatDateForRead(value): value}
          

          {key === "entry" || key === "exit" ? (
            <div className="">
              <Image
                src="plus.svg"
                width={22}
                height={22}
                alt="Entry/Exit Image"
                className=" absolute top-3 left-3 hidden group-hover:block "
              />{" "}
              {/* <div>vfff</div> */}
              
            </div>
          ) : (
            " "
          )}
        </div>
      ))}
    </>
  );
}
