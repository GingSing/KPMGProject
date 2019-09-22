import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./css/Completed.css";

class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }

  render() {
    return (
      <div className="completed">
        {this.state.loading ? (
          <Loader type="Puff" color="#FFF" height={100} width={100} />
        ) : (
          <embed className="completedPDF" src="/pdf/test.pdf" />
        )}
      </div>
    );
  }
}

export default Completed;
