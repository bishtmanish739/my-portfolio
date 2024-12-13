import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Sight Connect Mobile App",
      description: "Developed REST APIs In Spring boot and integrated them with mobile app that helps users diagnose eye diseases.",
      link: "https://play.google.com/store/apps/details?id=com.healthconnect.sightconnect",
    },
    {
      name: "Cost of Care App",
      description: "Contributed to the development of an app providing detailed inpatient and outpatient cost estimates.",
      link: "https://summerofcode.withgoogle.com/archive/2021/projects/5162968043487232",
    },
    {
      name: "Dream Team Prediction Mobile Application",
      description: "A user friendly data driven mobile based application that shows user expert suggested team & IPL stats. ",
      link: "#",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 py-3" key={index}>
            <div className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
