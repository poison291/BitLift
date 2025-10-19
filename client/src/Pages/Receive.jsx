import React, { useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config/config";

const Receive = () => {
  const { roomId } = useParams();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(BACKEND_URL, { transports: ["websocket"] });

    if (roomId) {
      socketRef.current.emit("joinRoom", roomId);
    }

    socketRef.current.on("receiveFile", (file) => {
      console.log("Received file:", file.name, file.size);
      const blob = new Blob([file.data], { type: file.type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });

    return () => socketRef.current.disconnect();
  }, [roomId]);

  return (
    <div>
      <h1>Receiving Files</h1>
      <p>Waiting for files in room: {roomId}</p>
    </div>
  );
};

export default Receive;
