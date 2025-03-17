"use client";
import React from "react";
import MissionTable from "../missions/MissionTable";
import { MoveDown, MoveUp } from "lucide-react";
import Image from "next/image";
import Search from "../ui/Search";

export default function Table({ data , headTable }) {
  console.log(headTable, "ddd");

  return (

    <div className="dirRtl w-full">
      <div className="pb-7">
      <div className="w-1/2">
        <Search/>
      </div></div>
      <div className="w-full">
        {" "}
        <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
          <div className="flex w-full bg-blue_color rounded">
            <div className="w-[60px]"></div>
            <div
              className={`text-[20px] grid ${"grid-cols-7"} gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}
            >
              {headTable.map((head, index) => (
                <div
                  key={head}
                  className={`relative truncate flex justify-center items-center  }`}
                >
                  <div className={`truncate`}>{head}</div>

                  {
                    <div className="mr-1 flex">
                      <MoveDown
                        onClick={() => {
                          // handleClickArrows(index, "desc");
                        }}
                        size={15}
                        // color={
                        //   columnToSortOn?.index === index &&
                        //   columnToSortOn?.direction === "asc"
                        //     ? "gray"
                        //     : "white"
                        // }
                      />
                      <MoveUp
                        onClick={() => {
                          // handleClickArrows(index, "asc");
                        }}
                        size={15}
                        // color={
                        //   columnToSortOn?.index === index &&
                        //   columnToSortOn?.direction === "desc"
                        //     ? "gray"
                        //     : "white"
                        // }
                      />
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <MissionTable data={data} headTable={headTable} /> */}
      </div>
      <div className=" w-full   dirRtl">
        {data.map((mission, index) => (
          <div
            key={index}
            className={`flex w-full  border-b  border-t-[#A7BFE8]/30`}
          >
            {console.log(mission)}
            {/* DELETE BUTTON */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                deleteEmployee(mission);
              }}
              className={`w-[60px]  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            >
              <Image src={"/trash.svg"} height="20" width="20" alt="trash" />
            </div>

            <div
              className={` py-2 dirRtl grid grid-cols-7  w-full justify-around  font-normal  leading-5  text-base text-blue_color`}
            >
              {Object.entries(mission).map(([key, value]) => (
                <div key={key} className="flex w-full justify-center items-center ">
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
