"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function reports() {
  const fields = [
    "שם עובד",
    " מספר עובד",
    " שעת כניסה 1",
    " שעת כניסה 2",
    " שעת יציאה 1",
    " שעת יציאה 2",
    "תאריך",
    "ענף",
    "מחלקה",
    "מדור",
  ];
  const [reportFields, setReportFields] = useState([" "]);
  const handelReportFields = (field ,type) => {
    if( type==="plus"){
    if( reportFields.includes(field)){
      return
    }
    setReportFields([...reportFields, field]);
  };
  if(type==="minus"){
     const newFields =reportFields.filter(item=>item !== field)
     setReportFields(newFields)
  }
}





  return (
    <div className="flex flex-col h-5/6 p-6  bg-[#EFF3FB]">
      <div className="flex justify-between pb-6 border-b-[1px] border-[#002A78]/30">
        <div className="flex justify-between w-3/4 ">
          <div className="flex w-full flex-nowrap items-center ml-6">
            <label htmlFor="" className="text-sm font-semibold ">
              שם הדו”ח
            </label>
            <input
              type="text"
              className="border  border-[#002A78] rounded-3xl mx-2 px-2 py-1 flex-grow placeholder:text-sm placeholder:text-[#002A78] "
              placeholder=" תן שם לדו”ח"
            />
          </div>
          <div className="flex relative flex-nowrap w-full items-center ">
            <label htmlFor="" className="text-sm font-semibold ">
              {" "}
              רשימת דוחות לבחירה
            </label>
            <input
              type="text"
              className="border border-[#002A78] rounded-3xl  mx-2 px-2 py-1 flex-grow placeholder:text-[#002A78] placeholder:text-sm "
              placeholder="בחר דו”ח"
            />
            <Image
              className="absolute left-4  "
              src="/options.svg"
              width={9}
              height={6}
              alt=" o"
            />
          </div>
        </div>
        <div className="flex rounded-3xl bg-[#002A78] p-[0.9px]">
          <button className="px-4  bg-white rounded-3xl items-stretch">
            שמור
          </button>
          <button className="px-4 text-white">מחק</button>
        </div>
      </div>

      <div className="py-4 flex h-full gap-4">
        <div className="w-1/5  h-full p-4 rounded-xl flex-col  bg-white font-normal text-xl">
          <div className="text-center font-semibold text-2xl pb-2">
            שדות אפשריים
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 rounded-3xl bg-[#EFF3FB] "
              placeholder=" חיפוש"
            />
            <Image
              className="absolute left-[5%] top-[26%]"
              src="/MagnifyingGlass.svg"
              width={20}
              height={20}
              alt="search"
            />
          </div>
          {fields.map((field) => (
            <div
              key={field}
              className="border-b-[1px] py-4 px-4 flex justify-between"
            >
              {field}
              <span onClick={() => handelReportFields(field, "plus")}>
                <Image src="/plus.svg" width={24} height={24} alt="plus" />
              </span>
            </div>
          ))}
        </div>

        <div className="w-1/5 p-4 rounded-xl bg-white">
          <div className="text-center font-semibold text-2xl pb-2">
            שדות הדו"ח
          </div>
          {reportFields.map((field,index) => (
            <div className="border-b-[1px] py-4 px-4 flex justify-between text-2xl">
              {field}

              <span onClick={()=>handelReportFields(field,"minus")}>
                <Image src="/minus.svg" width={24} height={24} alt="minus" />
              </span>
            </div>
          ))}
        </div>

        <div className="w-3/5 rounded-xl bg-white flex-col p-2">
                <div className="w-full text-white p-2 text-center rounded-xl text-xl font-semibold flex bg-[#002A78]  ">
                <div className="w-1/4 ">שם השדה</div>
                <div  className="w-1/4">שם לתצוגה </div>
                <div className="w-1/4">מיון</div>
                <div  className="w-1/4">סינון</div>
          </div>
          {reportFields.map((field) => 
            <div className="w-full p-4 text-center rounded-xl text-xl font-normal flex gap-4 items-center  ">
                <div className="w-1/4 ">{field}</div>
                <div  className="w-1/4" >
                  <input type="text" name="" id="" placeholder="" className="border w-full border-[#002A78] rounded-2xl pr-2"/>
          
                  </div>
                <div className="w-1/4 relative">
                <input type="" name="" id="" placeholder="בחרו דרך למילוי" className="border w-full border-[#002A78] rounded-2xl pr-2 placeholder:text-xl placeholder:text-[#002A78]"/>
            
                     <Image
              className="absolute top-3 left-[5%]"
              src="/options.svg"
              width={9}
              height={6}
              alt="o"
            />
          
                </div>
                <div  className="w-1/4 relative">
                <input type="text" name="" id="" placeholder="בחרו דרך לסינון" className="border  w-full border-[#002A78] rounded-2xl pr-2 placeholder:text-xl placeholder:text-[#002A78]" />
                    
                     <Image
                     onClick={ ()=> openOption()}
              className="absolute top-3  left-[5%]"
              src="/options.svg"
              width={9}
              height={6}
              alt="o"
            />
          {/* <div className="w-full z-10 absolute bg-slate-700 border border-[#002A78] border-t-0">
       
          
          </div> */}
                </div>
          </div>
          )}
          
      </div>    
      
      </div>
      <div className="flex justify-between ">
        <button className=" rounded-2xl p-[1px] bg-[#002A78] ">
          <div className="bg-white px-4 rounded-2xl" onClick={() => setReportFields([])}>איפוס</div>
        </button>
        <div className="flex gap-4">
          <button className="px-4 rounded-xl bg-[#002A78] text-white">
            ייצור דוח
          </button>
          <button className="px-4 rounded-xl  bg-[#002A78] text-white">
            ייצא PDF
          </button>
          <button className="px-4 rounded-xl bg-[#002A78] text-white">
            הפק לאקסל
          </button>
        </div>
      </div>
    </div>
  )}

