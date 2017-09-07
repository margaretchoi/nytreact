import React from "react";
import "./Search.css";

const Search = props => { 
  return ( 
    <div>
    <h5>Find Articles</h5>
      <form className="inline-form" id="search-form">
       <div className="form-group">
          <div className="form-row d-flex flex-row">
              <div className="col">
                <label>
                Search:
                </label>
                <input 
                  name="search" 
                  type="text"
                  onChange={props.handleInputChange}
                  value={props.search}
                  className="form-control" 
                  />
                
              </div>
              <div className="col">
                <label>
                Start Year:
                </label>
                <input 
                    name="startYear" 
                    onChange={props.handleInputChange}
                    value={props.startYear} 
                    className="form-control" 
                  />
                
              </div>
              <div className="col">
                <label>
                End Year:
                </label>
                <input 
                    name="endYear" 
                    onChange={props.handleInputChange}
                    value={props.endYear} 
                    className="form-control" 
                  />
                
              </div>
              <div className="col-1 align-self-end">
                <span className="align-bottom">
                <input 
                    onClick={props.handleFormSubmit} 
                    className="btn btn-success" 
                    type="submit" 
                    value="Submit" 
                    />
                  </span>
              </div>
            </div>
        </div>
      </form>
    </div>
    );

}

export default Search;