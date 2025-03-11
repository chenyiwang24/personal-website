import "../styles/AboutMe.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutMe = () => {
  // Smooth scrolling effect for the About Me section
  useEffect(() => {
    const aboutMeLink = document.getElementById("nav-about-me");
    const aboutMeSection = document.getElementById("about-me");

    if (aboutMeLink && aboutMeSection) {
      aboutMeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        aboutMeSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to About Me section
      });
    }

    return () => {
      if (aboutMeLink) {
        aboutMeLink.removeEventListener("click", () => {}); // Cleanup the event listener
      }
    };
  }, []);

  // Intersection Observer for animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const content = {
    title: "Hi, I’m Chenyi!",
    content: `I am a third-year Computer Science student at the
              University of Texas at Austin, with a passion for software
              engineering, problem-solving, and lifelong learning. I thrive on
              building impactful software solutions that combine creativity and
              functionality.`,
  };

  return (
    <div>
      <div id="about-me" className="aboutme-container">
        <p
          ref={ref}
          className={`aboutme-title ${inView ? "visible" : "hidden"}`}
        >
          {"About Me"}
        </p>
        <div
          ref={ref}
          className={`aboutme-section ${inView ? "visible" : "hidden"}`}
        >
          <h2 className="aboutme-section-title">{content.title}</h2>
          <p className="aboutme-section-content">{content.content}</p>
        </div>
      </div>
      <hr
        ref={ref}
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
        className="divider"
      />
    </div>
  );
};

export default AboutMe;
