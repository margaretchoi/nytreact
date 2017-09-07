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
    this.deleteArticle = this.deleteArticle.bind(this);
  }
  // Getting all quotes once the component has mounted
  componentDidMount() {
    this.getArticles();
  }
  
  getArticles() {
    API.getArticles().then((res) => {
      // const favoriteArticles = res.data.filter(article => article.favorited);
      this.setState({ articles: res.data });
      console.log('ARTICLE ARRAY', this.state.articles);
    });
  }

  deleteArticle(id) {
   API.deleteArticle(id).then(this.getArticles);
  }

  
  render() {
    return (
      <div>
        <h5>Your Favorite Articles</h5>
        <div className="container">
            { this.state.articles.map(articles =>
              <SavedCard
                key={articles._id}
                deleteArticle={this.deleteArticle}
                favorited={articles.favorited}
              />)
            }
          <form>
           <input 
              onClick={this.getArticles} 
              className="btn btn-success" 
              type="submit" 
              value="Submit" 
              />
          </form>
        </div>
      </div>
    );
  }
}


export default Save;