import React from "react";
import Link from "next/link";
import { ShieldExclamationIcon , ExclamationCircleIcon } from "@heroicons/react/outline";

const Error = () => {
  return (
    <div className="min-h-screen w-full  pt-20 bg-red-300">
        <div className="w-[800px] mx-auto px-2 py-6  flex flex-col space-y-8 items-center">
        <ShieldExclamationIcon className="w-20 h-20 text-red-500 dark:text-red-600" />
      <p className="text-4xl font-bold text-red-500 dark:text-red-500 text-center">
      Wrong  Username or Password ,please check your username or password.
      </p>
      <Link href="/login">
        <a className="w-40 text-center btn  bg-gray-100 px-5 py-3 text-gray-900 hover:shadow-2xl hover:opacity-80">
          Login
        </a>
      </Link>
        </div>
    </div>
  );
};

export default Error;
