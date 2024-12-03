const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const {Redis} = require("ioredis");


const redis = new Redis();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});


app.get("/", (req, res) => {
    res.send('<h1>Hello world</h1>');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("getConnectedUsers", async (arg) => {
      const res = await io.fetchSockets()

      console.log(res.map(async (socket) => {
        
        const userName = await redis.get(socket.id)
        return userName;
    }));
    })

    socket.on("setUsername", async (arg) => {
      await redis.set(socket.id, arg);

    })
  });
  

server.listen(3000, () => {
    console.log('listening on *:3000');
  });