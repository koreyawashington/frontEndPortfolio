import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
                <FaHome 
                size={20} 
                style={{color:"green", marginRight: "2rem"}}
                />
            </div>
            <div>
                <p>Pittsburgh Metropolitan Area</p>
                <p>Western Pennsylvania, United States of America</p>
            </div>
           
            <div className="email">
            <h4><FaMailBulk 
                size={20} 
                style={{color:"blue", marginRight: "2rem"}}
                />
                myportfolioemail@yahoo.com</h4>
            </div>
            <div className="phone">
            <h4><FaPhone 
                size={20} 
                style={{color:"purple", marginRight: "2rem"}}
                />
                1-124-816-3264</h4>
            </div>
            </div> 

          <div className="right">
            <h4>TECHNICAL SKILLS</h4>
            <p>HTML | CSS | JavaScript | Node.js | Express.js | MongoDB | Mongoose | React | SQL ComputerScience Concepts | Frontend and Backend Frameworks | Data Structures and Algorithm</p>
            <div className="social">
            <FaYoutube 
                size={35} 
                style={{color:"white", marginRight: "1rem"}}
                /> 
            <FaGithub 
                size={35} 
                style={{color:"white", marginRight: "1rem"}}
                /> 
            <FaLinkedin 
                size={35} 
                style={{color:"white", marginRight: "1rem"}}
                /> 
            </div>
            </div>   
        </div>
    </div>
  )
}

export default Footer