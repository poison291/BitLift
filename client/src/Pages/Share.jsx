import React from "react";
import Navbar from "../Components/Navbar";
import { io } from "socket.io-client";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const [file, setFile] = useState(null);
  const [roomId, setroomId] = useState(null);

  const navigate = useNavigate();

  const handleGenartelink = () => {
    if (!file) return;

    const fileData = {
      name: file.name,
      type: file.type || "Unknown",
      size: (file.size / 1024 / 1024).toFixed(2) + "MB",
    };

    const id = Math.random().toString(36).substring(2, 10);
    setroomId(id);

  
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full p-6 bg-white rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Share a File</h1>
          <input
            type="file"
            className="border  p-2 rounded"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setroomId(null);
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
                className="text-indigo-600 break-all"
                href={`http://localhost:5174/share/${roomId}`}
              >
                http://localhost:5174/share/{roomId}
              </a>
            </div>
          )}

          {!roomId && file && (
            <button
              onClick={handleGenartelink}
              disabled={!file}
              className={`mt-4 px-4 py-2 rounded bg-indigo-600 text-white font-semibold ${
                !file ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
              }`}
            >
              Create Share Link
            </button>
          )}
      
        </div>
      </main>
    </>
  );
};

export default Share;
