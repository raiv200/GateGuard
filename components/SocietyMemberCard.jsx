import React, { useState } from 'react';
import SocietyMemberInfoModal from './SocietyMemberInfoModal';
import SendNotificationModal from './SendNotificationModal';
import { DataStore } from 'aws-amplify';
import {NotificationListForUsers} from "../models";
import toast, { Toaster } from 'react-hot-toast';

const imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg";


const NOTIFICATION_LIST_FOR_USERS = [
  {

    id: 'n1',
    message: 'This is First message',
    imageURL: 'https://mygateguardstoragebucket164059-dev.s3.ap-south-1.amazonaws.com/public/Wallpaper+9.png',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n2',
    message: 'This is Second message',
    imageURL: 'https://mygateguardstoragebucket164059-dev.s3.ap-south-1.amazonaws.com/public/Wallpaper+9.png',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n3',
    message: 'This is Third message',
    imageURL: 'https://mygateguardstoragebucket164059-dev.s3.ap-south-1.amazonaws.com/public/Wallpaper+9.png',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n4',
    message: 'This is Fourth message',
    imageURL: 'https://mygateguardstoragebucket164059-dev.s3.ap-south-1.amazonaws.com/public/Wallpaper+9.png',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },


]


const SocietyMemberCard = ({
  index,
  memberId,
  name,
  emailId,
  imageURL,
  age,
  role,
  gender,
  phoneNumber,
  address,
  block,
  familyMember,
  handleRemoveSocietyMember,
}) => {

  const [notificationListForUsers, setNotificationListForUsers] = useState(NOTIFICATION_LIST_FOR_USERS);
  const [showSocietyMemberInfoModal, setShowSocietyMemberInfoModal] = useState(false);
  const [showSendNotificationModal, setShowSendNotificationModal] = useState(false);

  const handleSendNotificationModal = () => {
    setShowSendNotificationModal(!showSendNotificationModal)
  };

  const handleSocietyMemberInfoModal = () => {
    setShowSocietyMemberInfoModal(!showSocietyMemberInfoModal)
  };

  const handleSendNotification =async (visitorName, imageURL) => {
    console.log("Notification Sent Succesfully!!");

    const newNotification = {
      message: `${visitorName} is waiting at the Society Gate. Do you want ${visitorName} to let him in ?`,
      imageURL: imageURL,
      forUser:name,
      date: new Date().toISOString().substring(0, 10),
      time: new Date().toString().substring(16, 21),
    }
    console.log(newNotification);

    await DataStore.save(
      new NotificationListForUsers(newNotification)
    )

    toast.success('Notification Sent Successfull !!', {
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


    setShowSendNotificationModal(!showSendNotificationModal)
  }

  return (
    <div>

      <div className="flex  items-center space-x-16  px-6 py-10 bg-indigo-200 dark:bg-indigo-500/30 rounded-md w-full h-[80px] ring-2 ring-gray-500 dark:ring-gray-100">

        <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100 rounded-md bg-indigo-500/50 px-2">{index + 1}</p>
        <div className="flex items-center justify-between w-full ">

          <div className="flex items-center space-x-1">
            <div className="flex items-center justify-center w-[52px] h-[52px] border-4 border-indigo-500 rounded-full hover:border-indigo-400 transition-all duration-300 ease-in-out">
              <img src={imageURL} alt="User profile Pic" className="w-full h-full rounded-full object-cover" />

            </div>
            <p className="text-md font-urbanist font-bold text-center text-gray-800  dark:text-gray-100 w-[110px]">{name}</p>
          </div>
          <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">{phoneNumber}</p>
          <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">{emailId}</p>
          {/* <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">{role}</p> */}
          <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">{address}</p>
          {/* <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">Block-{block}</p> */}
          <button onClick={handleSocietyMemberInfoModal} className=" btn bg-indigo-600 px-3 py-2 text-sm rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
            View
          </button>
          <button onClick={handleSendNotificationModal} className=" btn bg-indigo-600 px-3 py-2 text-sm rounded-md text-white shadow-2xl  hover:shadow-xl hover:opacity-80">
            Send Notification
          </button>
        </div>
      </div>
      {showSocietyMemberInfoModal && (
        <SocietyMemberInfoModal
          handleSocietyMemberInfoModal={handleSocietyMemberInfoModal}
          memberId={memberId}
          name={name}
          emailId={emailId}
          imageURL={imageURL}
          age={age}
          role={role}
          gender={gender}
          phoneNumber={phoneNumber}
          address={address}
          block={block}
          familyMember={familyMember}
          handleRemoveSocietyMember={handleRemoveSocietyMember}
        />
      )}

      {showSendNotificationModal && (

        <SendNotificationModal
          handleSendNotificationModal={handleSendNotificationModal}
          handleSendNotification={handleSendNotification}
        />
      )}



    </div>
  )
}

export default SocietyMemberCard