import React, { Component } from "react";
import Card from "../Card";
import "./List.css";


const List = props =>

	      <div>
			<h2>Check out this awesome list</h2>
			{console.log(props)}
	      </div>


// class List extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 		  articles: articles
// 		};

// 		// Binding the saveArticle method to the App component instance
// 		this.saveArticle = this.saveArticle.bind(this);
// 		this.removeArticle = this.removeArticle.bind(this);
// 	}


//   saveArticle(id) {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     let articles = this.state.articles.filter(article => article.id === id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ articles });
//   }


//    removeArticle(id) {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     let articles = this.state.articles.filter(article => article.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ articles });
//   }


// 	render() { 
// 	    return (
// 	      <div>
// 			<h2>Check out this awesome list</h2>
// 			{this.state.articles.map(article =>
// 				<Card
// 					removeArticle={this.removeArticle}
// 					saveArticle={this.saveArticle}
// 					id={article.id}
// 					name={article.name}
// 					url={article.url}
// 				/>
// 			)}
// 			<div></div>
// 			<h2>Saved articles!</h2>

// 	      </div>
// 	    );
// 	}
// }

export default List;
