import React from 'react'


const AttendanceListItem = ({ index, name, imageURL, profession, phoneNumber, date, arrivalTime, departureTime }) => {
    return (
        <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 text-center font-manrope font-semibold">
            <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{index + 1}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex justify-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] border-[3px] border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
                    <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

                </div>
            </td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{name}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{profession}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{phoneNumber}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{date}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{arrivalTime}</td>
            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{departureTime}</td>
        </tr>
    )
}

export default AttendanceListItem



{/* <div className="flex  items-center space-x-16  px-6 py-10 bg-indigo-200 dark:bg-indigo-500/30 rounded-md w-full h-[80px] ring-2 ring-gray-500 dark:ring-gray-100">

<p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100 rounded-md bg-indigo-500/50 px-2">1</p>
<div className="flex items-center justify-between w-full ">

    <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-[52px] h-[52px] border-4 border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
            <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

        </div>
        <p className="text-md font-urbanist font-bold text-center text-gray-800  dark:text-gray-100 w-[110px]">Vikas Rai</p>
    </div>

    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">9898989898</p>
    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">Cook</p>
    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">29-12-2022</p>
    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">8:00 AM</p>
    <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">2:00 PM</p>


</div>
</div> */}