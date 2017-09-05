import React, { Component } from "react";
import "./Card.css";

let Card = props => {
	return(
    <div className="card">
      <div className="img-container">
        <img src=''/>
      </div>
      <div className="content">
      	 <strong>
         <a href="${props.uri}">{props.headline}</a>
         <br/>
         {props.byline}
         </strong> 
      </div>
  	<div className="btn-save">
  		<button >
  			Save
  		</button>
      </div>
      <div className="btn-save">
  	 	<span >
  	    	𝘅
  	    </span>
  	</div>
    </div>

  );
}



export default Card;