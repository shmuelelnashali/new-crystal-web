import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import Departments from "./Department";

export default function Organizations({
  updateRow,
  setUpdateRow,
  data,
  selectedOrganization,
  handleAccordion,
  openDepartment,
  handleDepartmentToggle,
  openBranch,
  handleBranchToggle,
}) {
  return (
    <>
      {data.map((organization, orgIndex) => (
        <div key={orgIndex} className=" ">
          {/* Organization row */}
          <div className="grid grid-cols-9 whitespace-nowrap gap-2 content-center pr-5 text-center border-b-[2px] py-2.5">
            {Object.entries(organization).map(
              ([key, value]) =>
                key !== "departments" &&
                (updateRow.row === "organization" &&
                updateRow.index === orgIndex ? (
                  <input
                    type="text"
                    value={value}
                    className="text-center rounded-full border  border-blue_color"
                  />
                ) : (
                  <div key={key} className="col-span-1 ">
                    {value}
                  </div>
                ))
            )}

            <div
              className={`" col-end-9 flex justify-end pl-3 cursor-pointer "`}
            >
              <Image
                className={`${
                  selectedOrganization === orgIndex && " outline rotate-180"
                }`}
                onClick={() => handleAccordion(orgIndex)}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>
            <div className="flex justify-around col-end-10">
              <div
                onClick={() =>
                  setUpdateRow({ row: "organization", index: orgIndex })
                }
                className={`${
                  updateRow.row === "organization" &&
                  updateRow.index === orgIndex
                    ? " bg-blue_color/50 border border-blue_color/5 "
                    : "bg-blue_color border border-blue_color "
                }"   items-center gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
              >
                <Pencil strokeWidth={1.5} size={15} />
                <p>עריכת שורה</p>
              </div>
            </div>
          </div>

          {/* Display Departments if organization is selected */}
          {selectedOrganization === orgIndex && (
            <Departments
              updateRow={updateRow}
              setUpdateRow={setUpdateRow}
              departments={organization.departments}
              openDepartment={openDepartment}
              handleDepartmentToggle={handleDepartmentToggle}
              openBranch={openBranch}
              handleBranchToggle={handleBranchToggle}
            />
          )}
        </div>
      ))}
    </>
  );
}
