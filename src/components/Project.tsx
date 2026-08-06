import React from "react";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.gif";
import mock06 from "../assets/images/mock06.jpg";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.mp4";
import mock10 from "../assets/images/mock10.mp4";
import "../assets/styles/Project.scss";

type ProjectMediaType = "image" | "video";

type ProjectItem = {
    href: string;
    title: string;
    description: string;
    mediaSrc: string;
    mediaType?: ProjectMediaType;
};

const projects: ProjectItem[] = [
    {
        href: "https://www.roblox.com/games/93989711685015/Guns-Mania",
        title: "Guns Mania",
        description:
            "RNG Based game, with full gun gameplay, entities, economy, progression system with little to no open source modules. Over 50K+ lines of code as well as being the sole developer of the game.",
        mediaSrc: mock10,
    },
    {
        href: "",
        title: "Trajectory",
        description: "A realistic FPS Shooter with a component style weapon attachment system. Full weapon mechanics and animations.",
        mediaSrc: mock09,
    },
    {
        href: "",
        title: "Simple Terrain Generation",
        description:
            "Using Fractional Brownian Motion to generate noise for the base terrain and using Roblox terrain API to generate the terrain itself.",
        mediaSrc: mock08,
    },
    {
        href: "",
        title: "Team Create XyRo",
        description: "Software that replicates your .lua or .luau files into roblox scripts and optionally replicates roblox scripts to .lua files!",
        mediaSrc: mock07,
    },
    {
        href: "",
        title: "The Eco Warriors",
        description:
            "A Game Jam project that was made in under a week. The game revolves around cleaning up garbage in exchange for points and upgrades.",
        mediaSrc: mock06,
    },
    {
        href: "https://www.byuh.edu/covid-19-case-management",
        title: "Core VFX Framework",
        description:
            "A fun little side project that I made to see the potential of a VFX framework. The VFX is not the main focus of the project, but rather the invisible code that makes it all work.",
        mediaSrc: mock05,
    },
    {
        href: "https://github.com/yujisatojr/multi-reg-analysis",
        title: "Grid Plot System",
        description:
            "A fun little task I did under a day to showcase a smooth grid plot system.",
        mediaSrc: mock04,
    },
];

function ProjectMedia({ mediaSrc, mediaType }: Pick<ProjectItem, "mediaSrc" | "mediaType">) {
    const isVideo = mediaType === "video" || /\.(mp4|webm|mov|m4v)$/i.test(mediaSrc);

    if (isVideo) {
        return (
            <video className="zoom project-media" autoPlay loop muted playsInline preload="metadata">
                <source src={mediaSrc} />
            </video>
        );
    }

    return <img src={mediaSrc} className="zoom project-media" alt="thumbnail" />;
}

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project" key={project.title}>
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <ProjectMedia mediaSrc={project.mediaSrc} mediaType={project.mediaType} />
                        </a>
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
