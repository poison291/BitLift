import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-primary mb-3">BitLift</h1>
          <p className="text-sm leading-relaxed text-gray-400">
            Seamless peer-to-peer file transfer — fast, private, and
            server-free.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Docs", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-primary-hover transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Connect
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:susan.dev291@gmail.com"
                className="hover:text-primary-hover transition-colors duration-200"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/poison291/BitLift"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-hover transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary">BitLift</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
