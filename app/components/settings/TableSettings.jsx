"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DeleteRow from "./DeleteRow";

export default function TabieSettings({ data, headers, page }) {
  const pathName = usePathname();
  const [updateIndex, setUpdateIndex] = useState();
  const [updateRow, setUpdateRow] = useState({});
  const [deleteRow, setDeleteRow] = useState();
  const handeeCanghe = (key, value) => {
    setUpdateRow((prve) => ({ ...prve, [key]: value }));
    console.log(updateRow);
  };
  return (
    <div>
      <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
        <div className=" px-2  dirLtr h-full rounded-2xl overflow-auto">
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
              {data.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5"
                >
                  {Object.entries(row).map(([code_key, code_value], index) => (
                    <div
                      className={`${
                        index === Object.entries(row).length - 1 &&
                        updateIndex === rowIndex &&
                        " col-span-2 "
                      }${
                        pathName.includes("stages") &&
                        index === Object.entries(row).length - 1 &&
                        updateIndex === rowIndex &&
                        " w-full col-span-5"
                      }`}
                    >
                      {updateIndex === rowIndex && index !== 0 ? (
                        <div className="flex w-full  px-2">
                          <div
                            className={`" rounded-full flex w-full"
                             ${
                               index === Object.entries(row).length - 1 &&
                               "  bg-gradient-to-r  from-blue_color via-blue_color to-[#EFF3FB] w-full"
                             }`}
                          >
                            <input
                              className={`" text-center w-full rounded-full outline-none border border-blue_color "
                              `}
                              onFocus={() => handeeCanghe(code_key, "")}
                              onChange={(e) =>
                                handeeCanghe(code_key, e.target.value)
                              }
                              value={updateRow[code_key] || ""}
                            />
                            {index === Object.entries(row).length - 1 && (
                              <div
                                className={`${
                                  pathName.includes("stages")
                                    ? " px-4 "
                                    : " w-full "
                                }  flex justify-center  text-white`}
                              >
                                שמור שינויים
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="text-center ">
                          {code_value}
                          {/* <span className="text-xs">{code_key.includes("price")&&' ש"ח'}</span>  */}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex cursor-pointer justify-around col-end-10 ">
                    <div
                      className={`${
                        updateIndex === rowIndex
                          ? "bg-blue_color/20 border border-blue_color/5"
                          : "bg-blue_color border border-blue_color"
                      }  gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
                      onClick={() => {
                        setUpdateIndex(rowIndex);
                        setUpdateRow(row);
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

                    <Image
                      onClick={() => {
                        setDeleteRow(row), console.log(row);
                      }}
                      src={"/bit.svg"}
                      width={15}
                      height={16}
                      alt={"uu"}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {deleteRow && <DeleteRow row={deleteRow} />}
    </div>
  );
}
