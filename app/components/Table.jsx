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
    <div
      dir="ltr"
      className={` h-[86.5%]  w-${tableWidth} m-auto overflow-y-auto pr-2  rounded-lg`}

    >
      {/* ראש הטבלה */}
      <div dir="rtl" className="w-full  ">
        <TableHead
          headLength={` grid-cols-${headLength}`}
          headTable={headTable}
          data={data}
        />

        {/* תוכן הטבלה */}
        <TableContent
          headLength={` grid-cols-${headLength}`}
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
