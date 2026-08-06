import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p><a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Portfolio Template</a></p>
    </footer>
  );
}

export default Footer;