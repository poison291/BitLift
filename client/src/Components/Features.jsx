import {
  CloudOff,
  LockKeyhole,
  MonitorSmartphone,
  PlugZap,
  ShieldOff,
  Zap,
} from "lucide-react";
import React from "react";

const Features = () => {
  const iconSize = 30;

  const features = [
    {
      title: "End-to-End Encrypted",
      description: "Your files are encrypted before leaving your device",
      icon: <LockKeyhole size={iconSize} className="text-primary" />,
    },
    {
      title: "Lightning Fast",
      description: "Direct peer-to-peer connection for maximum speed",
      icon: <Zap size={iconSize} className="text-primary" />,
    },
    {
      title: "No Registration",
      description: "Start sharing instantly without creating an account",
      icon: <ShieldOff size={iconSize} className="text-primary" />,
    },
    {
      title: "No Cloud Needed",
      description: "Files are sent directly, no cloud storage involved",
      icon: <CloudOff size={iconSize} className="text-primary" />,
    },
    {
      title: "Cross-Platform",
      description:
        "Share files between devices seamlessly, no matter the platform",
      icon: <MonitorSmartphone size={iconSize} className="text-primary" />,
    },
    {
      title: "Fast & Reliable",
      description:
        "Transfers resume automatically if interrupted, ensuring reliability",
      icon: <PlugZap size={iconSize} className="text-primary" />,
    },
  ];

  return (
    <>
      <div className="mt-20 bg-gray-100 h-screen">
        <h1 className="text-center text-3xl font-semibold mb-10">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-8  ">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2 "
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-purple-600">
                {item.icon}
              </div>
              <div className="text-start">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
