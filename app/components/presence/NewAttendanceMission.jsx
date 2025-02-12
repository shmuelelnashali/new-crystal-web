import axios from "@/app/lib/axios";
import { timeStructure } from "@/app/util/dateFormat";
import Image from "next/image";
import React, { useState } from "react";

export default function NewAttendanceMission({
  //   handleSearchMission,
  //   handleSearch,
  //   query,
  nameAndDateForRow,
  setIsFocused,
  isFocused,
  newMission,
  setNewMission,
  //   getMission,
  //   getMissionFilter,
  //   setGetMissionFilter,
  //   setGetMission,
  //   handleMissionChange,
}) {
  //איזו משימות לסנן
  const [query, setQuery] = useState("");
  const [theMissionFetch, setTheMissionFetch] = useState([]);
  // פילטר על המשימות לפי מספר
  const [getMissionFilter, setGetMissionFilter] = useState([]);
  const [vewName, setVewName] = useState(null);
  const [getMission, setGetMission] = useState(false);

  // לחיצה לחפש משימות בשביל לשנות
  const handleSearchMission = async (e) => {
    e.stopPropagation();
    setGetMission(true);
    try {
      const response = await axios.get(`/missions`);
      const data = response.data;
    //   console.log(data, "aaa");

      setTheMissionFetch(data);
      setGetMissionFilter(data);
    } catch (error) {
      console.error(error);
    }
  };
  //עושה חיפוש למשימות
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filteredMissions = theMissionFetch.filter((mission) => {
      const missionNumber = mission.mission_number?.toString().trim();
      return missionNumber && missionNumber.startsWith(searchQuery);
    });

    setGetMissionFilter(filteredMissions);
  };

  // האינפוט של השעות
  const handleNameAndTimeChange = (mission, e, type = "name") => {
    // console.log(mission,"rtrtr");
    
    if (type === "time") {
      let inputValue = e.target.value.replace(/[^\d]/g, "");
      const isStartTime = e.target.name === "start_time";

      if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
      }

      let displayValue = inputValue;
      if (inputValue.length > 2) {
        displayValue = inputValue.slice(0, 2) + ":" + inputValue.slice(2);
      }

      const validatedValue = timeStructure(displayValue) || displayValue;
      if (validatedValue !== null) {
        setNewMission((prev) => ({
          ...prev,
          [isStartTime ? "start_time" : "end_time"]: validatedValue,
          [isStartTime ? "end_time" : "start_time"]:
            prev?.[isStartTime ? "end_time" : "start_time"],
        //   mission_id: prev?.mission_id|| mission.mission_id,
        //   attendance_id: nameAndDateForRow.id,
          //   mission_name: prev?.mission_name || mission.mission_name,
          //   mission_number: prev?.mission_number || mission.mission_number,
        }));
      }
    } else {
      setVewName((prev) => {
        const updatedMission = {
          ...prev,
          mission_name: mission.mission_name,
          mission_number: mission.mission_number,
        };
        setGetMission(false);
        return updatedMission;
      });

        setNewMission((prev)=>({
          ...prev,
          mission_id : mission.mission_id,
          attendance_id: nameAndDateForRow.id,
          mission_name: mission.mission_name,
          mission_number: mission.mission_number,
        }))
    }
    // console.log(newMission, "new");

    // //   handleChange(mission, {
    //     setPendingChanges((prev) => ({
    //         ...prev,
    //         [isStartTime ? "start_time" : "end_time"]: validatedValue,
    //     }))
    //     // isStartTime ? "start_time" : "end_time"= displayValue
    // //   });

    //   // עידכון השינויים
    // //   setPendingChanges((prev) => ({
    // //     ...prev,
    // //     attendance_id: nameAndDateForRow.id,
    // //     mission_index: getIndex,
    // //     mission_id: mission.mission_id,
    // //     mission_name: prev?.mission_name || mission.mission_name,
    // //     mission_number: prev?.mission_number || mission.mission_number,
    // //     [isStartTime ? "start_time" : "end_time"]: validatedValue,
    // //     // Preserve the other time if it exists
    // //     [isStartTime ? "end_time" : "start_time"]:
    // //       prev?.[isStartTime ? "end_time" : "start_time"] ||
    // //       mission[isStartTime ? "end_time" : "start_time"],
    // //   }));
    // //   console.log(pendingChanges, "changeTime");
    // }
  };

  return (
    <div className="flex dirRtl ">
      <div className="w-full justify-center items-center">
        <div className="bg-[#E4EBF8]   flex items-center justify-around py-1 mx-2 rounded-lg my-2">
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
              placeholder={
                isFocused || query !== ""
                  ? ""
                  : vewName?.mission_number //   :
                  ? `${vewName.mission_number}${"\u00A0".repeat(30)}${
                      vewName.mission_name
                    }`
                  : "חפש משימה"
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
                      onClick={(e) => {
                        handleNameAndTimeChange(mis, e, "name");
                        // setTimeout(() => setGetMission(false), 0);
                      }}
                      className="hover:bg-blue_color py-2 px-2 hover:cursor-pointer hover:text-white hover:rounded-lg"
                    >
                      <div className="flex dirRtl w-full text-right">
                        <div className="w-[50%]">{mis.mission_number}</div>
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
                    setQuery("");
                    setGetMissionFilter([]);
                  }}
                  className="fixed hover:cursor-default  inset-0  "
                ></div>
              </>
            )}
          </div>
        </div>
        <div className="  py-2  border-t border-t-[#E0E6EF] border-b border-b-[#E0E6EF] mt-1">
          <div className="flex items-center justify-around">
            <div className=" text-center flex flex-col items-center justify-center w-1/4">
              <div className="w-full truncate">שעת התחלה</div>
              <input
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border border-blue_color w-[80%] text-center"
                name="start_time"
                value={
                  newMission.start_time
                    ? newMission.start_time.slice(0, 5)
                    : "00:00"
                }
                onChange={(e) => handleNameAndTimeChange(newMission, e, "time")}
              />
            </div>
            <div className=" text-center flex flex-col items-center justify-center w-1/4">
              <div className="w-full truncate">שעת סיום</div>
              <input
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border border-blue_color  w-[80%] text-center"
                name="end_time"
                value={
                  newMission.end_time
                    ? newMission.end_time.slice(0, 5)
                    : "00:00"
                }
                onChange={(e) => handleNameAndTimeChange(newMission, e, "time")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center border w-[20%] rounded-full">
              כל היום
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
