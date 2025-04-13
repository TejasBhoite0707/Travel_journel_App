import React, { useState } from 'react'
import Navbar from '../Components/DashboardPages/Navbar';
import { HiSparkles } from "react-icons/hi2";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import Card from '../Components/DashboardPages/Card';
import TempCardIamge from '../assets/images/TempImage.jpeg'
import { Modal } from 'antd';
import NewStory from '../Components/DashboardPages/AddNewStoryModel';
const Home = () => {
  const[modalOpen,setmodalOpen]=useState(false);
  const FisrtTwoCards=[
    {
        id: 1,
        icon:<BiSolidImageAdd className='text-6xl mb-4.5 text-blue-400 '/>,
        title:"Add New Memory",
        desc:"Upload photos, write a story, and keep the memory alive.",
        bottomButton:"Get started",
        buttonColor:"text-blue-400",
        onclick:()=>setmodalOpen(true),
    },
    {
        id:2,
        icon:<IoMdTime className='text-6xl mb-4.5 text-amber-300'/>,
        title:"Your Timeline",
        desc:" Visualize your journey, from your first post to now.",
        bottomButton:"Explore now",
        buttonColor:"text-gray-500"
        
    }
]
  return (
    <div className='min-h-screen   bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100'>
    <div className='flex mb-14'>
  <Navbar />
    </div>
    <div className='mb-16 flex flex-row items-center justify-center space-x-2'>
    <h1 className='text-center text-3xl font-bold '>Welcome Back</h1>
    <HiSparkles className='text-3xl text-amber-400'/>
    </div>
    
    <div className='grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-8'>
{FisrtTwoCards.map(card=>(
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
<div className='bg-white rounded-2xl shadow-md p-7 flex flex-col items-center'>
<img src={TempCardIamge} className='mb-4 w-2xl h-36 rounded-md cursor-pointer'/>
<h1 className='mb-2 text-2xl font-medium'>Featured Memory</h1>
<p className='text-center'>We do not remember days, we remember moments.</p>
</div>
</div>
<p className="text-center text-sm italic text-gray-700">
        You are writing your story, one memory at a time.
      </p>
      <NewStory open={modalOpen} onClose={()=>setmodalOpen(false)}/>
    </div>
  )
}

export default Home;
