import React, { Component } from "react";
import "./Card.css";
import API from "../../utils/API";

const Card = props => {

    const image = props.image;

    return (

      <div className="card mb-3">
        <div className="card-header text-white bg-primary">
          {props.byline}
        </div>
        <div className="card-body">
          <img src={image ? 'http://www.nyt.com/' + props.image.url : ''} ></img>
          <h4 className="card-title"><a href={props.web_url}>{props.headline}</a></h4>
          <p className="card-text"></p>
        </div>
        <div className="card-footer text-muted">
          <a href="#" className="btn btn-primary" onClick={props.saveArticle}>Favorite</a>
        </div>
      </div>

    );
}


export default Card;

