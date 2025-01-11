import React, { useContext } from "react";
import "./portfolio.css";
import { useState } from "react";
import project1 from "./assets/apodproject.png";
import project2 from "./assets/blogproject.png";
import project3 from "./assets/dogapiproject.png";
import project4 from "./assets/recipeproject.png";
import project5 from "./assets/tableproject.png";
import project6 from "./assets/todoproject.png";
import { FunctionContext } from "../../utils/FunctionProvider";

export default function Portfolio() {
  const { t } = useContext(FunctionContext);
  const imagesData = [
    {
      id: 1,
      src: project1,
      description:t("apod"),
      link: "https://apod-boqk.onrender.com",
    },
    {
      id: 2,
      src: project2,
      description: t("blog"),
      link: "https://aakash-annadurai.github.io/Blog-Preview-Card/",
    },
    {
      id: 3,
      src: project3,
      description: t("dogapi"),
      link: "https://dog-api-demo.onrender.com",
    },
    {
      id: 4,
      src: project4,
      description: t("recipe"),
      link: "https://aakash-annadurai.github.io/Recipe-Page/",
    },
    {
      id: 5,
      src: project5,
      description: t("table"),
      link: "https://table-records.onrender.com",
    },
    {
      id: 6,
      src: project6,
      description: t("todo"),
      link: "https://to-do-list-rvb1.onrender.com",
    },
  ];

  const HoverImage = ({ imageSrc, description, linksrc }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageSrc}
          alt="project"
          className="image"
          onClick={() => window.open(linksrc, "_blank")}
        />
        {isHovered && <div className="hover-text">{description}</div>}
      </div>
    );
  };
  return (
    <>
      <div className="Portfolio" id="portfolio">
        <div className="header">
          <p>{t("portfoliotitle")}</p>
        </div>
        <div className="filterbar">
          <div className="all box">
            <p>{t("filterboxall")}</p>
          </div>
        </div>
        <div className="projectgrid">
          {imagesData.map((image) => (
            <HoverImage
              key={image.id}
              imageSrc={image.src}
              description={image.description}
              linksrc={image.link}
            />
          ))}
        </div>
        <div className="portfoliofooter">
          <p>{t("portfoliofooter")}</p>
        </div>
      </div>
    </>
  );
}
