import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => (
  <BaseNode
    title="Condition Node"
    inputs={[{ id: `${id}-value` }]}
    outputs={[
      { id: `${id}-true` },
      { id: `${id}-false` }
    ]}
  >
    <p>Branch logic.</p>
  </BaseNode>
);