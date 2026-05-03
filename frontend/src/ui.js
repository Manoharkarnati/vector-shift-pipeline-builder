import { useState, useRef, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap
} from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";

import { EmailNode } from "./nodes/emailNode";
import { ApiNode } from "./nodes/apiNode";
import { DatabaseNode } from "./nodes/databaseNode";
import { DelayNode } from "./nodes/delayNode";
import { ConditionNode } from "./nodes/conditionNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,

  email: EmailNode,
  api: ApiNode,
  database: DatabaseNode,
  delay: DelayNode,
  condition: ConditionNode
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => ({
    id: nodeID,
    nodeType: type
  });

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const bounds =
        reactFlowWrapper.current.getBoundingClientRect();

      const raw = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (!raw) return;

      const appData = JSON.parse(raw);
      const type = appData.nodeType;

      if (!type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top
      });

      const nodeID = getNodeID(type);

      addNode({
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type)
      });
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      style={{
        width: "100%",
        height: 'calc(100vh - 160px)',
        background: "#020617"
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
      >
        <Background color="#334155" gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};