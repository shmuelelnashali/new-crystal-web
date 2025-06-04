import React, { useState } from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import PopupToEditMission from "./popupToEditMission";
import { formatDate } from "@/app/util/dateFormat";
import Flow from "./Flow";
import { usePathname } from "next/navigation";
import ReadObject from "../ReadObject";
import UpdateObject from "../UpdateObject";
import { m } from "framer-motion";

export default function TablesContent({ headLength, data, deleteRowObj }) {
  console.log(data);

  const pathName = usePathname();
  const [popupToEditMission, setPopupToEditMission] = useState(null);

  // עידכון עובד
  const [updateEmployee, setUpdateEmployee] = useState(null);

  // המידע של דיווח אמצעים
  const [reportData, setReportData] = useState([]);

  const handleClosePopup = () => {
    setPopupToEditMission(null);
  };

  // const handleUpdateMission = (updatedMission) => {
  //   setMissionsData((prevData) =>
  //     prevData.map((mission) =>
  //       mission.Mission_number === updatedMission.Mission_number
  //         ? updatedMission
  //         : mission
  //     )
  //   );
  // };

  // רק את השדות האלה רואים בטבלה
  const filteredTheObj = (obj) => {
    if (pathName.includes("mission")) {
      return {
        Mission_number: obj?.Mission_number,
        Mission_name: obj?.Mission_name,
        Mission_type: obj?.Mission_type,
        Year: obj?.Year,
        Paying_factor: obj?.Paying_factor,
        Opening_date: formatDate(obj?.Opening_date),
        Closing_date: formatDate(obj?.Closing_date),
        Ktzin_nosse_name: obj?.Ktzin_nosse_name,
        Status: obj?.Status,
        Interest_level: obj?.Interest_level,
      };
    }
    if (pathName.includes("employees")) {
      return obj?.employeeToShow;
    }
    return obj;
  };

   const renderContent = (item) => {
    if (pathName.includes("employees")) {
      return updateEmployee === item.employeeToShow ? (
        <UpdateObject
          hiddenEmployeeData={item.hiddenEmployeeData}
          updateEmployeeMood={item.updateEmployeeMood}
          setUpdateEmployee={setUpdateEmployee}
        />
      ) : (
        <ReadObject data={item.employeeToShow} />
      );
    }

    // אם זה missions, נשתמש ב-Flow
    return Object.entries(filteredTheObj(item)).map(([key, value]) => (
      <Flow
        key={key}
        value={
          pathName.includes("employees")
            ? value?.employeeToShow
              ? value.employeeToShow[key]
              : value
            : value
        }
        name={key}
      />
    ));
  };

  return (
    <div className="w-full dirRtl bg-[#EFF3FB] ">
      <div className=" w-full ">
        {data.map((item, index) => (
          <div
            onClick={() => {
              if (pathName.includes("employees")) {
                setUpdateEmployee(item.employeeToShow);
              } else {
                setPopupToEditMission(item);
              }
            }}
            key={item?.id || index}
            className={`flex w-full gap-2 border-b  border-t-[#A7BFE8]/30
                ${
                  popupToEditMission === item.id
                    ? "bg-[#e8eef7]"
                    : " hover:bg-[#e1e8f3] transition-transform duration-200 ease-in-out"
                }
                `}
          >
            {/* DELETE BUTTON */}

            <div
              onClick={(e) => {
                e.stopPropagation();
                deleteRowObj(pathName.includes("employees") ? item.hiddenEmployeeData : item);
              }}
              className={`w-[60px]  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            >
              <Image src={"/trash.svg"} height="23" width="23" alt="trash" />
            </div>

            <div
              className={`grid ${headLength}  w-full justify-around gap-3 font-normal text-base  text-blue_color`}
            >
              {renderContent(item)}
            </div>
          </div>
        ))}
        {popupToEditMission && pathName.includes("mission") && (
          <PopupToEditMission
            updateValue={setPopupToEditMission}
            value={popupToEditMission}
            setShowPopup={handleClosePopup}
            deleteRowObj={deleteRowObj}
            setReportData={setReportData}
            reportData={reportData}
          />
        )}
      </div>
    </div>
  );
}
