import React from 'react'
import bgImage from '../assets/images/bg-image-MainPage.jpg'
import { Link } from 'react-router-dom'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { motion } from 'framer-motion'
const MainPage = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col bg-no-repeat bg-center justify-center ' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: '100% 100%' }}>
                <motion.div className='flex flex-row md:flex-col items-center text-center justify-center text-white px-6 py-16 '
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <motion.h1 className='font-semibold text-6xl mt-9 drop-shadow-xl'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >Capture. Relive. Share.</motion.h1>
                    <motion.p className='text-xl mt-20 text-center text-gray-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        A place where your journeys come alive through stories, photos, and shared moments — capturing every emotion, every milestone, and turning memories into timeless treasures you can revisit and share with the world.
                    </motion.p>
                    <motion.div className='flex flex-row space-x-5 items-center mt-14'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Link to='/signup'><button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition cursor-pointer">
                            Get Started
                        </button></Link>
                        <p className='text-white'>Already have an account?<Link to='/login'><span className='text-white ml-2 hover:underline'>Log in</span></Link></p>
                    </motion.div>
                    <motion.div className='flex flex-row space-x-20 items-center text-white mt-16'
                        initial='hidden'
                        animate='visible'
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {
                            [{
                                icon: <MdOutlineTravelExplore className='text-5xl' />,
                                text: 'Explore The Timeline Visually',
                            },
                            {
                                icon: <IoMdPhotos className='text-5xl' />,
                                text: 'Upload and Relive the Memories',
                            },
                            {
                                icon: <AiTwotoneSafetyCertificate className='text-5xl' />,
                                text: 'Safe And Private Travel Diary',
                            },].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className='flex flex-row items-center  hover:scale-105 transition'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 + i * 0.2 }}
                                >
                                    {item.icon}
                                    <p className='text-base mt-2 w-40'>{item.text}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
                <motion.p
                    className='text-center italic text-[#F7EFE5] text-lg mb-10'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    I love how I can scroll my college days and revisit the best moments.
                </motion.p>
            </div>

        </>
    )
}

export default MainPage;
