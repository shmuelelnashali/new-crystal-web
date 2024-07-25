import React from "react";


export default function TableHead({ headTable ,headLength}) {
  
  // console.log(headLength);



  return (
    <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
      <div className="flex w-full  bg-blue_color rounded">
        <div className="w-[30px]"></div>
        <div
          className={`text-[24px] grid ${headLength} gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}>
        
          {headTable.map((head, index) => (

            <div key={head} className={`${head === "מספר עובד" ? "pr-7" : ""}`}>

              {head}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

// className={head === "מספר עובד" ? "pr-7" : ""}