import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Carousel.css";
import amelie from "../assets/Seniors/amelie.jpg";
import amelie2 from "../assets/Seniors/amelie2.jpg";
import amelie3 from "../assets/Seniors/amelie3.jpg";
import amelie4 from "../assets/Seniors/amelie4.jpg";
import hookem from "../assets/Seniors/hookem.jpg";
import hookem2 from "../assets/Seniors/hookem2.jpg";
import julia from "../assets/Seniors/julia.jpg";
import kara from "../assets/Seniors/kara.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const isMobile = window.innerWidth <= 768; // Breakpoint for mobile screens
  const scrollPercentage = isMobile ? 50 : 33.333; // Adjust scroll percentage

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1, // Trigger when 10% of the title is visible
    triggerOnce: true, // Animate only once
  });

  const images = useMemo(
    () => [julia, amelie, hookem, amelie2, hookem2, amelie3, kara, amelie4],
    []
  );

  const extendedImages = [...images, ...images]; // Duplicate for seamless scrolling

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  // Preload all images on mount
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [images]);

  // Reset index for seamless looping
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length - 1);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, images.length]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div>
      {/* Anchor Point */}
      <div id="senior-portfolio" style={{ height: "30px" }}></div>

      {/* Title with scroll animation */}
      <div>
        <p
          ref={titleRef}
          style={{ fontFamily: "SF Pro", fontWeight: "400" }}
          className={`grad-portfolio-title ${
            titleInView ? "visible" : "hidden"
          }`}
        >
          Senior Portfolio
        </p>
      </div>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${
              (currentIndex % images.length) * scrollPercentage
            }%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {extendedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "5rem" }} className="divider" />
      <p className="description">
        Based in Austin, TX, I specialize in senior graduation portraits,
        professional headshots, and event photography, delivering high-quality
        and personalized visual storytelling for every occasion.
      </p>
      <p style={{ marginTop: "-1rem" }} className="description">
        For bookings and inquiries, please contact me via email.
      </p>
    </div>
  );
};

export default Carousel;
