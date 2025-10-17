import React from "react";
import { Clock, ArrowRight } from "lucide-react";

const LaunchingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-gray-900 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-50 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>


      <div className="z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-8 font-medium">
          <Clock className="w-4 h-4" />
          <span>Coming Soon</span>
        </div>


        <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
          BitLift
        </h1>

     
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          We're launching something special
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
          Fast, secure, peer-to-peer file sharing. Share files directly without
          limits or cloud storage.
        </p>

    
        <a
          href="https://discord.gg/zsQV6DC5tX"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Join our Discord
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="mt-8 text-sm text-gray-500">
          <strong>Be the first to know when we launch</strong>
        </p>
      </div>

  
      <div className="absolute bottom-8 z-10">
        <p className="text-sm text-gray-400 text-center">
          No cloud. No limits. Peer-to-peer file sharing made simple.
        </p>
      </div>
    </div>
  );
};

export default LaunchingSoon;
