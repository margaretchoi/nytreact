import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "96ffd6bf8b144044b072772eca05b606&q=";

const API = {
  // Search for articles and return first 10
  search: function(query, startYear, endYear) {
    return axios.get(BASEURL + APIKEY + query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  },
  // Retrieves all articles from the db
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(text) {
    return axios.post("/api/articles", { text });
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete("/api/articles/${id}");
  },

};

export default API; 