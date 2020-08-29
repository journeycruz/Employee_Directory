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
        // items.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        switch (sortKey) {
            case "name.first": 
                items.sort((a, b) => a.name.first.localeCompare(b.name.first))
            
                break;
        
            default:
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
                            <th onClick={e => this.onSort(e, 'name.first')}>Name</th>
                            <th>Email</th>
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