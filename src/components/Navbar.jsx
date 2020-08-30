import React from "react";
import { css } from "emotion";

const navbar = css`
  .navbar {
    color: white;
    background-color: #323741;
    border-bottom: 3px solid #A60311;
    height: 12rem;
  }
  .navbar-brand {
    font-size: xxx-large;
  }
`

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className={navbar}>
      <nav className="navbar navbar-expand-lg  justify-content-center">
        <div className="navbar-brand">
          Employee Directory
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
