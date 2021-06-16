const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
	if (err) return console.log("Error", err);
	console.log("Connected to DB!");
});

module.exports = { mongoose };
