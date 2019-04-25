import React, { Component } from "react";
import ReactTable from "react-table";
import BootstrapTable from "react-bootstrap-table-next";

const Div = {
  backgroundColor: "#e4ebef"
};
const DivTable = {
  backgroundColor: "#FFFFFF"
};

class RecentSubmission extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/seniorproject/landingpage/3")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }

  render() {
    return (
      <div style={Div}>
        <table className="table table-bordered" style={DivTable}>
          <th style={{ color: "white", background: "#00274c" }} />
          <th
            style={{
              color: "white",
              background: "#00274c",
              textAlign: "center"
            }}
          >
            Recent Note Submissions
          </th>
          <th style={{ color: "white", background: "#00274c" }} />

          <tr>
            <th>Class Name</th>
            <th>Post Title</th>
            <th>Date of Submission</th>
          </tr>
          {this.state.postData.map(post => {
            return (
              <tr key={post.id}>
                <td>{post.submission_course_name}</td>
                <td>{post.submission_title}</td>
                <td>{post.submission_date}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default RecentSubmission;
