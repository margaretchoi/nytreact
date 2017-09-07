import React from "react";
import Card from "../Card";
import "./List.css";


const List = props => 

	      <div>
			
			{console.log("Props", props.results)}

			
			<h5>Searching for {props.search} in {props.startYear} to {props.endYear} </h5>
				
			{ props.results.map(article =>
				<Card
					headline={article.headline.main}
					byline={article.byline.original}
					web_url={article.web_url}
					image={article.multimedia[1]}
					key={article._id}
					saveArticle={props.saveArticle}
					snippet={article.snippet}
				/>)
			}

	      </div>


export default List;
