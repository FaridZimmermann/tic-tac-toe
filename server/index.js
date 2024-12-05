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



app.get("/", (req, res) => {
    res.send('<h1>Hello world</h1>');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("getConnectedUsers", async (arg) => {
      const res = await io.fetchSockets()

      console.log(res.map( (socket) => userMap[socket.id]));
    })

    socket.on("setUsername", async (arg) => {

    })
  });
  

server.listen(3000, () => {
    console.log('listening on *:3000');
  });