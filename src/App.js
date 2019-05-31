import React from "react";
import { render } from "react-dom";
import Heading from "./Heading//Heading";
import NavBar from "./NavBar/NavBar";


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Heading />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
