import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";
import CustomNode from "@/app/components/CustomNode";
import CustomEdge from "@/app/components/CustomEdge";
import BtnWithSelectPopUp from "@/app/components/BtnWithSelectPopUp";

const structure = {
  name: "יחידת על",
  departments: [
    {
      name: "מחלקה 1",
      branches: [
        {
          name: "ענף 1",
          sections: ["מדור 1", "מדור 2", "מדור 3", "מדור 4"],
        },
        {
          name: "ענף 2",
          sections: ["מדור 1", "מדור 2"],
        },
      ],
    },
    {
      name: "מחלקה 2",
      branches: [
        {
          name: "ענף 1",
          sections: [],
        },
        {
          name: "ענף 2",
          sections: ["מדור 1", "מדור 2"],
        },
      ],
    },
    {
      name: "מחלקה 3",
      branches: [
        {
          name: "ענף 1",
          sections: ["מדור 1", "מדור 2"],
        },
        {
          name: "ענף 2",
          sections: ["מדור 3", "מדור 4"],
        },
      ],
    },
    {
      name: "מחלקה 4",
      branches: [
        {
          name: "ענף 1",
          sections: ["מדור 1"],
        },
        {
          name: "ענף 2",
          sections: ["מדור 2", "מדור 3"],
        },
      ],
    },
  ],
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 180;
const nodeHeight = 90;

const getLayoutedElements = (nodes, edges) => {
  dagreGraph.setGraph({
    rankdir: "TB",
    ranksep: 70,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.sourcePosition = "bottom";
    node.targetPosition = "top";

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

const nodeTypes = { CustomNode: CustomNode };
const edgeTypes = { CustomEdge: CustomEdge };

export default function OrganizationTree() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [counter, setCounter] = useState(0);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: "CustomEdge" }, eds)),
    []
  );

  const onReconnect = useCallback(
    (oldEdge, newConnection) =>
      setEdges((eds) => reconnectEdge(oldEdge, newConnection, eds)),
    []
  );

  const createTree = () => {
    let id = 0;

    const initialNodes = [];
    const initialEdges = [];

    const createNode = (name) => ({
      id: (id++).toString(),
      data: { label: name },
      position: { x: 0, y: 0 },
      type: "CustomNode",
    });

    const createEdge = (source, target) => ({
      id: `${source}-${target}`,
      source: source,
      target: target,
      type: "CustomEdge",
    });

    const rootNode = createNode(structure.name);
    initialNodes.push(rootNode);

    structure.departments.reverse().forEach((dep) => {
      const depNode = createNode(dep.name);
      initialNodes.push(depNode);
      initialEdges.push(createEdge(rootNode.id, depNode.id));

      dep.branches.reverse().forEach((branch) => {
        const branchNode = createNode(branch.name);
        initialNodes.push(branchNode);
        initialEdges.push(createEdge(depNode.id, branchNode.id));

        branch.sections.reverse().forEach((section) => {
          const sectionNode = createNode(section);
          initialNodes.push(sectionNode);
          initialEdges.push(createEdge(branchNode.id, sectionNode.id));
        });
      });
    });

    const layoutedElements = getLayoutedElements(initialNodes, initialEdges);

    setNodes(layoutedElements.nodes);
    setEdges(layoutedElements.edges);
  };

  useEffect(() => {
    createTree();
  }, []);

  const createNewNode = (name) => {
    setCounter((counter) => counter + 1);
    const x = window.innerWidth * 2 - 550;
    const y = window.innerHeight - window.innerHeight - 150 + counter * 110;

    const newNode = {
      id: `0${counter}`.toString(),
      data: { label: name },
      position: { x: x, y: y },
      type: "CustomNode",
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div
      onClick={() => setShowPopUp(false)}
      style={{ height: "100vh", backgroundColor: "#F7F9FD" }}
    >
      <BtnWithSelectPopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        createNewNode={createNewNode}
      />
      
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onReconnect={onReconnect}
        >
          <Controls />
        </ReactFlow>
      </div>
  );
}
