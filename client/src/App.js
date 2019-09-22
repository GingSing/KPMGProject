import React, { Component } from "react";
import "./App.css";
import { Overlay } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      overlay: false,
      loading: true,
      data: {}
    };
  }

  handleClick() {
    this.setState({ overlay: !this.state.overlay });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Hi</label>
          <input></input>
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </form>
        {this.state.overlay ? (
          <Overlay loading={this.state.loading} handleClick={this.handleClick}>
            <p data={this.state.data}>Hi</p>
          </Overlay>
        ) : null}
      </div>
    );
  }
}

export default App;
