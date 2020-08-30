import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Wrapper from "./components/Wrapper.jsx";
import EmployeeTable from "./components/EmployeeTable.jsx";
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <div className="row mr-0">
        </div>
        <div className="row mr-0">
          <div className="col-md-12 pr-0">
            <Wrapper>
              <div className="App">
                <br />
                <EmployeeTable />
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;