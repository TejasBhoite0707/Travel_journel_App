import React from 'react'
import { VscBook } from "react-icons/vsc";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <div className=' flex bg-white m-5 h-12 w-full  rounded-md z-10 justify-between items-center'>

<Link to='/dashboard'><div className='flex space-x-1 items-center ml-14'>
  <VscBook className='text-3xl text-gray-400'/>
  <span className='text-xl text-cyan-950 font-bold'>MemoryVault</span>
</div></Link>
<div className='flex space-x-1 items-center mr-16'>
  <BiSolidUserRectangle className='text-2xl cursor-pointer'/>
  <span className='text-md text-red-500 hover:underline cursor-pointer'>Logout</span>
</div>


   </div>
  )
}

export default Navbar
