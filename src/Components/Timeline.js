import "../styles/Timeline.css";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const timelineEvents = [
    {
      date: "August 2025 - November 2025",
      title: "Software Development Engineer Intern",
      description: "Incoming Software Development Engineer (SDE) Intern - Fall 2025",
      company: "Amazon",
      image: require("./../assets/Logos/amazon.png"),
    },
    {
      date: "June 2025 - August 2025",
      title: "Software Engineer Intern",
      description: "Financial Services Technology",
      company: "Capital One",
      image: require("./../assets/Logos/capitalOne.png"),
    },
    {
      date: "May 2024 - August 2024",
      title: "Software Developer Intern",
      description: "Job Board and Talent Acquisition",
      company: "Paycom",
      image: require("./../assets/Logos/paycom.png"),
    },
    {
      date: "March 2023 - Present",
      title: "Program Ambassador",
      description:
        "Engaged with prospective students as a representative of UTCS",
      company: "UT Austin, Department of Computer Science",
      image: require("./../assets/Logos/ambassadors.png"),
    },
    {
      date: "February 2023 - Present",
      title: "Pod Mentor",
      description:
        "Weekly seminars and academic/career guidance for cohort of ~25 first-year CS students",
      company: "UT Austin, Department of Computer Science",
      image: require("./../assets/Logos/utcs.png"),
    },
  ];

  return (
    <div id="experience" className="timeline-container">
      <p
        ref={titleRef}
        className={`timeline-title ${titleInView ? "visible" : "hidden"}`}
      >
        Experience
      </p>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const TimelineEvent = ({ event }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div className="outside-container">
      <div
        ref={ref}
        className={`timeline-event ${inView ? "visible" : "hidden"}`}
      >
        {/* Image */}
        <div className="timeline-image-container">
          <img
            src={event.image}
            alt={event.title}
            className="timeline-event-image"
          />
        </div>

        {/* Text with Date */}
        <div className="timeline-text-container">
          <div className="timeline-date">{event.date}</div>
          <h2 className="timeline-event-title">{event.title}</h2>
          <p className="timeline-company">{event.company}</p>{" "}
          {/* New company field */}
          <p className="timeline-description">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
