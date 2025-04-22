import React from 'react'
import { motion } from 'framer-motion'
import FavouriteMemoryCard from './FavMemCard'

const FavouriteMemoriesTravel = () => {
  const memories = [
    {
      title: 'Travelling in Mountains',
      story:
        'A peaceful journey through the Himalayas with friends. From misty mornings to starry nights, the experience was magical.',
      visitedLocations: 'Manali, Himachal Pradesh ',
      imageUrl:
        'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
      visitedDate: '2024-06-15',
    },
    {
      title: 'Sunset at the Beach',
      story:
        'Captured the golden sunset on a solo trip. The waves, breeze, and calm made it unforgettable.',
      visitedLocations: 'Goa, India',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
      visitedDate: '2023-12-10',
    },
    {
      title: 'Travelling in Mountains',
      story:
        'A peaceful journey through the Himalayas with friends. From misty mornings to starry nights, the experience was magical.',
      visitedLocations: 'Manali, Himachal Pradesh ',
      imageUrl:
        'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
      visitedDate: '2024-06-15',
    },
    {
      title: 'Sunset at the Beach',
      story:
        'Captured the golden sunset on a solo trip. The waves, breeze, and calm made it unforgettable.',
      visitedLocations: 'Goa, India',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
      visitedDate: '2023-12-10',
    },
    // Add more as needed...
  ]

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
        {memories.map((memory, index) => (
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
              visitedLocations={memory.visitedLocations}
              imageUrl={memory.imageUrl}
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default FavouriteMemoriesTravel
