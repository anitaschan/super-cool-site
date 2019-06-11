import React from "react";
import { render } from "react-dom";
import Heading from "./HomePage/Heading/Heading";
import NavBar from "./HomePage/NavBar/NavBar";
import Skills from "./HomePage/Skills/Skills";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Heading />
        <Skills />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
