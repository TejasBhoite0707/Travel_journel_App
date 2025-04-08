import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/bg-image.jpg'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
const Login = () => {
  const navigate=useNavigate();
  const[showpassword,setShowpassword]=useState(false)
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const[error,setError]=useState(null);
  console.log(password,email);
  
  return (
    <div className='h-screen bg-cyan-50 overflow-hidden relative'>
<div className=' login-ui-box from-cyan-400 to-blue-600 absolute rotate-[30deg] right-[-80px] top-[-100px] blur-2xl opacity-60 animate-pulse' />
<div className='login-ui-box from-blue-500 to-indigo-600 absolute rotate-[45deg] bottom-[-100px] left-[-80px] blur-2xl opacity-60 animate-pulse' />

      <div className='container h-screen flex items-center justify-center px-20 mx-auto'>
        <div className='w-2/4 h-[90vh] flex items-end  bg-cover bg-center rounded-lg p-10 z-50' style={{backgroundImage:  `url(${bgImage})`}} >
          <div className='relative z-10 p-10 text-white'>
          <h4 className='text-5xl font-bold leading-tight drop-shadow-md '>
      Discover New Horizons
    </h4>
    <p className='text-base mt-4 leading-relaxed max-w-md drop-shadow-sm '>
      Every journey holds a story. Capture your adventures, one memory at a time, in your personal travel journal.
    </p>
          </div>
        </div>
        <div className='w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20'>
  <form onSubmit={() => {}}>
    <h4 className='text-3xl font-bold mb-7 text-gray-800'>Login to Your Account</h4>

    <input
      type='email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      name='email'
      placeholder='Enter your Email'
      className='input-box w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200'
    /><br />
<div className='relative'>
<input
      type={showpassword ?  'text':'password'}
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      name='password'
      placeholder='Enter your Password'
      className='input-box w-full px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200'
    />
    <div className=' absolute right-4 top-1/3 transform -translate-y-1/2 text-gray-500 cursor-pointer'
    onClick={()=>setShowpassword(!showpassword)}
    >
{!showpassword?<FaEyeSlash/>:<FaEye/>}
    </div>
</div>
   <br />

    <input
      type='submit'
      value='LOGIN'
      className='btn-primary w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-200 font-semibold cursor-pointer'
    />

    <p className='text-xs text-center my-4 text-slate-500'>Or</p>

    <input
      type='submit'
      value='CREATE ACCOUNT'
      onClick={() => { navigate('/signup') }}
      className='btn-primary w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium cursor-pointer'
    />
  </form>
</div>

      </div>
    </div>
  )
}

export default Login
