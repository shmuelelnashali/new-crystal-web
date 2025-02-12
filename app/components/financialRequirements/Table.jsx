import React from "react";
import MissionTable from "../missions/MissionTable";

export default function Table({ data, headTable }) {
  console.log(headTable, "ddd");

  return (
    <div>
      <MissionTable data={data} headTable={headTable} />
    </div>
  );
}
