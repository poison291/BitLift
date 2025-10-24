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

    return () => socketRef.current.disconnect();
  }, [roomId]);

  return (
    <div className="flex items-center justify-center">
      <h1>Receiving Files</h1>
      <p>Waiting for files in room: {roomId}</p>
    </div>
  );
};

export default Receive;
