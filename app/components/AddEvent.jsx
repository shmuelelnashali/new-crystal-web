import Image from "next/image";
import Option from "./option";

export default function AddEvent({ missionDay, setMissionDay,fromDate, setFromDate ,toDate, setToDate }) {
 
  const {year, month, day} = missionDay
 const date = `${year}-${month}-${day}`


  const handelDate = (e, type) => {
    const newDate = e.target.value;
    const [year, month, day  ] = newDate.split("-")
    if (type == "from") {
      setFromDate( `${year}-${month}-${day}`)
      setMissionDay(`${year}-${month}-${day}`) ;
    }

    if (type == "to") {
      setToDate(newDate);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full ">
        <div className="font-bold">סוג פעילות</div>
          <Option/>
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
                value={toDate}
                onChange={(e) => handelDate(e, "to")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
