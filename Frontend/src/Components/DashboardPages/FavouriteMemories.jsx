import React from 'react';
import FavouriteMemoryCard from './FavMemCard';

const FavouriteMemoriesTravel = () => {
  const memories = [
    {
      title: 'Travelling in Mountains',
      story:
        'A peaceful journey through the Himalayas with friends. From misty mornings he Himalayas with friends. From misty  he Himalayas with friends. From misty  he Himalayas with friends. From misty  to starry nights, the experience was magical.',
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
      title: 'Sunset at the Beach',
      story:
        'Captured the golden sunset on a solo trip. The waves, breeze, and calm made it unforgettable.',
      visitedLocations: 'Goa, India',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
      visitedDate: '2023-12-10',
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
    // Add more memories if needed...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F3] via-[#9dc9f0] to-[#FFEFE3] px-6 py-12 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center drop-shadow-lg animate-pulse">
        Favourite Memories
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
        Some of the most cherished moments from my journeys — full of stories,
        smiles, and sunsets.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-2 gap-10 w-full max-w-6xl">
        {memories.map((memory, index) => (
          <FavouriteMemoryCard
            key={index}
            title={memory.title}
            story={memory.story}
            visitedLocations={memory.visitedLocations}
            imageUrl={memory.imageUrl}
          />
        ))}
      </div>

      <button className="mt-16 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
        Share Your Own Memory
      </button>
    </div>
  );
};

export default FavouriteMemoriesTravel;
