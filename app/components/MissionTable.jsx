import React from "react";
import TableHead from "./TableHead";
import MissionContent from "./MissionContent";

export default function MissionTable({
  data,
  updateMode,
  setUpdateMode,
  handleChange,
  headTable,
  deleteEmployee,
  tableWidth,
}) {
    
  const headLength = headTable.length;
  console.log(headLength);

  return (
    <div className={`w-${tableWidth} overflow-y-auto my-10 m-auto dirRtl pr-2 h-[85%] rounded-lg`}>
      {/* ראש הטבלה */}
      <div className="max-w-full">
        <TableHead
          headLength={`grid grid-cols-${headLength}`}
          headTable={headTable}
        />

        {/* תוכן הטבלה */}
        <MissionContent
            headLength={`grid-cols-${headLength} `}
            data={data}
            updateMode={updateMode}
            setUpdateMode={setUpdateMode}
            handleChange={handleChange}
            deleteEmployee={deleteEmployee}
          />
      </div>
    </div>
  );
}
