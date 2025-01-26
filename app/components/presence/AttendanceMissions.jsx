import React, { useState } from "react";
import StartEndMissionTime from "./StartEndMissionTime";
import Image from "next/image";

export default function AttendanceMissions({
  missions,
  mission_id_num_name,
  isFocused,
  setIsFocused,
  getMission,
  setGetMission,
  theMissionFetch,
  handleMissionUpdate,
  handleSearchMission,
  handleTimeChange,
  handleMissionChange,
  deleteMissionById,
  getIndex,
  getMissionFilter,
  setGetMissionFilter,
}) {
  console.log(getMissionFilter, "gg");

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
  
    const filteredMissions = theMissionFetch.filter((mission) => {
      const missionNumber = mission.mission_number?.toString().trim();
      return missionNumber && missionNumber.startsWith(searchQuery);
    });
  
    setGetMissionFilter(filteredMissions);
  };

  return (
    <div>
      {missions.map((mission, index) => (
        <div
          onClick={(e) => {
            handleMissionUpdate(mission, e, index);
          }}
          className="flex dirRtl "
          key={`${mission.mission_id}-${index}`}
        >
            {/* אם זה על מצב עריכה יש כפתור מחיקה */}
          {index === getIndex && (
            <div
              onClick={() => {
                deleteMissionById(mission);
              }}
              className="bg-red-100 my-0.5 px-0.5 mx-0.5 rounded-md flex items-center justify-center"
            >
              <Image src={"/trash.svg"} width={20} height={20} alt="trash" />
            </div>
          )}

          <div
            // onClick={(e) => {
            //   handleMissionUpdate(mission.mission_id, e);
            // }}
            className="w-full justify-center items-center"
          >
            <div className="bg-[#E4EBF8]   flex items-center justify-around py-1 mx-2 rounded-lg my-2">
              {/* במצב רגיל */}
              {index !== getIndex ? (
                <>
                  <div className="w-[50%] pr-4 text-center">
                    {mission.mission_number}
                  </div>
                  <div className="w-[50%] truncate text-center">
                    {mission.mission_name}
                  </div>
                </>
              ) : (
                // אם יש לחיצה זה עובר למצב עריכה
                <div
                  onClick={(e) => {
                    handleSearchMission(e);
                  }}
                  className="w-[95%] cursor-pointer relative flex justify-around items-center border border-blue_color rounded-full bg-white"
                >
                  <Image
                    className="absolute left-2 "
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                  <input
                    className="w-full outline-none cursor-pointer rounded-full truncate pl-2 pr-4 placeholder:text-blue_color"
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    // value={`${
                    //   mission_id_num_name.mission_number
                    // }${"\u00A0".repeat(30)}${mission_id_num_name.mission_name}`}
                    // onChange={(e)=>handleMissionChange(e, mission)}
                    placeholder={
                      isFocused || query !== ""
                        ? ""
                        : `${
                            mission_id_num_name.mission_number
                          }${"\u00A0".repeat(30)}${
                            mission_id_num_name.mission_name
                          }`
                    }
                    onFocus={() => setIsFocused(true)} // Trigger when the input is focused
                    onBlur={() => setIsFocused(false)} // Trigger when the input loses focus
                  />
                  {/* להביא את המשימות */}
                  {getMission && (
                    <>
                      <div className="absolute dirLtr top-full z-50 border w-full max-h-60 overflow-y-auto bg-white rounded-lg px-1 py-1">
                        {getMissionFilter.map((mis, index) => (
                          <div
                            key={index}
                            onClick={(e) => handleMissionChange(mis, e)}
                            className="hover:bg-blue_color py-2 px-2 hover:cursor-pointer hover:text-white hover:rounded-lg"
                          >
                            <div className="flex dirRtl w-full text-right">
                              <div className="w-[50%]">
                                {mis.mission_number}
                              </div>
                              <div className="w-[50%] truncate">
                                {mis.mission_name}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* סוגר את הפופאפ בלחיצה בחוץ */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setGetMission(false);
                          setQuery('')
                          setGetMissionFilter([])
                        }}
                        className="fixed hover:cursor-default  inset-0  "
                      ></div>
                    </>
                  )}
                </div>
              )}
            </div>
            {/* שעת התחלה ושעת סיום */}
            <StartEndMissionTime
              clickOnMissions={index === getIndex}
              handleTimeChange={handleTimeChange}
              mission={mission}
              index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
