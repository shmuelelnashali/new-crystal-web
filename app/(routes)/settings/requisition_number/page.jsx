"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const data = ["1", "2", "3", "4", "5", "6", "7"];
  const [code, setCode] = useState();
  const [option, setOption] = useState(false);
  return (
    <div
      className="bg-[#EFF3FB69]/40
 w-full h-full rounded-xl flex justify-center items-center"
    >
      <div className="w-2/3">
        <p className=" w-full text-center font-bold text-3xl p-2">
          הפקת מספרי דרישה
        </p>
        <div className="bg-[#EFF3FB] p-6 px-10 text-left rounded-xl  ">
          <div className="flex gap-10  p-6 px-12 text-right">
            {" "}
            <div className="flex flex-col w-1/2">
              <label htmlFor="">קוד גמ"ש</label>
              <div
                onClick={() => setOption(!option)}
                className="relative w-full"
              >
                <input
                  type="text"
                  className=" w-full rounded-full p-2 border box-shadow bg-white outline-none "
                  value={code}
                  readOnly
                />
                <Image
                  className="absolute -translate-y-1/2 left-4 top-1/2"
                  src={"/options.svg"}
                  width={9}
                  height={9}
                  alt="x"
                />
                {option && (
                  <div className="w-full box-shadow p-2  bg-white absolute">
                    {data.map((value, index) => (
                      <div
                        onClick={() => setCode(value)}
                        className="py-2  text-center border-b-2 "
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <p htmlFor="">מספר דרישה</p>
              <div className="bg-blue_color/10 p-2 rounded-full">{123456}</div>
            </div>
          </div>
          <button className=" rounded-full bg-blue_color text-white px-6 py-1">
            שמירה
          </button>
        </div>
      </div>
    </div>
  );
}
