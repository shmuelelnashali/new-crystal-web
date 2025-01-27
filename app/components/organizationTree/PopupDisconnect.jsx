import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "@/app/lib/axios";
import { useReactFlow } from "reactflow";
import { useDisconnected, useColorFlag } from "./GlobalState";

export default function PopupDisconnect({
  unitToDeleteOrDisconnect,
  setPopUpDisconnect,
}) {
  const { nodeId, level, name, dbId } = unitToDeleteOrDisconnect;
  const { getNodes, getEdges, setEdges } = useReactFlow();
  const { setDisconnected } = useDisconnected();
  const { setFlagColor } = useColorFlag();

  const handleDisconnectUnit = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.target !== nodeId));
  };

  const findTheDisconnected = () => {
    const nodes = getNodes();
    const edges = getEdges();
    const disconnectedEdges = [];
    const disconnectedNodes = [];

    const rootNode = nodes.find((node) => node.id === nodeId);
    disconnectedNodes.push(rootNode);

    let childrenEdges = edges.filter((edge) => edge.source === nodeId);
    if (childrenEdges.length > 0) {
      disconnectedEdges.push(...childrenEdges);

      childrenEdges.forEach((edge) => {
        const node = nodes.find((node) => node.id === edge.target);
        disconnectedNodes.push(node);

        childrenEdges = edges.filter((edge) => edge.source === node.id);
        if (childrenEdges.length > 0) {
          disconnectedEdges.push(...childrenEdges);

          childrenEdges.forEach((edge) => {
            const node = nodes.find((node) => node.id === edge.target);
            disconnectedNodes.push(node);
          });
        }
      });
    }

    const nodesId = [];
    disconnectedNodes.forEach((node) => {
      nodesId.push(node.id);
    });

    const edgesId = [];
    disconnectedEdges.forEach((edge) => {
      edgesId.push(edge.id);
    });

    setDisconnected({ nodesId, edgesId });
  };

  const getCorrectSuffix = () => {
    if (level === "מחלקה") {
      return "ואת כל הענפים והמדורים שתחתיה";
    } else if (level === "ענף") {
      return "ואת כל המדורים שתחתיו";
    } else {
      return;
    }
  };

  useEffect(() => {
    findTheDisconnected();
  }, []);

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white w-2/5 rounded-xl text-right pr-7 pl-3 py-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78] pt-3">
            ניתוק קשר
          </h1>
          <div>
            <Image
              onClick={() => setPopUpDisconnect(false)}
              className="hover:cursor-pointer"
              src={"/x.svg"}
              width={15}
              height={15}
              alt="x"
            />
          </div>
        </div>

        <p className="text-[#002A78] text-xl font-normal pb-3">
          האם ברצונך לנתק את {level} {name} {getCorrectSuffix()} ?
        </p>
        <div className="flex w-full  justify-end pl-2 pb-1">
          <button
            onClick={() => setPopUpDisconnect(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={() => {
              handleDisconnectUnit(), setFlagColor(true);
            }}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            נתק
          </button>
        </div>
      </div>
    </div>
  );
}
