import { MoveDown, MoveUp } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function TablesHead({
  headTable,
  headLength,
  columnToSortOn,
  setColumnToSortOn,
}) {
  const pathName = usePathname();

  // מיפוי התנאים לפי ראוטים
  const getCurrentRoute = ()=>{
    const routes ={
      mission: "/mission",
      financialRequirements: "/financialRequirements",
      // employees: "/employees"
    }
    return Object.keys(routes).find(route => 
      pathName.includes(routes[route])
    );
  }
  const currentRoute = getCurrentRoute();

  const handleClickArrows = (index, direction) => {
    setColumnToSortOn({ index, direction });
    const columnName = headTable[index];

    if (direction === "asc") {
      toast(`סדר עולה הוחל על\n${columnName}`, {
        icon: "⬆️",
        style: {
          borderRadius: "10px", 
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast(`סדר יורד הוחל על\n${columnName}`, {
        icon: "⬇️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
      <div className="flex w-full bg-blue_color rounded">
        <div className="w-[60px]"></div>
        <div
          className={`text-base grid ${headLength
          } gap-3 w-full font-semibold  py-2 text-center items-center text-white`}
        >
          {headTable.map((head, index) => (
            <div
              key={head}
              className={`relative truncate flex justify-center items-center  ${
                head === "מייל" && "ml-16"
              }`}
            >
              <div className={`truncate`}>{head}</div>

              {currentRoute && (
                <div className="mr-1 flex">
                  <MoveDown
                    onClick={() => {
                      handleClickArrows(index, "desc");
                    }}
                    size={13}
                    color={
                      columnToSortOn?.index === index &&
                      columnToSortOn?.direction === "asc"
                        ? "gray"
                        : "white"
                    }
                  />
                  <MoveUp
                    onClick={() => {
                      handleClickArrows(index, "asc");
                    }}
                    size={13}
                    color={
                      columnToSortOn?.index === index &&
                      columnToSortOn?.direction === "desc"
                        ? "gray"
                        : "white"
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
