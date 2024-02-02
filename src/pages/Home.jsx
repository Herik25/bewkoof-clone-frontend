import React from 'react'
import Navbar from '../navbar/Navbar'
import Sec1 from '../components/Sec1'
import Designs from '../components/Designs'
import Catagories from '../components/Catagories'
import BestSeller from '../components/BestSeller'
import EndingSection from '../components/EndingSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      <Hero />
      <Sec1 />
      <Designs />
      <Catagories />
      <BestSeller />
      <EndingSection />
      <Footer />
    </div>
  )
}

export default Home