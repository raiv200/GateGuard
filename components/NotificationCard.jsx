import { BellIcon } from '@heroicons/react/outline'
import React from 'react'

const NotificationCard = ({ message, date, time }) => {
  return (
    <div className=" flex flex-col space-y-3 pt-3 pb-1.5 px-3 bg-indigo-200 dark:bg-indigo-500/30 rounded-md w-[260px] ring-2 ring-gray-500 dark:ring-gray-100">
    
      <div className='flex items-center space-x-1.5'>
        <BellIcon className=" w-5 h-5 md:w-5 md:h-5 text-indigo-400 dark:text-indigo-500 " />
        <p className='text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100'>{message}</p>
      </div>
      <div className='flex items-center justify-between'>
      <p className=" text-xs font-urbanist font-semibold text-gray-800  dark:text-gray-100">{date}</p>
      <p className=' text-xs font-urbanist font-semibold text-gray-800  dark:text-gray-100'>{time}</p>
      </div>

    </div>
  )
}

export default NotificationCard