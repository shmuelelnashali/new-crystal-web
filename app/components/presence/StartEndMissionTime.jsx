import React from "react";

export default function StartEndMissionTime({
  handleTimeChange,
  mission,
  clickOnMissions,
}) {
  return (
    <div className="  py-2  border-t border-t-[#E0E6EF] border-b border-b-[#E0E6EF] mt-1">
      <div className="flex items-center justify-around">
        <div className=" text-center flex flex-col items-center justify-center w-1/4">
          <div className="w-full truncate">שעת התחלה</div>
          {!clickOnMissions ? (
            <div className="border rounded-full w-[80%] ">{mission.start_time.slice(0, 5)||"-"}</div>
          ) : (
            <input
            onClick={(e)=>e.stopPropagation()}
              className="rounded-full border border-blue_color w-[80%] text-center"
              value={mission.start_time.slice(0, 5)}
              onChange={(e) =>
                handleTimeChange("start_time", mission.mission_id, e)
              }
            />
          )}
        </div>
        <div className=" text-center flex flex-col items-center justify-center w-1/4">
          <div className="w-full truncate">שעת סיום</div>
          {!clickOnMissions ? (
            <div className="border rounded-full w-[80%]">{mission.end_time.slice(0, 5)||"-"}</div>
          ) : (
            <input
            onClick={(e)=>e.stopPropagation()}
              className="rounded-full border border-blue_color  w-[80%] text-center"
              value={mission.end_time.slice(0, 5)}
              onChange={(e) =>
                handleTimeChange("end_time", mission.mission_id, e)
              }
            />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center border w-[20%] rounded-full">כל היום</div>
      </div>
    </div>
  );
}
