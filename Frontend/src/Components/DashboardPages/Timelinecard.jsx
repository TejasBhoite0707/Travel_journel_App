import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const Timelinecard = ({title,story,visitedLocations,imageUrl,visitedDate,isFavourite,onFavouriteToggle}) => {
   
    
      const[showFullStory,setShowFullStory]=useState(false);
      const toggleStory=()=>{
        setShowFullStory(!showFullStory);
      }
      
      const maxWords = 10;
  const storyWords =story ? story.split(' ') : [];
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');
  return (
    <div className=' relative flex flex-col items-start p-5 shadow-md rounded-2xl bg-white w-xl hover:scale-[1.02]'>
    <div className='absolute top-4 right-4 z-10 cursor-pointer text-red-500 text-3xl'
    onClick={()=>onFavouriteToggle(!isFavourite)}>
      {isFavourite?<AiFillHeart />:<AiOutlineHeart />}
    </div>
      <img src={imageUrl} alt={title} title={title} className='w-xl h-60 object-cover mb-4' />
      <h2 className='mb-2 text-3xl '>{title}</h2>
      <p className='text-xl whitespace-pre-wrap'>{
        showFullStory || !isLong? story :`${preview}...`}</p>
        {
            isLong && (
                <button onClick={toggleStory} className=' text-blue-500 hover:underline text-sm font-medium mb-2'>
{showFullStory?'show less':'Read more'}
                </button>
            )
        }
      <div className='mb-2 flex flex-row text-left items-center space-x-3'>
        <FaLocationDot className='text-blue-400 text-xl'/>
        <p className='text-lg text-left'>{Array.isArray(visitedLocations)?visitedLocations.join(' , '):visitedLocations}</p>
      </div>
    </div>
  )
}

export default Timelinecard;
