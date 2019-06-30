import React, { Fragment } from "react";
import Heading from "./Heading/Heading";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";

const HomePage = () => {
  return (
    <Fragment>
      <Heading />
      <AboutMe />
      <Skills />
    </Fragment>
  );
};

export default HomePage;
