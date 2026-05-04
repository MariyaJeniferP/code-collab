import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

const socket = io("https://code-collab-server-78yy.onrender.com");

function Editor() {

  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");

  const [searchParams] = useSearchParams();
  const room = searchParams.get("room");
  const userName = localStorage.getItem("userName");
  const [input, setInput] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {

    socket.emit("join-room", {
      name: userName,
      roomId: room
    });

    socket.on("message", (data) => {
      setCode(data);
    });


  socket.on("live-data", (users) => {
    setActiveUsers(users);
  });

    return () => {
      socket.off("message");
      socket.off("live-data");
    };

  }, [room]);

  // When code changes
  const handleCodeChange = (value) => {

    setCode(value);

    socket.emit("message", value, room);

  };
    const runCode = async () => {
  try {

    const response = await axios.post(
      "https://code-collab-server-78yy.onrender.com/run-code",
      {
        language: language,
        code: code,
        input: input
      }
    );

    setOutput(response.data.output || "No Output");

  } catch (error) {
    console.error(error);
    setOutput("Error running code");
  }
};
  return (

    <div style={{ padding: "30px" }}>

      <h2>Real-Time Code Editor</h2>

      {/* Top Controls */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "10px",
          alignItems: "center"
        }}
      >

        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px"
          }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>

        {/* Run Button */}
        <button
          onClick={runCode}
          style={{
            padding: "8px 18px",
            background: "#06b6d4",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px"
          }}
        >
          Run Code
        </button>

      </div>

      {/* Monaco Editor */}
      <MonacoEditor
  height="400px"
  language={
    language === "cpp"
      ? "cpp"
      : language === "c"
      ? "c"
      : language === "java"
      ? "java"
      : language === "python"
      ? "python"
      : language === "html"
      ? "html"
      : language === "css"
      ? "css"
      : "javascript"
  }
  value={code}
  onChange={handleCodeChange}
  theme="vs-dark"
/>

      {/* Output Section */}
<div
  style={{
    marginTop: "15px",
    background: "#111",
    color: "white",
    padding: "10px",
    minHeight: "120px",
    borderRadius: "6px"
  }}
>

  {/* HTML / CSS Preview */}
  {(language === "html" || language === "css") && (
    <iframe
      title="preview"
      srcDoc={
        language === "css"
          ? `<style>${output}</style><div>Preview Text</div>`
          : output
      }
      style={{
        width: "100%",
        height: "250px",
        border: "1px solid #ccc",
        marginTop: "10px",
        background: "white"
      }}
    />
  )}

  {/* Input (only for coding languages) */}
  {(language !== "html" && language !== "css") && (
    <div style={{ marginTop: "15px" }}>
      <label style={{ fontWeight: "bold", marginRight: "10px" }}>
        Input:
      </label>

      <input
        type="text"
        placeholder="Enter the value of input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "200px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px"
        }}
      />
    </div>
  )}

  {/* Output for non-HTML */}
  {(language !== "html" && language !== "css") && (
    <div style={{ marginTop: "15px" }}>
      <h4>Output:</h4>
      <pre>{output}</pre>
    </div>
  )}

</div>
</div>
);
}
export default Editor;