import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/reynaldi1912" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rynld/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>I'mm Reynaldi Ramadhani Eka Purnomo <a href="#" target="_blank" rel="noreferrer"></a></p>
      {/* <p>I'Am Reynaldi Ramadhani Eka Purnomo <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p> */}
    </footer>
  );
}

export default Footer;