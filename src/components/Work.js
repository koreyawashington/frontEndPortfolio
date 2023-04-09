import "./WordCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
       {WorkCardData.map((v,indx)=>{
        return(
          <WorkCard
          key={indx}
          imgsrc={v.imgsrc}
          title={v.title}
          text={v.text}
          liveGame={v.liveGame}
          repo={v.repo}
          />
         )
       })}
        </div>
    </div>
  )
}

export default Work