import Image from "next/image";
import React, { useState } from "react";
import NotEvent from "./NotEvent";
import Event from "./Event";
import AddEvent from "./AddEvent";


export default function PopupDay({missionDay, setMissionDay}){ 
  const [addEvent, setAddEvent] = useState(false);
  console.log(missionDay); 
  const mission = () => {
    // setOpenPopUpDay(false);
    setMissionDay(null)

  };
  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  
  ];
  const {year, month, day ,dayOfWeek} = missionDay
  // const selectedDay = new Date(year, month, day) 
  
  
  


  // const formatDate = (dateString) => {

  //   if (dateString.includes("-")) {
  //     console.log(dateString);
  //     const [day, month, year] = dateString.split("-");
  //     return `${year}/${month}/${day}`;
  //   }
   
  //   const [day, month, year] = dateString.split("/");
  //   // console.log(`${year}/${month}/${day}`);
  //   return `${year}-${month}-${day}`;
  // };

  // const zero = (month) => {
  //   if (month < 10) {
  //     return "0";
  //   }
  //   return "";
  // };
 
 
  const dayOfWeek2 = daysInHebrew[dayOfWeek];
  const CurrentMonth = Number(month) + 1
  console.log("month", CurrentMonth)
  return (
    <div className="border  flex  border-r-[#002A78] w-1/5  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full p-2 z-40">
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
            {dayOfWeek2}
          </div>
          <div className="flex justify-center items-center text-xl">

          {day}/{String(CurrentMonth).padStart(2, "0")}/{year}
          </div>

          <div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full  text-center text-white bg-[#002A78]">
              סוג פעילות
            </h2>
          </div>
        </div>

        <div className=" h-full ">
         
          {addEvent && (
            <AddEvent
           
              // formatDate={formatDate}
              missionDay={missionDay}
              setMissionDay={setMissionDay}
            />)}
            <div className="  h-full flex justify-center items-center">
              <Image
                onClick={() => setAddEvent(true)}
                src="addEvent.svg"
                width={200}
                height={155}
                alt="e"
              />
            </div>
          {/* <Event exclusions={exclusions} setExclusions={setExclusions} setSelectedOption={setSelectedOption} selectedOption={selectedOption} dayOfWeek2={dayOfWeek2} missionDay={missionDay}/> */}
          {/* {chck ? (
          <Event
            addEvent={addEvent}
            setAddEvent={setAddEvent}
            chck={chck}
            setChck={setChck}
            exclusions={exclusions}
            setExclusions={setExclusions}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            dayOfWeek2={dayOfWeek2}
            missionDay={missionDay}
          />
        ) : */}
            {/* 
            // <NotEvent
            //   exclusions={exclusions}
            //   setExclusions={setExclusions}
            //   dayOfWeek2={dayOfWeek2}
            //   missionDay={missionDay}
            //
            //   setAddEvent={setAddEvent}
            // />
          )}{" "} */ }
        </div>
      </div>

      {/* <div className="flex justify-center gap-2">
        <div className="  flex justify-center items-center px-4 py-2   border border-[#002A78]  rounded-full  text-center ">
          <div className="px-2 ">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.38855 1H6.13189C5.82247 1 5.52573 1.12292 5.30693 1.34171C5.08814 1.5605 4.96523 1.85724 4.96523 2.16666V2.27166C4.96502 2.47625 4.91101 2.67718 4.80863 2.85431C4.70624 3.03143 4.55908 3.17852 4.3819 3.28082L4.13107 3.42665C3.95371 3.52905 3.75253 3.58295 3.54774 3.58295C3.34295 3.58295 3.14176 3.52905 2.96441 3.42665L2.87691 3.37998C2.6092 3.22555 2.29115 3.18366 1.99258 3.2635C1.69401 3.34333 1.43932 3.53838 1.28442 3.80581L1.15609 4.02748C1.00166 4.29519 0.959764 4.61324 1.0396 4.9118C1.11944 5.21037 1.31448 5.46506 1.58192 5.61997L1.66942 5.6783C1.84574 5.7801 1.99236 5.92627 2.09469 6.10228C2.19703 6.2783 2.25152 6.47803 2.25275 6.68163V6.97912C2.25356 7.1847 2.20004 7.38684 2.09761 7.56508C1.99517 7.74332 1.84745 7.89133 1.66942 7.99412L1.58192 8.04662C1.31448 8.20152 1.11944 8.45621 1.0396 8.75478C0.959764 9.05335 1.00166 9.3714 1.15609 9.63911L1.28442 9.86077C1.43932 10.1282 1.69401 10.3232 1.99258 10.4031C2.29115 10.4829 2.6092 10.441 2.87691 10.2866L2.96441 10.2399C3.14176 10.1375 3.34295 10.0836 3.54774 10.0836C3.75253 10.0836 3.95371 10.1375 4.13107 10.2399L4.3819 10.3858C4.55908 10.4881 4.70624 10.6351 4.80863 10.8123C4.91101 10.9894 4.96502 11.1903 4.96523 11.3949V11.4999C4.96523 11.8093 5.08814 12.1061 5.30693 12.3249C5.52573 12.5437 5.82247 12.6666 6.13189 12.6666H6.38855C6.69797 12.6666 6.99471 12.5437 7.2135 12.3249C7.43229 12.1061 7.55521 11.8093 7.55521 11.4999V11.3949C7.55542 11.1903 7.60943 10.9894 7.71181 10.8123C7.8142 10.6351 7.96136 10.4881 8.13854 10.3858L8.38937 10.2399C8.56673 10.1375 8.76791 10.0836 8.9727 10.0836C9.17749 10.0836 9.37867 10.1375 9.55603 10.2399L9.64353 10.2866C9.91124 10.441 10.2293 10.4829 10.5279 10.4031C10.8264 10.3232 11.0811 10.1282 11.236 9.86077L11.3644 9.63327C11.5188 9.36556 11.5607 9.04751 11.4808 8.74895C11.401 8.45038 11.206 8.19569 10.9385 8.04078L10.851 7.99412C10.673 7.89133 10.5253 7.74332 10.4228 7.56508C10.3204 7.38684 10.2669 7.1847 10.2677 6.97912V6.68746C10.2669 6.48188 10.3204 6.27974 10.4228 6.1015C10.5253 5.92326 10.673 5.77525 10.851 5.67247L10.9385 5.61997C11.206 5.46506 11.401 5.21037 11.4808 4.9118C11.5607 4.61324 11.5188 4.29519 11.3644 4.02748L11.236 3.80581C11.0811 3.53838 10.8264 3.34333 10.5279 3.2635C10.2293 3.18366 9.91124 3.22555 9.64353 3.37998L9.55603 3.42665C9.37867 3.52905 9.17749 3.58295 8.9727 3.58295C8.76791 3.58295 8.56673 3.52905 8.38937 3.42665L8.13854 3.28082C7.96136 3.17852 7.8142 3.03143 7.71181 2.85431C7.60943 2.67718 7.55542 2.47625 7.55521 2.27166V2.16666C7.55521 1.85724 7.43229 1.5605 7.2135 1.34171C6.99471 1.12292 6.69797 1 6.38855 1Z"
                stroke="#002A78"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.25975 8.58335C7.22624 8.58335 8.00974 7.79985 8.00974 6.83336C8.00974 5.86687 7.22624 5.08337 6.25975 5.08337C5.29326 5.08337 4.50977 5.86687 4.50977 6.83336C4.50977 7.79985 5.29326 8.58335 6.25975 8.58335Z"
                stroke="#002A78"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="">החרגות</div>
        </div>

        <div className=" px-4 py-2  border rounded-full  text-center  text-white bg-[#002A78]">
          <div className=" flex justify-between items-center gap-2">
            <div className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 7.5V12.5M12.5 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className=""> הוסף אירוע </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}



