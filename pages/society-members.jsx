import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import SocietyMemberCard from "../components/SocietyMemberCard";
import { PlusSmIcon } from "@heroicons/react/solid";
import AddMemberModal from '../components/AddMemberModal';
import { Auth, DataStore } from "aws-amplify";
import { SocietyMember } from "../models";
import toast, { Toaster } from 'react-hot-toast';


const SOCIETY_MEMBERS = [
  {
    memberId: "101",
    name: "Vikas Rai",
    emailId: "raiv2004322@gmail.com",
    imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
    age: "22",
    role: 'Member',
    gender: 'Male',
    phoneNumber: '9090909090',
    address: 'XYZ Block-B, New Delhi -110033',
    block: 'B',
    familyMembers: '4'

  },
  {
    memberId: "102",
    name: "Ashish Kumar Tyagi",
    emailId: "luv55333@gmail.com",
    imageURL: "https://reqres.in/img/faces/1-image.jpg",
    age: "22",
    role: 'Member',
    gender: 'Male',
    phoneNumber: '9090909090',
    address: 'XYZ Block-A, New Delhi -110033',
    block: 'A',
    familyMembers: '4'

  },
  {
    memberId: "103",
    name: "Shashwat Jha",
    emailId: "9643531785vr@gmail.com",
    imageURL: "https://reqres.in/img/faces/6-image.jpg",
    age: "22",
    role: 'Member',
    gender: 'Male',
    phoneNumber: '9090909090',
    address: 'XYZ Block-C, New Delhi -110033',
    block: 'C',
    familyMembers: '3'

  },

];

const NOTIFICATION_LIST_FOR_USERS = [
  {

    id: 'n1',
    message: 'This is First message',
    imageURL: '',
    forUser: 'Vikas Rai',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n2',
    message: 'This is Second message',
    imageURL: '',
    forUser: 'Ashish Kumar Tyagi',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n3',
    message: 'This is Third message',
    imageURL: '',
    forUser: 'Shashwat Jha',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },
  {

    id: 'n4',
    message: 'This is Fourth message',
    imageURL: '',
    forUser: 'Krishna Kumar',
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toString().substring(16, 21),

  },

]

const SocietyMembers = () => {

  const [societyMemberList, setSocietyMemberList] = useState([]);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [toggleRemove,setToggleRemove] = useState(false);
  // const [showMemberInfoModal, setShowMemberInfoModal] = useState(false);


  useEffect(() => {

    const fetchSocietyMembers = async () => {

      const societyMembers = await DataStore.query(SocietyMember);

      console.log(societyMembers);
      setSocietyMemberList(societyMembers);


    };

    fetchSocietyMembers()


  }, [showAddMemberModal,toggleRemove]);


  const handleAddMemberModal = () => {

    setShowAddMemberModal(!showAddMemberModal);
  }

  const handleAddSocietyMember = async (name, emailId, imageURL, age, role, gender, phoneNumber, address, block, familyMembers) => {
    console.log("Member Added!!");

    const newMember = {
      
      name: name,
      emailId: emailId,
      imageURL: imageURL,
      age: age,
      role: role,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      block: block,
      familyMember: familyMembers

    };
      
    await DataStore.save(
      new SocietyMember(newMember)
    );

    toast.success('Member Added !!', {
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
    

    console.log(newMember);
    setShowAddMemberModal(!showAddMemberModal);
  };

  const handleRemoveSocietyMember = async (memberId, handleSocietyMemberInfoModal) => {
    console.log("Member Removed !! ", memberId);

    const deleteMember = await DataStore.query(SocietyMember,memberId);
   
    DataStore.delete(deleteMember);

    // setSocietyMemberList(newMemberList);
    console.log(deleteMember);

    toast.success('Member Removed !!', {
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
    handleSocietyMemberInfoModal();
    setToggleRemove(!toggleRemove);
  };

  const signUp = async (username, email, password) => {

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }

    toast.success('SignUp Successfull !!', {
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

    console.log("SignUp Successfull !!");
  }

  // const handleGenerateEmailId = async (name, email, password) => {
  //   console.log("Email Id'd Generated !!!");
  //   const username = name.toLowerCase().replace(/\s/g, "");

  //   signUp(username, email, password);
  //   console.log(username, email, password);
  // };

  return (
    <Layout>
       <Toaster position="top-center" />
      <div className="flex items-center justify-between px-5 ">

        <p className="text-3xl font-bold font-manrope text-gray-900 dark:text-gray-100 py-4 ">Sai Apartment Society Member's</p>

        <div className='flex space-x-6'>


          <div onClick={handleAddMemberModal} className="flex items-center space-x-4  bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
            <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
              Add Member
            </p>
            <div className=" bg-indigo-500 rounded-md dark:bg-indigo-600 flex items-center justify-center ">
              <PlusSmIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-200 dark:text-indigo-200 " />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 w-full h-full  rounded-lg ">



        <div className=" flex flex-col col-span-12 space-y-5 w-full h-full b py-4 px-6">

          {/* <div className=" flex col-span-12 h-[30px]  bg-indigo-200 dark:bg-indigo-500/30 rounded-md ring-2 ring-gray-500 dark:ring-gray-100">
            <div className="flex w-full items-center  justify-between px-6">
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
               
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Name
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Phone No.
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Role
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Address
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Block
              </p>
              <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                Family Members
              </p>
            </div>
          </div> */}

          {societyMemberList.map((member, index) => (
            <SocietyMemberCard
              index={index}
              memberId={member.id}
              key={index}
              name={member.name}
              emailId={member.emailId}
              imageURL={member.imageURL}
              age={member.age}
              role={member.role}
              gender={member.gender}
              phoneNumber={member.phoneNumber}
              address={member.address}
              block={member.block}
              familyMember={member.familyMember}
              handleRemoveSocietyMember={handleRemoveSocietyMember}
              
            />

          ))}




        </div>
        {showAddMemberModal && (
          <AddMemberModal
            handleAddMemberModal={handleAddMemberModal}
            handleAddSocietyMember={handleAddSocietyMember}
          />
        )}
      </div>
    </Layout>
  )
}

export default SocietyMembers