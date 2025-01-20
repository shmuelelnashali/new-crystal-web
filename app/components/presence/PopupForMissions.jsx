import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BtnsEditDelete from "./BtnsEditDelete";
import axios from "@/app/lib/axios";
import { format, isValid, parse } from "date-fns";
import { CirclePlus } from "lucide-react";
import BtnAddMission from "./BtnAddMission";
import StartEndMissionTime from "./StartEndMissionTime";
import { Ojuju } from "next/font/google";
import ManualUpdates from "./ManualUpdates";
import { timeStructure } from "@/app/util/dateFormat";

export default function PopupForMissions({
  setPopUpForMission,
  popUpForMission,
  deleteMissionById,
  employeeNumber,
  date,
  day,
  missionId,
  nameAndDateForRow,
}) {
  // console.log(nameAndDateForRow, "nmmmmmmm");

  // כפתור עריכה או מחיקה
  const [theMissionFetch, setTheMissionFetch] = useState([]);
  // המשימות של הנוכחות היומית
  const [missions, setMissions] = useState([]);
  // האם יש משימה היום או לא
  const [isMissions, setIsMissions] = useState(false);
  //  כפתור להוספת משימה
  const [addMissions, setAddMissions] = useState(false);
  //  משימות או עדכונים ידניים
  const [updatesHistory, setUpdatesHistory] = useState(false);
  //  להביא את המשימות בעריכה
  const [getMission, setGetMission] = useState(false);
  // על איזו משימה לחצתי כדי לערוך
  // const [clickedMissionId,
  // ] = useState(null);
  // אם לחצתי על האינפוט
  const [isFocused, setIsFocused] = useState(false);
  // שינוי משימה
  const [mission_id_num_name, setMission_id_num_name] = useState(null);

  const handleChange = (missionId, fieldName, value) => {
    const updatedMissions = missions.map((mission) => {
      if (mission.mission_id === missionId) {
        return {
          ...mission,
          [fieldName]: value, // Update the specific field for this mission
        };
      }
      return mission; // Keep other missions unchanged
    });

    setMissions(updatedMissions);
  };

  // האינפוט של השעות
  const handleTimeChange = (field, missionId, e) => {
    let inputValue = e.target.value;
    //HH/MM/SS פונקצייה שעושה מבנה של
    const formattedValue = timeStructure(inputValue);

    if (formattedValue !== null) {
      handleChange(missionId, field, formattedValue);
    }
  };

  // להביא את המשימות לפי נוכחות יומית
  const fetchMissions = async () => {
    if (!nameAndDateForRow?.id) {
      return;
    }
    try {
      const response = await axios.get(
        `/attendanceMissions/getByAttendaceId/${nameAndDateForRow?.id}`
      );
      const data = response.data;
      console.log(data);

      setMissions(data);
      setIsMissions(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  // סגירת הפופאפ
  const closePopUp = () => {
    setPopUpForMission(false);
  };
  // כפתור הוספת משימה
  const addMissionBtn = () => {
    setAddMissions(true);
  };

  // לחיצה לחפש משימות בשביל לשנות
  const handleSearchMission = async (e) => {
    e.stopPropagation();
    setGetMission(true);
    try {
      const response = await axios.get(`/missions`);
      const data = response.data;
      setTheMissionFetch(data);
    } catch (error) {
      console.error(error);
    }
  };

  // המשימות על מצב עריכה
  const handleMissionUpdate = (missionId, e) => {
    e.stopPropagation();
    setMission_id_num_name(missionId);
  };

  // המשימה שהשתנתה
  const handleMissionChange = async (mis, e) => {
    e.stopPropagation();
    
    // Create the updated mission data
    const updatedMission = {
      mission_name: mis.mission_name,
      mission_number: mis.mission_number,
      start_time: mission_id_num_name.start_time || mis.start_time,
      end_time: mission_id_num_name.end_time || mis.end_time
    };
    
    console.log(mission_id_num_name,"rr");
    try {
      // Send the updated data in the PUT request
      const response = await axios.put(
        `/attendanceMissions/${mission_id_num_name.mission_id}`, 
        updatedMission
      );
  
      // Update local state only after successful API call
      setMissions(missions.map(mission => {
        if (mission.mission_id === mission_id_num_name.mission_id) {
          return {
            ...mission,
            ...updatedMission
          };
        }
        return mission;
      }));
  
      // Update the selected mission state
      setMission_id_num_name(prev => ({
        ...prev,
        ...updatedMission
      }));
  
      // Close the mission selection dropdown
      setGetMission(false);
  
    } catch (error) {
      console.error('Failed to update mission:', error);
      // Optionally add error handling UI feedback here
    }
  };

  // מראה משימות או עדכונים ידניים
  const handleHistory = () => {
    setUpdatesHistory(!updatesHistory);
  };

  return (
    <div className="h-full overflow-hidden   flex flex-col">
      <div className="">
        <div onClick={closePopUp} className="mt-1 pr-2 hover:cursor-pointer">
          <Image src={"/x.svg"} width={15} height={15} alt="x" />
        </div>
        {/* הלוגו */}
        <div className="flex item-center justify-center">
          <Image src={"/logo.svg"} width={221} height={56} alt="crystal_logo" />
        </div>

        <div className="pt-8">
          <div className="font-bold text-2xl text-center">משימות</div>
          {/* שם ותאריך */}
          <div className="text-center text-lg">
            {nameAndDateForRow.full_name} | {nameAndDateForRow.employee_number}
          </div>
          <div className="text-center flex items-center justify-center gap-3 text-lg border border-t-[#7F94BB] border-b-[#7F94BB] py-1 mt-3">
            <div>{day}</div>
            {nameAndDateForRow.date_time?.split("-").reverse().join("/") ||
              nameAndDateForRow.date_with_no_attendance}
          </div>
        </div>
        <div className="flex items-center justify-around py-0.5 border border-b-[#7F94BB]">
          <div
            onClick={handleHistory}
            className={clsx(`font-bold text-lg cursor-pointer`, {
              "text-[#7F94BB] font-normal": updatesHistory,
            })}
          >
            משימות
          </div>
          <div
            onClick={handleHistory}
            className={clsx(`text-[#7F94BB] cursor-pointer`, {
              "font-bold text-blue_color text-lg": updatesHistory,
            })}
          >
            עדכונים ידניים
          </div>
        </div>
      </div>
      {updatesHistory ? (
        <ManualUpdates />
      ) : (
        <>
          <div className=" flex-1 overflow-hidden my-1">
            <div className="h-full ">
              {isMissions ? (
                <>
                  {/* <BtnsEditDelete
                    editOrDelete={editOrDelete}
                    setEditOrDelete={setEditOrDelete}
                  /> */}

                  <div className="bg-blue_color text-white flex items-center justify-around py-1.5 mx-2 rounded-full">
                    <div className="">מס' משימה</div>
                    <div className="">שם משימה</div>
                  </div>
                  {/* המשימות */}
                  <div className="dirLtr h-[85%] overflow-y-auto ">
                    {missions.map((mission) => (
                      <div
                        onClick={(e) => {
                          handleMissionUpdate(mission, e);
                        }}
                        className="flex dirRtl "
                        key={mission.mission_id}
                      >
                        {mission_id_num_name?.mission_id ===
                          mission.mission_id && (
                          <div
                            onClick={() => {
                              deleteMissionById(mission);
                            }}
                            className="bg-red-100 my-0.5 px-0.5 mx-0.5 rounded-md flex items-center justify-center"
                          >
                            <Image
                              src={"/trash.svg"}
                              width={20}
                              height={20}
                              alt="trash"
                            />
                          </div>
                        )}

                        <div
                          // onClick={(e) => {
                          //   handleMissionUpdate(mission.mission_id, e);
                          // }}
                          className="w-full justify-center items-center"
                        >
                          <div className="bg-[#E4EBF8]   flex items-center justify-around py-1 mx-2 rounded-lg my-2">
                            {mission_id_num_name?.mission_id !==
                            mission.mission_id ? (
                              <>
                                <div className="w-[50%] pr-4 text-center">
                                  {mission.mission_number}
                                </div>
                                <div className="w-[50%] truncate text-center">
                                  {mission.mission_name}
                                </div>
                              </>
                            ) : (
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
                                  // value={`${
                                  //   mission_id_num_name.mission_number
                                  // }${"\u00A0".repeat(30)}${mission_id_num_name.mission_name}`}
                                  // onChange={(e)=>handleMissionChange(e, mission)}
                                  placeholder={
                                    isFocused
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
                                {getMission && (
                                  <>
                                    <div className="absolute dirLtr top-full z-50 border w-full max-h-60 overflow-y-auto bg-white rounded-lg px-1 py-1">
                                      {theMissionFetch.map((mis, index) => (
                                        <div
                                          key={index}
                                          onClick={(e) =>
                                            handleMissionChange(mis, e)
                                          }
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
                                    {/* <div
                                      onClick={setGetMission(false)}
                                      className="fixed hover:cursor-default  inset-0  "
                                    ></div> */}
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                          {/* שעת התחלה ושעת סיום */}
                          <StartEndMissionTime
                            clickOnMissions={
                              mission_id_num_name?.mission_id ===
                              mission.mission_id
                            }
                            handleTimeChange={handleTimeChange}
                            mission={mission}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex text-[#A1B0CD] h-full  flex-col items-center justify-center">
                  <CirclePlus
                    width={123}
                    height={123}
                    strokeWidth="0.8"
                    color="#A1B0CD"
                  />
                  <div>לא דווחו משימות ביום זה</div>
                  <div>לחץ על + על מנת להוסיף אירוע</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center mt-2 ">
            <BtnAddMission
              addMissionBtn={addMissionBtn}
              addMissions={addMissions}
            />
          </div>
        </>
      )}
    </div>
  );
}
