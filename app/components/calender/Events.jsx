"use client";
import React, { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import Event from "./Event";
import Image from "next/image";
import EditEvent from "./EditEvent";
import ExcludedEvent from "./ExcludedEvent";
import GeneralActivity from "./GeneralActivity";
import ExcludedActivity from "./ExcludedActivity";

export default function Events({
  missionDay,
  setMissionDay,
  events,
  setEvents,
  eventDate,
  setEventDate,
  activity,
  date,
  setDate,
}) {
  const [ex, setEx] = useState(0);
  const { year, month, day } = missionDay;
  const eventArray = Object.values(eventDate);
  const isExcludedEvent = eventArray.some((event) => event.is_global === 0);
  const isEvent = eventArray.some((event) => event.is_global === 1);
  console.log(isExcludedEvent);

  // useEffect(() => {
  //   if (events === "new" || events === "edit") {
  //     setEvents("add");
  //   }
  // },[missionDay]);
  return (
    <div className=" h-full flex flex-col ">
      <GeneralActivity
        isEvent={isEvent}
        activity={activity}
        events={events}
        date={date}
        setDate={setDate}
        setEvents={setEvents}
        missionDay={missionDay}
        setMissionDay={setMissionDay}
        eventDate={eventDate}
        setEventDate={setEventDate}
      />

      {isExcludedEvent && (
        <ExcludedActivity
          activity={activity}
          events={events}
          date={date}
          setDate={setDate}
          setEvents={setEvents}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
    </div>
  );
}
