"use client";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRef } from "react";

export default function DateFilter() {
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState("טווח");
  const option = [
    "לפני תאריך נבחר",
    "לפני תאריך נבחר (כולל) ",
    "אחרי תאריך נבחר",
    "אחרי תאריך נבחר (כולל)",
    "בתאריך נבחר",
    "טווח",
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
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const currentDate = getCurrentDate();
  return (
    <>
      <div className="w-full flex gap-2 ">
        <div className=" w-full flex gap-2">
          <div className="w-full  items-center flex justify-between overflow-hidden bg-blue_color rounded-full">
            <div
              onClick={() => {
                setSelect(!select), console.log(select);
              }}
              className="relative w-full text-white flex text-center justify-between  px-3 "
            >
              <p className=" px-2">{selected}</p>
              <div className="">
                <Image
                  className="absolute top-1/2 transform -translate-y-1/2"
                  src={"/whiteArrow.svg"}
                  width={10}
                  height={10}
                  alt="x"
                />
              </div>
            </div>

            <div className="relative w-full pr-2">
              <input
                ref={dateFromRef}
                defaultValue={currentDate}
                type="date"
                className="w-full  outline-none px-3 border  border-blue_color rounded-full "
              />
              <div
                className="absolute left-2  top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                onClick={handleIconClickFrom}
              >
                <CalendarDays size={19} strokeWidth={1} />
              </div>
            </div>
          </div>
          {selected === "טווח" && (
            <>
              <Image
                className=""
                src="/leftArrow.svg"
                width={24}
                height={22}
                alt=""
              />
              <div className="w-1/2 relative">
                {" "}
                <input
                  ref={dateToRef}
                  defaultValue={currentDate}
                  min={dateFromRef}
                  type="date"
                  className="w-full px-3 outline-none  border  border-blue_color rounded-full "
                />
                <div
                  className="absolute left-2  top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                  onClick={handleIconClickTo}
                >
                  <CalendarDays size={19} strokeWidth={1} />
                </div>
              </div>
            </>
          )}
        </div>
        <Image
          onClick={() => removeItem(fieldObj)}
          className=""
          src="/bit.svg"
          width={15}
          height={15}
          alt=""
        />
      </div>
      {select && (
        <div className=" shadowForDrop absolute rounded-xl  bg-white z-30  p-2">
          {option.map((value, i) => (
            <div key={i} className="">
              <div
                onClick={() => {
                  setSelected(value);
                }}
                className="hover:bg-blue_color whitespace-nowrap hover:text-white p-2 rounded-lg "
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
