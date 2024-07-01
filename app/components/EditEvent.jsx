import Image from "next/image";
import Option from "./Option";
import { useRef } from "react";

export default function EditEvent({ missionDay, setMissionDay, eventDate, setEventDate }) {
 
  const {year, month, day} = missionDay
 const date = `${year}-${month}-${day}`
 const {beginning_date , end_date, activityDay}= eventDate
 


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


  const handelDate = (e, type) => {
    console.log(type);
    if (type == "day"){
      console.log(e);
      setEventDate((prevState) => ({...prevState,  activityDay: e}))
      console.log(eventDate);
    return
    } 
    const newDate = e.target.value;
    if (type == "from") {
      
      const [year, month, day  ] = newDate.split("-")
      setEventDate((prevState) => ({...prevState,  beginning_date:`${year}-${month}-${day}` }))
     
      // setMissionDay(`${year}-${month}-${day}`) ;
    }
    if (type == "to") {
      const [year, month, day  ] = newDate.split("-")
      setEventDate((prevState) => ({...prevState, end_date:`${year}-${month}-${day}` }))
     
    }
    console.log(eventDate);
  };
  const activity_type=[
    "ראשון",
    "שני", 
    "שלישי", 
    "רביעי", 
    "חמישי", 
    "שישי", 
    "שבת",
   "חג"
   ];
  

  //  setState((prevState) => ({...prevState, objkey: objvalue}))
  return (
    <div className="w-full px-2 font-normal text-lg ">
      <div className="w-full ">
        <div className="font-bold">סוג פעילות</div>
          <Option data={activity_type} handel={handelDate} activityDay={activityDay}/>
        <div className="flex flex-col w-full ">
          <div className="py-2">
          <div className="font-bold py-1"> תאריך </div>
          
            
            <div className="w-full flex justify-center  gap-1">

              <div className="w-1/2 relative">
              <input
              ref={dateFromRef}
                className=" w-full  border rounded-full border-[#002A78] px-3 "
                type="date"
                value={date}
                onChange={(e) => handelDate(e, "from")}
              />
              <Image
              src="/calender.svg" 
              alt="calendar icon"
              width={19}
              height={19}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#002A78]"
              onClick={handleIconClickFrom}/>
              </div>
              
              <Image src="leftArrow.svg" width={25} height={25} alt="r" />

              <div className=" w-1/2 relative">
              <input
              ref={dateToRef}
                className=" w-full border rounded-full border-[#002A78] px-2 "
                type="date"
                value={end_date}
                
                onChange={(e) => handelDate(e, "to")}
                

              />
              <Image
              src="/calender.svg"  
              alt="calendar icon"
              width={19}
              height={19}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#002A78]"
              onClick={handleIconClickTo}
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}