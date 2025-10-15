import express from "express";
import cors from "cors";
import http from "http";

import { Server } from "socket.io";
import { join } from "path";

const app = express();
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const rooms = new Map()

// Joining connection in romm with socket 
io.on('connection', (socket) => {
  console.log('socket connected', socket.id)

  socket.on('join', (room) => {
    socket.join(room)
  })

  // signalling the data
  socket.on('signal', (payload) => {
      const {room, type, data} = payload;
      socket.to(room).emit('signal', {type, data})
  })

  socket.on('disconnect', () => {
    console.log('Socket discconected', socket.id)
  })
});


server.listen(3000, () => {
  console.log(`signalling server runnning on http://localhost:3000`)
})