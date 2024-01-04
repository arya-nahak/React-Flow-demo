import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function CustomNodeEmployee({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
      />
      <div>
        <div
          style={{
            border: "2px solid black",
            width: "150px",
            height: "40px",
            borderRadius: "5px",
          }}
        >
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <h5>Description</h5>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
              accusantium!
            </div>
          </div>
        </div>
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle
        type="source"
        position={Position.Bottom}
        // id="b"
      />
    </div>
  );
}

export default CustomNodeEmployee;
