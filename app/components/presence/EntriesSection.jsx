import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ToggleCode from "./ToggleCode";
import { CodeSelector } from "./CodeSelector";
import { parse, format, isValid } from "date-fns";
import { timeStructure } from "@/app/util/dateFormat";

export function EntriesSection({
  entries,
  rowIndex,
  newEntriesCount,
  onAddEntry,
  onDeleteEntry,
  editingRowIndex,
  handleChange,
  handleRowClick,
  setActiveEntryIndex,
  isOpen,
  setIsOpen,
  rawInputs,
  setRawInputs,
}) {
  // const [isOpen, setIsOpen] = useState(false);
  // const [rawInputs, setRawInputs] = useState({});

  const handleTimeChange = (entryIndex, entryKey, e) => {
    let inputValue = e.target.value.replace(/[^\d]/g, "");

    //HH:MM שומר על מבנה
    let displayValue = inputValue;
    if (inputValue.length > 2) {
      displayValue = inputValue.slice(0, 2) + ":" + inputValue.slice(2);
    }

    // לא מורשה מעל 24:00
    const validatedValue = timeStructure(displayValue);

    if (validatedValue === null) {
      return;
    }
    setRawInputs((prev) => ({
      ...prev,
      [`${entryIndex}-${entryKey}`]: displayValue,
    }));

    if (inputValue.length >= 4) {
      const updatedEntries = [...entries];
      const currentEntry = { ...updatedEntries[entryIndex] };
      currentEntry[entryKey] = validatedValue;
      updatedEntries[entryIndex] = currentEntry;
      handleChange(rowIndex, "entrances_exits", updatedEntries);

      console.log(rawInputs, "rr");
      // Clear raw input after successful update
      setRawInputs((prev) => ({
        ...prev,
        [`${entryIndex}-${entryKey}`]: "",
      }));
    }
  };

  return (
    <div
      className="flex   flex-col items-center justify-center "
    >
      {entries.map((entry, entryIndex) => (
        <div
        onClick={(e) => handleRowClick(rowIndex, e)}
          key={`entry-${entryIndex}-${entry.entrance}-${entry.exit}`}
          className="group relative w-full justify-center items-center flex truncate"
        >
          {Object.entries(entry).map(([entryKey, entryValue]) =>
            editingRowIndex !== rowIndex ? (
              <div
                key={`${entryKey}-${entryIndex}`}
                className={clsx(
                  ` flex items-center justify-center py-2 truncate`,
                  {
                    "bg-[#A7BFE826]/15 w-1/3": entryKey !== "activity_code",
                    " w-1/3": entryKey == "activity_code",
                    "border-t border-t-[#A7BFE826]/15":
                      entryIndex >= entries.length - (newEntriesCount || 0) &&
                      entryKey !== "activity_code",
                  }
                )}
              >
                <div className="truncate">
                  {typeof entryValue === "string" && entryValue.includes(":")
                    ? entryValue.split(":").slice(0, 2).join(":")
                    : entryValue == 0
                    ? "-"
                    : entryValue?.name}
                </div>
              </div>
            ) : (
              <div
                key={`${entryKey}-${entryIndex}-edit`}
                className={clsx(
                  `h-full py-2 px-3  w-1/3 flex items-center justify-center`,
                  {
                    "w-1/3": entryKey === "activity_code",
                    "bg-[#A7BFE826]/15 w-1/3": entryKey !== "activity_code",
                  }
                )}
              >
                {/* <div> */}
                {entryKey !== "activity_code" ? (
                  <input
                    className=" rounded-full outline-none border truncate border-blue_color w-3/4 text-center flex items-center justify-center"
                    type="text"
                    value={
                      rawInputs[`${entryIndex}-${entryKey}`] ||
                      (typeof entryValue === "string"
                        ? entryValue.split(":").slice(0, 2).join(":")
                        : "")
                    }
                    onChange={(e) => handleTimeChange(entryIndex, entryKey, e)}
                    onClick={(e)=>e.stopPropagation()}
                  />
                ) : (
                  <CodeSelector
                    value={entryValue}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    onClick={(e) =>{e.stopPropagation(), setActiveEntryIndex(entryIndex)}}
                  />
                )}
              </div>
              // </div>
            )
          )}
          {/* {isOpen && (
            <ToggleCode
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              // onSelect={handleCodeSelect}
            />
          )} */}

          {entries.length < 3 && entryIndex === entries.length - 1 && (
            <Image
              src="/plus.svg"
              width={20}
              height={20}
              alt="Add Entry"
              onClick={(e) => {
                e.stopPropagation();
                onAddEntry(rowIndex);
              }}
              className="absolute top-2.5 left-0.5 hover:cursor-pointer hidden group-hover:block"
            />
          )}

          {/* Conditionally render Delete (red X) icon */}
          {entries.length > 1 && (
            <Image
              src="/redX.svg"
              width={20}
              height={20}
              alt="Delete Entry"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteEntry(rowIndex, entryIndex);
              }}
              className="absolute top-2.5 right-0 hover:cursor-pointer hidden group-hover:block"
            />
          )}
        </div>
      ))}
    </div>
  );
}
