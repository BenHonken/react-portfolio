import React from "react";
import { Link, Route } from "react-router-dom";

function Contact(props) {
  return (
    <div class="pushFooter">
            <div class="container wrapper">
                <h1>
                    Contact
                </h1>
                <hr />
                <div class="row">
                    <div class="col-md-6 contactBottom">
                        <div>Phone:</div>
                        <br />
                        <div>(320) 212 - 6815</div>
                        <br />
                    </div>
                    <div class="col-md-6 contactBottom">
                        <div>Email:</div>
                        <br />
                        <div>
                            <a class="bottomLinks" href="mailto:honkenb@gmail.com">honkenb@gmail.com</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row contactBottom">
                    <div class="col-md-4 contactBottom">
                        <a class="bottomLinks" href={require("../../HonkenResume.pdf")} target="blank">Resume</a>
                    </div>
                    <div class="col-md-4 contactMid">
                        <a class="bottomLinks" href="https://github.com/BenHonken" target="blank">Github</a>
                    </div>
                    <div class="col-md-4  contactBottom">
                        <a class="bottomLinks" href="https://www.linkedin.com/in/ben-honken-b1b07818a/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Contact;
