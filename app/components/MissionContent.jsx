import React, { useState } from "react";
import ReadObject from "./ReadObject";
import Image from "next/image";
import PopupToEditMission from "./popupToEditMission";

export default function MissionContent({
  headLength,
  data,
  handleChange,
  deleteEmployee,
}) { 
//   console.log(data);

  const [indexToEditMission, setIndexToEditMission] = useState(null);

  const [popupToEditMission, setPopupToEditMission] = useState(null);

  const handleOpenPopup = () => {
    // setIndexToEditMission(index);
    setPopupToEditMission(true);  // Open the popup    
};

  

  const handleClosePopup = () => {
    setPopupToEditMission(null); // Close the popup
    // setIndexToEditMission(null);  // Reset the index
    
    console.log("eeee");
};
 

  return (
    <div className="w-full  bg-[#EFF3FB] ">
      <div className="w-full ">
        {data.map((mission, index) => (
          <div
            onClick={() => setPopupToEditMission(mission)}
            key={index}
            className={`flex truncate w-full gap-2 border-b  border-t-[#A7BFE8]/30
                ${
                  indexToEditMission === index
                    ? "bg-[#e8eef7]"
                    : " hover:bg-[#e1e8f3] transition-transform duration-200 ease-in-out"
                }
                `}
          >
            {/* DELETE BUTTON */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                deleteEmployee(mission);
              }}
              className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            >
              <Image src={"/trash.svg"} height="30" width="30" alt="trash" />
            </div>

            <div
              className={`grid ${headLength}  w-full justify-around gap-3 font-normal text-[20px] leading-5 text-blue_color`}
            >
              {Object.entries(mission).map(([key, value], i) => (
                <div
                  key={key}
                  className={`h-full hover:cursor-default px-4 truncate flex flex-col  items-center justify-center  py-4 relative   text-center `}
                  title={value}
                >
                  {value}
                </div>
              ))}
              {popupToEditMission  && (
                <PopupToEditMission
                value={popupToEditMission}
                  setShowPopup={handleClosePopup}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
