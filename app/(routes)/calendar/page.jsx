"use client";
import { useEffect, useState } from "react";

import PopupDay from "../../components/calender/PopupDay";
import Exclusions from "../../components/calender/Exclusions";
import Year from "../../components/calender/Year";
import Search from "../../components/ui/Search";
import Image from "next/image";
import { clsx } from "clsx";
import axios from "@/app/lib/Axios";
import { format } from "date-fns";

export default function Calendar() {
  const [missionDay, setMissionDay] = useState(); //selected day
  const [exclusions, setExclusions] = useState(false); //open popup החרגות
  const [popUp, setPopUp] = useState(false);
  const [eventDate, setEventDate] = useState({});
  // const [activity, setActivity] = useState("");
  const [events, setEvents] = useState("add");

  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];

  // useEffect(()=>{
  async function fetchData(string) {
    try {
      const response = await axios.get(`/events/${string}`);
      return response.data;
    } catch (error) {
      console.error("error fetching : ", error);
      throw error;
    }
  }
// const a=
// {beginning_date
// : 
// "2024-02-04",
// employee_id
// : 
// null,
// employee_name
// : 
// null,
// employees
// : 
// [],
// end_date
// : 
// "2024-02-29"}
  //     fetchData()
  //   },[activity])

  //    const chack = (date) => {
  //   const d = new Date(activityDate?.beginning_date);
  //   d.setHours(0, 0, 0, 0, 0);
  //   date.setHours(0, 0, 0, 0, 0);
  //   console.log("activity", d.getTime() === date.getTime());
  //   if (d.getTime() === date.getTime()) {
  //     return activityDate;
  //   }
  // };

  const dateToObject = async (string) => {
    if (string === null || string.includes("null")) {
      setMissionDay(null);
      return;
    }

    const [year, month, day] = string.split("-");
    const date = new Date(year, month - 1, day);
    const dayOfWeek = daysInHebrew[date.getDay()];
    const activity = await fetchData(string);

    const objectDate = {
      year: year,
      month: month.padStart(2, "0"),
      day: day.padStart(2, "0"),
      dayOfWeek: dayOfWeek,
      activity: activity[0],
    };

    setMissionDay(objectDate);
    setEventDate(
      activity.length > 0
        ? activity[0]
        : 
      {
            beginning_date: format(new Date(string), "yyyy-MM-dd"),
            end_date: format(new Date(string), "yyyy-MM-dd"),
            activityDay: dayOfWeek,
          }
    );

    // setPopUp(true);
  };

  const imageAdd = (
    <Image src={"/exclusions_white.svg"} width={20} height={20} alt="" />
  );
  const openExclusion = () => {
    setExclusions(!exclusions);
  };

  return (
    <div className=" overflow-y-hidden">
      <div
        className={`${
        missionDay? "w-4/5 pr-3 transition-width" : " w-full px-[5%]"
        } `}
      >
        <div className="h-11  flex justify-center ">
          <Search
            searchText={""}
            textBtn={"החרגות"}
            addNew={openExclusion}
            addImage={imageAdd}
            missionDay={missionDay}
          />
        </div>
        <Year missionDay={missionDay} setMissionDay={dateToObject} />

        {missionDay && (
          <div className="border w-1/5 transition-width  flex  border-r-blue_color  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full p-2 z-40">
            <PopupDay
              missionDay={missionDay}
              setMissionDay={dateToObject}
              setExclusions={setExclusions}
              eventDate={eventDate}
              setEventDate={setEventDate}
              events={events}
              setEvents={setEvents}
            />
          </div>
        )}
      </div>

      {exclusions && (
        <Exclusions
          // selectedOption={selectedOption}
          // setSelectedOption={setSelectedOption}
          missionDay={missionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
          openExclusion={openExclusion}
        />
      )}
    </div>
  );
}

//   );
// }
