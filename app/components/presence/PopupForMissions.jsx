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
  // פילטר על המשימות לפי מספר
  const [getMissionFilter, setGetMissionFilter] = useState([]);
  // מיקום המשימה שלחצתי כדי לערוך
  const [getIndex, setGetIndex] = useState(null);
  // אם לחצתי על האינפוט
  const [isFocused, setIsFocused] = useState(false);
  // שינוי משימה
  const [localMission, SetLocalMission] = useState(null);
  const [pendingChanges, setPendingChanges] = useState(null);

  const [newMission, setNewMission] = useState({});

  const handleChange = (mission, value) => {
    const updatedMissions = missions.map((missionVal, index) => {
      if (missionVal.mission_id === mission.mission_id && index === getIndex) {
        return {
          ...missionVal,
          ...value, // Update the specific field for this mission
        };
      }

      return missionVal; // Keep other missions unchanged
    });
    setMissions(updatedMissions);
  };

  // האינפוט של השעות
  const handleTimeChange = (mission, e) => {
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
      handleChange(mission, {
        [isStartTime ? "start_time" : "end_time"]: displayValue,
      });

      // עידכון השינויים
      setPendingChanges((prev) => ({
        ...prev,
        attendance_id: nameAndDateForRow.id,
        mission_index: getIndex,
        mission_id: mission.mission_id,
        mission_name: prev?.mission_name || mission.mission_name,
        mission_number: prev?.mission_number || mission.mission_number,
        [isStartTime ? "start_time" : "end_time"]: validatedValue,
        // Preserve the other time if it exists
        [isStartTime ? "end_time" : "start_time"]:
          prev?.[isStartTime ? "end_time" : "start_time"] ||
          mission[isStartTime ? "end_time" : "start_time"],
      }));
      console.log(pendingChanges, "changeTime");
    }
  };

  // עידכון שם ומספר משימה
  const handleMissionChange = async (mis, e) => {
    console.log(mis, "missss");

    e.stopPropagation();

    setPendingChanges((prev) => ({
      ...prev,
      attendance_id: nameAndDateForRow.id,
      mission_index: getIndex,
      mission_id: mis.mission_id,
      mission_name: mis.mission_name,
      mission_number: mis.mission_number,
      start_time: prev?.start_time || mis.start_time,
      end_time: prev?.end_time || mis.end_time,
    }));

    setMissions(
      missions.map((mission, index) => {
        if (
          mission.mission_id === localMission?.mission_id &&
          index === getIndex
        ) {
          return {
            ...mission,
            mission_number: mis.mission_number,
            mission_name: mis.mission_name,
          };
        }
        return mission;
      })
    );

    // Update the selected mission state
    SetLocalMission((prev) => ({
      ...prev,
      mission_number: mis.mission_number,
      mission_name: mis.mission_name,
    }));

    setGetMission(false);
  };

  // עידכון המשימה
  const handleMissionUpdate = async (mission, e, index) => {
    e.stopPropagation();
    // בלחיצה שנייה או על משימה אחרת
    if (localMission || getIndex !== null) {
      // אם יש שינויים
      if (pendingChanges && pendingChanges.mission_index === getIndex) {
        const { mission_index, ...dataToSend } = pendingChanges;

        const { start_time, end_time } = dataToSend;
        try {
          // 1️⃣מביא את המשימות בלי המשימה שעורכים כרגע
          const existingMissions = missions.filter(
            (m) =>
              m.attendance_id === mission.attendance_id &&
              m.mission_id !== mission.mission_id
          );
          // 2️⃣ ממיין את המשימות כדי לבדוק מי קודם למי
          const sortedMissions = [...existingMissions].sort((a, b) => {
            return (
              new Date(`2000-01-01T${a.end_time}`) -
              new Date(`2000-01-01T${b.end_time}`)
            );
          });

          // 3️⃣עושה את המשימות לפני ואחרי המשימה שעורכים כרגע כאובייקטים
          const currentMissionEndTime = new Date(`2000-01-01T${end_time}`);
          const currentMissionStartTime = new Date(`2000-01-01T${start_time}`);
          // כל המשימות שמסתיימות לפני סיום המשימה שעורכים כרגע
          const previousMissions = sortedMissions.filter(
            (m) => new Date(`2000-01-01T${m.end_time}`) < currentMissionEndTime
          );
          // כל המשימות שמתחילות לפני תחילת המשימה שעורכים כרגע
          const nextMissions = sortedMissions.filter(
            (m) =>
              new Date(`2000-01-01T${m.start_time}`) > currentMissionStartTime
          );

          // 4️⃣ Get relevant end times and start times
          const previousEndTimes = previousMissions
            .map((m) => m.end_time)
            .filter(Boolean);
          const nextStartTimes = nextMissions
            .map((m) => m.start_time)
            .filter(Boolean);

          // 5️⃣ אם תחילת זמן של המשימה שעורכים קטן מזמן סיום של משימה קודמת
          const isStartTimeInvalid = previousEndTimes.some(
            (existingEndTime) =>
              new Date(`2000-01-01T${start_time}`) <
              new Date(`2000-01-01T${existingEndTime}`)
          );

          // 6️⃣ אם סיום זמן של המשימה שעורכים גדוך מזמן התחלה של משימה הבאה
          const isEndTimeInvalid = nextStartTimes.some(
            (nextStartTime) =>
              new Date(`2000-01-01T${end_time}`) >
              new Date(`2000-01-01T${nextStartTime}`)
          );

          // 7️⃣ Validate that end_time is after start_time
          const isSelfTimeInvalid =
            new Date(`2000-01-01T${end_time}`) <=
            new Date(`2000-01-01T${start_time}`);

          if (isStartTimeInvalid) {
            toast.error("זמן ההתחלה חייב להיות גדול מזמן סיום משימה קודמת");
            return;
          }

          if (isEndTimeInvalid) {
            toast.error("זמן הסיום חייב להיות קטן מזמן התחלה של המשימה הבאה");
            return;
          }

          if (isSelfTimeInvalid) {
            toast.error("זמן הסיום חייב להיות גדול מזמן ההתחלה");
            return;
          }

          const response = await axios.put(
            `/attendanceMissions/${mission.id}`,
            dataToSend
          );
          // console.log(dataToSend,"send");

          toast.success(response.data.message);

          setPendingChanges(null);
        } catch (error) {
          if (error.response?.data) {
            let errorDetails = "";

            if (typeof error.response.data === "object") {
              Object.entries(error.response.data).forEach(([key, messages]) => {
                if (Array.isArray(messages)) {
                  errorDetails += messages.join("\n");
                  if (errorDetails) errorDetails += "\n";
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
    }

    if (
      localMission &&
      mission.mission_id === localMission.mission_id &&
      index === getIndex
    ) {
      SetLocalMission(null);
      setGetIndex(null);
    } else {
      SetLocalMission(mission);
      setGetIndex(index);
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
      // console.log(data, "data");
      if (data.length > 0) {
        setMissions(data);
        setIsMissions(true);
      }
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
      console.log(data, "aaa");

      setTheMissionFetch(data);
      setGetMissionFilter(data);
    } catch (error) {
      console.error(error);
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
              nameAndDateForRow.date_with_no_attendance
                ?.split("-")
                .reverse()
                .join("/")}
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
              {isMissions || addMissions ? (
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
                      localMission={localMission}
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
                      addMissions={addMissions}
                      newMission={newMission}
                      setNewMission={setNewMission}
                      nameAndDateForRow={nameAndDateForRow}
                    />
                  </div>
                </>
              ) : (
                <div className="flex text-[#A1B0CD] h-full  flex-col items-center justify-center">
                  <div onClick={addMissionBtn}>
                    <CirclePlus
                      width={123}
                      height={123}
                      strokeWidth="0.8"
                      color="#A1B0CD"
                    />
                  </div>

                  <div>לא דווחו משימות ביום זה</div>
                  <div>לחץ על + על מנת להוסיף אירוע</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center mt-2 ">
            <BtnAddMission
              addMissionBtn={addMissionBtn}
              setAddMissions={setAddMissions}
              addMissions={addMissions}
              newMission={newMission}
              setMissions={setMissions}
              fetchMissions={fetchMissions}
            />
          </div>
        </>
      )}
    </div>
  );
}
