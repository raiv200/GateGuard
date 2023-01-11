import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { LockClosedIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/outline";

const ConfirmSignUp = ({ authCode, handleAuthCode, handleConfirmSignUp }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 z-10 overflow-hidden ">
      {/* SignUp Nav Section   */}
      <div className="flex justify-between mx-auto max-w-7xl w-full h-16 bg-transparent mt-4">
        <div className="flex items-center">
          {/* Logo */}
          <Logo size="L" />
        </div>
      </div>

      <div className=" flex flex-col w-[400px] h-[440px]  rounded-2xl mx-auto py-8 px-4 mt-6 space-y-3 ring-2 ring-indigo-200 dark:ring-indigo-500 shadow-2xl">
        <div className="flex flex-col items-center space-y-4 flex-1 px-4 ">
        <MailOpenIcon className="w-20 h-20 text-indigo-500 dark:text-indigo-500" />
          <div className="flex items-center justify-center text-3xl font-inter font-bold text-gray-800 dark:text-gray-100">
            We Emailed You
          </div>
          <p className="flex text-center items-center justify-center text-sm font-inter font-medium text-gray-800 dark:text-gray-100">
            Your Code is on the way. To log In enter the code we emailed you. It
            may take a minute to arrive.
          </p>
        </div>
        
        
        

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-300"
          >
            Enter your Code
          </label>
          <div className="relative mb-4">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <LockClosedIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            <input
              type="authCode"
              id="authCode"
              value={authCode}
              onChange={handleAuthCode}
              className="form-input"
              placeholder="Your 6-digit Verification Code"
            />
          </div>
          <button
            onClick={handleConfirmSignUp}
            type="submit"
            className="w-full btn  bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Bg Cover */}
      {/* <div className="absolute w-full bottom-0">
        <img className="w-full " src="/bg-cover.png" alt="Bg-cover" />
      </div> */}
    </div>
  );
};

export default ConfirmSignUp;
