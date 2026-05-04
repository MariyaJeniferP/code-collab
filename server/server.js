const mongoose = require("mongoose");
const User = require("./models/User");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(cors({
   origin: [
    "http://localhost:5175",
    "https://code-collab-tau-six.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.options("*", cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/codecollab");
console.log("MongoDB connected");

function handleProcess(process, fileName, res, exeName = null) {

  let output = "";

  process.stdin.write("");
  process.stdin.end();

  process.stdout.on("data", (data) => {
    output += data.toString();
  });

  process.stderr.on("data", (data) => {
    output += data.toString();
  });

  process.on("close", () => {

    res.json({ output });

    // cleanup files
    try {
      if (fileName && fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
      }

      if (exeName && fs.existsSync(exeName)) {
        fs.unlinkSync(exeName);
      }

    } catch (err) {
      console.log("Cleanup error:", err.message);
    }
  });
}

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
     origin: [
      "http://localhost:5175",
      "https://code-collab-tau-six.vercel.app"
    ],
    methods: ["GET", "POST"]
  },
});

app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password
  });

  await user.save();

  res.json({message:"User registered"});
});

app.post("/signin", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if(user){
    res.json({ success:true, message:"Login successful", name: user.name });
  } else {
    res.json({ success:false, message:"Invalid email or password" });
  }

});
const { spawn } = require("child_process");
const fs = require("fs");

app.post("/run-code", (req, res) => {
  try {
    let { language, code, input } = req.body;

    language = language.toLowerCase().trim();

    let fileName;

    if (language === "javascript") {
      fileName = "main.js";
      fs.writeFileSync(fileName, code);

      const run = spawn("node", [fileName], { shell: true });
      handleProcess(run, fileName, res);
    }

    else if (language === "python") {
      fileName = "main.py";
      fs.writeFileSync(fileName, code);

      const run = spawn("python", [fileName], { shell: true });
      handleProcess(run, fileName, res);
    }

    else if (language === "c") {
      const id = Date.now();
      fileName = `main_${id}.c`;
      const exeName = `main_${id}.exe`;

      fs.writeFileSync(fileName, code);

      const compile = spawn(`gcc ${fileName} -o ${exeName}`, { shell: true });

      compile.on("close", () => {
        const run = spawn(`.\\${exeName}`, { shell: true });
        handleProcess(run, fileName, res, exeName);
      });
    }

    else {
      return res.json({ output: "Language not supported" });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ output: err.message });
  }
});

let activeUsers = [];

io.on("connection", (socket) => {

    socket.emit("live-data", activeUsers);
  console.log("User connected:", socket.id);

  // When user joins room
  socket.on("join-room", ({ name, roomId }) => {

    socket.join(roomId);

    console.log(name, "joined room:", roomId);

    // Add user to active list
    activeUsers = activeUsers.filter(
       user => user.socketId !== socket.id
);

          activeUsers.push({
          socketId: socket.id,
          name,
          roomId
});
    // Send live data to all users
    io.emit("live-data", activeUsers);

  });

  // Message send
  socket.on("message", (data, roomId) => {

    socket.to(roomId).emit("message", data);

  });

  // When user disconnects
  socket.on("disconnect", () => {

    console.log("User disconnected");

    // Remove disconnected user
    activeUsers = activeUsers.filter(
      user => user.socketId !== socket.id
    );

    // Send updated list
    io.emit("live-data", activeUsers);

  });

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});