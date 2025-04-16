import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Timelinecard = ({title,story,visitedLocations,imageUrl,visitedDate}) => {
   
    
      const[showFullStory,setShowFullStory]=useState(false);
      const toggleStory=()=>{
        setShowFullStory(!showFullStory);
      }
      const maxWords = 10;
  const storyWords =story ? story.split(' ') : [];
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');
  return (
    <div className='flex flex-col items-start p-7 shadow-md rounded-2xl bg-white w-xl hover:scale-[1.02]'>
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
        <p className='text-lg text-left'>{visitedLocations}</p>
      </div>
    </div>
  )
}

export default Timelinecard;
