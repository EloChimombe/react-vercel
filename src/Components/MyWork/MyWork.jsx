import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import travelPala from "../../assets/travelPala.png";
import capstone3 from "../../assets/Capstone3.webp";
import capstone2 from "../../assets/Capstone2.png";
// import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="work-list">
        <div className="work">
          <img src={travelPala} alt="travelPala" />
          <div className="layer">
            <h3>Travel Pala</h3>
            <p>
              Travel Pala is a web application which allows people to book
              different activities online like accomodation, outdoor activities
              and more. I contributed to this project together my team working
              as a backend developer.
            </p>
          </div>
        </div>
        <div id="work" className="work">
          <img src={capstone3} alt="capstoneProject" />
          <div className="layer">
            <h3>Capstone Project</h3>
            <p>
              This project demostrate how to use public APIs using Javascript, I
              built this project during my web development course as part of the
              course project.
            </p>
          </div>
        </div>
        <div className="work">
          <img src={capstone2} alt="capstoneProject" />
          <div className="layer">
            <h3>Capstone Project</h3>
            <p>
              This is the captone project which I developed during web
              development bootcamp and it demonstrate how postgre works with
              javascript it shows CRUD operation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyWork;
