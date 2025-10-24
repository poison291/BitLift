import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://bitlift-lauch.vercel.app"
    ],
    methods: ["GET", "POST"]
  },
  maxHttpBufferSize: 300 * 1024 * 1024,
});


// Joining connection in room with socket
io.on("connection", (socket) => {
  console.log(`🟢 Client Connected: ${socket.id}`);

  // Joining the client to the room
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId)
    console.log(`🔵 Socket: ${socket.id} Joined Room: ${roomId}`)
    socket.emit("RoomId", roomId);
  });


  socket.on("disconnect", () => {
    console.log(`🔴 Client disconnected:: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log(`🚀 Signalling server runnning on https://bitlift-1.onrender.com/`);
});
