import React, { useState } from 'react'
import { TrashIcon, UserIcon } from "@heroicons/react/solid";
import VerifyVisitorModal from './VerifyVisitorModal';

const imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg";

const VisitorCard = ({
    visitorId,
    visitorName,
    visitorPhoneNumber,
    visitorType,
    expectedDate,
    expectedTime,
    allowedBy,
    approvalStatus,
    verifyStatus,
    code,
    handleRemoveVisitorCard,
    handleVerifyVisitor
}) => {

    const [showVerifiyVisitorModal, setShowVerifiyVisitorModal] = useState(false);

    const handleVerifyVisitorModal = () => {
        setShowVerifiyVisitorModal(!showVerifiyVisitorModal)
    };

    


    

    return (
        <div className="relative flex flex-col items-center  bg-indigo-200 dark:bg-indigo-500/30 rounded-xl w-[400px] ring-4 ring-gray-500 dark:ring-gray-100 px-6 py-6 pb-4">

            <div className="absolute -top-3 left-4 px-2 rounded-md py-0.5 flex items-center justify-center font-manrope text-sm font-bold text-gray-800 dark:text-gray-100 bg-indigo-100 dark:bg-indigo-600">
                {visitorType}
            </div>

            <button
                onClick={() => handleRemoveVisitorCard(visitorId)}
                className="absolute  top-2 right-2 w-8 h-8  rounded-md flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
            >
                <TrashIcon className="w- h-6 text-gray-800 dark:text-gray-100" />
            </button>

            <div className=" flex flex-col space-y-4  w-full ">


                <div className="flex items-center  justify-center space-x-6 ">
                    <div className="flex items-center justify-center w-[75px] h-[75px] border-4 border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
                        <UserIcon className="w-10 h-10 text-gray-800 dark:text-gray-100" />

                    </div>

                    <div className="flex  flex-col space-y-1">
                        <div className='flex flex-col space-y-0.5'>
                            <p className="text-xl font-urbanist font-bold text-gray-800  dark:text-gray-100">{visitorName}</p>
                            <p className="text-xs font-urbanist font-bold text-gray-800  dark:text-gray-100">{visitorPhoneNumber}</p>
                        </div>

                        <div className='flex'>
                            <p className="text-xs font-urbanist font-extrabold text-gray-800  dark:text-gray-100 bg-indigo-100 dark:bg-indigo-500 uppercase rounded-md px-1.5 py-0.5">{approvalStatus}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-0.5 items-start ">

                    <p className="text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">Pre Approved by {allowedBy}</p>
                    <p className="text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">
                        {(visitorType === 'Guest' || visitorType === 'Friend') ? `Expected on ${expectedDate}` : `Valid till , ${expectedTime}`}
                    </p>
                    <div className="text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">
                        {(code !== null) && (
                            <p className="flex  text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">
                                Code:
                                <span className=" ml-2 bg-indigo-600 px-1 py-0.5 text-xs rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
                                    #{code}
                                </span>
                            </p>)}

                    </div>

                </div>

                <div className="flex items-end justify-between w-full">
                    <div className="flex flex-col space-y-0.5">
                        <p className="text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">Status:
                            <span className={`ml-1 mt-0.5 text-xs font-bold font-manrope rounded-md px-2 py-0.5 ${verifyStatus === 'Verified' ? 'text-green-100 bg-green-600' : 'text-rose-100 bg-rose-500'}`}>
                                {verifyStatus}
                            </span>
                        </p>
                        {/* <p className="text-sm font-urbanist font-bold text-gray-800  dark:text-gray-100">Created On: {new Date().toISOString().substring(0,10)},{new Date().toString().substring(16,21)}</p> */}
                    </div>

                    {
                        (verifyStatus !== 'Verified') && (<button onClick={handleVerifyVisitorModal} className=" btn bg-indigo-600 px-3 py-1 text-sm rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
                            Verify Visitor
                        </button>)

                    }
                </div>
            </div>

            {showVerifiyVisitorModal &&

                <VerifyVisitorModal
                visitorId={visitorId}
                    handleVerifyVisitorModal={handleVerifyVisitorModal}
                    handleVerifyVisitor={handleVerifyVisitor}
                />
            }

        </div>
    )
}

export default VisitorCard