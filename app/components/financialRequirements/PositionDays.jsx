// import React, { useState } from "react";
// import RowDisplay from "./RowDisplay";

// export default function PositionDays() {
//   const [sum, setsum] = useState("00:00")
//   const headersAndInputs = [
//     { header: "שם", placeholder: "יש לבחור" },
//     { header: "כמות ימים נדרשת", placeholder: "0" },
//     { header: "עלות ליחידה", placeholder: "0" },
//     { header: "עלות כוללת", placeholder: "00:00", sum:true },
//     { header: "פירוט",  placeholder: "" },
//   ];

//   return (
//     <RowDisplay
//       headers={headersAndInputs}

//     />
//   );
// }
import React, { useState } from "react";
import RowDisplay from "./RowDisplay";

export default function PositionDays({register}) {
  const [rowData, setRowData] = useState({
    name: "",
    requiredDays: "0",
    unitCost: "0",
    totalCost: "00:00",
    details: "",
  });

  const headersAndInputs = [
    { header: "שם", key: "name", placeholder: "יש לבחור" },
    { header: "כמות ימים נדרשת", key: "requiredDays", placeholder: "0" },
    { header: "עלות ליחידה", key: "unitCost", placeholder: "0" },
    { header: "עלות כוללת", key: "totalCost", placeholder: "00:00", sum: true },
    { header: "פירוט", key: "details", placeholder: "" },
  ];

  // const handleInputChange = (updatedRow) => {
  //   setRowData(updatedRow);
  // };

  return (
    <RowDisplay
      register={register}
      title={"positionDays"}
      headers={headersAndInputs}
      // handleSubmit={handleSubmit}
    />
  );
}
