import React from "react";
import "./WorkExperience.css";

function WorkExperience() {
  const experiences = [
    {
      title: "Specialist Programmer",
      company: "Infosys Limited",
      period: "Oct 2022 – Present",
      description:
        "Developed REST APIs for Sight Connect mobile app using Spring Boot. Integrated with the front-end using Flutter.",
    },
    {
      title: "Flutter and React Student Developer",
      company: "Google Summer of Code 2021 @LibreHealth",
      period: "May 2021 – Aug 2021",
      description:
        "Contributed to the development of the Cost of Care mobile app, helping users make informed healthcare decisions.",
    },
    {
      title: "Java Full-Stack Trainee",
      company: "Hashedin by Deloitte",
      period: "May 2022",
      description:
        "Worked on demo projects to enhance skills in Java, Spring Boot, Angular, and SQL.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <h3>{exp.title}</h3>
          <p><strong>{exp.company}</strong> | {exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
