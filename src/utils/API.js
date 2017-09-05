import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "96ffd6bf8b144044b072772eca05b606&q=";

export default {
  // Search for articles and return first 10
  search: function(query, startYear, endYear) {
    return axios.get(BASEURL + APIKEY + query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  },

  // Retrieves all quotes from the db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new quote to the db
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a quote from the db
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }


};

