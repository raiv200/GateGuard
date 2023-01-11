import React, { useState } from "react";
import { XIcon,IdentificationIcon,AtSymbolIcon,PhotographIcon,UsersIcon,OfficeBuildingIcon,PhoneIcon, RefreshIcon,UserCircleIcon, UserGroupIcon ,HomeIcon} from "@heroicons/react/solid";
import Modal from "./Modal";

const AddDomesticHelperModal = ({ handleAddDomesticHelperModal, handleAddDomesticHelper }) => {

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [age,setAge] = useState("");
  const [profession,setProfession] = useState("");
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [hourlyRate,setHourlyRate] = useState("");
  const [aadharNumber,setAadharNumber] = useState("")
  const [skills,setSkills] =useState("");


  

  return (
    <Modal>
      <div className="relative  flex flex-col  bg-gray-100 dark:bg-gray-800 shadow-2xl w-[750px] h-[700px] rounded-2xl mx-auto  transition duration-300 ease-in mt-2 px-12 space-y-4">
        {/* Modal Close button */}
        <button
          onClick={handleAddDomesticHelperModal}
          className="absolute top-2 right-2 w-8 h-8  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </button>

        <div className="flex space-x-4 py-4 pt-6 ">


          <div className="flex flex-col space-y-6 flex-1 ">
            <div className="flex flex-col space-y-3">
              <div className=" flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Name
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <IdentificationIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


            

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Image URL
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <PhotographIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="imageURL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="Enter Image URL"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Age
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <RefreshIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter Age"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Profession
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <UserCircleIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="Enter Profession"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                 Skills
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <UserGroupIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="Enter Skills"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                 Aadhar Number
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <UserGroupIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="aadharNumber"
                  value={aadharNumber}
                  onChange={(e) => setAadharNumber(e.target.value)}
                  placeholder="Enter Aadhar Number"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
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
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <UsersIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Enter Gender"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>


            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Phone Number
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Address
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <HomeIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                  Availability
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <OfficeBuildingIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  placeholder="Enter Availability"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <div className="  flex justify-between items-center">
                <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                 Hourly Rate
                </label>
              </div>
              <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-violet-600 transition duration-300 ease-in">
                <UserGroupIcon className="h-6 w-6 text-gray-500 dark:text-violet-400 transition duration-300 ease-in" />
                <input
                  type="text"
                  id="hourlyRate"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  placeholder="Enter Hourly Rate"
                  className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                />
              </div>
            </div>

            

          </div>


        </div>

        <button
          onClick={() => handleAddDomesticHelper (name,imageURL, age,gender,profession,phoneNumber,address,availability,hourlyRate,aadharNumber,skills)}
          type="submit"
          className="w-full btn bg-violet-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80 "
        >
          Add New Member
        </button>
      </div>
    </Modal>
  );
};

export default AddDomesticHelperModal;
