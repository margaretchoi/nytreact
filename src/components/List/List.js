import React, { Component } from "react";
import Card from "../Card";
import "./List.css";


const List = props =>

	      <div>
			<h5>Showing results for {props.search}</h5>
			{console.log("Props", props.results)}
			{ props.results.map(article =>
				<Card
					headline={article.headline.main}
					byline={article.byline.original}
					uri={article.uri}
					image={article.multimedia[0]}
					key={article._id}
					saveArticle={props.saveArticle}
				/>
			)}

	      </div>

export default List;
