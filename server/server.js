import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { SocketAddress } from "net";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

const rooms = new Map();

// Joining connection in room with socket
io.on("connection", (socket) => {
  console.log(`A new user connected with ${socket.id}`);

  socket.on("joinRoom", (roomId) => {
    console.log(`Socket ${socket.id} Joining Room: ${roomId}`);
    socket.emit("RoomId", roomId);
  });
  
  socket.on("disconnect", () => {
    console.log(`A user disconnected with: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log(`signalling server runnning on http://localhost:3000`);
});
