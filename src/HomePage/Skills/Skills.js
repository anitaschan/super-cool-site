import React from "react";
import "./Skills.scss";

const icons = [
  "icons devicon-github-plain",
  "icons devicon-html5-plain",
  "icons devicon-javascript-plain",
  "icons devicon-react-original",
  "icons devicon-webpack-plain",
  "icons devicon-css3-plain",
  "icons devicon-gitlab-plain",
  "icons devicon-sass-original"
];

const Skills = () => {
  return (
    <div className="skills">
      {icons.map(icon => (
        <div key={icon} className={icon} />
      ))}
    </div>
  );
};

export default Skills;
