import React from 'react'
import { motion } from 'framer-motion'
import FavouriteMemoryCard from './FavMemCard'
import { useState } from 'react'
import axiosInstance from '../../utils/ApiService'
import { useEffect } from 'react'
import { Empty, Spin } from 'antd'

const FavouriteMemoriesTravel = () => {
   const [favouriteMemories, setFavouriteMemories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const favouriteMemorie=[]
  const FetchFavouriteMemories=async()=>{
   

    try {
      const response=await axiosInstance.get('/api/get-all-stories');
      setFavouriteMemories(response.data.stories)
      console.log(response.data);
      
    } catch (err) {
      console.error(err);
    } finally{
setLoading(false)
    }

  }
useEffect(()=>{
FetchFavouriteMemories()
},[])
  
if(loading) return <Spin tip="Loading travel stories..."></Spin>

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100 px-6 py-12 flex flex-col items-center">

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800 mb-4 text-center drop-shadow-lg"
      >
        Favourite Memories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg text-gray-700 mb-12 text-center max-w-2xl"
      >
        Some of the most cherished moments from my journeys — full of stories,
        smiles, and sunsets.
      </motion.p>

      {/* Animated Grid of Cards */}
   {!favouriteMemories.length ? <Empty  description="No memories yet!" />:(
<motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[...favouriteMemories].filter(memory=>memory.isFavourite)
        .sort((a,b)=>new Date(b.visitedDate)-new Date(a.visitedDate))
        .map((memory, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <FavouriteMemoryCard
              title={memory.title}
              story={memory.story}
              visitedLocation={memory.visitedLocation}
              imageUrl={memory.imageUrl}
              visitedDate={memory.visitedDate}
            />
          </motion.div>
        ))}
      </motion.div>
   )}
      

    </div>
  )
}

export default FavouriteMemoriesTravel
