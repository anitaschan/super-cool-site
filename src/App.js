import React from "react";
import { render } from "react-dom";
import Heading from './Heading/Heading';

class App extends React.Component {
  render() {
    return (
      <div>
        <Heading />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));