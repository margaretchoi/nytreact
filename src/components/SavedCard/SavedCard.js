import React, { Component } from "react";
import "./SavedCard.css";
import API from "../../utils/API";


const SavedCard = props => {

    return (
	    <div className="card">
	      <div className="img-container">
	        <img src=''/>
	      </div>
	      <div className="content">
	      	 <strong>
	         <a href="">Card here</a>
	         <br/>
	       		{props.key}
	         </strong> 
	      </div>
	    <div className="btn-delete">
	  	 	<span onClick={props.deleteArticle}>
	  	    	𝘅
	  	    </span>
	  	</div>
	    </div>
    );
}


export default SavedCard;