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

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Project.scss';

// Modal component
function ProjectModal({
    isOpen,
    onClose,
    title,
    description
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
}) {
    if (!isOpen) return null;

    const dummyImages = [
        athenaz,
        qrmeet,
        exam
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        beforeChange: () => {
            const slides = document.querySelectorAll(".slick-slide img");
            slides.forEach((el) => {
                const img = el as HTMLImageElement;
                img.classList.remove("box-transition");
                void img.offsetWidth;  // Trigger reflow safely
                img.classList.add("box-transition");
            });
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <Slider {...settings}>
                    {dummyImages.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="flip-image"
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </div>
                    ))}
                </Slider>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function Project() {
    const [selectedProject, setSelectedProject] = useState<{ title: string, description: string } | null>(null);

    const projects = [
        {
            title: "Athenaz",
            description: "Athenaz is an HRIS (Human Resource Information System) application used by companies under the Armour Group. It manages various employee-related operations such as scheduling, turnover tracking, attendance history, contract management, and more. The system is powered by Laravel and CodeIgniter 3 as its backend technologies.",
            image: athenaz
        },
        {
            title: "Qrmeet",
            description: "Qrmeet is a meeting attendance management system that handles scheduling, meeting room booking, and participant management. Attendees check in by scanning a pre-generated QR code specific to each meeting. The system is built using CodeIgniter 3 and utilizes an Oracle database for data management.",
            image: qrmeet
        },
        {
            title: "SIMPUS : Sistem Manajemen Puskesmans",
            description: "SIMPUS is a health center management application designed to assist healthcare workers, particularly midwives, in conducting patient visits. Real-time data is captured and can be directly processed by the health center. The system uses Flutter for the mobile frontend, Laravel as the backend, and includes a web-based admin panel. MySQL is used for data storage.",
            image: simpus
        },
        {
            title: "Project Ideas",
            description: "Project Ideas is a platform built with Laravel 8 and MySQL that provides structured project concepts for developers. It helps them find inspiration and offers organized workflows, including recommended tech stacks tailored to each project idea.",
            image: project_ideas
        },
        {
            title: "Daksa",
            description: "Daksa is a web-based application designed for visually impaired users. It helps them discover accessible places nearby by providing clear icons and an enhanced map interface for easier navigation. The application is built using Laravel 10 and MySQL.",
            image: daksa
        },
        {
            title: "Hiperion : Approval Center",
            description: "Hiperion is an internal application developed for PT Berca Kawan Sejati, used by team leaders to approve various types of transactions such as customer visit changes, customer transfers, subordinate changes, and more. Initially built with CodeIgniter 3 as the backend, the application has been migrated to Fiber (Golang) in its latest version.",
            image: hiperion
        },
        {
            title: "School Profile",
            description: "This application is built using Laravel 8 and MySQL as the database. It serves as a school profile website as well as a student management system, including features for tracking tuition (SPP) billing and the complete history of student payments.",
            image: schoolprofile
        },
        {
            title: "Label Music",
            description: "This application is built using Laravel 11 and MySQL. It is used for managing employees and music talents, as well as maintaining the company profile. The system includes features such as email notifications for each submitted entry and listener analytics presented through visual charts.",
            image: labelmusic
        },
        {
            title: "Gery Warehouse",
            description: "This application is used for warehouse management at PT Terminal Teluk Lamong. Every item that enters or leaves the warehouse is recorded in the system to minimize the risk of untracked or lost inventory. The application is built using CodeIgniter 3 and utilizes an Oracle database.",
            image: gery
        },
        {
            title: "Exam Super Apps",
            description: "This web-based exam application supports four types of questions: multiple choice, complex multiple choice, matching, and essay. It includes an anti-cheating feature that detects when a participant switches tabs or exits the browser, triggering an alarm for the participant and sending an alert to the admin. The application is built using Laravel 11 and MySQL as the database.",
            image: exam
        }
    ];

    const openModal = (title: string, description: string) => {
        setSelectedProject({ title, description });
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project" onClick={() => openModal(project.title, project.description)}>
                        <a rel="noreferrer">
                            <img src={project.image} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a rel="noreferrer"><h2>{project.title}</h2></a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            <ProjectModal 
                isOpen={selectedProject !== null} 
                onClose={closeModal} 
                title={selectedProject?.title || ''} 
                description={selectedProject?.description || ''} 
            />
        </div>
    );
}

export default Project;
