import React from "react";
import ReadObject from "./ReadObject";
import UpdateObject from "./UpdateObject";
import Image from "next/image";

export default function TableContent(
  {data,
  updateMode,
  setUpdateMode,
  handleChange,
  toggleUpdateInput,
  setToggleUpdateInput,
  ifEmpty,
  deleteEmployee,
  
  headLength
}
) {
  
 
 
  return (
    <div className="w-full ">
      <div className="w-full ">
        {data.map((employee, index) => (
          <div
            onClick={() => setUpdateMode(index)}
            key={index}
            className={`flex w-full gap-2 border-b bg-[#EFF3FB] border-t-[#A7BFE8]/30

          ${
            updateMode === index
              ? "bg-[#e8eef7]"
              : " hover:bg-[#e8eef7] transition-transform duration-200 ease-in-out"
          }

          `}
          >
            {/* DELETE BUTTON */}
            <div
              onClick={() => deleteEmployee(employee)}
              className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            >
              <Image src={"/trash.svg"} height="30" width="30" alt="trash" />
            </div>
            <div className="w-full py-4 ">
              <div
                className={`grid grid-cols-${headLength}  w-full justify-between gap-3  font-normal text-[20px] leading-5 text-[#002A78]`}
              >
                {updateMode === index ? (
                  //RENDER TO UPDATE MOOD
                  <UpdateObject
                    data={employee}
                    updateMode={updateMode}
                    setUpdateMode={setUpdateMode}
                    handleChange={handleChange}
                    toggleUpdateInput={toggleUpdateInput}
                    setToggleUpdateInput={setToggleUpdateInput}
                    ifEmpty={ifEmpty}
                  />
                ) : (
                  //RENDER TO READ MOOD
                  <ReadObject
                    data={employee}
                    updateMode={updateMode}
                    setUpdateMode={setUpdateMode}
                    handleChange={handleChange}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
