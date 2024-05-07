import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = ({ timelineData }) => {
  return (
    <div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work text-white font-semibold "
            date={item.date}
            icon={<img src={item.icon} alt="Icon" />}
            iconStyle={{ background: "#000" }}
          >
            <h3 className="vertical-timeline-element-title text-black">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-indigo-700">
              {item.subtitle}
            </h4>
            <p className="text-black italic">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
