import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {
  MailIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { useRouter } from 'next/router';
import { Auth } from "aws-amplify";
import ChangePasswordModal from '../components/ChangePasswordModal';
import toast, { Toaster } from 'react-hot-toast';

const Settings = () => {



  const router = useRouter();

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

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


  const handlePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const handleChangePassword = (oldPassword, newPassword) => {
    console.log("Password Changed");
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));


      toast.success('Password Changed Successfully!!', {
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

    setShowPasswordModal(!showPasswordModal);
  };




  return (
    <Layout>
       <Toaster position="top-center" />
      <div className="lg:grid lg:grid-cols-12 w-full gap-x-2 h-full rounded-lg p-1">




        <div className="h-full lg:col-span-12 flex  flex-col  px-3 space-y-2 transition duration-300 ease-in">



          <div className=" flex flex-col items-center z-10 h-[608px] w-full py-6 px-3 rounded-lg transition duration-300 ease-in">
            <h2 className="text-3xl font-semibold font-inter text-gray-800 dark:text-gray-100 transition duration-300 ease-in">
              Profile Settings
            </h2>
            <div className=" mx-auto h-full flex items-center justify-between py-4 px-4 my-8 ">
              <div className="pt-4 flex flex-col w-[450px] h-[520px] rounded-2xl  mx-auto  transition duration-300 ease-in">
                <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6 ">
                  {/* <div className="flex flex-col space-y-3">
                        <div className=" group flex justify-between items-center">
                          <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                            Display Name
                          </label>
                          <button
                            
                            className=" label bg-violet-200 dark:bg-violet-600 text-xs px-3 uppercase py-1 font-inter font-bold text-violet-600 dark:text-violet-200 shadow-md hover:shadow-2xl hover:opacity-80"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg dark:rounded-lg hover:ring-1 hover:ring-violet-600 dark:hover:ring-1 dark:hover:ring-violet-600  transition duration-300 ease-in">
                          <UserIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                          <input
                            type="text"
                            id="displayName"
                            
                            placeholder="John Doe"
                            className="pl-2 bg-gray-100 dark:bg-gray-900/70 text-sm font-normal  text-gray-500 dark:text-gray-100 font-inter outline-none ml-2 w-full transition duration-300 ease-in"
                          />
                        </div>
                      </div> */}

                  <div className="flex flex-col space-y-3">
                    <label className="text-xs font-inter font-semibold text-gray-900 dark:text-gray-100  transition duration-300 ease-in">
                      Your Email
                    </label>
                    <div className="group flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg  hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                      <MailIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 transition duration-300 ease-in" />
                      <input
                        type="email"
                        id="email"
                        value={userAuthData.email}
                        disabled={true}
                        placeholder="example@gmail.com"
                        className="pl-2 bg-indigo-100 dark:bg-transparent text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-500 font-inter focus:outline-none ml-2 w-full transition duration-300 ease-in"
                      />
                    </div>
                  </div>



                  <div className="flex flex-col space-y-3 ">
                    <div className=" group flex justify-between items-center">
                      <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                        Your Password
                      </label>
                      {/* <button
                        onClick={handlePasswordModal}
                        className=" label bg-violet-200 dark:bg-indigo-600 text-xs px-3 uppercase py-1 font-inter font-bold text-indigo-600 dark:text-violet-200 shadow-md hover:shadow-2xl hover:opacity-80"
                      >
                        Change Password
                      </button> */}
                    </div>
                    <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-700 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                      <LockClosedIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 transition duration-300 ease-in" />
                      <input
                        type="password"
                        id="password"
                        value="••••••••••••••••••••••••••"
                        disabled={true}
                        placeholder="Minimun 8 Characters"
                        className="pl-2 bg-indigo-100 dark:bg-transparent text-sm font-normal group-hover:cursor-not-allowed text-gray-500 dark:text-gray-600 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handlePasswordModal}
                    type="submit"
                    className="w-full btn bg-indigo-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>


        {showPasswordModal && (
          <ChangePasswordModal
            handlePasswordModal={handlePasswordModal}
            handleChangePassword={handleChangePassword}
          />
        )}


      </div>

    </Layout>
  )
}

export default Settings