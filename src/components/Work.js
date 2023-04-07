import "./WordCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import React from 'react'
import pro1 from "../assets/veneration.png"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
       {WorkCardData.map((v,indx))}
        </div>
    </div>
  )
}

export default Work