import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { css } from "emotion";

const arrow = css`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    outline: none
    cursor:pointer;
    overflow: hidden;      
`


class EmployeeTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading: false,
            search: '',
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

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
        
    }

    render() {
        var { items, loading } = this.state;
        if (!loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            let filteredEmployees = items.filter(
                (items) => {
                    return items.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; 
                }
            );
            return (
                <div className="container">
                    <form className="search">
                <div className="form-inline justify-content-center">
                    <label htmlFor="language" id="formLabel">Find Employee:&nbsp;</label>
                    <input
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type to start searching"
                    id="nameInput"
                    />&nbsp;
                    {/*<button id="searchButton" type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                    </button>*/}
                        </div>
                        <br />
                        <br />
                </form>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                            <th>Picture</th>
                            <th>ID #</th>
                            <th>Name&nbsp;<button className={arrow} onClick={e => this.onSort(e, 'name.lastAsc')}><i className="fas fa-sort-alpha-down"></i></button><button className={arrow} onClick={e => this.onSort(e, 'name.lastDesc')}><i className="fas fa-sort-alpha-down-alt"></i></button></th>
                            <th>Email&nbsp;<button className={arrow} onClick={e => this.onSort(e, 'emailAsc')}><i className="fas fa-sort-alpha-down"></i></button><button className={arrow} onClick={e => this.onSort(e, 'emailDesc')}><i className="fas fa-sort-alpha-down-alt"></i></button></th>
                            <th>Location (City, State)</th>
                            </tr>
                        </thead>
                        {filteredEmployees.map(item => (
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