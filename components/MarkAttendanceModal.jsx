import React, { useState } from "react";
import { XIcon, CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import Modal from "./Modal";

const MarkAttendanceModal = ({ name,imageURL,profession,phoneNumber, handleShowMarkAttendanceModal, handleMarkArrivalAttendance, handleMarkDepartureAttendance ,helperAttendanceList }) => {

    const [markAttendanceDate, setMarkAttendanceDate] = useState("");
    const [markAttendanceTime, setMarkAttendanceTime] = useState("");

    const handleMarkAttendanceDate = (e) => {
        setMarkAttendanceDate(e.target.value);
    };

    const handleMarkAttendanceTime = (e) => {
        setMarkAttendanceTime(e.target.value);
    };

    const handleSetUniqueId = () => {

        const list = helperAttendanceList.filter( item => item.name === name && item.date === markAttendanceDate);
         console.log("List",list)
        return list[0].id ;
    }

    return (
        <Modal>
            <div className="relative pt-6 flex flex-col  bg-gray-100 dark:bg-gray-800 shadow-2xl w-[450px] h-[320px] rounded-2xl mx-auto  transition duration-300 ease-in mt-10">
                {/* Modal Close button */}
                <button
                    onClick={handleShowMarkAttendanceModal}
                    className="absolute top-2 right-2 w-8 h-8  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
                >
                    <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
                </button>

                <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6 ">

                    {/* <div className="flex flex-col space-y-3">
            <div className=" flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                Old Password
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
              <LockClosedIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
              <input
                type="t"
                id="oldpassword"
                value={arrivalAttendance}
                onChange={handleArrivalAttendance}
                placeholder="Enter Old Password"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3 ">
            <div className="  flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                New Password
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
              <LockClosedIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
              <input
                type="newpassword"
                id="newpassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                placeholder="Enter New Password"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
              />
            </div>
          </div> */}

                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">

                            <div className="flex flex-col space-y-2">
                                <div className=" flex justify-between items-center">
                                    <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                                        Date
                                    </label>
                                </div>
                                <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                                    <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-indigo-400 transition duration-300 ease-in" />
                                    <input
                                        type="date"
                                        id="date"
                                        value={markAttendanceDate}
                                        onChange={handleMarkAttendanceDate}
                                        placeholder="Pick Date"
                                        className="pl-2 bg-transparent text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <div className=" flex justify-between items-center">
                                    <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                                        Time
                                    </label>
                                </div>
                                <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                                    <ClockIcon className="h-6 w-6 text-gray-500 dark:text-indigo-400 transition duration-300 ease-in" />
                                    <input
                                        type="time"
                                        id="time"
                                        min="06:00"
                                        max="21:00"
                                        value={markAttendanceTime}
                                        onChange={handleMarkAttendanceTime}
                                        placeholder="Pick Time"
                                        className="pl-2 bg-transparent text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                                    />
                                </div>
                            </div>

                        </div>





                    </div>
                    <button
                        onClick={() => handleMarkArrivalAttendance(name,imageURL,profession,phoneNumber,markAttendanceDate, markAttendanceTime,handleShowMarkAttendanceModal)}
                        type="submit"
                        className=" btn bg-indigo-600 px-4 py-2 text-white shadow-2xl  hover:shadow-xl hover:opacity-80 "
                    >
                        Mark Arrival Attendance
                    </button>
                    <button
                        onClick={() => handleMarkDepartureAttendance(name,markAttendanceDate, markAttendanceTime,handleShowMarkAttendanceModal,handleSetUniqueId)}
                        type="submit"
                        className=" btn bg-indigo-600 px-4 py-2 text-white shadow-2xl  hover:shadow-xl hover:opacity-80 "
                    >
                        Mark Departure Attendance
                    </button>

                </div>
            </div>
        </Modal>
    );
};

export default MarkAttendanceModal;
