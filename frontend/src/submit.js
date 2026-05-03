import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);

    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes,
        edges,
      }),
    });

    const data = await response.json();

    alert(`Pipeline Summary

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes" : "No"}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 30px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};