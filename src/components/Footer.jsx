import React from "react";
import footerBg from "/public/logo3.png"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      className="relative w-full text-white"
    >
      {/* Background Image */}
      <div
        className="absolute  inset-0  bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

         

          {/* Products */}
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">UseFull Links</h6>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">About us</li>
              <li className="hover:underline cursor-pointer">Contact</li>
              <li className="hover:underline cursor-pointer">Overview</li>
              <li className="hover:underline cursor-pointer">FAQ</li>

              <li className="hover:underline cursor-pointer">Categories</li>
              <li className="hover:underline cursor-pointer">Help</li>

            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">Dashboard links</h6>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Student </li>
              <li className="hover:underline cursor-pointer">Employee</li>
              <li className="hover:underline cursor-pointer">Entrepreneur</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">Contact</h6>
            <p>📍 Gurgaon Haryanad</p>
            <p >📧 dharam892001@gmail.com</p>
            <p>📞 7357888143</p>
           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-10 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Left */}
          <div className="text-center md:text-left text-sm">
            © 2025 Copyright:
            <Link to={""} className="underline ml-1">SimpliConnect.com</Link>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-4 mt-5 md:mt-0 text-sm">
            <Link className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
              GitHub
            </Link>
            <Link className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
              Linkedin
            </Link>
            
            <Link className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
              Instagram
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
