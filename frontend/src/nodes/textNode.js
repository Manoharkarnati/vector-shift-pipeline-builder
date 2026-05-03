import { useMemo, useState } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const variables = useMemo(() => {
    const matches = [...currText.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)];
    return matches.map((match) => match[1]);
  }, [currText]);

  const rows = Math.max(3, currText.split("\n").length);
  const width = Math.max(240, currText.length * 8);

  return (
    <BaseNode
      title="Text Node"
      width={Math.min(width, 420)}
      minHeight={140}
      inputs={variables.map((item) => ({
        id: `${id}-${item}`
      }))}
      outputs={[
        { id: `${id}-output` }
      ]}
    >
      <label style={{ display: "block", marginBottom: "8px" }}>
        Text:
      </label>

      <textarea
        rows={rows}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        style={{
          width: "100%",
          resize: "none",
          borderRadius: "8px",
          padding: "8px",
          border: "1px solid #475569",
          background: "#1e293b",
          color: "white"
        }}
      />

      <p style={{ fontSize: "12px", marginTop: "8px", color: "#94a3b8" }}>
        Use variables like: {"{{name}}"}
      </p>
    </BaseNode>
  );
};