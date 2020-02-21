import React from "react";
import ProjectData from "../data/projects.json";
const images = [];
images.push(require("../../images/mantisshrimp.jpg"))
images.push(require("../../images/weather.jpg"))
images.push(require("../../images/taco.jpg"))
images.push(require("../../images/breakingBad.jpg"))
images.push(require("../../images/calendarpic.jpg"))
images.push(require("../../images/journal.jpg"))
function PortfolioProjects() {
    
  return (
    <div>
        {ProjectData.map(project =>(
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="container portfolioContainer">
                        <a href={project[0].deployed}><img src={images[project[0].img]} class="portfolio" alt={project[0].alt} />
                        <div class="banner" id="{project[0].bannerId}">{project[0].title}</div></a>
                        <a href={project[0].repo}>Link to {project[0].title} repository</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="container portfolioContainer">
                        <a href={project[1].deployed}><img src={images[project[1].img]} class="portfolio" alt={project[1].alt} />
                        <div class="banner" id="{project[1].bannerId}">{project[1].title}</div></a>
                        <a href={project[1].repo}>Link to {project[1].title} repository</a>
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  );
}

export default PortfolioProjects;
