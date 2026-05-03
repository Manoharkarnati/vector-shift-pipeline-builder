import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => (
  <BaseNode
    title="API Node"
    inputs={[{ id: `${id}-request` }]}
    outputs={[{ id: `${id}-response` }]}
  >
    <p>Calls external API.</p>
  </BaseNode>
);