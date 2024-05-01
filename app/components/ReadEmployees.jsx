import React from "react";

export default function ({ data, index, setUpdateMode,  }) {
  
  //GIVE THE UPDATE FORMAT DATE FOR READ MOOD
  const formatDateForRead = (dateString) => {
    if (dateString.includes("-")) {
      const newDate = dateString.split("-");
      return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
    }
    const [day, month, year] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };


  return (
    
    <>
      {Object.entries(data).map(([key, value], i) => (
        <div key={key} className="text-center">
          {key === "start" || key === "end" ? formatDateForRead(value): value}
        </div>
      ))}
    </>
  );
}
