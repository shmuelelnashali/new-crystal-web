"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReportSelection from "../../components/reports/ReportSelection";
import ReportGenerator from "../../components/reports/ReportGenerator";

export default function Report() {
  const [createRepo, setCreateRepo] = useState(false);
  const oldRepo = [
  //   "  דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  //   "דו”ח נוכחות  - מותאם לישראל ישראלי",
  ];
  const newRepo = [
    " דו”ח נוכחות - יומי",
    "דו”ח נוכחות - חודשי",
    "דו”ח נוכחות  - שנתי",
    "דו”ח היעדרות - יומי",
    "דו”ח היעדרויות - חודשי",
    "דו”ח היעדרויות - שנתי",
    "דו”ח הרשאות",
    "דו”ח משימות",
    "דו”ח היעדרויות - חודשי",
    "דו”ח הרשאות",
    "דו”ח עובדים",
  ];
  return (
    <div className="h-full  flex justify-center ">
      {createRepo ? (
        <ReportGenerator
          createRepo={createRepo}
          setCreateRepo={setCreateRepo}
        />
      ) : (
        <ReportSelection
          oldRepo={oldRepo}
          newRepo={newRepo}
          setCreateRepo={setCreateRepo}
        />
      )}
    </div>
  );
}
