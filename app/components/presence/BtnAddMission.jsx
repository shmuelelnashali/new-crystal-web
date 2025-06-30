import axios from "@/app/lib/axios";
import { CirclePlus } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

export default function BtnAddMission({
  addMissionBtn,
  addMissions,
  newMission,
  setAddMissions,
  setMissions,
  fetchMissions,
}) {
  const addNewAttendanceMission = async (newMission) => {
    if (!newMission || Object.keys(newMission).length === 0) {
      toast.error("נא למלא את כל השדות הנדרשים");
      return;
    }
    console.log(newMission, "jjjjj");
    try {
      const response = await axios.post(`/attendanceMissions`, newMission);
      const data = response.data.message;
      const newAddedMission = newMission;
      console.log(newAddedMission, "new");
      fetchMissions();
      // setMissions((prev)=> [...prev, newAddedMission])
      toast.success(data);
      setAddMissions(false);
      console.log(data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response.data.message);
    }
  };
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
        <div
          onClick={() => {
            addNewAttendanceMission(newMission);
          }}
          className="truncate"
        >
          שמור
        </div>
      )}
    </div>
  );
}
