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
  "devicon-sass-original"
];

const Skills = () => {
  return (
    <div className="wrapper">
      <div className="skills">
        {icons.map(icon => (
          <div key={icon} className={"icons " +icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
