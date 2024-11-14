import { MoveDown, MoveUp } from "lucide-react";
import React, { useState } from "react";

export default function TableHead({ 
  headTable, 
  headLength, 
  // handleSortDirectionChange, 
  columnToSortOn, 
  setColumnToSortOn,

}) {

  const handleClickArrows = (index,direction) => {
    setColumnToSortOn({index:index, direction:direction});
   };
  

  return (
    <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
      <div className="flex w-full bg-blue_color rounded">
        <div className="w-[50px]"></div>
        <div
          className={`text-[22px] grid grid-cols-${headLength} gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}
        >
          {headTable.map((head, index) => (
            <div key={head} className="relative truncate flex justify-center items-center">
              <div className="truncate">{head}</div>
              <div className="mr-1 flex">
                <MoveDown
                  onClick={() => handleClickArrows(index,"desc")}
                  size={15}
                  color={
                    columnToSortOn?.index === index  &&columnToSortOn?.direction==='asc'? "gray" : "white"
                  }
                />
                <MoveUp
                  onClick={() => handleClickArrows(index,"asc")}
                  size={15}
                  color={
                    columnToSortOn?.index === index&&columnToSortOn?.direction==='desc'? "gray" : "white"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
