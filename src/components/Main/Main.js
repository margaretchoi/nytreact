import React, { Component } from "react";
import Search from '../Search';
import Save from '../Save';
import List from '../List';
import API from "../../utils/API";
import "./Main.css";

class Main extends Component {

	constructor() { 	
		super();
		
		this.state = {
			results: [],
			search: "italy",
			startYear: 1875,
			endYear: 2017
		};

		this.saveArticle = this.saveArticle.bind(this);
	}


	searchArticles = (query, startYear, endYear) => {
		console.log('Searching articles for ' + query + startYear + endYear);
		API.search(query, startYear, endYear)
		  .then(res => this.setState({ results: res.data.response.docs}))
		  .catch(err => console.log(err));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.searchArticles(this.state.search, this.state.startYear, this.state.endYear);

		console.log('Submitting');
	};

	handleInputChange = event => {
	    const value = event.target.value;
    	const name = event.target.name;

    	this.setState({ 
    		[name]: value
    	});

    	console.log("UPDATED STATE", this.state);
	};

	handleButtonClick = event => {
	    const newQuote = this.state.inputValue;
	    this.setState({ inputValue: "" });
	}

	// Send to DB
	// favoriteArticle(article) {
 //    	const newArticle = this.state.inputValue;
 //    	API.favoriteArticle(article).then(this.getArticles);
	// }

	// deleteArticle(id) {
	// 	API.deleteArticle(id).then(this.getArticles);
	// }

	getArticles() {
		API.getArticles().then((res) => {
		  // const favoriteArticles = res.data.filter(article => article.favorited);
		  this.setState({ articles: res.data });
		});
	}

	// Save article to DB 
	saveArticle() {
		const newArticle = this.state.results;
		API.saveArticle(newArticle).then(this.props.getArticles);
		console.log('Article saved');
	}

	render() { 
		return (

			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="jumbotron">
						  <h1 className="display-3">NYT React</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Search 
							handleInputChange={this.handleInputChange}
							handleFormSubmit={this.handleFormSubmit}
							value={this.state.search}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<List 
							results={this.state.results}
							saveArticle={this.saveArticle}
						 />
					 </div>
				</div>
				<div className="row">
					<div className="col-12">
						<Save 
							getArticles={this.getArticles}
						/>
					</div>
				</div>

			</div>

		) 
	
	}

}

export default Main;