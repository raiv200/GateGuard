import React, { useEffect, useState } from "react";

import BlockCard from "../components/BlockCard";
import { UserIcon, UsersIcon, UserGroupIcon } from "@heroicons/react/solid";
import NotificationCard from "../components/NotificationCard";
import DashboardHeader from "../components/DashboardHeader";
import Layout from "./Layout";
import DataCard from "../components/DataCard";
import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import { DataStore } from "aws-amplify";
import {AttendanceList,
  NotificationListForUsers,
  DomesticHelper,
  Visitor,
  SocietyMember} from '../models';

  import toast, { Toaster } from 'react-hot-toast';



const Dashboard = () => {

  /// USER AUTHENTICATION AND USER lOGOUT

   const [societyMemberList,setSocietyMemberList] =useState([]);
   const [visitorCardList,setVisitorCardList] =useState([]);
   const [domesticHelperList,setDomesticHelperList] =useState([]);

  useEffect (() => {

    const fetchSocietyMemberList = async () => {

      const allSocietyMember = await DataStore.query(SocietyMember);
      console.log(allSocietyMember);
      setSocietyMemberList(allSocietyMember);
    };
    
    const fetchVisitorCardList = async () => {

      const allVisitorCards = await DataStore.query(Visitor);
      console.log(allVisitorCards);
      setVisitorCardList(allVisitorCards);
    };

    const fetchDomesticHelperList = async () => {

      const allDomesticHelpers = await DataStore.query(DomesticHelper);
      console.log(allDomesticHelpers);
      setDomesticHelperList(allDomesticHelpers);
    };

    fetchDomesticHelperList();
    fetchSocietyMemberList();
    fetchVisitorCardList();


  },[])



  return (
    <div>
      <Layout>
        <div className="relative flex flex-col w-full gap-x-2 h-full border-2 border-dashed rounded-lg border-gray-900 dark:border-gray-100 p-1 ">

          <div className="flex ">
          <p className="text-4xl font-bold font-manrope text-gray-900 dark:text-gray-100 py-4 px-8 ">Sai Apartment  Society</p>
          </div>
          
          <div className="absolute top-4 right-4 flex flex-col  py-4 px-4 space-y-2 bg-indigo-200 dark:bg-indigo-500/30 rounded-lg w-[280px] ring-4 ring-gray-500 dark:ring-gray-100">

            <div className="flex space-x-3 items-center">
              <div className=" w-6 h-6 text-indigo-400 dark:text-indigo-500 ">
                <CalendarIcon />

              </div>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Todays' Date: {new Date().toISOString().substring(0, 10)}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-start items-center px-8 flex-1">
            <div className="  flex space-x-28 ">

              <DataCard data="Society Memeber's" length={societyMemberList?.length} icon={<UserGroupIcon />} />
              <DataCard data="Total Visitor Card" length={visitorCardList?.length} icon={<UsersIcon />} />
              <DataCard data="Total Domestic Helper" length={domesticHelperList?.length} icon={<UserIcon />} />

            </div>
          </div>



          <div className="w-full flex flex-col space-y-8  py-4">

            <p className="w-full text-4xl underline pl-6 font-urbanist font-bold text-gray-800  dark:text-gray-100 justify-center ">
              Society Block's List

            </p>
            <div className="grid grid-cols-6 place-items-center lg:col-span-12 py-10 ">


              <BlockCard block="A" />
              <BlockCard block="B" />
              <BlockCard block="C" />
              <BlockCard block="D" />
              <BlockCard block="E" />
              <BlockCard block="F" />
            </div>
          </div>

          {/* <div className="flex flex-col items-center lg:col-span-3 w-full border-2 border-blue-500 border-dashed px-3 py-2">
            <Link href="/notifications">
              <a className=" hover:bg-indigo-500/30 dark:hover:bg-indigo-600/30 w-full flex items-center justify-center  space-x-3  decoration-none cursor-pointer font-inter transition duartion-300 ease-in bg-indigo-500/10 dark:bg-indigo-600/20  rounded-lg  px-4 py-3 text-gray-800 font-semibold">
                <BellIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-400 dark:text-indigo-500 " />
                <p className="text-xl font-urbanist font-bold text-gray-800  dark:text-gray-100">
                  Notifications
                </p>
              </a>
            </Link>
            <div className="flex flex-col space-y-4 py-6 justify-center">
              {
                NOTIFICATION_LIST_FOR_GUARD.map(notification => (
                  <NotificationCard
                    key={notification.id}
                    message={notification.message}
                    date={notification.date}
                    time={notification.time}
                  />
                ))
              }
            </div>
          </div> */}

        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;

//     const data = await DataStore.query(UserProfile, (c) =>
//       c.username("eq", username)
//     );

//     setUserInfo(data[0]);


