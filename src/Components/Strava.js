import "../styles/Strava.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Strava = () => {
  // Smooth scrolling effect
  useEffect(() => {
    const stravaLink = document.getElementById("nav-strava");
    const stravaSection = document.getElementById("strava");

    if (stravaLink && stravaSection) {
      stravaLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        stravaSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      });
    }

    return () => {
      if (stravaLink) {
        stravaLink.removeEventListener("click", () => {}); // Cleanup the event listener
      }
    };
  }, []);

  // Intersection Observer for animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div>
      <hr id="strava" style={{ marginBottom: "2rem" }} className="divider" />
      <div
        ref={ref}
        className={`strava-section ${inView ? "visible" : "hidden"}`}
      >
        <div>
          <h2 className="strava-section-title">{"What have I been up to?"}</h2>
          <p className="strava-section-content">
            {
              "Currently training for the 2026 Austin Marathon! Add me on Strava and keep me accountable!"
            }
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 0 2rem",
          }}
        >
          <div
            style={{
              paddingTop: "-5px",
              paddingBottom: "5px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Strava Activity Summary"
              height="156"
              width="310"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              src="https://www.strava.com/athletes/131269143/activity-summary/ea9514edb8c2cea12f47943444a14cc3538e528d"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strava;
