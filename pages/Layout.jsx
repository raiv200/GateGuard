import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Auth } from "aws-amplify";
import Head from "next/head";
import Avatar from "../components/Avatar";
import ThemeChanger from "../components/ThemeChanger";
import DashboardNav from "../components/DashboardNav";
import BlockCard from "../components/BlockCard";
import { BellIcon } from "@heroicons/react/solid";
import NotificationCard from "../components/NotificationCard";
import DashboardHeader from "../components/DashboardHeader";
import toast, { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");

  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const { username, attributes } = user;

      setUser(username);
      setUserAuthData(attributes);

      console.log("Username: ", user);
      console.log("Attributes: ", attributes);
    };
    userAuth();
  }, []);

  /// USER AUTHENTICATION AND USER lOGOUT

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");

      toast.success('Signed Out Successfully !!', {
        duration: 3000,
        style: {
          border: '2px solid black',
          background: 'green',
          color: 'white',
          fontWeight: 'medium',
          fontSize: '16px',
          padding: '10px 20px',
        },
      });
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <div >
      <Head>
        <title>GateGuard.in</title>
        <link rel="icon" href="/gateguard-logo.svg" />
      </Head>
      {(userAuthData.email_verified === true) ? (
        <>
          <div className="flex  flex-col lg:grid lg:grid-cols-16">
            <div className="flex h-screen sticky top-0 flex-col lg:col-span-3 ">
              <DashboardNav handleLogout={handleLogout} />

            </div>
            <div className=" h-full lg:col-span-13 flex flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-indigo-100 dark:bg-indigo-700/20 ">
              
              <DashboardHeader username={user} />
              
                {children}
                        
            </div>
          </div>
        </>
      ) :
        <div className=' mx-auto mt-20 flex flex-col space-y-8 items-center justify-center'>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            You are not Autheticated. Please Login first.
          </p>
          <Link href="/login">
            <a

              className="w-40 text-center btn  bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80"
            >
              Login
            </a>
          </Link>
        </div>}
    </div>
  );
};

export default Layout;

//     const data = await DataStore.query(UserProfile, (c) =>
//       c.username("eq", username)
//     );

//     setUserInfo(data[0]);
