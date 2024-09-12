import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import Branch from "./Branch";

export default function Department({
  departments,
  openDepartment,
  handleDepartmentToggle,
  openBranch,
  handleBranchToggle,
}) {
  return (
    <div className="bg-[#002A78]/10 ">
      {departments.map((department, depIndex) => (
        <div key={depIndex}>
          {/* Department row */}
          <div
            // onClick={() => handleDepartmentToggle(depIndex)}
            className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[1px] py-2.5 cursor-pointer"
          >
            {Object.entries(department).map(
              ([key, value]) =>
                key !== "branchs" && (
                  <div key={key} className="col-span-1 text-center pr-10">
                    {value}
                  </div>
                )
            )}
            <div className="col-end-9 flex justify-end pl-3 cursor-pointer">
              <Image
                className={`${
                  openDepartment === depIndex ? " outline rotate-180" : ""
                }`}
                onClick={() => handleDepartmentToggle(depIndex)}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>
            <div className="flex justify-around col-end-10">
              <div className="bg-blue_color border items-center border-blue_color gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer">
                <Pencil strokeWidth={1.5} size={15} />
                <p>עריכת שורה</p>
              </div>
            </div>
          </div>

          {/* Display Madors if department is selected */}
          {openDepartment === depIndex && (
            <Branch
              branchs={department.branchs}
              openBranch={openBranch}
              handleBranchToggle={handleBranchToggle}
            />
          )}
        </div>
      ))}
    </div>
  );
}
