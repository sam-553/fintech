import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'



const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home