import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const footerClasses = {
  container:"relative mt-40 md:mt-0 flex flex-col md:flex-row  space-y-4 md:space-y-0 justify-between items-center px-4 py-4 pb-12 sm:px-6 md:px-12 md:py-4 md:mt-12",

  box__middle: "absolute -top-24 left[128px] sm:-top-20 sm:left-[165px] md:-top-1 md:left-[685px] flex space-x-4 ",

};



const Footer = () => {

  return (
    <footer className="flex flex-col w-full py-4 space-y-2 items-left">

      <Logo size="S" />
      <div className=" text-sm text-gray-500 ">
       
        Coyright &copy; {new Date().getFullYear()}
        
        <span className="dark:text-gray-100 text-gray-900 font-semibold text-sm px-2"> GateGuard.in </span>{" "}
         
         All Rights Reserved
      </div>
    
    </footer>
  );
};

export default Footer;
