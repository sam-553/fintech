import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermConditions'
import Contact from './pages/Contact'
import BecomePartner from './pages/BecomePartner'

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

   
      <Navbar />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/becomepartner" element={<BecomePartner />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
