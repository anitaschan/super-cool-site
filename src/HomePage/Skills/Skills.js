import React from "react";
import "./Skills.scss";

const icons = [
  "devicon-github-plain",
  "devicon-html5-plain",
  "devicon-javascript-plain",
  "devicon-react-original",
  "devicon-webpack-plain",
  "devicon-css3-plain",
  "devicon-gitlab-plain",
  "devicon-sass-original",
  "devicon-visualstudio-plain"
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills">
        <h1 className="skills__header">
          Some languages, tools and software I like:
        </h1>
        <div className="skills__icons">
          {icons.map(icon => (
            <div key={icon} className={"icon " + icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
