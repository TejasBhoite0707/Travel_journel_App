import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/bg-image1.png'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import { validateEmail } from '../utils/Helper'
import toast,{Toaster} from 'react-hot-toast'
import axiosInstance from '../utils/ApiService'
const Signup = () => {
  const taglines = [
    {
      title: "Every Memory Matters",
      description: "Preserve your favorite places and unforgettable moments. Let’s get started!",
    },
    {
      title: "Capture the Unexpected",
      description: "Your next best story is just a click away. Document the journey.",
    },
    {
      title: "Write Your Adventure",
      description: "Every photo holds a story. Let’s bring your moments to life.",
    },
    {
      title: "Create Timeless Memories",
      description: "Don’t just travel. Make it unforgettable with every snapshot.",
    },
    {
      title: "Frame the Moment",
      description: "From scenic views to spontaneous smiles—capture it all in perfect focus.",
    },
    {
      title: "Discover Through the Lens",
      description: "Unveil hidden gems and see the world from a new perspective.",
    },
    {
      title: "Your Journey, Your Story",
      description: "Let every trip become a beautiful tale told through pictures.",
    },
    {
      title: "Pause. Click. Remember.",
      description: "Sometimes all you need is one photo to relive a thousand emotions.",
    },
    {
      title: "Chase Light, Capture Life",
      description: "From golden hours to city lights—freeze the magic in every frame.",
    }
  ];

  
  const navigate=useNavigate();
  const[showpassword,setShowpassword]=useState(false);
  const[index,setIndex]=useState(0);  
  const [password,setPassword]=useState("");
  const[fullname,setFullname]=useState("");
  const [email,setEmail]=useState("");
 // const[error,setError]=useState(null);
  console.log(password,email);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setIndex((prev)=>(prev+1)%taglines.length)
    },5000);
    return ()=>clearInterval(interval);
  },[]);

  const handleSignup=async(e)=>{
e.preventDefault();
if(!fullname && !validateEmail(email) && !password){
  toast.error("Please fill all the details");
  return;
}
if(!validateEmail(email)){
  toast.error("plesae Enter Valid Email");
  return;
}
if(!fullname){
  toast.error("Please Enter Full Name");
  return;
}
if(!password){
  toast.error("Please Enter Password");
  return;
}

try {
  const response=await axiosInstance.post('/api/create-account',{
    fullname:fullname,
    email:email,
    password:password,
  })
  console.log(response);
  if(response.data && response.data.accessToken){
    localStorage.setItem("token",response.data.accessToken)
  }
  const ele=localStorage.getItem("token");
  console.log(ele);
  
  
  toast.success("Account Created Sucessfully");
  setFullname("");
  setEmail("");
  setPassword("");
  navigate('/login');
} catch (error) {
  console.error(error.response.data);
  
}

  }
  
  return (
    <div className="h-screen bg-cyan-50 overflow-hidden relative">
     <Toaster
    position="top-center"
    reverseOrder={false}
    toastOptions={{
      duration: 5000,
      style: {
        background: '#0f172a',
        color: '#fff',
        padding: '14px 20px',
        borderRadius: '10px',
        fontSize: '15px',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
      },
      success: {
        style: {
          background: '#059669',
        },
      },
      error: {
        style: {
          background: '#dc2626',
        },
      },
    }}
  />

  {/* Background effects */}
  <div className="login-ui-box from-cyan-400 to-blue-600 absolute rotate-[30deg] right-[-80px] top-[-100px] blur-2xl opacity-60 animate-pulse" />
  <div className="login-ui-box from-blue-500 to-indigo-600 absolute rotate-[45deg] bottom-[-100px] left-[-80px] blur-2xl opacity-60 animate-pulse" />

  {/* Main container */}
  <div className="container h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mx-auto">
    
    {/* Left side (image + text) */}
    <div
      className="w-full md:w-2/4 h-[40vh] md:h-[90vh] flex items-end bg-cover bg-center rounded-t-lg lg:rounded-lg p-6 sm:p-10 z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 p-4 sm:p-8 text-white">
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl text-[#F5E9DC]">
          {taglines[index].title}
        </h4>
        <p className="text-sm sm:text-base lg:text-lg mt-4 leading-relaxed max-w-md drop-shadow-sm text-[#FFF9C4]">
          {taglines[index].description}
        </p>
      </div>
    </div>

    {/* Right side (form) */}
    <div className="w-full md:w-2/4 h-auto md:h-[75vh] bg-white rounded-b-lg lg:rounded-r-lg relative p-6 sm:p-10 lg:p-16 shadow-lg shadow-cyan-200/20">
      <form onSubmit={handleSignup}>
        <h4 className="text-2xl sm:text-3xl font-bold mb-7 text-gray-800">
          Create Your Account
        </h4>

        {/* Fullname */}
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          name="fullname"
          placeholder="Enter Your Full Name"
          className="input-box w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
        />

        {/* Email */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Enter your Email"
          className="input-box w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showpassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter your Password"
            className="input-box w-full px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
          />
          <div
            className="absolute right-4 top-1/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowpassword(!showpassword)}
          >
            {!showpassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Signup button */}
        <input
          type="submit"
          value="CREATE ACCOUNT"
          className="btn-primary w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-200 font-semibold cursor-pointer"
        />

        <p className="text-xs text-center my-4 text-slate-500">Or</p>
      </form>

      {/* Login button */}
      <input
        value="LOGIN"
        onClick={() => navigate("/login")}
        className="btn-primary w-full py-3 bg-[#00C4E5] text-white rounded-full text-sm font-bold text-center 
                   hover:bg-[#00B2D4] transition-all duration-200 cursor-pointer
                   flex items-center justify-center shadow-md"
      />
    </div>
  </div>
</div>

  )
}

export default Signup;
