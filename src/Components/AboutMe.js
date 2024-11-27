import "../styles/AboutMe.css";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const sections = [
    {
      title: "Hi, I’m Chenyi Wang!",
      content: `I am a third-year Computer Science student at the
                University of Texas at Austin, with a passion for software
                engineering, problem-solving, and lifelong learning. I thrive on
                building impactful software solutions that combine creativity and
                functionality.`,
    },
  ];

  return (
    <div id="about-me" className="aboutme-container">
      <p
        ref={titleRef}
        className={`aboutme-title ${titleInView ? "visible" : "hidden"}`}
      >
        About Me
      </p>
      <div className="aboutme-sections">
        {sections.map((section, index) => (
          <AboutMeSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

const AboutMeSection = ({ section }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`aboutme-section ${inView ? "visible" : "hidden"}`}
    >
      <h2 className="aboutme-section-title">{section.title}</h2>
      <p className="aboutme-section-content">{section.content}</p>
    </div>
  );
};

export default AboutMe;
