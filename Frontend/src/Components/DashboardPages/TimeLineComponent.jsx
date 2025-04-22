import React, { useState } from 'react';
import { Timeline } from 'antd';
import Timelinecard from './Timelinecard';
import { MdOutlineDateRange  } from "react-icons/md";
const TimeLinecomponent = () => {
  const memories = [
          {
            title: 'Travelling in Mountains',
            story: 'A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.',
            visitedLocations: 'Manali, Himachal Pradesh',
            imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
            visitedDate: '2024-06-15',
          },
          {
            title: 'Sunset at the Beach',
            story: 'Captured the golden sunset on a solo trip.',
            visitedLocations: 'Goa, India',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
            visitedDate: '2023-12-10',
          },
          {
            title: 'Travelling in Mountains',
            story: 'A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.A peaceful journey through the Himalayas with friends.',
            visitedLocations: 'Manali, Himachal Pradesh',
            imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/solo-traveller-and-mountains-in-europe-1527585993.jpg',
            visitedDate: '2024-06-15',
          },
          {
            title: 'Sunset at the Beach',
            story: 'Captured the golden sunset on a solo trip.',
            visitedLocations: 'Goa, India',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
            visitedDate: '2023-12-10',
          },
        ];
  
  return (
    <>
   
      <Timeline
        mode='left'
      items={memories.map((memory)=>({
        label:memory.visitedDate,
        dot: <MdOutlineDateRange  className='bg-transparent' />,
        children:<Timelinecard 
        title={memory.title}
        story={memory.story}
        visitedLocations={memory.visitedLocations}
        imageUrl={memory.imageUrl}/>,
      }))}
      />
    </>
  );
};

export default TimeLinecomponent;