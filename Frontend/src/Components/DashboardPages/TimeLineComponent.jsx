import React, { useEffect, useState } from 'react';
import { Empty, Spin, Timeline } from 'antd';
import Timelinecard from './Timelinecard';
import { MdOutlineDateRange  } from "react-icons/md";
import axiosInstance from '../../utils/ApiService';
import moment from 'moment';
const TimeLinecomponent = () => {
  const[memories,setMemories]=useState([]);
  const[loading,setloading]=useState(true);

    const fetchMemories=async()=>{
    
    try {
      const response=await axiosInstance.get('/api/get-all-stories');
      setMemories(response.data.stories);
      console.log(response.data);
      
    } catch (err) {
      console.error(err);
    }
    finally{
      setloading(false)
    }

    }
  useEffect(()=>{
    fetchMemories();
  },[])
  
const UpdateIsFavourite=async(storyId,newValue)=>{
  try {
    await axiosInstance.put(`/api/update-is-favourite/${storyId}`,{
      isFavourite:newValue
    });
    setMemories((prev)=>
    prev.map((m)=>
    m._id===storyId?{...m,isFavourite:newValue}:m
    )
    );

  } catch (err) {
    console.error(err);
    
  }
}

    console.log(memories);
    
  
  if(loading) return <Spin tip="Loading travel stories..."></Spin>
  if(!memories.length) return <Empty description="No memories yet!" />;
  
  
  return (
    <>
   
     <Timeline
  mode='left'
  items={[...memories]
    .sort((a, b) => new Date(b.visitedDate) - new Date(a.visitedDate)) // ✅ descending order
    .map((memory) => ({
      label: `${memory.visitedDate ? moment(memory.visitedDate).format("Do MMM YYYY") : ""}`,
      dot: <MdOutlineDateRange className='bg-transparent' />,
      children: (
        <Timelinecard
          title={memory.title}
          story={memory.story}
          visitedLocations={memory.visitedLocation}
          imageUrl={memory.imageUrl}
          isFavourite={memory.isFavourite}
          onFavouriteToggle={(newValue)=>
            UpdateIsFavourite(memory._id,newValue)
          }
        />
      ),
    }))}
></Timeline>

    </>
  );
};

export default TimeLinecomponent;