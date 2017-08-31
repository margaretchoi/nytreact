import React from "react";
import "./Search.css";

const Search = props => { 
  return ( 
    <div className="form-group">
    <h2>Search Form</h2>
      <form id="search-form">
        <label>
        Search:
        <input 
          name="search" 
          type="text"
          onChange={props.handleInputChange}
          value={props.search} 
          />
        </label>
        <label>
        Start Year:
        <input 
            name="startYear" 
            onChange={props.handleInputChange}
            value={props.startYear} 
          />
        </label>
        <label>
        End Year:
        <input 
            name="endYear" 
            onChange={props.handleInputChange}
            value={props.endYear} 
          />
        </label>
        <input 
            onClick={props.handleFormSubmit} 
            className="btn btn-success" 
            type="submit" 
            value="Submit" 
            />
      </form>
    </div>
    );

}

export default Search;