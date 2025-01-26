import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BtnsEditDelete from "./BtnsEditDelete";
import axios from "@/app/lib/axios";
import { format, isValid, parse } from "date-fns";
import { CirclePlus } from "lucide-react";
import BtnAddMission from "./BtnAddMission";
import StartEndMissionTime from "./StartEndMissionTime";
import ManualUpdates from "./ManualUpdates";
import { timeStructure } from "@/app/util/dateFormat";
import AttendanceMissions from "./AttendanceMissions";
import toast from "react-hot-toast";

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
  const [getMissionFilter, setGetMissionFilter] = useState([]);
  const [getIndex, setGetIndex] = useState(null);
  // על איזו משימה לחצתי כדי לערוך
  // const [clickedMissionId,
  // ] = useState(null);
  // אם לחצתי על האינפוט
  const [isFocused, setIsFocused] = useState(false);
  // שינוי משימה
  const [mission_id_num_name, setMission_id_num_name] = useState(null);

  const handleChange =  (mission,  value) => {
    const updatedMissions = missions.map((missionVal) => {
      if (missionVal.mission_id === mission.mission_id) {
        return {
          ...missionVal,
          ...value, // Update the specific field for this mission
        };
      }
      
      return missionVal; // Keep other missions unchanged
    });    
    setMissions(updatedMissions)
  };

  // האינפוט של השעות
  const handleTimeChange = async (mission, e) => {
    let inputValue = e.target.value.replace(/[^\d]/g, ''); 
    const isStartTime = e.target.name === "start_time";
    
    // Only process if we have a complete time value (HH:MM)
    // if (inputValue.length === 5) {

    //HH:MM שומר על מבנה 
    let displayValue = inputValue;
    if (inputValue.length > 2) {
      displayValue = inputValue.slice(0, 2) + ":" + inputValue.slice(2);
    }
  
    // לא מורשה מעל 24:00
    const validatedValue = timeStructure(displayValue);
      
      if (validatedValue !== null) {
        // Update local state first
        handleChange(mission, {
          [isStartTime ? "start_time" : "end_time"]: validatedValue,
        });
  
        // Prepare the updated mission data
        const updatedMission = {
          attendance_id: nameAndDateForRow.id,
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          mission_number: mission.mission_number,
          start_time: isStartTime ? validatedValue : mission.start_time,
          end_time: !isStartTime ? validatedValue : mission.end_time,
        };
        console.log(updatedMission);
        
        try {
          // Only make the API call when we have a complete time value
          const response = await axios.put(
            `/attendanceMissions/${nameAndDateForRow.id}`,
            updatedMission
          );
          // console.log(response,"ss");
  
          // Update state after successful API call
          setMissions(prevMissions =>
            prevMissions.map(missionVal =>
              missionVal.mission_id === nameAndDateForRow.id
                ? { ...missionVal, ...updatedMission }
                : missionVal
            )
          );
  
          setMission_id_num_name(prev => ({
            ...prev,
            ...updatedMission,
          }));
          toast.success(response.data.message);
        } catch (error) {
          if (error.response?.data) {
            console.log(error.response.data, "eee");
            
            let errorDetails = '';
            
            // Handle nested arrays in the error object
            if (typeof error.response.data === 'object') {
              Object.entries(error.response.data).forEach(([key, messages]) => {
                if (Array.isArray(messages)) {
                  // Join all messages from the array with newlines
                  errorDetails += messages.join('\n');
                  if (errorDetails) errorDetails += '\n'; // Add newline between different fields
                }
              });
            }
        
            toast.error(`שגיאה בעידכון המשימה\n${errorDetails.trim()}`);
            return;
          }
        
          console.error(
            "שגיאה בעידכון המשימה",
            error.response?.data || error.message
          );
        }
      }
    // } else {
    //   // Just update local state while typing
    //   handleChange(mission, {
    //     [isStartTime ? "start_time" : "end_time"]: inputValue,
    //   });
    // }
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
      setGetMissionFilter(data)
    } catch (error) {
      console.error(error);
    }
  };

  // המשימות על מצב עריכה
 const handleMissionUpdate = (mission, e, index) => {
  e.stopPropagation();
  
  // If clicking on the same mission that's already being edited, close the edit mode
  if (mission_id_num_name && mission.mission_id === mission_id_num_name.mission_id) {
    setMission_id_num_name(null);
    setGetIndex(null);
  } else {
    // Otherwise, set the new mission for editing
    setMission_id_num_name(mission);
    setGetIndex(index);
  }
};

  // המשימה שהשתנתה
  const handleMissionChange = async (mis, e) => {
    e.stopPropagation();

    // Create the updated mission data
    const updatedMission = {
      attendance_id: nameAndDateForRow.id,
      mission_id: mis.mission_id,
      mission_name: mis.mission_name,
      mission_number: mis.mission_number,
      start_time: mission_id_num_name.start_time || mis.start_time,
      end_time: mission_id_num_name.end_time || mis.end_time,
    };

    try {
      // Send the updated data in the PUT request
      const response = await axios.put(
        `/attendanceMissions/${nameAndDateForRow.id}`,
        updatedMission
      );

      // Update local state only after successful API call
      setMissions(
        missions.map((mission) => {
          if (mission.mission_id === nameAndDateForRow.id) {
            return {
              ...mission,
              ...updatedMission,
            };
          }
          return mission;
        })
      );

      // Update the selected mission state
      setMission_id_num_name((prev) => ({
        ...prev,
        ...updatedMission,
      }));

      // Close the mission selection dropdown
      setGetMission(false);
    } catch (error) {
      console.error("Failed to update mission:", error);
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
                    <AttendanceMissions 
                    missions={missions}
                    mission_id_num_name={mission_id_num_name}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                    getMission={getMission}
                    setGetMission={setGetMission}
                    theMissionFetch={theMissionFetch}
                    handleMissionUpdate={handleMissionUpdate}
                    handleSearchMission={handleSearchMission}
                    handleTimeChange={handleTimeChange}
                    handleMissionChange={handleMissionChange}
                    deleteMissionById={deleteMissionById}
                    getIndex={getIndex}
                    getMissionFilter={getMissionFilter}
                    setGetMissionFilter={setGetMissionFilter}
                    />
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
