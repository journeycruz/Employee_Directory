import React from "react";
import { JsonToTable } from "react-json-to-table";
import ReactDOM from "react-dom";
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Employees from "./Employees.json";

function App() {

  return (
    <Wrapper>
      <div className="App">
        <h1>Employee Directory</h1>
        <h5>Listed Below Are Your Current Employees</h5>
        <br />
        <JsonToTable json={ Employees } />
      </div>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;