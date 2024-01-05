import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./Component/CustomNode";
import CustomNodeEmployee from "./Component/CustomNodeEmployee";
import { useDispatch, useSelector } from "react-redux";
// import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const layout = {
  type: "dagre", // Specify the layout algorithm (e.g., dagre)
  rankdir: "TB", // Direction of the layout (TB: top to bottom, LR: left to right)
  nodesep: 50, // Separation between nodes
  ranksep: 50, // Separation between ranks (layers)
};

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: {name:'12',email:'123$', value: 123, backgroundColor: "black" },
  },
  {
    id: "2",
    type: "textUpdater",
    position: { x: 220, y: 150 },
    data: {name:'12',email:'123$' , value: 123 },
  },
  {
    id: "3",
    type: "textupdater2",
    position: { x: -200, y: 150 },
    data: { value: 123 },
  },
  {
    id: "4",
    type: "textupdater2",
    position: { x: 245, y: 280 },
    data: { value: 123 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    type: "smoothstep",
    animated: true,
    source: "1",
    target: "2",
    sourceHandle: "b",
    targetHandle: "a",
  },
  {
    id: "1-3",
    type: "smoothstep",
    source: "1",
    target: "3",
    sourceHandle: "b",
    // targetHandle: "a",
  },
  {
    id: "2-4",
    type: "smoothstep",
    source: "2",
    target: "4",
    sourceHandle: "b",
    // targetHandle: "a",
  },
];

const nodeTypes = { textUpdater: CustomNode, textupdater2: CustomNodeEmployee };

function App() {
  const dispatch = useDispatch();
  const receiveData = useSelector((y) => y.data);
  // const [nodes, setNodes] = useState(initialNodes);
  // const [nodesData, setNodesData] = useState([]);
  // const [edgesData, setEdgesData] = useState([]);
  // const [edges, setEdges] = useState(initialEdges);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  useEffect(() => {
    dispatch({
      type: "INTDATA",
      payload: { nodes: initialNodes, edges: initialEdges },
    });
  }, []);

  // useEffect(() => {
  //   setNodesData(receiveData.nodes);
  //   setEdgesData(receiveData.edges);
  // }, [receiveData]);

  
console.log("sdfsdfsd",receiveData)
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={receiveData.nodes}
        edges={receiveData.edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        layout={layout}
        // style={rfStyle}
      />
    </div>
  );
}

export default App;
