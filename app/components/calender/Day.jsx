import { useEffect } from "react";
import axios from "@/app/lib/Axios";
import clsx from "clsx";

export default function Day({
  setMissionDay,
  missionDay,
  day,
  month,
  year,
  evensInYear,
}) {
  const today = new Date();
  const date = new Date(year, month, day);

  // השוואת תאריכים
  const dateComparisonResult = (chackDate) => {
    chackDate.setHours(0, 0, 0, 0, 0);
    date.setHours(0, 0, 0, 0, 0);
    return chackDate.getTime() === date.getTime() && day !== null;
  };

  const selectedDate = () => {
    if (missionDay) {
      const { year, month, day } = missionDay;
      const selectedDay = new Date(year, month - 1, day);
      return dateComparisonResult(selectedDay);
    }
  };

  const isEventDey = () => {
    const eventArray = evensInYear.map((value, index) => {
      return dateComparisonResult(new Date(value));
    });

    return eventArray.includes(true);
  };

  const handleColor = () => {
    const colors = [
      "bg-[#E12C83]",
      "bg-[#85D188]",
      "bg-[#6190E8]",
      "bg-[#6461E8]",
      "bg-[#E8CA61]",
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  const isActivReport = selectedDate();

  return (
    <div
      onClick={() => {
        setMissionDay(`${year}-${month + 1}-${day}`);
      }}
      className={clsx(
        "h-full w-full rounded-xl flex items-center cursor-pointer flex-col justify-center",
        {
          "bg-blue_color  text-white font-bold":
            dateComparisonResult(today) === true,
        },
        { "bg-[#002A78]/20": isActivReport === true },
        {
          "hover:bg-[#bbbbbb]/20":
            !isActivReport === true &&
            !dateComparisonResult(today) === true &&
            day !== null,
        }
      )}
    >
      {day}
      {/* נקודת צבע כאשר יש פעילות \ אירוע ביום מסוים*/}
      <div
        className={` w-1 h-1 rounded-full  flex  ${
          day !== null && isEventDey() ? handleColor() : ""
        } `}
      ></div>
    </div>
  );
}
