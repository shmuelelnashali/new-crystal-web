import Image from 'next/image';
import React from 'react'

export default function EmployeesSelctor({users ,emploeeySelected, setEmploeeySelected }) {
    const handleSearch = () => {
        setColor(!color);
      };
      const check = (user) => {
        const index = emploeeySelected.indexOf(user.id);
        if (index !== -1) {
          return true;
        }
      };
    const handleV = (user) => {
        const index = emploeeySelected.indexOf(user.id);
        const updatedEmployees = [...emploeeySelected];
    
        console.log(updatedEmployees);
    
        if (index !== -1) {
            updatedEmployees.splice(index, 1);
          setEmploeeySelected(updatedEmployees);
        } else {
            updatedEmployees.push(user.id);
            setEmploeeySelected(updatedEmployees);
        }
      };
  return (
    
    <div
        className={
          " max-h-[20vh] overflow-y-auto"
          // { " h-[30vh] overflow-auto ": openSearch },
          // { "h-[15vh] overflow-auto ": openSearch === false }
        }
      >
        {users?.map((user, i) => (
          <div key={i}>
            <div dir="rtl" className="flex ">
              <div className="flex justify-center items-center">
                <div
                  onClick={(e) => {handleV(user),e.stopPropagation()}}
                  className={`flex justify-center items-center mr-2 border border-blue_color w-4 h-4 ${
                    check(user) ? "bg-blue_color " : ""
                  }`}
                >
                  {check(user) && (
                    <Image src={"v.svg"} width={10} height={9} alt="v" />
                  )}
                </div>
              </div>
              <div 
              // onClick={handleSearch}
               className="p-2">
                <div>{user?.first_name || user.name}</div>
                <div>{user?.id}</div>
              </div>
            </div>
            <div className=" mx-4 border border-b-[#EFF3FB]"></div>
          </div>
        ))}
      </div> 
  )
}
