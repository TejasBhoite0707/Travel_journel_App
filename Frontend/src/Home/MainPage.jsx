import React from 'react'
import bgImage from '../assets/images/bg-image-MainPage.jpg'
const MainPage = () => {
  return (
    <>
    <div className='min-h-screen flex bg-no-repeat bg-center justify-center' style={{backgroundImage:`url(${bgImage})`,backgroundSize:'100% 100%'}}>
    <div className='flex flex-row md:flex-col items-center text-center justify-center text-white px-6 py-16'>
       
<h1 className='font-semibold text-6xl'>Capture. Relive. Share.</h1>
<p className='text-xl mt-9 text-center'>
A place where your journeys come alive through stories, photos, and shared moments — capturing every emotion, every milestone, and turning memories into timeless treasures you can revisit and share with the world.
</p>
<div className='flex flex-row space-x-5 items-center mt-8'>
    <button className='bg-blue-500 text-white py-3 px-2'>Get Started</button>
    <p>Already have an account?<span>Log in</span></p>
</div>
<div className='flex flex-row space-x-7 items-center text-white mt-16'>
<div>
    1
</div>
<div>
    2
</div>
<div>
    3
</div>
    </div>
    </div>
    
    </div>
      
    </>
  )
}

export default MainPage
