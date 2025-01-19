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
  // handleEntryChange,
  isOpen,
  setIsOpen,
}) {
  // const [isOpen, setIsOpen] = useState(false);

  const handleEntryChange = (entryIndex, entryKey, value) => {
    const updatedEntries = [...entries];
    updatedEntries[entryIndex] = {
      ...updatedEntries[entryIndex],
      [entryKey]: value,
    };
    // שולח את המידע החדש
    handleChange(rowIndex, `entrances_exits`, updatedEntries);
  };

  const handleTimeChange = (entryId, field, e) => {
    let inputValue = e.target.value;
    //HH/MM/SS פונקצייה שעושה מבנה של
    const formattedValue = timeStructure(inputValue);

    if (formattedValue !== null) {
      handleEntryChange(entryId, field, formattedValue);
    }
  };

  return (
    <div
      onClick={() => handleRowClick(rowIndex)}
      className="flex  col-span-3 flex-col items-center justify-center"
    >
      {entries.map((entry, entryIndex) => (
        <div
          key={`entry-${entryIndex}-${entry.entrance}-${entry.exit}`}
          className="group relative w-full flex truncate"
        >
          {Object.entries(entry).map(([entryKey, entryValue]) =>
            editingRowIndex !== rowIndex ? (
              <div
                key={`${entryKey}-${entryIndex}`}
                className={clsx(
                  `w-full flex items-center justify-center py-2 truncate`,
                  {
                    "bg-[#A7BFE826]/15": entryKey !== "activity_code",
                    "border-t border-t-[#A7BFE826]/15":
                      entryIndex >= entries.length - (newEntriesCount || 0) &&
                      entryKey !== "activity_code",
                  }
                )}
              >
                {typeof entryValue === "string" && entryValue.includes(":")
                  ? entryValue.split(":").slice(0, 2).join(":")
                  : entryValue}
              </div>
            ) : (
              <div
                key={`${entryKey}-${entryIndex}-edit`}
                className={clsx(
                  `h-full py-2 px-3 w-full flex items-center justify-center`,
                  {
                    "px-3": entryKey === "activity_code",
                    "bg-[#A7BFE826]/15": entryKey !== "activity_code",
                  }
                )}
              >
                {/* <div> */}
                {entryKey !== "activity_code" ? (
                  <input
                    className="rounded-full outline-none border border-blue_color w-full text-center flex items-center justify-center"
                    type="text"
                    value={entryValue.split(":").slice(0, 2).join(":") || ""}
                    onChange={(e) => handleTimeChange(entryIndex, entryKey, e)}
                  />
                ) : (
                  <CodeSelector
                    value={entryValue}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    // onChange={(value) =>
                    //   handleEntryChange(entryIndex, entryKey, value)
                    // }
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
              className="absolute top-2.5 left-2 hover:cursor-pointer hidden group-hover:block"
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
              className="absolute top-2.5 right-2 hover:cursor-pointer hidden group-hover:block"
            />
          )}
        </div>
      ))}
    </div>
  );
}
