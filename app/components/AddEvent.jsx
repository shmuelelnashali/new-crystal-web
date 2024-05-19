import Image from "next/image";
import React, { useState } from "react";

export default function AddEvent({ missionDay, setMissionDay }) {
 
  const {year, month, day  } = missionDay

 const date = `${year}-${month}-${day}`

  const [fromDate, setFromDate] = useState(date)
  console.log(fromDate);
  const [toDate, setToDate] = useState(date)
  console.log(toDate);


  const handelDate = (e, type) => {
    const newDate = e.target.value;
    console.log(e);
    if (type == "from") {
     
      setFromDate(newDate)
     ;
      setMissionDay(newDate) ;
      console.log(typeof missionDay);
    }
    if (type == "to") {
   
      setToDate(newDate);
    }
  };

  return (
    <div className=" ">
      <div className="w-full ">
        <div className="font-bold">סוג פעילות</div>
        <div className="relative">
          <input className="p-1  pr-2 w-full border rounded-full border-[#002A78]" />
          <Image
            className="absolute top-[40%] left-3"
            src="options.svg"
            alt="o"
            width={10}
            height={10}
          />
          {/* <div className="absolute bg-slate-500 mt-[2px] w-full rounded-md ">
          <div>ddd</div>
          <div>ddd</div>
          <div>ddd</div>
          
          </div>  */}
        </div>

        <div className="flex items-center">
          <div className=" py-2">
            <div className="font-bold py-1"> תאריך </div>
            <div className="flex gap-1">
              <input
                className="  border rounded-full border-[#002A78] px-2"
                type="date"
                value={date}
                onChange={(e) => handelDate(e, "from")}
              />
              <Image src="leftArrow.svg" width={25} height={25} alt="r" />

              <input
                className="  border rounded-full border-[#002A78] px-2"
                type="date"
                value={date}
                onChange={(e) => handelDate(e, "to")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
