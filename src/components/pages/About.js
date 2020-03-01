import React from "react";

function About() {
  return (
      <div class="container wrapper">
          <h1>
              About Me
          </h1>
          <hr />
          <div class="content">
              <div class="row">
                  <div class="col-md-3">
                      <img src={require("../../images/mypic.jpg")} class="img-fluid" id="mypic" alt="Ben Honken" />
                  </div>
                  <div class="col-md-9">
                      <p>Full Stack Web Developer educated at the University of Minnesota’s coding bootcamp. Fluent in HTML, CSS, Python, and JavaScript. Timely, thorough, and adaptive. Years of experience as a tutor make for a patient teacher able to explain functions and features effectively and design them in a way that’s naturally easy to understand. Excels at simplifying complex ideas. As a business owner, understands the need for automation and administrative features to increase efficiency. Successfully coded several programs to automate repetitive work in own business. Excited about making mundane tasks disappear and creating a more positive onsite experience for users and owners alike. </p>
                  </div>
              </div>
              <hr />
              <div class="row">
                  <div class="col-md-12">
                      <p>Hello!  My name is Ben Honken, and I am glad you are here!</p>
                      <p>I am developing my skills as a programmer, and this is my portfolio page.  I have always been fascinated by computers, and the first time I made Python print &#8220;Hello World!&#8221; I was hooked!  I enjoy logic and problem solving, and I have made some great little programs to save myself time in my own business.</p>
                      <p>I live in Burnsville with my wife, son, and dog.  I currently work as a tutor and manage my own tutoring business.  While a secondary goal of mine is to better manage my own website, I am primarily aiming for employment in the field of programming.</p>
                      <p>Thanks for stopping by!  Check out my portfolio and feel free to swing by the contact section to find my phone, email, resume, Github, and LinkedIn!  </p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default About;
