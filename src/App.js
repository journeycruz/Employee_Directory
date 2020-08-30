import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import SearchForm from "./components/SearchForm";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper.jsx";
import EmployeeTable from "./components/EmployeeTable.jsx";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <div className="row mr-0">
          <div className="col-md-12">
            {/* <SearchForm />  */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Wrapper>
              <div className="App">
                <br />
                <EmployeeTable />
              </div>
            </Wrapper>
          </div>
        </div>
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;