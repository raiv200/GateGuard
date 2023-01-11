import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import Modal from "./Modal";
import { UserIcon, PhotographIcon } from "@heroicons/react/outline";
import {Storage } from 'aws-amplify';

const SendNotificationModal = ({ handleSendNotificationModal, handleSendNotification }) => {
  const [imageUpload, setImageUpload] = useState();
  const [imageURL,setImageURL]= useState();
  const [visitorName, setVisitorName] = useState("");

  const handleImageUploadChange = async (e) => {
    console.log(e.target.files[0]);
    setImageUpload(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];

    try {
     const result= await Storage.put(file.name, file,{
      contentType: "image/png"
     });
     console.log(result.key.replace(/\s/g,''));
     const imageName = result.key.replace(/\s/g,'');

     const url = `https://mygateguardstoragebucket164059-dev.s3.ap-south-1.amazonaws.com/public/${imageName}`;
     setImageURL(url);
    
    } catch (error) {
      console.log("Error uploading file: ", error);
    }



  };

  const handleVisitorNameChange = (e) => {
    setVisitorName(e.target.value);
  };

  return (
    <Modal>
      <div className="relative pt-6 flex flex-col  bg-gray-100 dark:bg-gray-800 shadow-2xl w-[450px]  rounded-2xl mx-auto  transition duration-300 ease-in mt-10">
        {/* Modal Close button */}
        <button
          onClick={handleSendNotificationModal}
          className="absolute top-2 right-2 w-8 h-8  bg-gray-200 rounded-md dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all "
        >
          <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        </button>

        <div className="flex flex-col space-y-6 flex-1 px-12 py-4 pt-6 pb-8 ">
          <div className="flex flex-col space-y-3">
            <div className=" flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                Choose Image
              </label>
            </div>

            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-3 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
              <PhotographIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500 transition duration-300 ease-in" />
              <input
                type="file"
                id="imageUpload"
                accept="image/png, image/jpeg"

                onChange={handleImageUploadChange}
                placeholder="Upload Image"
                className="pl-2 bg-gray-100 dark:bg-gray-800 text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in  leading-6 file:mr-6 file:py-0.5 file:px-2  file:bg-indigo-200 dark:file:bg-indigo-600 file:font-semibold file:border-none file:rounded-md file:text-indigo-600 dark:file:text-indigo-100 hover:file:bg-opacity-80"
              />
            </div>
            {
              imageUpload &&
              <div className="flex justify-center">

                <img className="w-[250px] h-[130px] rounded-xl " src={imageUpload} />
              </div>
            }
          </div>

          <div className="flex flex-col space-y-3 ">
            <div className="  flex justify-between items-center">
              <label className=" text-xs font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                Visitor Name
              </label>
            </div>
            <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
              <UserIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500 transition duration-300 ease-in" />
              <input
                type="text"
                id="visitor"
                value={visitorName}
                onChange={handleVisitorNameChange}
                placeholder="Enter Visitor Name"
                className="pl-2 bg-gray-100 resize-none dark:bg-gray-800 text-sm font-normal g text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
              />
            </div>
          </div>

          <button
            onClick={() => handleSendNotification(visitorName, imageURL)}
            type="submit"
            className="w-full btn bg-indigo-600 px-5 py-3 text-white shadow-2xl  hover:shadow-xl hover:opacity-80"
          >
            Send Notification
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SendNotificationModal;
