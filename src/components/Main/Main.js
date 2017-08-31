import React, { Component } from "react";
import Search from '../Search';
import Save from '../Save';
import List from '../List';
import API from "../../utils/API";
import "./Main.css";

class Main extends Component {

	state = {
		results: [],
		search: "",
		startYear: 1875,
		endYear: 2017
	};

	searchArticles = (query, startYear, endYear) => {
		console.log('Searching articles for ' + query + startYear + endYear);
		API.search(query, startYear, endYear)
		  .then(res => this.setState({ results: res.data}))
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

	render() { 
		return (
			<div>

				<Search 
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
					value={this.state.search}
				/>
				
				<List 
					results={this.state.results.response}
				 />
				<Save />

			</div>

		) 
	
	}

}

export default Main;