import React from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default class PostTable extends React.Component{

    render() {
      const toViewPostPage = {
                          pathname: "/viewpost/" + this.props.post_ID,
                          state: {
                            classId: this.props.classId,
                            classTitle: this.props.classTitle,
                            classDescription: this.props.classDescription
                          }
                        }
        return(
            <div>

                <Table striped bordered hover>
                <tbody>
                    <tr>
                      <th>Post ID</th>
                      <th>Post Title</th>
                      <th>Notes</th>
                    </tr>
                <tr>
                    <td>{this.props.post_ID}</td>
                  <td><Link to={toViewPostPage}>{this.props.post_Title}</Link></td>
                  <td>{this.props.post_note}</td>
        
                </tr>
                </tbody>
                </Table>
            </div>
        );

    }
}
