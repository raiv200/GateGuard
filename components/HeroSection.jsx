import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {AiOutlineWhatsApp} from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-between max-w-7xl w-full bg-transparent min-h-screen space-y-4 z-20 ">
      {/* NavBar */}
      <Navbar />
      {/* Main Section */}
      <div className="flex justify-between">
        {/* Left Side */}
        <div className="flex flex-col pt-8">
          <div className="flex flex-col  space-y-8 pt-10  w-[640px]">
            <h2 className=" text-5xl font-extrabold font-inter text-gray-900 dark:text-gray-100 leading-snug">
            Manage your visitors,delivery boys, staffs with ease.
            </h2>
            <p className="w-[450px] text-sm font-medium text-gray-800 dark:text-gray-100 font-inter">
            GateGuard offers you the most reliable services that you need.
            </p>
            <div className="flex space-x-4 ">
            <button className=" btn bg-indigo-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:bg-indigo-700">
                Schedule Demo
              </button>
              <button className="flex btn bg-green-600 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:bg-emerald-700">
               Get Details on WhatsApp 
               <span className="flex items-center pl-2">
                <AiOutlineWhatsApp size="1.5em" />
                </span>
              </button>
            </div>
          </div>

          
          
        </div>

        {/* Right Side */}
        <div className="flex">
          <Image className="" width={617} height={504} src="/banner-gateguard.webp" />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
