"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TabieSettings({ data, headers, page }) {
  const [updateRow, setUpdateRow] = useState();
  return (
    <div>
      <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
        <div className=" px-2  dirLtr h-full rounded-2xl overflow-y-scroll">
          <div className=" dirRtl bg-[#EFF3FB] rounded-lg ">
            <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
              <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
                {headers.map((header, index) => (
                  <div
                    key={header}
                    className=" text-center  truncate font-semibold text-xl"
                  >
                    {header}
                  </div>
                ))}
                <div
                  className="text-center text-xl font-semibold col-end-10
                 "
                >
                  פעולות
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2  text-base ">
              {data.map((code, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5"
                >
                  {Object.entries(code).map(([code_key, code_value], index) => (
                    <div
                      className={`${
                        index === Object.entries(code).length - 1 &&
                        updateRow === rowIndex &&
                        "col-span-2 "
                      }`}
                    >
                      {updateRow === rowIndex && index !== 0 ? (
                        <div className="flex w-full  px-2">
                          <div
                            className={`" rounded-full flex -w-full"
                             ${
                               index === Object.entries(code).length - 1 &&
                               "  bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]"
                             }`}
                           
                          >
                            <input
                              className={`" text-center w-full rounded-full outline-none border border-blue_color "
                              `}
                              // onChange={}
                              value={code_value}
                            />
                            {index === Object.entries(code).length - 1 && (
                              <div className="w-full flex justify-center  text-white">שמור שינויים</div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="text-center ">
                          {code_value}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex  carsor justify-around col-end-10 ">
                    <div
                      className={`bg-blue_color border border-blue_color gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}

                      onClick={() => {
                        setUpdateRow(rowIndex);
                        console.log(updateRow);
                      }}
                    >
                      <Image
                        src={"/editing.svg"}
                        width={15}
                        height={16}
                        alt={"uu"}
                      />

                      <p>עריכת שורה</p>
                    </div>
                    <Image src={"/bit.svg"} width={15} height={16} alt={"uu"} />
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
