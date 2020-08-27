import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-inline justify-content-center">
        <label htmlFor="language" id="formLabel">Find Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
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
    </form>
  );
}

export default SearchForm;
