import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
