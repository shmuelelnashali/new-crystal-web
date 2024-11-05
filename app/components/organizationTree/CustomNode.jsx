"use client";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import PopUpForDeleteDisconnectInTree from "./PopUpForDeleteDisconnectInTree";

export default function CustomNode({ id, data }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const { getEdges } = useReactFlow();
  const edges = getEdges();
  const filteredEdgs = edges.filter((edge) => edge.target === id);
  const filteredIds = [];
  filteredEdgs.forEach((edge) => filteredIds.push(edge.id));

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setShowPopUp(true);
      }}
      onClick={() => setShowPopUp(false)}
      className="w-[180px] h-[90px] bg-[#E4EBF8] rounded-xl flex justify-center items-center text-[22px] font-normal text-[#002A78] shadow cursor-pointer"
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
      <div className="text-xl">{data.label}</div>
      <div className="w-5 h-5 bg-white rounded-full border border-solid border-[#002A78] flex items-center justify-center absolute -bottom-[10px] text-2xl text-[#002A78] ">
        +
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "20px",
          height: "20px",
          bottom: "-10px",
        }}
      />
      {showPopUp && (
        <PopUpForDeleteDisconnectInTree
          setShowPopUp={setShowPopUp}
          filteredIds={filteredIds}
          setShowPopUpDelete={data.delete}
          setShowPopUpDisconnect={data.disconnect}
        />
      )}
    </div>
  );
}
