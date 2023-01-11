import React from 'react';
import{ OfficeBuildingIcon} from "@heroicons/react/outline";

const BlockCard = ({block}) => {
  return (
    <div className="flex flex-col items-center space-y-8 py-10 bg-indigo-200 dark:bg-indigo-500/30 rounded-xl w-[140px] h-[160px] ring-4 ring-gray-500 dark:ring-gray-100">
        <div>
            <OfficeBuildingIcon className=" w-12 h-12 text-indigo-400 dark:text-indigo-500 " />
        </div>
        <p className='text-2xl font-urbanist font-bold text-gray-800  dark:text-gray-100'>Block - {block}</p>
    </div>
  )
}

export default BlockCard