import React from "react";

export default function TableHead({ headTable, data }) {
  const headLength = headTable.length;

  return (
    <div className="flex sticky top-0 z-10">
      <div
        className="flex w-full bg-[#002A78] rounded"
      >
        <div className="w-[30px]"></div>
        <div
          className={`text-[24px] grid grid-cols-${headLength} gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}
        >
          {headTable.map((head, index) => (
            <div key={head} className={`md:truncate ${head === "מספר עובד" ? "pr-7" : ""}`}>
              {head}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}
