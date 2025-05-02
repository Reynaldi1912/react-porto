import React, { useState } from "react";
import Slider from "react-slick";

import athenaz from '../assets/images/projects/athenaz.png';
import simpus from '../assets/images/projects/simpus-mobile.png';
import labelmusic from '../assets/images/projects/labelmusic.png';
import schoolprofile from '../assets/images/projects/schoolprofile.png';
import hiperion from '../assets/images/projects/hiperion.png';
import project_ideas from '../assets/images/projects/project-ideas.png';
import daksa from '../assets/images/projects/daksa.png';
import qrmeet from '../assets/images/projects/qrmeet.png';
import exam from '../assets/images/projects/exam.png';
import gery from '../assets/images/mock10.png';
import dashboard from '../assets/images/projects/simpus/dashboard.png';
import error from '../assets/images/projects/simpus/error.png';
import loginPage from '../assets/images/projects/simpus/Login Page.png';
import exception from '../assets/images/projects/simpus/Exception Menu.png';
import inputKunjungan from '../assets/images/projects/simpus/Input Kunjungan.png';
import signup from '../assets/images/projects/ideProyek/01 - Sign Up.png';
import landingPage from '../assets/images/projects/ideProyek/03 - Landing Page.png';
import homepage from '../assets/images/projects/ideProyek/04 - Homepage.png';
import ide1 from '../assets/images/projects/ideProyek/05 - Detail Ide 1.png';
import ide2 from '../assets/images/projects/ideProyek/05 - Detail Ide 2.png';
import ide3 from '../assets/images/projects/ideProyek/05 - Detail Ide 3.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Project.scss';
import ProjectModal from "./ProjectModal";

