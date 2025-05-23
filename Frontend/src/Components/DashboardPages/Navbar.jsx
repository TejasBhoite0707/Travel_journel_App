import React from 'react'
import { VscBook } from "react-icons/vsc";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal,Popconfirm,message } from 'antd';
const Navbar = ({userInfo}) => {
  const navigate=useNavigate();
  const[isModalopen,setIsModalopen]=useState(false);

  const showModal=()=>{
setIsModalopen(true)
  }

  const handleOk=()=>{
setIsModalopen(false)
  }

  const handleCancel=()=>{
setIsModalopen(false)
  }
  const confirmLogout=()=>{
    localStorage.clear();
    message.success('Logged out successfully!');
      navigate('/login');
    }

  const CancelLogout=()=>{
    message.info("Logout Cancelled");
  }

  return (
   <div className=' flex bg-white m-5 h-12 w-full  rounded-md z-10 justify-between items-center'>
<Link to='/dashboard'><div className='flex space-x-1 items-center ml-14'>
  <VscBook className='text-3xl text-gray-400'/>
  <span className='text-xl text-cyan-950 font-bold'>MemoryVault</span>
</div></Link>
<div className='flex space-x-1 items-center mr-16'>
  <BiSolidUserRectangle className='text-2xl cursor-pointer' onClick={showModal}/>
  <Popconfirm
  title='Are you sure you want to logout?'
  onConfirm={confirmLogout}
  onCancel={CancelLogout}
  okText="Yes"
  cancelText="No"
  >
      <span className='text-md text-red-500 hover:underline cursor-pointer'>Logout</span>
  </Popconfirm>

</div>  
<Modal
title="User Info"
open={isModalopen}
onOk={handleOk}
onCancel={handleCancel}

>
<p><strong>Fullname: </strong>{userInfo?.fullname|| 'NA'}</p>
<p><strong>Email: </strong>{userInfo?.email || 'NA'}</p>
</Modal>

   </div>
  )
}

export default Navbar
