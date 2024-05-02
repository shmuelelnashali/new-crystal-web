import Image from "next/image";
import React, { useState } from "react";

export default function AddEvent(props) {
  const { messinDay, setMessinDay ,formatDate ,zero} = props;
  let { day, month, year, dayOfWeek } = messinDay;

  
  const [fromDate, setFromDate] = useState(
    `${zero(day)}${day}/${zero(month)}${month}/${year}`
  );
  const [toDate, setToDate] = useState(
    `${zero(day)}${day}/${zero(month)}${month}/${year}`
  );

  const handelDate = (e, type) => {
    const newDate = e.target.value;
    if (type == "from") {
      // if (toDate < e.target.value  ) {
      //   alert("תאריך התחלה גדול מתאריך סיום");
      //   return;
      // }
      setFromDate(formatDate(newDate))
      setMessinDay(newDate);
      console.log(messinDay);
    }
    if (type == "to") {
      // if (e.target.value < fromDate) {
      //   alert("תאריך סיום קטן מתהריך התחלה ");
      //   return;
      // }
      setToDate(formatDate(newDate));
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

        <div className="flex   items-center">
          <div className=" py-2">
            <div className="font-bold py-1"> תאריך </div>
            <div className="flex gap-1">
              <input
                className="  border rounded-full border-[#002A78] px-2"
                type="date"
                value={formatDate(fromDate)}
                onChange={(e) => handelDate(e, "from")}
              />

              <Image src="leftArrow.svg" width={25} height={25} alt="r" />

              <input
                className="  border rounded-full border-[#002A78] px-2"
                type="date"
                value={formatDate(toDate)}
                onChange={(e) => handelDate(e, "to")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
