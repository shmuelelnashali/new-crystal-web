"use client";
import Image from "next/image";
import { getSmoothStepPath, useReactFlow } from "reactflow";
import styled from "styled-components";
import xforOrganizationTree from "@/public/xforOrganizationTree.svg";

const EdgeContainer = styled.g``;

const StyledPath = styled.path`
  stroke: #002a78;
  stroke-width: 1.5;
  fill: none;
`;

const EdgeButton = styled.foreignObject`
  .button-content {
    display: none;
    background: #002a78;
    color: #ffffff;
    border: none;
    border-radius: 1999px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &:hover .button-content {
    display: block;
  }
`;

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const { setEdges } = useReactFlow();

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const positionsButton = [
    { x: sourceX - 10, y: sourceY + 9 },
    { x: targetX - 10, y: targetY - 25 },
  ];

  const disconnectEdge = (edgeId) => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
  };

  return (
    <>
      <EdgeContainer>
        <StyledPath d={edgePath} />
        {positionsButton.map((button, index) => (
          <EdgeButton
            key={index}
            className="edge-button"
            width={30}
            height={30}
            x={button.x}
            y={button.y}
          >
            <button
              onClick={() => disconnectEdge(id)}
              className="button-content"
            >
              <Image
                src={xforOrganizationTree}
                alt="x"
                width={10}
                height={10}
              ></Image>
            </button>
          </EdgeButton>
        ))}
      </EdgeContainer>
    </>
  );
}
