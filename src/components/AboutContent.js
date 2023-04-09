import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import Selfie1 from "../assets/reactjs.jpg"
import Selfie2 from "../assets/How_to_Become_a_Back_End_Developer.avif"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Software Engineer with strong technical training and outstanding communication skills. A confident and avid researcher with
the ability to work well in a team setting. Hands on training complimented with an empathetic leadership and an outgoing
customer service etiquette. A critical thinker, problem solver and solution oriented, solution maker, great planner, neat,
helpful, intelligent, clergy.</p>
<Link to="/contact">
    <button className="btn">Contact</button>
</Link>
        </div>

        <div className="right">
            <div className="img-container">
               <div className="img-stack top">
                <img 
                src={Selfie1}
                className="img"
                alt="true"/>
                </div> 

                <div className="img-stack bottom">
                <img 
                src={Selfie2}
                className="img"
                alt="true"/>
                </div> 
            </div>
        </div>

    </div>
  )
}

export default AboutContent