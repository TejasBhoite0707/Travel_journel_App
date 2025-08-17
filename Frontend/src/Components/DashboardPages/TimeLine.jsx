import React, { useState } from 'react'
import TimeLinecomponent from './TimeLineComponent'
import { motion } from 'framer-motion'
import { DatePicker, Space, Input } from 'antd'
import axiosInstance from '../../utils/ApiService'

const TimeLine = () => {
  const { RangePicker } = DatePicker
  const { Search } = Input
  const [dates, setDates] = useState([])
  const [startDate, SetstartDate] = useState(null)
  const [endDate, SetendDate] = useState(null)
  const[Filteredstories,setFilteredStories]=useState([]);
  const handleDates = (dates, DatesStrings) => {
    setDates(dates)
    SetstartDate(DatesStrings[0])
    SetendDate(DatesStrings[1])
    console.log(DatesStrings[0], DatesStrings[1])
  }

  const handleFilterStories = async () => {
    const paresedSDate = new Date(startDate)
    const paresedEDate = new Date(endDate)
    console.log(paresedEDate, paresedSDate)

    try {
      const response = await axiosInstance.get('api/travel-stories/filter', {
        params: {
          startDate: paresedSDate,
          endDate: paresedEDate
        }
      })
      console.log(response.data.stories)
      setFilteredStories(response.data.stories);
      //console.log(stories);
      
    } catch (error) {
      console.error('Error While fetching stories', error)
    }
  }
const  handleCancelFilter=()=>{
  setFilteredStories([]);
  SetstartDate(null);
  SetendDate(null);
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-100 px-4 sm:px-8 lg:px-20 py-6 sm:py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-50 relative text-center lg:text-left max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800">
          Your <span className="text-blue-600">TimeLine</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0">
          Cherish and revisit your journey through life’s most precious moments.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 mb-10 max-w-5xl mx-auto">
        {/* Date Range Picker + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Space direction="horizontal" size="middle">
            <RangePicker value={dates} onChange={handleDates} />
            <button
              onClick={handleFilterStories}
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
            >
              Filter
            </button>
            {
              Filteredstories.length>0 && (
<button className='bg-gray-400 text-white px-4 py-2 rounded-lg' onClick={handleCancelFilter}>
              Clear
            </button>
              )
            }
            
          </Space>
        </div>

        {/* Search Bar */}
        <Search
          allowClear
          placeholder="Search stories..."
          className="w-full sm:w-64 md:w-80"
        />
      </div>

      {/* Timeline Content */}
      {/* Timeline Content */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="flex items-center justify-center min-h-screen px-2"
>
  <div className="w-full max-w-5xl">
    <TimeLinecomponent Filteredstories={Filteredstories.length > 0 ? Filteredstories : undefined} />
  </div>
</motion.div>

    </div>
  )
}

export default TimeLine
