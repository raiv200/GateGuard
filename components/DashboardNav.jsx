import React from "react";;
import Logo from "./Logo";
import { LogoutIcon, CreditCardIcon, ClipboardListIcon, UserIcon ,TruckIcon,CubeIcon, HomeIcon,UserGroupIcon,CogIcon} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const routes= ['Dashboard','Society Members','Visitors','Delivery','Daily Helper','Settings'];

const DashboardNav = ({ handleLogout }) => {

   const router = useRouter();

  return (
    <header className=" flex h-full flex-col py-4 space-y-6 transition duration-300 ease-in bg-indigo-200 dark:bg-indigo-500/30">
      <div className="flex items-center ml-6 pt-1">
        {/* Logo */}
        <Logo size='M' />
      </div>
      <div className="flex  justify-center  flex-1">
        {/* <ThemeChanger /> */}
        <div className="flex px-2 py-6 w-full">
          <ul className="flex flex-col items-start list-none space-y-4">
            <Link href="/dashboard">
              <a className={` hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/dashboard' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <CreditCardIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                  Dashboard
                </li>
              </a>
            </Link>
            <Link href="/society-members">
              <a className={` hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/society-members' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <UserGroupIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800 dark:text-gray-100">
                  Society Members
                </li>
              </a>
            </Link>
            <Link href="/visitors">
              <a className={` hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/visitors' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <UserIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                  Visitor Management
                </li>
              </a>
            </Link>
            {/* <Link href="/delivery">
              <a className={` hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/delivery' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <CubeIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                  Delivery Management
                </li>
              </a>
            </Link> */}

            <Link href="/domestic-helper">
              <a className={` hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/daily-helper' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <HomeIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                  Domestic Help Management
                </li>
              </a>
            </Link>

            <Link href="/settings">
              <a className={`hover:bg-indigo-500/20 dark:hover:bg-indigo-700/50 w-full flex items-center space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-md  px-4 py-3 text-gray-800 font-semibold ${router.pathname === '/settings' ? 'bg-indigo-500/30 dark:bg-indigo-500/50 ' : ''}`}>
                <CogIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-500 dark:text-indigo-200 " />
                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                 Settings
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>

      {/* <Avatar username={username} /> */}
      <div className="flex px-6">

        <button
          onClick={handleLogout}
          type="submit"
          className="w-full btn bg-indigo-600 px-5 py-3 text-white  hover:shadow-2xl hover:opacity-80 "
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNav;
