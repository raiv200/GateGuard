import React, { useState } from "react";
import { XIcon,IdentificationIcon,AtSymbolIcon,PhotographIcon,UsersIcon,OfficeBuildingIcon,PhoneIcon, RefreshIcon,UserCircleIcon, UserGroupIcon ,HomeIcon} from "@heroicons/react/solid";
import Modal from "./Modal";

const AddMemberModal = ({ handleAddMemberModal, handleAddSocietyMember }) => {

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [age,setAge] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("");
  const [block,setBlock] = useState("")
  const [familyMembers,setFamilyMembers] = useState("")


  

  return (
    <Modal>
      <div className="relative  flex flex-col  bg-indigo-100 dark:bg-gray-800 shadow-2xl w-[750px] h-[660px] rounded-2xl mx-auto  transition duration-300 ease-in mt-2 pt-5 px-12 space-y-6">
        {/* Modal Close button */}
        <button
          onClick={handleAddMemberModal}
          className="absolute top-2 right-2 w-8 h-8  bg-indigo-300 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-indigo-200" />
        </button>

        <div className="flex space-x-4 py-4 pt-6 ">


          <div className="flex flex-col space-y-6 flex-1 ">
            <div className="flex flex-col space-y-3">
              <div className=" flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Name
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <IdentificationIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="pl-2 bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Email Id
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <AtSymbolIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="email"
                  id="emailId"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Enter Email Id"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Image URL
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <PhotographIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="imageURL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="Enter Image URL"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Age
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <RefreshIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter Age"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Role
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <UserCircleIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter Role"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


          </div>

          <div className="flex flex-col space-y-6 flex-1">
            <div className="flex flex-col space-y-3">
              <div className=" flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Gender
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <UsersIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Enter Gender"
                  className="pl-2 bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Phone Number
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <PhoneIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Address
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <HomeIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Block
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <OfficeBuildingIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="block"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                  placeholder="Enter Block"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Family Members
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                <UserGroupIcon className="h-6 w-6 text-indigo-400 dark:text-indigo-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="familyMembers"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(e.target.value)}
                  placeholder="Enter Family embers"
                  className="pl-2 bg-transparent text-sm font-semibold  text-gray-700 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


          </div>


        </div>

        <button
          onClick={() => handleAddSocietyMember(name, emailId,imageURL,age,role,gender,phoneNumber,address,block,familyMembers)}
          type="submit"
          className="w-full btn bg-indigo-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80 "
        >
          Add New Member
        </button>
      </div>
    </Modal>
  );
};

export default AddMemberModal;
