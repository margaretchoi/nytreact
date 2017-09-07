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
			endYear: 2017,
			favorites: []
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
	};

	// Save article to DB 
	saveArticle() {
		const newArticle = this.state.results;
		API.saveArticle(newArticle).then();
		alert('Article saved');
	}

	render() { 

		return (

			<div>
				<div className="row">
					<div className="col-12">
						<div className="bd-header">
						  <h1 className="display-3 text-center">NYT React</h1>
						</div>
					</div>
				</div>
			<div className="container-fluid col-10">
				<div className="row mb-5">
					<div className="col-12">
						<Search 
							handleInputChange={this.handleInputChange}
							handleFormSubmit={this.handleFormSubmit}
							value={this.state.search}
						/>
					</div>
				</div>
				 <div className="row mb-5">
					<div className="col-12">
						<List 
							results={this.state.results}
							saveArticle={this.saveArticle}
							search={this.state.search}
							startYear={this.state.startYear}
							endYear={this.state.endYear}
						 />
					 </div>
				</div>
				<div className="row mb-5">
					<div className="col-12">
						<Save 
						/>
					</div>
				</div>
				</div>
			</div>

		) 
	
	}

}

export default Main;