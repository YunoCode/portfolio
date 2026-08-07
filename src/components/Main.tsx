import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import iconpng from "../assets/images/icon.png";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={iconpng} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/YunoCode" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Yuno</h1>
          <p>Roblox Developer with <i><b>6+ Years Experience</b></i></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/YunoCode" target="_blank" rel="noreferrer"><GitHubIcon/></a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;