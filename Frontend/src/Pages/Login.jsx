import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/bg-image.jpg'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import { validateEmail } from '../utils/Helper'
import toast,{Toaster} from 'react-hot-toast'
import axiosInstance from '../utils/ApiService'
const Login = () => {
  const Taglines = [
    {
      title: "Every Place Has a Story",
      description: "Mark your journey—one location, one memory, one story at a time.",
    },
    {
      title: "Moments with Meaning",
      description: "Capture the feeling, the place, the date—it all matters.",
    },
    {
      title: "Stories Behind Every Snap",
      description: "Your photos aren’t just images—they're memories, moments, and maps.",
    },
    {
      title: "Tag the Time, Tell the Tale",
      description: "Because every memory deserves a location and a date to live forever.",
    },
    {
      title: "Where Memories Meet Maps",
      description: "Pin down the places that shaped your story—frame them with love.",
    },
    {
      title: "Revisit Every Chapter",
      description: "From sunny roads to quiet cafés—let your stories unfold with time and place.",
    },
    {
      title: "Frame the Feeling, Mark the Moment",
      description: "Let your images speak where you were and how it felt.",
    },
    {
      title: "Capture. Describe. Remember.",
      description: "Add the where and when to every photo—turn it into a living memory.",
    },
    {
      title: "Map Your Memories",
      description: "Track the places you've loved, through stories worth retelling.",
    },
    {
      title: "Time Travel in a Tap",
      description: "Scroll through places, dates, and stories—your visual diary awaits.",
    }
  ];
  
  const navigate=useNavigate();
  const[index,setIndex]=useState(0);
  const[showpassword,setShowpassword]=useState(false)
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
 // const[error,setError]=useState(null);
  console.log(password,email);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setIndex((prev)=>(prev+1)%Taglines.length);
    },5000);
    return ()=>clearInterval(interval);
  },[]);

  const handleLogin=async(e)=>{
e.preventDefault();
if(!validateEmail(email) && !password){
  toast.error("Please fill all the details");
  return;
}
if(!validateEmail(email)){
  toast.error("plesae Enter Valid Email");
  return;
}
if(!password){
  toast.error("Please Enter Password");
  return;
}

try {
  const response=await axiosInstance.post('/api/login',{
    email:email,
    password:password,
  })
  console.log(response);
  if(response.data && response.data.accessTokenLogin){
    localStorage.setItem("token",response.data.accessTokenLogin)
  }
  const ele=localStorage.getItem("token");
  console.log(ele);
  
  
  toast.success("Login sucessFully")
  setEmail("");
  setPassword("");
  navigate('/dashboard');
} catch (error) {
  console.error(error.response.data);
  
}

  }
  
  return (
    <div className='h-screen bg-cyan-50 overflow-hidden relative'>
      <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    duration: 3000,
    style: {
      background: '#0f172a', // dark blue
      color: '#fff',
      padding: '14px 20px',
      borderRadius: '10px',
      fontSize: '15px',
      boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
    },
    success: {
      style: {
        background: '#059669', // teal green
      },
    },
    error: {
      style: {
        background: '#dc2626', // red
      },
    },
  }}
/>

<div className=' login-ui-box from-cyan-400 to-blue-600 absolute rotate-[30deg] right-[-80px] top-[-100px] blur-2xl opacity-60 animate-pulse' />
<div className='login-ui-box from-blue-500 to-indigo-600 absolute rotate-[45deg] bottom-[-100px] left-[-80px] blur-2xl opacity-60 animate-pulse' />

      <div className='container h-screen flex items-center justify-center px-20 mx-auto'>
        <div className='w-2/4 h-[90vh] flex items-end  bg-cover bg-center rounded-lg p-10 z-50' style={{backgroundImage:  `url(${bgImage})`}} >
          <div className='relative z-10 p-10 text-white'>
          <h4 className='text-5xl font-bold leading-tight drop-shadow-md '>
      {Taglines[index].title}
    </h4>
    <p className='text-base mt-4 leading-relaxed max-w-md drop-shadow-sm '>
    {Taglines[index].description}
    </p>
          </div>
        </div>
        <div className='w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20'>
  <form onSubmit={handleLogin}>
    <h4 className='text-3xl font-bold mb-7 text-gray-800'>Login to Your Account</h4>

    <input
      type='text'
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
{/* {error && <p className='text-red-500 text-xs pb-0'>{error}</p>} */}
   <br />

    <input
      type='submit'
      value='LOGIN'
      className='btn-primary w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-200 font-semibold cursor-pointer'
    />

    <p className='text-xs text-center my-4 text-slate-500'>Or</p>

    
  </form>
  <input

  value="CREATE ACCOUNT"
  onClick={() => navigate('/signup')}
  className=" btn-primary w-full py-3 bg-[#00C4E5] text-white rounded-full text-sm font-bold text-center 
             hover:bg-[#00B2D4] transition-all duration-200 cursor-pointer
             flex items-center justify-center shadow-md"
/>

</div>

      </div>
    </div>
  )
}

export default Login
