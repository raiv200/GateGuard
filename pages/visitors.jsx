import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import VisitorCard from '../components/VisitorCard';
import { Auth, DataStore } from 'aws-amplify';
import { Visitor } from "../models";
import { SearchIcon, UsersIcon } from "@heroicons/react/outline";
import toast, { Toaster } from 'react-hot-toast';


const VISITOR_LIST = [
  {
    id: 'v1',
    visitorName: 'Jhon Doe',
    visitorType: 'Guest',
    expectedDate: '2022-12-30',
    expectedTime: '11:00 AM',
    allowedBy: 'Vikas Rai',
    memberPhoneNumber: '+91 9643531785',
    approvalStatus: 'Invited',
    verifyStatus: 'Not Verified',
    code: '521342',
  },
  {
    id: 'v2',
    visitorName: 'Ashish kumar',
    visitorPhoneNumber: '+91 9870188762',
    visitorType: 'Friend',
    expectedDate: '2022-12-30',
    expectedTime: '3:00 PM',
    allowedBy: 'Vikas Rai',
    memberPhoneNumber: '+91 9643531785',
    approvalStatus: 'Invited',
    verifyStatus: 'Not Verified',
    code: '542166',
  },
  {
    id: 'v3',
    visitorName: 'Amazon Delivery',
    visitorPhoneNumber: null,
    visitorType: 'Delivery',
    expectedDate: '2022-12-30',
    expectedTime: '10:00 PM',
    allowedBy: 'Vikas Rai',
    approvalStatus: 'Pre-Approved',
    verifyStatus: 'Verified',
    code: null,
  },
  {
    id: 'v4',
    visitorName: 'Sachin Kumar',
    visitorPhoneNumber: '+91 9870188762',
    visitorType: 'Daily Helper',
    expectedDate: '2022-12-30',
    expectedTime: '4:00 PM',
    allowedBy: 'Vikas Rai',
    approvalStatus: 'Pre-Approved',
    verifyStatus: 'Verified',
    code: null,
  },
  {
    id: 'v5',
    visitorName: ' Ola Cab',
    visitorPhoneNumber: '+91 9870188762',
    visitorType: 'Cab Driver',
    expectedDate: '2022-12-30',
    expectedTime: '11:00 AM',
    allowedBy: 'Vikas Rai',
    approvalStatus: 'Pre-Approved',
    verifyStatus: 'Verified',
    code: null,
  },
]



