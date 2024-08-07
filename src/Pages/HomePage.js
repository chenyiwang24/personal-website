import React, { useEffect, useState } from "react";
import "./HomePage.css";

import headShot from "./../Assets/Pictures/headshot.png";

import github from "./../Assets/Icons/githubIcon.png";
import githubHover from "./../Assets/Icons/githubHover.png";
import linkedin from "./../Assets/Icons/linkedinIcon.png";
import linkedinHover from "./../Assets/Icons/linkedinHover.png";
import leetcode from "./../Assets/Icons/leetcodeIcon.png";
import leetcodeHover from "./../Assets/Icons/leetcodeHover.png";
import email from "./../Assets/Icons/emailIcon.png";
import emailHover from "./../Assets/Icons/emailHover.png";

import SocialIcon from "../Components/SocialIcon";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlayZIndex, setOverlayZIndex] = useState(1000);

  useEffect(() => {
    // Set a timeout to add the fade-in class after the component mounts
    const overlayTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Adjust the timeout as needed

    // Set a timeout to add the fade-in class after the component mounts
    const zIndexTimer = setTimeout(() => {
      setOverlayZIndex(-1);
    }, 600); // Adjust the timeout as needed

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(zIndexTimer);
    };
  }, []);

  return (
    <div>
      <div
        className={`overlay ${isLoaded ? "fade-out" : ""}`}
        style={{ zIndex: overlayZIndex }}
      ></div>
      <div className="root-container">
        <div className="name-box-container">
          <div style={{ height: "70px" }}></div>
          <div className="middle-row">
            <NavBar />
            <div>
              <h1 className="name-text">
                Chenyi
                <br />
                Wang
              </h1>
              <h2 className="subtitle-text">Software Engineer</h2>
              <div className="icon-row">
                <SocialIcon
                  iconDefault={linkedin}
                  iconHover={linkedinHover}
                  link="https://www.linkedin.com/in/chenyiwang24/"
                  size="2.2vw"
                  margin="0.0vw"
                />
                <SocialIcon
                  iconDefault={github}
                  iconHover={githubHover}
                  link="https://github.com/chenyiwang24"
                  size="2vw"
                  margin="0.0vw"
                />
                <SocialIcon
                  iconDefault={leetcode}
                  iconHover={leetcodeHover}
                  link="https://leetcode.com/u/chenyiwang/"
                  size="1.9vw"
                  margin="0.2vw"
                />
                <SocialIcon
                  iconDefault={email}
                  iconHover={emailHover}
                  link="mailto:chenyi@utexas.edu"
                  size="1.9vw"
                  margin="0.0vw"
                />
              </div>
            </div>
            <img
              className="head-shot"
              src={headShot}
              alt="Chenyi Wang Headshot"
            ></img>
          </div>
        </div>
      </div>
      <h1>AWESOME!!!</h1>
      <h1>AWESOME!!!</h1>
      <h1>AWESOME!!!</h1>
      <h1>AWESOME!!!</h1>
      <h1>AWESOME!!!</h1>
    </div>
  );
};

export default HomePage;
