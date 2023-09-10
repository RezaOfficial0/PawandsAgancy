import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Home from './Home'
import Founder from './Founder'
import Footer from '../Components/Footer'
function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Founder" element={<Founder />} />
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
