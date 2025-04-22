
import React from 'react'
import TimeLinecomponent from './TimeLineComponent'
import { motion } from 'framer-motion'

const TimeLine = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100 px-4 py-4'>
     <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-50 relative"
      >
      <h2 className='text-4xl text-center font-bold mb-6 text-gray-800'>Your TimeLine</h2>
      <p className='text-center text-2xl text-gray-700 mb-12'>Cherish and Revisit your journey through life most precious moments</p>
      </motion.div>
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }} className="flex justify-items-start items-center">
  <div className="w-full max-w-4xl">
    <TimeLinecomponent />
  </div>
</motion.div>
      
      
      
    </div>
  )
}

export default TimeLine
