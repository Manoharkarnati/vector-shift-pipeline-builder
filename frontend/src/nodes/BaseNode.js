import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
  width = 220,
  minHeight = 120
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        position: "relative",
        overflow: "visible",
        border: "1px solid #334155",
        borderRadius: "12px",
        background: "#0f172a",
        color: "white",
        padding: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "10px",
          fontSize: "16px",
          color: "#38bdf8"
        }}
      >
        {title}
      </div>

      {inputs.map((item, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={item.id}
          style={{
            top: 45 + index * 28,
            width: 14,
            height: 14,
            background: "#22c55e",
            border: "2px solid white",
            left: -8,
            cursor: "crosshair"
          }}
        />
      ))}

      {outputs.map((item, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Right}
          id={item.id}
          style={{
            top: 45 + index * 28,
            width: 14,
            height: 14,
            background: "#3b82f6",
            border: "2px solid white",
            right: -8,
            cursor: "crosshair"
          }}
        />
      ))}

      <div>{children}</div>
    </div>
  );
};