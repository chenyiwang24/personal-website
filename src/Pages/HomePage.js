import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";

import headShot from "./../assets/Pictures/headshot.png";

import github from "./../assets/Icons/githubIcon.png";
import githubHover from "./../assets/Icons/githubHover.png";
import linkedin from "./../assets/Icons/linkedinIcon.png";
import linkedinHover from "./../assets/Icons/linkedinHover.png";
import leetcode from "./../assets/Icons/leetcodeIcon.png";
import leetcodeHover from "./../assets/Icons/leetcodeHover.png";
import email from "./../assets/Icons/emailIcon.png";
import emailHover from "./../assets/Icons/emailHover.png";

import SocialIcon from "../components/SocialIcon";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";

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
      <div id="home-top" className="root-container">
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
                  margin="0.5vw"
                />
                <SocialIcon
                  iconDefault={email}
                  iconHover={emailHover}
                  link="mailto:chenyi@utexas.edu"
                  size="1.8vw"
                  margin="0.2vw"
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
      <AboutMe />
      <hr className="divider" />
      <Timeline />
    </div>
  );
};

export default HomePage;
