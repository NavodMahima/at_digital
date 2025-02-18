import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import ServiceSection from './Components/Service'
import FAQSection from './Components/FAQ'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
