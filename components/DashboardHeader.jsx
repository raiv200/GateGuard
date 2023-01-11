import React from "react";
import ThemeChanger from "./ThemeChanger";
import Avatar from "./Avatar"

const DashboardHeader = ({username , imageUrl}) => {
  return (
    <div className=" border-2 border-indigo-400 flex justify-between items-center px-4 h-[100px]   rounded-lg ">
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-urbanist"> Welcome Back ,
                  <span className="text-indigo-600 dark:text-indigo-400 pl-1">
                    @{username} {" "}
                  </span>
                </p>
                <div className="flex space-x-8 items-center  rounded-md p-2">
                  <ThemeChanger />
                  <Avatar username={username} />
                </div>
    </div>
    
  );
};

export default DashboardHeader;










// <div className="flex justify-between w-full h-20 bg-gray-200 dark:bg-gray-800/50  px-8  rounded-lg transition duration-300 ease-in border-violet-700 border-2">
      
//       {/* Username  */}
//      <div className="flex items-center jsutify-center">
//        <p className="flex items-center justify-center text-2xl font-semibold font-inter text-gray-900 dark:text-gray-100 ">
//          Welcome Back,
//          <span className=" ml-3 text-2xl font-inter font-bold text-violet-600 dark:text-violet-400 ">
//            @{username}
//          </span>
//        </p>
//      </div>
//      {/* User Profile & ThemeChanger  */}
//      <div className="flex items-center space-x-10">
//         <ThemeChanger />
//         <Avatar username={username}  />
//      </div>
//    </div>