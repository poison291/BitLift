import { ArrowRight } from "lucide-react";
import Navbar from "../Components/Navbar";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center mt-20 px-8">
          <div className="text-center max-w-4xl select-none">
            <h1 className="text-6xl font-bold">
              The <span className="text-primary">Private </span>Way
            </h1>
            <h1 className="text-6xl font-bold">To Send Files.</h1>

            <p className="text-xl font-normal mt-8 text-gray-700 max-w-2xl mx-auto">
              Transfer files peer-to-peer using direct connection. Your data is
              <strong> secure</strong>, <strong>encrypted</strong>, and
              <strong> never</strong> touches our cloud storage.
            </p>

            <button className="bg-primary inline-flex items-center hover:bg-purple-600  transition-colors cursor-pointer gap-2 text-xl font-semibold text-white px-6 py-3 rounded-xl mt-10">
              Start Sharing Now{" "}
              <ArrowRight className="mt-1 font-bold" size={20} />
            </button>
          </div>
        </div>
        <div className="flex mt-20 justify-center space-x-20 text-primary select-none">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-gray-600 text-xl font-semibold">Private</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">0</span>
            <span className="text-gray-600 text-xl font-semibold">
              Cloud Storage
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">24/7</span>
            <span className="text-gray-600 text-xl font-semibold">Support</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
