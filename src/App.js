import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./HomePage/NavBar/NavBar";
import HomePage from "./HomePage/HomePage";
import "./App.scss";
import Contact from "./ContactPage/Contact";
import BlogPlaceholder from "./Blog/BlogPlaceholder";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact strict path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={BlogPlaceholder} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
