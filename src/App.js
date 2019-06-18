import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import NavBar from "./HomePage/NavBar/NavBar";
import HomePage from "./HomePage/HomePage";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact strict path="/" component={HomePage} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
