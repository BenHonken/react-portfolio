import React from "react";
import PortfolioProjects from "./PortfolioProjects";

function Home() {
  return (
    <div class="container wrapper">
      <h1>
          Portfolio
      </h1>
      <hr />
      <PortfolioProjects />
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <h2>More to come...</h2>
          </div>
      </div>
  </div>
  );
}

export default Home;
