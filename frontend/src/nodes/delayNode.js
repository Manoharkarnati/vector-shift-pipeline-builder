import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => (
  <BaseNode
    title="Delay Node"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <p>Adds wait time.</p>
  </BaseNode>
);