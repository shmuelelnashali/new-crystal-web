import Image from "next/image";
import React from "react";
import ExclusionsSearch from "./ExclusionsSearch";

export default function Exclusions(props) {
  const { exclusions, setExclusions, selectedOption, setSelectedOption } =
    props;
  const mission = () => {
    setExclusions(false);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className=" fixed inset-0 bg-[#000000]/20 backdrop-blur-[2px]"></div>
      <div className="z-50 h-[50%] max-h-[50%] w-[50%] fixed bg-white  rounded-md flex flex-col gap-y-3 p-3 ">
        <div onClick={mission} className="absolute left-2 ">
          <Image src={"/x.svg"} width={15} height={15} />
        </div>
        <div className="flex flex-col  py-2">
          <div className="font-bold">החרגות </div>
          <p>
            במסך זה תוכל להזין קוד פעילות לקבוצה מסויימת של אנשים או לעובד
            מסויים.{" "}
          </p>

          <p>
            לאחר בחירת העובדים שתרצו להזין להם קוד פעילות שונה מכלל העובדים,
            בחרו את סוג היום, טווח התאריכים ולחצו על החל.{" "}
          </p>
        </div>
        <div className="  h-[65%] ">
          <div className=" relative  w-1/2 ">
            <input
              type="text"
              className="w-full p-2 bg-[#EFF3FB] border rounded-full "
              placeholder="חפש עובד"
            />
            <Image
              className="absolute left-3 top-2"
              src="MagnifyingGlass.svg"
              width={20}
              height={20}
            />
            <div>
             { <ExclusionsSearch
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />}
            </div>
          </div>
          {/* <div className=" ">
          
            </div> */}
        </div>
        <div className=" ">
          
          <div className="flex ">
          <div className="flex flex-col mr-24  w-[50%]">
            <div className=" font-bold">
              סוג פעילות
              </div>
              <select
                className=" w-[80%] border rounded-full border-[#002A78]"
                // value={selectedOption} // מגדירים את הערך שנבחר בתיבת הבחירה
                onChange={handleSelectChange} // מוסיפים אירוע onChange שיופעל כאשר משתנה הבחירה
              >
                <option value="יום ראשון">יום ראשון</option>
                <option value="יום שני">יום שני</option>
                <option value="יום שלישי">יום שלישי</option>
                <option value="יום רביעי">יום רביעי</option>
                <option value="יום חמישי">יום חמישי</option>
                <option value="יום שישי">יום שישי</option>
                <option value="יום שבת">יום שבת</option>
                <option value="ערב חג">ערב חג</option>
                <option value="חג">חג</option>
                <option value="יום שבתון">יום שבתון</option>
              </select>
            
             </div>
             <div className="flex w-[50%]">
            <div className="flex flex-col ">
              {" "}
             <div className=" font-bold">תאריך</div> 
             
              
              <input
                className="border rounded-full border-[#002A78] px-2"
                type="date"
              />
             </div>

            <div className="flex flex-col justify-end ">
                <div className="flex">
          <div className="p-1">
             <Image
             src="leftArrow.svg"
             width={20}
             height={20}/>
           </div>
              <input
                className="  border rounded-full border-[#002A78] px-2"
                type="date"
              />
            </div>
            </div>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex justify-center">
          <button className="  border py-1 px-3 rounded-full text-white bg-[#002A78]">
            החל
          </button>
        </div>
      </div>
    </div>
  );
}
