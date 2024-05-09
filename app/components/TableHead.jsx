import React from "react";

export default function TableHead({ headTable, checkIfEmpty, data }) {
  const headLength = headTable.length;
  console.log(headLength);

  return (
    <div className="flex sticky top-0 z-10">
      <div
        onClick={() => { 
          checkIfEmpty(data);
        }}
        className="flex w-full bg-[#002A78] rounded "
      >
        <div className="w-[30px]"></div>
        <div
          className={`text-[24px] grid grid-cols-${headLength} gap-3 w-full font-semibold leading-6 py-3  text-center items-center text-[#FFFFFF]`}
        >
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