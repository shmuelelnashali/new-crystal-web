import { BaseEdge, getSmoothStepPath } from "reactflow";
import { useState, useEffect } from "react";
import { useDisconnected, useColorFlag } from "./GlobalState";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const [disconnectedColor, setDisconnectedColor] = useState(false);
  const { disconnected } = useDisconnected();
  const { flagColor } = useColorFlag();

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const paintTheDisconnectedEdges = () => {
    const { edgesId } = disconnected;
    if (edgesId.includes(id)) {
      setDisconnectedColor(true);
    }
  };

  useEffect(() => {
    if (disconnected) {
      paintTheDisconnectedEdges();
    }
  }, [disconnected]);

  return (
    <>
      <BaseEdge
        path={edgePath}
        style={{
          stroke: `${disconnectedColor && flagColor ? "#B00000" : "#002A78"} `,
          strokeWidth: 1.5,
        }}
      />
    </>
  );
}
