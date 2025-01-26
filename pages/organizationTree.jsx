"use client";
import "./style.css";
import { Toaster, toast } from "react-hot-toast";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";
import CustomNode from "@/app/components/organizationTree/CustomNode";
import CustomEdge from "@/app/components/organizationTree/CustomEdge";
import BtnWithSelectPopUp from "@/app/components/organizationTree/BtnWithSelectPopUp";
import axios from "@/app/lib/axios";
import PopupDisconnect from "@/app/components/organizationTree/PopupDisconnect";
import PopupDeleteUnitwithPeople from "@/app/components/organizationTree/PopupDeleteUnitwithPeople";
import PopUpDeleteEmptyUnit from "@/app/components/organizationTree/PopUpDeleteEmptyUnit";
import Header from "@/app/components/ui/Header";
import { addNewUnitInServer } from "@/app/components/organizationTree/PopUpCreateNewUnit";
import {
  AppProviders,
  usePopUpOptions,
  usePopUpOptionsInClient,
  useMessage,
} from "@/app/components/organizationTree/GlobalState";

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

function OrganizationTreeComponent() {
  const [data, setData] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodesObj, setNodesObj] = useState();
  const [popUpSelectUnit, setPopUpSelectUnit] = useState(false);
  const [displayPopUpCreateNewUnit, setDisplayPopUpCreateNewUnit] =
    useState(false);
  const [popUpDeleteUnitWithPeople, setPopUpDeleteUnitWithPeople] =
    useState(false);
  const [popUpDeleteEmptyUnit, setPopUpDeleteEmptyUnit] = useState(false);

  const [popUpDisconnect, setPopUpDisconnect] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [unitToDeleteOrDisconnect, setUnitToDeleteOrDisconnect] =
    useState(null);
  const [employeesNumber, setEmployeesNumber] = useState(null);
  const [employees, setEmployees] = useState(null);


  const { message, setMessage } = useMessage();
  const { setPopUpForDeleteAndDisconnect } = usePopUpOptions();
  const { setPopUpForDeleteInClient } = usePopUpOptionsInClient();

  const nodeTypes = useMemo(() => ({ CustomNode }), []);
  const edgeTypes = useMemo(() => ({ CustomEdge }), []);

  const proOptions = { hideAttribution: true };

  const changeParent = async (url, idToTransfer, parentId) => {
    const dataKeys = {
      sections: "new_branch_id",
      branches: "new_department_id",
      departments: "new_highUnit_id",
    };

    const dataKey = dataKeys[url];

    try {
      const response = await axios.put(`${url}/transfer/${idToTransfer}`, {
        [dataKey]: parentId,
      });

      return response;
    } catch (error) {
      throw {
        status: error.response.status,
        generalMessage: "שגיאת שרת",
        message: error.message,
      };
    }
  };

  useEffect(() => {
    const nodeObj = {};
    nodes.forEach((node) => {
      nodeObj[node.id] = node;
    });
    setNodesObj(nodeObj);
  }, [nodes]);

  const createTree = () => {
    const initialNodes = [];
    const initialEdges = [];

    const createNode = (name, nodeId, dbId, url, level) => ({
      id: [nodeId + dbId].toString(),
      data: {
        name,
        dbId,
        url,
        level,
        setPopUpDeleteUnitWithPeople,
        setPopUpDeleteEmptyUnit,
        setPopUpDisconnect,
        setUnitToDeleteOrDisconnect,
        employees,
        setEmployeesNumber,
        setSelectedLevel,
        setDisplayPopUpCreateNewUnit,
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

    const rootNode = createNode(
      "יחידת על",
      "highUnit-",
      null,
      null,
      "יחידת על"
    );
    initialNodes.push(rootNode);

    data.forEach((dep) => {
      initialNodes.push(
        createNode(dep.name, "department-", dep.id, "departments", "מחלקה")
      );
      initialEdges.push(createEdge(rootNode.id, "department-" + dep.id));

      if (dep.branches) {
        dep.branches.forEach((branch) => {
          initialNodes.push(
            createNode(branch.name, "branch-", branch.id, "branches", "ענף")
          );
          initialEdges.push(
            createEdge("department-" + dep.id, "branch-" + branch.id)
          );

          if (branch.sections) {
            branch.sections.forEach((section) => {
              initialNodes.push(
                createNode(
                  section.name,
                  "section-",
                  section.id,
                  "sections",
                  "מדור"
                )
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
    let newNodes = layoutedElements.nodes;
    let newEdges = layoutedElements.edges;

    const rootIndex = newNodes.findIndex((n) => n.data.level === "יחידת על");
    if (rootIndex !== -1) {
      const rootNode = newNodes[rootIndex];

      const screenCenterX = window.innerWidth / 2 - 90;
      const shiftX = screenCenterX - rootNode.position.x;
      const shiftY = 100;

      newNodes = newNodes.map((node) => ({
        ...node,
        position: {
          x: node.position.x + shiftX,
          y: node.position.y + shiftY,
        },
      }));
    }

    setNodes(newNodes);
    setEdges(newEdges);
  };

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

  const getAllEmployees = async () => {
    try {
      const respons = await axios.get("employees");
      setEmployees(respons.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlltheTree();
    getAllEmployees();
  }, []);

  useEffect(() => {
    if (data) {
      createTree();
    }
  }, [data, employees]);

  const connectExistUnit = async (params) => {
    const nodeToTransfer = nodesObj[params.target];
    const url = nodeToTransfer.data.url;
    const idToTransfer = nodeToTransfer.data.dbId;
    const parentId = nodesObj[params.source].data.dbId;

    const response = await changeParent(url, idToTransfer, parentId);

    if (response.status === 200) {
      const updatedEdges = edges.filter(
        (edge) => edge.target !== params.target
      );
      setEdges(() => addEdge({ ...params, type: "CustomEdge" }, updatedEdges));

      return response;
    }
    throw {
      status: response.status,
      generalMessage: "חיבור נכשל",
      message: response.data.message,
    };
  };

  const connectNewUnit = async (params) => {
    const parentNode = nodesObj[params.source];
    const parentNodeId = parentNode.data.dbId;

    const response = await addNewUnitInServer(
      selectedLevel.url,
      unitName,
      parentNodeId
    );
    if (response.status === 201) {
      setEdges((eds) => addEdge({ ...params, type: "CustomEdge" }, eds));
      setUnitName("");
      return response;
    }
    throw {
      status: response.status,
      generalMessage: "חיבור נכשל",
      message: response.data.message,
    };
  };

  const onConnect = useCallback(
    async (params) => {
      const hasExistingConnection = edges.some(
        (edge) => edge.target === params.target
      );

      let response;

      try {
        if (hasExistingConnection) {
          response = await connectExistUnit(params);
        } else {
          response = await connectNewUnit(params);
        }
        await fetchAlltheTree();
        setMessage({ status: "success", response: response.data.message });
      } catch (error) {
        console.error(error);
        setMessage({ status: "error", response: error.message });
      }
    },
    [edges, nodesObj, selectedLevel]
  );

  const onEdgeUpdate = useCallback(
    async (oldEdge, newConnection) => {
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));

      try {
        const nodeToTransfer = nodesObj[newConnection.target];
        const url = nodeToTransfer.data.url;
        const idToTransfer = nodeToTransfer.data.dbId;
        const parentId = nodesObj[newConnection.source].data.dbId;

        const response = await changeParent(url, idToTransfer, parentId);
        setMessage({ status: "success", response: response.data.message });

        await fetchAlltheTree();
        if (data) {
          createTree();
        }
      } catch (error) {
        console.error(error);
        setMessage({ status: "error", response: error.message });
      }
    },
    [nodesObj, data]
  );

  const onNodeDrag = (_, node) => {
    const PARENT_PADDING = 120;
    const CHILD_PADDING = 100;

    const hierarchy = ["יחידת על", "מחלקה", "ענף", "מדור"];

    const currentLevelIndex = hierarchy.indexOf(node.data.level);

    const parentLevel = hierarchy[currentLevelIndex - 1];
    const childLevel = hierarchy[currentLevelIndex + 1];

    let maxY = 0;
    let minY = 700;

    if (parentLevel) {
      const parentNodes = nodes.filter((pn) => pn.data.level === parentLevel);
      if (parentNodes.length > 0) {
        maxY =
          Math.max(...parentNodes.map((pn) => pn.position.y)) + PARENT_PADDING;
      }
    }
    if (childLevel) {
      const childNodes = nodes.filter((cn) => cn.data.level === childLevel);
      if (childNodes.length > 0) {
        minY =
          Math.min(...childNodes.map((cn) => cn.position.y)) - CHILD_PADDING;
      }
    }

    setNodes((prevNodes) =>
      prevNodes.map((n) => {
        if (n.id === node.id) {
          return {
            ...n,
            position: {
              x: n.position.x,
              y: Math.min(Math.max(n.position.y, maxY), minY),
            },
          };
        }
        return n;
      })
    );
  };

  let lastInvalidConnection = null;

  const isValidConnection = (connection) => {
    const { source, target } = connection;

    const validConnections = [
      { source: "highUnit", targets: ["department", "מחלקה"] },
      { source: "department", targets: ["branch", "ענף"] },
      { source: "branch", targets: ["section", "מדור"] },
    ];

    const isValid = validConnections.some(
      (edge) =>
        source.includes(edge.source) &&
        edge.targets.some((t) => target.includes(t))
    );

    if (!isValid) {
      if (
        !lastInvalidConnection ||
        lastInvalidConnection.source !== source ||
        lastInvalidConnection.target !== target
      ) {
        setMessage({
          status: "error",
          response: "חיבור לא חוקי",
        });

        lastInvalidConnection = connection;
      }
    }

    return isValid;
  };

  useEffect(() => {
    if (message) {
      message.status === "success"
        ? toast.success(message.response, { duration: 3000 })
        : toast.error(message.response, { duration: 1000 });

      setMessage(null);
    }
  }, [message]);

  const handleResetsPopUps = () => {
    setPopUpSelectUnit(false),
      setPopUpDeleteEmptyUnit(false),
      setPopUpDeleteUnitWithPeople(false),
      setPopUpForDeleteAndDisconnect(false),
      setPopUpForDeleteInClient(false),
      setPopUpDisconnect(false);
  };

  return (
    <div
      onClick={handleResetsPopUps}
      className="bg-white px-5 flex flex-col h-screen"
    >
      <div dir="rtl" className="">
        <AuthProvider>
        <Header />
        </AuthProvider>
      </div>

      <BtnWithSelectPopUp
        popUpSelectUnit={popUpSelectUnit}
        setPopUpSelectUnit={setPopUpSelectUnit}
        setNodes={setNodes}
        unitName={unitName}
        setUnitName={setUnitName}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        setUnitToDeleteOrDisconnect={setUnitToDeleteOrDisconnect}
        employees={employees}
        setEmployeesNumber={setEmployeesNumber}
        setPopUpDeleteEmptyUnit={setPopUpDeleteEmptyUnit}
        setPopUpForDeleteInClient={setPopUpForDeleteInClient}
        displayPopUpCreateNewUnit={displayPopUpCreateNewUnit}
        setDisplayPopUpCreateNewUnit={setDisplayPopUpCreateNewUnit}
      />
      <div className="bg-[#F7F9FD] flex-1 rounded-lg">
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeUpdate={onEdgeUpdate}
          onNodeDrag={onNodeDrag}
          proOptions={proOptions}
          isValidConnection={isValidConnection}
        >
          <Controls
            showFitView={false}
            showInteractive={false}
            position={"top-right"}
          />
        </ReactFlow>
      </div>
      <div className="text-center pt-1 text-[#A5A5A5]">
        פותח ע"י מסגרת אמ"ת{" "}
      </div>
      {popUpDeleteUnitWithPeople && (
        <PopupDeleteUnitwithPeople
          unitToDeleteOrDisconnect={unitToDeleteOrDisconnect}
          setPopUpDeleteUnitWithPeople={setPopUpDeleteUnitWithPeople}
          employees={employees}
          employeesNumber={employeesNumber}
          setEmployeesNumber={setEmployeesNumber}
          fetchAlltheTree={fetchAlltheTree}
          getAllEmployees={getAllEmployees}
        />
      )}

      {popUpDeleteEmptyUnit && (
        <PopUpDeleteEmptyUnit
          unitToDeleteOrDisconnect={unitToDeleteOrDisconnect}
          setPopUpDeleteEmptyUnit={setPopUpDeleteEmptyUnit}
          fetchAlltheTree={fetchAlltheTree}
          setNodes={setNodes}
        />
      )}

      {popUpDisconnect && (
        <PopupDisconnect
          unitToDeleteOrDisconnect={unitToDeleteOrDisconnect}
          setPopUpDisconnect={setPopUpDisconnect}
        />
      )}
      <Toaster />
    </div>
  );
}

export default function organizationTreeProvider() {
  return (
    <ReactFlowProvider>
      <AppProviders>
        <OrganizationTreeComponent />
      </AppProviders>
    </ReactFlowProvider>
  );
}
