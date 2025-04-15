
import React from 'react'
import TimeLinecomponent from './TimeLineComponent'
import Timelinecard from './Timelinecard'

const TimeLine = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#FFF9F3] via-[#9dc9f0] to-[#FFEFE3] px-4 py-4'>
      <h2 className='text-4xl text-center font-bold mb-6 text-gray-800'>Your TimeLine</h2>
      <p className='text-center text-2xl text-gray-700 mb-12'>Cherish and Revisit your journey through life most precious moments</p>
      <TimeLinecomponent/>
      <div>
      <Timelinecard/>
      </div>
      
    </div>
  )
}

export default TimeLine
