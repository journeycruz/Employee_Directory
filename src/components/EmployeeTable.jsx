import React, { Component } from 'react';
import { Table } from "react-bootstrap";


class EmployeeTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading: false,
        }
        this.onSort = this.onSort.bind(this)
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
            .then((response) => response.json())
            .then((response) => this.setState({
                items: response.results,
                loading: true,
            }));
    }

    onSort(event, sortKey) {
        const items = this.state.items;
        switch (sortKey) {
            case "name.lastAsc": 
                items.sort((a, b) => a.name.last.localeCompare(b.name.last))
                break;
            default:
                break;
            case "name.lastDesc":
                items.sort((b, a) => a.name.last.localeCompare(b.name.last))
                break;
            case "emailAsc":
                items.sort((a, b) => a.email.localeCompare(b.email))
                break;
            case "emailDesc":
                items.sort((b, a) => a.email.localeCompare(b.email))
                break;
        }
        this.setState({items})
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
                <div className="container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Picture</th>
                            <th>ID #</th>
                            <th>Name<button id="arrow" onClick={e => this.onSort(e, 'name.lastAsc')}><i className="fas fa-sort-amount-down-alt"></i></button><button id="arrow" onClick={e => this.onSort(e, 'name.lastDesc')}><i className="fas fa-sort-up"></i></button></th>
                            <th>Email<button id="arrow" onClick={e => this.onSort(e, 'emailAsc')}><i className="fas fa-sort-down"></i></button><button id="arrow" onClick={e => this.onSort(e, 'emailDesc')}><i className="fas fa-sort-up"></i></button></th>
                            <th>Location (City, State)</th>
                            </tr>
                        </thead>
                        {items.map(item => (
                            <tbody>
                                <tr>
                                    <td><img src={item.picture.medium} alt={item.name.first} /></td>
                                    <td>{item.location.street.number}</td>
                                    <td>{item.name.first}&nbsp;{item.name.last}</td>
                                    <td>{item.email}</td>
                                    <td>{item.location.city},&nbsp;{item.location.state}</td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
                )
            }
        }
};

export default EmployeeTable;