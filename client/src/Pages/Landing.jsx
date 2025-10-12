import React from "react";
import Navbar from "../Components/navbar";

const Landing = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="text-6xl font-bold mt-20  ml-5  select-none">
          <h1>
            The <span className="text-primary">Private </span>Way
          </h1>
          <h1>To Send Files.</h1>

          <p className="text-xl font-normal mt-7 w-1/3 text-gray-700">
            Transfer files peer-to-peer using direct connection. Your data is
            <strong> secure</strong>, <strong>encrypted</strong>, and
            <strong> never</strong> touches our cloud storage.
          </p>
          <button className="bg-primary text-xl font-semibold text-white px-4 py-3 rounded-xl">
            Start Sharing Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;

