import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import ServiceSection from './Components/Service'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default App
