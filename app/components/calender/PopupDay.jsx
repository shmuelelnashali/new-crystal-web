import Image from "next/image";
import React, { useEffect, useState } from "react";
import Events from "./Events";
import axios from "../../lib/axios";

export default function PopupDay({
  missionDay,
  setMissionDay,
  setExclusions,
 
  openPopUp,
  setOpenPopUp,
  events, setEvents
}) {
  const { year, month, day,  dayOfWeek } = missionDay;
  console.log();
  const [eventDate, setEventDate] = useState({
    // beginning_date: `${year}-${month}-${day}`,
    // end_date: `${year}-${month}-${day}`,
    // activityDay: dayOfWeek,
  });
  useEffect(()=>{
  setEventDate({
    beginning_date: `${year}-${month}-${day}`,
    end_date: `${year}-${month}-${day}`,
    activityDay: dayOfWeek,
  })},[missionDay])
  const [activity, setActivity] = useState(false);

  // const [events, setEvents] = useState("add");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/events/${year}-${month}-${day}`);
        console.log(response.data);
        if (response.data.length > 0) {
          console.log(setEventDate(response.data[0]), setActivity(true));
        } else {
          setActivity(false);
        }
      } catch (error) {
        console.error("error fetching : ", error);
        throw error;
      }
    }
    fetchData();
  }, [missionDay]);

  // console.log(eventDate, activity);
  const mission = () => {
    setOpenPopUp(false);
    setMissionDay(null);
  };
  // console.log(events);
 
  const addNewEvent = async () => {
    const event = {
      beginning_date: eventDate.beginning_date,
      end_date: eventDate.end_date,
      event: "Sunday",
      is_global: true,
    };
    if (events !== "edit") {
      try {
        const response = await axios.post(`/events`, event);
        setOpenPopUp(false);
        setMissionDay(null);
        return response.status;
      } catch (error) {
        console.error("error fetching : ", error);
        throw error;
      }
    }
    if (events === "edit") {
      {
        try {
          const response = await axios.put(`/events/${eventDate.id}`, event);
          setOpenPopUp(false);
          setMissionDay(null);
          return response.status;
        } catch (error) {
          console.error("error fetching : ", error);
          throw error;
        }
      }
    }
  };
  return (
    <>
      <div className="flex flex-col h-[90vh] ">
        <div className="">
          <div onClick={mission} className="">
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>
          <div className="flex justify-center items-center">
            <Image src="/logo.svg" width={220} height={54} alt="" />
          </div>
        </div>

        <div className="w-full ">
          <div className=" flex justify-center items-center mt-3 font-bold text-2xl">
            יום {dayOfWeek}
          </div>

          <div className="flex justify-center items-center text-xl">
            {day}/{month}/{year}
          </div>

          <div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
              סוג פעילות
            </h2>
          </div>
        </div>

        <div className=" h-full w-full">
          <Events
            events={events}
            setEvents={setEvents}
            missionDay={missionDay}
            setMissionDay={setMissionDay}
            eventDate={eventDate}
            setEventDate={setEventDate}
            activity={activity}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 ">
        <button
          onClick={() => setExclusions(true)}
          className="flex gap-2 items-center px-3 py-2 rounded-full border-[1px]  border-blue_color"
        >
          <Image src="/exclusions.svg" width={20} height={20} alt="" />
          <p>החרגות</p>
        </button>

        {!activity && events !== "new" && events !== "edit" && (
          <button
            onClick={() => setEvents("new")}
            className="bg-blue_color flex gap-2 items-center text-white px-3 py-2 rounded-full"
          >
            <Image src="/addEmployee.svg" width={20} height={20} alt="" />
            <p>הוסף אירוע</p>
          </button>
        )}

        {(events === "new" || events === "edit") && (
          <button
            onClick={() => addNewEvent()}
            className="bg-blue_color flex gap-2 items-center text-white px-5 py-2 rounded-full"
          >
            <p>שמור</p>
          </button>
        )}

        {activity && events !== "new" && events !== "edit" && (
          <button
            onClick={() => setEvents("edit")}
            className="bg-blue_color flex gap-2 items-center text-white px-3 py-2 rounded-full"
          >
            <Image src="/edit.svg" width={20} height={20} alt="" />
            <p>ערוך</p>
          </button>
        )}
      </div>
    </>
  );
}
