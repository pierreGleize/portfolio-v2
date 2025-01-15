import React from "react";
import projectsList from "../utils/projects";
import Projects from "./Projects";

const Portfolio = () => {
  const projects = projectsList.map(
    (
      { name, stacks, link, image, github, description, isMobile, qrCode, aos },
      i
    ) => (
      <Projects
        key={i}
        name={name}
        stacks={stacks}
        link={link}
        description={description}
        image={image}
        github={github}
        isMobile={isMobile}
        qrCode={qrCode}
        aos={aos}
      />
    )
  );
  return (
    <div className="portfolio" id="portfolio">
      <div className="center-text">
        <h2>
          Mon <span>Portfolio</span>
        </h2>
      </div>
      <div className="portfolio-content">{projects}</div>
    </div>
  );
};

export default Portfolio;
