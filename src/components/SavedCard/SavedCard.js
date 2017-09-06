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
	         <a href=""></a>
	         <br/>
	       
	         </strong> 
	      </div>
	  	<div className="btn-save">
	  		<button onClick="">
	  			Save
	  		</button>
	    </div>
	    <div className="">
	  	 	<span >
	  	    	𝘅
	  	    </span>
	  	</div>
	    </div>
    );
}


export default SavedCard;