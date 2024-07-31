"use client";
import React, { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import Event from "./Event";
import Image from "next/image";
import EditEvent from "./EditEvent";


export default function Events({
  missionDay,
  setMissionDay,
  events,
  setEvents,
  eventDate,
  setEventDate,
  activity
}) {
  const { year, month, day} = missionDay;
  // console.log(activity);

  useEffect(() => {
    if (events === "new" || events === "edit") {
      setEvents("add");
    }
  }, [missionDay]);
  return (
    <>
      {!activity && events !== "new" && events !== "edit" && (
        <div className="  h-full flex justify-center items-center">
          <Image
            onClick={() => setEvents("new")}
            src="addEvent.svg"
            width={240}
            height={155}
            alt="e"
          />
        </div>
      )}

      {events == "new" && (
        <AddEvent
        setEvents={setEvents}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}

      {events == "edit" && (
        <EditEvent
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
      {activity && events !== "edit" && (
        <Event
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
        />
      )}
    </>
  );
}
