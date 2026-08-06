import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/AboutMe.scss';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

function AboutMe() {
    return (
    <div className="container" id="AboutMe">
        <div className="skills-container">
            <h1>About Me</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>What I offer</h3>
                    <p>• 6+ Years in Roblox Scripting<br/>• Customizable code based on customer needs<br/>• Readable and optimized code for scalability<br/><br/>My specialty is doing <i>(but not limited to!)</i> Gun Systems, therefore I provide the cheapest price for it.</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Availability</h3>
                    <p>Currently only accepting <b>small to medium or slightly large</b> commissions only. I am <b>not</b> available for full-time positions or long term work.</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Pricing & Payment</h3>
                    <p>I offer the best and fairest price to my customers based on the scope and complexity of the commission. I accept payments via PayPal or Robux (DevEx rates).<br/><br/><i><b>Minimum price: 5$ OR R$1000</b></i></p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutMe;