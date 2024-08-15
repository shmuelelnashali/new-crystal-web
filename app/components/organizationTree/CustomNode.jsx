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
    <div style={{ display: "flex", position: "relative" }}>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setShowPopUp(true);
        }}
        onClick={() => setShowPopUp(false)}
        style={{
          width: "180px",
          height: "90px",
          backgroundColor: "#E4EBF8",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          fontWeight: "400",
          color: "#002A78",
        }}
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
        <div>{data.label}</div>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "9999px",
            borderColor: "#002A78",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "-10px",
          }}
        >
          <div
            style={{
              fontSize: "23px",
              lineHeight: "32px",
              color: "#002A78",
              fontWeight: "900",
            }}
          >
            +
          </div>
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
      </div>
      {showPopUp && (
        <PopUpForDeleteDisconnectInTree setShowPopUp={setShowPopUp} filteredIds={filteredIds}/>
      )}
    </div>
  );
}
