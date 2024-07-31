import Image from "next/image";
import React from "react";
import ExcludedEvent from "./ExcludedEvent";

export default function Event({ missionDay, setMissinDay, eventDate }) {
  console.log(eventDate);
  const { year, month, day, dayOfWeek, activity } = missionDay;
  const { beginning_date, end_date, event } = eventDate;
 console.log ( beginning_date, end_date, event )

  const dateSplit = (dateString) => {
    console.log(dateString);
    const date = dateString.split("-");
    const reversedDate = `${date[2]}/${date[1]}/${date[0]}`;

    return reversedDate;
  };
  // const [beginning_year, beginning_month, beginning_day]=beginning_date.split("-")
  // const [end_year, end_month, end_day]=end_date.split("-")
  return (
    <div className="w-full px-2 ">
      <div className="border bg-[#E4EBF8] flex justify-center items-center rounded-md h-8">
        {event}{" "}
      </div>

      <div className=" text-lg font-normal flex p-3 justify-center gap-3 w-full">
        <div className="p-1 px-4  border-[1px] border-blue_color/17 rounded-full">
          {dateSplit(beginning_date)}
        </div>
        <Image src="leftArrow.svg" width={25} height={25} alt="r" />
        <div className="p-1 px-2 border rounded-full">
          {dateSplit(end_date)}
        </div>
      </div>
      <ExcludedEvent />
    </div>
  );
}
