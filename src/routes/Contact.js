import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageTwo from '../components/ImageTwo'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div> 
    <Navbar/>
    <ImageTwo 
    heading="CONTACT." 
    text="Get In Touch"/>
    
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact