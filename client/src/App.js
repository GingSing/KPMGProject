import React, { Component } from "react";
import "./App.css";
import { Overlay } from "./components";
import { EventEmitter } from "events";
import { Switch, Route } from "react-router-dom";
import { Home, Completed } from "./pages";

class App extends Component {
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
