import { ArrowRight } from "lucide-react";
import Navbar from "../Components/Navbar";
import Flow from "../Components/Flow";
import Features from "../Components/Features";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Landing = () => {
  const navigate = useNavigate();

  const shareButtonHandle = () => {
    navigate("/share");
  };

  return (
    <>
      <div className="bg-gray-100 min-h-scree select-none ">
        <Navbar />
        <div className="flex items-center justify-center mt-20 px-8">
          <div className="text-center max-w-4xl select-none">
            <h1 className="text-6xl font-bold">
              The <span className="text-primary">Private </span>
              Way
            </h1>
            <h1 className="text-6xl font-bold">To Send Files.</h1>

            <p className="text-xl font-normal mt-8 text-gray-700 max-w-2xl mx-auto">
              Transfer files peer-to-peer using direct connection. Your data is
              <strong> secure</strong>, <strong>encrypted</strong>, and
              <strong> never</strong> touches our cloud storage.
            </p>

            <button
              onClick={shareButtonHandle}
              className="bg-primary inline-flex items-center hover:bg-primary-hover  transition-colors cursor-pointer gap-2 text-xl font-semibold text-white px-6 py-3 rounded-xl mt-10"
            >
              Start Sharing Now
              <ArrowRight className="mt-1 font-bold" size={20} />
            </button>
          </div>
        </div>
        <div className="flex mt-15 justify-center space-x-20 text-primary select-none">
          <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-2xl ">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-gray-600 text-xl font-semibold">Private</span>
          </div>

          <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-2xl ">
            <span className="text-2xl font-bold">0</span>
            <span className="text-gray-600 text-xl font-semibold">
              Cloud Storage
            </span>
          </div>

          <div className="flex flex-col items-center bg-white p-4 shadow-xl rounded-2xl ">
            <span className="text-2xl font-bold">24/7</span>
            <span className="text-gray-600 text-xl font-semibold">Support</span>
          </div>
        </div>
        <Flow />
        <Features />
      <Footer/>
      </div>
    </>
  );
};

export default Landing;
