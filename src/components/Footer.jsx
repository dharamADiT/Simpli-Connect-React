import React from "react";
import footerBg from "/public/logo3.png"; 
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate =useNavigate()
  return (
    <section
      className="relative w-full text-white"
    >
      
      <div
        className="absolute  inset-0 bg-cover bg-center"
        
      >
        <img src={footerBg} className="w-full" alt="" />
      </div>

    
      <div className="absolute  inset-0 bg-black/70"></div>

     
      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

         

      
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">UseFull Links</h6>
            <div className="flex flex-col">
              <Link to={'/about'} className="hover:underline text-blue-400 cursor-pointer">About us</Link>
              <Link to={'/contact'} className="hover:underline text-blue-400 cursor-pointer">Contact</Link>
              <Link to={'/overview'} className="hover:underline text-blue-400 cursor-pointer">Overview</Link>
              <Link to={'/faq'} className="hover:underline text-blue-400 cursor-pointer">FAQ</Link>


            </div>
          </div>

        
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">Dashboards</h6>
            <div className="flex flex-col">
              <Link className="hover:underline text-blue-400 cursor-pointer">Student </Link>
              <Link className="hover:underline text-blue-400 cursor-pointer">Employee</Link>
              <Link className="hover:underline text-blue-400 cursor-pointer">Entrepreneur</Link>
            </div>
          </div>

      
          <div>
            <h6 className="uppercase mb-4 font-bold text-lg">Contact</h6>
            <p>📍 Gurgaon Haryanad</p>
            <p >📧 OUTOFTHEBOX@gmail.com</p>
            <p>📞 7357888143</p>
           
          </div>
        </div>

        {/* <div className=" not-enabled: mt-10 mb-6"></div> */}

       
        <div className="flex flex-col md:flex-row mt-28 justify-between items-center">

         
          <div className="text-center md:text-left text-sm">
            © 2025 Copyright:
            <Link to={"https://simpli-connect-react.vercel.app/"} className="underline ml-1">SimpliConnect.com</Link>
          </div>

        
          <div className="flex gap-4 mt-5 md:mt-0 text-sm">
            <Link  to= { "https://github.com/dharamADiT/Simpli-Connect-React"}className=" bg-blue-600  px-3 py-1 rounded-full  hover:bg-blue-800 transition">
              GitHub
            </Link>
            <Link to={"https://www.linkedin.com/in/dharam-baghel-53bab4267/?originalSubdomain=in"} className=" bg-blue-600  px-3 py-1 rounded-full  hover:bg-blue-800 transition">
              Linkedin
            </Link>
            

          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
