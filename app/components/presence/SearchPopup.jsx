import Image from "next/image";
import React from "react";

export default function SearchPopup({ data, setSearchPopup, searchPopup, employeeAttendance, setEmployeeAttendance }) {
  const groupedData = data.reduce((acc, current) => {
    const { section_name } = current.employeeToShow;
    if (!acc[section_name]) {
      acc[section_name] = [];
    }
    acc[section_name].push(current.employeeToShow);
    return acc;
  }, {});

  const handleEmployeeAttendance = (search)=>{    
    setEmployeeAttendance(search.employeeToShow.employee_number)
    setSearchPopup(false)
  }

  return (
    <>
      <div
        className={`absolute z-50 w-full left-0 right-0 top-full border bg-white rounded-lg px-3 py-1 dirLtr overflow-y-auto max-h-[40vh] `}
      >
        {Object.entries(groupedData).map(([sectionName, employees]) => (
          <div key={sectionName} className="mb-4">
            {/* Section Name */}
            <div className="font-bold text-lg py-2  border-b text-center text-blue_color ">
              {" מדור " + sectionName}
            </div>
            {data.map((search, index) => (
              <div
                onClick={() => {
                  handleEmployeeAttendance(search)
                }}
                className={`hover:bg-blue_color dirRtl justify-between pr-1 hover:rounded-xl hover:cursor-pointer py-3 flex hover:text-white border-b border-b-[#A7BFE8]/30`}
                key={`${sectionName}-${index}`}
              >
                <div className="flex">
                  <Image
                    src={"/userPic.svg"}
                    width={30}
                    height={30}
                    alt="user"
                  />
                  <div className="mr-3">{search.employeeToShow.first_name}</div>
                  <div className="mr-1">{search.employeeToShow.surname}</div>
                </div>
                <div className="ml-1 text-gray-400">
                  {search.employeeToShow.role}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* סוגר את הפופאפ בלחיצה בחוץ */}
      <div
        onClick={() => searchPopup && setSearchPopup(false)}
        className="fixed hover:cursor-default  inset-0  "
      ></div>
    </>
  );
}
