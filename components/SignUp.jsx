import React  from "react";
import { MailIcon, KeyIcon ,AtSymbolIcon} from "@heroicons/react/solid";
import Logo from "./Logo";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';

const SignUp = ({
  username,
  email,
  password,
  handleUsername,
  handleEmail,
  handlePassword,
  handleSignUp,
}) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50  dark:bg-gray-900 z-10 overflow-hidden">
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
            Already playing with TaskUpp?
          </p>
          <Link href="/login">
            <a href="/login">
              <button className="btn text-md text-gray-50 bg-indigo-600 hover:bg-indigo-500 shadow-md hover:shadow-2xl  hover:-translate-y-1 px-6">
                Log In
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-4 flex flex-col  w-[420px] rounded-2xl z-20 mx-auto mt-2">
        <div className="flex justify-center ">
          <Logo size="M" />
        </div>
        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6">
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-800 dark:text-gray-100">
            Sign Up
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
                  type="username"
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
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <MailIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  className="form-input"
                  placeholder="xyz@gmail.com"
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
            onClick={handleSignUp}
            type="submit"
            className="w-full btn bg-indigo-600 px-5 py-3 text-white  hover:shadow-2xl hover:opacity-80 "
          >
            Sign Up
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

export default SignUp;
