import "./ImageOneStyles.css"

import React from 'react'
import IntroImg from "../assets/code.jpg"
import { Link } from "react-router-dom"
const ImageOne = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img 
            className="intro-img" 
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>I AM KOREYA WASHINGTON | </p>
            <h1>Front-End Developer.
            
            </h1>
            <div>
            <Link to="/projects" className="btn-default">Projects</Link>
            <Link to="/contact" className="btn-dark">Contact</Link>
        </div>
        </div>
      
    </div>
  )
}

export default ImageOne