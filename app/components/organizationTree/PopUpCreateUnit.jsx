import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function PopUpCreateUnit({
  selectedLevel,
  addNewNodeInClient,
  setShowPopUpCreateUnit,
}) {
  const [unitName, setUnitName] = useState(null);

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white  w-[844px] h-[210px] rounded-xl text-right pr-7 pl-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78] pt-5 pb-[6px]">
            יצירת {selectedLevel}
          </h1>
          <Image
            onClick={() => setShowPopUpCreateUnit(false)}
            className="hover:cursor-pointer pb-2"
            src={"/x.svg"}
            width={15}
            height={15}
            alt="x"
          />
        </div>
        <p className="text-[#002A78] text-xl font-normal pb-1">
          שם ה{selectedLevel}
        </p>

        <input
          type="text"
          value={unitName || `שם ${selectedLevel}`}
          className={`w-[579px] h-[41px] bg-white px-6 rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light ${
            unitName ? "text-[#002A78]" : "text-[#002A7887]"
          }  flex items-center justify-between z-50`}
          onChange={(e) => setUnitName(e.target.value)}
        />

        <div className="flex w-full  justify-end mt-4 pl-2">
          <button
            onClick={() => setShowPopUpCreateUnit(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            // onClick={"axiosDelete"}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            צור {selectedLevel}
          </button>
        </div>
      </div>
    </div>
  );
}
