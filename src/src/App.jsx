import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div style={{ maxWidth: 600, margin: "auto", background: "white", padding: 20, borderRadius: 10 }}>
      <h1 style={{ textAlign: "center" }}>Resume Generator</h1>
      <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <input placeholder="Job Title" value={job} onChange={e => setJob(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <textarea placeholder="Short Summary" value={summary} onChange={e => setSummary(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <div style={{ border: "1px solid #ddd", padding: 15 }}>
        <h2>{name || "Your Name"}</h2>
        <h4>{job || "Your Job Title"}</h4>
        <p>{summary || "Write a short summary about yourself..."}</p>
      </div>
    </div>
  );
}
