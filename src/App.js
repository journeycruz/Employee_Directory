import React from "react";
import { JsonToTable } from "react-json-to-table";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
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
        <Wrapper>
          <div className="App">
            <h1>Employee Directory</h1>
            <h5>Listed Below Are Your Current Employees</h5>
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