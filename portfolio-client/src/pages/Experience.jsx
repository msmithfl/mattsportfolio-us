import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Broward College</h3>
          <h4>
            <i>Coconut Creek, Florida</i>
          </h4>
          <p>Associate's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Florida International University
          </h3>
          <h4>
            <i>Miami, Florida</i>
          </h4>
          <p>Bachelor's Degree in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Nov. 2022 - Jan. 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Game Development Intern, Augminted Labs
          </h3>
          <h4>
            <i>Remote</i>
          </h4>
          <p>
            QA testing for Rooftop Rampage, a mobile video game developed in
            Unity (C#). This was an endless runner game developed for the Kaiju
            Kingz metaverse project. Reported playtesting bugs with detailed
            feedback and attended SCRUM meetings with the team
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept. 2023 - Dec. 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Engagement Intern, Pérez Art Museum Miami
          </h3>
          <h4>
            <i>Miami, Florida</i>
          </h4>
          <p>
            Developed and deployed a web-based, multiplayer game using React and
            WebSockets. Attended weekly standup meetings (on-site and online)
            with the Digital Engagement team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
