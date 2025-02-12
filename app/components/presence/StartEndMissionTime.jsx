import React from "react";

export default function StartEndMissionTime({
  handleTimeChange,
  mission,
  clickOnMissions,
  index
}) {
  // console.log(mission,"mmmmm");
  const defaultTime = '00:00';
  const startTime = mission?.start_time ? mission.start_time.slice(0, 5) : defaultTime;
  const endTime = mission?.end_time ? mission.end_time.slice(0, 5) : defaultTime;
  return (
    <div className="  py-2  border-t border-t-[#E0E6EF] border-b border-b-[#E0E6EF] mt-1">
      <div className="flex items-center justify-around">
        <div className=" text-center flex flex-col items-center justify-center w-1/4">
          <div className="w-full truncate">שעת התחלה</div>
          {!clickOnMissions ? (
            <div className="border rounded-full w-[80%] ">{startTime}</div>
          ) : (
            <input
            onClick={(e)=>e.stopPropagation()}
              className="rounded-full border border-blue_color w-[80%] text-center"
              name="start_time"
              value={startTime}
              onChange={(e) =>
                handleTimeChange(mission, e)
              }
            />
          )}
        </div>
        <div className=" text-center flex flex-col items-center justify-center w-1/4">
          <div className="w-full truncate">שעת סיום</div>
          {!clickOnMissions ? (
            <div className="border rounded-full w-[80%]">{endTime}</div>
          ) : (
            <input
            onClick={(e)=>e.stopPropagation()}
              className="rounded-full border border-blue_color  w-[80%] text-center"
              name="end_time"
              value={endTime}
              onChange={(e) =>
                handleTimeChange(mission, e)
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
