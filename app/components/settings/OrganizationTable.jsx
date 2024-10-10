"use client";
import React, { useState } from "react";
import Organizations from "./Organizations";

export default function OrganizationTable({ data, headers }) {
  const [updateRow, setUpdateRow] = useState({
    index: "",
    row: "",
  });
  const [openDepartment, setOpenDepartment] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  // Toggle organization departments
  const handleAccordion = (index) => {
    if (selectedOrganization !== index) {
      setSelectedOrganization(index);
      setOpenDepartment(null);
      setOpenBranch(null);
    } else {
      setSelectedOrganization(null);
    }
  };

  // Toggle departments within an organization
  const handleDepartmentToggle = (index) => {
    setOpenDepartment(openDepartment === index ? null : index);

    if (openDepartment !== index) {
      setOpenDepartment(index);
      setOpenBranch(null);
    } else {
      setOpenDepartment(null);
    }
  };

  // Toggle mador within a department
  const handleBranchToggle = (index) => {
    if (openBranch !== index) {
      setOpenBranch(index);
    } else {
      setOpenBranch(null);
    }
  };

  return (
    <div>
      <div className="flex-1 flex h-full flex-col overflow-hidden rounded-lg">
        <div className="px-2 dirLtr  rounded-2xl  overflow-y-auto ">
          <div className="dirRtl  bg-[#F7F9FD]  rounded-lg">
            <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#F7F9FD] w-full">
              <div className="grid grid-cols-9 sticky top-0 rounded-lg p-2 bg-blue_color justify-center">
                {headers.map((header) => (
                  <div
                    key={header}
                    className="text-center truncate font-semibold text-xl"
                  >
                    {header}
                  </div>
                ))}
                <div className="text-center text-xl font-semibold col-end-10">
                  פעולות
                </div>
              </div> 
            </div>
            <div className="flex flex-col  text-base">
              <Organizations
                data={data}
                updateRow={updateRow}
                setUpdateRow={setUpdateRow}
                selectedOrganization={selectedOrganization}
                handleAccordion={handleAccordion}
                openDepartment={openDepartment}
                handleDepartmentToggle={handleDepartmentToggle}
                openBranch={openBranch}
                handleBranchToggle={handleBranchToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

