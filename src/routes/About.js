import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageTwo from '../components/ImageTwo'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div> 

    <Navbar/>

    <ImageTwo 
    heading="ABOUT." 
    text='-"Nothing will work unless you do." -Maya Angelou'/>

<AboutContent/>

    <Footer/>

    </div>
  )
}

export default About