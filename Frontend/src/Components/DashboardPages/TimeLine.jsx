
import React, { useState } from 'react'
import TimeLinecomponent from './TimeLineComponent'
import { motion } from 'framer-motion'
import { DatePicker,Space ,Input} from 'antd'
import axiosInstance from '../../utils/ApiService'
const TimeLine = () => {
  const{RangePicker}=DatePicker;
  const{Search}=Input;
  const [dates,setDates]=useState([])
  const [startDate,SetstartDate]=useState(null);
  const [endDate,SetendDate]=useState(null);
  const handleDates=(dates,DatesStrings)=>{
    setDates(dates);
    SetstartDate(DatesStrings[0]);
    SetendDate(DatesStrings[1]);
    console.log(DatesStrings[0],DatesStrings[1]);
  }

  const handleFilterStories=async()=>{
    const paresedSDate=new Date(parseInt(startDate));
    const paresedEDate=new Date(parseInt(endDate));
    console.log(paresedEDate,paresedSDate);
    
    try {
      const response=await axiosInstance.get('api/travel-stories/filter',{
        params:{
          startDate:paresedSDate,
          endDate:paresedEDate
        }
      });
      console.log(response);
    } catch (error) {
      console.error("Error While fetching stories",error);
    }
    
  }
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
    <div className="flex items-center justify-center gap-6 mb-7">
  {/* Date Range Picker + Button */}
  <div className="flex items-center gap-3">
    <Space direction="horizontal" size="middle">
      <RangePicker value={dates} onChange={handleDates} />
      <button
        onClick={handleFilterStories}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Filter Stories
      </button>
    </Space>
  </div>

  {/* Search Bar */}
  <Search
    allowClear
    style={{ width: 300 }}
    placeholder="Search stories..."
  />
</div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="flex items-center justify-center h-screen"
>
  <div className="w-full max-w-4xl">
    <TimeLinecomponent />
  </div>
</motion.div>

      
      
      
    </div>
  )
}

export default TimeLine
