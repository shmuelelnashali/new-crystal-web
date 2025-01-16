import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import axios from "@/app/lib/Axios";

export const addNewUnitInServer = async (url, name, parentId) => {
  let parentName;

  switch (url) {
    case "departments":
      parentName = null;
      break;
    case "branches":
      parentName = "department_id";
      break;
    case "sections":
      parentName = "branch_id";
      break;
    default:
      throw new Error("Unknown type");
  }

  try {
    const payloud = { name: name };
    if (parentName) {
      payloud[parentName] = parentId;
    }

    const response = await axios.post(url, payloud);

    return response;
  } catch (error) {
    console.log(error);

    throw {
      status: error.response.status,
      generalMessage: "שגיאת שרת",
      message: error.message,
    };
  }
};

export function PopUpCreateNewUnit({
  setDisplayPopUpCreateNewUnit,
  selectedLevel,
  setNodes,
  unitName,
  setUnitName,
  setUnitToDeleteOrDisconnect,
  employees,
  setEmployeesNumber,
  setPopUpDeleteEmptyUnit,
  idCounter,
  setIdCounter,
  setPopUpForDeleteInClient,
}) {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addNewNodeInClient = () => {
    const x = window.innerWidth - 250;
    const y = window.innerHeight / 2 + idCounter * 110;
    setIdCounter((prevId) => prevId + 1);

    const newUnit = {
      id: [selectedLevel.type + "-" + idCounter].toString(),
      data: {
        name: unitName,
        level: selectedLevel.type,
        setUnitToDeleteOrDisconnect,
        employees,
        setEmployeesNumber,
        setPopUpDeleteEmptyUnit,
        setPopUpForDeleteInClient,
      },
      position: { x: x, y: y },
      type: "CustomNode",
    };

    setNodes((prevNodes) => [...prevNodes, newUnit]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewNodeInClient();
      setDisplayPopUpCreateNewUnit(false);
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value), setUnitName(e.target.value), setIsValid(true);
  };

  const handleCreateUnit = () => {
    if (name !== "") {
      addNewNodeInClient(), setDisplayPopUpCreateNewUnit(false);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
      onClick={() => setDisplayPopUpCreateNewUnit(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className="bg-white  w-[45%] h-[210px] rounded-xl text-right pr-7 pl-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78] pt-5 pb-[6px]">
            יצירת {selectedLevel.type}
          </h1>
          <Image
            onClick={() => setDisplayPopUpCreateNewUnit(false)}
            className="hover:cursor-pointer pb-2"
            src={"/x.svg"}
            width={15}
            height={15}
            alt="x"
          />
        </div>
        <p className="text-[#002A78] text-xl font-normal pb-1">
          שם ה{selectedLevel.type}
        </p>

        <input
          required
          ref={inputRef}
          type="text"
          placeholder={`שם ${selectedLevel.type}`}
          value={name}
          className={`w-[579px] h-[41px] bg-white px-6 rounded-[41px] border-[0.84px] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light 
            text-[#002A78]
            flex items-center justify-between z-50 placeholder-[#002A7887] ${
              isValid ? "" : "border-red-600"
            }`}
          onChange={handleInputChange}
        />

        <div className="flex w-full  justify-end mt-9 pl-2">
          <button
            onClick={() => setDisplayPopUpCreateNewUnit(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={handleCreateUnit}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            צור {selectedLevel.type}
          </button>
        </div>
      </div>
    </div>
  );
}
