// src/data/projects.js

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

export const projects_data = [
  {
    title: "Athenaz",
    description:
      "Athenaz is an HRIS (Human Resource Information System) application used by companies under the Armour Group. It manages various employee-related operations such as scheduling, turnover tracking, attendance history, contract management, and more. The system is powered by Laravel and CodeIgniter 3 as its backend technologies.",
    images: [athenaz, athenaz, athenaz],
    image_title: athenaz,
    role: 'Backend Developer',
    description_modal: '',
    stack: ['Laravel', 'CodeIgniter 3', 'MySQL']
  },
  {
    title: "Qrmeet",
    description:
      "Qrmeet is a meeting attendance management system that handles scheduling, meeting room booking, and participant management. Attendees check in by scanning a pre-generated QR code specific to each meeting. The system is built using CodeIgniter 3 and utilizes an Oracle database for data management.",
    images: [qrmeet, simpus, project_ideas],
    image_title: qrmeet,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['CodeIgniter 3', 'Oracle']
  },
  {
    title: "SIMPUS : Sistem Manajemen Puskesmas",
    description:
      "SIMPUS is a health center management application designed to assist healthcare workers, particularly midwives, in conducting patient visits. Real-time data is captured and can be directly processed by the health center. The system uses Flutter for the mobile frontend, Laravel as the backend, and includes a web-based admin panel. MySQL is used for data storage.",
    images: [simpus, dashboard, error, loginPage, inputKunjungan, exception],
    image_title: simpus,
    role: 'Mobile & Web Developer',
    description_modal: '',
    stack: ['Flutter', 'Laravel', 'MySQL']
  },
  {
    title: "Project Ideas",
    description:
      "Project Ideas is a platform built with Laravel 8 and MySQL that provides structured project concepts for developers. It helps them find inspiration and offers organized workflows, including recommended tech stacks tailored to each project idea.",
    images: [project_ideas, landingPage, signup, homepage, ide1, ide2, ide3],
    image_title: project_ideas,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['Laravel 8', 'MySQL']
  },
  {
    title: "Daksa",
    description:
      "Daksa is a web-based application designed for visually impaired users. It helps them discover accessible places nearby by providing clear icons and an enhanced map interface for easier navigation. The application is built using Laravel 10 and MySQL.",
    images: [daksa, gery, labelmusic],
    image_title: daksa,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['Laravel 10', 'MySQL']
  },
  {
    title: "Hiperion : Approval Center",
    description:
      "Hiperion is an internal application developed for PT Berca Kawan Sejati, used by team leaders to approve various types of transactions such as customer visit changes, customer transfers, subordinate changes, and more. Initially built with CodeIgniter 3 as the backend, the application has been migrated to Fiber (Golang) in its latest version.",
    images: [hiperion, project_ideas, schoolprofile],
    image_title: hiperion,
    role: 'Backend Developer',
    description_modal: '',
    stack: ['Fiber (Golang)', 'CodeIgniter 3']
  },
  {
    title: "School Profile",
    description:
      "This application is built using Laravel 8 and MySQL as the database. It serves as a school profile website as well as a student management system, including features for tracking tuition (SPP) billing and the complete history of student payments.",
    images: [schoolprofile, daksa, exam],
    image_title: schoolprofile,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['Laravel 8', 'MySQL']
  },
  {
    title: "Label Music",
    description:
      "This application is built using Laravel 11 and MySQL. It is used for managing employees and music talents, as well as maintaining the company profile. The system includes features such as email notifications for each submitted entry and listener analytics presented through visual charts.",
    images: [labelmusic, hiperion, athenaz],
    image_title: labelmusic,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['Laravel 11', 'MySQL']
  },
  {
    title: "Gery Warehouse",
    description:
      "This application is used for warehouse management at PT Terminal Teluk Lamong. Every item that enters or leaves the warehouse is recorded in the system to minimize the risk of untracked or lost inventory. The application is built using CodeIgniter 3 and utilizes an Oracle database.",
    images: [gery, daksa, qrmeet],
    image_title: gery,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['CodeIgniter 3', 'Oracle']
  },
  {
    title: "Exam Super Apps",
    description:
      "This web-based exam application supports four types of questions: multiple choice, complex multiple choice, matching, and essay. It includes an anti-cheating feature that detects when a participant switches tabs or exits the browser, triggering an alarm for the participant and sending an alert to the admin. The application is built with Laravel 11 and MySQL as the database.",
    images: [exam, gery, labelmusic],
    image_title: exam,
    role: 'Fullstack Developer',
    description_modal: '',
    stack: ['Laravel 11', 'MySQL']
  }
];
