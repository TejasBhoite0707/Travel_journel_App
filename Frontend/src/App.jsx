import React from "react"
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Home/Home"
import MainPage from "./Home/MainPage"
import FavouriteMemoriesTravel from "./Components/DashboardPages/FavouriteMemories"

import TimeLine from "./Components/DashboardPages/TimeLine"

function App() {
  const Root=()=>{
    const isAuthenticated=!!localStorage.getItem("token");
    return (isAuthenticated)? <Home/>:<Navigate to="/login" />
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/dashboard" element={<Root/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Timeline" element={<TimeLine/>}/>
        <Route path="/FavouriteMemories" element={<FavouriteMemoriesTravel/>}/>
      </Routes>
    </Router>
    </>
  )

  
}

export default App
