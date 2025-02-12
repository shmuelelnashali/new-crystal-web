import clsx from "clsx";
import React from "react";

export default function 



PresenceTableHead() {
  const headers = [
    "תאריך",
    "מספר עובד",
    "שם מלא",
    ["קוד פעילות", "כניסה", "יציאה"],
    "קוד הסכם",
    "סהכ נוכח",
    "נוכח לשכר",
    "ש. המתנה",
    "ש. נוספות",
    "היעדרות לשכר",
    "סטטוס",
    "משימות",
  ];

  return (
    <>
      <div className="presentTable items-center dirRtl font-semibold sticky top-0 z-10 justify-around text-white bg-blue_color py-2 rounded-md">
        {headers.map((header, index) => (
          <div
            className={clsx("flex justify-center truncate items-center", {
              "col-span-3 grid grid-cols-3  ": Array.isArray(header),
            
            })}
            key={index}
          >
            {Array.isArray(header)
              ? header.map((subHeader, subIndex) => (
                  <div
                    className={clsx(`flex  w-full justify-center text-center  items-center`,{})}
                    key={subIndex}
                  >
                   <div className={clsx(`truncate w-full`,{
                      // " text-center  ": subHeader === "יציאה",
                      // " text-center ": subHeader === "כניסה" || subHeader === "קוד פעילות",
                    })}
                    >{subHeader}</div> 
                  </div>
                ))
              : <div className="truncate">{header}</div> }
          </div>
        ))}
      </div>
    </>
  );
}
