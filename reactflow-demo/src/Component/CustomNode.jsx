import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import DemoTr from "./DemoTr";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable, id }) {
  console.log(data, "....");

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id="a"
      />
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id="b"
      />
      <div>
        {/* <div
          style={{
            border: "2px solid black",
            width: "150px",
            height: "40px",
            borderRadius: "5px",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: data.backgroundColor,
            }}
          >
            <img
              src="fjhgdfhgkdf"
              height="30px"
              width={"30px"}
              alt="img"
              style={{ borderRadius: "50%", backgroundColor: "white" }}
            ></img>
            <p onClick={() => alert(data.value)}>{data.value}</p>
          </div>
        </div> */}
        <DemoTr id={id} data={data} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNode;
