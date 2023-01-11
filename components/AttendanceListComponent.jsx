import React from 'react'
import AttendanceListItem from './AttendanceListItem'



const AttendanceListComponent = ({ attendanceList }) => {

    // const today = new Date().toISOString().substring(0, 10);

    return (

        <div className="flex flex-col w-full h-full px-4 py-6 ">
            <div className="-m-1.5 overflow-x-auto  px-2 py-4">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        {

                            attendanceList?.length !== 0 ?


                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                                    <thead>
                                        <tr className='font-manrope font-extrabold'>
                                            <th scope="col" className="px-6 py-6 text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase ">S.No</th>
                                            <th scope="col" className="px-6 py-6 text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase ">Profile Image</th>
                                            <th scope="col" className="px-6 py-6 text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase">Name</th>
                                            <th scope="col" className="px-6 py-6 text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase">Profession</th>
                                            <th scope="col" className="px-6 py-6  text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase">Phone Number</th>
                                            <th scope="col" className="px-6 py-6  text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase">Date</th>
                                            <th scope="col" className="px-6 py-6  text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase">Arival Time</th>
                                            <th scope="col" className="px-6 py-6  text-xs  text-indigo-600 bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-100 text-center  uppercase ">Departure Time</th>
                                        </tr>
                                    </thead>

                                    <tbody className="">

                                        {
                                            attendanceList?.map((helperAttendance, index) => (
                                                <AttendanceListItem
                                                    key={helperAttendance.id}
                                                    index={index}
                                                    name={helperAttendance.name}
                                                    imageURL={helperAttendance.imageURL}
                                                    profession={helperAttendance.profession}
                                                    phoneNumber={helperAttendance.phoneNumber}
                                                    date={helperAttendance.date}
                                                    arrivalTime={helperAttendance.arrivalTime}
                                                    departureTime={helperAttendance.departureTime} />
                                            ))
                                        }


                                    </tbody>

                                </table>
                                : <p className="flex mx-auto justify-center mt-40 text-3xl font-semibold font-manrope text-gray-900 dark:text-gray-100 ">
                                    No Attendance List Found !!
                                </p>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AttendanceListComponent
