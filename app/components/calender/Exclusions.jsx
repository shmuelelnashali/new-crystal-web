import Image from "next/image";
import React, { useRef, useState } from "react";
import ExclusionsSearch from "./ExclusionsSearch";
import Option from "../ui/Option";

export default function Exclusions({
  openExclusion,
  // eventDate,
  // setEventDate,
  missionDay,
}) {
  const { year, month, day, dayOfWeek} = missionDay;
  const [eventDate, setEventDate] = useState({
    beginning_date: `${year}-${month}-${day}`,
    end_date: `${year}-${month}-${day}`,
    activityDay: dayOfWeek,
  });
const {beginning_date,end_date,activityDay}=eventDate
  const [openSearch, setOpenSearch] = useState(false);

  const handelDate = (e, type) => { 
    console.log(type);
    if (type == "day") {
      console.log(e);
      setEventDate((prevState) => ({ ...prevState, activityDay: e }));
      console.log(eventDate);
      return;
    }
    const newDate = e.target.value;
    if (type == "from") {
      const [year, month, day] = newDate.split("-");
      setEventDate((prevState) => ({
        ...prevState,
        beginning_date: `${year}-${month}-${day}`,
      }));

      // setMissionDay(`${year}-${month}-${day}`) ;
    }
    if (type == "to") {
      const [year, month, day] = newDate.split("-");
      setEventDate((prevState) => ({
        ...prevState,
        end_date: `${year}-${month}-${day}`,
      }));
    }
    // console.log(eventDate);
  };
  const activity_type = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
    "חג",
  ];
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const handleIconClickFrom = () => {
    if (dateFromRef.current) {
      dateFromRef.current.showPicker();
    }
  };

  const handleIconClickTo = () => {
    if (dateToRef.current) {
      dateToRef.current.showPicker();
    }
  };
  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className=" fixed inset-0 bg-[#000000]/20 backdrop-blur-[2px]"></div>

      <div className="z-50 h-[50%] max-h-[50%] w-[50%] fixed bg-white  rounded-md flex flex-col gap-y-3 p-3 px-6">
        <div onClick={openExclusion} className="absolute left-4 top-4 ">
          <Image src={"/x.svg"} width={22} height={22} alt="x"/>
        </div>
        <div className="flex flex-col  py-2">
          <div className="font-bold text-2xl">החרגות </div>
          <p>
            במסך זה תוכל להזין קוד פעילות לקבוצה מסויימת של אנשים או לעובד
            מסויים.
          </p>
          <p>
            לאחר בחירת העובדים שתרצו להזין להם קוד פעילות שונה מכלל העובדים,
            בחרו את סוג היום, טווח התאריכים ולחצו על החל.
          </p>
        </div>
        <div className="  h-[65%] ">
          <div className=" relative  w-1/2 ">
            <input
              onClick={() => {
                setOpenSearch(!openSearch), console.log(openSearch);
              }}
              type="text"
              className=" outline-none w-full h-full p-2 bg-[#EFF3FB] rounded-full placeholder:text-blue_color"
              placeholder="חפש עובד"
            />
            <Image
              className="absolute transform -translate-y-1/2 left-3 top-1/2 "
              src="MagnifyingGlass.svg"
              width={20}
              height={20}
              alt="MagnifyingGlass.svg"
            />
            <div className=" relative flex justify-center">
              {
                <ExclusionsSearch
                  openSearch={openSearch}
                  // selectedOption={selectedOption}
                  // setSelectedOption={setSelectedOption}
                />
              }
            </div>
          </div>
        </div>
        <div className="px-14 flex w-full gap-5 ">
          <div className="  w-full font-bold">
            סוג פעילות
            <Option
              data={activity_type}
              handel={handelDate}
              activityDay={activityDay}
            />
          </div>

          <div className="w-full ">
            <div className=" font-bold">תאריך</div>
            <div className="flex gap-1 h-[32px]">
              <div className="w-1/2 relative ">
                <input
                  ref={dateFromRef}
                  className=" w-full h-full border rounded-full border-blue_color px-3 "
                  type="date"
                  value={beginning_date}
                  onChange={(e) => handelDate(e, "from")}
                />
                <Image
                  src="/calender.svg"
                  alt="calendar icon"
                  width={19}
                  height={19}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                  onClick={handleIconClickFrom}
                />
              </div>

              <Image src="leftArrow.svg" width={25} height={25} alt="r" />

              <div className=" w-1/2 relative">
                <input
                  ref={dateToRef}
                  className="h-full  w-full border rounded-full border-blue_color px-2 "
                  type="date"
                  value={end_date}
                  onChange={(e) => handelDate(e, "to")}
                />
                <Image
                  src="/calender.svg"
                  alt="calendar icon"
                  width={19}
                  height={19}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                  onClick={handleIconClickTo}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center py-2">
          <button className="text-lg   py-1 px-5 rounded-full text-white bg-blue_color">
            החל
          </button>
        </div>
      </div>
    </div>
  );
}
