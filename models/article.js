const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the article schema
let ArticleSchema = new Schema ({

	title: {
		type: String,
		require: true
	},
	url: {
		type: String,
		require: true
	},
	favorited: {
		type: Boolean,
		default: false
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

// Create the article model with the ArticleSchema
let Article = mongoose.model("Article", ArticleSchema);

// Export the module
module.exports = Article;