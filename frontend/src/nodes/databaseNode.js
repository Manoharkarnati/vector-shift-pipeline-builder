import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => (
  <BaseNode
    title="Database Node"
    inputs={[{ id: `${id}-query` }]}
    outputs={[{ id: `${id}-result` }]}
  >
    <p>Stores and fetches data.</p>
  </BaseNode>
);