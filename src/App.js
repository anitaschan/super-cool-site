import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import NavBar from "./HomePage/NavBar/NavBar";
import HomePage from "./HomePage/HomePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route exact strict path="/about" component={AboutMe} />
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
