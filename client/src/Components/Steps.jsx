import { CloudUpload, Send, Waypoints } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CloudUpload className="text-primary w-8 h-8" />,
      title: "Start a Transfer",
      description: "Open BitLift and launch a secure connection in one click.",
    },
    {
      icon: <Waypoints className="text-primary w-8 h-8" />,
      title: "Share the Link",
      description:
        "Copy your unique BitLift link and send it to the person you want to connect with.",
    },
    {
      icon: <Send className="text-primary w-8 h-8" />,
      title: "Send Files Instantly",
      description:
        "Once they open the link, your files transfer directly — fast, private, and cloud-free.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-center text-3xl font-semibold mb-16">
        How It Works
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative flex gap-6 mb-12">
            <div className="z-10 bg-secondary shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
