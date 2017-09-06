import React, { Component } from "react";
import Card from "../Card";
import SavedCard from "../SavedCard";
import API from "../../utils/API";
import "./Save.css";

class Save extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding getArticles to this component since we'll be passing this method to 
    // other components to use
    this.getArticles = this.getArticles.bind(this);
  }
  // Getting all quotes once the component has mounted
  componentDidMount() {
    this.getArticles();
  }
  
  getArticles() {
    API.getArticles().then((res) => {
      // const favoriteArticles = res.data.filter(article => article.favorited);
      this.setState({ articles: [res.data] });
    });
  }

  // A helper method for rendering one panel for each article
  renderArticles() {
    return this.state.articles.map(articles => {
      <SavedCard
          key={articles._id}
      />
    });
  }

  
  render() {
    return (
      <div>
        <h5>Your Favorite Articles</h5>
        <div className="container">
          <div className="row">
            {this.renderArticles()}
          </div>
        </div>
      </div>
    );
  }
}


export default Save;