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
      loading: false,
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
        <div className="formWrapper">
          <form className="keyForm" onSubmit={this.handleSubmit}>
            <h2>General</h2>
            <div className="form-group">
              <label for="date_issued">Date Issued: </label>
              <input
                className="form-control"
                type="date"
                id="date_issued"
                name="date_issued"
              />
            </div>
            <div className="form-group">
              <label for="file_number">File Number: </label>
              <input
                className="form-control"
                type="text"
                id="file_number"
                name="file_number"
              />
            </div>
            <div className="form-group">
              <label for="case_type">Case Type: </label>
              <select className="form-control" id="case_type" name="case_type">
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
                size="40"
              />
            </div>
            <div className="form-group">
              <label for="applicant_name">Applicant: </label>
              <input
                className="form-control"
                type="text"
                id="applicant_name"
                name="applicant_name"
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
              />
            </div>
            <button type="submit">Create Template!</button>
          </form>
        </div>
        {this.state.overlay ? (
          <Overlay loading={this.state.loading} handleClick={this.handleClick}>
            <form>
              <h2>Introduction</h2>
              <p>Summary:</p>
              <input
                className="form-control"
                type="text"
                id="introduction"
                name="introduction"
              />

              <h2>Jurisdiction</h2>
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
                  Is the issue in dispute for applicant's withdrawal/dismissal?{" "}
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
              <p>Summary:</p>
              <textarea
                className="form-control"
                id="evidence_analysis"
                name="evidence_analysis"
              ></textarea>

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
                <label for="reimbursement_applicant">
                  Reimbursement to Applicant:{" "}
                </label>
                <select
                  className="form-control"
                  id="reimbursement_applicant"
                  name="reimbursement_applicant"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className="form-group">
                <label for="reimbursement_amount">Reimbursement Amount: </label>
                <input
                  className="form-control"
                  type="number"
                  id="reimbursement_amount"
                  name="reimbursement_amount"
                />
              </div>
            </form>
          </Overlay>
        ) : null}
      </div>
    );
  }
}

export default App;
