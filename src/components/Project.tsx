import React from "react";
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
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={athenaz} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Athenaz</h2></a>
                <p>Athenaz is an HRIS (Human Resource Information System) application used by companies under the Armour Group. It manages various employee-related operations such as scheduling, turnover tracking, attendance history, contract management, and more. The system is powered by Laravel and CodeIgniter 3 as its backend technologies.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={qrmeet} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Qrmeet</h2></a>
                <p>Qrmeet is a meeting attendance management system that handles scheduling, meeting room booking, and participant management. Attendees check in by scanning a pre-generated QR code specific to each meeting. The system is built using CodeIgniter 3 and utilizes an Oracle database for data management.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={simpus} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>SIMPUS : Sistem Manajemen Puskesmans</h2></a>
                <p>SIMPUS is a health center management application designed to assist healthcare workers, particularly midwives, in conducting patient visits. Real-time data is captured and can be directly processed by the health center. The system uses Flutter for the mobile frontend, Laravel as the backend, and includes a web-based admin panel. MySQL is used for data storage..</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={project_ideas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Project Ideas</h2></a>
                <p>Project Ideas is a platform built with Laravel 8 and MySQL that provides structured project concepts for developers. It helps them find inspiration and offers organized workflows, including recommended tech stacks tailored to each project idea.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={daksa} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Daksa</h2></a>
                <p>Daksa is a web-based application designed for visually impaired users. It helps them discover accessible places nearby by providing clear icons and an enhanced map interface for easier navigation. The application is built using Laravel 10 and MySQL.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={hiperion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Hiperion : Approval Center</h2></a>
                <p>Hiperion is an internal application developed for PT Berca Kawan Sejati, used by team leaders to approve various types of transactions such as customer visit changes, customer transfers, subordinate changes, and more. Initially built with CodeIgniter 3 as the backend, the application has been migrated to Fiber (Golang) in its latest version.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={schoolprofile} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>School Manajemen & School Profile : SMP Muhammadiyah 1 Malang</h2></a>
                <p>This application is built using Laravel 8 and MySQL as the database. It serves as a school profile website as well as a student management system, including features for tracking tuition (SPP) billing and the complete history of student payments.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={labelmusic} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Company Profile : Music Industries</h2></a>
                <p>This application is built using Laravel 11 and MySQL. It is used for managing employees and music talents, as well as maintaining the company profile. The system includes features such as email notifications for each submitted entry and listener analytics presented through visual charts.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={gery} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Gery Warehouse</h2></a>
                <p>This application is used for warehouse management at PT Terminal Teluk Lamong. Every item that enters or leaves the warehouse is recorded in the system to minimize the risk of untracked or lost inventory. The application is built using CodeIgniter 3 and utilizes an Oracle database.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={exam} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Exam Super Apps</h2></a>
                <p>This web-based exam application supports four types of questions: multiple choice, complex multiple choice, matching, and essay. It includes an anti-cheating feature that detects when a participant switches tabs or exits the browser, triggering an alarm for the participant and sending an alert to the admin. The application is built using Laravel 11 and MySQL as the database.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;