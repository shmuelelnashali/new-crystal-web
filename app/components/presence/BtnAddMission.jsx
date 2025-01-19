import { CirclePlus } from "lucide-react";
import React from "react";

export default function BtnAddMission({ addMissionBtn, addMissions }) {
  return (
    <div
      onClick={addMissionBtn}
      className={`bg-blue_color flex gap-2 ${
        !addMissions ? "w-[40%]" : "w-[30%]"
      }  text-white  rounded-full justify-center items-center text-center py-1 hover:cursor-pointer mb-3`}
    >
      {!addMissions ? (
        <>
          <CirclePlus width={17} height={17} color="#FFFFFF" />
          <div className="truncate">הוסף משימה</div>
        </>
      ) : (
        <div className="truncate">שמור</div>
      )}
    </div>
  );
}
