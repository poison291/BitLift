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
  const features = [
    {
      title: "End-to-End Encrypted",
      description: "Your files are encrypted before leaving your device",
      icon: <LockKeyhole />,
    },
    {
      title: "Lightning Fast",
      description: "Direct peer-to-peer connection for maximum speed",
      icon: <Zap />,
    },
    {
      title: "No Registration",
      description: "Start sharing instantly without creating an account",
      icon: <ShieldOff />,
    },
    {
      title: "No Cloud Needed",
      description: "Files are sent directly, no cloud storage involved",
      icon: <CloudOff />,
    },
    {
      title: "Cross-Platform",
      description:
        "Share files between devices seamlessly, no matter the platform",
      icon: <MonitorSmartphone />,
    },
    {
      title: "Fast & Reliable",
      description:
        "Transfers resume automatically if interrupted, ensuring reliability",
      icon: <PlugZap />,
    },
  ];

  return (
    <>
      <div className="mt-20 px-8 pb-20">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-purple-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