const Visitors = () => {

  const [visitorList, setVisitorList] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [searchText, setSearchText] = useState();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [newVisitorList, setNewVisitorList] = useState([]);

  useEffect(() => {

    const fetchVisitorList = async () => {

      const allVisitors = await DataStore.query(Visitor);
      console.log(allVisitors);
      setVisitorList(allVisitors);
    };

    fetchVisitorList();

  }, [toggleRefresh]);


  const handleRemoveVisitorCard = async (visitorId) => {
    console.log("Visitor Card Removed !!");

    const todelete = await DataStore.query(Visitor, visitorId);


    DataStore.delete(todelete);
    setToggleRefresh(!toggleRefresh)

    console.log("TO Delete", todelete);

  };

  const handleVerifyVisitor = async (visitorId,verificationCode,handleVerifyVisitorModal) => {
    if (!verificationCode) {
      alert("Please Provide Verification Code");
      return;
    }

     const original = await DataStore.query(Visitor,visitorId);
    
      if(verificationCode === original.code){
        
        toast.success('User Verified Successfully !!', {
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

        await DataStore.save(
          Visitor.copyOf(original, updated => {
            updated.verifyStatus = 'Verified'
          })

          
        );
        
      }else{
        toast.error('Code Is Not Valid !!', {
          duration: 3000,
          style: {
            border: '2px solid black',
            background: 'red',
            color: 'white',
            fontWeight: 'medium',
            fontSize: '16px',
            padding: '10px 20px',
          },
        });
      }
      setToggleRefresh(!toggleRefresh);
    console.log("Verification Code is : ", verificationCode);
    handleVerifyVisitorModal();

  };

  const handleSearchVisitor = () => {
    console.log(searchText);
    const name = searchText.replace(/\s/g, '').toLowerCase();
    console.log("After Space Removel", name);

    const newList = visitorList?.filter(visitor => visitor?.visitorName.replace(/\s/g, '').toLowerCase().includes(name));

    console.log(newList);
    setNewVisitorList(newList)


    setShowSearchResults(true);
    setSearchText("");
  };

  const handleShowVisitor = () => {
    setShowSearchResults(false);
  };


  return (
    <Layout>
      <Toaster position="top-center" />
      <div className="lg:grid lg:grid-cols-12 w-full gap-x-2 h-full rounded-lg  p-1 ">
        <div className='flex items-center  lg:col-span-12 h-20 px-8 '>
          
          <div className=" w-full align-items mx-auto mt-4 flex max-w-sm justify-between space-x-2 rounded-lg bg-indigo-300 p-1.5 transition duration-300 ease-in dark:bg-[#2b365e] md:max-w-3xl">
            <SearchIcon className="mt-2.5 ml-2 h-6 w-6 text-gray-900 dark:text-gray-100" />
            <input
              name="search"
              value={searchText}
              placeholder="Search Visitor ....."
              className="text-md mt-1 w-[400px] rounded-md bg-indigo-300 px-2 py-2 font-manrope leading-6 text-slate-900 placeholder-gray-900  transition  duration-300 ease-in focus:outline-none dark:bg-[#2b365e] dark:text-gray-50 dark:placeholder-gray-100"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearchVisitor}
              className=" text-md mx-auto h-10 rounded-md  px-4 font-manrope font-medium  shadow-xl transition duration-300 ease-in bg-indigo-200 dark:bg-indigo-500/30 text-gray-800 dark:text-gray-100 "
            >
              Search
            </button>
          </div>
         
         <div onClick={handleShowVisitor} className="flex items-center  space-x-4 h-12 mt-2 bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
            <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
              Visitor's List
            </p>
            <div className=" bg-indigo-500 rounded-md dark:bg-indigo-600 flex items-center justify-center p-0.5 ">
              <UsersIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-200 dark:text-indigo-200 " />
            </div>
          </div>
        </div>



        {
          showSearchResults ?

            <div className="grid grid-cols-2 place-items-center gap-10 lg:col-span-12 w-full h-full">
              {newVisitorList?.map(visitor => (
                <VisitorCard
                  key={visitor.id}
                  visitorId={visitor.id}
                  visitorName={visitor.visitorName}
                  visitorPhoneNumber={visitor.visitorPhoneNumber}
                  visitorType={visitor.visitorType}
                  expectedDate={visitor.expectedDate}
                  expectedTime={visitor.expectedTime}
                  allowedBy={visitor.allowedBy}
                  approvalStatus={visitor.approvalStatus}
                  verifyStatus={visitor.verifyStatus}
                  code={visitor.code}
                  handleRemoveVisitorCard={handleRemoveVisitorCard}
                  handleVerifyVisitor={handleVerifyVisitor}
                />
              ))}


            </div> :

            <div className="grid grid-cols-2 place-items-center gap-10 lg:col-span-12 w-full h-full py-10">
              {visitorList.map(visitor => (
                <VisitorCard
                  key={visitor.id}
                  visitorId={visitor.id}
                  visitorName={visitor.visitorName}
                  visitorPhoneNumber={visitor.visitorPhoneNumber}
                  visitorType={visitor.visitorType}
                  expectedDate={visitor.expectedDate}
                  expectedTime={visitor.expectedTime}
                  allowedBy={visitor.allowedBy}
                  approvalStatus={visitor.approvalStatus}
                  verifyStatus={visitor.verifyStatus}
                  code={visitor.code}
                  handleRemoveVisitorCard={handleRemoveVisitorCard}
                  handleVerifyVisitor={handleVerifyVisitor}
                />
              ))}
            </div>
        }

      </div>
    </Layout>
  )
}

export default Visitors