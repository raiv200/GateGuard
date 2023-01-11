import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import ThemeChanger from "./ThemeChanger";

const NavClasses = {
  links:
    "text-sm font-inter font-bold text-gray-800 px-3 py-1 rounded-md dark:text-gray-300 hover:bg-indigo-700/80 transition duration-300 ease-in ",
};

const Navbar = () => {
  return (
    <header className="flex justify-between items-center w-full h-[70px] bg-transparent mt-4">
      <div className="flex space-x-12 items-center">
        {/* Logo */}

        <Logo size="L" />

        {/* Nav Items */}

        <div className="flex pt-2.5">
          <ul className="flex items-baseline list-none m-0 p-0 space-x-2">
            <Link href="/features">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold ">
                <li className={NavClasses.links}>Features</li>
              </a>
            </Link>
            <Link href="/about">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold ">
                <li className={NavClasses.links}>About Us</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold ">
                <li className={NavClasses.links}>Contact Us</li>
              </a>
            </Link>
            <Link href="/pricing">
              <a className="pb-0 decoration-none cursor-pointer font-inter  text-gray-800 font-semibold ">
                <li className={NavClasses.links}>Pricing</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
   {/* Theme Changer*/}

  

      {/* Sign Up & Log In Button */}
      <div className="flex items-center space-x-6">
      <ThemeChanger />
        <Link href="/signup">
          <a>
            <button className="btn text-md bg-indigo-200 text-indigo-500 hover:bg-opacity-80 shadow-2xl hover:shadow-indigo-500 hover:-translate-y-1">
              Sign Up
            </button>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <button className="btn text-md bg-indigo-600  text-indigo-100 hover:bg-opacity-70 hover:-translate-y-1 ">
              Log In
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
