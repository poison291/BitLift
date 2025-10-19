import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { io } from "socket.io-client";

const Share = () => {
  const [file, setFile] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const socketRef = useRef();

  const SERVER_URL =
    process.env.NODE_ENV === "production"
      ? "https://sharika-unchipped-allonymously.ngrok-free.dev/" // replace with your deployed backend URL
      : "http://localhost:3000";

  useEffect(() => {
    socketRef.current = io(SERVER_URL, { transports: ["websocket"] });
    return () => socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    if (roomId) {
      socketRef.current.emit("joinRoom", roomId);
    }
  }, [roomId]);

  const handleGenerateLink = () => {
    if (!file) return;
    const id = Math.random().toString(36).substring(2, 10);
    setRoomId(id);
    console.log(`Room Id from Client: ${id}`);
  };

  const handleSendFile = () => {
    if (!roomId || !file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target.result;
      socketRef.current.emit("sendFile", {
        roomId,
        file: {
          name: file.name,
          type: file.type,
          data: fileData,
        },
      });
    };
    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    socketRef.current.on("receiveFile", (file) => {
      const blob = new Blob([file.data], { type: file.type });
      const url = URL.createObjectURL(blob);
      console.log("Received file URL:", url);

      // Optional: automatically download
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });
  }, []);

  const CLIENT_URL =
    process.env.NODE_ENV === "production"
      ? window.location.origin
      : "http://localhost:5173";

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full p-6 bg-white rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Share a File</h1>
          <input
            type="file"
            className="border p-2 rounded"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setRoomId(null);
            }}
          />

          {file && (
            <div className="mt-3 text-gray-700 text-sm border rounded p-3 bg-gray-50">
              <p>
                <strong>Name:</strong> {file.name}
              </p>
              <p>
                <strong>Type:</strong> {file.type || "Unknown"}
              </p>
              <p>
                <strong>Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          {roomId && (
            <div className="mt-4 p-3 border rounded bg-gray-50">
              <h2 className="font-semibold text-gray-800">Your share link:</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 break-all"
                href={`${CLIENT_URL}/share/${roomId}`}
              >
                {CLIENT_URL}/share/{roomId}
              </a>
            </div>
          )}

          {!roomId && file && (
            <button
              onClick={handleGenerateLink}
              disabled={!file}
              className={`mt-4 px-4 py-2 rounded bg-indigo-600 text-white font-semibold ${
                !file ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
              }`}
            >
              Create Share Link
            </button>
          )}

          {roomId && file && (
            <button
              onClick={handleSendFile}
              className="mt-4 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              Send File
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Share;
