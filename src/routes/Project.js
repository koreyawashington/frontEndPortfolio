import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageTwo from '../components/ImageTwo'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ImageTwo heading="PROJECTS." text="Here are my most pertinent projects "/>
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project