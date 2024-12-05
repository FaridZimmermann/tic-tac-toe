const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

const userMap = {};

async function getUserList() {
  const res = await io.fetchSockets()
  return res.map( (socket) => {return {name: userMap[socket.id], id: socket.id} }).filter(x => x !== undefined);
}



app.get("/", (req, res) => {
    res.send('<h1>Hello world</h1>');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("getConnectedUsers", async (arg) => {
      socket.emit("receiveConnectedUsers", getUserList());
    });

    socket.on("setUsername", async (arg) => {
      userMap[socket.id] = arg;
      socket.emit("receiveConnectedUsers", getUserList());
    })

    socket.on("disconnect", async (arg) => {
      delete userMap[socket.id];
      socket.emit("receiveConnectedUsers", getUserList());
    })

  });
  

server.listen(3000, () => {
    console.log('listening on *:3000');
  });