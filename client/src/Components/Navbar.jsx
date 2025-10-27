import React from "react";
import { Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="shadow-xl px-8 py-3 bg-white flex items-center justify-between sticky top-0">
      <Link to="/">
        <div className="flex items-center space-x-2">
          <Share2 className="text-primary " />
          <h1 className="text-2xl font-bold">Bit Lift</h1>
        </div>
      </Link>

      <div className="flex items-center space-x-6 font-semibold">
        <Link to="/features" className="hover:text-primary-hover transition ">
          Features
        </Link>
        <Link to="/support" className="hover:text-primary-hover transition">
          Support
        </Link>
        <Link to="/faq" className="hover:text-primary-hover transition">
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
