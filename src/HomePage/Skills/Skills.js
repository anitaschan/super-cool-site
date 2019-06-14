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
      <div className="wrapper">
        <div className="skills-intro">
          <h1>Some languages, tools and software I like:</h1>
          <div className="skills">
            {icons.map(icon => (
              <div key={icon} className={"icons " + icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
