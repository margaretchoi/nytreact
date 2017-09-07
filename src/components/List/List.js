import React, { Component } from "react";
import Card from "../Card";
import "./List.css";


const List = props => 

	      <div>
			
			{console.log("Props", props.results)}

			
			<h5>Showing results for {props.search} in {props.startYear} to {props.endYear} </h5>
				
			{ props.results.map(article =>
				<Card
					headline={article.headline.main}
					byline={article.byline.original}
					web_url={article.web_url}
					image={article.multimedia[0]}
					key={article._id}
					saveArticle={props.saveArticle}
				/>)
			}

	      </div>


export default List;
