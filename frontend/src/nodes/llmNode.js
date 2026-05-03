import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM Node"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
        This node processes prompts using AI.
      </p>
    </BaseNode>
  );
};