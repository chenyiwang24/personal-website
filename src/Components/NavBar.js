import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import logo from "./../assets/Logos/mainLogo.png";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll event listener to update scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target
    }
  };

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
          <a
            href="#about-me"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "about-me")}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#experience"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "experience")}
          >
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about-me-section"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "about-me-section")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
