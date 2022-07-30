const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.articles = require('./article.model')(mongoose)
db.comments = require('./comment.model')(mongoose)

module.exports = db;