import React, { useState } from "react";
import { XIcon, IdentificationIcon, CalendarIcon, ClockIcon, UsersIcon, OfficeBuildingIcon, PhoneIcon, RefreshIcon, UserCircleIcon, UserGroupIcon, HomeIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const DomesticHelperInfoModal = ({
  handleDomesticHelperInfoModal,
   name,
  imageURL,
  age,
  gender,
  profession,
  phoneNumber,
  address,
  availability,
  hourlyRate,
  aadharNumber,
  skills, }) => {

  return (
    <Modal>
      <div className="relative  flex flex-col  bg-gray-100 dark:bg-indigo-900 shadow-2xl w-[840px] h-[620px] rounded-2xl mx-auto  transition duration-300 ease-in mt-4 px-12 space-y-6">
        {/* Modal Close button */}
        <button
          onClick={handleDomesticHelperInfoModal}
          className="absolute top-2 right-2 w-8 h-8  bg-indigo-200 rounded-md dark:bg-indigo-500 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </button>

        <div className="flex flex-col space-y-4 py-4 pt-1 ">
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex items-center justify-center w-[120px] h-[120px] border-[7px] border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
              <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

            </div>
            <div className="flex flex-col items-center ">
              <p className="text-xl font-urbanist font-semibold text-indigo-500 bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-500 px-2 py-1 rounded-lg">
                {name}
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">
                ({profession})
              </p>
            </div>
          </div>
          <div className="flex  items-center space-x-6  w-full border-2 border-dashed rounded-lg py-3">

            <div className="flex flex-col   space-y-3  w-full   py-4 p-1">
              <div className="flex flex-col items-center space-y-3 " >
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Name </p>

                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {name}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Age </p>
                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {age} years
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Gender </p>
                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {gender}
                </p>
              </div>
            </div>

            <div className="flex flex-col   space-y-3  w-full   py-4  p-1 ">
              <div className="flex flex-col items-center space-y-3" >
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Phone Number </p>

                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {phoneNumber}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Address </p>
                <p className={` text-sm font-bold text-center font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {address}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Availability </p>
                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {availability}
                </p>
              </div>
            </div>

            <div className="flex  flex-col  space-y-3  w-full   py-4  p-1">
              <div className="flex flex-col items-center space-y-3" >
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Hourly Rate </p>

                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {hourlyRate}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Aadhar Number </p>
                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {aadharNumber}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Skills </p>
                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                  {skills}
                </p>
              </div>
            </div>

          </div>

        </div>

        

      </div>
    </Modal>
  );
};

export default DomesticHelperInfoModal;



