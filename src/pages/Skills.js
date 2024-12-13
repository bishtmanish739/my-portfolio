import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Java",
    "C++",
    "Dart",
    "SQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Spring Boot",
    "Angular",
    "Flutter",
    "React"
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-3 py-3" key={index}>
            <div className="skill-card">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
