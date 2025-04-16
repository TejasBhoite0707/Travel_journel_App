import React, { useState } from 'react'

import Timelinecard from './Timelinecard';
const FavouriteMemoriesTravel = () => {
   
    const memories = [
        {
          title: 'Travelling in Mountains',
          story: 'A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.',
          visitedLocations: 'Manali, Himachal Pradesh',
          image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
          visitedDate: '2024-06-15',
        },
        {
          title: 'Sunset at the Beach',
          story: 'Captured the golden sunset on a solo trip.',
          visitedLocations: 'Goa, India',
          image: 'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
          visitedDate: '2023-12-10',
        },
        {
          title: 'Travelling in Mountains',
          story: 'A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.',
          visitedLocations: 'Manali, Himachal Pradesh',
          image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
          visitedDate: '2024-06-15',
        },
        {
          title: 'Sunset at the Beach',
          story: 'Captured the golden sunset on a solo trip.',
          visitedLocations: 'Goa, India',
          image: 'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
          visitedDate: '2023-12-10',
        },
      ];
     
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#FFF9F3] via-[#9dc9f0] to-[#FFEFE3] px-4 py-4 flex flex-col items-center'>
      <h1 className='text-5xl mb-10 mt-28'>Favourite Memories</h1>
      <div className='grid grid-cols-2 gap-5  mx-auto mb-4'>
      {memories.map((memory,index)=>(
        <Timelinecard key={index}
        title={memory.title}
        story={memory.story}
        visitedLocations={memory.visitedLocations}
        imageUrl={memory.imageUrl}
        />
      ))}
      </div>
 
    </div>
   
  )
}

export default FavouriteMemoriesTravel;
