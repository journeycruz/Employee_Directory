import React, {Component} from 'react';
import { JsonToTable } from "react-json-to-table";
import "./style.css";
import { Table } from "react-bootstrap";

class EmployeeTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading: false
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=5000")
            .then((response) => response.json())
            .then((response) => this.setState({
                items: response.results,
                loading: true
            }));
    }

    render() {
        var { items, loading } = this.state;
        if (!loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
                )
            }
        }
};

export default EmployeeTable;