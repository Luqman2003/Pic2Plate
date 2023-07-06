import "./StyleSheets/Timeline.css";
import timelineElements from "../timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./StyleSheets/Timeline.css";

import "./StyleSheets/FeaturesContainer.css";

import "aos/dist/aos.css";

const Timeline = () => {
  const designStyle = { background: "#3658c1" };

  return (
    <div className="timeline-container">
      <div className="feature-title-container">
        <h1 className="feature-section-title">Timeline</h1>
      </div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              className="custom-timeline-element"
              contentStyle={{
                background: "#17141d",
                borderRadius: "10px",
                boxShadow: "-1rem 0 3rem #000",
                color: "#ffffff",
              }}
              iconStyle={designStyle}
              key={element.id}
              date={element.date}
              dateClassName="date"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
