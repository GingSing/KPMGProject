import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/Overlay.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const overlay = document.getElementById("overlay");

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    overlay.appendChild(this.el);
  }

  componentWillUnmount() {
    overlay.removeChild(this.el);
  }

  handleClick(e) {
    if (!this.node.contains(e.target)) {
      this.props.handleClick();
    }
  }
  render() {
    return ReactDOM.createPortal(
      <div className="overlayWrapper" onClick={this.handleClick}>
        <div
          className="overlay"
          ref={node => {
            this.node = node;
          }}
        >
          {this.props.loading ? (
            <Loader type="Puff" color="#FFF" height={100} width={100} />
          ) : (
            this.props.children
          )}
        </div>
      </div>,
      this.el
    );
  }
}

export default Overlay;
