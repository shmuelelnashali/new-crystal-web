"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ReportGenerator() {
  const [filidsTo, setFilidsTo]=useState([])
 const user=[{


 }]
  const buttons = [
    { text: "בטל", icon: "censel.svg" },
    { text: "חדש", icon: "new.svg" },
    { text: "שמור", icon: "save.svg" },
    { text: "יצוא לקובץ Excel", icon: "download.svg" },
    { text: "שלח", icon: "send.svg" },
    { text: "שנה שם", icon: "changeName.svg" },
    { text: "הוסף למועדפים", icon: "star.svg" },
    { text: "מחק", icon: "bit.svg", color: "red" },
  ];
  const fields = [
    "שם עובד",
    " מספר עובד",
    " שעת כניסה 1",
    " שעת כניסה 2",
    " שעת יציאה 1",
    " שעת יציאה 2",
    "תאריך",
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
  ]
  
  const [draggedItem, setDraggedItem] = useState(null);
    
      const handleDragStart = (e, item) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
      };
    
      const handleDragEnd = () => {
        setDraggedItem(null);
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
        console.log(e);
        e.target.classList.add("dragndrop");
        e.dataTransfer.dropEffect = 'move';
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        if(!filidsTo.includes(draggedItem)){
          const a=[...filidsTo]

          a.push(draggedItem)
          setFilidsTo(a);
      }
        handleDragEnd();
      };

  return (
    <div className="h-[93%] flex flex-col w-full  rounded-xl p-3 bg-[#EFF3FB]">
      <div className=" flex gap-4  ">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`border ${
              button.color
                ? "border-[#B00000] text-[#B00000]"
                : "border-[#002A78]"
            } flex gap-2 justify-center items-center px-4 py-[2px] bg-white rounded-3xl`}
            onClick={() => console.log(button.text)}
          >
            <Image src={button.icon} width={15} height={15} />
            <div>{button.text}</div>
          </button>
        ))}
      </div>

      <div className="py-4 flex gap-4 h-[98%]"> 
      <div className=" bg-white w-1/5 p-2 rounded-xl ">
        <div className="dirLtr  h-[98%] p-4   flex-col overflow-y-scroll font-normal text-xl">
         
          <div className=" text-center font-semibold text-2xl pb-2">
            שדות אפשריים
          </div>
          <div className=" dirRtl"> 
          <div className="relative">
            <input
              type="text"
              className="dirRtl w-full p-2 rounded-3xl bg-[#EFF3FB] "
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
       
         {fields.map((field ,i) => (
            <div draggable  
             onDragStart={(e)=> handleDragStart(e, field)}
            onDragEnd={handleDragEnd} key={i}  className="border-b-[1px] py-4 px-4 flex  ">
             <p  
             
            >{field}</p>
            </div>
          ))}</div>
        </div>
        </div>
        <div className="flex flex-col  w-4/5 rounded-lg h-full gap-1 ">
          <div  className="bg-white rounded-lg p-2 h-1/2  flex flex-col overflow-hidden">
            <div className="flex justify-between ">
              <div className="inline bg-[#002A78] rounded-[4px] px-8 py-1 text- text-white ">
                מסננים
              </div>
              <div className="flex bg-[#002A78] rounded-full px-2 py-1  gap-2 text-white ">
                <Image
                  className="white-image"
                  src="/bit.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <Image
                  className="white-image "
                  src="options.svg"
                  width={13}
                  height={13}
                  alt=""
                />
              </div>
            </div>

     

            <div onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e)} className="hov h-[100%] pb-2  overflow-auto">
              <div 
              className="  justify-items-center grid grid-cols-3 gap-x-10 gap-5 mt-5 ">
                {filidsTo.map((field,i) => (
                  <div key={i} className="w-full px-5">
                    <label htmlFor="" className="block">
                      {" "}
                      {field}
                    </label>
                    <div className=" flex gap-2 ">
                      <input
                        type="text"
                        className=" outline-none pr-3 border border-[#002A78] rounded-full w-full"
                      />
                      <Image
                        className=""
                        src="/bit.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="text-white">
            <button className="bg-[#002A78] px-[30px] py-[11px] rounded-full flex gap-3 text-xl font-normal items-center m-1">
              <Image
                className=""
                src="/refresh.svg"
                width={20}
                height={20}
                alt=""
              />
              רענן נתונים
            </button>
          </div>

          <div className="bg-white h-4/5 p-2 flex gap-1 rounded-lg">
            {/* <div className=" bg-white w-1/3 flex flex-col">
              <div className="bg-[#002A78] p-2 rounded-lg h-10 text-white">
              </div>
            </div> */}

            <div className="bg-[#EFF3FB] w-full border-dashed border-2 border-[#002A78] rounded-lg p-2">
              <div className="w-full h-full flex justify-center items-center">
                <Image
                 
                src={"addFilid.svg"}
                width={422}
                height={200}
                />

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
