import "./WordCardStyles.css"
import React from 'react'
import pro1 from "../assets/veneration.png"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
   
            <div 
            className="project-card">
               
               <img 
               src={props.imgsrc} 
               alt="" />
                
                <h2 
                className="project-title">{props.title}</h2>
                
                <div 
                className="pro-details">
                    <p>{props.text}</p>
                    
                    <div 
                    className="pro-btns">
                        
                        <NavLink 
                        to={props.liveGame}
                        className="btn">LIVE GAME</NavLink>
                         <NavLink 
                        to={props.repo}
                        className="btn">REPOSITORY</NavLink>
                    
                    </div>
                </div>
            </div>
        
  )
}

export default WorkCard