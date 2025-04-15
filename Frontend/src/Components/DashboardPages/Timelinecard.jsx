import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Timelinecard = () => {
   
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
      ];
      const[showFullStory,setShowFullStory]=useState(false);
      const toggleStory=()=>{
        setShowFullStory(!showFullStory);
      }
      const maxWords = 10;
  const storyWords = memories[0].story.split(' ');
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');
  return (
    <div className='flex flex-col items-start p-7 shadow-md rounded-2xl bg-white w-xl hover:scale-[1.02]'>
      <img src={memories[0].image} alt={memories[0].title} title={memories[0].title} className='w-xl h-60 object-cover mb-4' />
      <h2 className='mb-2 text-3xl '>{memories[0].title}</h2>
      <p className='text-xl whitespace-pre-wrap'>{
        showFullStory || !isLong? memories[0].story :`${preview}...`}</p>
        {
            isLong && (
                <button onClick={toggleStory} className=' text-blue-500 hover:underline text-sm font-medium mb-2'>
{showFullStory?'show less':'Read more'}
                </button>
            )
        }
      <div className='mb-2 flex flex-row text-left items-center space-x-3'>
        <FaLocationDot className='text-blue-400 text-xl'/>
        <p className='text-lg text-left'>{memories[0].visitedLocations}</p>
      </div>
    </div>
  )
}

export default Timelinecard;
