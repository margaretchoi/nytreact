import React, { Component } from "react";
import "./Card.css";
import API from "../../utils/API";

const Card = props => {

    const image = props.image;

    return (

      <div className="card mb-3">
        <div className="card-header">
          <a className="float-right btn-sm" onClick={props.saveArticle}><i className="fa fa-heart-o"></i></a>
        </div>
        <div className="card-body">
          <a href={props.web_url}><img className="rounded float-left mr-3" src={image ? 'http://www.nyt.com/' + props.image.url : ''} ></img></a>
          <h4 className="card-title"><a href={props.web_url}>{props.headline}</a></h4>
          <p> {props.snippet}</p>
          <small> {props.byline}</small>
          <p className="card-text"></p>
        </div>
      </div>

    );
}


export default Card;

