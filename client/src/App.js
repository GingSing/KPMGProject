import React, { Component } from "react";
import "./App.css";
import { Overlay } from "./components";
import { EventEmitter } from "events";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      loading: false,
      date_issued: "",
      file_number: "",
      case_type: "",
      index: "",
      applicant_name: "",
      applicant_self_represented: "",
      respondent_name: "",
      respondent_self_represented: "",
      tribunal_member: "",
      introduction: "",
      section_number: "",
      rule_number: "",
      hearing_format: "",
      issue_type: "",
      evidence_analysis: "",
      decision: "",
      claim_amount: "",
      reimburse_applicant: "",
      reimbursement_amount: "",

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
    console.log(`${name} = ${value}`);
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
        <h1>Court Order Template</h1>
        <div className="formWrapper">
          <form className="keyForm" onSubmit={this.handleSubmit}>
            <h2>General</h2>
            <div className="form-group">
              <label for="date_issued">Date Issued: </label>
              <input
                className="form-control"
                type="date"
                value={this.state.date_issued}
                id="date_issued"
                name="date_issued"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="file_number">File Number: </label>
              <input
                className="form-control"
                value={this.state.file_number}
                type="text"
                id="file_number"
                name="file_number"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="case_type">Case Type: </label>
              <select className="form-control" id="case_type" name="case_type" value={this.state.case_type} onChange={this.handleChange}>
                <option value="Small Claims">Small Claims</option>
                <option value="Strata">Strata</option>
              </select>
            </div>
            <div className="form-group">
              <label for="index">Index: </label>
              <input
                className="form-control"
                type="text"
                id="index"
                name="index"
                value={this.state.index} 
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="applicant_name">Applicant: </label>
              <input
                className="form-control"
                type="text"
                id="applicant_name"
                name="applicant_name"
                value={this.state.applicant_name} 
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="applicant_self_represented">
                Is the applicant self represented?{" "}
              </label>
              <select
                className="form-control"
                id="applicant_self_represented"
                name="applicant_self_represented"
                value={this.state.applicant_self_represented} 
                onChange={this.handleChange}
              >
                <option value="1">Yes</option>
                <option value="0" onclick="loadApplicantLawyerName()">
                  No
                </option>
              </select>
            </div>
            <div className="form-group">
              <label for="respondent_name">Respondent: </label>
              <input
                className="form-control"
                type="text"
                id="respondent_name"
                name="respondent_name"
                value={this.state.respondent_name} 
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="respondent_self_represented">
                Is the respondent self represented?{" "}
              </label>
              <select
                className="form-control"
                id="respondent_self_represented"
                name="respondent_self_represented"
                value={this.state.respondent_self_represented} 
                onChange={this.handleChange}
              >
                <option value="1">Yes</option>
                <option value="0" onclick="loadRespondentLawyerName()">
                  No
                </option>
              </select>
            </div>
            <div className="form-group">
              <label for="tribunal_member">Tribunal Member: </label>
              <input
                className="form-control"
                type="text"
                id="tribunal_member"
                name="tribunal_member"
                value={this.state.tribunal_member} 
                onChange={this.handleChange}
              />
            </div>
            <button
              className="btn btn-primary btn-lg active"
              type="submit"
              onClick={this.handleClick}
            >
              Create Template
            </button>
          </form>
        </div>
        {this.state.overlay ? (
          <Overlay loading={this.state.loading} handleClick={this.handleClick}>
            <div className="templateWrapper">
              <form className="templateForm">
                <p className="rightText">Date Issued: {this.state.date_issued}</p>
                <p className="rightText">File: {this.state.file_number}</p>
                <p className="rightText">Case: {this.state.case_type}</p>
                <p className="centerText">Civil Resolution Tribunal</p>
                <p className="centerText">Indexed as: {this.state.index}</p>

                <h2>Introduction</h2>
                <input
                  className="form-control"
                  type="text"
                  id="introduction"
                  name="introduction"
                />
                <h2>Jurisdiction and Procedure</h2>
                <div className="form-group">
                  <label for="section_number">Section #: </label>
                  <input
                    className="form-control"
                    type="number"
                    id="section_number"
                    name="section_number"
                  />
                  <label for="rule_number">Rule #: </label>
                  <input
                    className="form-control"
                    type="number"
                    id="rule_number"
                    name="rule_number"
                  />
                </div>
                <h2>Procedure</h2>
                <div className="form-group">
                  <label for="hearing_format">Format of Hearing: </label>
                  <select
                    className="form-control"
                    id="hearing_format"
                    name="hearing_format"
                  >
                    <option value="Written">Written</option>
                    <option value="Oral">Oral</option>
                  </select>
                </div>
                <h2>Issues</h2>
                <div className="form-group">
                  <label for="issue_type">
                    Is the issue in dispute for applicant's
                    withdrawal/dismissal?{" "}
                  </label>
                  <select
                    className="form-control"
                    id="issue_type"
                    name="issue_type"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <h2>Evidence and Analysis</h2>
                <input
                  className="form-control"
                  type="text"
                  id="evidence_analysis"
                  name="evidence_analysis"
                ></input>
                <h2>Orders</h2>
                <div className="form-group">
                  <label for="decision">Decision: </label>
                  <select
                    className="form-control"
                    id="issue_type"
                    name="issue_type"
                  >
                    <option value="1">Accepted</option>
                    <option value="0">Dismissed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="claim_amount">Claim Amount: </label>
                  <input
                    className="form-control"
                    type="number"
                    id="claim_amount"
                    name="claim_amount"
                  />
                </div>
                <div className="form-group">
                  <label for="reimburse_applicant">
                    Reimbursement to Applicant:{" "}
                  </label>
                  <select
                    className="form-control"
                    id="reimburse_applicant"
                    name="reimburse_applicant"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="reimbursement_amount">
                    Reimbursement Amount:{" "}
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="reimbursement_amount"
                    name="reimbursement_amount"
                  />
                </div>
                <button className="btn btn-primary btn-lg active" type="submit">
                  Create Form
                </button>
              </form>
            </div>
          </Overlay>
        ) : null}
      </div>
    );
  }
}

export default App;
