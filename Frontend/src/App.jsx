import React from "react"
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Home/Home"

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
