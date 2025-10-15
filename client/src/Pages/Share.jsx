import React from "react";
import Navbar from "../Components/Navbar";
import {io} from "socket.io-client"
import { useRef, useEffect, useState } from "react";

const Share = () => {
  const [file, setFile] = useState(null);
  const [roomId, setroomId] = useState(null);

  const socketRef = useRef()

  const handleGenartelink = () => {
    if (!file) return;
    const id = Math.random().toString(36).substring(2, 10);
    setroomId(id)
    console.log(id);
    
  };
  console.log(file)
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
              setFile(e.target.files[0])
            setroomId(null);
  }}
            />

          {roomId && (
              <div className="mt-4 p-3 border rounded bg-gray-50">
              <h2 className="font-semibold text-gray-800">Your share link:</h2>
              <p className="text-indigo-600 break-all">
                http://localhost:5173/share/{roomId}
              </p>
            </div>
          
          )}
        {!roomId && file &&

          <button
          onClick={handleGenartelink}
          disabled={!file}
          className={`mt-4 px-4 py-2 rounded bg-indigo-600 text-white font-semibold ${
            !file ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
            >
            Create Share Link
          </button>
          }
        </div>
      </main>
    </>
  );
};

export default Share;
