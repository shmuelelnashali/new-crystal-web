"use client";
import React, { useEffect, useRef, useState } from "react";
import EntrancesExits from "./EntrancesExits";
import Btn from "./Btn";

export default function TableRow({ data, rowIndex, handelAddEntry }) {
  const shouldRenderImage = data.entrances_exits.length < 3;
  const initialEntryExitObj = { entrance: "", exit: "", activity_code: "" };
  const [isTimeAdding, setIsTimeAdding] = useState(false);
  const [newEntryExitObj, setNewEntryExitObj] = useState(initialEntryExitObj);
  const [updateMode, setUpdateMode] = useState(false);
  const [waitingTime, setwaitingTime] = useState(data.extra_hours);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedElement, setFocusedElement] = useState(null);
  const [ignoreBlur, setIgnoreBlur] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // When clicking outside the component, handle blur
      if (
        isTimeAdding &&
        focusedElement &&
        !focusedElement.contains(event.target)
      ) {
        setIsTimeAdding(false);
        handelAddEntry(rowIndex, newEntryExitObj);
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [focusedElement, isTimeAdding, newEntryExitObj, rowIndex, handelAddEntry]);


  const handleBlur = (event) => {
    // Ensure that blur is handled correctly based on the focused element
    if (
      !ignoreBlur &&
      focusedElement &&
      !focusedElement.contains(event.relatedTarget)
    ) {
      setIsFocused(false);
      handelAddEntry(rowIndex, newEntryExitObj);
      setIsTimeAdding(false);
      setEntrance("");
      setExit("");
      setSelectMode(false);
      setSelectedOption("");
    }
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    setIgnoreBlur(false);
    setFocusedElement(event.currentTarget); // Track which element is focused
  };



  const toggleUpdateMode = () => {
    if(!isTimeAdding){

      setUpdateMode(!updateMode);
    }
    
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
    const timePattern = /^([0-2]?[0-9])?(:[0-5]?[0-9]?)?$/;
    if (timePattern.test(value)) {
      setter(value);
    }

    if (value.length === 5) {
      updateNewEntry(type, value);
    }
  };

  const updateNewEntry = (key, value) => {
    setNewEntryExitObj((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <div
        className="presentTable  items-center justify-center rounded-md border-b-2   text-center hover:bg-[#EBF1FA] hover:cursor-pointer"
        onClick={ toggleUpdateMode}
        onFocus={handleFocus}
      >
        <div className=" ">{data.date_time}</div>
        <div className=" ">{data.employee_number}</div>
        <div className="  ">{data.fullName}</div>
     
        <div className="col-span-3"
        
        >
          {!updateMode ? (
            data.entrances_exits.map((entrancesExits, index) => (
              <EntrancesExits
                key={index}
                entrancesExits={entrancesExits}
                rowIndex={rowIndex}
                entryExitIndex={index}
                isLast={index === data.entrances_exits.length - 1}
                shouldRenderImage={shouldRenderImage}
                handelAddEntry={handelAddEntry}
                newEntryExitObj={newEntryExitObj}
                setNewEntryExitObj={setNewEntryExitObj}
                toggleUpdateMode={toggleUpdateMode}
                isTimeAdding={isTimeAdding}
                setIsTimeAdding={setIsTimeAdding}
                handleTimeChange={handleTimeChange}
                updateNewEntry={updateNewEntry}
                handleFocu={handleFocus}
                setIsFocused={setIsFocused}
                handleBlur={handleBlur}
              />
            ))
          ) : (
            data.entrances_exits.map((entry, index) => (
              <div key={index} className="flex justify-around py-2 ">

                <input
                  className="h-[26px] max-w-[80px] text-center rounded-3xl border border-[#002A7B] hover:border-[#004A9B] focus:outline-none focus:border-[#004A9B]"
                  value={entry.activity_code}
                  onFocus={() => setFocusedElement(null)} 
                />
                <input
                  className="h-[26px] max-w-[80px] text-center rounded-3xl border border-[#002A7B] hover:border-[#004A9B] focus:outline-none focus:border-[#004A9B]"
                  value={entry.entrance}
                  onFocus={() => setFocusedElement(null)} 
                  onChange={(e) => handleTimeChange(e,   "entrance")}
                />
                <input
                  className="h-[26px] max-w-[80px] text-center rounded-3xl border border-[#002A7B] hover:border-[#004A9B] focus:outline-none focus:border-[#004A9B]"
                  value={entry.exit}
                    onFocus={() => setFocusedElement(null)} 
                    onChange={(e) => handleTimeChange(e,  "exit")}
                />
              </div>
            ))
          )}
        </div>
        <div className=" ">{data.contract_id}</div>
        <div className=" ">{data.attendance_for_pay}</div>
        <div>{data.waiting_time}</div>
        {updateMode ? (
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="h-[26px] max-w-[80px] text-center rounded-3xl border  border-[#002A7B] hover:border-[#004A9B] focus:outline-none focus:border-[#004A9B]"
              value={waitingTime}
              onChange={(e) => setwaitingTime(e.target.value)}
              onBlur={toggleUpdateMode}
            />
          </div>
        ) : (
          <div className=" ">{data.extra_hours}</div>
        )}

        <div className=" ">{data.total_attendance_time}</div>
        <div className=" ">{data.employee_isActive}</div>
        <div className=" ">{data.event}</div>
        <div className="flex justify-center items-center">
          <Btn text={"צפה במשימות"} />
        </div>
      </div>
    </div>
  );
}
