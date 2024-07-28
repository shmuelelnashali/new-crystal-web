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
  changeTheRowToEdit,
  headTable,
  deleteEmployee,



  tableWidth
}) {
  
// <<<<<<< eli1
  
//   return (
//     <div
//       dir="ltr"
//       className={` h-full w-${tableWidth}  border overflow-y-auto mx-auto border-[#F7F9FD]`}
// =======
  const headLength = headTable.length;
  console.log(data, "data");

  return (
    <div
      dir="ltr"
      className=" h-[85%]  border overflow-y-auto   border-[#F7F9FD]"

    >
      {/* ראש הטבלה */}
      <div dir="rtl" className="w-full pr-2 ">
        <TableHead
        headLength={headLength}
          headTable={headTable}
          data={data}
        />

        {/* תוכן הטבלה */}
        <TableContent
        headLength={headLength}
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
