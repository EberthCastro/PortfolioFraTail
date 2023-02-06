import React from 'react'
import Create from '../components/api/Create'
import Login from '../components/api/Login'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function RouteAPi() {
  return (
    
        <div className="font-Poppins bg-ghostWhite">
      <Navbar />
      <Home />
      <Projects />      
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      
    
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Create" element={<Create />} />
    {/* <Route path="/Skills" element={<Skills />} />
    <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
    </div>
  )
}

export default RouteAPi
