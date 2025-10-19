import React, { useRef } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";

const Receive = () => {
  const { roomId } = useParams();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("https://sharika-unchipped-allonymously.ngrok-free.dev/");

    // Join the room
    if (roomId) {
      socketRef.current.emit("joinRoom", roomId);
    }

    // Listen for incoming files
   socketRef.current.on("receiveFile", (file) => {
  const uint8Array = new Uint8Array(file.data); // convert back
  const blob = new Blob([uint8Array], { type: file.type });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  a.click();
  URL.revokeObjectURL(url);

  console.log("Received file:", file.name, file.data.length);
});


    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);


  return (
        <div>
      <h1>Receiving Files</h1>
      <p>Waiting for files in room: {roomId}</p>
    </div>
  );
};

export default Receive;
