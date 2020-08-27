import React from "react";
import { JsonToTable } from "react-json-to-table";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "./components/SearchForm";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Employees from "./Employees.json";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <div className="row mr-0">
          <div className="col-md-12">
            <SearchForm /> 
          </div>
        </div>
        <Wrapper>
          <div className="App">
            <br />
            <JsonToTable json={ Employees } />
          </div>
          </Wrapper>
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;