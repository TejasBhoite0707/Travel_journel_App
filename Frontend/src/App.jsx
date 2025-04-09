import React from "react"
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Home/Home"

function App() {
  const Root=()=>{
    const isAuthenticated=!localStorage.getItem("token");
    return (isAuthenticated)?<Login/> :<Home/>
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Root/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )

  
}

export default App
