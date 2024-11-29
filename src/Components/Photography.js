import React, { useEffect, useState } from "react";
import "../styles/Photography.css"; // Ensure this is updated with the new styles
import Carousel from "react-slick"; // Import the carousel library

const Photography = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a fade-in effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`grad-portfolio-container ${isLoaded ? "fade-in" : ""}`}>
      <p className="grad-portfolio-title">Grad Portfolio</p>
      <Carousel />
      <hr className="divider" />
      <p className="description">
        I run a small gig for senior portraits. For inquiries and bookings,
        please email!
      </p>
    </div>
  );
};

export default Photography;
