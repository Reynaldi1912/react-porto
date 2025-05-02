import React, { useState } from "react";
import Slider from "react-slick";

import { projects_data } from '../data/projects';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Project.scss';
import ProjectModal from "./ProjectModal";

const projects = projects_data;

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
