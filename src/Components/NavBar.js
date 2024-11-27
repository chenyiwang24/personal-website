import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import logo from "./../assets/Logos/mainLogo.png";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 100 ? "scrolled" : ""}`}>
      <ul className="nav-menu">
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
          onClick={() => {
            const element = document.getElementById("home-top");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
        <li className="nav-item">
          <a href="#about-me" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience" className="nav-link">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="#about-me-section" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
