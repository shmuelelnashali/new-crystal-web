import Image from "next/image";
import React from "react";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import Event from "./Event";

export default function GeneralActivity({
  activity,
  date,
  events,
  setDate,
  setEvents,
  missionDay,
  setMissionDay,
  eventDate,
  setEventDate,
  isEvent
}) {
  console.log(events, activity);

  return (
    <>
      {/* {/* // <div className="h-full"> */}
          {(isEvent||!activity )&&<div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
              סוג פעילות
            </h2>
          </div> }
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
        // </div>
      )}
      {events === "new" && (
        <AddEvent
          date={date}
          setDate={setDate}
          setEvents={setEvents}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
      {events == "edit" && (
        <EditEvent
          date={date}
          setDate={setDate}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
      {Array.isArray(eventDate) &&
        eventDate.map(
          (event, index) =>
            activity &&
            events !== "edit" &&
            event?.is_global === 1 && (
              <Event
                key={event.id}
                missionDay={missionDay}
                setMissionDay={setMissionDay}
                eventDate={event}
              />
            )
        )}
    </>
  );
}