const projects = [
    {
        title: "Athenaz",
        description: "Athenaz is an HRIS (Human Resource Information System) application used by companies under the Armour Group. It manages various employee-related operations such as scheduling, turnover tracking, attendance history, contract management, and more. The system is powered by Laravel and CodeIgniter 3 as its backend technologies.",
        images: [athenaz, athenaz, athenaz],
        image_title: athenaz,
        role : 'Backend Developer',
        description_modal: [
            'HRIS for employee management',
            'Features include scheduling, turnover tracking, and contract management',
            'Powered by Laravel and CodeIgniter 3'
        ],
        stack: ['Laravel', 'CodeIgniter 3', 'MySQL']
    },
    {
        title: "Qrmeet",
        description: "Qrmeet is a meeting attendance management system that handles scheduling, meeting room booking, and participant management. Attendees check in by scanning a pre-generated QR code specific to each meeting. The system is built using CodeIgniter 3 and utilizes an Oracle database for data management.",
        images: [qrmeet, simpus, project_ideas],
        image_title: qrmeet,
        role : 'Fullstack Developer',
        description_modal: [
            'Attendance management system for meetings',
            'QR code check-ins for attendees',
            'Built with CodeIgniter 3 and Oracle database'
        ],
        stack: ['CodeIgniter 3', 'Oracle']
    },
    {
        title: "SIMPUS : Sistem Manajemen Puskesmas",
        description: "SIMPUS is a health center management application designed to assist healthcare workers, particularly midwives, in conducting patient visits. Real-time data is captured and can be directly processed by the health center. The system uses Flutter for the mobile frontend, Laravel as the backend, and includes a web-based admin panel. MySQL is used for data storage.",
        images: [simpus, dashboard, error , loginPage , inputKunjungan , exception],
        image_title: simpus,
        role : 'Mobile & Web Developer',
        description_modal: [
            'Health center management system',
            'Real-time data capture and processing',
            'Frontend built with Flutter and backend with Laravel'
        ],
        stack: ['Flutter', 'Laravel', 'MySQL']
    },
    {
        title: "Project Ideas",
        description: "Project Ideas is a platform built with Laravel 8 and MySQL that provides structured project concepts for developers. It helps them find inspiration and offers organized workflows, including recommended tech stacks tailored to each project idea.",
        images: [project_ideas, landingPage, signup , homepage , ide1 , ide2,ide3],
        image_title: project_ideas,
        role : 'Fullstack Developer',
        description_modal: [
            'Platform for structured project concepts',
            'Helps developers find inspiration',
            'Built with Laravel 8 and MySQL'
        ],
        stack: ['Laravel 8', 'MySQL']
    },
    {
        title: "Daksa",
        description: "Daksa is a web-based application designed for visually impaired users. It helps them discover accessible places nearby by providing clear icons and an enhanced map interface for easier navigation. The application is built using Laravel 10 and MySQL.",
        images: [daksa, gery, labelmusic],
        image_title: daksa,
        role : 'Fullstack Developer',
        description_modal: [
            'Web-based application for visually impaired users',
            'Helps discover accessible places with enhanced map features',
            'Built using Laravel 10 and MySQL'
        ],
        stack: ['Laravel 10', 'MySQL']
    },
    {
        title: "Hiperion : Approval Center",
        description: "Hiperion is an internal application developed for PT Berca Kawan Sejati, used by team leaders to approve various types of transactions such as customer visit changes, customer transfers, subordinate changes, and more. Initially built with CodeIgniter 3 as the backend, the application has been migrated to Fiber (Golang) in its latest version.",
        images: [hiperion, project_ideas, schoolprofile],
        image_title: hiperion,
        role : 'Backend Developer',
        description_modal: [
            'Internal approval system for team leaders',
            'Supports various types of transactions such as customer visit changes',
            'Migrated from CodeIgniter 3 to Fiber (Golang)'
        ],
        stack: ['Fiber (Golang)', 'CodeIgniter 3']
    },
    {
        title: "School Profile",
        description: "This application is built using Laravel 8 and MySQL as the database. It serves as a school profile website as well as a student management system, including features for tracking tuition (SPP) billing and the complete history of student payments.",
        images: [schoolprofile, daksa, exam],
        image_title: schoolprofile,
        role : 'Fullstack Developer',
        description_modal: [
            'School profile and student management system',
            'Tracks tuition (SPP) billing and student payment history',
            'Built using Laravel 8 and MySQL'
        ],
        stack: ['Laravel 8', 'MySQL']
    },
    {
        title: "Label Music",
        description: "This application is built using Laravel 11 and MySQL. It is used for managing employees and music talents, as well as maintaining the company profile. The system includes features such as email notifications for each submitted entry and listener analytics presented through visual charts.",
        images: [labelmusic, hiperion, athenaz],
        image_title: labelmusic,
        role : 'Fullstack Developer',
        description_modal: [
            'Manage employees and music talents',
            'Features include email notifications and listener analytics',
            'Built with Laravel 11 and MySQL'
        ],
        stack: ['Laravel 11', 'MySQL']
    },
    {
        title: "Gery Warehouse",
        description: "This application is used for warehouse management at PT Terminal Teluk Lamong. Every item that enters or leaves the warehouse is recorded in the system to minimize the risk of untracked or lost inventory. The application is built using CodeIgniter 3 and utilizes an Oracle database.",
        images: [gery, daksa, qrmeet],
        image_title: gery,
        role : 'Fullstack Developer',
        description_modal: [
            'Warehouse management system to track inventory',
            'Minimizes the risk of lost or untracked inventory',
            'Built with CodeIgniter 3 and Oracle database'
        ],
        stack: ['CodeIgniter 3', 'Oracle']
    },
    {
        title: "Exam Super Apps",
        description: "This web-based exam application supports four types of questions: multiple choice, complex multiple choice, matching, and essay. It includes an anti-cheating feature that detects when a participant switches tabs or exits the browser, triggering an alarm for the participant and sending an alert to the admin. The application is built with Laravel 11 and MySQL as the database.",
        images: [exam, gery, labelmusic],
        image_title: exam,
        role : 'Fullstack Developer',
        description_modal: [
            'Web-based exam system with anti-cheating features',
            'Supports multiple question types like multiple choice and essay',
            'Built with Laravel 11 and MySQL'
        ],
        stack: ['Laravel 11', 'MySQL']
    }
];

function Project() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const openModal = (project: any) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project" onClick={() => openModal(project)}>
                        <a rel="noreferrer">
                            <img src={project.image_title} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a rel="noreferrer"><h2>{project.title}</h2></a>
                        <a rel="noreferrer"> 
                            <span><strong>Role: </strong>{project.role}</span>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    isOpen={true}
                    onClose={closeModal}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    stack={selectedProject.stack}
                    images={selectedProject.images}
                    role={selectedProject.role}
                />
            )}
        </div>
    );
}

export default Project;
