import React from "react";

function Home() {
  return (
    <div class="container wrapper">
      <h1>
          Portfolio
      </h1>
      <hr />
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                      <a href="https://mantisshrimp.herokuapp.com/"><img src={require("../../images/mantisshrimp.jpg")} class="portfolio" alt="mantisshrimp" /></a>
                  <div class="banner" id="mantisShrimp">Mantis Shrimp Tutoring</div>
                  <a href="https://github.com/BenHonken/mantis-shrimp">Link to Mantis Shrimp Tutoring's repository</a>
              </div>
          </div>
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                      <a href="https://benhonken.github.io/homework06/"><img src={require("../../images/weather.jpg")} class="portfolio" alt="weatherpic" /></a>
                  <div class="banner" id="weather">Weather Dashboard</div>
                  <a href="https://github.com/BenHonken/BenHonken.github.io/tree/master/homework06">Link to Weather Dashboard repository</a>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                      <a href="https://benhonken.github.io/homework07/"><img src={require("../../images/taco.jpg")} class="portfolio" alt="tacopic" /></a>
                  <div class="banner" id="taco">Tacos and Tequila</div>
                  <a href="https://github.com/BenHonken/BenHonken.github.io/tree/master/homework07">Link to Tacos and Tequila repository</a>
              </div>
          </div>
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                  <a href="https://benhonken.github.io/homework04/" ><img src={require("../../images/breakingBad.jpg")} class="portfolio" alt="breakingBadPic" /></a>
                  <div class="banner" id="quiz">Breaking Bad Quiz</div>
                  <a href="https://github.com/BenHonken/BenHonken.github.io/tree/master/homework07">Link to Breaking Bad Quiz repository</a>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                  <a href="https://benhonken.github.io/homework05/"><img src={require("../../images/calendarpic.jpg")} class="portfolio" alt="calendarpic" /></a>
                  <div class="banner" id="calendar">Calendar</div>
                  <a href="https://github.com/BenHonken/BenHonken.github.io/tree/master/homework05">Link to Calendar repository</a>
              </div>
          </div>
          <div class="col-lg-6 col-md-12">
              <div class="container portfolioContainer">
                  <a href="https://honkennotetaker.herokuapp.com/"><img src={require("../../images/journal.jpg")} class="portfolio" alt="journalpic" /></a>
                  <div class="banner" id="journal">Journal</div>
                  <a href="https://github.com/BenHonken/journal">Link to Journal repository</a>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <h2>More to come...</h2>
          </div>
      </div>
  </div>
  );
}

export default Home;
