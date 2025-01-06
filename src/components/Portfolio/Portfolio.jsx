import React from "react";
import "./portfolio.css";
import project1 from './assets/proj1.jpeg'
import project2 from './assets/proj2.jpeg'
import project3 from './assets/proj3.jpeg'

export default function Portfolio() {
  return (
    <>
      <div className="Portfolio">
          <div className="header">
            <p>PORTFOLIO</p>
          </div>
        <div className="filterbar">
            <div className="all box"><p>ALL</p></div>
            <div className="coded box"><p>CODED</p></div>
            <div className="designed box"><p>DESIGNED</p></div>
        </div>
        <div className="indicatorline"></div>
        <div className="projectgrid">
            <div className="project">
                <img src={project1} alt="project1" />
            </div>
            <div className="project">
                <img src={project2} alt="project1" />
            </div>
            <div className="project">
                <img src={project3} alt="project1" />
            </div>
            <div className="project">
                <img src={project2} alt="project1" />
            </div>
            <div className="project">
                <img src={project3} alt="project1" />
            </div>
            <div className="project">
                <img src={project1} alt="project1" />
            </div>
        </div>
        <div className="portfoliofooter">
            <p>And many more to come!</p>
        </div>
      </div>
    </>
  );
}
