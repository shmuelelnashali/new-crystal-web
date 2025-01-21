"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import PopUpForDeleteDisconnectInTree from "./PopUpForDeleteDisconnectInTree";
import PopUpForDeleteInClient from "./PopUpForDeleteInClient";
import {
  usePopUpOptions,
  usePopUpOptionsInClient,
  useDisconnected,
  useColorFlag,
} from "./GlobalState";

export default function CustomNode({ id, data }) {
  const { popUpForDeleteAndDisconnect, setPopUpForDeleteAndDisconnect } =
    usePopUpOptions();
  const { popUpForDeleteInClient, setPopUpForDeleteInClient } =
    usePopUpOptionsInClient();
  const { disconnected } = useDisconnected();
  const [disconnectedColor, setDisconnectedColor] = useState(false);
  const { flagColor } = useColorFlag();

  const whichPopUpToDisplay = () => {
    data.dbId
      ? setPopUpForDeleteAndDisconnect(id)
      : setPopUpForDeleteInClient(id);
  };

  const handlePopUp = () => {
    if (data.level === "מדור") return;

    const objLevel = {
      מחלקה: {
        url: "departments",
        type: "מחלקה",
      },
      ענף: { url: "branches", type: "ענף" },
      מדור: { url: "sections", type: "מדור" },
    };

    const hierarchy = ["יחידת על", "מחלקה", "ענף", "מדור"];
    const currentLevelIndex = hierarchy.indexOf(data.level);
    const levelToCreate = hierarchy[currentLevelIndex + 1];

    data.setDisplayPopUpCreateNewUnit(true);
    data.setSelectedLevel(objLevel[levelToCreate]);
  };

  const paintTheDisconnectedNodes = () => {
    const { nodesId } = disconnected;
    if (nodesId.includes(id)) {
      setDisconnectedColor(true);
    }
  };

  useEffect(() => {
    if (disconnected) {
      paintTheDisconnectedNodes();
    }
  }, [disconnected]);

  return (
    <div
      className={`w-[180px] h-[90px] ${
        disconnectedColor && flagColor ? "bg-[#FCDADA]" : "bg-[#E4EBF8]"
      }  rounded-xl flex justify-center items-center text-[22px] font-normal ${
        disconnectedColor && flagColor ? "text-[#B00000]" : "text-[#002A78]"
      }  shadow cursor-default relative py-3 pl-5 pr-4`}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{
          backgroundColor: "transparent",
          border: "none",
          top: "0.5px",
          width: "20px",
          height: "20px",
        }}
      />
      <div
        onClick={(e) => {
          e.stopPropagation();
          whichPopUpToDisplay();
          data.setUnitToDeleteOrDisconnect({
            nodeId: id,
            name: data.name,
            dbId: data.dbId,
            level: data.level,
            url: data.url,
          });
        }}
        className="absolute left-0 top-2 cursor-pointer"
      >
        <Image src={"/more.svg"} width={17} height={17} alt="more" />
      </div>
      <div className="text-xs font-normal text-[#002A784A] w-fit absolute right-2 top-1">
        {data.level}
      </div>
      <div className="text-lg">{data.name}</div>
      <div
        className={`w-5 h-5 bg-white rounded-full border border-solid ${
          disconnectedColor && flagColor
            ? "border-[#B00000]"
            : "border-[#002A78]"
        }  flex items-center justify-center absolute text-2xl ${
          disconnectedColor && flagColor ? "text-[#B00000]" : "text-[#002A78]"
        } left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2`}
      >
        +
      </div>
      <Handle
        onClick={(e) => {
          e.stopPropagation();
          handlePopUp();
        }}
        type="source"
        position={Position.Bottom}
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "20px",
          height: "20px",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {popUpForDeleteAndDisconnect === id && (
        <PopUpForDeleteDisconnectInTree
          // filteredIds={filteredIds}
          setPopUpDeleteUnitWithPeople={data.setPopUpDeleteUnitWithPeople}
          setPopUpDeleteEmptyUnit={data.setPopUpDeleteEmptyUnit}
          setPopUpDisconnect={data.setPopUpDisconnect}
          employees={data.employees}
          setEmployeesNumber={data.setEmployeesNumber}
          unitName={data.name}
          level={data.level}
        />
      )}

      {popUpForDeleteInClient === id && (
        <PopUpForDeleteInClient
          setPopUpForDeleteInClient={setPopUpForDeleteInClient}
          setPopUpDeleteEmptyUnit={data.setPopUpDeleteEmptyUnit}
        />
      )}
    </div>
  );
}
