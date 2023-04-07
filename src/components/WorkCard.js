import "./WordCardStyles.css"
import React from 'react'
import pro1 from "../assets/veneration.png"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
            <div className="project-card">
               <img src={pro1} alt="" />
                <h2 className="project-title">The Veneration of Arwe</h2>
                <div className="pro-details">
                    <p>This is paragraph</p>
                    <div className="pro-btns">
                        <NavLink 
                        to="https://koreyawashington.github.io/The-Veneration-of-Arwe/"
                        className="btn">LIVE GAME</NavLink>
                         <NavLink 
                        to="https://github.com/koreyawashington/The-Veneration-of-Arwe"
                        className="btn">REPOSITORY</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard