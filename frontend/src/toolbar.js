import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "15px",
        background: "#0f172a",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="email" label="Email" />
      <DraggableNode type="api" label="API" />
    </div>
  );
};