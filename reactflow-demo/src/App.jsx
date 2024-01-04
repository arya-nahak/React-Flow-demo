import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./Component/CustomNode";
import CustomNodeEmployee from "./Component/CustomNodeEmployee";
// import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123,backgroundColor:'black' },
  },
  {
    id: "2",
    type: "textUpdater",
    position: { x: 200, y: 100 },
    data: { value: 123 },
  },
  {
    id: "3",
    type: "textupdater2",
    position: { x: -200, y: 100 },
    data: { value: 123 },
  },
  {
    id: "4",
    type: "textupdater2",
    position: { x: 200, y: 200 },
    data: { value: 123 },
  },
];
// {
//     id: 'e4-6',
//     source: '4',
//     target: '6',
//     type: 'smoothstep',
//     sourceHandle: 'handle-1',
//     data: {
//       selectIndex: 1,
//     },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     }
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
  }
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: CustomNode, textupdater2: CustomNodeEmployee };

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        // style={rfStyle}
      />
    </div>
  );
}

export default App;
