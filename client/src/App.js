import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, Completed } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      overlay: false,
      loading: false
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
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/completed" component={Completed} />
        </Switch>
      </div>
    );
  }
}

export default App;
