"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "react-select";
import SelectBox from "./SelectBox";

export default function EntrancesExits({
  entrancesExits,
  entryExitIndex,
  rowIndex,
  isLast,
  handelAddEntry,
  shouldRenderImage,
}) {
  const initialEntryExitObj = { entrance: "", exit: "", activity_code: "" };

  const [isTimeAdding, setIsTimeAdding] = useState(false);
  
  const [isFocused, setIsFocused] = useState(false);
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [newEntryExitObj, setNewEntryExitObj] = useState(initialEntryExitObj);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    console.log(event.currentTarget);
    if (
      event.relatedTarget === null ||
      !event.currentTarget.contains(event.relatedTarget) 

    )
     {
      setIsFocused(false);
      handelAddEntry(rowIndex, newEntryExitObj);
      setIsTimeAdding(false);
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    updateNewEntry("activity_code", option);
    setSelectMode(false);
    console.log(option);
  };

  const handleTimeChange = (e, setter, type) => {
    let value = e.target.value;

    // Remove all non-numeric and non-colon characters
    value = value.replace(/[^0-9:]/g, "");

    if (value.length === 1 && value[0] > "2") {
      value = "2";
    }

    if (value.length === 2 && value[0] === "2" && value[1] > "3") {
      value = "23";
    }

    if (value.length === 2 && !value.includes(":")) {
      value += ":";
    }

    if (value.length === 4 && value[3] > "5") {
      value = value.slice(0, 3) + "5";
    }

    // Validate the time format and ranges
    const timePattern = /^([0-2]?[0-9])?(:[0-5]?[0-9]?)?$/; //  /^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/
    if (timePattern.test(value)) {
      setter(value);
    }

    if (value.length === 5) {
      updateNewEntry(type, value);
    }
  };

  // const handleBlur = () => {
  //   if (newEntryExitObj.entrance || newEntryExitObj.exit || newEntryExitObj.activity_code) {
  //     setNewEntryExitObj(initialEntryExitObj);
  //   }
  //   setSelectMode(false);

  //   setEntrance("");
  //   setExit("");
  //   console.log(initialEntryExitObj);
  // };

  const updateNewEntry = (key, value) => {
  console.log(key, value);
    setNewEntryExitObj((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className="py-2   ">{entrancesExits.activity_code}</div>

        <div
          className={`${
            entryExitIndex >= 1 ? "border-t  " : ""
          } col-span-2 relative  bg-[#A7BFE8]/15 flex  items-center`}
        >
          <div className="py-2 h-full flex-1 ">{entrancesExits.entrance}</div>

          <div className="relative group flex-1">
            <div className="py-2 ">
              {entrancesExits.exit}
              {isLast && shouldRenderImage && (
                <div className="flex justify-center items-center">
                  <Image
                    src="/plus.svg"
                    width={22}
                    height={22}
                    alt="plus icon"
                    className="absolute top-1/2 left-2  transform -translate-y-1/2 hidden group-hover:block"
                    onClick={(e) => {
                      setIsTimeAdding(true);
                       
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isTimeAdding && (
        <div
          className={`grid grid-cols-3 ${isFocused ? "bg-purple-400" : ""}`}
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="py-2 relative  inline-block">
            <input
              className="h-[26px] w-[84px] text-center rounded-3xl border border-[#002A7B]"
              value={selectedOption}
              onClick={() => setSelectMode(true)}
              readOnly
              // onBlur={handleBlur}
            />
            {selectMode && <SelectBox onSelect={handleSelect} />}
          </div>

          <div className="  bg-[#A7BFE8]/15  flex  py-2 col-span-2 ">
            <div className="flex-1  ">
              <input
                type="text"
                maxLength={5}
                value={entrance}
                onChange={(e) => handleTimeChange(e, setEntrance, "entrance")}
                className="h-[26px] w-[84px] text-center rounded-3xl border  border-[#002A7B]  "
                placeholder="00:00"
                // onBlur={(e) => {console.log(e)}}
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                maxLength={5}
                value={exit}
                onChange={(e) => handleTimeChange(e, setExit, "exit")}
                className="h-[26px] w-[84px] text-center rounded-3xl border border-[#002A7B]"
                placeholder="00:00"
                // onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
