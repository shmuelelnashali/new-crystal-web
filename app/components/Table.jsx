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
  headTable,
  deleteEmployee,
  changeTheRowToEdit
}) {
  return (
    <div
      dir="ltr"
      className=" h-full   border overflow-y-auto  border-[#F7F9FD]"
    >
      {/* ראש הטבלה */}
      <div dir="rtl" className="w-full pr-2 ">
        <TableHead
          headTable={headTable}
          data={data}
        />

        {/* תוכן הטבלה */}
        <TableContent
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
