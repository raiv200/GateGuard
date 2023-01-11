import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import { PlusSmIcon, ClipboardListIcon, TableIcon, CalendarIcon } from "@heroicons/react/solid";
import DomesticHelperProfileCard from '../components/DomesticHelperProfileCard';
import AddDomesticHelperModal from '../components/AddDomesticHelperModal';
import AttendanceListComponent from '../components/AttendanceListComponent';
import { DataStore } from "aws-amplify";
import { DomesticHelper, AttendanceList } from '../models';
import toast, { Toaster } from 'react-hot-toast';


const imageURL = "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg";

const DOMESTIC_HELPERS = [
  {
    profileId: '101',
    name: "Vikas Rai",
    imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
    age: "22",
    gender: 'Male',
    profession: "Cook",
    phoneNumber: '9090909090',
    address: 'XYZ Block-B, New Delhi -110033',
    availability: 'Available',
    hourlyRate: 'Rs 200',
    aadharNumber: '1234-5678-1212',
    skills: 'Cooking, Cleaning'

  },
  {
    profileId: '102',
    name: "Vikas Rai",
    imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
    age: "22",
    gender: 'Male',
    profession: "Maid",
    phoneNumber: '9090909090',
    address: 'XYZ Block-B, New Delhi -110033',
    availability: 'Available',
    hourlyRate: 'Rs 300',
    aadharNumber: '1234-5678-1212',
    skills: 'Cooking, Cleaning, '

  },
  {
    profileId: '103',
    name: "Vikas Rai",
    imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
    age: "22",
    gender: 'Male',
    profession: "Baby Sitter",
    phoneNumber: '9090909090',
    address: 'XYZ Block-B, New Delhi -110033',
    availability: 'Available',
    hourlyRate: 'Rs 400',
    aadharNumber: '1234-5678-1212',
    skills: 'Cooking, Cleaning'

  },


];

const HELPER_ATTENDANCE_LIST = [

  {
    id: 'h1',
    date: '2023-01-09',
    attendanceList: [{
      id: 'p1',
      name: "Vikas Rai",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '7070707070',
      date: '2023-01-09',
      arrivalTime: '8:00 AM',
      departureTime: '2:00 PM'
    },
    {
      id: 'p2',
      name: "Ashish Kumar",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '8080808080',
      date: '2023-01-09',
      arrivalTime: '6:00 AM',
      departureTime: '3:00 PM'
    },
    {
      id: 'p3',
      name: "Shashwat Jha",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '9090909090',
      date: '2023-01-09',
      arrivalTime: '7:00 AM',
      departureTime: '1:00 PM'

    }],
  },

  {
    id: 'h2',
    date: '2023-01-08',
    attendanceList: [{
      id: 'p1',
      name: "Vikas Rai",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '7070707070',
      date: '2023-01-08',
      arrivalTime: '8:00 AM',
      departureTime: '2:00 PM'
    },
    {
      id: 'p2',
      name: "Ashish Kumar",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '8080808080',
      date: '2023-01-08',
      arrivalTime: '6:00 AM',
      departureTime: '3:00 PM'
    },
    {
      id: 'p3',
      name: "Shashwat Jha",
      imageURL: "https://pbs.twimg.com/profile_images/1526069743324925952/EoqUxfsh_400x400.jpg",
      profession: "Cook",
      phoneNumber: '9090909090',
      date: '2023-01-08',
      arrivalTime: '7:00 AM',
      departureTime: '1:00 PM'

    }],
  },


];




