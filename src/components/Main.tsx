import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import photo from '../assets/images/my-photos.jpeg';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-4xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={photo}
            height="145"
            width="200"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/reynaldi1912" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rynld/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Reynaldi Ramadhani Eka Purnomoo</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/reynaldi1912" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rynld/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;