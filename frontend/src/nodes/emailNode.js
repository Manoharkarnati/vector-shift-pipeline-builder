import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => (
  <BaseNode
    title="Email Node"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-sent` }]}
  >
    <p>Sends email alerts.</p>
  </BaseNode>
);