const DomesticHelperManagement = () => {

  const [domesticHelperList, setDomesticHelperList] = useState([]);
  const [helperAttendanceList, setHelperAttendanceList] = useState([]);
  const [dateWiseAttendanceList, setDateWiseAttendanceList] = useState();
  const [showAddDomesticHelperModal, setShowAddDomesticHelperModal] = useState(false);
  const [switchTab, setSwitchTab] = useState("CARD");
  const [selectedDate, setSelectedDate] = useState();
  const [attendanceListExist, setAttendanceListExist] = useState(false);
  const [toggleRefresh,setToggleRefresh]=useState(false);

  useEffect(() => {


    const fetchDomesticHelperList = async () => {

      const allDomesticHelper = await DataStore.query(DomesticHelper);
      console.log(allDomesticHelper);
      setDomesticHelperList(allDomesticHelper);
    };

    const fetchAttendanceList = async () => {
      const attendanceList = await DataStore.query(AttendanceList);
      console.log(attendanceList);
      setHelperAttendanceList(attendanceList);

    }

    const fetchTodayAttendanceList = () => {
      const today = new Date().toISOString().substring(0, 10);

      const list = helperAttendanceList.filter(item => item.date === today);

      if (list === undefined) {
        console.log("No Attendance list found !!");
        console.log(list);
        return;
      }

      setDateWiseAttendanceList(list);
    }




    fetchDomesticHelperList()
    fetchAttendanceList();
    fetchTodayAttendanceList();



  }, [switchTab,toggleRefresh]);



  const handleFindAttendanceList = () => {

    const list = helperAttendanceList.filter(item => item.date === selectedDate);

    if (list === undefined) {
      console.log("No Attendance list found !!");
      setDateWiseAttendanceList([]);
      return;
    }

    console.log(selectedDate);

    setDateWiseAttendanceList(list);
  }


  const handleAddDomesticHelperModal = () => {
    setShowAddDomesticHelperModal(!showAddDomesticHelperModal)
  };

  const handleSwitchTabToAttendance = () => {
    setSwitchTab("ATTENDANCE");
  };

  const handleSwitchTabToHelperCard = () => {
    setSwitchTab("CARD");
  };


  const handleRemoveHelperCard = async (helperId) => {
    console.log("Helper removed Successfully!!");
    const todelete = await DataStore.query(DomesticHelper,helperId);


    DataStore.delete(todelete);

    toast.success('Helper removed Successfully!!', {
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

    setToggleRefresh(!toggleRefresh);

    console.log(todelete);

  };


  // const checkAttendanceListExist = (markAttendanceDate) => {
  //   // const today = new Date().toISOString().substring(0, 10);

  //   const list = helperAttendanceList.find(item => item.date === markAttendanceDate);
  //   console.log("List", list)

  //   if (list === undefined) {
  //     console.log("No Attendance list found !!");

  //     helperAttendanceList.push({
  //       id: 'h3',
  //       date: markAttendanceDate,
  //       attendanceList: []
  //     });
  //     console.log("New List Created !!");

  //     setAttendanceListExist(true);
  //     return;

  //   }

  // }


  const handleMarkArrivalAttendance = async (name, imageURL, profession, phoneNumber, markAttendanceDate, markAttendanceTime, handleShowMarkAttendanceModal) => {
    console.log("Arrival Attendance Marked !!");

    // checkAttendanceListExist(markAttendanceDate);

        const newList = {
          name: name,
          imageURL: imageURL,
          profession: profession,
          phoneNumber: phoneNumber,
          date: markAttendanceDate,
          arrivalTime: markAttendanceTime,
          departureTime: '00:00',
        };

        await DataStore.save(
          new AttendanceList(newList)
        )

        console.log("New List", newList);

        toast.success('Arrival Attendance Marked !!', {
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

    handleShowMarkAttendanceModal();
  };

  const handleMarkDepartureAttendance = async (name, markAttendanceDate, markAttendanceTime, handleShowMarkAttendanceModal,handleSetUniqueId) => {
    
    console.log("Departure Attendance Marked !!");
    const id= handleSetUniqueId();
    console.log("Handleset Unique ID ",id);

    const original = await DataStore.query(AttendanceList,id)
    
    await DataStore.save(
      AttendanceList.copyOf(original, updated => {
        updated.departureTime = markAttendanceTime
      })
    );

    toast.success('Departure Attendance Marked !!', {
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

    handleShowMarkAttendanceModal();


  };




  const handleAddDomesticHelper = async  (name, imageURL, age, gender, profession, phoneNumber, address, availability, hourlyRate, aadharNumber, skills) => {
    console.log("New Helper Added!!");

    const newDomesticHelper = {
      name: name,
      imageURL: imageURL,
      age: age,
      gender: gender,
      profession: profession,
      phoneNumber: phoneNumber,
      address: address,
      availability: availability,
      hourlyRate: hourlyRate,
      aadharNumber: aadharNumber,
      skills: skills
    }
    console.log(newDomesticHelper);
    
    await DataStore.save(
      new DomesticHelper(newDomesticHelper)
    )

    toast.success('Helper Added Successfully !!', {
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

    setToggleRefresh(!toggleRefresh);

    setShowAddDomesticHelperModal(!showAddDomesticHelperModal)

  };




  return (
    <Layout>
       <Toaster position="top-center" />
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between px-3">

          <p className="text-3xl font-bold font-manrope text-gray-900 dark:text-gray-100 py-4 px-3">
            {switchTab === 'CARD' ? "Domestic Helper's Profile Card" : switchTab === 'ATTENDANCE' ? "Attendance List" : ' '}
          </p>
          <div className="flex  space-x-6 ">

            {switchTab === 'CARD' ? (<div onClick={handleSwitchTabToAttendance} className="flex items-center space-x-4  bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
              <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
                Attendance List
              </p>
              <div className=" bg-indigo-500 rounded-md dark:bg-indigo-600 flex items-center justify-center p-0.5 ">
                <ClipboardListIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-200 dark:text-indigo-200 " />
              </div>
            </div>) : switchTab === 'ATTENDANCE' ? (
            <div onClick={handleSwitchTabToHelperCard} className="flex items-center space-x-4  bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
              <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
                Helper's List
              </p>
              <div className=" bg-indigo-500 rounded-md dark:bg-indigo-600 flex items-center justify-center p-0.5 ">
                <TableIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-200 dark:text-indigo-200 " />
              </div>
            </div>
            ) : " "}



            <div onClick={handleAddDomesticHelperModal} className="flex items-center space-x-4  bg-indigo-300 dark:bg-indigo-500/30 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in">
              <p className="text-md text-gray-800 font-inter font-semibold dark:text-gray-100">
                New Helper
              </p>
              <div className=" bg-indigo-500 rounded-md dark:bg-indigo-600 flex items-center justify-center ">
                <PlusSmIcon className=" w-5 h-5 md:w-6 md:h-6 text-indigo-200 dark:text-indigo-200 " />
              </div>
            </div>
          </div>
        </div>

        {switchTab === 'CARD' ? (<div className="lg:grid lg:grid-cols-12 w-full   h-full rounded-lg p-1">
          <div className="grid grid-cols-3 justify-items-center gap-y-4 lg:col-span-12 w-full h-full  py-6">
            {domesticHelperList.map(helper => (
              <DomesticHelperProfileCard
                key={helper.id}
                profileId={helper.id}
                name={helper.name}
                imageURL={helper.imageURL}
                age={helper.age}
                gender={helper.gender}
                profession={helper.profession}
                phoneNumber={helper.phoneNumber}
                address={helper.address}
                availability={helper.availability}
                hourlyRate={helper.hourlyRate}
                aadharNumber={helper.aadharNumber}
                skills={helper.skills}
                handleRemoveHelperCard={handleRemoveHelperCard}
                handleMarkArrivalAttendance={handleMarkArrivalAttendance}
                handleMarkDepartureAttendance={handleMarkDepartureAttendance}
                helperAttendanceList={helperAttendanceList}
              />

            ))}
          </div>
        </div>) : switchTab === 'ATTENDANCE' ? (

          <div className="flex flex-col w-full h-full  rounded-lg p-1">


            <div className="flex items-center space-x-6 px-8 pt-3">
              <div className="flex space-x-4">
                <div className=" flex justify-between items-center">
                  <label className=" text-md font-inter font-semibold text-gray-900 dark:text-gray-100 transition duration-300 ease-in">
                    Date
                  </label>
                </div>
                <div className="flex border-[1px] border-gray-500 dark:border-[1px] dark:border-gray-600 px-2 py-2 rounded-lg hover:ring-1 hover:ring-indigo-600 transition duration-300 ease-in">
                  <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-indigo-400 transition duration-300 ease-in" />
                  <input
                    type="date"
                    id="date"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    placeholder="Pick Date"
                    className="pl-2 bg-transparent text-sm font-normal  text-gray-500 dark:text-gray-200 font-inter outline-none ml-2 w-full  transition duration-300 ease-in"
                  />
                </div>
              </div>
              <button
                onClick={handleFindAttendanceList}
                type="submit"
                className=" btn bg-indigo-600 px-4 py-2 text-white shadow-2xl  hover:shadow-xl hover:opacity-80 "
              >
                Show List
              </button>

            </div>


            <AttendanceListComponent attendanceList={dateWiseAttendanceList} />


          </div>
        ) : " "

        }



        {showAddDomesticHelperModal && (
          <AddDomesticHelperModal
            handleAddDomesticHelperModal={handleAddDomesticHelperModal}
            handleAddDomesticHelper={handleAddDomesticHelper}
          />
        )}
      </div>
    </Layout>
  )
}

export default DomesticHelperManagement


{/* <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td> */}


