"use client";

import "./style.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  updateEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";
import CustomNode from "@/app/components/organizationTree/CustomNode";
import CustomEdge from "@/app/components/organizationTree/CustomEdge";
import BtnWithSelectPopUp from "@/app/components/organizationTree/BtnWithSelectPopUp";
import axios from "@/app/lib/Axios";
import PopupDisconnect from "@/app/components/organizationTree/PopupDisconnect";
import PopupDelete from "@/app/components/organizationTree/PopupDelete";

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

export default function OrganizationTree() {
  const [data, setData] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [error, setError] = useState(null);
  const [idCounter, setIdCounter] = useState(0);
  const [newUnitName, setNewUnitName] = useState(null);
  const [showPopUpDelete, setShowPopUpDelete] = useState(true);
  const [showPopUpDisconnect, setShowPopUpDisconnect] = useState(false);

  const nodeTypes = useMemo(() => ({ CustomNode }), []);
  const edgeTypes = useMemo(() => ({ CustomEdge }), []);

  const fetchAlltheTree = async () => {
    try {
      const respons = await axios.get(
        "departments?appendBranches=true&appendSections=true"
      );
      setData(respons.data);
    } catch (error) {
      setError("Failed to fetch organization data. Please try again later.");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAlltheTree();
  }, []);

  const addNewUnitInServer = async (name, parentId) => {
    let urlVar;
    let parentName;
    switch (name) {
      case "מחלקה":
        urlVar = "departments";
        parentName = null;
        break;
      case "ענף":
        urlVar = "branches";
        parentName = "department_id";
        break;
      case "מדור":
        urlVar = "sections";
        parentName = "branch_id";
        break;
      default:
        throw new Error("Unknown type");
    }

    try {
      const payloud = { name: name };
      if (parentName) {
        payloud[parentName] = parentId.toString();
      }
      const respons = await axios.post(urlVar, payloud);

      return respons.data;
    } catch (error) {
      setError("Failed to craete a new unit. Please try again later.");
      console.error("Error create data:", error);
    }
  };

  const changingUnitAffiliation = (parentId, name) => {};

  const disconnection = () => {};

  const addNewNodeInClient = (type) => {
    const x = window.innerWidth - 250;
    const y = window.innerHeight / 2 + idCounter * 110;
    setIdCounter((prevId) => prevId + 1);

    const newUnit = {
      id: `FAKE_ID_${idCounter}`,
      data: {
        label: type,
        delete: setShowPopUpDelete,
        disconnect: setShowPopUpDisconnect,
      },
      position: { x: x, y: y },
      type: "CustomNode",
    };

    setNodes((prevNodes) => [...prevNodes, newUnit]);
    setNewUnitName(newUnit.data.label);
  };

  const onConnect = useCallback(
    async (params) => {
      setEdges((eds) => addEdge({ ...params, type: "CustomEdge" }, eds));

      const parentId = params.source;

      await addNewUnitInServer(newUnitName, parentId);
      fetchAlltheTree();
    },
    [newUnitName]
  );

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  const createTree = () => {
    const initialNodes = [];
    const initialEdges = [];

    const createNode = (name, id) => ({
      id: id.toString(),
      data: {
        label: name,
        delete: setShowPopUpDelete,
        disconnect: setShowPopUpDisconnect,
      },
      position: { x: 0, y: 0 },
      type: "CustomNode",
    });

    const createEdge = (source, target) => ({
      id: `${source}-${target}`,
      source: source,
      target: target,
      type: "CustomEdge",
    });

    const rootNode = createNode(structure.name, 789);
    initialNodes.push(rootNode);

    data.forEach((dep) => {
      initialNodes.push(createNode(dep.name, "dep-" + dep.id));
      initialEdges.push(createEdge(rootNode.id, "dep-" + dep.id));

      if (dep.branches) {
        dep.branches.forEach((branch) => {
          initialNodes.push(createNode(branch.name, "branch-" + branch.id));
          initialEdges.push(createEdge("dep-" + dep.id, "branch-" + branch.id));

          if (branch.sections) {
            branch.sections.forEach((section) => {
              initialNodes.push(
                createNode(section.name, "section-" + section.id)
              );
              initialEdges.push(
                createEdge("branch-" + branch.id, "section-" + section.id)
              );
            });
          }
        });
      }
    });

    const layoutedElements = getLayoutedElements(initialNodes, initialEdges);

    setNodes(layoutedElements.nodes);
    setEdges(layoutedElements.edges);
  };

  useEffect(() => {
    if (data) {
      createTree();
    }
  }, [data]);

  return (
    <>
      <div
        onClick={() => setShowPopUp(false)}
        className="h-screen bg-[#F7F9FD]"
      >
        <BtnWithSelectPopUp
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          addNewNodeInClient={addNewNodeInClient}
        />

        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeUpdate={onEdgeUpdate}
        >
          <Controls />
        </ReactFlow>
        {showPopUpDisconnect && (
          <PopupDisconnect
            objectToDelete={"ttt"}
            setShowPopUpDisconnect={setShowPopUpDisconnect}
          />
        )}
        {showPopUpDelete && (
          <PopupDelete
            objectToDelete={"ttt"}
            setShowPopUpDelete={setShowPopUpDelete}
          />
        )}
      </div>
    </>
  );
}
