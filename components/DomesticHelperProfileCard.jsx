import React, { useState } from 'react';
import Avatar from './Avatar';
import DomesticHelperInfoModal from './DomesticHelperInfoModal';
import MarkAttendanceModal from './MarkAttendanceModal';
import { TrashIcon } from '@heroicons/react/solid';


// const imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg";

const DomesticHelperProfileCard = ({
    helperId,
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
    skills,
    handleRemoveHelperCard,
    handleMarkArrivalAttendance,
    handleMarkDepartureAttendance,
    helperAttendanceList

}) => {

    const [showDomesticHelperInfoModal, setShowDomesticHelperInfoModal] = useState(false);
    const [showMarkAttendanceModal, setShowMarkAttendanceModal] = useState(false);
    

    const handleDomesticHelperInfoModal = () => {
        setShowDomesticHelperInfoModal(!showDomesticHelperInfoModal)
    };

    const handleShowMarkAttendanceModal = () => {
        setShowMarkAttendanceModal(!showMarkAttendanceModal)
    };

   


    return (
        <>
            <div className="relative flex flex-col items-center  bg-indigo-300 dark:bg-indigo-500/30 rounded-xl w-[360px] h-[250px] ring-4 ring-gray-500 dark:ring-gray-100 px-6 pt-2 pb-5">

                
            <button
                onClick={() => handleRemoveHelperCard(helperId)}
                className="absolute  top-2 right-2 w-8 h-8  rounded-md flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
            >
                <TrashIcon className="w- h-6 text-gray-800 dark:text-gray-100" />
            </button>
                <div className=" flex flex-col space-y-4  w-full  ">


                    <div className="flex items-center justify-center  space-x-8">
                        <div className="flex items-center justify-center w-[95px] h-[95px] border-4 border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
                            <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

                        </div>


                        <div className="flex flex-col ">
                            <div className="flex">
                                <p className="text-2xl font-urbanist font-bold text-gray-800  dark:text-gray-100">{name}</p>
                            </div>
                            <div className="flex ">
                                <p className="text-sm font-urbanist font-bold text-gray-800 text-center dark:text-gray-100 bg-indigo-100 dark:bg-indigo-500 uppercase rounded-md px-3 py-0.5">{profession}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  items-start ">

                        <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                            Age: {age} years
                        </p>
                        <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                            Gender: {gender}
                        </p>
                        <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                            PhoneNo.: {phoneNumber}
                        </p>

                    </div>

                    <div className="flex items-end justify-between w-full">
                        <button onClick={handleDomesticHelperInfoModal} className=" btn bg-indigo-600 px-3 py-1 text-sm rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
                            View
                        </button>

                        <button onClick={handleShowMarkAttendanceModal} className=" btn bg-indigo-600 px-3 py-1 text-sm rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
                            Mark Attendance
                        </button>
                    </div>
                </div>



            </div>


            {showDomesticHelperInfoModal && (
                <DomesticHelperInfoModal
                    handleDomesticHelperInfoModal={handleDomesticHelperInfoModal}
                    name={name}
                    imageURL={imageURL}
                    age={age}
                    gender={gender}
                    profession={profession}
                    phoneNumber={phoneNumber}
                    address={address}
                    availability={availability}
                    hourlyRate={hourlyRate}
                    aadharNumber={aadharNumber}
                    skills={skills}

                />
            )}

            {showMarkAttendanceModal && (
                <MarkAttendanceModal
                name={name}
                imageURL={imageURL}
                profession={profession}
                phoneNumber={phoneNumber}
                handleShowMarkAttendanceModal={handleShowMarkAttendanceModal}
                handleMarkArrivalAttendance={handleMarkArrivalAttendance}
                handleMarkDepartureAttendance={handleMarkDepartureAttendance}
                helperAttendanceList={helperAttendanceList}

                />
            )}

        </>
    )
}

export default DomesticHelperProfileCard


{/* <div onClick={handleDomesticHelperInfoModal} className="flex flex-col items-center justify-evenly  py-2 bg-indigo-200 dark:bg-indigo-500/30 rounded-xl w-[250px] h-[300px] ring-4 ring-gray-500 dark:ring-gray-100">
                <div className="flex flex-col space-y-2 items-center">
                    <div className="flex items-center justify-center w-[100px] h-[100px] border-4 border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
                        <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

                    </div>
                    <div className="flex flex-col items-center ">
                        <p className="text-lg font-urbanist font-bold text-gray-800  dark:text-gray-100">
                            {name}
                        </p>
                        <p className="text-xs font-urbanist font-bold text-gray-800  dark:text-gray-100">
                            ({profession})
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-1">

                    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                        Age: {age} years
                    </p>
                    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                        Gender: {gender}
                    </p>
                    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                        PhoneNo.: {phoneNumber}
                    </p>
                </div>
            </div> */}