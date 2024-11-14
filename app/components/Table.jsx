import React from "react";
import TableHead from "./TableHead";
import TableContent from "./TableContent";

export default function Table({
  data,
  updateMode,
  setUpdateMode,
  handleChange,
  toggleUpdateInput,
  setToggleUpdateInput,
  ifEmpty,
  // changeTheRowToEdit,
  headTable,
  deleteEmployee,
  changeTheRowToEdit,
  tableWidth
}) {
  

  
const headLength=headTable.length
  console.log(headLength )

  return (
    <div className={`w-${tableWidth} m-auto dirRtl pr-2 h-full rounded-lg`}

    >
      {/* ראש הטבלה */}
      <div className="max-w-full">
        <TableHead
          headLength={`grid-cols-${headLength}`}
          headTable={headTable}
          data={data}
        />

        {/* תוכן הטבלה */}
        <TableContent
          headLength={`grid-cols-${headLength}`}
          data={data}
          headTable={headTable}
          updateMode={updateMode}
          setUpdateMode={setUpdateMode}
          handleChange={handleChange}
          toggleUpdateInput={toggleUpdateInput}
          setToggleUpdateInput={setToggleUpdateInput}
          ifEmpty={ifEmpty}
          changeTheRowToEdit={changeTheRowToEdit}
          deleteEmployee={deleteEmployee}
        />
      </div>
    </div>
  );
}
