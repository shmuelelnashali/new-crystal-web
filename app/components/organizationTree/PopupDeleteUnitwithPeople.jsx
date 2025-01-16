"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "@/app/lib/Axios";
import CustomCalendar from "./CustomCalendar";
import { useMessage, useSelectMonths, useSelectYears } from "./GlobalState";
import Employees from "@/app/(routes)/employees/page";

export default function PopupDeleteUnitwithPeople({
  unitToDeleteOrDisconnect,
  setPopUpDeleteUnitWithPeople,
  employees,
  employeesNumber,
  setEmployeesNumber,
  fetchAlltheTree,
  getAllEmployees,
}) {
  const [sectionSelect, setSectionSelect] = useState(false);
  const [employeeSelect, setEmployeeSelect] = useState(false);
  const [unitName, setUnitName] = useState({});
  const [sections, setSections] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState({});

  const { setMessage } = useMessage();
  const { setDisplaySelectMonths } = useSelectMonths();
  const { setDisplaySelectYears } = useSelectYears();

  const { name, level } = unitToDeleteOrDisconnect;

  const deleteUnitWithEmployees = async () => {
    const { dbId, url } = unitToDeleteOrDisconnect;

    try {
      const response = await axios.delete(`${url}/deleteAndTransfer/${dbId}`, {
        data: {
          new_section_id: unitName.dbId,
          date: startDate,
        },
      });
      setMessage({ status: "success", response: response.data.message });
      fetchAlltheTree();
      getAllEmployees();
      return response;
    } catch (error) {
      console.error(error);
      setMessage({ status: "error", response: error.message });
    }
  };

  useEffect(() => {
    const getAllSections = async () => {
      const respons = await axios.get("sections");
      setSections(respons.data);
    };
    getAllSections();

    return () => {
      setEmployeesNumber(null);
    };
  }, []);

  const getCorrectSuffix = (level) => {
    if (level === "מחלקה") {
      return "זאת";
    }
    return "זה";
  };

  const handleResetClick = (e) => {
    e.stopPropagation(),
      setSectionSelect(false),
      setDisplaySelectMonths(false),
      setDisplaySelectYears(false),
      setEmployeeSelect(false);
  };

  const HandleDelete = () => {
    if (sections !== null && startDate !== null) {
      deleteUnitWithEmployees(), setPopUpDeleteUnitWithPeople(false);
    }
  };


  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
      onClick={() => {
        setDisplaySelectMonths(false), setDisplaySelectYears(false);
      }}
    >
      <div
        onClick={handleResetClick}
        className="bg-white py-3 pr-7 pl-4 w-[45%] rounded-xl text-right"
      >
        <div>
          <div className="flex justify-between pt-1">
            <h1 className="font-bold text-2xl leading-6	text-blue_color py-2">
              האם אתה בטוח שאתה רוצה למחוק את ה{level} {name} ?
            </h1>

            <Image
              onClick={() => setPopUpDeleteUnitWithPeople(false)}
              className="hover:cursor-pointer w-[15px] h-[15px]"
              src={"/x.svg"}
              width={15}
              height={15}
              alt="x"
            />
          </div>
          <p className="text-xl font-normal text-blue_color py-1">
            ב{level} {name} יש {employeesNumber} עובדים, עליך לשייך אותם למדור
            אחר על מנת למחוק {level} {getCorrectSuffix(level)}.
          </p>
        </div>
        <div>
          {level !== "מדור" && (
            <div>
              <h3 className="text-lg font-semibold text-blue_color pt-2 pb-[2px]">
                עובדים
              </h3>
              <div className="pb-2 flex relative">
                <div
                  onClick={(e) => {
                    e.stopPropagation(), setEmployeeSelect(true);
                  }}
                  className={`w-[73%] py-2 bg-white px-6 rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light ${
                    employeeDetails.name ? "text-[#002A78]" : "text-[#002A7887]"
                  }  flex items-center justify-between z-50`}
                >
                  <span>{employeeDetails.name || "בחר עובד"}</span>
                  <Image
                    src={"/vector90.svg"}
                    alt="vector90"
                    width={9}
                    height={6}
                  />
                </div>
                {employeeSelect && (
                  <div
                    dir="ltr"
                    className="w-[73%] max-h-[271px] bg-white absolute top-6 pr-[9px] z-10"
                    style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="max-h-[271px] bg-white py-4 pl-[80px] overflow-y-auto pr-4">
                      {employees.map((employee, index) => (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setEmployeeDetails({
                              name: `${employee.first_name} ${employee.surname}`,
                              dbId: employee.id,
                            }),
                              setEmployeeSelect(false);
                          }}
                          key={index}
                          className="h-[48px] text-[18px] font-normal text-[#002A78] flex items-center justify-end pr-3 border-b-[2px] border-[#f0f1f0] optionsHover"
                        >
                          {`${employee.first_name} ${employee.surname}`}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <h3 className="text-lg font-semibold text-blue_color pt-2 pb-[2px]">
            לאיזה מדור תרצה לשייך את העובדים?
          </h3>
          <div className="pb-2 flex relative">
            <div
              onClick={(e) => {
                e.stopPropagation(), setSectionSelect(true);
              }}
              className={`w-[73%] py-2 bg-white px-6 rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light ${
                unitName.name ? "text-[#002A78]" : "text-[#002A7887]"
              }  flex items-center justify-between ${
                employeeSelect ? "z-0" : "z-50"
              } `}
            >
              <span>{unitName.name || "בחר מדור"}</span>
              <Image
                src={"/vector90.svg"}
                alt="vector90"
                width={9}
                height={6}
              />
            </div>
            {sectionSelect && (
              <div
                dir="ltr"
                className="w-[73%] max-h-[271px] bg-white absolute top-6 pr-[9px] z-10"
                style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="max-h-[271px] bg-white py-4 pl-[80px] overflow-y-auto pr-4">
                  {sections.map(
                    (section, index) =>
                      section.name !== name && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setUnitName({
                              name: section.name,
                              dbId: section.id,
                            }),
                              setSectionSelect(false);
                          }}
                          key={index}
                          className="h-[48px] text-[18px] font-normal text-[#002A78] flex items-center justify-end pr-3 border-b-[2px] border-[#f0f1f0] optionsHover"
                        >
                          {section.name}
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-blue_color pb-[2px]">
            מאיזה תאריך העובדים יעברו למדור החדש ?
          </h3>
          {<CustomCalendar startDate={startDate} setStartDate={setStartDate} />}
        </div>
        <div className="flex w-full justify-end pt-2">
          <button
            onClick={() => setPopUpDeleteUnitWithPeople(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={HandleDelete}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            מחק
          </button>
        </div>
      </div>
    </div>
  );
}
