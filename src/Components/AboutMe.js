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
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const sections = [
    {
      title: "Hi, I’m Chenyi!",
      content: `I am a third-year Computer Science student at the
                University of Texas at Austin, with a passion for software
                engineering, problem-solving, and lifelong learning. I thrive on
                building impactful software solutions that combine creativity and
                functionality.`,
    },
    {
      title: "Weekly Marathon Training Progress",
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

      {/* Insert Strava embed if this is the "training for" section */}
      {section.title === "Weekly Marathon Training Progress" && (
        <div style={{ display: "flex", justifyContent: "center", margin: "3rem 0 2rem" }}>
          <div style={{ paddingTop: "-5px", paddingBottom: "5px", borderRadius: "12px", overflow: "hidden", boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.1)" }}>
            <iframe
              title="Strava Activity Summary"
              height="156"
              width="350"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              src="https://www.strava.com/athletes/131269143/activity-summary/ea9514edb8c2cea12f47943444a14cc3538e528d"
            ></iframe>
          </div>
        </div>
      )}

      <p className="aboutme-section-content">{section.content}</p>
      {section.title !== "Hi, I’m Chenyi!" && (
          <hr
          style={{ marginTop: "4rem", marginBottom: "0rem" }}
          className="divider"
        />
      )}
    </div>
  );
};

export default AboutMe;