import React, { useState, useEffect } from 'react'
import Navbar from '../Components/DashboardPages/Navbar';
import { HiSparkles } from "react-icons/hi2";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import Card from '../Components/DashboardPages/Card';
import TempCardIamge from '../assets/images/TempImage.jpeg'
import { Modal } from 'antd';
import NewStory from '../Components/DashboardPages/AddNewStoryModel';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/ApiService';

const Home = () => {
  const Navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [modalOpen, setmodalOpen] = useState(false);

  const getuserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        Navigate('/login')
      }
    }
  }

  useEffect(() => {
    getuserInfo();
  }, [])

  const FisrtTwoCards = [
    {
      id: 1,
      icon: <BiSolidImageAdd className='text-5xl sm:text-6xl mb-4 text-blue-400' />,
      title: "Add New Memory",
      desc: "Upload photos, write a story, and keep the memory alive.",
      bottomButton: "Get started",
      buttonColor: "text-blue-400",
      onclick: () => setmodalOpen(true),
    },
    {
      id: 2,
      icon: <IoMdTime className='text-5xl sm:text-6xl mb-4 text-amber-300' />,
      title: "Your Timeline",
      desc: " Visualize your journey, from your first post to now.",
      bottomButton: "Explore now",
      buttonColor: "text-gray-500",
      onclick: () => Navigate('/Timeline')
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100'>
      {/* Navbar */}
      <div className='flex mb-14'>
        <Navbar userInfo={userInfo} />
      </div>

      {/* Welcome Heading */}
      <div className='mb-16 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 px-4'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold'>Welcome Back</h1>
        <HiSparkles className='text-2xl sm:text-3xl text-amber-400' />
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 px-4'>
        {FisrtTwoCards.map(card => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            bottomButton={card.bottomButton}
            buttonColor={card.buttonColor}
            onclick={card.onclick}
          />
        ))}

        {/* Featured Memory */}
        <div className='bg-white rounded-2xl shadow-md p-7 flex flex-col items-center'>
          <Link to='/FavouriteMemories'>
            <img
              src={TempCardIamge}
              className='mb-4 w-full h-36 object-cover rounded-md cursor-pointer'
              alt="Featured Memory"
            />
          </Link>
          <h1 className='mb-2 text-xl sm:text-2xl font-medium'>Featured Memory</h1>
          <p className='text-center text-sm sm:text-base'>
            We do not remember days, we remember moments.
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-xs sm:text-sm italic text-gray-700 px-4 mb-6">
        You are writing your story, one memory at a time.
      </p>

      {/* Modal */}
      <NewStory open={modalOpen} onClose={() => setmodalOpen(false)} />
    </div>
  )
}

export default Home;
