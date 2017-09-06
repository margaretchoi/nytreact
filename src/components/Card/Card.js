import React, { Component } from "react";
import "./Card.css";
import API from "../../utils/API";

const Card = props => {

    return (
    <div className="card">
      <div className="card-body">
        <div className="img-container">
          <img src="${props.image.url}"/>
        </div>
        <div className="content">
        	 <strong>
           <a href="${props.uri}">{props.headline}</a>
           <br/>
           {props.byline}
           </strong> 
        </div>
    	<div >
    		<button className="btn-save" onClick={props.saveArticle}>
    			Save
    		</button>
      </div>
        <div >
    	 	<span className="btn-delete">
    	    	𝘅
    	    </span>
    	</div>
      </div>
    </div>
    );
}


export default Card;

