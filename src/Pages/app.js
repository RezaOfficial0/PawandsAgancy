import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Home from './Home'
import Footer from '../Components/Footer'

function App() {
  return (
    <div>
       
        <Routes>
        <Route path="/" element={<Home />} />

        
       </Routes>
       
    </div>
  )
}

export default App
