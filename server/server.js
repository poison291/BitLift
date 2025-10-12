import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Signaling server running on http://localhost:${PORT}`);
});

const webSocketServer = new WebSocketServer({ server });
const room = {};

webSocketServer.on("connection", (ws) => {
  console.log(`🟢 New Client Connected`);

  let roomID;

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log(data);

    if (data.type === "join") {
      roomID = data.room;
      if (!room[roomID]) room[roomID] = [];
      room[roomID].push(ws);
      console.log(`🟣 Client joined room: ${roomID}`);
      return;
    }
  });
});
