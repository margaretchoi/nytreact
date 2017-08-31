import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "96ffd6bf8b144044b072772eca05b606&q=";

export default {
  search: function(query, startYear, endYear) {
    return axios.get(BASEURL + APIKEY + query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};

