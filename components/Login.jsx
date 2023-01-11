import React from "react";
import {KeyIcon, AtSymbolIcon } from "@heroicons/react/solid";
// import {
//   AiOutlineTwitter,
//   AiOutlineGithub,
//   AiOutlineGooglePlus,
// } from "react-icons/ai";

import Logo from "./Logo";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';


const Login = ({
  username,
  password,
  handleSignIn,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 z-10 overflow-hidden">
       <Toaster position="top-center" />
      {/* SignUp Nav Section   */}
      <div className="flex justify-between mx-auto max-w-7xl w-full h-16 bg-transparent mt-4">
        <div className="flex items-center">
          {/* Logo */}
          <Logo size="L" />
        </div>
        {/* Log In Button */}
        <div className="flex items-center space-x-4">
          <p className="text-md font-inter font-semibold text-gray-800 dark:text-gray-100">
            Not Signed Up yet?
          </p>
          <Link href="/signup">
            <a>
              <button className="btn text-md text-gray-50 bg-indigo-600 hover:bg-indigo-400 shadow-md hover:shadow-2xl  hover:-translate-y-1 px-6">
                Sign Up
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-6 flex flex-col z-20 mx-auto w-[420px] mt-2">
        <div className="flex justify-center ">
          <Logo size="M" />
        </div>
        <div className="flex flex-col space-y-8 flex-1 px-12 py-4 pt-6">
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-800 dark:text-gray-100">
            Login
          </div>

          <div className="flex flex-col">

            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Username
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <AtSymbolIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsername}
                  className="form-input"
                  placeholder="your username"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Password
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <KeyIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  className="form-input"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

          </div>

          <button
            onClick={handleSignIn}
            type="submit"
            className="w-full btn bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80"
          >
            Login
          </button>
        </div>

        <div className=" flex items-center justify-center px-16">
          <p className="font-inter font-normal text-center text-[10px] text-gray-900 dark:text-gray-200 py-[6px]">
            By clicking the button above, you agree to our
            <span className="inline-block items-center justify-center">
              <a className=" px-1 underline text-[11px] font-medium font-inter text-gray-900 dark:text-gray-100">
                Terms of Service
              </a>
            </span>
            and
            <span className="pl-1 inline-block items-center justify-center">
              <a className="underline text-[11px] font-medium font-inter text-gray-900 dark:text-gray-100">
                Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* Bg Cover */}

      {/* <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div> */}
    </div>
  );
};

export default Login;
