import { CloudUpload, Send, Waypoints } from "lucide-react";
import React from "react";

const HowItWorks = () => {
    const iconSize = 30;

  const steps = [
    {
      icon: <CloudUpload size={iconSize} className="text-primary" />,
      title: "Start a Transfer",
      description: "Open BitLift and launch a secure connection in one click.",
    },
    {
      icon: <Waypoints size={iconSize} className="text-primary"/>,
      title: "Share the Link",
      description:
        "Copy your unique BitLift link and send it to the person you want to connect with.",
    },
    {
      icon: <Send size={iconSize} className="text-primary"/>,
      title: "Send Files Instantly",
      description:
        "Once they open the link, your files transfer directly — fast, private, and cloud-free.",
    },
  ];
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-semibold mb-10 ">
          How it Works?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-8  ">
          {steps.map((item, index) => (
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2 " key={index}>
                 <div className="bg-secondary w-14 h-14 rounded-full flex items-center justify-center mb-4">
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

export default HowItWorks;
