import axios from "axios";
import { clsx } from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ExclusionsSearch({openSearch}) {
  console.log(openSearch);

 ;
  const [user, setUser] = useState([]);
  const [v, setV] = useState( []);
  console.log(v);

  const handleSearch = () => {
    setColor(!color);
  };
  const check=(user)=>{
    const index = v.indexOf(user.id) 
    if (index !== -1) {
      return true
      }

  }

  const handleV = (user) => {
    const index = v.indexOf(user.id) 
    const updatedV = [...v]
    if (index !== -1) {
      updatedV.splice(index, 1)
      setV(updatedV)
    }
    else {
     updatedV.push(user.id);
    setV(updatedV);

  }

  };



  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUser(response.data.users);
     
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
   
      <div dir="ltr" 
      className={clsx("px-1 z-50 overflow-auto bg-white absolute w-[92%] ",{"shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]":openSearch})} >
        <div
     
          className={clsx({" h-[30vh] overflow-auto ":openSearch},
      {"h-[15vh] overflow-auto ":openSearch===false}
)} 
  
        >
          {user.map((user, i) => (
            <div key={i}>
              <div dir="rtl" className="flex ">
                <div className="flex justify-center items-center">
                  <div
                    onClick={() => handleV(user)}
                    className={`flex justify-center items-center mr-2 border border-[#002A78] w-4 h-4 ${
                      check(user) ? "bg-[#002A78] " : ""
                    }`}
                  >
                    {check(user) && (
                    <Image
                    src={"v.svg"}
                    width={10}
                    height={9}
                    alt="v"
                    />
                   
                    )}
                  </div>
                </div>
                <div onClick={handleSearch} className="p-2">
                  <div>{user.firstName}</div>
                  <div>{user.id}</div>
                </div>
              </div>
              <div className=" mx-4 border border-b-[#EFF3FB]"></div>
            </div>
          ))}
        </div>
      </div>
  
  );
}
