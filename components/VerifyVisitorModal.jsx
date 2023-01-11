import React, { useState } from "react";
import { XIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const VerifyVisitorModal = ({ visitorId,handleVerifyVisitorModal, handleVerifyVisitor }) => {
  const [verificationCode, setVerificationCode] = useState("");

 
  return (
    <Modal>
      <div className="relative pt-8 flex flex-col  bg-gray-100 dark:bg-gray-800 shadow-2xl w-[450px] h-[260px] rounded-2xl mx-auto  transition duration-300 ease-in mt-10">
        {/* Modal Close button */}
        <button
          onClick={handleVerifyVisitorModal}
          className="absolute top-2 right-2 w-8 h-8  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </button>

        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-8 ">
          <div className="flex flex-col space-y-3">
            <div className=" flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                Enter Verification Code
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
              <BadgeCheckIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500 transition duration-300 ease-in" />
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter Code"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
              />
            </div>
          </div>

         

          <button
            onClick={() => handleVerifyVisitor(visitorId,verificationCode,handleVerifyVisitorModal)}
            type="submit"
            className="w-full btn bg-indigo-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80"
          >
            Verify Visitor
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VerifyVisitorModal;
