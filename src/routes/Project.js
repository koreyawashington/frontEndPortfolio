import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageTwo from '../components/ImageTwo'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ImageTwo heading="PROJECTS." text="Here are my most pertinent projects "/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project