"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SelectBox from "./SelectBox";

export default function EntrancesExits({
  shouldRenderImage,
  entrancesExits,
  entryExitIndex,
  rowIndex,
  isLast,
  handelAddEntry,
  handleFocus,
  toggleUpdateMode,
  setUpdateMode,
  isTimeAdding,
  setIsTimeAdding,
  handleTimeChange,
  updateNewEntry,
  newEntryExitObj,
  setNewEntryExitObj,
  isFocused,
  setIsFocused,
  focusedElement,
  setFocusedElement,
  ignoreBlur,
  setIgnoreBlur
}) {
  const inputRef = useRef(null);

  
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  

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
      setUpdateMode(false);
      setEntrance("");
      setExit("");
      setSelectMode(false);
      setSelectedOption("");
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    updateNewEntry("activity_code", option);
    setSelectMode(false);
    setIgnoreBlur(false);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling
    setIgnoreBlur(true); // Set flag to ignore blur while interacting with selectBox
  };



  return (
    <>
      <div className="grid grid-cols-3">
        <div className="py-2 truncate">{entrancesExits.activity_code}</div>

        <div
          className={`${
            entryExitIndex >= 1 ? "border-t" : ""
          } col-span-2 relative bg-[#A7BFE8]/15 flex items-center`}
        >
          <div className="h-full flex-1 items-center justify-center flex py-2">
            {entrancesExits.entrance}
          </div>

          <div className="relative group flex-1">
            <div className="py-2">
              {entrancesExits.exit}
              {isLast && shouldRenderImage && (
                <div className="flex justify-center items-center">
                  <Image
                    src="/plus.svg"
                    width={22}
                    height={22}
                    alt="plus icon"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 hidden group-hover:block"
                    onClick={(e) => {
                      e.stopPropagation(); 
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
          className={`grid grid-cols-3 ${isFocused ? "" : ""}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <div className="py-2 relative inline-block">
            <input
              className="h-[26px] max-w-[80px] text-center rounded-3xl border border-[#002A7B] hover:border-[#004A9B] focus:outline-none focus:border-[#004A9B]  "
              value={selectedOption}
              onClick={() => {
                setSelectMode(true);
                setFocusedElement(inputRef.current); // Set as focused element
              }}
              readOnly
              ref={inputRef}
              onBlur={handleBlur}
            />
            {selectMode && (
              <SelectBox
                onSelect={handleSelect}
                onDropdownClick={handleDropdownClick}
              />
            )}
          </div>

          <div className="bg-[#A7BFE8]/15 flex py-2 col-span-2">
            <div className="flex-1">
              <input
                type="text"
                maxLength={5}
                value={entrance}
                onChange={(e) => handleTimeChange(e, setEntrance, "entrance")}
                className="h-[26px] w-[84px] text-center rounded-3xl border border-[#002A7B]"
                placeholder="00:00"
                onFocus={() => setFocusedElement(null)} // Reset focused element when focusing on time inputs
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
                onFocus={() => setFocusedElement(null)} // Reset focused element when focusing on time inputs
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
