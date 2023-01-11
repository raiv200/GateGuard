import React, { useState } from "react";
import { XIcon, TrashIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const SocietyMemberInfoModal = ({
    handleSocietyMemberInfoModal,
    memberId,
    name,
    emailId,
    imageURL,
    age,
    role,
    gender,
    phoneNumber,
    address,
    block,
    familyMember,
    handleRemoveSocietyMember,
}) => {

    return (
        <Modal>
            <div className="relative  flex flex-col  bg-gray-100 dark:bg-indigo-900 shadow-2xl w-[880px] h-[640px] rounded-2xl mx-auto  transition duration-300 ease-in mt-4 px-12 space-y-6">
                {/* Modal Close button */}
                <button
                    onClick={handleSocietyMemberInfoModal}
                    className="absolute top-2 right-2 w-8 h-8  bg-indigo-200 rounded-md dark:bg-indigo-500 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
                >
                    <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
                </button>
                <button
                    onClick={() => handleRemoveSocietyMember(memberId,handleSocietyMemberInfoModal)}
                    className="absolute bottom-3 right-3 px-4 py-1.5 font-semibold font-manrope  bg-indigo-200 rounded-md dark:bg-indigo-500 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
                >
                    <TrashIcon className="w-5 h-5 mr-1 text-gray-800 dark:text-gray-100" />
                    Remove Member
                </button>
                {/* <div  onClick={() => handleGenerateEmailId(name,emailId,'test1234')} className=" absolute bottom-2 right-3 flex items-center space-x-4  bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
                    <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
                        Generate Email ID's
                    </p>
                </div> */}

                <div className="flex flex-col space-y-4 py-4 pt-1 ">
                    <div className="flex flex-col space-y-4 items-center">
                        <div className="flex items-center justify-center w-[120px] h-[120px] border-[7px] border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
                            <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

                        </div>
                        <div className="flex flex-col items-center  space-y-1.5">
                            <p className="text-xl font-urbanist font-semibold text-indigo-500 bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-500 px-2 py-1 rounded-lg">
                                {name}
                            </p>
                            <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">
                                ({role})
                            </p>
                        </div>
                    </div>
                    <div className="flex  items-center space-x-6  w-full border-2 border-dashed rounded-lg py-4">

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
                                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Block </p>
                                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                                    Block-{block}
                                </p>
                            </div>
                        </div>

                        <div className="flex  flex-col  space-y-3  w-full   py-4  p-1">
                            <div className="flex flex-col items-center space-y-3" >
                                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Email Id</p>

                                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                                    {emailId}
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Total Family Members</p>
                                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                                    {familyMember}
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-indigo-100">Role </p>
                                <p className={` text-sm font-bold font-manrope rounded-md px-2 py-1 text-indigo-100 bg-indigo-500`}>
                                    {role}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </Modal>
    );
};

export default SocietyMemberInfoModal;



