import axios from "@/app/lib/axios";
import React, { useEffect, useState } from "react";

export default function ToggleCode({ isOpen, onClose, onSelect,onChange }) {
  const [codes, setCodes] = useState([]);

  const fetchCodes = async () => {
    const response = await axios.get(`/absences`);
    const data = response.data;
    setCodes(data);
  };
  useEffect(() => {
    fetchCodes();
  }, []);

//   const handleCodeSelect = (code) => {
//     onSelect(code);
//     setToggleCode(false);
//   };
if (!isOpen) return null;
  return (
    <>
      <div className="absolute z-50 left-1/2  transform translate-x-1/2 w-[15%] border bg-white rounded-lg px-1 py-1">
        {codes.map((code, index) => (
          <div
          // onClick={() => onSelect(code.name)}
            className="hover:bg-blue_color py-2 px-2 hover:cursor-default hover:text-white hover:rounded-lg"
            key={index}
            
          >
            {code.name}
          </div>
        ))}
      </div>

      {/* סוגר את הפופאפ בלחיצה בחוץ */}
      <div
        onClick={onClose}
        className="fixed hover:cursor-default  inset-0  "
      ></div>
    </>
  );
}
