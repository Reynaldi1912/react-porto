import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Berca Kawan Sejati (Tobacco Product Distributor), Malang</h4>
            <p>
              I am responsible for managing multiple applications used by several companies, 
              including the main company. I develop APIs to be consumed by frontend and mobile developers, 
              reduce bugs across various maintained applications, 
              and perform data correction through both automated generation and manual input. 
              I optimize database queries for fast and efficient access, apply Clean Code principles 
              to ensure the codebase is easily readable by other developers, 
              and conduct feature analysis prior to implementation.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer - internship</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Terminal Teluk Lamong (Pelindo), Surabaya</h4>
            <p>
              I developed custom warehouse management applications tailored to business needs, 
              rebuilt a QR code-based meeting scheduling application for improved functionality, 
              and created an intern attendance system to simplify tracking. 
              I also conducted system requirement analyses to ensure efficient and scalable feature development, 
              while consistently focusing on delivering user-friendly applications with intuitive UI/UX designs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Information Technologgy</h3>
            <h4 className="vertical-timeline-element-subtitle">State Polytechnic Of Malang, Malang</h4>
            <p>
              I am a student majoring in Application Development, 
              actively involved in various activities including the departmental student association and the Informatics Research Workshop community (WRI). 
              I also serve as a mentor in the Mobile Development miniclass.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;