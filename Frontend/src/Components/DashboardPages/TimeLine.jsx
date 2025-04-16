
import React from 'react'
import TimeLinecomponent from './TimeLineComponent'
import Timelinecard from './Timelinecard'

const TimeLine = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100 px-4 py-4'>

{/* <div className="absolute bottom-20 left-10 text-[100px] font-bold text-black opacity-5 z-0">
  Journey
</div>
<div className="absolute top-32 right-16 text-[80px] italic text-black opacity-5 z-0">
  Memories
</div> */}






      <h2 className='text-4xl text-center font-bold mb-6 text-gray-800'>Your TimeLine</h2>
      <p className='text-center text-2xl text-gray-700 mb-12'>Cherish and Revisit your journey through life most precious moments</p>
      <div className="flex justify-items-start">
  <div className="w-full max-w-4xl">
    <TimeLinecomponent />
  </div>
</div>
      
      
      
    </div>
  )
}

export default TimeLine
