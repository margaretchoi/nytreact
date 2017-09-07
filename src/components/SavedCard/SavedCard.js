import React, { Component } from "react";
import "./SavedCard.css";
import API from "../../utils/API";


const SavedCard = props => {

    return (


      <div className="card mb-3">
        <div className="card-header text-muted">
        <i class="fa fa-camera-retro"></i>
          <a className="btn btn-primary float-right btn-sm" onClick={props.deleteArticle}>X</a>
        </div>
        <div className="card-body">
          <p> {props.favorited}</p>
          <small></small>
          <p className="card-text"></p>
        </div>
      </div>




    );
}


export default SavedCard;