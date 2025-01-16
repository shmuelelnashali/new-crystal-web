import React, { useState } from "react";
import ExcludedEvent from "./ExcludedEvent";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Exclusions from "./Exclusions";

export default function ExcludedActivity({
  activity,
  date,
  events,
  setDate,
  setEvents,
  missionDay,
  setMissionDay,
  eventDate,
  setEventDate,
}) {
  const [excludedSelected, setExcludedSelected] = useState(null);
  const formatDate = (dateString) => {
    console.log(dateString);
    const [day, month, year] = dateString.split("-");
    return `${year}/${month}/${day}`;
  };
  return (
    <>
      <div className="flex-1 flex flex-col overflow-hidden dirRtl">
        <div className="flex justify-center items-center px-2 pt-5 ">
          <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
            החרגות
          </h2>
        </div>
        <div className="pt-3  overflow-auto ">
          {Array.isArray(eventDate) &&
            eventDate.map((event, index) =>
              event.is_global === 0
                ? event.employees.map((employee, index) => (
                    <div
                      onClick={() => setExcludedSelected(event)}
                      key={employee?.id}
                      className=" m-1.5 group  hover:bg-white whitespace-nowrap  text-sm flex border  bg-[#E4EBF8]/50 rounded-md border-[#E4EBF8]"
                    >
                      <div className="  w-[40%] flex items-center rounded-ee-3xl  p-1 ">
                        <div className="  text-blue_color ml-1 pl-1 border-l-2">
                          <Pencil
                            size={16}
                            className="hidden group-hover:block "
                          />
                        </div>
                        <div className="font-medium">{employee.name}</div>
                      </div>
                      <div className=" px-4  flex flex-col">
                        <div>
                          <div className=" font-medium border-b-[1px] flex justify-center gap-1">
                            <p className="text-gray-500/80 text-[10px]">מ:</p>
                            {formatDate(event?.beginning_date)}
                            <p className="text-gray-500/80 text-[10px]">
                              עד:
                            </p>{" "}
                            {formatDate(event?.end_date)}{" "}
                          </div>
                        </div>
                        <div className="  rounded-full flex justify-center">
                          {event.event}
                        </div>
                      </div>
                    </div>
                  ))
                : null
            )}
        </div>
      </div>
      {excludedSelected && (
        <Exclusions
          eventObj={excludedSelected}
          setExclusions={setExcludedSelected}
        />
      )}
    </>
  );
}
