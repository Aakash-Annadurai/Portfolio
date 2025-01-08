import React from "react";
import "./portfolio.css";
import { useState } from "react";
import project1 from "./assets/apodproject.png";
import project2 from "./assets/blogproject.png";
import project3 from "./assets/dogapiproject.png";
import project4 from "./assets/recipeproject.png";
import project5 from "./assets/tableproject.png";
import project6 from "./assets/todoproject.png";

export default function Portfolio() {
  

  const imagesData = [
    { id: 1, src: project1, description: "APOD" },
    { id: 2, src: project2, description: "Blog Preview" },
    { id: 3, src: project3, description: "Dog API Demo" },
    { id: 4, src: project4, description: "Demo Recipe Page" },
    { id: 5, src: project5, description: "Table Records" },
    { id: 6, src: project6, description: "To-Do List" },
  ];

  const HoverImage = ({imageSrc, description}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt="project" className="image" />
        {isHovered && <div className="hover-text">{description}</div>}
      </div>
    );
  };
  return (
    <>
      <div className="Portfolio" id="portfolio">
        <div className="header">
          <p>PORTFOLIO</p>
        </div>
        <div className="filterbar">
          <div className="all box">
            <p>ALL</p>
          </div>
        </div>
        <div className="projectgrid">
          {imagesData.map((image) => (
            <HoverImage
              key={image.id}
              imageSrc={image.src}
              description={image.description}
            />
          ))}
        </div>
        <div className="portfoliofooter">
          <p>And many more to come!</p>
        </div>
      </div>
    </>
  );
}
