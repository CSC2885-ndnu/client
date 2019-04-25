import React, { Component } from "react";
import { Button, CardBody } from "reactstrap";

import "./ClassTakenOnNoteFinder.css";

const Div = {
  backgroundColor: "#e4ebef"
};
const DivTable = {
  backgroundColor: "#FFFFFF"
};

class ClassTakenOnNoteFinder extends Component {
  state = {
    classData: []
  };

  componentDidMount() {
    //fetch("http://localhost:8080/seniorproject/getUserCourses/ + this.props.user.user_id")
    fetch("http://localhost:8080/seniorproject/getUserCourses/1")
      .then(data => data.json())
      .then(data => this.setState({ classData: data }));
  }

  render() {
    return (
      <div>
        <div className="Classcard float-right">
          <CardBody>
            <hr />
            <div className="Title">Classes Taken on NoteFinder</div>
            <hr />

            <table striped class="Dtable table-bordered" style={DivTable}>
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />

              <tr>
                <th>Course</th>
                <th>Title</th>
                <th>Status</th>
              </tr>

              {this.state.classData.map(item => {
                return (
                  <tbody>
                    <tr key={item.id}>
                      <td>{item.section}</td>
                      <td>{item.courseName}</td>
                      <td>{item.semester}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </CardBody>
        </div>
      </div>
    );
  }
}

export default ClassTakenOnNoteFinder;
