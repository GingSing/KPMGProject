import React, { Component } from "react";
import "./App.css";
import { Overlay } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      overlay: true
    };
  }
  handleClick() {
    this.setState({ overlay: !this.state.overlay });
  }
  render() {
    return (
      <div>
        {this.state.overlay ? (
          <Overlay loading={true} handleClick={this.handleClick}>
            Hi
          </Overlay>
        ) : null}
      </div>
    );
  }
}

export default App;
